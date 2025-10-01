# Script PowerShell para ejecutar instalación completa
# Ejecutar como: .\ejecutar-todo-ahora.ps1

$VPS_HOST = "91.99.171.11"
$VPS_USER = "root"
$VPS_PASS = "3i4jE9UwnXR3"

Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║        CitaConsulares - Instalación Automática            ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Crear script de instalación
$installScript = @'
#!/bin/bash
set -e

echo "Descargando script maestro..."
wget -q -O /root/deploy-master.sh https://raw.githubusercontent.com/devmaikelrm/CitaConsulares/main/deploy-master.sh

echo "Dando permisos..."
chmod +x /root/deploy-master.sh

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║  Script descargado en: /root/deploy-master.sh             ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "Para ejecutarlo ahora, usa:"
echo "  bash /root/deploy-master.sh"
echo ""
'@

# Guardar script localmente
$installScript | Out-File -FilePath "install-script.sh" -Encoding ASCII

Write-Host "[1/3] Script de instalación creado" -ForegroundColor Green
Write-Host "[2/3] Intentando conectar a VPS..." -ForegroundColor Yellow
Write-Host ""

# Mostrar instrucciones
Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "  INSTRUCCIONES FINALES" -ForegroundColor Cyan  
Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""
Write-Host "Debido a limitaciones de PowerShell con SSH interactivo," -ForegroundColor Yellow
Write-Host "necesitas ejecutar estos comandos manualmente:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Abre una nueva terminal y ejecuta:" -ForegroundColor White
Write-Host ""
Write-Host "   ssh root@91.99.171.11" -ForegroundColor Cyan
Write-Host "   Contraseña: 3i4jE9UwnXR3" -ForegroundColor Gray
Write-Host ""
Write-Host "2. Una vez dentro, ejecuta:" -ForegroundColor White
Write-Host ""
Write-Host "   wget -O deploy-master.sh https://raw.githubusercontent.com/devmaikelrm/CitaConsulares/main/deploy-master.sh" -ForegroundColor Cyan
Write-Host "   chmod +x deploy-master.sh" -ForegroundColor Cyan
Write-Host "   bash deploy-master.sh" -ForegroundColor Cyan
Write-Host ""
Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""
Write-Host "¿Quieres que abra la conexión SSH ahora? (S/N): " -ForegroundColor Yellow -NoNewline
$respuesta = Read-Host

if ($respuesta -eq "S" -or $respuesta -eq "s") {
    Write-Host ""
    Write-Host "Abriendo conexión SSH..." -ForegroundColor Green
    Write-Host "Contraseña: 3i4jE9UwnXR3" -ForegroundColor Gray
    Write-Host ""
    Start-Process -FilePath "ssh" -ArgumentList "root@91.99.171.11" -NoNewWindow -Wait
} else {
    Write-Host ""
    Write-Host "OK. Cuando estés listo, ejecuta:" -ForegroundColor Cyan
    Write-Host "  ssh root@91.99.171.11" -ForegroundColor White
    Write-Host ""
}

# Limpiar
if (Test-Path "install-script.sh") {
    Remove-Item "install-script.sh"
}

