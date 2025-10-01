#!/usr/bin/env python3
"""
Ejecutar instalación desde modo rescue
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
    print("  CitaConsulares - Instalación desde Modo Rescue")
    print("="*60 + "\n")
    
    if not install_paramiko():
        return False
    
    import paramiko
    
    print(f"[1/3] Conectando a {VPS_HOST}...")
    
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
        print("[2/3] Subiendo script de instalación...")
        with open('install-desde-rescue.sh', 'r', encoding='utf-8') as f:
            script_content = f.read()
        
        sftp = ssh.open_sftp()
        with sftp.file('/root/install-desde-rescue.sh', 'w') as remote_file:
            remote_file.write(script_content)
        sftp.close()
        print("[✓] Script subido\n")
        
        # Ejecutar script
        print("[3/3] Ejecutando instalación (esto puede tardar 10-15 minutos)...")
        print("="*60 + "\n")
        
        stdin, stdout, stderr = ssh.exec_command('chmod +x /root/install-desde-rescue.sh && bash /root/install-desde-rescue.sh', get_pty=True)
        
        # Mostrar output en tiempo real
        while True:
            line = stdout.readline()
            if not line:
                break
            print(line, end='', flush=True)
        
        exit_status = stdout.channel.recv_exit_status()
        
        if exit_status == 0:
            print("\n" + "="*60)
            print("  ✓ INSTALACIÓN COMPLETADA EXITOSAMENTE")
            print("="*60 + "\n")
            print("PRÓXIMOS PASOS:")
            print("")
            print("1. Ve al panel de Hetzner Cloud")
            print("2. Desactiva el modo rescue")
            print("3. Reinicia el servidor")
            print("4. Espera 2-3 minutos")
            print("5. Conéctate: ssh root@91.99.171.11")
            print("6. Verifica: pm2 status")
            print("")
            return True
        else:
            print(f"\n[✗] Error: código de salida {exit_status}")
            return False
        
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

