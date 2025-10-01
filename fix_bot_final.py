#!/usr/bin/env python3
"""
Fix final del bot
"""
import requests
import subprocess
import sys
import time

API_TOKEN = "GEJsz4nIhHnn22cuJsT5QOXFtGIVNvjz8JsA2xh49HkIsH6tSOraZ3EpylAWmlGw"
SERVER_ID = 109677495
VPS_HOST = "91.99.171.11"

def hetzner_api(endpoint, method="GET", data=None):
    url = f"https://api.hetzner.cloud/v1{endpoint}"
    headers = {"Authorization": f"Bearer {API_TOKEN}", "Content-Type": "application/json"}
    response = requests.post(url, headers=headers, json=data) if method == "POST" else requests.get(url, headers=headers)
    response.raise_for_status()
    return response.json()

def install_paramiko():
    try:
        import paramiko
    except ImportError:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "paramiko", "-q"])

def main():
    print("\n" + "="*60)
    print("  Fix Bot - Compilación Final")
    print("="*60 + "\n")
    
    install_paramiko()
    import paramiko
    
    print("[1/4] Rescue...")
    result = hetzner_api(f"/servers/{SERVER_ID}/actions/enable_rescue", "POST", {"type": "linux64"})
    rescue_pass = result.get('root_password')
    print(f"[✓] {rescue_pass}\n")
    
    print("[2/4] Reiniciando...")
    hetzner_api(f"/servers/{SERVER_ID}/actions/reboot", "POST")
    time.sleep(90)
    
    print("[3/4] Conectando...")
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    for i in range(1, 6):
        try:
            ssh.connect(hostname=VPS_HOST, username="root", password=rescue_pass, timeout=30)
            print("[✓] OK\n")
            break
        except:
            if i < 5:
                time.sleep(20)
            else:
                return False
    
    print("[4/4] Compilando bot...")
    print("="*60 + "\n")
    
    stdin, stdout, stderr = ssh.exec_command("""
set -e

DISK=$(lsblk -ndo NAME,TYPE | grep disk | head -1 | awk '{print $1}')
mkdir -p /mnt/system
mount /dev/${DISK}1 /mnt/system
mount --bind /dev /mnt/system/dev
mount --bind /proc /mnt/system/proc
mount --bind /sys /mnt/system/sys

chroot /mnt/system /bin/bash <<'CHROOT'
set -e
cd /opt/CitaConsulares

echo "▶ Compilando shared..."
pnpm -C shared build
echo "✓ Shared compilado"
ls -lh shared/dist/

echo ""
echo "▶ Compilando bot..."
cd bot
rm -rf dist
pnpm build
echo "✓ Bot compilado"
ls -lh dist/

cd ..

echo ""
echo "▶ Verificando worker..."
ls -lh worker/dist/

echo ""
echo "▶ Arrancando servicios..."
pm2 delete all 2>/dev/null || true
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup systemd -u root --hp /root | grep '^sudo' | bash || true

echo ""
echo "Estado de PM2:"
pm2 status

echo ""
echo "Logs del bot:"
pm2 logs bot --lines 15 --nostream 2>/dev/null || echo "Sin logs aún"

echo ""
echo "Logs del worker:"
pm2 logs worker --lines 15 --nostream 2>/dev/null || echo "Sin logs aún"

CHROOT

umount /mnt/system/{dev,proc,sys} 2>/dev/null || true

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║              ✓ BOT COMPILADO Y ARRANCADO                  ║"
echo "╚════════════════════════════════════════════════════════════╝"
""", get_pty=True)
    
    while True:
        line = stdout.readline()
        if not line:
            break
        print(line, end='', flush=True)
    
    ssh.close()
    
    print("\nReiniciando en modo normal...")
    hetzner_api(f"/servers/{SERVER_ID}/actions/disable_rescue", "POST")
    time.sleep(5)
    hetzner_api(f"/servers/{SERVER_ID}/actions/reboot", "POST")
    print("Esperando 120s...\n")
    time.sleep(120)
    
    print("Verificando servicios...")
    ssh2 = paramiko.SSHClient()
    ssh2.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    for i in range(1, 4):
        try:
            ssh2.connect(hostname=VPS_HOST, username="root", password="pLvnCV4Wixem", timeout=30)
            print("\n[✓] Servidor arrancado\n")
            
            stdin, stdout, stderr = ssh2.exec_command("pm2 status && echo '' && echo 'BOT LOGS:' && pm2 logs bot --lines 20 --nostream && echo '' && echo 'WORKER LOGS:' && pm2 logs worker --lines 20 --nostream", get_pty=True)
            while True:
                line = stdout.readline()
                if not line:
                    break
                print(line, end='')
            
            ssh2.close()
            break
        except:
            if i < 3:
                print(f"Intento {i}/3...")
                time.sleep(30)
    
    print("\n" + "="*60)
    print("  ✓ INSTALACIÓN COMPLETADA")
    print("="*60)
    print(f"\n🔐 SSH: ssh root@{VPS_HOST}")
    print(f"🔑 Pass: pLvnCV4Wixem")
    print(f"\n🤖 PRUEBA EL BOT EN TELEGRAM:")
    print(f"   1. Abre Telegram")
    print(f"   2. Busca tu bot")
    print(f"   3. Envía /start")
    print(f"\n📊 Comandos útiles:")
    print(f"   pm2 status          - Ver estado")
    print(f"   pm2 logs bot        - Ver logs del bot")
    print(f"   pm2 logs worker     - Ver logs del worker")
    print(f"   pm2 restart all     - Reiniciar servicios")
    print(f"   pm2 monit           - Monitor en tiempo real")
    print("")
    
    return True

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\nCancelado")
    except Exception as e:
        print(f"\nError: {e}")
        import traceback
        traceback.print_exc()

