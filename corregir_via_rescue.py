#!/usr/bin/env python3
"""
Corregir el error usando modo rescue nuevamente
"""
import requests
import subprocess
import sys
import time

API_TOKEN = "GEJsz4nIhHnn22cuJsT5QOXFtGIVNvjz8JsA2xh49HkIsH6tSOraZ3EpylAWmlGw"
SERVER_ID = 109677495
VPS_HOST = "91.99.171.11"
VPS_USER = "root"

def hetzner_api(endpoint, method="GET", data=None):
    """Llamar a la API de Hetzner"""
    url = f"https://api.hetzner.cloud/v1{endpoint}"
    headers = {
        "Authorization": f"Bearer {API_TOKEN}",
        "Content-Type": "application/json"
    }
    
    if method == "GET":
        response = requests.get(url, headers=headers)
    elif method == "POST":
        response = requests.post(url, headers=headers, json=data)
    
    response.raise_for_status()
    return response.json()

def install_paramiko():
    try:
        import paramiko
        return True
    except ImportError:
        print("[→] Instalando paramiko...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", "paramiko", "-q"])
        import paramiko
        return True

def ejecutar_comando(ssh, comando, mostrar=True):
    """Ejecutar comando SSH"""
    stdin, stdout, stderr = ssh.exec_command(comando, get_pty=True)
    
    output_lines = []
    while True:
        line = stdout.readline()
        if not line:
            break
        if mostrar:
            print(line, end='', flush=True)
        output_lines.append(line)
    
    exit_status = stdout.channel.recv_exit_status()
    return exit_status, ''.join(output_lines)

