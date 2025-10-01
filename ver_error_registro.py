#!/usr/bin/env python3
"""
Ver error de registro en detalle
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
    print("  Diagnóstico del Error de Registro")
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

echo "▶ Logs de error del BOT (últimas 80 líneas):"
pm2 logs bot --err --lines 80 --nostream 2>&1 | tail -90

echo ""
echo "▶ Logs normales del BOT (últimas 40 líneas):"
pm2 logs bot --out --lines 40 --nostream 2>&1 | tail -50

echo ""
echo "▶ Verificando tabla operators:"
PGPASSWORD='CitaConsular2024!' psql -U citaconsular -d citaconsular -h localhost -c "SELECT * FROM operators;"

echo ""
echo "▶ Verificando estructura de la tabla operators:"
PGPASSWORD='CitaConsular2024!' psql -U citaconsular -d citaconsular -h localhost -c "\\d operators"

echo ""
echo "▶ Probando inserción manual:"
PGPASSWORD='CitaConsular2024!' psql -U citaconsular -d citaconsular -h localhost <<'SQL'
-- Intentar insertar un operador de prueba
INSERT INTO operators (telegram_user_id, name) 
VALUES ('test123', 'Test Operator') 
RETURNING *;

-- Eliminar el de prueba
DELETE FROM operators WHERE telegram_user_id = 'test123';
SQL

echo ""
echo "════════════════════════════════════════════════════════════"
""", get_pty=True)
        
        while True:
            line = stdout.readline()
            if not line:
                break
            print(line, end='', flush=True)
        
        ssh.close()
        
    except Exception as e:
        print(f"[✗] Error: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\nCancelado")

