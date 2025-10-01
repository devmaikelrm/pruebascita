import axios from 'axios';
// @ts-ignore - form-data for Node multipart
import FormData from 'form-data';
import type { Client } from '@repo/shared/schema';
import type { BookingResult } from './scheduler.js';

export class NotificationManager {
  private readonly botToken = process.env.TELEGRAM_BOT_TOKEN;
  // Backward-compatible: prefer TELEGRAM_ADMIN_CHAT (as in .env.example),
  // but accept TELEGRAM_ADMIN_CHAT_ID if present in existing setups.
  private readonly adminChatId = process.env.TELEGRAM_ADMIN_CHAT || process.env.TELEGRAM_ADMIN_CHAT_ID;

  private get apiBase() {
    return `https://api.telegram.org/bot${this.botToken}`;
  }

  private get enabled() {
    return !!(this.botToken && this.adminChatId);
  }

  private async sendMessage(text: string): Promise<void> {
    if (!this.enabled) {
      console.log(`[TELEGRAM DISABLED] ${text}`);
      return;
    }
    try {
      await axios.post(`${this.apiBase}/sendMessage`, {
        chat_id: this.adminChatId,
        text,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      });
    } catch (err) {
      console.error('Error enviando mensaje de Telegram:', err instanceof Error ? err.message : err);
    }
  }

  private async sendPhoto(caption: string, photoPath: string): Promise<void> {
    if (!this.enabled) {
      console.log(`[TELEGRAM DISABLED PHOTO] ${caption} -> ${photoPath}`);
      return;
    }
    try {
      const form = new FormData();
      const fs = await import('fs');
      // @ts-ignore - FormData in Node via undici
      if (!('append' in form)) {
        // Lazy import undici FormData if needed
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (form as any).append('chat_id', this.adminChatId!);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (form as any).append('caption', caption);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (form as any).append('parse_mode', 'HTML');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (form as any).append('photo', fs.createReadStream(photoPath));
      await axios.post(`${this.apiBase}/sendPhoto`, form as any, {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        headers: (form as any).getHeaders?.() || {},
      });
    } catch (err) {
      console.error('Error enviando foto a Telegram:', err instanceof Error ? err.message : err);
    }
  }

  async sendSlotFound(client: Client, office: string, service: string): Promise<void> {
    const text = `✅ Hueco encontrado\n\nCliente: <b>${escapeHtml(client.name)}</b>\nTrámite: <b>${escapeHtml(service)}</b>\nOficina: <b>${escapeHtml(office)}</b>\n\nProcediendo en modo automático...`;
    await this.sendMessage(text);
  }

  async sendBookingSuccess(client: Client, result: BookingResult): Promise<void> {
    const when = result.appointmentDate ? new Date(result.appointmentDate).toLocaleString() : 'Fecha/hora no detectadas';
    const text = `🎉 Cita confirmada\n\nCliente: <b>${escapeHtml(client.name)}</b>\nFecha/hora: <b>${escapeHtml(when)}</b>\nServicio: <b>${escapeHtml(result.confirmationData?.service || 'N/D')}</b>`;
    if (result.screenshotAfterPath) {
      await this.sendPhoto(text, result.screenshotAfterPath);
    } else {
      await this.sendMessage(text);
    }
  }

  async sendCaptchaSkipped(client: Client, reason: string): Promise<void> {
    await this.sendMessage(`⚠️ Captcha no resuelto\n\nCliente: <b>${escapeHtml(client.name)}</b>\nMotivo: ${escapeHtml(reason)}\nContinúo con el siguiente cliente.`);
  }

  async sendBlockedCooldown(client: Client, hours: number): Promise<void> {
    await this.sendMessage(`⛔ Bloqueo detectado\n\nCliente: <b>${escapeHtml(client.name)}</b>\nSe aplica cooldown de <b>${hours}h</b>.`);
  }

  async sendOperationalError(client: Client, message: string): Promise<void> {
    await this.sendMessage(`❗ Error operativo\n\nCliente: <b>${escapeHtml(client.name)}</b>\nDetalle: ${escapeHtml(message)}\nLa cola continúa con otros clientes.`);
  }

  async sendSlotFoundManual(client: Client, office: string, service: string, url: string, screenshotPath?: string, fieldsSummary?: string): Promise<void> {
    const summary = fieldsSummary ? `\n\nCampos detectados (resumen):\n${escapeHtml(fieldsSummary)}` : '';
    const text = `✅ Hueco encontrado (modo descubrimiento)\n\nCliente: <b>${escapeHtml(client.name)}</b>\nTrámite: <b>${escapeHtml(service)}</b>\nOficina: <b>${escapeHtml(office)}</b>\n\nEnlace para continuar manualmente:\n${escapeHtml(url)}${summary}`;
    if (screenshotPath) {
      await this.sendPhoto(text, screenshotPath);
    } else {
      await this.sendMessage(text);
    }
  }
}

function escapeHtml(s: string) {
  return s.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' } as any)[c]);
}
