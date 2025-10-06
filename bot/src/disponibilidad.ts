import TelegramBot from 'node-telegram-bot-api'

type Snapshot = { [date: string]: string[] }

type Config = {
  publicKey: string
  serviceId: string
  agendaId: string
  src?: string
  srvsrc?: string
  months?: number
  // Nuevo: horizonte en días (más intuitivo). Si se establece, tiene prioridad sobre months.
  days?: number
  intervalSec?: number
  jitterPct?: number
  lang?: string
  version?: string
  people?: string
  label?: string // etiqueta opcional para prefijar mensajes (p.ej., TURISMO/DNI)
}

// Verbosidad dinámica para mensajes "no hay citas"
let watcherVerbose = process.env.DISPO_VERBOSE === '1'
export function setWatcherVerbose(v: boolean) { watcherVerbose = !!v }
export function getWatcherVerbose() { return watcherVerbose }

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

function buildUrl(cfg: Required<Pick<Config, 'publicKey'|'serviceId'|'agendaId'|'lang'|'version'|'people'>> & { src?: string, srvsrc?: string }, range: { start: string, end: string }) {
  const u = new URL('https://www.citaconsular.es/onlinebookings/datetime/')
  u.searchParams.set('callback', `jQuery${Math.floor(Math.random()*1e12)}_${Date.now()}`)
  u.searchParams.set('type', 'default')
  u.searchParams.set('publickey', cfg.publicKey)
  u.searchParams.set('lang', cfg.lang)
  u.searchParams.append('services[]', cfg.serviceId)
  u.searchParams.append('agendas[]', cfg.agendaId)
  u.searchParams.set('version', cfg.version)
  if (cfg.src) u.searchParams.set('src', cfg.src)
  if (cfg.srvsrc) u.searchParams.set('srvsrc', cfg.srvsrc)
  u.searchParams.set('start', range.start)
  u.searchParams.set('end', range.end)
  u.searchParams.set('selectedPeople', cfg.people)
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

function sleep(ms: number) { return new Promise(r => setTimeout(r, ms)) }
function nextDelayMs(baseSec: number, jitterPct: number) {
  const base = baseSec * 1000
  const delta = base * jitterPct
  return Math.floor(base - delta + Math.random() * (2 * delta))
}

async function fetchMonth(url: string, referer: string) {
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0', 'Referer': referer } })
  const txt = await res.text()
  const jsonStr = stripJsonp(txt)
  let payload: any = null
  let parseError: string | null = null
  let noCallback = false
  let exceptionMessage: string | null = null
  try { payload = JSON.parse(jsonStr) } catch (e: any) { parseError = e?.message || String(e) }
  if (!payload && /no\s+callback\s+found/i.test(txt)) {
    noCallback = true
  }
  if (payload && typeof payload === 'object' && (payload as any).Exception) {
    const ex = (payload as any).Exception
    if (ex && Array.isArray(ex.errors) && ex.errors.length) {
      exceptionMessage = ex.errors.map((x: any) => x?.message || '').filter(Boolean).join('; ')
    } else {
      try { exceptionMessage = JSON.stringify(ex) } catch { exceptionMessage = 'Exception' }
    }
  }
  return { ok: res.ok, status: res.status, payload, raw: txt, parseError, noCallback, exceptionMessage }
}

export function startDisponibilidadWatcher(bot: TelegramBot, recipients: number[], cfg: Config) {
  const months = cfg.months ?? 6
  const intervalSec = cfg.intervalSec ?? 60
  const jitterPct = cfg.jitterPct ?? 0.2
  const lang = cfg.lang ?? 'es'
  const version = cfg.version ?? '5'
  const people = cfg.people ?? '1'
  const referer = cfg.src || 'https://www.citaconsular.es/'
  const labelPrefix = cfg.label ? `[${cfg.label}] ` : ''
  const backoffSec = Number(process.env.DISPO_BACKOFF_SEC || '300') // 5 min por defecto
  // Horizonte en días (más intuitivo). Si DISPO_DAYS o cfg.days > 0, se usa en lugar de months.
  const envDays = Number(process.env.DISPO_DAYS || '0')
  const horizonDays = cfg.days && cfg.days > 0 ? cfg.days : (envDays > 0 ? envDays : 0)
  // Modo nocturno (00:00-06:00 por defecto) con intervalos más altos
  const nightStart = (process.env.DISPO_NIGHT_START || '00:00').split(':').map((x) => Number(x)) // [h,m]
  const nightEnd = (process.env.DISPO_NIGHT_END || '06:00').split(':').map((x) => Number(x)) // [h,m]
  const nightMinSec = Number(process.env.DISPO_NIGHT_MIN_SEC || '180')
  const nightMaxSec = Number(process.env.DISPO_NIGHT_MAX_SEC || '300')

  let prev: Snapshot = {}
  let consecutiveErrors = 0
  let backoffUntil = 0

  function addDaysUTC(d: Date, days: number) {
    const x = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + days))
    return x
  }

  function monthStartUTC(d: Date) {
    return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1))
  }
  function monthEndUTC(d: Date) {
    return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 0))
  }

  function computeRanges(): { start: string; end: string }[] {
    // Si tenemos horizonte en días, construimos rangos por mes que cubran [hoy, hoy + (days-1)]
    if (horizonDays && horizonDays > 0) {
      const today = new Date()
      const startDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()))
      const endDate = addDaysUTC(startDate, horizonDays - 1)

      const ranges: { start: string; end: string }[] = []
      // Itera por meses entre startDate y endDate
      let cursor = monthStartUTC(startDate)
      while (cursor <= endDate) {
        const mStart = monthStartUTC(cursor)
        const mEnd = monthEndUTC(cursor)
        // Intersección con [startDate, endDate]
        const segStart = new Date(Math.max(mStart.getTime(), startDate.getTime()))
        const segEnd = new Date(Math.min(mEnd.getTime(), endDate.getTime()))
        ranges.push({ start: fmt(segStart), end: fmt(segEnd) })
        // siguiente mes
        cursor = new Date(Date.UTC(cursor.getUTCFullYear(), cursor.getUTCMonth() + 1, 1))
      }
      return ranges
    }
    // Por defecto: meses sucesivos (compatibilidad)
    const rs: { start: string; end: string }[] = []
    for (let i = 0; i < months; i++) rs.push(monthRange(i))
    return rs
  }

  async function cycleOnce() {
    try {
      let snap: Snapshot = {}
      const ranges = computeRanges()
      for (const range of ranges) {
        const url = buildUrl({ publicKey: cfg.publicKey, serviceId: cfg.serviceId, agendaId: cfg.agendaId, lang, version, people, src: cfg.src, srvsrc: cfg.srvsrc }, range)
        const r = await fetchMonth(url, referer)
        if (r.noCallback) {
          const txt = `⚠️ Endpoint respondió "no callback found" para ${range.start}→${range.end}. Verifica parámetros/Referer.`
          try { console.log(`[TX-WATCHER] ${labelPrefix}no-callback-found ${range.start}->${range.end}`) } catch {}
          for (const chatId of recipients) await bot.sendMessage(chatId, txt)
          consecutiveErrors++
          continue
        }
        if (r.exceptionMessage) {
          const txt = `⚠️ Backend Exception (${range.start}→${range.end}): ${r.exceptionMessage}`
          try { console.log(`[TX-WATCHER] ${labelPrefix}exception ${range.start}->${range.end}: ${r.exceptionMessage}`) } catch {}
          for (const chatId of recipients) await bot.sendMessage(chatId, txt)
          consecutiveErrors++
          continue
        }
        const monthSnap = normalizeSlotsFromPayload(r.payload)
        for (const d of Object.keys(monthSnap)) {
          snap[d] = Array.from(new Set([...(snap[d] || []), ...monthSnap[d]])).sort()
        }
      }
      const { addedDays, addedTimes } = diffSnapshots(prev, snap)
      const ts = new Date().toLocaleString()
      if (addedDays.length || Object.keys(addedTimes).length) {
        const topDays = Object.keys(addedTimes)
          .slice(0, 10)
          .map((d) => `• ${d}: ${(addedTimes[d] || []).slice(0, 6).join(', ')}${(addedTimes[d] || []).length > 6 ? '…' : ''}`)
          .join('\n')
        const text = `${labelPrefix}🔔 Nuevas citas detectadas (${ts})\nDías: ${addedDays.join(', ') || '-'}\n\n${topDays || ''}`
        try { console.log(`[TX-WATCHER] ${labelPrefix}NEW slots on: ${addedDays.join(', ') || '-'}`) } catch {}
        for (const chatId of recipients) await bot.sendMessage(chatId, text)
        consecutiveErrors = 0
      } else {
        if (watcherVerbose) {
          const text = `${labelPrefix}ℹ️ ${ts}: No hay citas nuevas (comprobación OK)`
          try { console.log(`[TX-WATCHER] ${labelPrefix}NO slots`) } catch {}
          for (const chatId of recipients) await bot.sendMessage(chatId, text)
        }
        consecutiveErrors = 0
      }
      prev = snap
    } catch (e: any) {
      const msg = `${labelPrefix}⚠️ Error en comprobación de disponibilidad: ${e?.message || e}`
      for (const chatId of recipients) await bot.sendMessage(chatId, msg)
      consecutiveErrors++
      // activa backoff tras 2 errores consecutivos
      if (consecutiveErrors >= 2) {
        backoffUntil = Date.now() + backoffSec * 1000
      }
    }
  }

  ;(async function loop() {
    for (;;) {
      await cycleOnce()
      const nowTs = Date.now()
      // Helper to check si estamos en ventana nocturna local
      const now = new Date()
      const h = now.getHours(), m = now.getMinutes()
      const curMin = h * 60 + m
      const ns = nightStart[0] * 60 + (nightStart[1] || 0)
      const ne = nightEnd[0] * 60 + (nightEnd[1] || 0)
      const inNight = ns <= ne ? (curMin >= ns && curMin < ne) : (curMin >= ns || curMin < ne)

      // Base delay con jitter (día)
      let base = nextDelayMs(intervalSec, jitterPct)
      // Override en ventana nocturna
      if (inNight) {
        const min = nightMinSec * 1000
        const max = nightMaxSec * 1000
        base = Math.floor(min + Math.random() * (Math.max(0, max - min)))
      }
      // Aplicar backoff si activo
      const sleepMs = backoffUntil > nowTs ? Math.max(base, backoffUntil - nowTs) : base
      await sleep(sleepMs)
    }
  })()
}
