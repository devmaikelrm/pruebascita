#!/usr/bin/env python3
"""
Ver estado actual del worker
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
    print("  Estado Actual del Worker")
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

echo "▶ Últimos logs del worker (últimas 80 líneas):"
pm2 logs worker --lines 80 --nostream 2>&1 | grep -v "TAILING" | tail -90

echo ""
echo "▶ Estado de la cola:"
PGPASSWORD='CitaConsular2024!' psql -U citaconsular -d citaconsular -h localhost <<'SQL'
SELECT 
    q.id,
    c.name as client_name,
    q.status,
    q.attempts,
    q.last_attempt,
    q.next_attempt,
    q.error,
    CASE 
        WHEN q.next_attempt IS NULL THEN 'No programado'
        WHEN q.next_attempt > NOW() THEN 'Esperando: ' || EXTRACT(EPOCH FROM (q.next_attempt - NOW()))::int || ' segundos'
        ELSE 'Listo para procesar'
    END as estado_tiempo
FROM queue q
JOIN clients c ON q.client_id = c.id
ORDER BY q.created_at DESC;
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

