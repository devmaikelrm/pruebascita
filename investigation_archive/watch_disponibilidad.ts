// Watcher de disponibilidad con intervalo y jitter configurables.
// Uso típico (PowerShell):
//   $env:PUBLICKEY='...'
//   $env:SERVICE='bkt...'
//   $env:AGENDA='bkt...'
//   $env:SRC='https://www.citaconsular.es/es/hosteds/widgetdefault/.../bkt...'
//   $env:SRVSRC='https://citaconsular.es'
//   $env:MONTHS='6'
//   $env:INTERVAL_SEC='60'
//   pnpm dlx tsx investigation_archive/watch_disponibilidad.ts

type Snapshot = { [date: string]: string[] }

const PUBLICKEY = process.env.PUBLICKEY || ''
const SERVICE = process.env.SERVICE || ''
const AGENDA = process.env.AGENDA || ''
const LANG = process.env.LANG || 'es'
const VERSION = process.env.VERSION || '5'
const SRC = process.env.SRC || ''
const SRVSRC = process.env.SRVSRC || 'https://citaconsular.es'
const PEOPLE = process.env.PEOPLE || '1'
const MONTHS = Number(process.env.MONTHS || '6')
const INTERVAL_SEC = Number(process.env.INTERVAL_SEC || '60')
const JITTER_PCT = Number(process.env.JITTER_PCT || '0.2') // ±20% por defecto

if (!PUBLICKEY || !SERVICE || !AGENDA) {
  console.error('Faltan variables: PUBLICKEY, SERVICE, AGENDA')
  process.exit(1)
}

function fmt(d: Date) {
  const y = d.getUTCFullYear()
  const m = String(d.getUTCMonth() + 1).padStart(2, '0')
  const day = String(d.getUTCDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function monthRange(offset: number) {
  const now = new Date()
  const first = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + offset, 1))
  const last = new Date(Date.UTC(first.getUTCFullYear(), first.getUTCMonth() + 1, 0))
  return { start: fmt(first), end: fmt(last) }
}

function buildUrl({ start, end }: { start: string; end: string }) {
  const u = new URL('https://www.citaconsular.es/onlinebookings/datetime/')
  u.searchParams.set('callback', `jQuery${Math.floor(Math.random() * 1e12)}_${Date.now()}`)
  u.searchParams.set('type', 'default')
  u.searchParams.set('publickey', PUBLICKEY)
  u.searchParams.set('lang', LANG)
  u.searchParams.append('services[]', SERVICE)
  u.searchParams.append('agendas[]', AGENDA)
  u.searchParams.set('version', VERSION)
  if (SRC) u.searchParams.set('src', SRC)
  if (SRVSRC) u.searchParams.set('srvsrc', SRVSRC)
  u.searchParams.set('start', start)
  u.searchParams.set('end', end)
  u.searchParams.set('selectedPeople', PEOPLE)
  u.searchParams.set('_', String(Date.now()))
  return u.toString()
}

function stripJsonp(text: string) {
  const m = text.match(/^\s*[^\(]+\((.*)\)\s*;?\s*$/s)
  return m ? m[1] : ''
}

function looksLikeDate(str: string) { return /\b\d{4}-\d{2}-\d{2}\b/.test(str) }
function looksLikeTime(str: string) { return /\b\d{2}:\d{2}(?::\d{2})?\b/.test(str) }

function extractDateTimeStrings(obj: any, out: string[] = []) {
  if (obj == null) return out
  if (typeof obj === 'string') { if (looksLikeDate(obj) || looksLikeTime(obj)) out.push(obj); return out }
  if (Array.isArray(obj)) { for (const v of obj) extractDateTimeStrings(v, out); return out }
  if (typeof obj === 'object') { for (const k of Object.keys(obj)) extractDateTimeStrings(obj[k], out) }
  return out
}

function normalizeSlotsFromPayload(payload: any): Snapshot {
  const dayMap = new Map<string, Set<string>>()
  if (payload && Array.isArray(payload.Slots)) {
    for (const s of payload.Slots) {
      let date: string | null = (s.Date || s.date || s.Day || s.day) ?? null
      let time: string | null = (s.Time || s.time || s.Hour || s.hour) ?? null
      if (!date) {
        const strs = extractDateTimeStrings(s)
        const d = strs.find(looksLikeDate)
        const t = strs.find(looksLikeTime)
        if (d) date = d
        if (t) time = t
        const iso = strs.find((x) => /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(x))
        if (iso) {
          const m = iso.match(/(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2})/)
          if (m) { date = date || m[1]; time = time || m[2] }
        }
      }
      if (date) {
        if (!dayMap.has(date)) dayMap.set(date, new Set())
        if (time) dayMap.get(date)!.add(time)
      }
      const timesArr = (s.Times || s.times || s.Hours || s.hours) as any[] | undefined
      if (date && Array.isArray(timesArr)) {
        if (!dayMap.has(date)) dayMap.set(date, new Set())
        for (const t of timesArr) {
          const tt = typeof t === 'string' ? t : (t?.time || t?.Time || '')
          if (tt) dayMap.get(date)!.add(tt)
        }
      }
    }
  } else {
    const strs = extractDateTimeStrings(payload)
    for (const s of strs) if (looksLikeDate(s)) { if (!dayMap.has(s)) dayMap.set(s, new Set()) }
  }
  const out: Snapshot = {}
  for (const [d, set] of dayMap.entries()) out[d] = Array.from(set).sort()
  return out
}

