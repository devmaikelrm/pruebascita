import TelegramBot from 'node-telegram-bot-api'
import dotenv from 'dotenv'
// Import diferido para no cargar comandos/DB si no hay DATABASE_URL
// import { TelegramCommands } from './commands.js'
import { startDisponibilidadWatcher } from './disponibilidad.js'

dotenv.config()

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const ADMIN_CHAT_1 = process.env.TELEGRAM_ADMIN_CHAT
const ADMIN_CHAT_2 = process.env.TELEGRAM_ADMIN_CHAT_2
const ADMIN_CHAT_LIST = process.env.TELEGRAM_ADMIN_CHAT_LIST // optional comma-separated

const allowedIds: Set<string> = new Set()
if (ADMIN_CHAT_LIST) ADMIN_CHAT_LIST.split(',').map((s) => s.trim()).filter(Boolean).forEach((id) => allowedIds.add(id))
if (ADMIN_CHAT_1) allowedIds.add(ADMIN_CHAT_1)
if (ADMIN_CHAT_2) allowedIds.add(ADMIN_CHAT_2)

if (!TELEGRAM_BOT_TOKEN) {
  console.error('TELEGRAM_BOT_TOKEN environment variable is required')
  process.exit(1)
}

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true })
bot.on('polling_error', (err) => console.error('Polling error:', err instanceof Error ? err.message : err))
// @ts-ignore
bot.on('webhook_error', (err) => console.error('Webhook error:', err instanceof Error ? err.message : err))
// TX logger: wrap sendMessage to log outgoing notifications
try {
  const origSend = (bot as any).sendMessage?.bind(bot)
  ;(bot as any).sendMessage = async (chatId: any, text: any, options?: any) => {
    try {
      const preview = typeof text === 'string' ? text.replace(/\s+/g, ' ').slice(0, 180) : '[non-string]'
      console.log(`[TX] ${chatId}: ${preview}`)
    } catch {}
    return origSend(chatId, text, options)
  }
} catch {}

let commands: any | null = null
let storage: any = null
if (process.env.DATABASE_URL) {
  try {
    const m = await import('./storage.js')
    const c = await import('./commands.js')
    storage = m.storage
    commands = new c.TelegramCommands(bot, storage)
  } catch (e) {
    console.warn('[BOT] No storage available. Commands requiring DB disabled.')
  }
} else {
  console.warn('[BOT] DATABASE_URL not set. Running watcher-only mode.')
}
console.log('Spanish Consular Bot starting...')

bot.setMyCommands([
  { command: 'start', description: 'Welcome message and registration' },
  { command: 'operador', description: 'Register as an operator' },
  { command: 'cliente', description: 'Manage clients' },
  { command: 'preferencia', description: 'Set client preferences' },
  { command: 'status', description: 'Check system status' },
  { command: 'captcha', description: 'Solve captcha challenges' },
  { command: 'queue', description: 'Check appointment queue' },
  { command: 'span', description: 'Toggle “no citas” messages (on/off)' },
  { command: 'testnoti', description: 'Send test notifications (PRUEBA)' },
  { command: 'help', description: 'Show available commands' },
])

bot.on('message', async (msg) => {
  const chatId = msg.chat.id
  const text = msg.text
  try { console.log(`[RX] ${chatId}: ${text ?? '<non-text>'}`) } catch {}
  if (!text) return

  if (allowedIds.size > 0 && !allowedIds.has(chatId.toString())) {
    if (text.startsWith('/start')) await bot.sendMessage(chatId, `Acceso restringido. Tu Telegram chat ID es: ${chatId}`)
    return
  }
  try {
    // Comando /span disponible incluso sin DB
    if (text.toLowerCase().startsWith('/span')) {
      const parts = text.trim().split(/\s+/)
      const sub = (parts[1] || '').toLowerCase()
      if (sub === 'on' || sub === 'off') {
        const want = sub === 'on'
        const disp = await import('./disponibilidad.js')
        disp.setWatcherVerbose(want)
        await bot.sendMessage(chatId, want
          ? '✅ Verbosidad activada: se enviará “No hay citas” en cada comprobación.'
          : '✅ Verbosidad desactivada: solo se avisará cuando haya nuevas citas o errores.')
      } else {
        const disp = await import('./disponibilidad.js')
        const cur = disp.getWatcherVerbose()
        await bot.sendMessage(chatId, `ℹ️ Estado actual de verbosidad: ${cur ? 'ON' : 'OFF'}\nUsa /span on | /span off`)
      }
      return
    }
    if (text.toLowerCase().startsWith('/testnoti')) {
      const now = new Date().toLocaleString()
      const ok = `🔔 [PRUEBA] Nuevas citas detectadas (${now})\nDías: 2025-10-15, 2025-10-18\n• 2025-10-15: 09:00, 10:30\n• 2025-10-18: 11:15, 12:00\nEste es un mensaje de prueba; no corresponde a citas reales.`
      const err = `⚠️ [PRUEBA] Error en comprobación de disponibilidad: Timeout (simulado).\nEste es un mensaje de prueba; no corresponde a un fallo real.`
      await bot.sendMessage(chatId, ok)
      await bot.sendMessage(chatId, err)
      return
    }
    if (!commands) {
      if (text.startsWith('/start')) await bot.sendMessage(chatId, 'Bot en modo watcher (sin DB).');
      return
    }
    if (text.startsWith('/start') || text.startsWith('/help')) { await commands.handleCommand(msg, undefined); return }
    const operator = await storage.getOperatorByTelegramId(chatId.toString())
    if (!operator && !text.startsWith('/operador')) { await bot.sendMessage(chatId, 'Necesitas registrarte como operador. Usa /operador'); return }
    if (text.startsWith('/')) await commands.handleCommand(msg, operator); else await commands.handleMessage(msg, operator)
  } catch (error) {
    console.error('Error handling message:', error)
    await bot.sendMessage(chatId, 'Ocurrió un error. Intenta de nuevo.')
  }
})

