Bot de Telegram — Variables de Entorno

Requisitos mínimos
- TELEGRAM_BOT_TOKEN: token del bot (formato 123456789:ABC...)
- TELEGRAM_ADMIN_CHAT: ID de chat autorizado principal
- (Opcional) TELEGRAM_ADMIN_CHAT_2, TELEGRAM_ADMIN_CHAT_LIST: más IDs
- DATABASE_URL: cadena Postgres (Supabase/Neon/Postgres)

Variables
- TZ: zona horaria del servidor (ej: America/Havana)
- TELEGRAM_BOT_TOKEN: token del bot de Telegram
- TELEGRAM_ADMIN_CHAT: ID principal (el bot solo responde a IDs permitidos)
- TELEGRAM_ADMIN_CHAT_2: segundo ID opcional
- TELEGRAM_ADMIN_CHAT_LIST: lista separada por comas (111,222,333)
- DATABASE_URL: URI Postgres
  - Supabase: postgresql://postgres:PASS@db.<ref>.supabase.co:5432/postgres
  - El cliente fuerza SSL (rejectUnauthorized=false) si detecta dominio .supabase.co

Ejemplo (.env)
TZ=America/Havana
TELEGRAM_BOT_TOKEN=123456789:ABC...
TELEGRAM_ADMIN_CHAT=111111111
TELEGRAM_ADMIN_CHAT_2=222222222
TELEGRAM_ADMIN_CHAT_LIST=333333333,444444444
DATABASE_URL=postgresql://postgres:PASS@db.xxxxx.supabase.co:5432/postgres

Notas
- /start y /help no requieren DB; otros comandos sí.
- Si un usuario nuevo no recibe mensajes push, debe iniciar el chat con el bot (enviar /start) por políticas de Telegram.

Operación (PM2)
- Compilar: pnpm -C bot build
- Reiniciar: pm2 restart bot --update-env
- Logs: pm2 logs bot --lines 200

