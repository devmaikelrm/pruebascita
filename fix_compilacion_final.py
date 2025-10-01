#!/usr/bin/env python3
"""
Fix final de compilación
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
    print("  Fix Final de Compilación")
    print("="*60 + "\n")
    
    install_paramiko()
    import paramiko
    
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    try:
        ssh.connect(hostname="91.99.171.11", username="root", key_filename="hetzner_vps_key", timeout=30)
        print("[✓] Conectado\n")
        
        stdin, stdout, stderr = ssh.exec_command("""
set -e

cd /opt/CitaConsulares

echo "▶ Verificando estructura de archivos..."
ls -la bot/src/ | head -10
ls -la worker/src/ | head -10

echo ""
echo "▶ Limpiando compilaciones anteriores..."
rm -rf bot/dist worker/dist shared/dist
rm -rf bot/tsconfig.tsbuildinfo worker/tsconfig.tsbuildinfo shared/tsconfig.tsbuildinfo

echo ""
echo "▶ Compilando shared..."
cd shared
pnpm tsc
ls -la dist/ | head -10

echo ""
echo "▶ Compilando bot..."
cd ../bot
pnpm tsc
ls -la dist/ | head -10

echo ""
echo "▶ Compilando worker..."
cd ../worker
pnpm tsc
ls -la dist/ | head -10

cd ..

echo ""
echo "✓ Compilación completada"

echo ""
echo "▶ Reiniciando PM2..."
pm2 restart all
sleep 10

echo ""
pm2 status

echo ""
echo "▶ Logs en tiempo real (últimas 50 líneas):"
pm2 logs --lines 50 --nostream 2>&1 | tail -60

echo ""
echo "✓ Listo"
""", get_pty=True)
        
        while True:
            line = stdout.readline()
            if not line:
                break
            print(line, end='', flush=True)
        
        ssh.close()
        
        print("\n" + "="*60)
        print("  ✓ COMPILACIÓN COMPLETADA")
        print("="*60)
        print("\n🤖 PRUEBA EL BOT AHORA EN TELEGRAM")
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

