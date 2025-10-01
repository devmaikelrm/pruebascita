#!/usr/bin/env python3
"""
Ejecutar instalación rápida en VPS
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

def main():
    print("\n" + "="*60)
    print("  CitaConsulares - Instalación Rápida")
    print("="*60 + "\n")
    
    if not install_paramiko():
        return False
    
    import paramiko
    
    print(f"[1/4] Conectando a {VPS_HOST}...")
    
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
        
        # Leer el script local
        print("[2/4] Leyendo script de instalación...")
        with open('install-rapido.sh', 'r', encoding='utf-8') as f:
            script_content = f.read()
        print("[✓] Script leído\n")
        
        # Subir script al VPS
        print("[3/4] Subiendo script al VPS...")
        sftp = ssh.open_sftp()
        with sftp.file('/root/install-rapido.sh', 'w') as remote_file:
            remote_file.write(script_content)
        sftp.close()
        print("[✓] Script subido\n")
        
        # Ejecutar script
        print("[4/4] Ejecutando instalación...")
        print("="*60 + "\n")
        
        stdin, stdout, stderr = ssh.exec_command('chmod +x /root/install-rapido.sh && bash /root/install-rapido.sh', get_pty=True)
        
        # Mostrar output en tiempo real
        while True:
            line = stdout.readline()
            if not line:
                break
            print(line, end='')
        
        # Mostrar errores si hay
        errors = stderr.read().decode('utf-8')
        if errors.strip():
            print("\n[!] Errores:")
            print(errors)
        
        exit_status = stdout.channel.recv_exit_status()
        
        if exit_status == 0:
            print("\n" + "="*60)
            print("  ✓ INSTALACIÓN COMPLETADA EXITOSAMENTE")
            print("="*60 + "\n")
            return True
        else:
            print(f"\n[✗] Error: código de salida {exit_status}")
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

