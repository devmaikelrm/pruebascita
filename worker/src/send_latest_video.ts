import dotenv from 'dotenv';
import axios from 'axios';
// @ts-ignore
import FormData from 'form-data';
import fs from 'fs';
import path from 'path';
import { exec as _exec } from 'child_process';
import { promisify } from 'util';
const exec = promisify(_exec);

dotenv.config();

function getRecipients(): string[] {
  const set = new Set<string>();
  const id1 = process.env.TELEGRAM_ADMIN_CHAT || process.env.TELEGRAM_ADMIN_CHAT_ID;
  const id2 = process.env.TELEGRAM_ADMIN_CHAT_2;
  const list = (process.env.TELEGRAM_ADMIN_CHAT_LIST || '').split(',').map(s => s.trim()).filter(Boolean);
  if (id1) set.add(id1);
  if (id2) set.add(id2);
  for (const id of list) set.add(id);
  return Array.from(set);
}

function findLatestVideo(baseDir: string): string | undefined {
  const entries: { file: string; mtime: number }[] = [];
  const walk = (p: string) => {
    if (!fs.existsSync(p)) return;
    const stats = fs.statSync(p);
    if (stats.isDirectory()) {
      for (const f of fs.readdirSync(p)) walk(path.join(p, f));
    } else if (p.toLowerCase().endsWith('.webm') || p.toLowerCase().endsWith('.mp4')) {
      entries.push({ file: p, mtime: stats.mtimeMs });
    }
  };
  walk(baseDir);
  entries.sort((a, b) => b.mtime - a.mtime);
  return entries[0]?.file;
}

async function sendVideoToAll(caption: string, filePath: string): Promise<number> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const recipients = getRecipients();
  if (!token || recipients.length === 0) {
    console.log('[SEND VIDEO] Telegram disabled or no recipients');
    return 0;
  }
  const apiBase = `https://api.telegram.org/bot${token}`;
  let ok = 0;
  for (const chatId of recipients) {
    try {
      const form = new FormData();
      // @ts-ignore
      form.append('chat_id', chatId);
      // @ts-ignore
      form.append('caption', caption);
      // @ts-ignore
      form.append('parse_mode', 'HTML');
      // @ts-ignore
      form.append('video', fs.createReadStream(filePath));
      await axios.post(`${apiBase}/sendVideo`, form as any, {
        // @ts-ignore
        headers: form.getHeaders?.() || {},
        timeout: 60000,
      });
      ok++;
    } catch (e) {
      console.error(`[SEND VIDEO] Error enviando a ${chatId}:`, (e as any)?.message || e);
    }
  }
  return ok;
}

async function main() {
  const base = '/opt/CitaConsulares/worker/videos';
  let latest = findLatestVideo(base);
  if (!latest) {
    console.log('[SEND VIDEO] No se encontró video para enviar');
    process.exit(0);
  }
  // Intentar convertir a mp4 si es .webm (mejor compatibilidad iPhone)
  let toSend = latest;
  let mp4Created: string | undefined;
  if (latest.toLowerCase().endsWith('.webm')) {
    const mp4 = latest.replace(/\.webm$/i, '.mp4');
    try {
      await exec(`ffmpeg -y -i "${latest}" -vf "format=yuv420p" -c:v libx264 -preset veryfast -crf 30 -movflags +faststart -an "${mp4}"`);
      if (fs.existsSync(mp4) && fs.statSync(mp4).size > 0) {
        toSend = mp4;
        mp4Created = mp4;
        console.log(`[SEND VIDEO] Convertido a MP4: ${mp4}`);
      }
    } catch (e) {
      console.error('[SEND VIDEO] ffmpeg no disponible o falló conversión, se envía original WEBM');
    }
  }
  const now = new Date();
  const caption = `🎥 Prueba de flujo ${now.toLocaleString()}`;
  const ok = await sendVideoToAll(caption, toSend);
  if (ok > 0) {
    try {
      // Borrar archivos
      if (mp4Created && fs.existsSync(mp4Created)) fs.unlinkSync(mp4Created);
      if (fs.existsSync(latest)) fs.unlinkSync(latest);
      const dir = path.dirname(latest);
      if (fs.existsSync(dir) && fs.readdirSync(dir).length === 0) {
        fs.rmdirSync(dir);
      }
      console.log(`[SEND VIDEO] Enviado a ${ok} chat(s) y borrado: ${toSend}`);
    } catch (e) {
      console.error('[SEND VIDEO] Enviado pero no se pudo borrar:', (e as any)?.message || e);
    }
  } else {
    console.log('[SEND VIDEO] No se envió a ningún chat. No se borra el archivo.');
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
