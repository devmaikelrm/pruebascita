import CDP from 'chrome-remote-interface'
import { launch } from 'chrome-launcher'
import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import {
  ListToolsRequestSchema,
  CallToolRequestSchema,
  ListToolsResultSchema,
  CallToolResultSchema,
} from '@modelcontextprotocol/sdk/types.js'
import { ReadBuffer, serializeMessage } from '@modelcontextprotocol/sdk/shared/stdio.js'

let chrome = null
let client = null
let Page = null
let Runtime = null
let Network = null

const net = {
  active: false,
  events: [],
  requests: new Map(), // requestId -> {req, res, finished}
  handlers: {},
}

async function ensureChrome({ headless = true } = {}) {
  if (client) return
  chrome = await launch({
    chromeFlags: [headless ? '--headless=new' : '', '--disable-gpu', '--no-first-run', '--no-default-browser-check'].filter(Boolean),
  })
  client = await CDP({ port: chrome.port })
  Page = client.Page
  Runtime = client.Runtime
  Network = client.Network
  await Promise.all([Page.enable(), Runtime.enable(), Network.enable()])
  Page.loadEventFired(() => {})
}

async function closeChrome() {
  try { await client?.close() } catch {}
  try { await chrome?.kill() } catch {}
  client = null
  chrome = null
  Page = null
  Runtime = null
}

const server = new Server({ name: 'mcp-cdtp-server', version: '0.0.1' }, { capabilities: { tools: {} } })

