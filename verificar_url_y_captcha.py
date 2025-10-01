#!/usr/bin/env python3
"""
Verificar URL que está usando el worker y si encontró CAPTCHA
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
    print("  Verificando URL y CAPTCHA")
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
echo "║              VERIFICACIÓN DE URL Y CAPTCHA                ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

echo "▶ Variables de entorno del worker:"
pm2 env worker | grep -E "(WIDGET_URL|DATABASE_URL|TELEGRAM)" || echo "No se encontraron variables"

echo ""
echo "▶ Verificando ecosystem.config.cjs:"
grep -A 20 "name: 'worker'" ecosystem.config.cjs | grep -E "(WIDGET_URL|env:)" || echo "WIDGET_URL no configurada"

echo ""
echo "▶ URL que está usando el código:"
grep -n "BASE_URL" worker/src/adapters/dni_habana.ts

echo ""
echo "▶ Buscando menciones de CAPTCHA en los logs:"
pm2 logs worker --lines 200 --nostream 2>&1 | grep -i "captcha" || echo "No se encontró CAPTCHA en los logs"

echo ""
echo "▶ Buscando errores de navegación:"
pm2 logs worker --err --lines 100 --nostream 2>&1 | grep -E "(timeout|navigation|blocked|error)" | tail -20 || echo "No hay errores de navegación"

echo ""
echo "▶ Verificando si hay screenshots guardados:"
ls -lh /opt/CitaConsulares/screenshots/ 2>/dev/null || echo "No hay directorio de screenshots"

echo ""
echo "▶ Verificando solicitudes de CAPTCHA en la base de datos:"
PGPASSWORD='CitaConsular2024!' psql -U citaconsular -d citaconsular -h localhost <<'SQL'
SELECT 
    cr.id,
    c.name as client_name,
    cr.captcha_type,
    cr.status,
    cr.image_url,
    cr.created_at,
    cr.solved_at
FROM captcha_requests cr
JOIN clients c ON cr.client_id = c.id
ORDER BY cr.created_at DESC
LIMIT 10;
SQL

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║              INFORMACIÓN IMPORTANTE                       ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "📍 URL por defecto: https://www.citaconsular.es"
echo ""
echo "⚠️  Si WIDGET_URL no está configurada, usa la URL por defecto"
echo ""
echo "🔍 Para configurar la URL correcta:"
echo "   1. Edita ecosystem.config.cjs"
echo "   2. Agrega WIDGET_URL en env del worker"
echo "   3. Reinicia: pm2 restart worker"
echo ""
echo "🤖 El CAPTCHA se detecta automáticamente y se guarda en la BD"
echo "   Luego se notifica por Telegram para resolverlo manualmente"
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

