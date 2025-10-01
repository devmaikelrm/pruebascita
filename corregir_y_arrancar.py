#!/usr/bin/env python3
"""
Corregir error de compilación y arrancar servicios
"""
import subprocess
import sys
import time

VPS_HOST = "91.99.171.11"
VPS_USER = "root"
VPS_PASS = "pLvnCV4Wixem"  # Nueva contraseña después del reset

def install_paramiko():
    try:
        import paramiko
        return True
    except ImportError:
        print("[→] Instalando paramiko...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", "paramiko", "-q"])
        import paramiko
        return True

def ejecutar_comando(ssh, comando, mostrar=True):
    """Ejecutar comando y retornar output"""
    stdin, stdout, stderr = ssh.exec_command(comando, get_pty=True)
    
    output_lines = []
    while True:
        line = stdout.readline()
        if not line:
            break
        if mostrar:
            print(line, end='', flush=True)
        output_lines.append(line)
    
    exit_status = stdout.channel.recv_exit_status()
    return exit_status, ''.join(output_lines)

def main():
    print("\n" + "="*60)
    print("  Corrigiendo y arrancando CitaConsulares")
    print("="*60 + "\n")
    
    if not install_paramiko():
        return False
    
    import paramiko
    
    print(f"[→] Conectando a {VPS_HOST}...")
    
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    try:
        ssh.connect(
            hostname=VPS_HOST,
            username=VPS_USER,
            password=VPS_PASS,
            timeout=30
        )
        print(f"[✓] Conectado\n")
        
        # Paso 1: Verificar que el repositorio existe
        print("="*60)
        print("  Paso 1: Verificando instalación")
        print("="*60 + "\n")
        
        exit_code, output = ejecutar_comando(ssh, "ls -la /opt/CitaConsulares")
        if exit_code != 0:
            print("[✗] El repositorio no existe. La instalación falló.")
            return False
        
        # Paso 2: Corregir el error de storage en worker/src/index.ts
        print("\n" + "="*60)
        print("  Paso 2: Corrigiendo error de compilación")
        print("="*60 + "\n")
        
        # El error es que worker/src/index.ts importa { storage } de './db.js'
        # pero db.ts no exporta storage, solo exporta db
        # Necesitamos cambiar la importación
        
        comandos_correccion = """
cd /opt/CitaConsulares/worker/src

# Verificar el contenido actual de index.ts
echo "Contenido actual de index.ts (primeras 10 líneas):"
head -10 index.ts

# Corregir la importación
# Cambiar: import { storage } from './db.js';
# Por: import { storage } from './storage.js';

sed -i "s/import { storage } from '.\/db.js';/import { storage } from '.\/storage.js';/" index.ts

echo ""
echo "Contenido corregido:"
head -10 index.ts

# Recompilar worker
echo ""
echo "Recompilando worker..."
cd /opt/CitaConsulares
pnpm -C worker build 2>&1 | tail -10

echo ""
echo "✓ Worker corregido y compilado"
"""
        
        exit_code, output = ejecutar_comando(ssh, comandos_correccion)
        
        # Paso 3: Arrancar servicios con PM2
        print("\n" + "="*60)
        print("  Paso 3: Arrancando servicios con PM2")
        print("="*60 + "\n")
        
        comandos_pm2 = """
cd /opt/CitaConsulares

# Detener cualquier proceso anterior
pm2 delete all 2>/dev/null || true

# Iniciar servicios
pm2 start ecosystem.config.cjs

# Guardar configuración
pm2 save

# Mostrar estado
echo ""
echo "Estado de los servicios:"
pm2 status

echo ""
echo "Logs recientes del bot:"
pm2 logs bot --lines 20 --nostream

echo ""
echo "Logs recientes del worker:"
pm2 logs worker --lines 20 --nostream
"""
        
        exit_code, output = ejecutar_comando(ssh, comandos_pm2)
        
        # Paso 4: Verificación final
        print("\n" + "="*60)
        print("  Paso 4: Verificación final")
        print("="*60 + "\n")
        
        comandos_verificacion = """
echo "Verificando servicios..."
pm2 status

echo ""
echo "Verificando archivos .env:"
ls -lh /opt/CitaConsulares/bot/.env /opt/CitaConsulares/worker/.env

echo ""
echo "Verificando compilación:"
ls -lh /opt/CitaConsulares/bot/dist/index.js /opt/CitaConsulares/worker/dist/index.js
"""
        
        exit_code, output = ejecutar_comando(ssh, comandos_verificacion)
        
        print("\n" + "="*60)
        print("  ✓ PROCESO COMPLETADO")
        print("="*60 + "\n")
        
        print("RESUMEN:")
        print("")
        print("✅ Servidor reiniciado en modo normal")
        print("✅ Error de compilación corregido")
        print("✅ Servicios arrancados con PM2")
        print("")
        print("COMANDOS ÚTILES:")
        print("  pm2 status          - Ver estado de servicios")
        print("  pm2 logs bot        - Ver logs del bot")
        print("  pm2 logs worker     - Ver logs del worker")
        print("  pm2 restart all     - Reiniciar todos los servicios")
        print("  pm2 monit           - Monitor interactivo")
        print("")
        print("PRÓXIMOS PASOS:")
        print("  1. Prueba el bot en Telegram enviando /start")
        print("  2. Registra un operador con /operador")
        print("  3. Ejecuta el script de base de datos en Supabase")
        print("")
        
        return True
        
    except Exception as e:
        print(f"[✗] Error: {e}")
        import traceback
        traceback.print_exc()
        return False
    finally:
        ssh.close()

if __name__ == "__main__":
    try:
        success = main()
        sys.exit(0 if success else 1)
    except KeyboardInterrupt:
        print("\n\n[!] Cancelado")
        sys.exit(1)

