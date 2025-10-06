import { test, expect, Page } from '@playwright/test';
import fs from 'fs';
import path from 'path';

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
  pageUrl: string;
  timestamp: string;
  type: string;
  text: string;
  args?: string[];
};

const TEXTUAL_CONTENT_TYPES = [
  'application/json',
  'application/javascript',
  'application/xml',
  'application/xhtml+xml',
  'application/x-www-form-urlencoded'
];

const START_URL = 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx';

const PROFILE = {
  serviceId: 'bkt873048',
  publicKey: '28db94e270580be60f6e00285a7d8141f',
  agendaId: 'bkt873048',
  src: 'https://www.citaconsular.es/es/hosteds/widgetdefault/28db94e270580be60f6e00285a7d8141f/bkt873048',
};

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
  return { snippet: `${input.slice(0, limit)}...`, truncated: true };
}

function pushInfo(consoleLog: ConsoleLogEntry[], page: Page, text: string) {
  consoleLog.push({
    pageUrl: page.url(),
    timestamp: new Date().toISOString(),
    type: 'info',
    text,
    args: [],
  });
}

async function attachConsoleListeners(page: Page, collector: ConsoleLogEntry[]) {
  page.on('console', async (message) => {
    const args = await Promise.all(
      message
        .args()
        .map((arg) => arg.jsonValue().then((value) => JSON.stringify(value)).catch((error) => `Unserializable: ${error}`)),
    );
    collector.push({
      pageUrl: page.url(),
      timestamp: new Date().toISOString(),
      type: message.type(),
      text: message.text(),
      args,
    });
  });

  page.on('pageerror', (error) => {
    collector.push({
      pageUrl: page.url(),
      timestamp: new Date().toISOString(),
      type: 'pageerror',
      text: error.message,
    });
  });
}

async function dismissSharepointBanners(page: Page, consoleLog: ConsoleLogEntry[]) {
  const candidateButtons = [
    page.getByRole('button', { name: /aceptar todas/i }),
    page.getByRole('button', { name: /aceptar/i }),
    page.getByRole('button', { name: /continuar/i }),
    page.getByRole('button', { name: /cerrar/i }),
  ];

  for (const locator of candidateButtons) {
    try {
      if (await locator.isVisible({ timeout: 1000 })) {
        await locator.click({ timeout: 5000 });
        pushInfo(consoleLog, page, `Click en banner/cookie: ${await locator.innerText().catch(() => 'desconocido')}`);
        break;
      }
    } catch {
      // Ignore missing banners.
    }
  }
}

function buildOnlineBookingUrl(start: Date, end: Date) {
  const callback = `jQuery${Math.floor(Math.random() * 1e12)}_${Date.now()}`;
  const params = new URLSearchParams({
    callback,
    type: 'default',
    publickey: PROFILE.publicKey,
    lang: 'es',
    version: '5',
    src: PROFILE.src,
    srvsrc: 'https://citaconsular.es',
    start: start.toISOString().slice(0, 10),
    end: end.toISOString().slice(0, 10),
    selectedPeople: '1',
    _: Date.now().toString(),
  });
  params.append('services[]', PROFILE.serviceId);
  params.append('agendas[]', PROFILE.agendaId);
  return `https://www.citaconsular.es/onlinebookings/datetime/?${params.toString()}`;
}

async function fetchAgendaSnapshot(page: Page, consoleLog: ConsoleLogEntry[]) {
  try {
    const start = new Date();
    const end = new Date(Date.now() + 30 * 86400 * 1000);
    const url = buildOnlineBookingUrl(start, end);
    const result = await page.evaluate(async (targetUrl) => {
      try {
        const response = await fetch(targetUrl, { credentials: 'include' });
        const text = await response.text();
        return {
          ok: response.ok,
          status: response.status,
          length: text.length,
          preview: text.slice(0, 200),
        };
      } catch (error: any) {
        return { ok: false, status: 0, length: 0, preview: String(error) };
      }
    }, url);

    pushInfo(
      consoleLog,
      page,
      `Fetch onlinebookings (${url}) -> status ${result.status}, length ${result.length}`,
    );

    if (!result.ok) {
      pushInfo(consoleLog, page, `Detalle fetch onlinebookings: ${result.preview}`);
    }
  } catch (error) {
    pushInfo(consoleLog, page, `Error al lanzar fetch de agenda: ${error}`);
  }
}

