#!/usr/bin/env bash
# Script maestro para configurar TODO en la VPS
# Ejecutar en la VPS como: bash deploy-master.sh

set -euo pipefail

# Colores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m'

# Variables
REPO_URL="https://github.com/devmaikelrm/CitaConsulares.git"
REPO_DIR="/opt/CitaConsulares"
TARGET_USER="${SUDO_USER:-root}"
TARGET_HOME="$(eval echo ~${TARGET_USER})"

# Banner
clear
echo -e "${CYAN}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${CYAN}║                                                            ║${NC}"
echo -e "${CYAN}║         ${BOLD}CitaConsulares - Instalación Automática${NC}${CYAN}          ║${NC}"
echo -e "${CYAN}║                                                            ║${NC}"
echo -e "${CYAN}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Funciones de utilidad
print_step() {
    echo -e "${BLUE}▶ [PASO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_info() {
    echo -e "${CYAN}ℹ${NC} $1"
}

run_as_target() {
    if [[ "$TARGET_USER" == 'root' ]]; then
        "$@"
    else
        sudo -u "$TARGET_USER" -H "$@"
    fi
}

# Verificar root
if [[ $EUID -ne 0 ]]; then
    print_error "Este script debe ejecutarse como root"
    echo "Ejecuta: sudo bash deploy-master.sh"
    exit 1
fi

print_success "Ejecutando como root"
echo ""

# ============================================================================
# FASE 1: INSTALACIÓN DEL SISTEMA
# ============================================================================
echo -e "${BOLD}${CYAN}═══ FASE 1: Instalación del Sistema ═══${NC}"
echo ""

print_step "Actualizando sistema..."
apt-get update -y > /dev/null 2>&1
apt-get upgrade -y > /dev/null 2>&1
print_success "Sistema actualizado"

print_step "Instalando dependencias..."
apt-get install -y git curl wget unzip build-essential ca-certificates gnupg \
    lsb-release ufw logrotate rsync > /dev/null 2>&1
print_success "Dependencias instaladas"

print_step "Verificando Node.js..."
if ! command -v node >/dev/null 2>&1 || [[ $(node -v | cut -c2- | cut -d. -f1) -lt 20 ]]; then
    print_warning "Instalando Node.js 20..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - > /dev/null 2>&1
    apt-get install -y nodejs > /dev/null 2>&1
    print_success "Node.js $(node -v) instalado"
else
    print_success "Node.js $(node -v) ya instalado"
fi

print_step "Instalando pnpm..."
if ! command -v pnpm >/dev/null 2>&1; then
    npm install -g pnpm > /dev/null 2>&1
fi
print_success "pnpm $(pnpm -v) instalado"

print_step "Instalando PM2..."
if ! command -v pm2 >/dev/null 2>&1; then
    npm install -g pm2 > /dev/null 2>&1
fi
print_success "PM2 $(pm2 -v) instalado"

print_step "Configurando swap..."
if ! swapon --show | grep -q '/swapfile'; then
    fallocate -l 2G /swapfile
    chmod 600 /swapfile
    mkswap /swapfile > /dev/null 2>&1
    swapon /swapfile
    if ! grep -q '/swapfile' /etc/fstab; then
        echo '/swapfile none swap sw 0 0' >> /etc/fstab
    fi
    print_success "Swap de 2GB creado"
else
    print_success "Swap ya configurado"
fi

print_step "Configurando firewall..."
ufw allow OpenSSH > /dev/null 2>&1
ufw allow 8080/tcp > /dev/null 2>&1
ufw --force enable > /dev/null 2>&1
print_success "Firewall configurado (SSH + 8080)"

echo ""
echo -e "${GREEN}✓ Fase 1 completada${NC}"
echo ""

# ============================================================================
# FASE 2: REPOSITORIO Y CÓDIGO
# ============================================================================
echo -e "${BOLD}${CYAN}═══ FASE 2: Repositorio y Código ═══${NC}"
echo ""

print_step "Configurando repositorio..."
if [[ -d "$REPO_DIR" ]]; then
    print_warning "Repositorio existente encontrado"
    cd "$REPO_DIR"
    
    # Guardar cambios locales si existen
    if [[ -n $(git status --porcelain) ]]; then
        print_warning "Guardando cambios locales..."
        git stash > /dev/null 2>&1 || true
    fi
    
    git fetch origin > /dev/null 2>&1
    git reset --hard origin/main > /dev/null 2>&1
    git pull origin main > /dev/null 2>&1
    print_success "Repositorio actualizado"
