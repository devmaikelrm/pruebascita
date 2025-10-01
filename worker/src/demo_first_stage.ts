import dotenv from 'dotenv';
import { chromium } from 'playwright';
import { storage } from './db.js';
import { NotificationManager } from './notify.js';
import { StorageManager } from './storage.js';
import { CaptchaManager } from './anticaptcha.js';
import { DNIHabanaAdapter } from './adapters/dni_habana.js';

dotenv.config();

async function runOnce(attempt: number) {
  const notifier = new NotificationManager();
  const clients = await storage.getActiveClients();
  if (clients.length === 0) {
    await notifier["sendMessage" as any]?.(`❗ No hay clientes activos en la base de datos`);
    return;
  }
  const client = clients[0];
  const prefs = await storage.getClientPreferences(client.id);

  // Lanzar Chromium con grabación de video (aunque sea headless) para ver el flujo
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    recordVideo: { dir: '/opt/CitaConsulares/worker/videos', size: { width: 1280, height: 720 } },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();

  const storageManager = new StorageManager();
  const captchaManager = new CaptchaManager(storage, notifier);
  const adapter = new DNIHabanaAdapter(page, storage, captchaManager, storageManager, notifier);

  // Forzar modo descubrimiento para notificar si hay hueco sin completar reserva
  process.env.DISCOVERY_MODE = 'true';

  let videoPath: string | undefined;
  try {
    const result = await adapter.processBooking(client, prefs || undefined);
    // Cerrar la página para que Playwright sincronice el archivo de video
    try { await page.close(); } catch {}
    const v = await page.video()?.path();
    videoPath = v || undefined;

    if (result.success) {
      await notifier.sendMessage(`✅ [Intento ${attempt}] Hueco detectado durante la demo (modo descubrimiento activo).`);
      if (videoPath) await notifier.sendVideo(`🎥 Demo intento ${attempt}: flujo hasta widget`, videoPath);
    } else {
      // Notificar que no hay citas visibles en este intento
      await notifier.sendMessage(`ℹ️ [Intento ${attempt}] No se detectaron citas disponibles. (${result.error || 'sin detalle'})`);
      if (result.screenshotBeforePath) {
        await notifier["sendPhoto" as any]?.(`📷 Pantalla antes (intento ${attempt})`, result.screenshotBeforePath);
      }
      if (videoPath) await notifier.sendVideo(`🎥 Demo intento ${attempt}: flujo hasta widget`, videoPath);
    }
  } catch (err) {
    try { await page.close(); } catch {}
    const v = await page.video()?.path();
    videoPath = v || videoPath;
    await (new NotificationManager()).sendMessage(`❗ Error en demo intento ${attempt}: ${(err as Error).message}`);
    if (videoPath) await (new NotificationManager()).sendVideo(`🎥 Demo intento ${attempt}: error`, videoPath);
  } finally {
    await context.close();
    await browser.close();
  }
}

async function main() {
  const notifier = new NotificationManager();
  await notifier.sendMessage('▶️ Iniciando demo de primera etapa (3 intentos)');
  for (let i = 1; i <= 3; i++) {
    await runOnce(i);
  }
  await notifier.sendMessage('✅ Demo completada');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
