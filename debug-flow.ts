import { chromium, type Locator, type Page } from 'playwright';
import fs from 'fs';
import path from 'path';

type FlowStepBase = { type: string; [key: string]: unknown };
type SetViewportStep = FlowStepBase & { type: 'setViewport'; width: number; height: number };
type NavigateStep = FlowStepBase & {
  type: 'navigate';
  url: string;
  assertedEvents?: Array<{ type: string; url?: string; title?: string }>;
};
type ClickStep = FlowStepBase & { type: 'click'; selectors: string[][] };
type ChangeStep = FlowStepBase & { type: 'change'; selectors: string[][]; value: string };
type FlowStep = SetViewportStep | NavigateStep | ClickStep | ChangeStep | FlowStepBase;

type Flow = {
  title?: string;
  steps: FlowStep[];
};

type NetworkLogEntry = {
  ordinal: number;
  timestamp: string;
  request: {
    url: string;
    method: string;
    resourceType: string;
    headers: Record<string, string>;
    postData?: string;
    frameUrl?: string;
    isNavigationRequest: boolean;
    redirectedFrom: boolean;
  };
  response?: {
    url: string;
    status: number;
    statusText: string;
    headers: Record<string, string>;
    fromServiceWorker: boolean;
    timing?: unknown;
    contentType?: string;
    bodyLength?: number;
    bodySnippet?: string;
    bodyTruncated?: boolean;
    bodyError?: string;
  };
  failure?: {
    errorText?: string;
  };
  completedAt?: string;
};

type ConsoleLogEntry = {
  timestamp: string;
  type: string;
  text: string;
  args?: string[];
};

type StepResult = {
  index: number;
  type: string;
  detail: Record<string, unknown>;
  startedAt: string;
  completedAt: string;
  durationMs: number;
  status: 'ok' | 'error';
  errorMessage?: string;
};

const TEXTUAL_CONTENT_TYPES = [
  'application/json',
  'application/javascript',
  'application/xml',
  'application/xhtml+xml',
  'application/x-www-form-urlencoded'
];

function isTextual(contentType?: string) {
  if (!contentType) return false;
  const lower = contentType.toLowerCase();
  if (lower.startsWith('text/')) return true;
  return TEXTUAL_CONTENT_TYPES.some((type) => lower.startsWith(type));
}

function safeSnippet(input: string, limit = 2000) {
  if (input.length <= limit) {
    return { snippet: input, truncated: false };
  }
  return {
    snippet: `${input.slice(0, limit)}...`,
    truncated: true,
  };
}

function ensureSelectors(step: { selectors?: string[][] }, index: number): string[][] {
  if (!Array.isArray(step.selectors) || step.selectors.length === 0) {
    throw new Error(`Step ${index}: missing selectors definition`);
  }
  return step.selectors;
}

type Chainable = Page | Locator;

type LocatorResolver = (base: Chainable, value: string) => Locator;

const locatorResolvers: LocatorResolver[] = [
  (base, value) => {
    if (typeof (base as any).getByLabel === 'function') {
      return (base as any).getByLabel(value, { exact: true });
    }
    return (base as any).locator(`label:has-text("${value.replace(/"/g, '\\"')}")`);
  },
  (base, value) => {
    if (typeof (base as any).getByRole === 'function') {
      return (base as any).getByRole('combobox', { name: value });
    }
    return (base as any).locator(`*[role="combobox"][aria-label="${value.replace(/"/g, '\\"')}"]`);
  },
  (base, value) => (base as any).locator(`*[aria-label="${value.replace(/"/g, '\\"')}"]`),
];

function resolveLocator(base: Chainable, token: string): Locator {
  const trimmed = token.trim();
  if (trimmed.startsWith('aria/')) {
    const value = trimmed.slice(5);
    const errors: unknown[] = [];
    for (const resolver of locatorResolvers) {
      try {
        const locator = resolver(base, value);
        if (locator) {
          return locator;
        }
      } catch (error) {
        errors.push(error);
      }
    }
    return (base as any).locator(`text="${value.replace(/"/g, '\\"')}"`);
  }
  if (trimmed.startsWith('text/')) {
    const value = trimmed.slice(5);
    if (typeof (base as any).getByText === 'function') {
      return (base as any).getByText(value, { exact: true });
    }
    return (base as any).locator(`text="${value.replace(/"/g, '\\"')}"`);
  }
  return (base as any).locator(trimmed);
}

