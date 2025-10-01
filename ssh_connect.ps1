# Script temporal para conectar a VPS
$password = ConvertTo-SecureString "3i4jE9UwnXR3" -AsPlainText -Force
$username = "root"
$server = "91.99.171.11"

# Ejecutar comando remoto
$command = @"
echo '=== DIAGNÓSTICO VPS ==='
echo ''
echo '--- Sistema ---'
hostname
uname -a
echo ''
echo '--- Node.js y herramientas ---'
node -v 2>&1 || echo 'Node.js no instalado'
pnpm -v 2>&1 || echo 'pnpm no instalado'
pm2 -v 2>&1 || echo 'PM2 no instalado'
echo ''
echo '--- Buscando repositorio ---'
ls -la /root/CitaConsulares 2>/dev/null || echo '/root/CitaConsulares no existe'
ls -la /opt/CitaConsulares 2>/dev/null || echo '/opt/CitaConsulares no existe'
find /root -name "CitaConsulares" -type d 2>/dev/null || echo 'No encontrado en /root'
find /opt -name "CitaConsulares" -type d 2>/dev/null || echo 'No encontrado en /opt'
echo ''
echo '--- Procesos PM2 ---'
pm2 list 2>/dev/null || echo 'PM2 no configurado'
"@

# Nota: Este script es para referencia, usaremos método directo
Write-Host "Conectando a $server..."

