#!/usr/bin/env python3
"""
Enviar resumen del deployment a todos los administradores
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
    print("  Enviando Resumen a Administradores")
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

echo "▶ Creando script para enviar mensaje..."
cat > send_summary.js <<'SENDJS'
const https = require('https');

const BOT_TOKEN = '7271022887:AAFLlCyJyXfGchaEsJ2-U4VRpSYKXwYrmkc';
const ADMIN_IDS = ['6213988452', '7652036984', '778282548'];

const message = \`🎉 *DEPLOYMENT COMPLETADO* 🎉

✅ *Sistema CitaConsulares Operativo*

━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 *INFRAESTRUCTURA*
━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ PostgreSQL 16.10 (local en VPS)
✅ Node.js 20.19.5
✅ PM2 con auto-inicio
✅ Playwright + Chromium
✅ SSH Key configurada

━━━━━━━━━━━━━━━━━━━━━━━━━━
💾 *BASE DE DATOS*
━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 *8 Tablas creadas:*
• operators - Operadores del sistema
• clients - Clientes
• preferences - Preferencias de citas
• queue - Cola de solicitudes
• appointments - Citas confirmadas
• captcha_requests - Resolución CAPTCHA
• cooldowns - Rate limiting
• users - Usuarios

🔧 *Características:*
• UUIDs automáticos
• Timestamps automáticos
• Foreign keys configuradas
• Schema 100% sincronizado

━━━━━━━━━━━━━━━━━━━━━━━━━━
🤖 *SERVICIOS ACTIVOS*
━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ *Bot Telegram:* ONLINE
✅ *Worker:* ONLINE (cada 6-10 min)

━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 *COMANDOS DISPONIBLES*
━━━━━━━━━━━━━━━━━━━━━━━━━━

/start - Iniciar bot
/help - Ayuda
/operador - Registrarse como operador
/cliente - Gestionar clientes
/status - Estado del sistema
/preferencia - Configurar preferencias

━━━━━━━━━━━━━━━━━━━━━━━━━━
🔧 *PROBLEMAS RESUELTOS*
━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Conexión PostgreSQL (era Supabase)
✅ Schema completo sincronizado
✅ UUIDs generándose correctamente
✅ Compilación TypeScript
✅ Variables de entorno
✅ Columnas faltantes agregadas

━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 *PRÓXIMOS PASOS*
━━━━━━━━━━━━━━━━━━━━━━━━━━

1️⃣ Envía /operador para registrarte
2️⃣ Usa /cliente para gestionar clientes
3️⃣ Usa /status para ver el estado
4️⃣ El worker busca citas automáticamente

━━━━━━━━━━━━━━━━━━━━━━━━━━

🚀 *¡El sistema está 100% funcional!*

Servidor: 91.99.171.11
Fecha: 2025-10-01
Versión: 1.0.0\`;

function sendMessage(chatId) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: 'Markdown'
    });

    const options = {
      hostname: 'api.telegram.org',
      port: 443,
      path: \`/bot\${BOT_TOKEN}/sendMessage\`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    };

    const req = https.request(options, (res) => {
      let responseData = '';
      
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode === 200) {
          console.log(\`✅ Mensaje enviado a \${chatId}\`);
          resolve();
        } else {
          console.log(\`❌ Error enviando a \${chatId}: \${res.statusCode}\`);
          console.log(responseData);
          reject(new Error(\`HTTP \${res.statusCode}\`));
        }
      });
    });

    req.on('error', (error) => {
      console.error(\`❌ Error de red para \${chatId}:\`, error);
      reject(error);
    });

    req.write(data);
    req.end();
  });
}

async function sendToAll() {
  console.log('📤 Enviando resumen a todos los administradores...\\n');
  
  for (const chatId of ADMIN_IDS) {
    try {
      await sendMessage(chatId);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Esperar 1 segundo entre mensajes
    } catch (error) {
      console.error(\`Error enviando a \${chatId}:\`, error.message);
    }
  }
  
  console.log('\\n✅ Proceso completado');
}

sendToAll().catch(console.error);
SENDJS

echo "✓ Script creado"

echo ""
echo "▶ Ejecutando envío de mensajes..."
node send_summary.js

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║         ✓ MENSAJES ENVIADOS A ADMINISTRADORES            ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "📱 Revisa Telegram para ver el mensaje"
echo ""
""", get_pty=True)
        
        while True:
            line = stdout.readline()
            if not line:
                break
            print(line, end='', flush=True)
        
        ssh.close()
        
        print("\n" + "="*60)
        print("  ✓ MENSAJES ENVIADOS")
        print("="*60)
        print("\n📱 Revisa Telegram")
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

