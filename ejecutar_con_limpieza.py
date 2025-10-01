#!/usr/bin/env python3
"""
Limpiar disco y ejecutar instalación
"""
import subprocess
import sys
import time

VPS_HOST = "91.99.171.11"
VPS_USER = "root"
VPS_PASS = "WkgCxKeaPpbN"

def install_paramiko():
    try:
        import paramiko
        return True
    except ImportError:
        print("[→] Instalando paramiko...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", "paramiko", "-q"])
        import paramiko
        return True

def ejecutar_script(ssh, script_local, script_remoto, descripcion):
    """Subir y ejecutar un script"""
    print(f"\n{'='*60}")
    print(f"  {descripcion}")
    print(f"{'='*60}\n")
    
    # Leer script local
    with open(script_local, 'r', encoding='utf-8') as f:
        script_content = f.read()
    
    # Subir al VPS
    sftp = ssh.open_sftp()
    with sftp.file(script_remoto, 'w') as remote_file:
        remote_file.write(script_content)
    sftp.close()
    
    # Ejecutar
    stdin, stdout, stderr = ssh.exec_command(f'chmod +x {script_remoto} && bash {script_remoto}', get_pty=True)
    
    # Mostrar output
    while True:
        line = stdout.readline()
        if not line:
            break
        print(line, end='')
    
    exit_status = stdout.channel.recv_exit_status()
    return exit_status == 0

def main():
    print("\n" + "="*60)
    print("  CitaConsulares - Instalación con Limpieza")
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
        
        # Paso 1: Limpiar disco
        if not ejecutar_script(ssh, 'limpiar-disco.sh', '/root/limpiar-disco.sh', 'Paso 1: Limpiando disco'):
            print("\n[!] Advertencia: Limpieza completada con advertencias")
        
        # Paso 2: Instalar
        if ejecutar_script(ssh, 'install-rapido.sh', '/root/install-rapido.sh', 'Paso 2: Instalando CitaConsulares'):
            print("\n" + "="*60)
            print("  ✓ INSTALACIÓN COMPLETADA EXITOSAMENTE")
            print("="*60 + "\n")
            return True
        else:
            print("\n[✗] Error en la instalación")
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
        print("\n\n[!] Cancelado")
        sys.exit(1)