function diffSnapshots(prev: Snapshot, curr: Snapshot) {
  const addedDays: string[] = []
  const addedTimes: { [date: string]: string[] } = {}
  const prevDays = new Set(Object.keys(prev))
  const currDays = new Set(Object.keys(curr))
  for (const d of currDays) if (!prevDays.has(d)) addedDays.push(d)
  for (const d of currDays) {
    const pt = new Set(prev[d] || [])
    const ct = new Set(curr[d] || [])
    const add: string[] = []
    for (const t of ct) if (!pt.has(t)) add.push(t)
    if (add.length) addedTimes[d] = add.sort()
  }
  return { addedDays: addedDays.sort(), addedTimes }
}

async function fetchMonth(range: { start: string; end: string }) {
  const url = buildUrl(range)
  const referer = SRC || 'https://www.citaconsular.es/'
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0', 'Referer': referer } })
  const txt = await res.text()
  const jsonStr = stripJsonp(txt)
  let payload: any = null
  try { payload = JSON.parse(jsonStr) } catch {}
  return { range, url, ok: res.ok, status: res.status, payload }
}

async function cycle(prev: Snapshot) {
  const all: Snapshot = {}
  for (let i = 0; i < MONTHS; i++) {
    const range = monthRange(i)
    const r = await fetchMonth(range)
    const snap = normalizeSlotsFromPayload(r.payload)
    for (const d of Object.keys(snap)) {
      all[d] = Array.from(new Set([...(all[d] || []), ...snap[d]])).sort()
    }
  }
  const { addedDays, addedTimes } = diffSnapshots(prev, all)
  return { snap: all, addedDays, addedTimes }
}

function sleep(ms: number) { return new Promise(r => setTimeout(r, ms)) }
function nextDelayMs() {
  const base = INTERVAL_SEC * 1000
  const delta = base * JITTER_PCT
  return Math.floor(base - delta + Math.random() * (2 * delta))
}

async function main() {
  const fs = await import('node:fs/promises')
  const statePath = 'investigation_archive/watch_state.json'
  let prev: Snapshot = {}
  try { prev = JSON.parse(await fs.readFile(statePath, 'utf8')) } catch {}

  for (;;) {
    const start = new Date()
    try {
      const { snap, addedDays, addedTimes } = await cycle(prev)
      const ts = new Date().toISOString()
      if (addedDays.length || Object.keys(addedTimes).length) {
        console.log(`[${ts}] NUEVOS: días=${addedDays.join(',') || '-'}; horas=${Object.keys(addedTimes).length}`)
        await fs.writeFile('investigation_archive/watch_events.log', `${ts} NEW ${JSON.stringify({ addedDays, addedTimes })}\n`, { flag: 'a' })
        await fs.writeFile('investigation_archive/normalized_disponibilidad.json', JSON.stringify({ days: snap }, null, 2))
        prev = snap
        await fs.writeFile(statePath, JSON.stringify(prev))
      } else {
        console.log(`[${ts}] sin cambios`)
      }
    } catch (e) {
      console.error('Error en ciclo:', e)
    }
    const waited = nextDelayMs()
    const dt = (Date.now() - start.getTime())
    const sleepMs = Math.max(0, waited - dt)
    console.log(`Sleeping ~${Math.round(sleepMs / 1000)}s (jitter)`)
    await sleep(sleepMs)
  }
}

main().catch((e) => { console.error(e); process.exit(1) })

