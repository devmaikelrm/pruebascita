#!/usr/bin/env bash
set -euo pipefail

# Credenciales configuradas
TELEGRAM_BOT_TOKEN="7271022887:AAFLlCyJyXfGchaEsJ2-U4VRpSYKXwYrmkc"
TELEGRAM_ADMIN_CHAT="6213988452"  # Primer admin
DATABASE_URL="postgresql://postgres.igbphvvaqnafxousalrn:Rita.1014@aws-1-us-east-2.pooler.supabase.com:6543/postgres"
WIDGET_URL=""

echo "╔════════════════════════════════════════════════════════════╗"
echo "║   CitaConsulares - Instalación Rápida (SIN actualizar)    ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Verificar root
if [[ $EUID -ne 0 ]]; then
   echo "✗ Este script debe ejecutarse como root"
   exit 1
fi

echo "✓ Ejecutando como root"
echo ""

# FASE 1: Instalación básica (SIN apt update/upgrade)
echo "═══ FASE 1: Instalación de herramientas ═══"
echo ""

echo "▶ Instalando dependencias básicas..."
apt-get install -y git curl wget unzip build-essential ca-certificates 2>&1 | grep -v "^Reading\|^Building\|^Preparing\|^Unpacking" || true

# Instalar Node.js 20
echo "▶ Instalando Node.js 20..."
if ! command -v node >/dev/null 2>&1 || [[ $(node -v | cut -c2- | cut -d. -f1) -lt 20 ]]; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - >/dev/null 2>&1
    apt-get install -y nodejs >/dev/null 2>&1
fi
echo "  ✓ Node.js $(node -v)"

# Instalar pnpm
echo "▶ Instalando pnpm..."
if ! command -v pnpm >/dev/null 2>&1; then
    npm install -g pnpm >/dev/null 2>&1 || true
fi
echo "  ✓ pnpm $(pnpm -v 2>/dev/null || echo 'instalando...')"

# Instalar PM2
echo "▶ Instalando PM2..."
if ! command -v pm2 >/dev/null 2>&1; then
    npm install -g pm2 >/dev/null 2>&1 || true
fi
echo "  ✓ PM2 $(pm2 -v 2>/dev/null || echo 'instalando...')"

echo ""
echo "═══ FASE 2: Repositorio y Código ═══"
echo ""

# Clonar o actualizar repositorio
REPO_DIR="/opt/CitaConsulares"
if [[ -d "$REPO_DIR" ]]; then
    echo "▶ Actualizando repositorio existente..."
    cd "$REPO_DIR"
    git fetch origin >/dev/null 2>&1 || true
    git reset --hard origin/main >/dev/null 2>&1 || true
    git clean -fd >/dev/null 2>&1 || true
    git pull origin main >/dev/null 2>&1 || true
else
    echo "▶ Clonando repositorio..."
    git clone https://github.com/devmaikelrm/CitaConsulares.git "$REPO_DIR" >/dev/null 2>&1
    cd "$REPO_DIR"
fi
echo "  ✓ Repositorio en $REPO_DIR"

# Instalar dependencias
echo "▶ Instalando dependencias del proyecto..."
pnpm install -r 2>&1 | grep -E "Progress|Done|packages" || true

# Instalar Playwright
echo "▶ Instalando Playwright Chromium..."
pnpm -C worker exec playwright install --with-deps chromium >/dev/null 2>&1 || true
echo "  ✓ Playwright instalado"

# Compilar
echo "▶ Compilando proyecto..."
if [[ -d "shared" ]]; then
    echo "  - Compilando shared..."
    pnpm -C shared build 2>&1 | tail -5 || echo "    (shared puede no tener build script, continuando...)"
fi
echo "  - Compilando worker..."
pnpm -C worker build 2>&1 | tail -5 || true
echo "  - Compilando bot..."
pnpm -C bot build 2>&1 | tail -5 || true
echo "  ✓ Compilación completada"

echo ""
echo "═══ FASE 3: Configuración ═══"
echo ""

