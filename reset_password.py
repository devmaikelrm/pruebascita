#!/usr/bin/env python3
"""
Resetear contraseña root del VPS usando Hetzner API
"""
import requests
import json

API_TOKEN = "GEJsz4nIhHnn22cuJsT5QOXFtGIVNvjz8JsA2xh49HkIsH6tSOraZ3EpylAWmlGw"
SERVER_ID = 109677495

def reset_password():
    print("\n" + "="*60)
    print("  Reseteando contraseña root del VPS")
    print("="*60 + "\n")
    
    url = f"https://api.hetzner.cloud/v1/servers/{SERVER_ID}/actions/reset_password"
    headers = {
        "Authorization": f"Bearer {API_TOKEN}",
        "Content-Type": "application/json"
    }
    
    print("[→] Enviando solicitud de reset de contraseña...")
    
    try:
        response = requests.post(url, headers=headers)
        response.raise_for_status()
        
        data = response.json()
        
        if 'root_password' in data:
            new_password = data['root_password']
            print(f"\n[✓] Contraseña reseteada exitosamente!")
            print(f"\n{'='*60}")
            print(f"  NUEVA CONTRASEÑA ROOT")
            print(f"{'='*60}")
            print(f"\n  {new_password}\n")
            print(f"{'='*60}\n")
            print(f"Guarda esta contraseña en un lugar seguro.")
            print(f"\nPara conectarte:")
            print(f"  ssh root@91.99.171.11")
            print(f"  Contraseña: {new_password}")
            print("")
            return new_password
        else:
            print(f"\n[!] Respuesta inesperada:")
            print(json.dumps(data, indent=2))
            return None
            
    except requests.exceptions.HTTPError as e:
        print(f"\n[✗] Error HTTP: {e}")
        print(f"Respuesta: {e.response.text}")
        return None
    except Exception as e:
        print(f"\n[✗] Error: {e}")
        return None

if __name__ == "__main__":
    reset_password()

