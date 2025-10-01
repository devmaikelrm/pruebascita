#!/usr/bin/env bash
set -euo pipefail

REPO_DIR=/opt/CitaConsulares
ECOSYSTEM_FILE="$REPO_DIR/ecosystem.config.cjs"
TARGET_USER="${SUDO_USER:-root}"

# Colores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

if [[ $EUID -ne 0 ]]; then
  echo -e "${RED}[deploy] Debe ejecutarse como root (use sudo).${NC}" >&2
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
  echo -e "${RED}[deploy] No se encontro $REPO_DIR. Ejecute scripts/setup.sh primero.${NC}" >&2
  exit 1
fi

if [[ ! -f $ECOSYSTEM_FILE ]]; then
  echo -e "${RED}[deploy] No se encontro $ECOSYSTEM_FILE.${NC}" >&2
  exit 1
fi

# Verificar .env files
echo -e "${YELLOW}[deploy] Verificando archivos .env...${NC}"

if [[ ! -s $REPO_DIR/bot/.env ]]; then
  echo -e "${RED}[deploy] Falta bot/.env. Copie bot/.env.example y complete los valores.${NC}" >&2
  exit 1
fi

if [[ ! -s $REPO_DIR/worker/.env ]]; then
  echo -e "${RED}[deploy] Falta worker/.env. Copie worker/.env.example y complete los valores.${NC}" >&2
  exit 1
fi

# Verificar que las variables críticas estén configuradas
check_env_var() {
  local file=$1
  local var=$2
  if ! grep -q "^${var}=.\\+" "$file"; then
    echo -e "${RED}[deploy] Variable $var no configurada en $file${NC}" >&2
    return 1
  fi
}

echo -e "${YELLOW}[deploy] Verificando variables críticas...${NC}"
check_env_var "$REPO_DIR/bot/.env" "TELEGRAM_BOT_TOKEN" || exit 1
check_env_var "$REPO_DIR/bot/.env" "DATABASE_URL" || exit 1
check_env_var "$REPO_DIR/worker/.env" "TELEGRAM_BOT_TOKEN" || exit 1
check_env_var "$REPO_DIR/worker/.env" "DATABASE_URL" || exit 1

echo -e "${GREEN}[deploy] Variables de entorno verificadas ✓${NC}"

cd "$REPO_DIR"

# Verificar que los archivos compilados existan
echo -e "${YELLOW}[deploy] Verificando archivos compilados...${NC}"
if [[ ! -f "$REPO_DIR/bot/dist/index.js" ]]; then
  echo -e "${RED}[deploy] bot/dist/index.js no existe. Ejecute: cd bot && pnpm build${NC}" >&2
  exit 1
fi

if [[ ! -f "$REPO_DIR/worker/dist/index.js" ]]; then
  echo -e "${RED}[deploy] worker/dist/index.js no existe. Ejecute: cd worker && pnpm build${NC}" >&2
  exit 1
fi

echo -e "${GREEN}[deploy] Archivos compilados verificados ✓${NC}"

echo -e "${YELLOW}[deploy] Iniciando/reload de aplicaciones con PM2...${NC}"
pm2_cmd startOrReload "$ECOSYSTEM_FILE"
pm2_cmd save

echo ""
pm2_cmd status

echo ""
echo -e "${GREEN}[deploy] Despliegue completado ✓${NC}"
echo ""
echo "Comandos útiles:"
echo "  pm2 logs bot       - Ver logs del bot"
echo "  pm2 logs worker    - Ver logs del worker"
echo "  pm2 restart all    - Reiniciar todos los servicios"
echo "  pm2 monit          - Monitor interactivo"