# Crear .env para bot
echo "▶ Configurando bot/.env..."
cat > "$REPO_DIR/bot/.env" <<ENVEOF
TZ=America/Havana
TELEGRAM_BOT_TOKEN=${TELEGRAM_BOT_TOKEN}
TELEGRAM_ADMIN_CHAT=${TELEGRAM_ADMIN_CHAT}
DATABASE_URL=${DATABASE_URL}
ENVEOF
chmod 600 "$REPO_DIR/bot/.env"
echo "  ✓ bot/.env creado"

# Crear .env para worker
echo "▶ Configurando worker/.env..."
cat > "$REPO_DIR/worker/.env" <<ENVEOF
TZ=America/Havana
TELEGRAM_BOT_TOKEN=${TELEGRAM_BOT_TOKEN}
TELEGRAM_ADMIN_CHAT=${TELEGRAM_ADMIN_CHAT}
WIDGET_URL=${WIDGET_URL}
CHECK_INTERVAL_MIN=6
CHECK_INTERVAL_MAX=10
COOLDOWN_BLOCK_HOURS=3
CAPTCHA_PROVIDER=
CAPTCHA_API_KEY=
CAPTCHA_TIMEOUT_SEC=25
DATABASE_URL=${DATABASE_URL}
ENVEOF
chmod 600 "$REPO_DIR/worker/.env"
echo "  ✓ worker/.env creado"

# Corregir problema de SSL en db.ts
echo "▶ Corrigiendo conexión SSL a Supabase..."
cat > "$REPO_DIR/bot/src/db.ts" <<'DBTS_EOF'
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '@repo/shared/schema';

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error('DATABASE_URL no está configurada');
}

const sql = neon(databaseUrl, {
  fetchOptions: {
    signal: AbortSignal.timeout(30000)
  }
});

export const db = drizzle(sql, { schema });
DBTS_EOF

cat > "$REPO_DIR/worker/src/db.ts" <<'DBTS_EOF'
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '@repo/shared/schema';

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error('DATABASE_URL no está configurada');
}

const sql = neon(databaseUrl, {
  fetchOptions: {
    signal: AbortSignal.timeout(30000)
  }
});

export const db = drizzle(sql, { schema });
DBTS_EOF

echo "  ✓ SSL corregido"

# Recompilar después de corregir SSL
echo "▶ Recompilando después de corrección SSL..."
pnpm -C bot build 2>&1 | tail -3 || true
pnpm -C worker build 2>&1 | tail -3 || true
echo "  ✓ Recompilación completada"

echo ""
echo "═══ FASE 4: PM2 ═══"
echo ""

# Crear ecosystem.config.cjs
echo "▶ Configurando PM2..."
mkdir -p /var/log/pm2

cat > "$REPO_DIR/ecosystem.config.cjs" <<'ECOEOF'
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

echo "  ✓ ecosystem.config.cjs creado"

# Iniciar servicios
echo "▶ Iniciando servicios con PM2..."
pm2 delete all >/dev/null 2>&1 || true
pm2 start "$REPO_DIR/ecosystem.config.cjs"
pm2 save
echo "  ✓ Servicios iniciados"

# Configurar auto-inicio
echo "▶ Configurando auto-inicio..."
pm2 startup systemd -u root --hp /root | grep -E '^sudo' | bash || true
echo "  ✓ Auto-inicio configurado"

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║              ✓ INSTALACIÓN COMPLETADA                     ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "Estado de los servicios:"
echo ""
pm2 status
echo ""
echo "═══════════════════════════════════════════════════════════"
echo "  IDs autorizados para el bot:"
echo "  - 6213988452"
echo "  - 7652036984"
echo "  - 778282548"
echo "═══════════════════════════════════════════════════════════"
echo ""
echo "Comandos útiles:"
echo "  pm2 status          - Ver estado"
echo "  pm2 logs bot        - Ver logs del bot"
echo "  pm2 logs worker     - Ver logs del worker"
echo "  pm2 restart all     - Reiniciar todo"
echo ""

