Worker Playwright — Variables de Entorno

Requisitos mínimos
- TELEGRAM_BOT_TOKEN y TELEGRAM_ADMIN_CHAT (o *_ID)
- DATABASE_URL (Postgres/Supabase)
- WIDGET_URL (URL del widget Bookitit del trámite/oficina)

Variables
- TZ: zona horaria (ej: America/Havana)
- TELEGRAM_BOT_TOKEN: token del bot para notificaciones
- TELEGRAM_ADMIN_CHAT: ID admin principal
- TELEGRAM_ADMIN_CHAT_2 / TELEGRAM_ADMIN_CHAT_LIST: IDs adicionales (opcional)
- WIDGET_URL: URL del widget Bookitit a monitorear
- CHECK_INTERVAL_MIN / CHECK_INTERVAL_MAX: intervalo (min) con jitter
- COOLDOWN_BLOCK_HOURS: horas de cooldown tras bloqueo
- CAPTCHA_PROVIDER: proveedor (2captcha/capmonster) opcional
- CAPTCHA_API_KEY: API key del proveedor (opcional)
- CAPTCHA_TIMEOUT_SEC: tiempo máximo de intento automático
- DATABASE_URL: URI Postgres (SSL tolerante para Supabase automático)

Ejemplo (.env)
TZ=America/Havana
TELEGRAM_BOT_TOKEN=123456789:ABC...
TELEGRAM_ADMIN_CHAT=111111111
TELEGRAM_ADMIN_CHAT_2=222222222
WIDGET_URL=https://www.citaconsular.es/widget/...
CHECK_INTERVAL_MIN=6
CHECK_INTERVAL_MAX=10
COOLDOWN_BLOCK_HOURS=3
CAPTCHA_PROVIDER=2captcha
CAPTCHA_API_KEY=xxxxx
CAPTCHA_TIMEOUT_SEC=25
DATABASE_URL=postgresql://postgres:PASS@db.xxxxx.supabase.co:5432/postgres

Operación (PM2)
- Compilar: pnpm -C worker build
- Reiniciar: pm2 restart worker --update-env
- Logs: pm2 logs worker --lines 200

