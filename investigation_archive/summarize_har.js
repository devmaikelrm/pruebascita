import { readFile, writeFile } from 'node:fs/promises'

function truncate(str, n = 2048) {
  if (!str) return ''
  return str.length > n ? str.slice(0, n) + '\n... [truncated]' : str
}

async function main() {
  const harPath = process.env.HAR_PATH || 'investigation_archive/final_test.har'
  const outPath = process.env.OUT_PATH || 'investigation_archive/final_test_report.md'
  const har = JSON.parse(await readFile(harPath, 'utf8'))
  const entries = har?.log?.entries || []

  const md = []
  md.push(`# Informe de Red (HAR)\n`)
  md.push(`Origen: \`${harPath}\``)
  md.push(`Total de entradas: ${entries.length}`)

  // Agrupar por método+URL única
  const seen = new Map()
  for (const e of entries) {
    const method = e?.request?.method || 'GET'
    const url = e?.request?.url || ''
    const key = `${method} ${url}`
    if (!seen.has(key)) {
      const reqHeaders = e?.request?.headers || []
      const resHeaders = e?.response?.headers || []
      const reqBody = e?.request?.postData?.text || ''
      const resBody = e?.response?.content?.text || ''
      seen.set(key, {
        method, url,
        status: e?.response?.status,
        reqHeaders, resHeaders,
        reqBody, resBody,
      })
    }
  }

  // Render endpoints
  md.push(`\n## Endpoints\n`)
  for (const ep of seen.values()) {
    md.push(`- Endpoint: ${ep.method} ${ep.url}`)
    md.push(`  - Status: ${ep.status}`)
    md.push(`  - Request headers:`)
    md.push(`\n\`\`\`json\n${JSON.stringify(ep.reqHeaders, null, 2)}\n\`\`\``)
    if (ep.reqBody) {
      md.push(`  - Request body:`)
      md.push(`\n\`\`\`json\n${truncate(ep.reqBody)}\n\`\`\``)
    }
    md.push(`  - Response headers:`)
    md.push(`\n\`\`\`json\n${JSON.stringify(ep.resHeaders, null, 2)}\n\`\`\``)
    if (ep.resBody) {
      md.push(`  - Response body (trunc):`)
      md.push(`\n\`\`\`json\n${truncate(ep.resBody)}\n\`\`\``)
    }
    md.push('')
  }

  await writeFile(outPath, md.join('\n'))
  console.log('HAR summary written to', outPath)
}

main().catch((e) => { console.error(e); process.exit(1) })

