import { readFile, writeFile, stat } from 'node:fs/promises'
import { resolve } from 'node:path'

function looksLikeDate(str) {
  return /\b\d{4}-\d{2}-\d{2}\b/.test(str)
}

function looksLikeTime(str) {
  return /\b\d{2}:\d{2}(?::\d{2})?\b/.test(str)
}

function extractDateTimeStrings(obj, out = []) {
  if (obj == null) return out
  if (typeof obj === 'string') {
    if (looksLikeDate(obj) || looksLikeTime(obj)) out.push(obj)
    return out
  }
  if (Array.isArray(obj)) {
    for (const v of obj) extractDateTimeStrings(v, out)
    return out
  }
  if (typeof obj === 'object') {
    for (const k of Object.keys(obj)) extractDateTimeStrings(obj[k], out)
  }
  return out
}

function normalizeSlotsFromPayload(payload) {
  const dayMap = new Map() // date => Set(times)
  // Direct known shape
  if (payload && Array.isArray(payload.Slots)) {
    for (const s of payload.Slots) {
      // Try common fields
      let date = s.Date || s.date || s.Day || s.day || null
      let time = s.Time || s.time || s.Hour || s.hour || null
      if (!date) {
        // Try parse from any string value in slot
        const strs = extractDateTimeStrings(s)
        const d = strs.find(looksLikeDate)
        const t = strs.find(looksLikeTime)
        if (d) date = d
        if (t) time = t
        // If a full ISO string exists, split
        const iso = strs.find((x) => /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(x))
        if (iso) {
          const m = iso.match(/(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2})/)
          if (m) { date = date || m[1]; time = time || m[2] }
        }
      }
      if (date) {
        if (!dayMap.has(date)) dayMap.set(date, new Set())
        if (time) dayMap.get(date).add(time)
      }
      // If the slot contains an array of times (e.g., s.Times)
      const timesArr = s.Times || s.times || s.Hours || s.hours
      if (date && Array.isArray(timesArr)) {
        if (!dayMap.has(date)) dayMap.set(date, new Set())
        for (const t of timesArr) {
          const tt = typeof t === 'string' ? t : (t?.time || t?.Time || '')
          if (tt) dayMap.get(date).add(tt)
        }
      }
    }
  } else {
    // Generic fallback: search entire payload for date-time strings
    const strs = extractDateTimeStrings(payload)
    for (const s of strs) {
      if (looksLikeDate(s)) {
        if (!dayMap.has(s)) dayMap.set(s, new Set())
      }
    }
  }
  const days = {}
  for (const [d, set] of dayMap.entries()) days[d] = Array.from(set).sort()
  return days
}

async function main() {
  const dispoPath = 'investigation_archive/disponibilidad.json'
  const singlePath = 'investigation_archive/datetime_decoded.json'
  let normalized = { days: {}, months: [] }
  let used = null
  try {
    const st = await stat(dispoPath)
    if (st.isFile()) {
      const arr = JSON.parse(await readFile(dispoPath, 'utf8'))
      for (const entry of arr) {
        const range = entry.range || entry.Range || null
        const payload = entry.payload || entry.Payload || null
        const days = normalizeSlotsFromPayload(payload)
        normalized.months.push({ range, days })
        for (const k of Object.keys(days)) {
          if (!normalized.days[k]) normalized.days[k] = []
          normalized.days[k].push(...days[k])
        }
      }
      used = dispoPath
    }
  } catch {}
  if (!used) {
    try {
      const text = await readFile(singlePath, 'utf8')
      const payload = JSON.parse(text || '{}')
      const days = normalizeSlotsFromPayload(payload)
      normalized.days = days
      normalized.months.push({ range: null, days })
      used = singlePath
    } catch {
      console.error('No encontré ni disponibilidad.json ni datetime_decoded.json')
      process.exit(1)
    }
  }

  // Write JSON
  const jsonOut = 'investigation_archive/normalized_disponibilidad.json'
  await writeFile(jsonOut, JSON.stringify(normalized, null, 2))

  // Write Markdown report
  const md = []
  md.push(`# Disponibilidad Normalizada`)
  md.push(`Fuente: \`${used}\``)
  md.push(`\n## Resumen por día`)
  const daysKeys = Object.keys(normalized.days).sort()
  if (daysKeys.length === 0) {
    md.push(`(Sin fechas disponibles en la fuente)`)
  } else {
    for (const d of daysKeys) {
      const times = Array.from(new Set(normalized.days[d])).sort()
      md.push(`- ${d}: ${times.length ? times.join(', ') : '(sin horas listadas)'}`)
    }
  }
  md.push(`\n## Por mes`)
  for (const m of normalized.months) {
    const title = m?.range ? `${m.range.start} → ${m.range.end}` : '(rango único)'
    md.push(`\n### ${title}`)
    const keys = Object.keys(m.days || {}).sort()
    if (keys.length === 0) md.push(`(sin fechas)`)
    for (const d of keys) {
      const times = m.days[d]
      md.push(`- ${d}: ${times.length ? times.join(', ') : '(sin horas listadas)'}`)
    }
  }
  const mdOut = 'investigation_archive/normalized_disponibilidad.md'
  await writeFile(mdOut, md.join('\n'))

  console.log('Escrito:')
  console.log(' -', resolve(jsonOut))
  console.log(' -', resolve(mdOut))
}

main().catch((e) => { console.error(e); process.exit(1) })

