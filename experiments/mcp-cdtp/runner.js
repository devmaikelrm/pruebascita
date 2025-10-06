import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { spawn } from 'node:child_process'
import { Client } from '@modelcontextprotocol/sdk/client/index.js'
import { ReadBuffer, serializeMessage } from '@modelcontextprotocol/sdk/shared/stdio.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

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
      let msg
      while ((msg = this._buffer.readMessage())) {
        try { this.onmessage?.(msg) } catch (e) { this.onerror?.(e) }
      }
    }
  }
  async start() { this.input.on('data', this._onData) }
  async send(message) { this.output.write(serializeMessage(message)) }
  async close() { this.input.off('data', this._onData); this.onclose?.() }
}

function startServer() {
  const serverPath = resolve(__dirname, 'server.js')
  const child = spawn(process.execPath, [serverPath], { stdio: ['pipe', 'pipe', 'pipe'] })
  child.stderr.on('data', (d) => process.stderr.write(d))
  return child
}

async function call(client, name, args) {
  return client.callTool({ name, arguments: args })
}

async function main() {
  const outputDir = resolve(__dirname, 'output')
  await mkdir(outputDir, { recursive: true })
  const flowPath = process.env.FLOW_PATH || resolve(__dirname, 'flow.json')
  const hasFlow = await readFile(flowPath).then(() => true).catch(() => false)
  const flow = hasFlow ? JSON.parse(await readFile(flowPath, 'utf8')) : JSON.parse(await readFile(resolve(__dirname, 'flow.example.json'), 'utf8'))

  const child = startServer()
  const client = new Client({ name: 'mcp-cdtp-runner', version: '0.0.1' }, { capabilities: { tools: {} } })
  const transport = new StdioTransport(child.stdout, child.stdin)
  await client.connect(transport)

  const report = {
    summary: [],
    endpoints: [],
    domSelectors: [],
    auth: null,
    harPath: null,
    screenshots: [],
  }

  // Phase 1: Network capture
  await call(client, 'network_start', {})
  await call(client, 'launch', { headless: true })
  const url = process.env.TARGET_URL || flow.url
  await call(client, 'goto', { url })

  // Phase 2: DOM steps and screenshots
  let stepIndex = 1
  for (const s of flow.steps || []) {
    if (s.action === 'type') {
      await call(client, 'eval_js', { expression: `document.querySelector(${JSON.stringify(s.selector)})?.focus()` })
      await call(client, 'eval_js', { expression: `(() => { const el = document.querySelector(${JSON.stringify(s.selector)}); if (el) { el.value = ${JSON.stringify(s.text)}; el.dispatchEvent(new Event('input',{bubbles:true})); } })()` })
      report.domSelectors.push({ description: s.description || 'type', selector: s.selector })
    } else if (s.action === 'click') {
      await call(client, 'eval_js', { expression: `document.querySelector(${JSON.stringify(s.selector)})?.click()` })
      report.domSelectors.push({ description: s.description || 'click', selector: s.selector })
    } else if (s.action === 'eval_js') {
      await call(client, 'eval_js', { expression: s.expression })
    } else if (s.action === 'screenshot') {
      const filename = resolve(outputDir, s.name || String(stepIndex).padStart(2, '0') + '_step.png')
      const res = await call(client, 'save_screenshot', { filename })
      report.screenshots.push(filename)
    }
    stepIndex++
  }

  // Phase 1 end: stop capture and produce HAR
  await call(client, 'network_stop', {})
  const harOut = resolve(outputDir, 'session.har')
  const harRes = await call(client, 'network_generate_har', { outPath: harOut })
  report.harPath = harOut

  // Phase 3: Analyze auth and simple endpoints extraction from HAR
  const authRes = await call(client, 'auth_info', {})
  try { report.auth = JSON.parse(authRes?.content?.[0]?.text || '{}') } catch { report.auth = null }

  // Read HAR and build endpoints list
  const har = JSON.parse(await readFile(harOut, 'utf8'))
  const seen = new Map()
  for (const e of har.log.entries) {
    const key = `${e.request.method} ${e.request.url}`
    if (!seen.has(key)) {
      const example = {
        method: e.request.method,
        url: e.request.url,
        requestHeaders: e.request.headers,
        requestBody: e.request.postData?.text || '',
        responseStatus: e.response.status,
        responseHeaders: e.response.headers,
        responseBody: e.response.content?.text || '',
      }
      seen.set(key, example)
    }
  }
  report.endpoints = [...seen.values()]

  // Phase 4: Generate markdown report
  const md = []
  md.push(`# Análisis Automatizado (CDP MCP)\n`)
  md.push(`## Resumen del Flujo\n`)
  md.push(`- URL objetivo: ${url}`)
  for (const s of flow.steps || []) {
    md.push(`- ${s.action} ${s.selector ? '`'+s.selector+'`' : ''} ${s.name ? '('+s.name+')' : ''}`)
  }
  md.push(`\n## Documentación de la API`)
  for (const ep of report.endpoints) {
    md.push(`\n- Endpoint: ${ep.method} ${ep.url}`)
    md.push(`  - Request headers: \n\n\`\`\`json\n${JSON.stringify(ep.requestHeaders, null, 2)}\n\`\`\``)
    if (ep.requestBody) md.push(`  - Request body: \n\n\`\`\`json\n${ep.requestBody}\n\`\`\``)
    md.push(`  - Response status: ${ep.responseStatus}`)
    md.push(`  - Response headers: \n\n\`\`\`json\n${JSON.stringify(ep.responseHeaders, null, 2)}\n\`\`\``)
    if (ep.responseBody) md.push(`  - Response body (truncated 2KB): \n\n\`\`\`json\n${(ep.responseBody || '').slice(0, 2048)}\n\`\`\``)
  }
  md.push(`\n## Mapa de Selectores del DOM`)
  for (const m of report.domSelectors) {
    md.push(`- ${m.description}: ${'`'+m.selector+'`'}`)
  }
  md.push(`\n## Mecanismo de Autenticación`)
  md.push(`- Authorization headers detectados: ${JSON.stringify(report.auth?.authorization || [])}`)
  md.push(`- Cookies de sesión detectadas: ${JSON.stringify(report.auth?.cookieNames || [])}`)
  md.push(`\n## Archivos Adjuntos`)
  md.push(`- HAR: ${report.harPath}`)
  for (const s of report.screenshots) md.push(`- Screenshot: ${s}`)

  const reportPath = resolve(outputDir, 'report.md')
  await writeFile(reportPath, md.join('\n'))
  console.log('Reporte generado:', reportPath)

  await client.callTool({ name: 'close', arguments: {} }).catch(() => {})
  await client.close()
  child.kill('SIGINT')
}

main().catch((err) => { console.error(err); process.exit(1) })

