#!/usr/bin/env python3
"""
Ejecutar script de corrección final
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
        subprocess.check_call([sys.executable, "-m", "pip", "install", "paramiko", "-q"])
        import paramiko
        return True

def ejecutar_comando(ssh, comando, mostrar=True):
    stdin, stdout, stderr = ssh.exec_command(comando, get_pty=True)
    
    while True:
        line = stdout.readline()
        if not line:
            break
        if mostrar:
            print(line, end='', flush=True)
    
    return stdout.channel.recv_exit_status()

def main():
    print("\n" + "="*60)
    print("  Corrección Final y Arranque de Servicios")
    print("="*60 + "\n")
    
    if not install_paramiko():
        return False
    
    import paramiko
    
    # Habilitar rescue
    print("[1/5] Habilitando modo rescue...")
    result = hetzner_api(f"/servers/{SERVER_ID}/actions/enable_rescue", "POST", {"type": "linux64"})
    rescue_password = result.get('root_password')
    print(f"[✓] Modo rescue habilitado\n")
    
    # Reiniciar
    print("[2/5] Reiniciando en modo rescue...")
    hetzner_api(f"/servers/{SERVER_ID}/actions/reboot", "POST")
    print(f"[→] Esperando 90 segundos...\n")
    time.sleep(90)
    
    # Conectar
    print("[3/5] Conectando...")
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    for intento in range(1, 6):
        try:
            ssh.connect(hostname=VPS_HOST, username=VPS_USER, password=rescue_password, timeout=30)
            print(f"[✓] Conectado\n")
            break
        except:
            if intento < 5:
                print(f"[!] Intento {intento}/5, esperando 20s...")
                time.sleep(20)
            else:
                print(f"[✗] No se pudo conectar")
                return False
    
    # Ejecutar corrección
    print("[4/5] Ejecutando corrección y arranque...")
    print("="*60 + "\n")
    
    # Leer el script local
    with open('fix_final.sh', 'r', encoding='utf-8') as f:
        script_content = f.read()
    
    comandos = f"""
# Montar disco
MAIN_DISK=$(lsblk -ndo NAME,TYPE | grep disk | head -1 | awk '{{print $1}}')
mount /dev/${{MAIN_DISK}}1 /mnt/system 2>/dev/null || true
mount --bind /dev /mnt/system/dev 2>/dev/null || true
mount --bind /proc /mnt/system/proc 2>/dev/null || true
mount --bind /sys /mnt/system/sys 2>/dev/null || true
cp /etc/resolv.conf /mnt/system/etc/resolv.conf

# Crear script en el sistema real
cat > /mnt/system/root/fix_final.sh <<'FIXSCRIPT'
{script_content}
FIXSCRIPT

chmod +x /mnt/system/root/fix_final.sh

# Ejecutar en chroot
chroot /mnt/system /bin/bash /root/fix_final.sh

# Desmontar
umount /mnt/system/dev 2>/dev/null || true
umount /mnt/system/proc 2>/dev/null || true
umount /mnt/system/sys 2>/dev/null || true
"""
    
    exit_code = ejecutar_comando(ssh, comandos)
    ssh.close()
    
    if exit_code != 0:
        print(f"\n[!] Hubo algunos errores, pero continuando...")
    
    # Desactivar rescue y reiniciar
    print("\n[5/5] Reiniciando en modo normal...")
    hetzner_api(f"/servers/{SERVER_ID}/actions/disable_rescue", "POST")
    time.sleep(5)
    hetzner_api(f"/servers/{SERVER_ID}/actions/reboot", "POST")
    print(f"[✓] Servidor reiniciando...")
    print(f"[→] Esperando 120 segundos...\n")
    time.sleep(120)
    
    # Intentar verificar
    print("Verificando conexión...")
    ssh2 = paramiko.SSHClient()
    ssh2.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    for intento in range(1, 4):
        try:
            ssh2.connect(hostname=VPS_HOST, username=VPS_USER, password="pLvnCV4Wixem", timeout=30)
            print(f"\n[✓] Conectado al servidor\n")
            
            ejecutar_comando(ssh2, "pm2 status && echo '' && pm2 logs bot --lines 15 --nostream")
            ssh2.close()
            break
        except:
            if intento < 3:
                print(f"[!] Intento {intento}/3, esperando 30s...")
                time.sleep(30)
    
    print("\n" + "="*60)
    print("  ✓ PROCESO COMPLETADO")
    print("="*60 + "\n")
    print("CREDENCIALES:")
    print(f"  ssh root@{VPS_HOST}")
    print(f"  Contraseña: pLvnCV4Wixem")
    print("")
    print("PRUEBA EL BOT:")
    print("  1. Abre Telegram")
    print("  2. Busca tu bot")
    print("  3. Envía /start")
    print("")
    
    return True

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n[!] Cancelado")
    except Exception as e:
        print(f"\n[✗] Error: {e}")
        import traceback
        traceback.print_exc()

