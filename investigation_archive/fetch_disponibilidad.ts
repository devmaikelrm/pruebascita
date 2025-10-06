// Fetch disponibilidad desde el endpoint JSONP de citaconsular
// Uso:
//   PUBLICKEY=... SERVICE=bkt... AGENDA=bkt... SRC=... SRVSRC=... MONTHS=6 pnpm dlx tsx investigation_archive/fetch_disponibilidad.ts

const PUBLICKEY = process.env.PUBLICKEY || ''
const SERVICE = process.env.SERVICE || ''
const AGENDA = process.env.AGENDA || ''
const LANG = process.env.LANG || 'es'
const VERSION = process.env.VERSION || '5'
const SRC = process.env.SRC || ''
const SRVSRC = process.env.SRVSRC || 'https://citaconsular.es'
const PEOPLE = process.env.PEOPLE || '1'
const MONTHS = Number(process.env.MONTHS || '6')

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
  u.searchParams.set('callback', `jQuery${Math.floor(Math.random()*1e12)}_${Date.now()}`)
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

async function main() {
  const results: any[] = []
  for (let i = 0; i < MONTHS; i++) {
    const range = monthRange(i)
    const url = buildUrl(range)
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0', 'Referer': SRC || 'https://www.citaconsular.es/' } })
    const text = await res.text()
    const jsonStr = stripJsonp(text)
    let payload: any = null
    try { payload = JSON.parse(jsonStr) } catch {}
    results.push({ range, url, ok: res.ok, status: res.status, length: text.length, payload })
  }
  const out = 'investigation_archive/disponibilidad.json'
  const fs = await import('node:fs/promises')
  await fs.writeFile(out, JSON.stringify(results, null, 2))
  console.log('Guardado:', out)
}

main().catch((e) => { console.error(e); process.exit(1) })