bot.on('callback_query', async (query) => {
  try { console.log(`[RX-CB] ${query.from.id}: ${query.data ?? ''}`) } catch {}
  if (allowedIds.size > 0 && !allowedIds.has(query.from.id.toString())) return
  try {
    if (!commands) { await bot.answerCallbackQuery(query.id, { text: 'DB no configurada' }); return }
    const operator = await storage.getOperatorByTelegramId(query.from.id.toString())
    if (!operator) { await bot.answerCallbackQuery(query.id, { text: 'Access denied' }); return }
    await commands.handleCallback(query, operator)
  } catch (error) {
    console.error('Error handling callback:', error)
    await bot.answerCallbackQuery(query.id, { text: 'Error occurred' })
  }
})

process.on('SIGTERM', () => { console.log('Bot shutting down gracefully...'); bot.stopPolling(); process.exit(0) })
process.on('SIGINT', () => { console.log('Bot shutting down gracefully...'); bot.stopPolling(); process.exit(0) })

console.log('Spanish Consular Bot is running! ✅')

if (process.env.DISPO_ENABLED === '1') {
  const recipients: number[] = []
  if (process.env.DISPO_RECIPIENTS) for (const id of process.env.DISPO_RECIPIENTS.split(',').map(s=>s.trim()).filter(Boolean)) { const n = Number(id); if (Number.isFinite(n)) recipients.push(n) }
  if (process.env.TELEGRAM_ADMIN_CHAT_LIST) for (const id of process.env.TELEGRAM_ADMIN_CHAT_LIST.split(',').map(s=>s.trim()).filter(Boolean)) { const n = Number(id); if (Number.isFinite(n)) recipients.push(n) }
  if (process.env.TELEGRAM_ADMIN_CHAT) { const n = Number(process.env.TELEGRAM_ADMIN_CHAT); if (Number.isFinite(n)) recipients.push(n) }
  if (process.env.TELEGRAM_ADMIN_CHAT_2) { const n = Number(process.env.TELEGRAM_ADMIN_CHAT_2); if (Number.isFinite(n)) recipients.push(n) }
  const uniqueRecipients = Array.from(new Set(recipients))
  if (uniqueRecipients.length === 0) {
    console.warn('[DISPO] No recipients configured. Watcher not started.')
  } else {
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
      label: process.env.DISPO_LABEL || '',
    }
    if (!cfg.publicKey || !cfg.serviceId || !cfg.agendaId) {
      console.warn('[DISPO] Missing DISPO_PUBLICKEY / DISPO_SERVICE / DISPO_AGENDA. Watcher not started.')
    } else {
      console.log('[DISPO] Starting watcher: interval', cfg.intervalSec, 'sec, days', cfg.days)
      startDisponibilidadWatcher(bot, uniqueRecipients, cfg)
    }

    // Soporte de segundo perfil (p.ej., TURISMO) vía DISPO2_*
    const cfg2 = {
      publicKey: process.env.DISPO2_PUBLICKEY || '',
      serviceId: process.env.DISPO2_SERVICE || '',
      agendaId: process.env.DISPO2_AGENDA || '',
      src: process.env.DISPO2_SRC || '',
      srvsrc: process.env.DISPO2_SRVSRC || process.env.DISPO_SRVSRC || 'https://citaconsular.es',
      days: Number(process.env.DISPO2_DAYS || process.env.DISPO_DAYS || '0'),
      months: Number(process.env.DISPO2_MONTHS || process.env.DISPO_MONTHS || '6'),
      intervalSec: Number(process.env.DISPO2_INTERVAL_SEC || process.env.DISPO_INTERVAL_SEC || '60'),
      jitterPct: Number(process.env.DISPO2_JITTER_PCT || process.env.DISPO_JITTER_PCT || '0.2'),
      label: process.env.DISPO2_LABEL || 'TURISMO',
    }
    if (cfg2.publicKey && cfg2.serviceId && cfg2.agendaId) {
      console.log('[DISPO] Starting second watcher (profile 2):', cfg2.label)
      startDisponibilidadWatcher(bot, uniqueRecipients, cfg2)
    }
  }
}