test.describe('Flujo Turismo Schengen', () => {
  test('flujo completo con captura integral', async ({ page, context }) => {
    test.setTimeout(180000);

    const startedAt = new Date();
    const sessionId = `turismo-test-${startedAt.toISOString().replace(/[:.]/g, '-')}`;
    const logsDir = path.resolve('logs', 'playwright-tests');
    fs.mkdirSync(logsDir, { recursive: true });

    const networkLog: NetworkLogEntry[] = [];
    const consoleLog: ConsoleLogEntry[] = [];
    const requestMap = new Map<any, NetworkLogEntry>();
    const responseTasks: Promise<void>[] = [];
    let ordinal = 0;
    let traceStarted = false;
    const tracePath = path.join(logsDir, `${sessionId}-trace.zip`);

    try {
      await context.tracing.start({ screenshots: true, snapshots: true, sources: true });
      traceStarted = true;
    } catch (error) {
      console.warn('No se pudo iniciar tracing:', error);
    }

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
      if (!entry) return;

      const task = (async () => {
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
      })();

      responseTasks.push(task);
    });

    await attachConsoleListeners(page, consoleLog);
    context.on('page', async (newPage) => {
      await attachConsoleListeners(newPage, consoleLog);
    });

    const startedAtIso = startedAt.toISOString();
    let completedAtIso: string | null = null;
    let testError: unknown;

    try {
      await page.goto(START_URL, { waitUntil: 'domcontentloaded' });
      await dismissSharepointBanners(page, consoleLog);

      await expect(page.getByLabel('Categorías servicios')).toBeVisible({ timeout: 20000 });

      await page.getByLabel('Categorías servicios').selectOption('Visados');
      await page.getByLabel('Servicios consulares').selectOption('Visado de estancia (visado Schengen)');
      const acceptButton = page.getByRole('button', { name: 'Aceptar' });
      if (await acceptButton.count()) {
        await acceptButton.first().click({ timeout: 20000 });
      } else {
        pushInfo(consoleLog, page, 'Botón "Aceptar" no disponible.');
      }
      await page.getByRole('button', { name: 'Buscar' }).click({ timeout: 20000 });

      await page.goto('https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx?scco=Cuba&scd=166&scca=Visados&scs=Visado+de+estancia+(visado+Schengen)', {
        waitUntil: 'domcontentloaded',
      });

      await dismissSharepointBanners(page, consoleLog);

      await page.getByLabel('Categorías servicios').selectOption('Certificados');
      await page.getByLabel('Categorías servicios').selectOption('Visados');
      await page.getByLabel('Países y territorios').selectOption('Bulgaria');
      await page.getByLabel('Países y territorios').selectOption('Cuba');
      await page.getByLabel('Delegaciones').selectOption('166');
      await page.getByLabel('Servicios consulares').selectOption('Visado de estancia (visado Schengen)');
      await page.getByRole('button', { name: 'Buscar' }).click({ timeout: 20000 });

      await page.goto('https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx?scco=Cuba&scd=166&scca=Visados&scs=Visado+de+estancia+(visado+Schengen)', {
        waitUntil: 'domcontentloaded',
      });

      const popupPromise = page.waitForEvent('popup');
      await page.getByRole('link', { name: 'Reservar cita de visado Schengen Se abre en ventana nueva' }).click({ timeout: 20000 });
      const popup = await popupPromise;
      await dismissSharepointBanners(popup, consoleLog);

      await popup.waitForLoadState('domcontentloaded');
      const continueButton = popup.getByRole('button', { name: 'Continue / Continuar' });
      if (await continueButton.count()) {
        await continueButton.first().click({ timeout: 20000 });
      } else {
        pushInfo(consoleLog, popup, 'El botón "Continue / Continuar" no apareció.');
      }

      await popup.goto('https://www.citaconsular.es/es/hosteds/widgetdefault/28db94e270580be60f6e00285a7d8141f/bkt873048#datetime', {
        waitUntil: 'domcontentloaded',
      });

      await fetchAgendaSnapshot(popup, consoleLog);

      const availabilityLink = popup.getByRole('link', { name: /Hueco libre/ });
      const slotCount = await availabilityLink.count();
      if (slotCount > 0) {
        await availabilityLink.first().click({ timeout: 20000 });
        await popup.getByText('Nº Pasaporte Email Confirmar').waitFor({ timeout: 20000 });
        await popup.locator('#idBktWidgetDefaultBodyContainer').click();
      } else {
        pushInfo(consoleLog, popup, 'No se encontraron huecos libres en la agenda.');
      }

      completedAtIso = new Date().toISOString();
    } catch (error) {
      completedAtIso = new Date().toISOString();
      testError = error;
      throw error;
    } finally {
      await Promise.allSettled(responseTasks);
      if (traceStarted) {
        try {
          await context.tracing.stop({ path: tracePath });
        } catch (stopError) {
          console.warn('No se pudo detener tracing:', stopError);
        }
      }

      const networkLogPath = path.join(logsDir, `${sessionId}-network.json`);
      const consoleLogPath = path.join(logsDir, `${sessionId}-console.json`);
      const metaPath = path.join(logsDir, `${sessionId}-meta.json`);

      fs.writeFileSync(networkLogPath, JSON.stringify(networkLog, null, 2), 'utf-8');
      fs.writeFileSync(consoleLogPath, JSON.stringify(consoleLog, null, 2), 'utf-8');

      const meta = {
        sessionId,
        startedAt: startedAtIso,
        completedAt: completedAtIso,
        durationMs: completedAtIso ? new Date(completedAtIso).getTime() - startedAt.getTime() : null,
        tracePath: traceStarted ? tracePath : null,
        networkLogPath,
        consoleLogPath,
        requestCount: networkLog.length,
        testStatus: testError ? 'failed' : 'passed',
        errorMessage: testError instanceof Error ? testError.message : testError,
      };

      fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2), 'utf-8');
    }
  });
});

