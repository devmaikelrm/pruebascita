@echo off
echo ================================================================
echo   CitaConsulares - Instalacion en VPS
echo ================================================================
echo.
echo Conectando a VPS 91.99.171.11...
echo.
echo INSTRUCCIONES:
echo.
echo 1. Se abrira una conexion SSH
echo 2. Contraseña: 3i4jE9UwnXR3
echo 3. Ejecuta estos comandos:
echo.
echo    wget -O deploy-master.sh https://raw.githubusercontent.com/devmaikelrm/CitaConsulares/main/deploy-master.sh
echo    chmod +x deploy-master.sh
echo    bash deploy-master.sh
echo.
echo ================================================================
echo.
pause
ssh root@91.99.171.11

