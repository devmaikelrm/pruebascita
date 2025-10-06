Bot de Telegram - Variables de Entorno

Requisitos mínimos
- TELEGRAM_BOT_TOKEN: token del bot (formato 123456789:ABC...)
- TELEGRAM_ADMIN_CHAT: ID de chat autorizado principal
- (Opcional) TELEGRAM_ADMIN_CHAT_2, TELEGRAM_ADMIN_CHAT_LIST: más IDs
- DATABASE_URL: cadena Postgres (Supabase/Neon/Postgres) — solo necesaria para comandos que usan DB

Variables base
- TZ: zona horaria del servidor (ej: America/Havana)
- TELEGRAM_BOT_TOKEN: token del bot de Telegram
- TELEGRAM_ADMIN_CHAT: ID principal (el bot solo responde a IDs permitidos)
- TELEGRAM_ADMIN_CHAT_2: segundo ID opcional
- TELEGRAM_ADMIN_CHAT_LIST: lista separada por comas (111,222,333)
- DATABASE_URL: URI Postgres (opcional si usas solo el watcher)
  - Supabase: postgresql://postgres:PASS@db.<ref>.supabase.co:5432/postgres
  - El cliente fuerza SSL (rejectUnauthorized=false) si detecta dominio .supabase.co

Watcher de disponibilidad (Bookitit JSONP)
- DISPO_ENABLED: 1 para activar el sondeo periódico del endpoint de calendario.
- DISPO_PUBLICKEY / DISPO_SERVICE / DISPO_AGENDA: identificadores del widget (obligatorios si DISPO_ENABLED=1).
- DISPO_SRC / DISPO_SRVSRC: referers coherentes (recomendado fijarlos tal como carga el widget). Por defecto SRVSRC=https://citaconsular.es
- DISPO_DAYS: horizonte intuitivo en días (prioritario si > 0). Ej.: 90
- DISPO_MONTHS: alternativa por meses (mes actual + N-1 siguientes) si no defines DISPO_DAYS.
- DISPO_INTERVAL_SEC / DISPO_JITTER_PCT: frecuencia base y jitter (ej. 60s y 0.2 → 48–72s).
- DISPO_NIGHT_START / DISPO_NIGHT_END: ventana nocturna local (por defecto 00:00–06:00).
- DISPO_NIGHT_MIN_SEC / DISPO_NIGHT_MAX_SEC: intervalo en nocturno (por defecto 180–300s).
- DISPO_BACKOFF_SEC: backoff tras 2 errores seguidos (por defecto 300s).
- DISPO_VERBOSE: 1 para enviar "No hay citas" en cada ciclo (útil para validar). Si 0/omitido, solo notifica cuando hay cambios o errores.
- DISPO_RECIPIENTS: lista de chat IDs (coma) adicional a TELEGRAM_ADMIN_CHAT/LIST.

Segundo perfil (opcional)
- DISPO2_PUBLICKEY / DISPO2_SERVICE / DISPO2_AGENDA / DISPO2_SRC / DISPO2_SRVSRC: segundo widget a vigilar (ej. Turismo/Schengen).
- DISPO2_DAYS / DISPO2_INTERVAL_SEC / DISPO2_JITTER_PCT: usa valores propios o hereda del primer perfil.
- DISPO2_LABEL: etiqueta para prefijar mensajes (por defecto TURISMO).

Ejemplo (.env)
TZ=America/Havana
TELEGRAM_BOT_TOKEN=123456789:ABC...
TELEGRAM_ADMIN_CHAT=111111111
TELEGRAM_ADMIN_CHAT_LIST=333333333,444444444

# Solo watcher (DB opcional)
DISPO_ENABLED=1
DISPO_PUBLICKEY=2f21cd9c0d8aa26725bf8930e4691d645
DISPO_SERVICE=bkt195382
DISPO_AGENDA=bkt93764
DISPO_SRC=https://www.citaconsular.es/es/hosteds/widgetdefault/2f21cd9c0d8aa26725bf8930e4691d645/bkt195382
DISPO_SRVSRC=https://citaconsular.es
DISPO_DAYS=90
DISPO_INTERVAL_SEC=60
DISPO_JITTER_PCT=0.2
DISPO_NIGHT_START=00:00
DISPO_NIGHT_END=06:00
DISPO_NIGHT_MIN_SEC=180
DISPO_NIGHT_MAX_SEC=300
DISPO_BACKOFF_SEC=300
DISPO_VERBOSE=1

Notas
- /start y /help funcionan sin DB; otras funciones requieren DATABASE_URL.
- Si no recibes mensajes, inicia un chat con el bot en Telegram (envía /start) y verifica el chat ID.

Operación (PM2)
- Dev: pm2 start pnpm --name bot -- run -C bot dev
- Build+Start: pnpm -C bot build && pm2 start bot/dist/index.js --name bot
- Reiniciar con nuevas variables: pm2 restart bot --update-env
- Logs: pm2 logs bot --lines 200