function buildLocator(page: Page, selectors: string[][]): Locator {
  for (const chain of selectors) {
    if (!Array.isArray(chain) || chain.length === 0) continue;
    let current: Locator | null = null;
    let base: Chainable = page;
    try {
      for (const token of chain) {
        const locator = resolveLocator(base, token);
        current = locator;
        base = locator;
      }
      if (current) {
        return current;
      }
    } catch {
      // Try next chain
    }
  }
  throw new Error('No usable selector chain provided');
}

async function executeStep(page: Page, step: FlowStep, index: number): Promise<StepResult> {
  const startedAt = new Date().toISOString();
  const startTime = Date.now();
  const detail: Record<string, unknown> = {};

  try {
    switch (step.type) {
      case 'setViewport': {
        const viewportStep = step as SetViewportStep;
        if (typeof viewportStep.width !== 'number' || typeof viewportStep.height !== 'number') {
          throw new Error('Invalid viewport dimensions');
        }
        await page.setViewportSize({ width: viewportStep.width, height: viewportStep.height });
        detail.viewport = { width: viewportStep.width, height: viewportStep.height };
        break;
      }
      case 'navigate': {
        const navigateStep = step as NavigateStep;
        if (typeof navigateStep.url !== 'string') {
          throw new Error('Navigate step is missing url');
        }
        const response = await page.goto(navigateStep.url, { waitUntil: 'domcontentloaded', timeout: 60000 });
        detail.url = navigateStep.url;
        detail.responseStatus = response?.status();
        detail.responseOk = response?.ok();
        detail.finalUrl = page.url();
        if (navigateStep.assertedEvents && navigateStep.assertedEvents.length > 0) {
          detail.assertedEvents = navigateStep.assertedEvents;
          const navigationExpectation = navigateStep.assertedEvents.find((event) => event.type === 'navigation');
          if (navigationExpectation?.url) {
            const currentUrl = page.url();
            detail.expectedUrl = navigationExpectation.url;
            if (currentUrl !== navigationExpectation.url) {
              throw new Error(`Expected navigation to ${navigationExpectation.url} but current url is ${currentUrl}`);
            }
          }
          if (navigationExpectation?.title) {
            const actualTitle = await page.title();
            detail.expectedTitle = navigationExpectation.title;
            detail.actualTitle = actualTitle;
            if (navigationExpectation.title !== actualTitle) {
              throw new Error(`Expected title "${navigationExpectation.title}" but received "${actualTitle}"`);
            }
          }
        }
        try {
          await page.waitForLoadState('networkidle', { timeout: 15000 });
        } catch {
          // ignore timeout when network stays active
        }
        break;
      }
      case 'click': {
        const clickStep = step as ClickStep;
        const selectors = ensureSelectors(clickStep, index);
        const locator = buildLocator(page, selectors);
        detail.selectorCandidates = selectors;
        await locator.waitFor({ state: 'visible', timeout: 15000 });
        await locator.click({ timeout: 15000 });
        break;
      }
      case 'change': {
        const changeStep = step as ChangeStep;
        const selectors = ensureSelectors(changeStep, index);
        const locator = buildLocator(page, selectors);
        detail.selectorCandidates = selectors;
        detail.value = changeStep.value;
        await locator.waitFor({ state: 'attached', timeout: 15000 });
        let applied = false;
        const value = changeStep.value;
        try {
          await locator.selectOption({ value });
          applied = true;
          detail.changeMethod = 'selectOption(value)';
        } catch (errorValue) {
          try {
            await locator.selectOption({ label: value });
            applied = true;
            detail.changeMethod = 'selectOption(label)';
          } catch {
            // ignore and try fill
          }
        }
        if (!applied) {
          try {
            await locator.fill(value, { timeout: 15000 });
            applied = true;
            detail.changeMethod = 'fill';
          } catch {
            // ignore and try type
          }
        }
        if (!applied) {
          try {
            await locator.type(value, { delay: 50, timeout: 15000 });
            applied = true;
            detail.changeMethod = 'type';
          } catch (finalError) {
            detail.changeMethod = 'failed';
            throw finalError;
          }
        }
        break;
      }
      default:
        throw new Error(`Unsupported step type: ${step.type}`);
    }

    const completedAt = new Date().toISOString();
    return {
      index,
      type: step.type,
      detail,
      startedAt,
      completedAt,
      durationMs: Date.now() - startTime,
      status: 'ok',
    };
  } catch (error) {
    const completedAt = new Date().toISOString();
    return {
      index,
      type: step.type,
      detail,
      startedAt,
      completedAt,
      durationMs: Date.now() - startTime,
      status: 'error',
      errorMessage: error instanceof Error ? error.message : String(error),
    };
  }
}

