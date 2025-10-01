# Script PowerShell para ejecutar instalación en VPS
# Ejecutar como: .\ejecutar-en-vps.ps1

$VPS_HOST = "91.99.171.11"
$VPS_USER = "root"
$VPS_PASS = "3i4jE9UwnXR3"

Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   Instalación Automática en VPS - CitaConsulares          ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

Write-Host "[1/5] Conectando a VPS $VPS_HOST..." -ForegroundColor Yellow

# Crear script temporal para ejecutar en VPS
$scriptContent = @'
#!/bin/bash
set -e

echo "Descargando script maestro..."
wget -q -O /root/deploy-master.sh https://raw.githubusercontent.com/devmaikelrm/CitaConsulares/main/deploy-master.sh

echo "Dando permisos de ejecución..."
chmod +x /root/deploy-master.sh

echo "Script descargado correctamente en /root/deploy-master.sh"
echo ""
echo "Para ejecutarlo, usa:"
echo "  bash /root/deploy-master.sh"
'@

# Guardar script temporal
$scriptContent | Out-File -FilePath "temp-download.sh" -Encoding ASCII -NoNewline

Write-Host "[2/5] Subiendo script de descarga..." -ForegroundColor Yellow

# Usar scp para subir el script
$scpCommand = "scp"
$scpArgs = @(
    "-o", "StrictHostKeyChecking=no",
    "-o", "UserKnownHostsFile=NUL",
    "temp-download.sh",
    "${VPS_USER}@${VPS_HOST}:/root/temp-download.sh"
)

try {
    # Intentar con scp
    $process = Start-Process -FilePath $scpCommand -ArgumentList $scpArgs -NoNewWindow -Wait -PassThru
    
    if ($process.ExitCode -eq 0) {
        Write-Host "[3/5] Script subido correctamente" -ForegroundColor Green
        
        Write-Host "[4/5] Ejecutando script en VPS..." -ForegroundColor Yellow
        
        # Ejecutar el script en VPS
        $sshCommand = "ssh"
        $sshArgs = @(
            "-o", "StrictHostKeyChecking=no",
            "-o", "UserKnownHostsFile=NUL",
            "${VPS_USER}@${VPS_HOST}",
            "bash /root/temp-download.sh"
        )
        
        Start-Process -FilePath $sshCommand -ArgumentList $sshArgs -NoNewWindow -Wait
        
        Write-Host "[5/5] ¡Listo!" -ForegroundColor Green
        Write-Host ""
        Write-Host "El script maestro está en: /root/deploy-master.sh" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Ahora conéctate a tu VPS y ejecuta:" -ForegroundColor Yellow
        Write-Host "  ssh root@91.99.171.11" -ForegroundColor White
        Write-Host "  bash /root/deploy-master.sh" -ForegroundColor White
        
    } else {
        throw "Error al subir archivo"
    }
    
} catch {
    Write-Host ""
    Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Red
    Write-Host "  No se pudo conectar automáticamente" -ForegroundColor Red
    Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Red
    Write-Host ""
    Write-Host "SOLUCIÓN: Ejecuta manualmente estos comandos:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "1. Conectarse a VPS:" -ForegroundColor Cyan
    Write-Host "   ssh root@91.99.171.11" -ForegroundColor White
    Write-Host "   Contraseña: 3i4jE9UwnXR3" -ForegroundColor White
    Write-Host ""
    Write-Host "2. Ejecutar estos comandos:" -ForegroundColor Cyan
    Write-Host "   wget -O deploy-master.sh https://raw.githubusercontent.com/devmaikelrm/CitaConsulares/main/deploy-master.sh" -ForegroundColor White
    Write-Host "   chmod +x deploy-master.sh" -ForegroundColor White
    Write-Host "   bash deploy-master.sh" -ForegroundColor White
    Write-Host ""
}

# Limpiar archivo temporal
if (Test-Path "temp-download.sh") {
    Remove-Item "temp-download.sh"
}

Write-Host ""
Write-Host "Presiona Enter para continuar..." -ForegroundColor Gray
Read-Host