const tools = [
  {
    name: 'launch',
    description: 'Launch Chrome with DevTools Protocol',
    inputSchema: { type: 'object', properties: { headless: { type: 'boolean' } } },
    impl: async ({ headless }) => {
      await ensureChrome({ headless: headless !== false })
      return { content: [{ type: 'text', text: 'ok' }] }
    },
  },
  {
    name: 'goto',
    description: 'Navigate to a URL',
    inputSchema: { type: 'object', properties: { url: { type: 'string' } }, required: ['url'] },
    impl: async ({ url }) => {
      await ensureChrome()
      await Page.navigate({ url })
      await Page.loadEventFired()
      return { content: [{ type: 'text', text: 'ok' }] }
    },
  },
  {
    name: 'eval_js',
    description: 'Evaluate JavaScript in the page',
    inputSchema: { type: 'object', properties: { expression: { type: 'string' } }, required: ['expression'] },
    impl: async ({ expression }) => {
      await ensureChrome()
      const { result } = await Runtime.evaluate({ expression, returnByValue: true })
      return { content: [{ type: 'text', text: JSON.stringify(result?.value) }] }
    },
  },
  {
    name: 'text_content',
    description: 'Get textContent of first matching selector',
    inputSchema: { type: 'object', properties: { selector: { type: 'string' } }, required: ['selector'] },
    impl: async ({ selector }) => {
      await ensureChrome()
      const expression = `document.querySelector(${JSON.stringify(selector)})?.textContent ?? ''`
      const { result } = await Runtime.evaluate({ expression, returnByValue: true })
      return { content: [{ type: 'text', text: String(result?.value ?? '') }] }
    },
  },
  {
    name: 'screenshot',
    description: 'Capture a screenshot',
    inputSchema: { type: 'object', properties: { format: { type: 'string' } } },
    impl: async () => {
      await ensureChrome()
      const { data } = await Page.captureScreenshot({ format: 'png' })
      return { content: [{ type: 'image', data, mimeType: 'image/png' }] }
    },
  },
  {
    name: 'close',
    description: 'Close Chrome session',
    inputSchema: { type: 'object', properties: {} },
    impl: async () => {
      await closeChrome()
      return { content: [{ type: 'text', text: 'closed' }] }
    },
  },
  {
    name: 'network_start',
    description: 'Enable network capture of requests/responses',
    inputSchema: { type: 'object', properties: {} },
    impl: async () => {
      await ensureChrome()
      if (net.active) return { content: [{ type: 'text', text: 'already_started' }] }
      net.active = true
      net.events = []
      net.requests.clear()
      net.handlers.requestWillBeSent = ({ requestId, request, timestamp, type }) => {
        const entry = net.requests.get(requestId) || {}
        entry.req = { method: request.method, url: request.url, headers: request.headers, postData: request.postData, timestamp, type }
        net.requests.set(requestId, entry)
      }
      net.handlers.responseReceived = ({ requestId, response, timestamp }) => {
        const entry = net.requests.get(requestId) || {}
        entry.res = { status: response.status, statusText: response.statusText, headers: response.headers, mimeType: response.mimeType, timestamp }
        net.requests.set(requestId, entry)
      }
      net.handlers.loadingFinished = async ({ requestId }) => {
        try {
          const { body, base64Encoded } = await Network.getResponseBody({ requestId })
          const entry = net.requests.get(requestId) || {}
          entry.finished = { body, base64Encoded }
          net.requests.set(requestId, entry)
        } catch (e) {
          // some responses may not have bodies
        }
      }
      net.handlers.loadingFailed = ({ requestId, errorText }) => {
        const entry = net.requests.get(requestId) || {}
        entry.failed = { errorText }
        net.requests.set(requestId, entry)
      }
      Network.requestWillBeSent(net.handlers.requestWillBeSent)
      Network.responseReceived(net.handlers.responseReceived)
      Network.loadingFinished(net.handlers.loadingFinished)
      Network.loadingFailed(net.handlers.loadingFailed)
      return { content: [{ type: 'text', text: 'started' }] }
    },
  },
  {
    name: 'network_stop',
    description: 'Stop network capture and return brief stats',
    inputSchema: { type: 'object', properties: {} },
    impl: async () => {
      if (!net.active) return { content: [{ type: 'text', text: 'not_active' }] }
      try {
        Network.requestWillBeSent(null)
        Network.responseReceived(null)
        Network.loadingFinished(null)
        Network.loadingFailed(null)
      } catch {}
      net.active = false
      const total = net.requests.size
      const ok = [...net.requests.values()].filter(e => (e.res?.status ?? 0) >= 200 && (e.res?.status ?? 0) < 400).length
      return { content: [{ type: 'text', text: JSON.stringify({ total, ok }) }] }
    },
  },
  {
    name: 'network_generate_har',
    description: 'Generate a HAR file from captured network events and return file path',
    inputSchema: { type: 'object', properties: { outPath: { type: 'string' } } },
    impl: async ({ outPath }) => {
      const fs = await import('node:fs/promises')
      const { resolve, dirname } = await import('node:path')
      const out = resolve(process.cwd(), outPath || `experiments/mcp-cdtp/output/${Date.now()}.har`)
      await fs.mkdir(dirname(out), { recursive: true })
      // Minimal HAR 1.2
      const entries = []
      for (const [id, e] of net.requests.entries()) {
        const startedDateTime = new Date().toISOString()
        const request = {
          method: e?.req?.method || 'GET',
          url: e?.req?.url || '',
          httpVersion: 'HTTP/1.1',
          headers: Object.entries(e?.req?.headers || {}).map(([name, value]) => ({ name, value: String(value) })),
          queryString: [],
          cookies: [],
          headersSize: -1,
          bodySize: (e?.req?.postData || '').length,
          postData: e?.req?.postData ? { mimeType: 'application/json', text: e.req.postData } : undefined,
        }
        const response = {
          status: e?.res?.status || 0,
          statusText: e?.res?.statusText || '',
          httpVersion: 'HTTP/1.1',
          headers: Object.entries(e?.res?.headers || {}).map(([name, value]) => ({ name, value: Array.isArray(value) ? value.join('; ') : String(value) })),
          cookies: [],
          content: {
            size: e?.finished?.body ? (e.finished.base64Encoded ? Buffer.from(e.finished.body, 'base64').length : e.finished.body.length) : 0,
            mimeType: e?.res?.mimeType || 'application/octet-stream',
            text: e?.finished?.body || '',
            encoding: e?.finished?.base64Encoded ? 'base64' : undefined,
          },
          redirectURL: '',
          headersSize: -1,
          bodySize: -1,
        }
        entries.push({ startedDateTime, time: 0, request, response, cache: {}, timings: { send: 0, wait: 0, receive: 0 } })
      }
      const har = { log: { version: '1.2', creator: { name: 'mcp-cdtp', version: '0.0.1' }, entries } }
      await fs.writeFile(out, JSON.stringify(har, null, 2))
      return { content: [{ type: 'text', text: out }] }
    },
  },
  {
    name: 'cookies',
    description: 'Return current cookies for the page',
    inputSchema: { type: 'object', properties: {} },
    impl: async () => {
      await ensureChrome()
      const { cookies } = await client.Network.getCookies({ urls: [] }).catch(async () => ({ cookies: [] }))
      return { content: [{ type: 'text', text: JSON.stringify(cookies) }] }
    },
  },
  {
    name: 'auth_info',
    description: 'Heuristic: look for Authorization headers and session cookies from captured traffic',
    inputSchema: { type: 'object', properties: {} },
    impl: async () => {
      const authHeaders = []
      const cookies = new Set()
      for (const e of net.requests.values()) {
        const h = e?.req?.headers || {}
        if (h.Authorization || h.authorization) authHeaders.push(h.Authorization || h.authorization)
        const rh = e?.res?.headers || {}
        const sc = rh['set-cookie'] || rh['Set-Cookie']
        if (Array.isArray(sc)) sc.forEach(v => cookies.add(String(v).split(';')[0].split('=')[0]))
        else if (sc) cookies.add(String(sc).split(';')[0].split('=')[0])
      }
      return { content: [{ type: 'text', text: JSON.stringify({ authorization: [...new Set(authHeaders)], cookieNames: [...cookies] }) }] }
    },
  },
  {
    name: 'save_screenshot',
    description: 'Save a screenshot to disk and return path',
    inputSchema: { type: 'object', properties: { filename: { type: 'string' } }, required: ['filename'] },
    impl: async ({ filename }) => {
      await ensureChrome()
      const { data } = await Page.captureScreenshot({ format: 'png' })
      const fs = await import('node:fs/promises')
      const { resolve, dirname } = await import('node:path')
      const out = resolve(process.cwd(), filename)
      await fs.mkdir(dirname(out), { recursive: true })
      await fs.writeFile(out, Buffer.from(data, 'base64'))
      return { content: [{ type: 'text', text: out }] }
    },
  },
]

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return ListToolsResultSchema.parse({ tools: tools.map(({ impl, ...def }) => def) })
})

server.setRequestHandler(CallToolRequestSchema, async (req) => {
  const { name, arguments: args } = req.params
  const tool = tools.find((t) => t.name === name)
  if (!tool) return CallToolResultSchema.parse({ content: [{ type: 'text', text: `Unknown tool: ${name}` }], isError: true })
  try {
    return CallToolResultSchema.parse(await tool.impl(args ?? {}))
  } catch (e) {
    return CallToolResultSchema.parse({ content: [{ type: 'text', text: String(e) }], isError: true })
  }
})

process.on('SIGINT', async () => {
  await closeChrome()
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
          try { process.stderr.write(`mcp-cdtp parse error: ${e}\n`) } catch {}
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
  async start() { this.input.on('data', this._onData) }
  async send(message) { this.output.write(serializeMessage(message)) }
  async close() { this.input.off('data', this._onData); this.onclose?.() }
}

await server.connect(new StdioTransport(process.stdin, process.stdout))
