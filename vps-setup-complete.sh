#!/usr/bin/env bash
# Script completo de configuración para VPS
# Ejecutar como: bash vps-setup-complete.sh

set -euo pipefail

echo "╔════════════════════════════════════════════════════════════╗"
echo "║   CitaConsulares - Configuración Completa VPS             ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Variables
REPO_URL="https://github.com/devmaikelrm/CitaConsulares.git"
REPO_DIR="/opt/CitaConsulares"
TARGET_USER="${SUDO_USER:-root}"
TARGET_HOME="$(eval echo ~${TARGET_USER})"

# Función para imprimir con color
print_step() {
    echo -e "${BLUE}[PASO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[✓]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[!]${NC} $1"
}

print_error() {
    echo -e "${RED}[✗]${NC} $1"
}

# Función para ejecutar como usuario target
run_as_target() {
    if [[ "$TARGET_USER" == 'root' ]]; then
        "$@"
    else
        sudo -u "$TARGET_USER" -H "$@"
    fi
}

# ============================================================================
# PASO 1: Verificar sistema
# ============================================================================
print_step "Verificando sistema..."

if [[ $EUID -ne 0 ]]; then
    print_error "Este script debe ejecutarse como root (use sudo)"
    exit 1
fi

print_success "Usuario root confirmado"

# ============================================================================
# PASO 2: Actualizar sistema
# ============================================================================
print_step "Actualizando sistema..."
apt-get update -y
apt-get upgrade -y
print_success "Sistema actualizado"

# ============================================================================
# PASO 3: Instalar dependencias del sistema
# ============================================================================
print_step "Instalando dependencias del sistema..."
apt-get install -y \
    git \
    curl \
    wget \
    unzip \
    build-essential \
    ca-certificates \
    gnupg \
    lsb-release \
    ufw \
    logrotate \
    rsync

print_success "Dependencias instaladas"

# ============================================================================
# PASO 4: Instalar Node.js 20
# ============================================================================
print_step "Verificando Node.js..."

if ! command -v node >/dev/null 2>&1 || [[ $(node -v | cut -c2- | cut -d. -f1) -lt 20 ]]; then
    print_warning "Instalando Node.js 20..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt-get install -y nodejs
    print_success "Node.js 20 instalado"
else
    print_success "Node.js $(node -v) ya instalado"
fi

# ============================================================================
# PASO 5: Instalar pnpm
# ============================================================================
print_step "Verificando pnpm..."

if ! command -v pnpm >/dev/null 2>&1; then
    print_warning "Instalando pnpm..."
    npm install -g pnpm
    print_success "pnpm instalado"
else
    print_success "pnpm $(pnpm -v) ya instalado"
fi

# ============================================================================
# PASO 6: Instalar PM2
# ============================================================================
print_step "Verificando PM2..."

if ! command -v pm2 >/dev/null 2>&1; then
    print_warning "Instalando PM2..."
    npm install -g pm2
    print_success "PM2 instalado"
else
    print_success "PM2 $(pm2 -v) ya instalado"
fi

# ============================================================================
# PASO 7: Configurar swap
# ============================================================================
print_step "Verificando swap..."

if ! swapon --show | grep -q '/swapfile'; then
    print_warning "Creando swap de 2GB..."
    fallocate -l 2G /swapfile
    chmod 600 /swapfile
    mkswap /swapfile
    swapon /swapfile
    if ! grep -q '/swapfile' /etc/fstab; then
        echo '/swapfile none swap sw 0 0' >> /etc/fstab
    fi
    print_success "Swap creado"
else
    print_success "Swap ya configurado"
fi

# ============================================================================
# PASO 8: Configurar firewall
# ============================================================================
print_step "Configurando firewall UFW..."

ufw allow OpenSSH
ufw allow 8080/tcp
ufw --force enable

print_success "Firewall configurado"

# ============================================================================
# PASO 9: Clonar/actualizar repositorio
# ============================================================================
print_step "Configurando repositorio..."

if [[ -d "$REPO_DIR" ]]; then
    print_warning "Repositorio existente, actualizando..."
    cd "$REPO_DIR"
    git fetch origin
    git reset --hard origin/main
    git pull origin main
    print_success "Repositorio actualizado"
else
    print_warning "Clonando repositorio..."
    git clone "$REPO_URL" "$REPO_DIR"
    print_success "Repositorio clonado"
fi

chown -R "$TARGET_USER":"$TARGET_USER" "$REPO_DIR"

# ============================================================================
# PASO 10: Verificar estructura del proyecto
# ============================================================================
print_step "Verificando estructura del proyecto..."

cd "$REPO_DIR"

if [[ ! -d "bot" ]] || [[ ! -d "worker" ]]; then
    print_error "Estructura del proyecto incorrecta. Faltan directorios bot/ o worker/"
    exit 1
fi

print_success "Estructura del proyecto correcta"

# ============================================================================
# PASO 11: Instalar dependencias
# ============================================================================
print_step "Instalando dependencias del proyecto..."

run_as_target pnpm install -r

print_success "Dependencias instaladas"

# ============================================================================
# PASO 12: Compilar shared
# ============================================================================
if [[ -d "shared" ]]; then
    print_step "Compilando paquete shared..."
    run_as_target pnpm -C shared build
    print_success "Shared compilado"
fi

# ============================================================================
# PASO 13: Instalar Playwright Chromium
# ============================================================================
print_step "Instalando Playwright Chromium..."

