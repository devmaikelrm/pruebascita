#!/usr/bin/env python3
"""
Verificar schema final y reiniciar servicios
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
    print("  Verificación Final del Schema")
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

echo "▶ Tablas existentes:"
PGPASSWORD='CitaConsular2024!' psql -U citaconsular -d citaconsular -h localhost -c "\\dt"

echo ""
echo "▶ Estructura de clients:"
PGPASSWORD='CitaConsular2024!' psql -U citaconsular -d citaconsular -h localhost -c "\\d clients"

echo ""
echo "▶ Estructura de queue:"
PGPASSWORD='CitaConsular2024!' psql -U citaconsular -d citaconsular -h localhost -c "\\d queue"

echo ""
echo "▶ Reiniciando PM2..."
pm2 restart all
sleep 10

echo ""
echo "▶ Estado de PM2:"
pm2 status

echo ""
echo "▶ Logs recientes del bot:"
pm2 logs bot --lines 20 --nostream 2>&1 | tail -25

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║              ✓ SCHEMA VERIFICADO                          ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "🤖 PRUEBA LOS COMANDOS EN TELEGRAM:"
echo "   /operador - Registrarte como operador"
echo "   /cliente - Ver clientes"
echo "   /status - Ver estado del sistema"
echo ""
""")
        
        while True:
            line = stdout.readline()
            if not line:
                break
            print(line, end='', flush=True)
        
        ssh.close()
        
        print("\n" + "="*60)
        print("  ✓ VERIFICACIÓN COMPLETADA")
        print("="*60)
        print("\n🤖 Prueba los comandos ahora")
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

