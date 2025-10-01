#!/usr/bin/env bash
set -e

echo "╔════════════════════════════════════════════════════════════╗"
echo "║   CitaConsulares - Corrección y Arranque Final            ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

cd /opt/CitaConsulares

# Limpiar compilaciones anteriores
echo "▶ Limpiando compilaciones anteriores..."
rm -rf shared/dist bot/dist worker/dist 2>/dev/null || true
rm -rf shared/node_modules/.cache bot/node_modules/.cache worker/node_modules/.cache 2>/dev/null || true

# Reinstalar dependencias
echo "▶ Reinstalando dependencias..."
pnpm install -r

# Compilar en orden correcto
echo "▶ Compilando shared..."
cd shared
pnpm build
cd ..

echo "▶ Compilando bot..."
cd bot
pnpm build
cd ..

echo "▶ Compilando worker..."
cd worker
pnpm build
cd ..

echo "✓ Compilación completada"
echo ""

# Verificar archivos .env
echo "▶ Verificando archivos .env..."
if [[ ! -f bot/.env ]]; then
    echo "Creando bot/.env..."
    cat > bot/.env <<'ENVEOF'
TZ=America/Havana
TELEGRAM_BOT_TOKEN=7271022887:AAFLlCyJyXfGchaEsJ2-U4VRpSYKXwYrmkc
TELEGRAM_ADMIN_CHAT=6213988452
TELEGRAM_ADMIN_CHAT_LIST=6213988452,7652036984,778282548
DATABASE_URL=postgresql://postgres.igbphvvaqnafxousalrn:Rita.1014@aws-1-us-east-2.pooler.supabase.com:6543/postgres
ENVEOF
    chmod 600 bot/.env
fi

if [[ ! -f worker/.env ]]; then
    echo "Creando worker/.env..."
    cat > worker/.env <<'ENVEOF'
TZ=America/Havana
TELEGRAM_BOT_TOKEN=7271022887:AAFLlCyJyXfGchaEsJ2-U4VRpSYKXwYrmkc
TELEGRAM_ADMIN_CHAT=6213988452
WIDGET_URL=
CHECK_INTERVAL_MIN=6
CHECK_INTERVAL_MAX=10
COOLDOWN_BLOCK_HOURS=3
CAPTCHA_PROVIDER=
CAPTCHA_API_KEY=
CAPTCHA_TIMEOUT_SEC=25
DATABASE_URL=postgresql://postgres.igbphvvaqnafxousalrn:Rita.1014@aws-1-us-east-2.pooler.supabase.com:6543/postgres
ENVEOF
    chmod 600 worker/.env
fi

echo "✓ Archivos .env verificados"
echo ""

# Configurar PM2
echo "▶ Configurando PM2..."
mkdir -p /var/log/pm2

cat > ecosystem.config.cjs <<'ECOEOF'
module.exports = {
  apps: [
    {
      name: 'bot',
      cwd: '/opt/CitaConsulares/bot',
      script: 'dist/index.js',
      env_file: '/opt/CitaConsulares/bot/.env',
      max_restarts: 10,
      restart_delay: 5000,
      out_file: '/var/log/pm2/bot.out.log',
      error_file: '/var/log/pm2/bot.error.log',
      merge_logs: true,
      time: true
    },
    {
      name: 'worker',
      cwd: '/opt/CitaConsulares/worker',
      script: 'dist/index.js',
      env_file: '/opt/CitaConsulares/worker/.env',
      max_restarts: 10,
      restart_delay: 5000,
      out_file: '/var/log/pm2/worker.out.log',
      error_file: '/var/log/pm2/worker.error.log',
      merge_logs: true,
      time: true
    }
  ]
};
ECOEOF

echo "✓ PM2 configurado"
echo ""

# Detener procesos anteriores
echo "▶ Deteniendo procesos anteriores..."
pm2 delete all 2>/dev/null || true

# Iniciar servicios
echo "▶ Iniciando servicios..."
pm2 start ecosystem.config.cjs

# Guardar configuración
pm2 save

# Configurar auto-inicio
pm2 startup systemd -u root --hp /root | grep -E '^sudo' | bash || true

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║              ✓ SERVICIOS INICIADOS                        ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Mostrar estado
pm2 status

echo ""
echo "Logs del bot (últimas 20 líneas):"
pm2 logs bot --lines 20 --nostream 2>/dev/null || echo "Sin logs aún"

echo ""
echo "Logs del worker (últimas 20 líneas):"
pm2 logs worker --lines 20 --nostream 2>/dev/null || echo "Sin logs aún"

echo ""
echo "═══════════════════════════════════════════════════════════"
echo "  ✓ TODO COMPLETADO"
echo "═══════════════════════════════════════════════════════════"
echo ""
echo "Prueba el bot en Telegram:"
echo "  1. Abre Telegram"
echo "  2. Busca tu bot"
echo "  3. Envía /start"
echo ""
echo "IDs autorizados:"
echo "  - 6213988452"
echo "  - 7652036984"
echo "  - 778282548"
echo ""

