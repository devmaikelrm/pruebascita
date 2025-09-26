#!/usr/bin/env bash
set -euo pipefail

REPO_DIR=/opt/CitaConsulares
ECOSYSTEM_FILE="$REPO_DIR/ecosystem.config.js"
TARGET_USER="${SUDO_USER:-root}"

if [[ $EUID -ne 0 ]]; then
  echo "[deploy] Debe ejecutarse como root (use sudo)." >&2
  exit 1
fi

pm2_cmd() {
  if [[ "$TARGET_USER" == 'root' ]]; then
    pm2 "$@"
  else
    sudo -u "$TARGET_USER" -H pm2 "$@"
  fi
}

if [[ ! -d $REPO_DIR ]]; then
  echo "[deploy] No se encontro $REPO_DIR. Ejecute scripts/setup.sh primero." >&2
  exit 1
fi

if [[ ! -f $ECOSYSTEM_FILE ]]; then
  echo "[deploy] No se encontro $ECOSYSTEM_FILE." >&2
  exit 1
fi

if [[ ! -s $REPO_DIR/bot/.env ]]; then
  echo "[deploy] Falta bot/.env. Copie bot/.env.example y complete los valores." >&2
  exit 1
fi

if [[ ! -s $REPO_DIR/worker/.env ]]; then
  echo "[deploy] Falta worker/.env. Copie worker/.env.example y complete los valores." >&2
  exit 1
fi

cd "$REPO_DIR"

echo '[deploy] Iniciando/reload de aplicaciones con PM2...'
pm2_cmd startOrReload "$ECOSYSTEM_FILE"
pm2_cmd save

pm2_cmd status

echo '[deploy] Despliegue completado.'

