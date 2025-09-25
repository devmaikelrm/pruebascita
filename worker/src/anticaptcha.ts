import type { Page } from 'playwright';
import type { IStorage } from '../../server/storage.js';
import type { Client } from '../../shared/schema.js';
import { NotificationManager } from './notify.js';

export class CaptchaManager {
  private storage: IStorage;
  private notifier: NotificationManager;

  private readonly provider = process.env.CAPTCHA_PROVIDER; // e.g. '2captcha' | 'capmonster'
  private readonly apiKey = process.env.CAPTCHA_API_KEY;
  private readonly timeoutMs = (Number(process.env.CAPTCHA_TIMEOUT_SECONDS) || 45) * 1000;

  constructor(storage: IStorage, notifier: NotificationManager) {
    this.storage = storage;
    this.notifier = notifier;
  }

  /**
   * Handle captcha with strategy: auto-then-skip
   */
  async handleCaptcha(page: Page, client: Client): Promise<string | null> {
    try {
      const captchaPresent = await this.detectCaptcha(page);
      if (!captchaPresent) return null;

      if (!this.provider || !this.apiKey) {
        await this.notifier.sendCaptchaSkipped(client, 'Sin servicio automático configurado');
        return null; // Skip quickly; scheduler should proceed without blocking the queue
      }

      // Attempt automatic solving (placeholder hook)
      const solution = await this.solveAutomatically(page);
      if (solution) return solution;

      await this.notifier.sendCaptchaSkipped(client, 'Tiempo agotado intentando resolver automáticamente');
      return null;
    } catch (error) {
      console.error('Error en manejo de captcha:', error);
      await this.notifier.sendCaptchaSkipped(client, 'Fallo operativo manejando captcha');
      return null;
    }
  }

  /**
   * Detect if captcha is present on the page
   */
  private async detectCaptcha(page: Page): Promise<boolean> {
    try {
      // Look for common captcha indicators
      const captchaSelectors = [
        '.g-recaptcha',
        '.recaptcha',
        '#g-recaptcha',
        'img[src*="captcha"]',
        '[id*="captcha" i]',
        '[class*="captcha" i]',
        '.cf-challenge-form',
        '#challenge-form',
      ];

      for (const selector of captchaSelectors) {
        const element = await page.$(selector);
        if (element && await element.isVisible()) {
          return true;
        }
      }

      return false;
    } catch (error) {
      console.error('Error detecting captcha:', error);
      return false;
    }
  }

  /** Captura de pantalla del captcha (para auditoría) */
  private async captureScreenshot(page: Page, clientId: string): Promise<string> {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `captcha_${clientId}_${timestamp}.png`;
    const screenshotPath = `screenshots/${filename}`;

    // Create screenshots directory if it doesn't exist
    const fs = await import('fs');
    const path = await import('path');
    const screenshotDir = path.dirname(screenshotPath);
    
    if (!fs.existsSync(screenshotDir)) {
      fs.mkdirSync(screenshotDir, { recursive: true });
    }

    await page.screenshot({ 
      path: screenshotPath,
      fullPage: true 
    });

    return screenshotPath;
  }

  /** Intento automático (gancho para proveedor externo) */
  private async solveAutomatically(page: Page): Promise<string | null> {
    // Hook for real implementation (2captcha/capmonster). For now, respect timeout and return null.
    const start = Date.now();
    while (Date.now() - start < this.timeoutMs) {
      await new Promise((r) => setTimeout(r, 1500));
      // Place where we would poll provider result
    }
    return null;
  }

  /** Envía la solución del captcha a la página */
  async submitSolution(page: Page, solution: string): Promise<boolean> {
    try {
      // Find captcha input field
      const captchaInput = await page.$('input[name*="captcha"], .captcha-input, #captcha');
      if (captchaInput) {
        await captchaInput.fill(solution);
        
        // Find and click submit button
        const submitButton = await page.$('input[type="submit"], .captcha-submit, button[type="submit"]');
        if (submitButton) {
          await submitButton.click();
          return true;
        }
      }

      return false;
    } catch (error) {
      console.error('Error submitting captcha solution:', error);
      return false;
    }
  }
}
