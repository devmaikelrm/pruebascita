#!/usr/bin/env python3
"""
Verificar cliente de prueba en la base de datos
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
    print("  Verificando Cliente de Prueba")
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

echo "▶ Verificando clientes en la base de datos..."
PGPASSWORD='CitaConsular2024!' psql -U citaconsular -d citaconsular -h localhost <<'SQL'
-- Ver todos los clientes
SELECT 
    c.id,
    c.name,
    c.email,
    c.username,
    c.is_active,
    c.created_at,
    o.name as operator_name
FROM clients c
LEFT JOIN operators o ON c.operator_id = o.id
ORDER BY c.created_at DESC;

-- Ver preferencias de los clientes
SELECT 
    p.id,
    c.name as client_name,
    p.service_type,
    p.urgency,
    p.preferred_times,
    p.notes
FROM preferences p
JOIN clients c ON p.client_id = c.id
ORDER BY p.urgency DESC;

-- Ver cola de solicitudes
SELECT 
    q.id,
    c.name as client_name,
    q.status,
    q.attempts,
    q.last_attempt,
    q.next_attempt,
    q.error
FROM queue q
JOIN clients c ON q.client_id = c.id
ORDER BY q.created_at DESC;
SQL

echo ""
echo "▶ Logs recientes del bot:"
pm2 logs bot --lines 30 --nostream 2>&1 | tail -35

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║              VERIFICACIÓN COMPLETADA                      ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
""")
        
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