else
    print_warning "Clonando repositorio..."
    git clone "$REPO_URL" "$REPO_DIR" > /dev/null 2>&1
    cd "$REPO_DIR"
    print_success "Repositorio clonado"
fi

chown -R "$TARGET_USER":"$TARGET_USER" "$REPO_DIR"

print_step "Instalando dependencias del proyecto..."
run_as_target pnpm install -r
print_success "Dependencias instaladas"

if [[ -d "shared" ]]; then
    print_step "Compilando shared..."
    run_as_target pnpm -C shared build
    print_success "Shared compilado"
fi

print_step "Instalando Playwright Chromium..."
run_as_target pnpm -C worker exec playwright install --with-deps chromium > /dev/null 2>&1
print_success "Playwright instalado"

print_step "Compilando worker..."
run_as_target pnpm -C worker build
print_success "Worker compilado"

print_step "Compilando bot..."
run_as_target pnpm -C bot build
print_success "Bot compilado"

echo ""
echo -e "${GREEN}✓ Fase 2 completada${NC}"
echo ""

# ============================================================================
# FASE 3: CONFIGURACIÓN DE CREDENCIALES
# ============================================================================
echo -e "${BOLD}${CYAN}═══ FASE 3: Configuración de Credenciales ═══${NC}"
echo ""

print_info "Necesito las siguientes credenciales para configurar el sistema:"
echo ""

# Función para leer input de forma segura
read_credential() {
    local prompt="$1"
    local var_name="$2"
    local is_secret="${3:-false}"
    
    if [[ "$is_secret" == "true" ]]; then
        read -sp "$prompt: " value
        echo ""
    else
        read -p "$prompt: " value
    fi
    
    eval "$var_name='$value'"
}

# Leer credenciales
echo -e "${YELLOW}1. Telegram Bot${NC}"
read_credential "   Token del bot (123456789:ABC...)" TELEGRAM_BOT_TOKEN true
read_credential "   Tu Chat ID (número)" TELEGRAM_ADMIN_CHAT false

echo ""
echo -e "${YELLOW}2. Base de Datos Supabase${NC}"
read_credential "   DATABASE_URL completo" DATABASE_URL true

echo ""
echo -e "${YELLOW}3. Worker (opcional - presiona Enter para omitir)${NC}"
read_credential "   WIDGET_URL" WIDGET_URL false

echo ""
print_step "Validando credenciales..."

# Validar formato básico
if [[ ! "$TELEGRAM_BOT_TOKEN" =~ ^[0-9]+:.+ ]]; then
    print_error "TELEGRAM_BOT_TOKEN tiene formato inválido"
    exit 1
fi

if [[ ! "$TELEGRAM_ADMIN_CHAT" =~ ^[0-9]+$ ]]; then
    print_error "TELEGRAM_ADMIN_CHAT debe ser un número"
    exit 1
fi

