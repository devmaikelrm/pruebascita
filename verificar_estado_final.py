#!/usr/bin/env python3
"""
Verificar estado final
"""
import subprocess
import sys

def install_paramiko():
    try:
        import paramiko
    except ImportError:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "paramiko", "-q"])

def main():
    print("\n" + "="*60)
    print("  Verificación Final")
    print("="*60 + "\n")
    
    install_paramiko()
    import paramiko
    
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    try:
        ssh.connect(hostname="91.99.171.11", username="root", key_filename="hetzner_vps_key", timeout=30)
        print("[✓] Conectado\n")
        
        stdin, stdout, stderr = ssh.exec_command("""
cd /opt/CitaConsulares

echo "▶ Estado de PM2:"
pm2 status

echo ""
echo "▶ Logs del BOT (últimas 30 líneas):"
pm2 logs bot --lines 30 --nostream 2>&1 | tail -35

echo ""
echo "▶ Logs del WORKER (últimas 30 líneas):"
pm2 logs worker --lines 30 --nostream 2>&1 | tail -35

echo ""
echo "════════════════════════════════════════════════════════════"
echo "AHORA ENVÍA /operador EN TELEGRAM Y ESPERA 5 SEGUNDOS"
echo "════════════════════════════════════════════════════════════"
""", get_pty=True)
        
        while True:
            line = stdout.readline()
            if not line:
                break
            print(line, end='', flush=True)
        
        ssh.close()
        
        print("\n" + "="*60)
        print("  ✓ VERIFICACIÓN COMPLETADA")
        print("="*60)
        print("\n🤖 Envía /operador en Telegram AHORA")
        print("")
        
    except Exception as e:
        print(f"[✗] Error: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\nCancelado")

