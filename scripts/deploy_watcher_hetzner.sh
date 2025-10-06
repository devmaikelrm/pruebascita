#!/usr/bin/env bash
set -euo pipefail

# This script deploys the Telegram watcher (bot) to a Hetzner VPS via SSH.
# It can optionally resolve the server public IP via Hetzner Cloud API using HETZNER_TOKEN.
#
# Required env vars:
#   SSH_USER               # e.g. root or ubuntu
#   REPO_DIR               # e.g. /opt/CitaConsulares
#   TELEGRAM_BOT_TOKEN
#   TELEGRAM_ADMIN_CHAT    # numeric chat id to receive messages
#   DISPO_ENABLED=1
#   DISPO_PUBLICKEY
#   DISPO_SERVICE
#   DISPO_AGENDA
#   DISPO_SRC
#   DISPO_SRVSRC=https://citaconsular.es
#
# Optional:
#   HETZNER_TOKEN          # to resolve server IP via API
#   SERVER_NAME or SERVER_ID or SERVER_IP
#   DISPO_DAYS=90
#   DISPO_INTERVAL_SEC=60
#   DISPO_JITTER_PCT=0.2
#   DISPO_VERBOSE=1
#   DISPO_NIGHT_START=00:00
#   DISPO_NIGHT_END=06:00
#   DISPO_NIGHT_MIN_SEC=180
#   DISPO_NIGHT_MAX_SEC=300
#   DISPO_BACKOFF_SEC=300
#   DISPO_RECIPIENTS="id1,id2"   # optional additional recipients
#   SSH_KEY=~/.ssh/id_rsa

require() { if [[ -z "${!1:-}" ]]; then echo "Missing required env: $1" >&2; exit 1; fi; }

require SSH_USER
require REPO_DIR
require TELEGRAM_BOT_TOKEN
require TELEGRAM_ADMIN_CHAT
require DISPO_PUBLICKEY
require DISPO_SERVICE
require DISPO_AGENDA
require DISPO_SRC

SSH_KEY=${SSH_KEY:-"$HOME/.ssh/id_rsa"}

resolve_ip() {
  if [[ -n "${SERVER_IP:-}" ]]; then echo "$SERVER_IP"; return; fi
  if [[ -z "${HETZNER_TOKEN:-}" ]]; then echo ""; return; fi
  if command -v jq >/dev/null 2>&1; then
    if [[ -n "${SERVER_ID:-}" ]]; then
      curl -s -H "Authorization: Bearer $HETZNER_TOKEN" \
        https://api.hetzner.cloud/v1/servers/$SERVER_ID \
        | jq -r '.server.public_net.ipv4.ip'
      return
    fi
    if [[ -n "${SERVER_NAME:-}" ]]; then
      curl -s -H "Authorization: Bearer $HETZNER_TOKEN" \
        "https://api.hetzner.cloud/v1/servers?name=$SERVER_NAME" \
        | jq -r '.servers[0].public_net.ipv4.ip'
      return
    fi
  else
    echo "jq not found; set SERVER_IP or install jq" >&2
  fi
}

IP=$(resolve_ip || true)
if [[ -z "$IP" ]]; then
  require SERVER_IP
  IP=$SERVER_IP
fi

echo "Using server: $SSH_USER@$IP"

# Prepare remote .env content
read -r -d '' BOT_ENV <<EOF
TELEGRAM_BOT_TOKEN=$TELEGRAM_BOT_TOKEN
TELEGRAM_ADMIN_CHAT=$TELEGRAM_ADMIN_CHAT
DISPO_ENABLED=${DISPO_ENABLED:-1}
DISPO_PUBLICKEY=$DISPO_PUBLICKEY
DISPO_SERVICE=$DISPO_SERVICE
DISPO_AGENDA=$DISPO_AGENDA
DISPO_SRC=$DISPO_SRC
DISPO_SRVSRC=${DISPO_SRVSRC:-https://citaconsular.es}
DISPO_DAYS=${DISPO_DAYS:-90}
DISPO_INTERVAL_SEC=${DISPO_INTERVAL_SEC:-60}
DISPO_JITTER_PCT=${DISPO_JITTER_PCT:-0.2}
DISPO_VERBOSE=${DISPO_VERBOSE:-1}
DISPO_NIGHT_START=${DISPO_NIGHT_START:-00:00}
DISPO_NIGHT_END=${DISPO_NIGHT_END:-06:00}
DISPO_NIGHT_MIN_SEC=${DISPO_NIGHT_MIN_SEC:-180}
DISPO_NIGHT_MAX_SEC=${DISPO_NIGHT_MAX_SEC:-300}
DISPO_BACKOFF_SEC=${DISPO_BACKOFF_SEC:-300}
DISPO_RECIPIENTS=${DISPO_RECIPIENTS:-}
EOF

set -x
ssh -i "$SSH_KEY" -o StrictHostKeyChecking=no "$SSH_USER@$IP" bash -s <<'RSCRIPT'
set -euo pipefail
echo "Repo: ${REPO_DIR:?REPO_DIR not set}"
cd "$REPO_DIR"
git pull --rebase
command -v pnpm >/dev/null 2>&1 || npm i -g pnpm
pnpm -C bot i
# Write .env safely
cat > bot/.env <<'EOF_ENV'
__ENV_CONTENT__
EOF_ENV

# Start via PM2 (dev mode tsx or build)
if ! command -v pm2 >/dev/null 2>&1; then npm i -g pm2; fi
# Prefer dev mode for quick iteration
pm2 describe bot >/dev/null 2>&1 && pm2 delete bot || true
pm2 start pnpm --name bot -- run -C bot dev
pm2 save || true
echo "Deployed and (re)started bot with PM2. Check logs: pm2 logs bot --lines 100"
RSCRIPT
set +x

echo "Uploading .env content..."
# Replace placeholder with actual env block and send again to remote .env
REMOTE_ENV=$(printf "%s" "$BOT_ENV" | sed -e 's/[\\&]/\\&/g' -e ':a;N;$!ba;s/\n/\\n/g')
ssh -i "$SSH_KEY" -o StrictHostKeyChecking=no "$SSH_USER@$IP" \
  "sed -i 's#__ENV_CONTENT__#$REMOTE_ENV#' '$REPO_DIR/bot/.env'"

echo "Done. You can run: ssh $SSH_USER@$IP 'pm2 logs bot --lines 120'"