run_as_target pnpm -C worker exec playwright install --with-deps chromium

print_success "Playwright Chromium instalado"

# ============================================================================
# PASO 14: Compilar worker y bot
# ============================================================================
print_step "Compilando worker..."
run_as_target pnpm -C worker build
print_success "Worker compilado"

print_step "Compilando bot..."
run_as_target pnpm -C bot build
print_success "Bot compilado"

# ============================================================================
# PASO 15: Configurar archivos .env
# ============================================================================
print_step "Configurando archivos .env..."

# Crear .env para bot si no existe
if [[ ! -f "$REPO_DIR/bot/.env" ]]; then
    print_warning "Creando bot/.env desde ejemplo..."
    cat > "$REPO_DIR/bot/.env" <<'EOF'
# Zona horaria
TZ=America/Havana

# Bot de Telegram
TELEGRAM_BOT_TOKEN=
TELEGRAM_ADMIN_CHAT=

# Base de datos Supabase
DATABASE_URL=
EOF
    chown "$TARGET_USER":"$TARGET_USER" "$REPO_DIR/bot/.env"
    print_warning "⚠️  IMPORTANTE: Debes editar /opt/CitaConsulares/bot/.env con tus credenciales"
else
    print_success "bot/.env ya existe"
fi

# Crear .env para worker si no existe
if [[ ! -f "$REPO_DIR/worker/.env" ]]; then
    print_warning "Creando worker/.env desde ejemplo..."
    cat > "$REPO_DIR/worker/.env" <<'EOF'
# Zona horaria
TZ=America/Havana

# Bot de Telegram (para notificaciones)
TELEGRAM_BOT_TOKEN=
TELEGRAM_ADMIN_CHAT=

# URL del widget a monitorear
WIDGET_URL=

# Intervalo de chequeo (minutos)
CHECK_INTERVAL_MIN=6
CHECK_INTERVAL_MAX=10

# Cooldown tras bloqueo (horas)
COOLDOWN_BLOCK_HOURS=3

# Captcha (opcional)
CAPTCHA_PROVIDER=
CAPTCHA_API_KEY=
CAPTCHA_TIMEOUT_SEC=25

# Base de datos Supabase
DATABASE_URL=
EOF
    chown "$TARGET_USER":"$TARGET_USER" "$REPO_DIR/worker/.env"
    print_warning "⚠️  IMPORTANTE: Debes editar /opt/CitaConsulares/worker/.env con tus credenciales"
else
    print_success "worker/.env ya existe"
fi

# ============================================================================
# PASO 16: Configurar logrotate
# ============================================================================
print_step "Configurando logrotate..."

mkdir -p /var/log/pm2
chown "$TARGET_USER":"$TARGET_USER" /var/log/pm2

cat > /etc/logrotate.d/pm2-citaconsulares <<'EOF'
/var/log/pm2/*.log {
    daily
    rotate 7
    missingok
    notifempty
    compress
    delaycompress
    copytruncate
    su root root
}
EOF

print_success "Logrotate configurado"

# ============================================================================
# PASO 17: Configurar PM2 startup
# ============================================================================
print_step "Configurando PM2 startup..."

pm2 startup systemd -u "$TARGET_USER" --hp "$TARGET_HOME" | grep -E "^sudo" | bash || true

print_success "PM2 startup configurado"

# ============================================================================
# PASO 18: Copiar ecosystem.config.cjs
# ============================================================================
print_step "Verificando ecosystem.config.cjs..."

if [[ ! -f "$REPO_DIR/ecosystem.config.cjs" ]]; then
    print_warning "Creando ecosystem.config.cjs..."
    cat > "$REPO_DIR/ecosystem.config.cjs" <<'EOF'
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
    },
    {
      name: 'healthcheck',
      cwd: '/opt/CitaConsulares/healthcheck',
      script: 'server.js',
      env: {
        HEALTHCHECK_PORT: '8080'
      },
      max_restarts: 5,
      restart_delay: 5000,
      out_file: '/var/log/pm2/healthcheck.out.log',
      error_file: '/var/log/pm2/healthcheck.error.log',
      merge_logs: true,
      time: true
    }
  ]
};
EOF
    chown "$TARGET_USER":"$TARGET_USER" "$REPO_DIR/ecosystem.config.cjs"
    print_success "ecosystem.config.cjs creado"
else
    print_success "ecosystem.config.cjs ya existe"
fi

# ============================================================================
# RESUMEN
# ============================================================================
echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║              INSTALACIÓN COMPLETADA                        ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
print_success "Node.js: $(node -v)"
print_success "pnpm: $(pnpm -v)"
print_success "PM2: $(pm2 -v)"
print_success "Repositorio: $REPO_DIR"
echo ""
print_warning "PRÓXIMOS PASOS:"
echo ""
echo "1. Configurar variables de entorno:"
echo "   nano /opt/CitaConsulares/bot/.env"
echo "   nano /opt/CitaConsulares/worker/.env"
echo ""
echo "2. Configurar base de datos en Supabase:"
echo "   - Ejecutar scripts/db-init.sql en Supabase SQL Editor"
echo ""
echo "3. Iniciar servicios:"
echo "   cd /opt/CitaConsulares"
echo "   bash scripts/deploy.sh"
echo ""
echo "4. Verificar estado:"
echo "   pm2 status"
echo "   pm2 logs bot"
echo ""
print_success "¡Listo para configurar!"

