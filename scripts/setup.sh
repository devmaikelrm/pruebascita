#!/usr/bin/env bash
set -euo pipefail

REPO_DIR=/opt/CitaConsulares
SCRIPTS_DIR="$REPO_DIR/scripts"
TARGET_USER="${SUDO_USER:-root}"
TARGET_HOME="$(eval echo ~${SUDO_USER:-root})"
LOCAL_REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
HEALTHCHECK_PORT=${HEALTHCHECK_PORT:-8080}

if [[ $EUID -ne 0 ]]; then
  echo "[setup] Debe ejecutarse como root (use sudo)." >&2
  exit 1
fi

run_as_target() {
  if [[ "$TARGET_USER" == 'root' ]]; then
    "$@"
  else
    sudo -u "$TARGET_USER" -H "$@"
  fi
}

echo '[setup] Actualizando paquetes del sistema...'
apt-get update -y
apt-get upgrade -y

echo '[setup] Instalando dependencias del sistema...'
apt-get install -y git curl unzip ufw logrotate build-essential ca-certificates rsync

if ! command -v node >/dev/null 2>&1 || [[ $(node -v | cut -c2- | cut -d. -f1) -lt 20 ]]; then
  echo '[setup] Instalando Node.js 20 (NodeSource)'
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt-get install -y nodejs
fi

echo '[setup] Instalando pnpm y PM2 globalmente...'
npm install -g pnpm pm2

if ! swapon --show | grep -q '/swapfile'; then
  echo '[setup] Creando swap de 2G...'
  fallocate -l 2G /swapfile
  chmod 600 /swapfile
  mkswap /swapfile
  swapon /swapfile
  if ! grep -q '/swapfile' /etc/fstab; then
    echo '/swapfile none swap sw 0 0' >> /etc/fstab
  fi
else
  echo '[setup] Swap existente detectada, omitiendo.'
fi

echo "[setup] Configurando UFW (permitiendo SSH y puerto ${HEALTHCHECK_PORT})..."
ufw allow OpenSSH
ufw allow ${HEALTHCHECK_PORT}/tcp
ufw --force enable

if [[ ! -d $REPO_DIR ]]; then
  echo '[setup] Clonando repositorio en /opt/CitaConsulares...'
  git clone https://github.com/devmaikelrm/CitaConsulares.git "$REPO_DIR"
else
  echo '[setup] Repositorio existente, actualizando...'
  git -C "$REPO_DIR" pull --ff-only
fi

chown -R "$TARGET_USER":"$TARGET_USER" "$REPO_DIR"

mkdir -p "$SCRIPTS_DIR"
cp -f "$LOCAL_REPO_ROOT/scripts/setup.sh" "$SCRIPTS_DIR/setup.sh"
cp -f "$LOCAL_REPO_ROOT/scripts/deploy.sh" "$SCRIPTS_DIR/deploy.sh"
cp -f "$LOCAL_REPO_ROOT/scripts/update.sh" "$SCRIPTS_DIR/update.sh"
chmod +x "$SCRIPTS_DIR"/*.sh

cp -f "$LOCAL_REPO_ROOT/ecosystem.config.cjs" "$REPO_DIR/ecosystem.config.cjs"
mkdir -p "$REPO_DIR/healthcheck"
rsync -rt "$LOCAL_REPO_ROOT/healthcheck/" "$REPO_DIR/healthcheck/"
cp -f "$LOCAL_REPO_ROOT/bot/.env.example" "$REPO_DIR/bot/.env.example"
cp -f "$LOCAL_REPO_ROOT/worker/.env.example" "$REPO_DIR/worker/.env.example"
if [[ ! -f $REPO_DIR/bot/.env ]]; then
  cat <<'EOF' > $REPO_DIR/bot/.env
TELEGRAM_BOT_TOKEN=
TELEGRAM_ADMIN_CHAT=
TZ=America/Havana
EOF
  chown ${TARGET_USER}:${TARGET_USER} $REPO_DIR/bot/.env
fi

if [[ ! -f $REPO_DIR/worker/.env ]]; then
  cat <<'EOF' > $REPO_DIR/worker/.env
TELEGRAM_BOT_TOKEN=
TELEGRAM_ADMIN_CHAT=
WIDGET_URL=
CHECK_INTERVAL_MIN=6
CHECK_INTERVAL_MAX=10
COOLDOWN_BLOCK_HOURS=3
CAPTCHA_API_KEY=
CAPTCHA_TIMEOUT_SEC=25
TZ=America/Havana
DATABASE_URL=
EOF
  chown ${TARGET_USER}:${TARGET_USER} $REPO_DIR/worker/.env
fi


cp -f "$LOCAL_REPO_ROOT/deploy/logrotate/pm2-node" /etc/logrotate.d/pm2-node

mkdir -p /var/log/pm2
chown "$TARGET_USER":"$TARGET_USER" /var/log/pm2

cd "$REPO_DIR"

if grep -R -F "../server" worker/src >/dev/null 2>&1; then
  echo "[setup] Error: el worker importa server; mueve esos tipos a shared/ antes de desplegar." >&2
  exit 1
fi

echo '[setup] Instalando dependencias de todos los paquetes (pnpm -r)...'
run_as_target pnpm install -r

if [[ -d shared ]]; then
  echo '[setup] Compilando paquete shared...'
  run_as_target pnpm -C shared build
fi

echo '[setup] Instalando Playwright Chromium...'
run_as_target pnpm -C worker exec playwright install --with-deps chromium

echo '[setup] Compilando worker y bot...'
run_as_target pnpm -C worker build
run_as_target pnpm -C bot build

echo '[setup] Ejecutando pm2 startup (anote la instruccion)'
STARTUP_OUTPUT=$(pm2 startup systemd -u "$TARGET_USER" --hp "$TARGET_HOME")
printf '\n%s\n' "$STARTUP_OUTPUT"

echo '[setup] Finalizado. Recuerde actualizar /opt/CitaConsulares/bot/.env y /opt/CitaConsulares/worker/.env con sus credenciales antes de desplegar.'
