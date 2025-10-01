#!/usr/bin/env bash
set -euo pipefail

# Credenciales configuradas
TELEGRAM_BOT_TOKEN="7271022887:AAFLlCyJyXfGchaEsJ2-U4VRpSYKXwYrmkc"
TELEGRAM_ADMIN_CHAT="6213988452"
DATABASE_URL="postgresql://postgres.igbphvvaqnafxousalrn:Rita.1014@aws-1-us-east-2.pooler.supabase.com:6543/postgres"
WIDGET_URL=""

echo "╔════════════════════════════════════════════════════════════╗"
echo "║   CitaConsulares - Instalación desde Modo Rescue          ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Verificar root
if [[ $EUID -ne 0 ]]; then
   echo "✗ Este script debe ejecutarse como root"
   exit 1
fi

echo "✓ Ejecutando como root en modo rescue"
echo ""

# FASE 1: Montar el disco real
echo "═══ FASE 1: Montando disco real ═══"
echo ""

# Detectar el disco principal
MAIN_DISK=$(lsblk -ndo NAME,TYPE | grep disk | head -1 | awk '{print $1}')
MAIN_PARTITION="${MAIN_DISK}1"

echo "▶ Disco detectado: /dev/$MAIN_DISK"
echo "▶ Partición principal: /dev/$MAIN_PARTITION"

# Crear punto de montaje
MOUNT_POINT="/mnt/system"
mkdir -p "$MOUNT_POINT"

# Montar la partición principal
echo "▶ Montando /dev/$MAIN_PARTITION en $MOUNT_POINT..."
mount /dev/$MAIN_PARTITION "$MOUNT_POINT" 2>/dev/null || {
    echo "  ! Partición ya montada o error, continuando..."
}

# Verificar montaje
if mountpoint -q "$MOUNT_POINT"; then
    echo "  ✓ Disco montado correctamente"
else
    echo "  ✗ Error al montar el disco"
    exit 1
fi

# Mostrar espacio disponible
echo ""
echo "▶ Espacio disponible en el disco real:"
df -h "$MOUNT_POINT"
echo ""

# FASE 2: Preparar chroot
echo "═══ FASE 2: Preparando entorno chroot ═══"
echo ""

# Montar sistemas virtuales necesarios para chroot
echo "▶ Montando sistemas virtuales..."
mount --bind /dev "$MOUNT_POINT/dev"
mount --bind /proc "$MOUNT_POINT/proc"
mount --bind /sys "$MOUNT_POINT/sys"
mount --bind /dev/pts "$MOUNT_POINT/dev/pts"
echo "  ✓ Sistemas virtuales montados"

# Copiar resolv.conf para tener DNS
cp /etc/resolv.conf "$MOUNT_POINT/etc/resolv.conf"
echo "  ✓ DNS configurado"

# FASE 3: Crear script de instalación dentro del chroot
echo ""
echo "═══ FASE 3: Creando script de instalación ═══"
echo ""

cat > "$MOUNT_POINT/root/install-citaconsulares.sh" <<'INSTALL_SCRIPT_EOF'
#!/usr/bin/env bash
set -euo pipefail

TELEGRAM_BOT_TOKEN="7271022887:AAFLlCyJyXfGchaEsJ2-U4VRpSYKXwYrmkc"
TELEGRAM_ADMIN_CHAT="6213988452"
DATABASE_URL="postgresql://postgres.igbphvvaqnafxousalrn:Rita.1014@aws-1-us-east-2.pooler.supabase.com:6543/postgres"
WIDGET_URL=""

echo "╔════════════════════════════════════════════════════════════╗"
echo "║   Instalación CitaConsulares (dentro del sistema real)    ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Instalar dependencias básicas
echo "▶ Instalando dependencias básicas..."
apt-get install -y git curl wget unzip build-essential ca-certificates >/dev/null 2>&1
echo "  ✓ Dependencias instaladas"

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
    npm install -g pnpm >/dev/null 2>&1
