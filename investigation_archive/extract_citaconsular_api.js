import { readFile, writeFile } from 'node:fs/promises'
import { URL } from 'node:url'

function parseQuery(u) {
  const out = {}
  for (const [k, v] of u.searchParams.entries()) {
    if (k.endsWith('[]')) {
      const key = k.slice(0, -2)
      if (!out[key]) out[key] = []
      out[key].push(v)
    } else if (k === '_') {
      out['_ts'] = v
    } else {
      out[k] = v
    }
  }
  return out
}

function stripJsonp(text) {
  if (!text) return null
  const m = text.match(/^\s*[A-Za-z0-9_$.]+\s*\((.*)\)\s*;?\s*$/s)
  if (m) {
    return m[1]
  }
  return null
}

function safeJson(str) {
  try { return JSON.parse(str) } catch { return null }
}

function summarizeJson(obj, depth=0, maxDepth=2) {
  if (obj == null) return String(obj)
  if (typeof obj !== 'object') return typeof obj
  if (depth >= maxDepth) return Array.isArray(obj) ? `array(${obj.length})` : `object(${Object.keys(obj).length})`
  if (Array.isArray(obj)) {
    return `array(${obj.length})<${obj.length? summarizeJson(obj[0], depth+1, maxDepth):''}>`
  }
  const keys = Object.keys(obj)
  const preview = keys.slice(0, 10).map(k => `${k}:${summarizeJson(obj[k], depth+1, maxDepth)}`)
  return `{ ${preview.join(', ')}${keys.length>10? ', ...' : ''} }`
}

async function main() {
  const harPath = process.env.HAR_PATH || 'investigation_archive/final_test.har'
  const outPath = process.env.OUT_PATH || 'investigation_archive/api_citas_report.md'
  const text = await readFile(harPath, 'utf8')
  const har = JSON.parse(text)
  const entries = har?.log?.entries || []

  const datetimeCalls = []
  const otherBooking = []
  for (const e of entries) {
    const url = e?.request?.url || ''
    const method = e?.request?.method || 'GET'
    if (!url) continue
    if (/onlinebookings\/datetime\//.test(url)) {
      datetimeCalls.push({ e, url, method })
    } else if (/onlinebookings|booking|appointments|signin|login|api\//i.test(url)) {
      otherBooking.push({ e, url, method })
    }
  }

  const md = []
  md.push('# API Citaconsular – Extracción desde HAR')
  md.push(`Origen HAR: \`${harPath}\``)
  md.push(`Entradas totales: ${entries.length}`)
  md.push('')
  md.push('## 1) Endpoint de disponibilidad (datetime)')
  md.push(`Se detectaron ${datetimeCalls.length} llamadas a \`onlinebookings/datetime\`.`)

  const groups = new Map()
  for (const { e, url } of datetimeCalls) {
    try {
      const u = new URL(url)
      const q = parseQuery(u)
      const key = JSON.stringify({
        publickey: q.publickey,
        services: q.services, agendas: q.agendas,
        lang: q.lang, version: q.version,
        start: q.start, end: q.end,
      })
      if (!groups.has(key)) groups.set(key, { info: q, samples: [] })
      let bodyText = e?.response?.content?.text || ''
      const enc = e?.response?.content?.encoding
      if (bodyText && enc === 'base64') {
        try { bodyText = Buffer.from(bodyText, 'base64').toString('utf8') } catch {}
      }
      const jsonStr = stripJsonp(bodyText)
      const json = jsonStr ? safeJson(jsonStr) : null
      groups.get(key).samples.push({ url, jsonPreview: summarizeJson(json) })
    } catch {}
  }

  for (const [, { info, samples }] of groups.entries()) {
    md.push('')
    md.push('### Params')
    md.push('```json')
    md.push(JSON.stringify(info, null, 2))
    md.push('```')
    const sample = samples[0]
    md.push('Ejemplo URL:')
    md.push('```')
    md.push(sample.url)
    md.push('```')
    md.push(`Respuesta (preview): ${sample.jsonPreview}`)
  }

  md.push('')
  md.push('## 2) Autenticación / Sesión')
  const cookieHeaders = []
  for (const e of entries) {
    const h = e?.response?.headers || []
    for (const kv of h) {
      if (/^set-cookie$/i.test(kv?.name || '')) cookieHeaders.push(kv?.value)
    }
  }
  md.push('Cookies establecidas (muestra):')
  md.push('```')
  md.push(cookieHeaders.slice(0, 5).join('\n'))
  md.push('```')
  md.push('Observación: `onlinebookings/datetime` funciona sin autenticación explícita; usa `publickey` + parámetros del widget.')

  md.push('')
  md.push('## 3) Otros endpoints potenciales')
  const uniq = [...new Set(otherBooking.map(x => `${x.method} ${x.url}`))]
  for (const u of uniq.slice(0, 50)) md.push(`- ${u}`)

  md.push('')
  md.push('## 4) Pauta reproducible (solo lectura disponibilidad)')
  if (groups.size > 0) {
    const [{ info }] = [...groups.values()]
    md.push('Parámetros mínimos observados:')
    md.push('```json')
    md.push(JSON.stringify({
      type: 'default',
      publickey: info.publickey,
      lang: info.lang,
      services: info.services,
      agendas: info.agendas,
      version: info.version,
      src: info.src,
      srvsrc: info.srvsrc,
      start: info.start,
      end: info.end,
      selectedPeople: info.selectedPeople || '1',
      callback: 'jQuery<random>_<ts>',
      _: '<timestamp>'
    }, null, 2))
    md.push('```')
  }

  await writeFile(outPath, md.join('\n'))
  console.log('API report written to', outPath)
}

main().catch(e => { console.error(e); process.exit(1) })
