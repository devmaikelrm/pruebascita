Param(
  [Parameter(Mandatory=$true)][string]$SshUser,
  [Parameter(Mandatory=$true)][string]$RepoDir,
  [string]$ServerIp,
  [string]$HetznerToken,
  [string]$ServerName,
  [string]$ServerId,
  [string]$SshKey = "$HOME/.ssh/id_rsa"
)

function Require-Env($name) {
  $val = (Get-Item -Path Env:$name -ErrorAction SilentlyContinue).Value
  if (-not $val) { throw "Missing environment variable: $name" }
}

Require-Env 'TELEGRAM_BOT_TOKEN'
Require-Env 'TELEGRAM_ADMIN_CHAT'
Require-Env 'DISPO_PUBLICKEY'
Require-Env 'DISPO_SERVICE'
Require-Env 'DISPO_AGENDA'
Require-Env 'DISPO_SRC'

function Resolve-Ip {
  Param([string]$HetznerToken,[string]$ServerName,[string]$ServerId)
  if ($ServerId) {
    $resp = Invoke-RestMethod -Headers @{ Authorization = "Bearer $HetznerToken" } -Uri "https://api.hetzner.cloud/v1/servers/$ServerId" -Method Get
    return $resp.server.public_net.ipv4.ip
  }
  if ($ServerName) {
    $resp = Invoke-RestMethod -Headers @{ Authorization = "Bearer $HetznerToken" } -Uri "https://api.hetzner.cloud/v1/servers?name=$ServerName" -Method Get
    return $resp.servers[0].public_net.ipv4.ip
  }
  return $null
}

if (-not $ServerIp -and $HetznerToken) {
  $ServerIp = Resolve-Ip -HetznerToken $HetznerToken -ServerName $ServerName -ServerId $ServerId
}
if (-not $ServerIp) { throw "Provide -ServerIp or -HetznerToken with -ServerName/-ServerId" }

$envBlock = @"
TELEGRAM_BOT_TOKEN=$([Environment]::GetEnvironmentVariable('TELEGRAM_BOT_TOKEN'))
TELEGRAM_ADMIN_CHAT=$([Environment]::GetEnvironmentVariable('TELEGRAM_ADMIN_CHAT'))
DISPO_ENABLED=$([Environment]::GetEnvironmentVariable('DISPO_ENABLED') ?? '1')
DISPO_PUBLICKEY=$([Environment]::GetEnvironmentVariable('DISPO_PUBLICKEY'))
DISPO_SERVICE=$([Environment]::GetEnvironmentVariable('DISPO_SERVICE'))
DISPO_AGENDA=$([Environment]::GetEnvironmentVariable('DISPO_AGENDA'))
DISPO_SRC=$([Environment]::GetEnvironmentVariable('DISPO_SRC'))
DISPO_SRVSRC=$([Environment]::GetEnvironmentVariable('DISPO_SRVSRC') ?? 'https://citaconsular.es')
DISPO_DAYS=$([Environment]::GetEnvironmentVariable('DISPO_DAYS') ?? '90')
DISPO_INTERVAL_SEC=$([Environment]::GetEnvironmentVariable('DISPO_INTERVAL_SEC') ?? '60')
DISPO_JITTER_PCT=$([Environment]::GetEnvironmentVariable('DISPO_JITTER_PCT') ?? '0.2')
DISPO_VERBOSE=$([Environment]::GetEnvironmentVariable('DISPO_VERBOSE') ?? '1')
DISPO_NIGHT_START=$([Environment]::GetEnvironmentVariable('DISPO_NIGHT_START') ?? '00:00')
DISPO_NIGHT_END=$([Environment]::GetEnvironmentVariable('DISPO_NIGHT_END') ?? '06:00')
DISPO_NIGHT_MIN_SEC=$([Environment]::GetEnvironmentVariable('DISPO_NIGHT_MIN_SEC') ?? '180')
DISPO_NIGHT_MAX_SEC=$([Environment]::GetEnvironmentVariable('DISPO_NIGHT_MAX_SEC') ?? '300')
DISPO_BACKOFF_SEC=$([Environment]::GetEnvironmentVariable('DISPO_BACKOFF_SEC') ?? '300')
DISPO_RECIPIENTS=$([Environment]::GetEnvironmentVariable('DISPO_RECIPIENTS'))
"@

Write-Host "Using server $SshUser@$ServerIp"

$remoteScript = @"
set -euo pipefail
cd '$RepoDir'
git pull --rebase
command -v pnpm >/dev/null 2>&1 || npm i -g pnpm
pnpm -C bot i
cat > bot/.env <<'EOF'
$envBlock
EOF
if ! command -v pm2 >/dev/null 2>&1; then npm i -g pm2; fi
pm2 describe bot >/dev/null 2>&1 && pm2 delete bot || true
pm2 start pnpm --name bot -- run -C bot dev
pm2 save || true
echo 'Deployed. Use: pm2 logs bot --lines 120'
"@

ssh -i $SshKey -o StrictHostKeyChecking=no "$SshUser@$ServerIp" $remoteScript
