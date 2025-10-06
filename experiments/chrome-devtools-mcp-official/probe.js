import { spawn } from 'node:child_process'
import { ReadBuffer, serializeMessage } from '@modelcontextprotocol/sdk/shared/stdio.js'
import { Client } from '@modelcontextprotocol/sdk/client/index.js'

class StdioTransport { constructor(input, output){ this.input=input; this.output=output; this.onclose=undefined; this.onerror=undefined; this.onmessage=undefined; this._buffer=new ReadBuffer(); this._onData=(chunk)=>{ this._buffer.append(chunk); let msg; while((msg=this._buffer.readMessage())){ try{ this.onmessage?.(msg) }catch(e){ this.onerror?.(e) } } } } async start(){ this.input.on('data', this._onData) } async send(message){ this.output.write(serializeMessage(message)) } async close(){ this.input.off('data', this._onData); this.onclose?.() } }
function startOfficialServer(){ const args=['-y','chrome-devtools-mcp@latest','--headless','true','--isolated']; const cmd=process.platform==='win32'?'npx.cmd':'npx'; const child=spawn(cmd,args,{stdio:['pipe','pipe','pipe'], shell: process.platform==='win32'}); child.stderr.on('data',(d)=>process.stderr.write(d)); return child }

async function main(){
  const child = startOfficialServer()
  const client = new Client({ name: 'cdtp-probe', version: '0.0.1' }, { capabilities: { tools: {} } })
  const transport = new StdioTransport(child.stdout, child.stdin)
  await client.connect(transport)
  await client.callTool({ name: 'new_page', arguments: { url: 'https://example.org/' } })
  await client.callTool({ name: 'wait_for', arguments: { text: 'Example Domain' } })
  const list = await client.callTool({ name: 'list_network_requests', arguments: {} })
  console.log('requests count:', JSON.stringify(list))
  const urls = []
  try {
    const items = JSON.parse(list.content?.[0]?.text || '[]')
    for (const it of items) urls.push(it.url)
  } catch {}
  const details = []
  for (const u of urls.slice(0,5)) {
    const r = await client.callTool({ name: 'get_network_request', arguments: { url: u } })
    details.push(r.content?.[0]?.text || '')
  }
  console.log('details sample:', details[0]?.slice(0,200))
  await client.close(); child.kill('SIGINT')
}
main().catch((e)=>{ console.error(e); process.exit(1) })

