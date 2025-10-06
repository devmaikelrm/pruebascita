import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { resolve, basename } from 'node:path'

function truncate(str, n = 4096) {
  if (!str) return ''
  return str.length > n ? str.slice(0, n) + '\n... [truncated]' : str
}

function guessContentType(headers = []) {
  const h = new Map(headers.map(h => [String(h.name || '').toLowerCase(), String(h.value || '')]))
  return h.get('content-type') || ''
}

function parseFormUrlEncoded(body) {
  try {
    const params = new URLSearchParams(body)
    const out = {}
    for (const [k, v] of params.entries()) {
      if (k.endsWith('[]')) {
        const key = k.slice(0, -2)
        if (!out[key]) out[key] = []
        out[key].push(v)
      } else {
        if (out[k] !== undefined) {
          if (!Array.isArray(out[k])) out[k] = [out[k]]
          out[k].push(v)
        } else {
          out[k] = v
        }
      }
    }
    return out
  } catch {
    return null
  }
}

async function main() {
  const defaultHar = 'investigation_archive/deep_output/session.har'
  const harPath = process.env.HAR_PATH || (await import('node:fs/promises').then(fs => fs.stat(defaultHar).then(()=>defaultHar).catch(()=> 'investigation_archive/final_test.har')))
  const outDir = 'investigation_archive/booking_posts'
  await mkdir(outDir, { recursive: true })
  const mdPath = 'investigation_archive/booking_api_report.md'

  const har = JSON.parse(await readFile(harPath, 'utf8'))
  const entries = har?.log?.entries || []

  const isBookingUrl = (url) => /(onlinebookings|booking|appointments|reserve|reservation|reserva|signin|login|api)/i.test(url)
  const interesting = entries.filter(e => ['POST','PUT','PATCH','DELETE'].includes(e?.request?.method || '') && isBookingUrl(e?.request?.url || ''))

  const md = []
  md.push(`# Informe API de Reserva (POST)\n`)
  md.push(`HAR: \`${harPath}\``)
  md.push(`Total entradas: ${entries.length}`)
  md.push(`Candidatas (métodos de escritura): ${interesting.length}`)

  let idx = 0
  for (const e of interesting) {
    idx++
    const req = e.request || {}
    const res = e.response || {}
    const ctReq = guessContentType(req.headers || [])
    const ctRes = guessContentType(res.headers || [])
    const reqBody = req.postData?.text || ''
    const resBody = res.content?.text || ''

    let parsedReq = null
    if (/json/i.test(ctReq)) {
      try { parsedReq = JSON.parse(reqBody) } catch {}
    } else if (/x-www-form-urlencoded/i.test(ctReq)) {
      parsedReq = parseFormUrlEncoded(reqBody)
    }

    const item = {
      method: req.method,
      url: req.url,
      requestHeaders: req.headers,
      requestContentType: ctReq,
      requestBody: reqBody,
      requestBodyParsed: parsedReq,
      responseStatus: res.status,
      responseHeaders: res.headers,
      responseContentType: ctRes,
      responseBody: resBody,
    }

    const jsonOut = resolve(outDir, `post_${String(idx).padStart(3,'0')}.json`)
    await writeFile(jsonOut, JSON.stringify(item, null, 2))

    md.push(`\n---\n`)
    md.push(`### ${idx}. ${item.method} ${item.url}`)
    md.push(`- Request Content-Type: ${item.requestContentType}`)
    md.push(`- Response: ${item.responseStatus} (${item.responseContentType})`)
    md.push(`- Dump JSON: ${jsonOut}`)
    md.push(`- Request headers:`)
    md.push(`\n\`\`\`json\n${JSON.stringify(item.requestHeaders, null, 2)}\n\`\`\``)
    if (item.requestBody) {
      md.push(`- Request body:`)
      md.push(`\n\`\`\`json\n${truncate(item.requestBody)}\n\`\`\``)
    }
    if (item.requestBodyParsed) {
      md.push(`- Request body (parsed):`)
      md.push(`\n\`\`\`json\n${JSON.stringify(item.requestBodyParsed, null, 2)}\n\`\`\``)
    }
    md.push(`- Response headers:`)
    md.push(`\n\`\`\`json\n${JSON.stringify(item.responseHeaders, null, 2)}\n\`\`\``)
    if (item.responseBody) {
      md.push(`- Response body (trunc):`)
      md.push(`\n\`\`\`json\n${truncate(item.responseBody)}\n\`\`\``)
    }

    // Curl reproduction snippet (best effort)
    const headerArgs = (item.requestHeaders||[]).map(h => `-H ${JSON.stringify(`${h.name}: ${h.value}`)}`).join(' \\\n+  ')
    const dataArg = item.requestBody ? `--data ${JSON.stringify(item.requestBody)}` : ''
    md.push(`- Repro (curl aproximado):`)
    md.push(`\n\`\`\`bash\ncurl -i -X ${item.method} ${JSON.stringify(item.url)} \\\n+  ${headerArgs}${item.requestBody ? ' \\\n+  ' : ''}${dataArg}\n\`\`\``)
  }

  await writeFile(mdPath, md.join('\n'))
  console.log('Booking API report written to', mdPath)
}

main().catch((e) => { console.error(e); process.exit(1) })

