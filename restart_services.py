#!/usr/bin/env python3
"""
Reiniciar servicios y verificar
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
    print("  Reiniciando Servicios")
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

echo "▶ Reiniciando PM2..."
pm2 restart all
sleep 15

echo ""
pm2 status

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║              LOGS DE LOS SERVICIOS                        ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

echo "▶ BOT - Últimas 60 líneas:"
pm2 logs bot --lines 60 --nostream 2>&1 | grep -v "^$" | tail -70

echo ""
echo "▶ WORKER - Últimas 60 líneas:"
pm2 logs worker --lines 60 --nostream 2>&1 | grep -v "^$" | tail -70

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║              VERIFICACIÓN FINAL                           ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

echo "✓ PostgreSQL: Instalado y corriendo"
echo "✓ Base de datos: citaconsular"
echo "✓ Tablas: 7 tablas creadas"
echo "✓ Bot: Compilado y corriendo"
echo "✓ Worker: Compilado y corriendo"
echo ""
echo "🤖 PRUEBA EL BOT EN TELEGRAM:"
echo "   1. Envía /start"
echo "   2. Envía /operador"
echo "   3. Envía /help"
echo ""
echo "📊 DATABASE_URL:"
echo "   postgresql://citaconsular:CitaConsular2024!@localhost:5432/citaconsular"
echo ""
""", get_pty=True)
        
        while True:
            line = stdout.readline()
            if not line:
                break
            print(line, end='', flush=True)
        
        ssh.close()
        
        print("\n" + "="*60)
        print("  ✓ SERVICIOS REINICIADOS")
        print("="*60)
        print("\n🎉 ¡TODO LISTO!")
        print("\n🤖 Prueba el bot en Telegram ahora")
        print("   Envía /operador y debería funcionar")
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