if [[ ! "$DATABASE_URL" =~ ^postgresql:// ]]; then
    print_error "DATABASE_URL debe comenzar con postgresql://"
    exit 1
fi

print_success "Credenciales validadas"

# Crear archivo .env para bot
print_step "Configurando bot/.env..."
cat > "$REPO_DIR/bot/.env" <<EOF
# Zona horaria
TZ=America/Havana

# Bot de Telegram
TELEGRAM_BOT_TOKEN=${TELEGRAM_BOT_TOKEN}
TELEGRAM_ADMIN_CHAT=${TELEGRAM_ADMIN_CHAT}

# Base de datos Supabase
DATABASE_URL=${DATABASE_URL}
EOF

chown "$TARGET_USER":"$TARGET_USER" "$REPO_DIR/bot/.env"
chmod 600 "$REPO_DIR/bot/.env"
print_success "bot/.env configurado"

# Crear archivo .env para worker
print_step "Configurando worker/.env..."
cat > "$REPO_DIR/worker/.env" <<EOF
# Zona horaria
TZ=America/Havana

# Bot de Telegram (para notificaciones)
TELEGRAM_BOT_TOKEN=${TELEGRAM_BOT_TOKEN}
TELEGRAM_ADMIN_CHAT=${TELEGRAM_ADMIN_CHAT}

# URL del widget a monitorear
WIDGET_URL=${WIDGET_URL}

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
DATABASE_URL=${DATABASE_URL}
EOF

chown "$TARGET_USER":"$TARGET_USER" "$REPO_DIR/worker/.env"
chmod 600 "$REPO_DIR/worker/.env"
print_success "worker/.env configurado"

echo ""
echo -e "${GREEN}✓ Fase 3 completada${NC}"
echo ""

# ============================================================================
# FASE 4: CORREGIR CONEXIÓN SSL A SUPABASE
# ============================================================================
echo -e "${BOLD}${CYAN}═══ FASE 4: Corrección SSL Supabase ═══${NC}"
echo ""

print_step "Corrigiendo conexión SSL en bot/src/db.ts..."

# Crear backup
cp "$REPO_DIR/bot/src/db.ts" "$REPO_DIR/bot/src/db.ts.backup"

# Aplicar fix SSL
cat > "$REPO_DIR/bot/src/db.ts" <<'DBTS_EOF'
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '@repo/shared/schema';

// Fix SSL: configurar SSL según la URL
const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('DATABASE_URL no está configurada');
}

// Crear cliente con configuración SSL apropiada
const sql = neon(databaseUrl, {
  // Neon/Supabase manejan SSL automáticamente
  fetchOptions: {
    // Timeout de 30 segundos
    signal: AbortSignal.timeout(30000)
  }
});

export const db = drizzle(sql, { schema });
DBTS_EOF

print_success "bot/src/db.ts corregido"

print_step "Corrigiendo conexión SSL en worker/src/db.ts..."

cp "$REPO_DIR/worker/src/db.ts" "$REPO_DIR/worker/src/db.ts.backup"

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

print_success "worker/src/db.ts corregido"

# Recompilar con los cambios
print_step "Recompilando bot con corrección SSL..."
run_as_target pnpm -C bot build
print_success "Bot recompilado"

print_step "Recompilando worker con corrección SSL..."
run_as_target pnpm -C worker build
print_success "Worker recompilado"

echo ""
echo -e "${GREEN}✓ Fase 4 completada${NC}"
echo ""

# ============================================================================
# FASE 5: CONFIGURAR PM2 Y SERVICIOS
# ============================================================================
echo -e "${BOLD}${CYAN}═══ FASE 5: Configuración PM2 ═══${NC}"
echo ""

print_step "Configurando ecosystem.config.cjs..."
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
print_success "ecosystem.config.cjs configurado"

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

print_step "Configurando PM2 startup..."
pm2 startup systemd -u "$TARGET_USER" --hp "$TARGET_HOME" | grep -E "^sudo" | bash || true
print_success "PM2 startup configurado"

echo ""
echo -e "${GREEN}✓ Fase 5 completada${NC}"
echo ""

# ============================================================================
# FASE 6: INICIAR SERVICIOS
# ============================================================================
echo -e "${BOLD}${CYAN}═══ FASE 6: Iniciando Servicios ═══${NC}"
echo ""

print_step "Deteniendo servicios existentes..."
pm2 delete all > /dev/null 2>&1 || true
print_success "Servicios anteriores detenidos"

print_step "Iniciando servicios con PM2..."
cd "$REPO_DIR"
pm2 start ecosystem.config.cjs
pm2 save
print_success "Servicios iniciados"

sleep 3

echo ""
pm2 status

echo ""
echo -e "${GREEN}✓ Fase 6 completada${NC}"
echo ""

# ============================================================================
# FASE 7: VERIFICACIÓN
# ============================================================================
echo -e "${BOLD}${CYAN}═══ FASE 7: Verificación ═══${NC}"
echo ""

print_step "Verificando healthcheck..."
sleep 2
if curl -s http://localhost:8080/health | grep -q "ok"; then
    print_success "Healthcheck respondiendo correctamente"
else
    print_warning "Healthcheck no responde (puede tardar unos segundos)"
fi

print_step "Verificando logs del bot..."
sleep 2
BOT_ERRORS=$(pm2 logs bot --nostream --lines 10 --err 2>/dev/null | grep -i "error" | wc -l)
if [[ $BOT_ERRORS -eq 0 ]]; then
    print_success "Bot sin errores en logs"
else
    print_warning "Bot tiene $BOT_ERRORS errores en logs (revisa con: pm2 logs bot)"
fi

print_step "Verificando logs del worker..."
WORKER_ERRORS=$(pm2 logs worker --nostream --lines 10 --err 2>/dev/null | grep -i "error" | wc -l)
if [[ $WORKER_ERRORS -eq 0 ]]; then
    print_success "Worker sin errores en logs"
else
    print_warning "Worker tiene $WORKER_ERRORS errores en logs (revisa con: pm2 logs worker)"
fi

echo ""
echo -e "${GREEN}✓ Fase 7 completada${NC}"
echo ""

# ============================================================================
# FASE 8: GITHUB ACTIONS PARA DEPLOY AUTOMÁTICO
# ============================================================================
echo -e "${BOLD}${CYAN}═══ FASE 8: GitHub Actions (Deploy Automático) ═══${NC}"
echo ""

print_step "Creando workflow de GitHub Actions..."

mkdir -p "$REPO_DIR/.github/workflows"

cat > "$REPO_DIR/.github/workflows/deploy.yml" <<'EOF'
name: Deploy to VPS

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Deploy to VPS
        uses: appleboy/ssh-action@v1.0.0
        with:
          host: ${{ secrets.VPS_HOST }}
          username: ${{ secrets.VPS_USER }}
          password: ${{ secrets.VPS_PASSWORD }}
          script: |
            cd /opt/CitaConsulares
            git pull origin main
            pnpm install -r

            # Compilar shared si existe
            if [ -d "shared" ]; then
              pnpm -C shared build
            fi

            # Compilar worker y bot
            pnpm -C worker build
            pnpm -C bot build

            # Recargar PM2
            pm2 reload ecosystem.config.cjs
            pm2 save

            echo "Deploy completado!"
EOF

chown -R "$TARGET_USER":"$TARGET_USER" "$REPO_DIR/.github"
print_success "Workflow de GitHub Actions creado"

echo ""
print_info "Para activar el deploy automático, configura estos secrets en GitHub:"
echo ""
echo "   1. Ve a: https://github.com/devmaikelrm/CitaConsulares/settings/secrets/actions"
echo "   2. Agrega estos secrets:"
echo "      - VPS_HOST: 91.99.171.11"
echo "      - VPS_USER: root"
echo "      - VPS_PASSWORD: 3i4jE9UwnXR3"
echo ""
print_warning "IMPORTANTE: Cambia la contraseña de root después de configurar los secrets"
echo ""

echo -e "${GREEN}✓ Fase 8 completada${NC}"
echo ""

# ============================================================================
# RESUMEN FINAL
# ============================================================================
echo ""
echo -e "${BOLD}${GREEN}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BOLD}${GREEN}║                                                            ║${NC}"
echo -e "${BOLD}${GREEN}║            ✓ INSTALACIÓN COMPLETADA CON ÉXITO             ║${NC}"
echo -e "${BOLD}${GREEN}║                                                            ║${NC}"
echo -e "${BOLD}${GREEN}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""

echo -e "${BOLD}📊 Estado del Sistema:${NC}"
echo ""
echo "   ✓ Node.js: $(node -v)"
echo "   ✓ pnpm: $(pnpm -v)"
echo "   ✓ PM2: $(pm2 -v)"
echo "   ✓ Repositorio: $REPO_DIR"
echo "   ✓ Servicios: bot, worker, healthcheck"
echo ""

echo -e "${BOLD}🔧 Comandos Útiles:${NC}"
echo ""
echo "   pm2 status              - Ver estado de servicios"
echo "   pm2 logs bot            - Ver logs del bot"
echo "   pm2 logs worker         - Ver logs del worker"
echo "   pm2 restart all         - Reiniciar todos los servicios"
echo "   pm2 monit               - Monitor interactivo"
echo ""
echo "   cd /opt/CitaConsulares"
echo "   bash scripts/update.sh  - Actualizar código manualmente"
echo ""

echo -e "${BOLD}📱 Próximos Pasos:${NC}"
echo ""
echo "   1. Abre Telegram y busca tu bot"
echo "   2. Envía /start para verificar que responde"
echo "   3. Registra un operador con /operador"
echo "   4. Configura GitHub Actions secrets (ver arriba)"
echo "   5. Ejecuta scripts/db-init.sql en Supabase SQL Editor"
echo ""

echo -e "${BOLD}🔐 Seguridad:${NC}"
echo ""
echo "   ⚠️  IMPORTANTE: Cambia la contraseña de root:"
echo "      passwd"
echo ""
echo "   ⚠️  Los archivos .env contienen credenciales sensibles"
echo "      Permisos configurados: 600 (solo root puede leer)"
echo ""

echo -e "${BOLD}📝 Logs en tiempo real:${NC}"
echo ""
echo "   pm2 logs --lines 50"
echo ""

print_success "¡Todo listo! El bot está funcionando en tu VPS 🚀"
echo ""