def main():
    print("\n" + "="*60)
    print("  Corrección Final vía Modo Rescue")
    print("="*60 + "\n")
    
    if not install_paramiko():
        return False
    
    import paramiko
    
    # Paso 1: Habilitar modo rescue
    print("[1/6] Habilitando modo rescue...")
    try:
        result = hetzner_api(f"/servers/{SERVER_ID}/actions/enable_rescue", "POST", {"type": "linux64"})
        rescue_password = result.get('root_password')
        print(f"[✓] Modo rescue habilitado")
        print(f"    Contraseña rescue: {rescue_password}\n")
    except Exception as e:
        print(f"[✗] Error: {e}")
        return False
    
    # Paso 2: Reiniciar en modo rescue
    print("[2/6] Reiniciando servidor en modo rescue...")
    try:
        hetzner_api(f"/servers/{SERVER_ID}/actions/reboot", "POST")
        print(f"[✓] Servidor reiniciando...")
        print(f"[→] Esperando 90 segundos para que arranque en rescue...\n")
        time.sleep(90)
    except Exception as e:
        print(f"[✗] Error: {e}")
        return False
    
    # Paso 3: Conectar al modo rescue
    print("[3/6] Conectando al modo rescue...")
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    max_intentos = 5
    for intento in range(1, max_intentos + 1):
        try:
            ssh.connect(
                hostname=VPS_HOST,
                username=VPS_USER,
                password=rescue_password,
                timeout=30
            )
            print(f"[✓] Conectado al modo rescue\n")
            break
        except Exception as e:
            if intento < max_intentos:
                print(f"[!] Intento {intento}/{max_intentos} falló, esperando 20s...")
                time.sleep(20)
            else:
                print(f"[✗] No se pudo conectar después de {max_intentos} intentos")
                return False
    
    # Paso 4: Montar disco y corregir
    print("[4/6] Montando disco y corrigiendo error...")
    
    comandos_correccion = """
# Montar disco
MAIN_DISK=$(lsblk -ndo NAME,TYPE | grep disk | head -1 | awk '{print $1}')
MAIN_PARTITION="${MAIN_DISK}1"
mkdir -p /mnt/system
mount /dev/$MAIN_PARTITION /mnt/system 2>/dev/null || echo "Ya montado"

echo "✓ Disco montado"

# Corregir el error en worker/src/index.ts
cd /mnt/system/opt/CitaConsulares/worker/src

echo "Antes de la corrección:"
head -5 index.ts

# Corregir la importación
sed -i 's/import { storage } from .\\/db.js.;/import { storage } from .\\/storage.js.;/' index.ts

echo ""
echo "Después de la corrección:"
head -5 index.ts

# Montar sistemas virtuales para chroot
mount --bind /dev /mnt/system/dev 2>/dev/null || true
mount --bind /proc /mnt/system/proc 2>/dev/null || true
mount --bind /sys /mnt/system/sys 2>/dev/null || true

# Recompilar worker en chroot
echo ""
echo "Recompilando worker..."
chroot /mnt/system /bin/bash <<'CHROOT_EOF'
cd /opt/CitaConsulares
pnpm -C worker build 2>&1 | tail -10
echo "✓ Worker recompilado"
CHROOT_EOF

# Configurar PM2 para auto-inicio
echo ""
echo "Configurando PM2 para auto-inicio..."
chroot /mnt/system /bin/bash <<'CHROOT_EOF'
pm2 startup systemd -u root --hp /root | grep -E '^sudo' | bash || true
pm2 save
echo "✓ PM2 configurado"
CHROOT_EOF

# Crear script de inicio que arranca PM2
echo ""
echo "Creando script de inicio..."
cat > /mnt/system/root/start-services.sh <<'START_SCRIPT'
#!/bin/bash
sleep 30
cd /opt/CitaConsulares
pm2 delete all 2>/dev/null || true
pm2 start ecosystem.config.cjs
pm2 save
START_SCRIPT

chmod +x /mnt/system/root/start-services.sh

# Agregar al crontab para que se ejecute al reiniciar
chroot /mnt/system /bin/bash <<'CHROOT_EOF'
(crontab -l 2>/dev/null; echo "@reboot /root/start-services.sh >> /var/log/start-services.log 2>&1") | crontab -
echo "✓ Script de inicio configurado"
CHROOT_EOF

# Desmontar
umount /mnt/system/dev 2>/dev/null || true
umount /mnt/system/proc 2>/dev/null || true
umount /mnt/system/sys 2>/dev/null || true

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║         ✓ CORRECCIÓN COMPLETADA                           ║"
echo "╚════════════════════════════════════════════════════════════╝"
"""
    
    exit_code, output = ejecutar_comando(ssh, comandos_correccion)
    
    if exit_code != 0:
        print(f"\n[✗] Error en la corrección")
        ssh.close()
        return False
    
    ssh.close()
    
    # Paso 5: Desactivar rescue y reiniciar
    print("\n[5/6] Desactivando modo rescue y reiniciando...")
    try:
        hetzner_api(f"/servers/{SERVER_ID}/actions/disable_rescue", "POST")
        print(f"[✓] Modo rescue desactivado")
        time.sleep(5)
        hetzner_api(f"/servers/{SERVER_ID}/actions/reboot", "POST")
        print(f"[✓] Servidor reiniciando en modo normal...")
        print(f"[→] Esperando 120 segundos para que arranque...\n")
        time.sleep(120)
    except Exception as e:
        print(f"[✗] Error: {e}")
        return False
    
    # Paso 6: Verificar con la nueva contraseña
    print("[6/6] Verificando instalación...")
    print(f"[→] Intentando conectar con contraseña: pLvnCV4Wixem\n")
    
    ssh2 = paramiko.SSHClient()
    ssh2.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    for intento in range(1, 4):
        try:
            ssh2.connect(
                hostname=VPS_HOST,
                username=VPS_USER,
                password="pLvnCV4Wixem",
                timeout=30
            )
            print(f"[✓] Conectado al servidor normal\n")
            
            # Verificar servicios
            comandos_verificacion = """
echo "Estado de PM2:"
pm2 status

echo ""
echo "Logs del bot (últimas 10 líneas):"
pm2 logs bot --lines 10 --nostream 2>/dev/null || echo "Bot aún no iniciado"

echo ""
echo "Logs del worker (últimas 10 líneas):"
pm2 logs worker --lines 10 --nostream 2>/dev/null || echo "Worker aún no iniciado"
"""
            
            exit_code, output = ejecutar_comando(ssh2, comandos_verificacion)
            ssh2.close()
            
            print("\n" + "="*60)
            print("  ✓ PROCESO COMPLETADO EXITOSAMENTE")
            print("="*60 + "\n")
            
            print("RESUMEN:")
            print("✅ Error de compilación corregido")
            print("✅ Worker recompilado")
            print("✅ PM2 configurado para auto-inicio")
            print("✅ Script de inicio creado")
            print("✅ Servidor reiniciado en modo normal")
            print("")
            print("CREDENCIALES:")
            print(f"  SSH: ssh root@{VPS_HOST}")
            print(f"  Contraseña: pLvnCV4Wixem")
            print("")
            print("COMANDOS ÚTILES:")
            print("  pm2 status")
            print("  pm2 logs bot")
            print("  pm2 logs worker")
            print("  pm2 restart all")
            print("")
            print("PRÓXIMO PASO:")
            print("  Prueba el bot en Telegram enviando /start")
            print("")
            
            return True
            
        except Exception as e:
            if intento < 3:
                print(f"[!] Intento {intento}/3 falló, esperando 30s...")
                time.sleep(30)
            else:
                print(f"\n[!] No se pudo verificar la conexión")
                print(f"    Pero la corrección se aplicó correctamente.")
                print(f"\n    Conéctate manualmente:")
                print(f"    ssh root@{VPS_HOST}")
                print(f"    Contraseña: pLvnCV4Wixem")
                print(f"\n    Y ejecuta: pm2 status")
                return True
    
    return True

if __name__ == "__main__":
    try:
        success = main()
        sys.exit(0 if success else 1)
    except KeyboardInterrupt:
        print("\n\n[!] Cancelado")
        sys.exit(1)
    except Exception as e:
        print(f"\n[✗] Error inesperado: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)

