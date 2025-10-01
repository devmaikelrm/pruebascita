import type { Page, Frame } from 'playwright';
import type { Client, Preferences } from '@repo/shared';
import type { IStorage } from '@repo/shared';
import type { BookingResult } from '../scheduler.js';
import { AntiBlockingManager } from '../antiBlock.js';
import { CaptchaManager } from '../anticaptcha.js';
import { StorageManager } from '../storage.js';
import { waitHuman } from '../utils.js';
import { NotificationManager } from '../notify.js';
import { selectFirstAvailableSlotOnBookitit } from '../slotSelect.js';


export class DNIHabanaAdapter {
  private page: Page;
  private storage: IStorage;
  private captchaManager: CaptchaManager;
  private storageManager: StorageManager;
  private notifier: NotificationManager;

  // Official DNI appointment URL for Habana
  private readonly BASE_URL = process.env.WIDGET_URL || 'https://www.citaconsular.es';

  constructor(
    page: Page,
    storage: IStorage,
    captchaManager: CaptchaManager,
    storageManager: StorageManager,
    notifier: NotificationManager
  ) {
    this.page = page;
    this.storage = storage;
    this.captchaManager = captchaManager;
    this.storageManager = storageManager;
    this.notifier = notifier;
  }

  async processBooking(client: Client, preferences?: Preferences): Promise<BookingResult> {
    console.log(`Starting DNI Habana booking process for ${client.name}`);

    try {
      // Step 1: Navigate to the booking widget
      await this.navigateToBookingPage();

      // Step 2: Handle welcome modal if present
      await this.handleWelcomeModal();

      // Step 3: Find and select first available appointment slot
      const slotSelected = await this.selectFirstAvailableSlot();
      if (!slotSelected) {
        return {
          success: false,
          error: 'No available appointment slots found'
        };
      }

      // Discovery mode? Notify and hand off manual continuation instead of auto-confirm
      const discovery = String(process.env.DISCOVERY_MODE ?? 'true').toLowerCase() === 'true';
      if (discovery) {
        const screenshotBefore = await this.takeScreenshot('before', client.id);
        const fieldsSummary = await this.extractFormFieldsSummary();
        const url = this.page.url();
        await this.notifier.sendSlotFoundManual(
          client,
          'Habana',
          preferences?.serviceType || 'DNI',
          url,
          screenshotBefore,
          fieldsSummary
        );
        return {
          success: false,
          error: 'Discovery mode - manual follow-up sent'
        };
      }

      // Normal flow: notify, screenshot and proceed with login
      await this.notifier.sendSlotFound(client, 'Habana', preferences?.serviceType || 'DNI');

      // Step 4: Take screenshot before confirming
      const screenshotBefore = await this.takeScreenshot('before', client.id);

      // Step 5: Fill login credentials and submit
      const loginSuccess = await this.performLogin(client);
      if (!loginSuccess) {
        return {
          success: false,
          error: 'Login failed - invalid credentials or captcha required'
        };
      }

      // Step 6: Wait for and verify success page
      const confirmationData = await this.waitForConfirmation();
      if (!confirmationData) {
        return {
          success: false,
          error: 'Booking confirmation failed or timeout'
        };
      }

      // Step 7: Take screenshot of success page
      const screenshotAfter = await this.takeScreenshot('after', client.id);

      // Step 8: Extract appointment details
      const appointmentDetails = await this.extractAppointmentDetails();

      console.log(`✅ DNI Habana booking completed successfully for ${client.name}`);

      return {
        success: true,
        appointmentDate: appointmentDetails.date,
        appointmentTime: appointmentDetails.time,
        confirmationData,
        screenshotBeforePath: screenshotBefore,
        screenshotAfterPath: screenshotAfter
      };

    } catch (error) {
      console.error(`❌ DNI Habana booking failed for ${client.name}:`, error);

      // Check if this is a blocking error
      if (await this.detectBlockingError()) {
        const hours = Number(process.env.COOLDOWN_HOURS || 2);
        await this.notifier.sendBlockedCooldown(client, hours);
        return {
          success: false,
          error: 'Access blocked - system error page detected'
        };
      }

      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  private async navigateToBookingPage(): Promise<void> {
    console.log('Navigating to DNI Habana booking page...');
    await this.page.goto(this.BASE_URL, {
      waitUntil: 'networkidle',
      timeout: 30000
    });
    await waitHuman(2000, 3000);
  }

  private async handleWelcomeModal(): Promise<void> {
    try {
      // Small wait to ensure overlays render
      await waitHuman(500, 900);

      const acceptRe = /aceptar|accept|continuar|continue|ok|entendido|de acuerdo|i agree|got it/i;
      const frames: (Page|Frame)[] = [this.page, ...this.page.frames()];

      for (const f of frames) {
        // 1) ARIA role=button by accessible name
        const roleBtn = f.getByRole('button', { name: acceptRe }).first();
        if (await roleBtn.isVisible().catch(() => false)) {
          console.log('Welcome/consent detected (role=button). Clicking...');
          await roleBtn.click();
          await waitHuman(800, 1600);
          return;
        }

        // 2) Common clickable elements with matching text
        const clickables = f
          .locator('button, a, [role="button"], .btn, .button')
          .filter({ hasText: acceptRe });
        if (await clickables.first().isVisible().catch(() => false)) {
          console.log('Welcome/consent detected (generic clickable). Clicking...');
          await clickables.first().click();
          await waitHuman(800, 1600);
          return;
        }

        // 3) Fallback: any element containing the text
        const textEl = f.getByText(acceptRe, { exact: false }).first();
        if (await textEl.isVisible().catch(() => false)) {
          console.log('Welcome/consent detected (text fallback). Clicking...');
          await textEl.click().catch(() => undefined);
          await waitHuman(800, 1600);
          return;
        }
      }

      console.log('No welcome modal/button detected.');
    } catch (error) {
      console.log('No welcome modal found or failed to handle:', error);
    }
  }

  private async selectFirstAvailableSlot(): Promise<boolean> {
    return await selectFirstAvailableSlotOnBookitit(this.page);
  }

  private async performLogin(client: Client): Promise<boolean> {
    console.log(`Performing login for client ${client.name}...`);

    try {
      const userField = this.page.getByLabel(/usuario|login|user/i).or(this.page.getByPlaceholder(/usuario|user|login/i)).or(this.page.locator('input[name*="user" i], input[id*="user" i]'));
      await userField.first().fill(client.username);
      await waitHuman(300, 600);

      const passField = this.page.getByLabel(/contraseña|password|clave/i).or(this.page.getByPlaceholder(/contraseña|password|clave/i)).or(this.page.locator('input[type="password"]'));
      await passField.first().fill(client.password);
      await waitHuman(300, 600);

      const captchaSolution = await this.captchaManager.handleCaptcha(this.page, client);
      if (captchaSolution) {
        await this.captchaManager.submitSolution(this.page, captchaSolution);
      }

      const submit = this.page.getByRole('button', { name: /acceder|confirmar|entrar|login|submit|aceptar/i }).or(this.page.locator('input[type="submit"]'));
      await submit.first().click();
      await waitHuman(1200, 2400);

      const loginError = this.page.getByText(/error|credenciales|incorrectas|incorrect|denegado/i);
      if (await loginError.first().isVisible().catch(() => false)) {
        const txt = await loginError.first().textContent();
        throw new Error(`Login error: ${txt ?? 'desconocido'}`);
      }

      return true;

    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  }

  private async waitForConfirmation(): Promise<any> {
    try {
      console.log('Waiting for booking confirmation...');

      // Wait for success text in ES or EN
      await this.page.getByText(/reserva (realizada|confirmada)|booking confirmed|reservation (successful|confirmed)/i).waitFor({ timeout: 15000 });

      // Extract confirmation details
      const confirmationData: any = {};

      const content = await this.page.textContent('body');
      if (content) {
        confirmationData.rawText = content;
        const serviceMatch = content.match(/Servicio\s*:\s*(.+)/i);
        if (serviceMatch) confirmationData.service = serviceMatch[1].trim();
        const loginMatch = content.match(/Login\s*:\s*(.+)/i) || content.match(/Usuario\s*:\s*(.+)/i);
        if (loginMatch) confirmationData.login = loginMatch[1].trim();
        const nameMatch = content.match(/Nombre\s*:\s*(.+)/i) || content.match(/Name\s*:\s*(.+)/i);
        if (nameMatch) confirmationData.name = nameMatch[1].trim();
        const cancelMatch = content.match(/cancelar la cita.*?(https?:\S+)/i);
        if (cancelMatch) confirmationData.cancelUrl = cancelMatch[1];
      }

      return confirmationData;

    } catch (error) {
      console.error('Error waiting for confirmation:', error);
      return null;
    }
  }

  private async extractFormFieldsSummary(): Promise<string> {
    try {
      const scopes: (Page | Frame)[] = [this.page, ...this.page.frames()];
      const lines: string[] = [];
      for (const f of scopes) {
        const inputs = f.locator('input, select, textarea');
        const count = await inputs.count().catch(() => 0);
        for (let i = 0; i < Math.min(count, 12); i++) {
          const el = inputs.nth(i);
          const tag = await el.evaluate((n) => n.tagName.toLowerCase()).catch(() => 'el');
          const type = (await el.getAttribute('type')) || '';
          const name = (await el.getAttribute('name')) || '';
          const id = (await el.getAttribute('id')) || '';
          const placeholder = (await el.getAttribute('placeholder')) || '';
          const labelFor = id ? await f.locator(`label[for="${id}"]`).first().textContent().catch(() => null) : null;
          const labelNear = await el.locator('xpath=preceding::label[1]').first().textContent().catch(() => null);
          const label = (labelFor || labelNear || '').trim();
          const desc = [label, placeholder, name || id].filter(Boolean).slice(0, 2).join(' | ').slice(0, 80);
          lines.push(`- ${tag}${type ? `[${type}]` : ''}: ${desc || 'sin etiqueta'}`);
          if (lines.length >= 12) break;
        }
        if (lines.length >= 12) break;
      }
      return lines.length ? lines.join('\n') : 'No se detectaron campos de formulario visibles.';
    } catch {
      return 'No se pudo listar campos (error en descubrimiento).';
    }
  }

  private async extractAppointmentDetails(): Promise<{ date: Date; time: string }> {
    try {
      // Extract date and time from success page
      const pageContent = await this.page.textContent('body');

      let date = new Date();
      let time = '00:00';
      if (pageContent) {
        const timeMatch = pageContent.match(/(\d{1,2}:\d{2})/);
        if (timeMatch) time = timeMatch[1];
        const dateMatch = pageContent.match(/(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})/);
        if (dateMatch) {
          const [d, m, y] = dateMatch[1].split(/[\/\-]/).map(Number);
          const yyyy = y < 100 ? 2000 + y : y;
          date = new Date(yyyy, (m || 1) - 1, d || 1);
        }
      }
      return { date, time };

    } catch (error) {
      console.error('Error extracting appointment details:', error);
      return { date: new Date(), time: '00:00' };
    }
  }

  private async takeScreenshot(type: 'before' | 'after', clientId: string): Promise<string> {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `dni_habana_${type}_${clientId}_${timestamp}.png`;

    const buffer = await this.page.screenshot({ fullPage: true });
    return await this.storageManager.saveScreenshot(buffer, filename);
  }

  private async detectBlockingError(): Promise<boolean> {
    try {
      // URL-level hint
      const url = this.page.url();
      if (url.includes('error-cita.aspx')) return true;

      // Strong block indicators (cooldown-worthy)
      const strongBlock = /Bloqueo temporal|esperar\s+hasta\s+72\s+horas|el sistema bloquea|acaparamiento|abuso de los recursos|temporarily blocked|too many requests|rate limit/i;

      const scopes: (Page | Frame)[] = [this.page, ...this.page.frames()];
      for (const f of scopes) {
        const el = f.getByText(strongBlock).first();
        if (await el.isVisible().catch(() => false)) return true;
      }

      // Note: messages like "Inactividad" o genérico "Error en acceso" NO activan cooldown.
      return false;
    } catch {
      return false;
    }
  }
}
