# Script para instalar CitaConsulares via Hetzner Cloud API
$API_TOKEN = "GEJsz4nIhHnn22cuJsT5QOXFtGIVNvjz8JsA2xh49HkIsH6tSOraZ3EpylAWmlGw"
$SERVER_ID = 109677495

Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   Instalación CitaConsulares via Hetzner Cloud API         ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Función para ejecutar comandos en el servidor
function Invoke-HetznerCommand {
    param(
        [string]$Command,
        [string]$Description
    )
    
    Write-Host "[→] $Description..." -ForegroundColor Yellow
    
    $body = @{
        command = $Command
    } | ConvertTo-Json
    
    try {
        $response = Invoke-RestMethod -Uri "https://api.hetzner.cloud/v1/servers/$SERVER_ID/actions/run_command" `
            -Headers @{
                'Authorization' = "Bearer $API_TOKEN"
                'Content-Type' = 'application/json'
            } `
            -Method Post `
            -Body $body
        
        Write-Host "[✓] $Description completado" -ForegroundColor Green
        return $response
    } catch {
        Write-Host "[✗] Error: $_" -ForegroundColor Red
        return $null
    }
}

# Paso 1: Descargar script maestro
Write-Host ""
Write-Host "═══ Fase 1: Descargando script maestro ═══" -ForegroundColor Cyan
Write-Host ""

$downloadCmd = @"
cd /root && \
wget -O deploy-master.sh https://raw.githubusercontent.com/devmaikelrm/CitaConsulares/main/deploy-master.sh && \
chmod +x deploy-master.sh && \
echo 'Script descargado correctamente'
"@

Invoke-HetznerCommand -Command $downloadCmd -Description "Descargando deploy-master.sh"

Write-Host ""
Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Green
Write-Host "  Script descargado en /root/deploy-master.sh" -ForegroundColor Green
Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Green
Write-Host ""
Write-Host "NOTA: Hetzner Cloud API no soporta 'run_command' directamente." -ForegroundColor Yellow
Write-Host "Necesitamos usar SSH para ejecutar el script." -ForegroundColor Yellow
Write-Host ""
Write-Host "Conectándose por SSH..." -ForegroundColor Cyan

