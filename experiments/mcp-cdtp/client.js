import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { Client } from '@modelcontextprotocol/sdk/client/index.js'
import { ReadBuffer, serializeMessage } from '@modelcontextprotocol/sdk/shared/stdio.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

function startServer() {
  const serverPath = resolve(__dirname, 'server.js')
  const child = spawn(process.execPath, [serverPath], { stdio: ['pipe', 'pipe', 'pipe'] })
  child.stderr.on('data', (d) => process.stderr.write(d))
  return child
}

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
  async send(message) {
    const line = serializeMessage(message)
    try { process.stderr.write(`client->cdtp ${line}`) } catch {}
    this.output.write(line)
  }
  async close() { this.input.off('data', this._onData); this.onclose?.() }
}

async function main() {
  const child = startServer()
  const client = new Client({ name: 'mcp-cdtp-client', version: '0.0.1' }, { capabilities: { tools: {} } })
  const transport = new StdioTransport(child.stdout, child.stdin)
  await client.connect(transport)

  const tools = await client.listTools()
  console.log('Tools:', tools.tools.map(t => t.name))

  await client.callTool({ name: 'launch', arguments: { headless: true } })
  const url = process.env.DEMO_URL || 'https://example.org/'
  await client.callTool({ name: 'goto', arguments: { url } })
  const txtRes = await client.callTool({ name: 'text_content', arguments: { selector: 'h1' } })
  const txt = txtRes?.content?.find(c => c.type === 'text')?.text
  console.log('h1 text:', txt)
  const shotRes = await client.callTool({ name: 'screenshot', arguments: {} })
  const b64 = shotRes?.content?.find(c => c.type === 'image')?.data
  const out = resolve(__dirname, 'screenshot.png')
  await import('node:fs/promises').then(fs => fs.writeFile(out, Buffer.from(b64, 'base64')))
  console.log('Saved:', out)

  await client.callTool({ name: 'close', arguments: {} })
  await client.close()
  child.kill('SIGINT')
}

main().catch((err) => { console.error(err); process.exit(1) })