fi
echo "  ✓ pnpm $(pnpm -v)"

# Instalar PM2
echo "▶ Instalando PM2..."
if ! command -v pm2 >/dev/null 2>&1; then
    npm install -g pm2 >/dev/null 2>&1
fi
echo "  ✓ PM2 $(pm2 -v)"

# Clonar repositorio
echo "▶ Clonando repositorio..."
REPO_DIR="/opt/CitaConsulares"
if [[ -d "$REPO_DIR" ]]; then
    cd "$REPO_DIR"
    git fetch origin >/dev/null 2>&1 || true
    git reset --hard origin/main >/dev/null 2>&1 || true
    git clean -fd >/dev/null 2>&1 || true
    git pull origin main >/dev/null 2>&1 || true
else
    git clone https://github.com/devmaikelrm/CitaConsulares.git "$REPO_DIR" >/dev/null 2>&1
    cd "$REPO_DIR"
fi
echo "  ✓ Repositorio en $REPO_DIR"

# Instalar dependencias
echo "▶ Instalando dependencias del proyecto..."
pnpm install -r 2>&1 | grep -E "Progress|Done|packages" | tail -5 || true

# Instalar Playwright
echo "▶ Instalando Playwright Chromium..."
pnpm -C worker exec playwright install --with-deps chromium >/dev/null 2>&1 || true
echo "  ✓ Playwright instalado"

# Compilar
echo "▶ Compilando proyecto..."
if [[ -d "shared" ]]; then
    pnpm -C shared build 2>&1 | tail -3 || true
fi
pnpm -C worker build 2>&1 | tail -3 || true
pnpm -C bot build 2>&1 | tail -3 || true
echo "  ✓ Compilación completada"

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

# Corregir SSL
echo "▶ Corrigiendo conexión SSL..."
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

# Recompilar
echo "▶ Recompilando..."
pnpm -C bot build 2>&1 | tail -3 || true
pnpm -C worker build 2>&1 | tail -3 || true
echo "  ✓ Recompilación completada"

# Configurar PM2
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

echo "  ✓ PM2 configurado"

# Configurar auto-inicio
echo "▶ Configurando auto-inicio..."
pm2 startup systemd -u root --hp /root | grep -E '^sudo' | bash || true
echo "  ✓ Auto-inicio configurado"

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║         ✓ INSTALACIÓN COMPLETADA EN DISCO REAL            ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "NOTA: Los servicios se iniciarán automáticamente al reiniciar"
echo "      el servidor en modo normal (salir de rescue mode)."
echo ""
INSTALL_SCRIPT_EOF

chmod +x "$MOUNT_POINT/root/install-citaconsulares.sh"
echo "  ✓ Script de instalación creado"

# FASE 4: Ejecutar instalación en chroot
echo ""
echo "═══ FASE 4: Ejecutando instalación en el sistema real ═══"
echo ""

chroot "$MOUNT_POINT" /root/install-citaconsulares.sh

# FASE 5: Limpieza
echo ""
echo "═══ FASE 5: Limpieza ═══"
echo ""

echo "▶ Desmontando sistemas virtuales..."
umount "$MOUNT_POINT/dev/pts" 2>/dev/null || true
umount "$MOUNT_POINT/dev" 2>/dev/null || true
umount "$MOUNT_POINT/proc" 2>/dev/null || true
umount "$MOUNT_POINT/sys" 2>/dev/null || true
echo "  ✓ Sistemas virtuales desmontados"

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║              ✓ TODO COMPLETADO                             ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "PRÓXIMOS PASOS:"
echo ""
echo "1. Desactiva el modo rescue desde el panel de Hetzner"
echo "2. Reinicia el servidor"
echo "3. Los servicios se iniciarán automáticamente"
echo ""
echo "Para verificar después del reinicio:"
echo "  ssh root@91.99.171.11"
echo "  pm2 status"
echo "  pm2 logs bot"
echo ""

