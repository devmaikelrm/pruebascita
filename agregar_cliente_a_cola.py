#!/usr/bin/env python3
"""
Agregar cliente a la cola para que el worker lo procese
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
    print("  Agregando Cliente a la Cola")
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

echo "▶ Agregando cliente 'Maikel Reyes' a la cola..."
PGPASSWORD='CitaConsular2024!' psql -U citaconsular -d citaconsular -h localhost <<'SQL'
-- Agregar el cliente a la cola
INSERT INTO queue (client_id, status, attempts, next_attempt)
SELECT 
    id,
    'pending',
    0,
    NOW()
FROM clients
WHERE username = '91042042577'
AND NOT EXISTS (
    SELECT 1 FROM queue WHERE client_id = clients.id
)
RETURNING id, client_id, status, attempts, next_attempt;
SQL

echo ""
echo "▶ Verificando cola:"
PGPASSWORD='CitaConsular2024!' psql -U citaconsular -d citaconsular -h localhost <<'SQL'
SELECT 
    q.id,
    c.name as client_name,
    c.username,
    q.status,
    q.attempts,
    q.next_attempt,
    p.urgency
FROM queue q
JOIN clients c ON q.client_id = c.id
LEFT JOIN preferences p ON c.id = p.client_id
ORDER BY p.urgency DESC, q.created_at DESC;
SQL

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║         ✓ CLIENTE AGREGADO A LA COLA                     ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "🔍 El worker procesará este cliente en la próxima ejecución"
echo "⏱️  Próxima ejecución: En 6-10 minutos"
echo ""
echo "📊 Para monitorear en tiempo real:"
echo "   python monitorear_worker.py"
echo ""
echo "📝 Para ver logs del worker:"
echo "   ssh -i hetzner_vps_key root@91.99.171.11"
echo "   pm2 logs worker --lines 100"
echo ""
""")
        
        while True:
            line = stdout.readline()
            if not line:
                break
            print(line, end='', flush=True)
        
        ssh.close()
        
        print("\n" + "="*60)
        print("  ✓ CLIENTE EN COLA")
        print("="*60)
        print("\n🎯 El worker buscará citas para este cliente")
        print("   en la próxima ejecución (6-10 minutos)")
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

