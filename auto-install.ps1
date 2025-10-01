# Auto-instalación completa en VPS
param(
    [string]$TelegramToken = "",
    [string]$TelegramChatId = "",
    [string]$DatabaseUrl = "",
    [string]$WidgetUrl = ""
)

$VPS_HOST = "91.99.171.11"
$VPS_USER = "root"
$VPS_PASS = "3i4jE9UwnXR3"

Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║     CitaConsulares - Instalación Automática Completa      ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Crear script completo de instalación con credenciales
$fullInstallScript = @"
#!/bin/bash
set -euo pipefail

echo '╔════════════════════════════════════════════════════════════╗'
echo '║   Instalación Automática CitaConsulares                    ║'
echo '╚════════════════════════════════════════════════════════════╝'
echo ''

# Actualizar sistema
echo '[1/10] Actualizando sistema...'
apt-get update -y > /dev/null 2>&1
apt-get upgrade -y > /dev/null 2>&1

# Instalar dependencias
echo '[2/10] Instalando dependencias...'
apt-get install -y git curl wget unzip build-essential ca-certificates > /dev/null 2>&1

# Instalar Node.js 20
echo '[3/10] Instalando Node.js 20...'
if ! command -v node >/dev/null 2>&1 || [[ \$(node -v | cut -c2- | cut -d. -f1) -lt 20 ]]; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - > /dev/null 2>&1
    apt-get install -y nodejs > /dev/null 2>&1
fi

# Instalar pnpm
echo '[4/10] Instalando pnpm...'
npm install -g pnpm > /dev/null 2>&1

# Instalar PM2
echo '[5/10] Instalando PM2...'
npm install -g pm2 > /dev/null 2>&1

# Clonar repositorio
echo '[6/10] Clonando repositorio...'
if [[ -d /opt/CitaConsulares ]]; then
    cd /opt/CitaConsulares
    git fetch origin > /dev/null 2>&1
    git reset --hard origin/main > /dev/null 2>&1
    git pull origin main > /dev/null 2>&1
else
    git clone https://github.com/devmaikelrm/CitaConsulares.git /opt/CitaConsulares > /dev/null 2>&1
    cd /opt/CitaConsulares
fi

# Instalar dependencias
echo '[7/10] Instalando dependencias del proyecto...'
pnpm install -r > /dev/null 2>&1

# Compilar
echo '[8/10] Compilando proyecto...'
if [[ -d shared ]]; then
    pnpm -C shared build > /dev/null 2>&1
fi
pnpm -C worker exec playwright install --with-deps chromium > /dev/null 2>&1
pnpm -C worker build > /dev/null 2>&1
pnpm -C bot build > /dev/null 2>&1

# Crear archivos .env
echo '[9/10] Configurando variables de entorno...'
cat > /opt/CitaConsulares/bot/.env <<'ENVEOF'
TZ=America/Havana
TELEGRAM_BOT_TOKEN=${TelegramToken}
TELEGRAM_ADMIN_CHAT=${TelegramChatId}
DATABASE_URL=${DatabaseUrl}
ENVEOF

cat > /opt/CitaConsulares/worker/.env <<'ENVEOF'
TZ=America/Havana
TELEGRAM_BOT_TOKEN=${TelegramToken}
TELEGRAM_ADMIN_CHAT=${TelegramChatId}
WIDGET_URL=${WidgetUrl}
CHECK_INTERVAL_MIN=6
CHECK_INTERVAL_MAX=10
COOLDOWN_BLOCK_HOURS=3
CAPTCHA_PROVIDER=
CAPTCHA_API_KEY=
CAPTCHA_TIMEOUT_SEC=25
DATABASE_URL=${DatabaseUrl}
ENVEOF

chmod 600 /opt/CitaConsulares/bot/.env
chmod 600 /opt/CitaConsulares/worker/.env

# Configurar PM2
echo '[10/10] Configurando PM2...'
mkdir -p /var/log/pm2

cat > /opt/CitaConsulares/ecosystem.config.cjs <<'ECOEOF'
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

# Iniciar servicios
pm2 delete all > /dev/null 2>&1 || true
pm2 start /opt/CitaConsulares/ecosystem.config.cjs
pm2 save
pm2 startup systemd -u root --hp /root | grep -E '^sudo' | bash || true

echo ''
echo '╔════════════════════════════════════════════════════════════╗'
echo '║              ✓ INSTALACIÓN COMPLETADA                     ║'
echo '╚════════════════════════════════════════════════════════════╝'
echo ''
pm2 status
"@

# Guardar script
$fullInstallScript | Out-File -FilePath "full-install.sh" -Encoding ASCII -NoNewline

Write-Host "[✓] Script de instalación creado" -ForegroundColor Green
Write-Host ""

# Pedir credenciales si no se proporcionaron
if ([string]::IsNullOrEmpty($TelegramToken)) {
    Write-Host "═══ Credenciales Necesarias ═══" -ForegroundColor Cyan
    Write-Host ""
    $TelegramToken = Read-Host "Token del bot de Telegram"
    $TelegramChatId = Read-Host "Tu Chat ID de Telegram"
    $DatabaseUrl = Read-Host "DATABASE_URL de Supabase" -AsSecureString
    $DatabaseUrl = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($DatabaseUrl))
    $WidgetUrl = Read-Host "WIDGET_URL (opcional, presiona Enter para omitir)"
}

Write-Host ""
Write-Host "[→] Subiendo script al VPS..." -ForegroundColor Yellow

# Usar SCP para subir el archivo
$env:SSHPASS = $VPS_PASS
& scp -o StrictHostKeyChecking=no -o UserKnownHostsFile=NUL full-install.sh "${VPS_USER}@${VPS_HOST}:/root/full-install.sh"

if ($LASTEXITCODE -eq 0) {
    Write-Host "[✓] Script subido correctamente" -ForegroundColor Green
    Write-Host "[→] Ejecutando instalación..." -ForegroundColor Yellow
    Write-Host ""
    
    # Ejecutar el script
    & ssh -o StrictHostKeyChecking=no "${VPS_USER}@${VPS_HOST}" "bash /root/full-install.sh"
    
    Write-Host ""
    Write-Host "[✓] ¡Instalación completada!" -ForegroundColor Green
} else {
    Write-Host "[!] No se pudo subir el archivo automáticamente" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Ejecuta manualmente:" -ForegroundColor Cyan
    Write-Host "  ssh root@91.99.171.11" -ForegroundColor White
    Write-Host "  # Luego copia y pega el contenido de full-install.sh" -ForegroundColor White
}

# Limpiar
Remove-Item "full-install.sh" -ErrorAction SilentlyContinue

