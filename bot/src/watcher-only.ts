import 'dotenv/config'
import TelegramBot from 'node-telegram-bot-api'
import { startDisponibilidadWatcher } from './disponibilidad.js'

const token = process.env.TELEGRAM_BOT_TOKEN
if (!token) {
  console.error('[WATCHER] TELEGRAM_BOT_TOKEN is required')
  process.exit(1)
}

const recipients: number[] = []
function pushIds(csv?: string) {
  if (!csv) return
  for (const id of csv.split(',').map((s) => s.trim()).filter(Boolean)) {
    const n = Number(id)
    if (Number.isFinite(n)) recipients.push(n)
  }
}
pushIds(process.env.DISPO_RECIPIENTS)
pushIds(process.env.TELEGRAM_ADMIN_CHAT_LIST || '')
if (process.env.TELEGRAM_ADMIN_CHAT) {
  const n = Number(process.env.TELEGRAM_ADMIN_CHAT)
  if (Number.isFinite(n)) recipients.push(n)
}
if (process.env.TELEGRAM_ADMIN_CHAT_2) {
  const n = Number(process.env.TELEGRAM_ADMIN_CHAT_2)
  if (Number.isFinite(n)) recipients.push(n)
}
const uniqueRecipients = Array.from(new Set(recipients))
if (uniqueRecipients.length === 0) {
  console.error('[WATCHER] No recipients configured. Exiting.')
  process.exit(1)
}

const cfg = {
  publicKey: process.env.DISPO_PUBLICKEY || '',
  serviceId: process.env.DISPO_SERVICE || '',
  agendaId: process.env.DISPO_AGENDA || '',
  src: process.env.DISPO_SRC || '',
  srvsrc: process.env.DISPO_SRVSRC || 'https://citaconsular.es',
  days: Number(process.env.DISPO_DAYS || '0'),
  months: Number(process.env.DISPO_MONTHS || '6'),
  intervalSec: Number(process.env.DISPO_INTERVAL_SEC || '60'),
  jitterPct: Number(process.env.DISPO_JITTER_PCT || '0.2'),
}
if (!cfg.publicKey || !cfg.serviceId || !cfg.agendaId) {
  console.error('[WATCHER] Missing DISPO_PUBLICKEY / DISPO_SERVICE / DISPO_AGENDA')
  process.exit(1)
}

console.log('[WATCHER] Starting watcher-only process: interval', cfg.intervalSec, 'sec, days', cfg.days)
const bot = new TelegramBot(token, { polling: true })
startDisponibilidadWatcher(bot, uniqueRecipients, cfg)
process.on('SIGTERM', () => { bot.stopPolling(); process.exit(0) })
process.on('SIGINT', () => { bot.stopPolling(); process.exit(0) })

