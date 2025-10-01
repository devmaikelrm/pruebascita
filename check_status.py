#!/usr/bin/env python3
"""
Verificar estado actual del bot
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
    print("  Estado Actual del Bot")
    print("="*60 + "\n")
    
    install_paramiko()
    import paramiko
    
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    try:
        ssh.connect(hostname="91.99.171.11", username="root", password="ECH4Jiw9A37i", timeout=30)
        print("[✓] Conectado\n")
        
        stdin, stdout, stderr = ssh.exec_command("""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║              ESTADO ACTUAL DEL SISTEMA                    ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

echo "▶ Estado de PM2:"
pm2 status

echo ""
echo "▶ Verificando DNS:"
cat /etc/resolv.conf

echo ""
echo "▶ Probando conectividad a Supabase:"
ping -c 2 aws-1-us-east-2.pooler.supabase.com 2>&1 | head -5

echo ""
echo "▶ Logs del BOT (últimas 50 líneas):"
pm2 logs bot --lines 50 --nostream 2>&1 | tail -50

echo ""
echo "▶ Logs del WORKER (últimas 50 líneas):"
pm2 logs worker --lines 50 --nostream 2>&1 | tail -50

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║              FIN DEL REPORTE                              ║"
echo "╚════════════════════════════════════════════════════════════╝"
""", get_pty=True)
        
        while True:
            line = stdout.readline()
            if not line:
                break
            print(line, end='', flush=True)
        
        ssh.close()
        
        print("\n" + "="*60)
        print("  Análisis")
        print("="*60)
        print("\n📊 Revisa los logs arriba para ver:")
        print("   - Si PM2 muestra 'online' para bot y worker")
        print("   - Si hay errores de conexión a Supabase")
        print("   - Si el bot está recibiendo mensajes")
        print("\n🤖 Prueba estos comandos en Telegram:")
        print("   /start")
        print("   /help")
        print("   /operador")
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

