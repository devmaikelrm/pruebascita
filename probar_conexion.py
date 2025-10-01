#!/usr/bin/env python3
"""
Probar conexión con diferentes contraseñas
"""
import subprocess
import sys

VPS_HOST = "91.99.171.11"
VPS_USER = "root"
PASSWORDS = [
    ("Contraseña original", "3i4jE9UwnXR3"),
    ("Contraseña rescue", "WkgCxKeaPpbN"),
]

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
    print("  Probando conexión al VPS")
    print("="*60 + "\n")
    
    if not install_paramiko():
        return False
    
    import paramiko
    
    for nombre, password in PASSWORDS:
        print(f"[→] Probando con {nombre}...")
        
        ssh = paramiko.SSHClient()
        ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        
        try:
            ssh.connect(
                hostname=VPS_HOST,
                username=VPS_USER,
                password=password,
                timeout=15
            )
            print(f"[✓] ¡Conexión exitosa con {nombre}!\n")
            
            # Ejecutar comando de prueba
            stdin, stdout, stderr = ssh.exec_command("hostname && uptime && pm2 status 2>/dev/null || echo 'PM2 no iniciado'")
            output = stdout.read().decode('utf-8')
            print(output)
            
            ssh.close()
            
            print(f"\n✅ Contraseña correcta: {password}")
            return True
            
        except paramiko.AuthenticationException:
            print(f"[✗] Autenticación fallida con {nombre}")
            ssh.close()
            continue
        except Exception as e:
            print(f"[✗] Error: {e}")
            ssh.close()
            continue
    
    print("\n[✗] No se pudo conectar con ninguna contraseña")
    return False

if __name__ == "__main__":
    main()

