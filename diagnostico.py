#!/usr/bin/env python3
"""
Diagnóstico del VPS
"""
import subprocess
import sys

VPS_HOST = "91.99.171.11"
VPS_USER = "root"
VPS_PASS = "WkgCxKeaPpbN"

def install_paramiko():
    try:
        import paramiko
        return True
    except ImportError:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "paramiko", "-q"])
        import paramiko
        return True

def main():
    if not install_paramiko():
        return False
    
    import paramiko
    
    print("\n" + "="*60)
    print("  Diagnóstico del VPS")
    print("="*60 + "\n")
    
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    try:
        ssh.connect(hostname=VPS_HOST, username=VPS_USER, password=VPS_PASS, timeout=30)
        print("[✓] Conectado\n")
        
        comandos = [
            ("Espacio en disco", "df -h"),
            ("Uso de inodos", "df -i"),
            ("Directorios más grandes", "du -sh /* 2>/dev/null | sort -h | tail -10"),
            ("Memoria", "free -h"),
            ("Procesos PM2", "pm2 list 2>/dev/null || echo 'PM2 no iniciado'"),
        ]
        
        for titulo, comando in comandos:
            print(f"\n{'='*60}")
            print(f"  {titulo}")
            print(f"{'='*60}\n")
            
            stdin, stdout, stderr = ssh.exec_command(comando)
            output = stdout.read().decode('utf-8')
            print(output)
        
        ssh.close()
        return True
        
    except Exception as e:
        print(f"[✗] Error: {e}")
        return False

if __name__ == "__main__":
    main()

