#!/usr/bin/env bash
set -euo pipefail

REPO_DIR=/opt/CitaConsulares
ECOSYSTEM_FILE="$REPO_DIR/ecosystem.config.cjs"
TARGET_USER="${SUDO_USER:-root}"

if [[ $EUID -ne 0 ]]; then
  echo "[update] Debe ejecutarse como root (use sudo)." >&2
  exit 1
fi

if [[ ! -d $REPO_DIR ]]; then
  echo "[update] No se encontro $REPO_DIR. Ejecute scripts/setup.sh primero." >&2
  exit 1
fi

run_as_target() {
  if [[ "$TARGET_USER" == 'root' ]]; then
    "$@"
  else
    sudo -u "$TARGET_USER" -H "$@"
  fi
}

pm2_cmd() {
  if [[ "$TARGET_USER" == 'root' ]]; then
    pm2 "$@"
  else
    sudo -u "$TARGET_USER" -H pm2 "$@"
  fi
}

cd "$REPO_DIR"

echo '[update] Actualizando repositorio...'
git pull --ff-only

if grep -R -F "../server" worker/src >/dev/null 2>&1; then
  echo "[update] Error: el worker importa server; mueve esos tipos a shared/ antes de compilar." >&2
  exit 1
fi

echo '[update] Instalando dependencias con pnpm...'
run_as_target pnpm install -r

if [[ -d shared ]]; then
  echo '[update] Compilando paquete shared...'
  run_as_target pnpm -C shared build
fi

echo '[update] Compilando proyectos...'
run_as_target pnpm -C worker build
run_as_target pnpm -C bot build

if [[ -f $ECOSYSTEM_FILE ]]; then
  echo '[update] Recargando procesos en PM2...'
  pm2_cmd reload "$ECOSYSTEM_FILE"
  pm2_cmd save
else
  echo "[update] Aviso: no se encontro $ECOSYSTEM_FILE. Ejecute scripts/setup.sh." >&2
fi

echo '[update] Actualizacion completada.'