async function main() {
  const flowPath = process.argv[2];
  if (!flowPath) {
    console.error('Error: you must provide a flow JSON file path.');
    console.log('Usage: pnpm tsx debug-flow.ts <path_to_flow.json>');
    process.exit(1);
  }

  const resolvedFlowPath = path.resolve(flowPath);
  if (!fs.existsSync(resolvedFlowPath)) {
    console.error(`Error: flow file not found at ${resolvedFlowPath}`);
    process.exit(1);
  }

  const flow: Flow = JSON.parse(fs.readFileSync(resolvedFlowPath, 'utf-8'));
  if (!Array.isArray(flow.steps)) {
    console.error('Error: flow file does not contain steps array.');
    process.exit(1);
  }

  const startedAt = new Date().toISOString();
  const startTimeMs = Date.now();

  const flowName = path.basename(resolvedFlowPath, path.extname(resolvedFlowPath)) || 'flow';
  const sessionId = `${flowName}-${startedAt.replace(/[:.]/g, '-')}`;
  const logsDir = path.resolve('logs', 'flows');
  fs.mkdirSync(logsDir, { recursive: true });

  const networkLogPath = path.join(logsDir, `${sessionId}-network.json`);
  const consoleLogPath = path.join(logsDir, `${sessionId}-console.json`);
  const metaPath = path.join(logsDir, `${sessionId}-meta.json`);
  const tracePath = path.join(logsDir, `${sessionId}-trace.zip`);

  console.log('---------------------------------------------');
  console.log(`Flow file   : ${resolvedFlowPath}`);
  console.log(`Session id  : ${sessionId}`);
  console.log(`Logs folder : ${logsDir}`);
  console.log('---------------------------------------------');

  const browser = await chromium.launch({ headless: false, slowMo: 100 });
  const context = await browser.newContext();
  let traceStarted = false;
  try {
    await context.tracing.start({ screenshots: true, snapshots: true, sources: true });
    traceStarted = true;
  } catch (error) {
    console.warn('Warning: failed to start tracing', error);
  }

  const page = await context.newPage();

  const networkLog: NetworkLogEntry[] = [];
  const consoleLog: ConsoleLogEntry[] = [];
  const stepResults: StepResult[] = [];
  const requestMap = new Map<any, NetworkLogEntry>();
  const responseTasks: Promise<void>[] = [];
  let ordinal = 0;

  context.on('request', (request) => {
    ordinal += 1;
    let frameUrl: string | undefined;
    try {
      frameUrl = request.frame()?.url();
    } catch {
      frameUrl = undefined;
    }
    const entry: NetworkLogEntry = {
      ordinal,
      timestamp: new Date().toISOString(),
      request: {
        url: request.url(),
        method: request.method(),
        resourceType: request.resourceType(),
        headers: request.headers(),
        postData: request.postData() || undefined,
        frameUrl,
        isNavigationRequest: request.isNavigationRequest(),
        redirectedFrom: Boolean(request.redirectedFrom()),
      },
    };
    networkLog.push(entry);
    requestMap.set(request, entry);
  });

  context.on('requestfinished', (request) => {
    const entry = requestMap.get(request);
    if (entry) {
      entry.completedAt = new Date().toISOString();
    }
  });

  context.on('requestfailed', (request) => {
    const entry = requestMap.get(request);
    if (entry) {
      entry.failure = {
        errorText: request.failure()?.errorText,
      };
      entry.completedAt = new Date().toISOString();
    }
  });

  context.on('response', (response) => {
    const request = response.request();
    const entry = requestMap.get(request);
    if (!entry) {
      return;
    }

    const work = async () => {
      const headers = response.headers();
      const contentType = headers['content-type'];
      entry.response = {
        url: response.url(),
        status: response.status(),
        statusText: response.statusText(),
        headers,
        fromServiceWorker: response.fromServiceWorker(),
        contentType,
      };

      try {
        const timingGetter = (response as any).timing?.bind(response as any);
        if (typeof timingGetter === 'function') {
          entry.response.timing = timingGetter();
        }
      } catch (timingError) {
        entry.response.timing = String(timingError);
      }

      if (isTextual(contentType)) {
        try {
          const bodyText = await response.text();
          entry.response.bodyLength = bodyText.length;
          const { snippet, truncated } = safeSnippet(bodyText);
          entry.response.bodySnippet = snippet;
          entry.response.bodyTruncated = truncated;
        } catch (bodyError: any) {
          entry.response.bodyError = bodyError?.message || String(bodyError);
        }
      }
    };

    responseTasks.push(work());
  });

  page.on('console', async (message) => {
    const args = await Promise.all(
      message
        .args()
        .map((arg) => arg.jsonValue().then((value) => JSON.stringify(value)).catch((error) => `Unserializable: ${error}`)),
    );
    consoleLog.push({
      timestamp: new Date().toISOString(),
      type: message.type(),
      text: message.text(),
      args,
    });
  });

  page.on('pageerror', (error) => {
    consoleLog.push({
      timestamp: new Date().toISOString(),
      type: 'pageerror',
      text: error.message,
    });
  });

  console.log('Launching flow. Playwright inspector will attach if PWDEBUG is set.');

  let completedAt: string | null = null;

  try {
    for (let i = 0; i < flow.steps.length; i += 1) {
      const step = flow.steps[i];
      console.log(`Executing step ${i}: ${step.type}`);
      const result = await executeStep(page, step, i);
      stepResults.push(result);
      if (result.status === 'error') {
        throw new Error(`Step ${i} (${step.type}) failed: ${result.errorMessage}`);
      }
    }
    completedAt = new Date().toISOString();
    console.log('Flow execution finished. Browser remains open for manual inspection.');
  } catch (error) {
    completedAt = new Date().toISOString();
    console.error('Flow execution failed:', error);
    throw error;
  } finally {
    await Promise.allSettled(responseTasks);
    if (traceStarted) {
      try {
        await context.tracing.stop({ path: tracePath });
      } catch (stopError) {
        console.warn('Warning: failed to stop tracing', stopError);
      }
    }

    fs.writeFileSync(networkLogPath, JSON.stringify(networkLog, null, 2), 'utf-8');
    fs.writeFileSync(consoleLogPath, JSON.stringify(consoleLog, null, 2), 'utf-8');

    const meta = {
      sessionId,
      flowPath: resolvedFlowPath,
      flowTitle: flow.title ?? null,
      startedAt,
      completedAt,
      durationMs: Date.now() - startTimeMs,
      stepCount: flow.steps.length,
      stepResults,
      artifacts: {
        networkLogPath,
        consoleLogPath,
        tracePath: traceStarted ? tracePath : null,
      },
    };

    fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2), 'utf-8');

    console.log('Artifacts ready:');
    console.log(`  Network log : ${networkLogPath}`);
    console.log(`  Console log : ${consoleLogPath}`);
    console.log(`  Trace file  : ${traceStarted ? tracePath : 'not available'}`);
    console.log(`  Meta file   : ${metaPath}`);
  }
}

main().catch((error) => {
  console.error('Unhandled error while running debug flow:', error);
  process.exit(1);
});
