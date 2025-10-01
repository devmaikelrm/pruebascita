#!/usr/bin/env python3
"""
Monitorear el worker en tiempo real
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
    print("  Monitoreando Worker en Tiempo Real")
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

echo "╔════════════════════════════════════════════════════════════╗"
echo "║              MONITOREO DEL WORKER                         ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

echo "▶ Estado actual del Worker:"
pm2 info worker | grep -E "(status|uptime|restarts|memory|cpu)"

echo ""
echo "▶ Logs del Worker (últimas 50 líneas):"
pm2 logs worker --lines 50 --nostream 2>&1 | tail -60

echo ""
echo "▶ Clientes en la cola:"
PGPASSWORD='CitaConsular2024!' psql -U citaconsular -d citaconsular -h localhost <<'SQL'
SELECT 
    q.id,
    c.name as client_name,
    c.username,
    q.status,
    q.attempts,
    q.last_attempt,
    q.next_attempt,
    q.error,
    q.created_at
FROM queue q
JOIN clients c ON q.client_id = c.id
ORDER BY q.created_at DESC;
SQL

echo ""
echo "▶ Clientes activos:"
PGPASSWORD='CitaConsular2024!' psql -U citaconsular -d citaconsular -h localhost <<'SQL'
SELECT 
    c.id,
    c.name,
    c.username,
    c.is_active,
    p.urgency,
    p.service_type,
    c.created_at
FROM clients c
LEFT JOIN preferences p ON c.id = p.client_id
WHERE c.is_active = true
ORDER BY p.urgency DESC, c.created_at DESC;
SQL

echo ""
echo "▶ Citas confirmadas:"
PGPASSWORD='CitaConsular2024!' psql -U citaconsular -d citaconsular -h localhost <<'SQL'
SELECT 
    a.id,
    c.name as client_name,
    a.appointment_date,
    a.appointment_time,
    a.location,
    a.confirmation_code,
    a.created_at
FROM appointments a
JOIN clients c ON a.client_id = c.id
ORDER BY a.appointment_date DESC;
SQL

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║              INFORMACIÓN DEL WORKER                       ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "📊 El worker se ejecuta cada 6-10 minutos (aleatorio)"
echo "🔍 Busca citas disponibles para clientes en la cola"
echo "📝 Los logs muestran cada ejecución con timestamp"
echo ""
echo "🔄 Para ver logs en tiempo real desde el VPS:"
echo "   ssh -i hetzner_vps_key root@91.99.171.11"
echo "   pm2 logs worker"
echo ""
echo "📈 Para ver el estado:"
echo "   pm2 status"
echo ""
""")
        
        while True:
            line = stdout.readline()
            if not line:
                break
            print(line, end='', flush=True)
        
        ssh.close()
        
        print("\n" + "="*60)
        print("  ✓ MONITOREO COMPLETADO")
        print("="*60)
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

