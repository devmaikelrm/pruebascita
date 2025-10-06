import { chromium } from 'playwright'
import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import {
  ListToolsRequestSchema,
  CallToolRequestSchema,
  ListToolsResultSchema,
  CallToolResultSchema,
} from '@modelcontextprotocol/sdk/types.js'
import {
  ReadBuffer,
  serializeMessage,
} from '@modelcontextprotocol/sdk/shared/stdio.js'

let browser = null
let context = null
let page = null

async function ensureBrowser() {
  if (!browser) {
    const headless = process.env.HEADLESS === '0' ? false : true
    browser = await chromium.launch({ headless })
    context = await browser.newContext()
    page = await context.newPage()
  }
  return { browser, context, page }
}

const server = new Server({
  name: 'mcp-playwright-server',
  version: '0.0.1',
}, {
  capabilities: {
    tools: {},
  },
})

const tools = [
  {
    name: 'open_page',
    description: 'Open a URL in a Playwright page',
    inputSchema: {
      type: 'object',
      properties: {
        url: { type: 'string' },
        waitUntil: { type: 'string' },
      },
      required: ['url'],
    },
    impl: async ({ url, waitUntil }) => {
      await ensureBrowser()
      await page.goto(url, { waitUntil: waitUntil ?? 'load' })
      return { content: [{ type: 'text', text: 'ok' }] }
    },
  },
  {
    name: 'click',
    description: 'Click an element by CSS selector',
    inputSchema: {
      type: 'object',
      properties: { selector: { type: 'string' }, timeoutMs: { type: 'number' } },
      required: ['selector'],
    },
    impl: async ({ selector, timeoutMs }) => {
      await ensureBrowser()
      await page.click(selector, { timeout: timeoutMs ?? 10000 })
      return { content: [{ type: 'text', text: 'ok' }] }
    },
  },
  {
    name: 'type',
    description: 'Type text into input by selector',
    inputSchema: {
      type: 'object',
      properties: { selector: { type: 'string' }, text: { type: 'string' } },
      required: ['selector', 'text'],
    },
    impl: async ({ selector, text }) => {
      await ensureBrowser()
      await page.fill(selector, '')
      await page.type(selector, text)
      return { content: [{ type: 'text', text: 'ok' }] }
    },
  },
  {
    name: 'text_content',
    description: 'Get text content by selector',
    inputSchema: {
      type: 'object',
      properties: { selector: { type: 'string' } },
      required: ['selector'],
    },
    impl: async ({ selector }) => {
      await ensureBrowser()
      const el = await page.locator(selector).first()
      const text = await el.textContent()
      return { content: [{ type: 'text', text: text ?? '' }] }
    },
  },
  {
    name: 'screenshot',
    description: 'Take a screenshot and return base64',
    inputSchema: {
      type: 'object',
      properties: { fullPage: { type: 'boolean' } },
    },
    impl: async ({ fullPage }) => {
      await ensureBrowser()
      const buf = await page.screenshot({ fullPage: Boolean(fullPage) })
      return { content: [{ type: 'image', data: buf.toString('base64'), mimeType: 'image/png' }] }
    },
  },
  {
    name: 'eval_js',
    description: 'Evaluate JavaScript in the page and return result',
    inputSchema: {
      type: 'object',
      properties: { expression: { type: 'string' } },
      required: ['expression'],
    },
    impl: async ({ expression }) => {
      await ensureBrowser()
      const result = await page.evaluate(new Function(`return (${expression})`))
      return { content: [{ type: 'text', text: JSON.stringify(result) }] }
    },
  },
]

server.setRequestHandler(ListToolsRequestSchema, async (_req) => {
  const res = { tools: tools.map(({ impl, ...def }) => def) }
  return ListToolsResultSchema.parse(res)
})

server.setRequestHandler(CallToolRequestSchema, async (req) => {
  const { name, arguments: args } = req.params
  const tool = tools.find((t) => t.name === name)
  if (!tool) {
    return CallToolResultSchema.parse({
      content: [{ type: 'text', text: `Unknown tool: ${name}` }],
      isError: true,
    })
  }
  const result = await tool.impl(args ?? {})
  return CallToolResultSchema.parse(result)
})

process.on('SIGINT', async () => {
  if (browser) await browser.close().catch(() => {})
  process.exit(0)
})


class StdioTransport {
  constructor(input, output) {
    this.input = input
    this.output = output
    this.onclose = undefined
    this.onerror = undefined
    this.onmessage = undefined
    this._buffer = new ReadBuffer()
    this._onData = (chunk) => {
      this._buffer.append(chunk)
      while (true) {
        let msg = null
        try {
          msg = this._buffer.readMessage()
        } catch (e) {
          // If a malformed line sneaks in, log to stderr and clear buffer line
          try { process.stderr.write(`mcp-server parse error: ${e}\n`) } catch {}
          this._buffer.clear()
          break
        }
        if (!msg) break
        try {
          this.onmessage?.(msg)
        } catch (e) {
          this.onerror?.(e)
        }
      }
    }
  }
  async start() {
    this.input.on('data', this._onData)
  }
  async send(message) {
    const line = serializeMessage(message)
    this.output.write(line)
  }
  async close() {
    this.input.off('data', this._onData)
    this.onclose?.()
  }
}

const transport = new StdioTransport(process.stdin, process.stdout)
await server.connect(transport)
