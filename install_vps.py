#!/usr/bin/env python3
"""
Script para instalar CitaConsulares en VPS automáticamente
"""
import subprocess
import sys
import time

VPS_HOST = "91.99.171.11"
VPS_USER = "root"
VPS_PASS = "WkgCxKeaPpbN"  # Contraseña del modo rescue

def print_header(text):
    print("\n" + "="*60)
    print(f"  {text}")
    print("="*60 + "\n")

def install_paramiko():
    """Instalar paramiko si no está disponible"""
    try:
        import paramiko
        return True
    except ImportError:
        print("[→] Instalando paramiko...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", "paramiko", "-q"])
        import paramiko
        return True

def execute_ssh_command(ssh, command, description):
    """Ejecutar comando SSH y mostrar output"""
    print(f"[→] {description}...")
    stdin, stdout, stderr = ssh.exec_command(command)
    exit_status = stdout.channel.recv_exit_status()
    
    output = stdout.read().decode('utf-8')
    error = stderr.read().decode('utf-8')
    
    if exit_status == 0:
        print(f"[✓] {description} completado")
        if output.strip():
            print(f"    {output.strip()}")
        return True, output
    else:
        print(f"[✗] Error en {description}")
        if error.strip():
            print(f"    {error.strip()}")
        return False, error

def main():
    print_header("CitaConsulares - Instalación Automática VPS")
    
    # Instalar paramiko
    if not install_paramiko():
        print("[✗] No se pudo instalar paramiko")
        return False
    
    import paramiko
    
    print(f"[→] Conectando a {VPS_HOST}...")
    
    # Crear cliente SSH
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    try:
        # Conectar
        ssh.connect(
            hostname=VPS_HOST,
            username=VPS_USER,
            password=VPS_PASS,
            timeout=30
        )
        print(f"[✓] Conectado a {VPS_HOST}\n")
        
        # Paso 1: Descargar script maestro
        print_header("Fase 1: Descargando script maestro")
        success, output = execute_ssh_command(
            ssh,
            "cd /root && wget -q -O deploy-master.sh https://raw.githubusercontent.com/devmaikelrm/CitaConsulares/main/deploy-master.sh && chmod +x deploy-master.sh && ls -lh deploy-master.sh",
            "Descargando deploy-master.sh"
        )
        
        if not success:
            print("[✗] No se pudo descargar el script")
            return False
        
        print("\n[✓] Script descargado correctamente en /root/deploy-master.sh")
        
        # Preguntar si ejecutar ahora
        print("\n" + "="*60)
        print("  ¿Deseas ejecutar la instalación AHORA?")
        print("="*60)
        print("\nEl script te pedirá:")
        print("  1. Token del bot de Telegram")
        print("  2. Tu Chat ID de Telegram")
        print("  3. DATABASE_URL de Supabase")
        print("  4. WIDGET_URL (opcional)")
        print("\n¿Continuar? (S/N): ", end='')
        
        respuesta = input().strip().upper()
        
        if respuesta == 'S':
            print("\n[→] Ejecutando instalación...")
            print("[!] El script es interactivo, responde las preguntas:\n")
            
            # Ejecutar script de forma interactiva
            channel = ssh.invoke_shell()
            channel.send("bash /root/deploy-master.sh\n")
            
            # Leer output en tiempo real
            while True:
                if channel.recv_ready():
                    output = channel.recv(4096).decode('utf-8')
                    print(output, end='', flush=True)
                
                if channel.exit_status_ready():
                    break
                
                time.sleep(0.1)
            
            print("\n[✓] Instalación completada")
        else:
            print("\n[!] Instalación NO ejecutada")
            print("\nPara ejecutarla manualmente:")
            print(f"  ssh {VPS_USER}@{VPS_HOST}")
            print("  bash /root/deploy-master.sh")
        
        ssh.close()
        return True
        
    except paramiko.AuthenticationException:
        print("[✗] Error de autenticación")
        print(f"    Usuario: {VPS_USER}")
        print("    Verifica la contraseña")
        return False
    except paramiko.SSHException as e:
        print(f"[✗] Error SSH: {e}")
        return False
    except Exception as e:
        print(f"[✗] Error: {e}")
        return False
    finally:
        ssh.close()

if __name__ == "__main__":
    try:
        success = main()
        sys.exit(0 if success else 1)
    except KeyboardInterrupt:
        print("\n\n[!] Instalación cancelada por el usuario")
        sys.exit(1)

