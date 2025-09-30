import type { Page, Frame } from 'playwright';
import type { Client, Preferences } from '@repo/shared';
import type { IStorage } from '@repo/shared';
import type { BookingResult } from '../scheduler.js';
import { AntiBlockingManager } from '../antiBlock.js';
import { CaptchaManager } from '../anticaptcha.js';
import { StorageManager } from '../storage.js';
import { waitHuman } from '../utils.js';
import { NotificationManager } from '../notify.js';

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
          error: 'Account blocked - error-cita.aspx detected'
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
      // Try in main and all iframes
      const frames: (Page|Frame)[] = [this.page, ...this.page.frames()];
      for (const f of frames) {
        const btn = f.getByRole('button', { name: /aceptar|accept|continuar|continue|ok/i });
        if (await btn.first().isVisible().catch(() => false)) {
          console.log('Welcome/consent detected, clicking continue...');
          await btn.first().click();
          await waitHuman(800, 1600);
          break;
        }
      }
    } catch (error) {
      console.log('No welcome modal found or failed to handle:', error);
    }
  }

  private async selectFirstAvailableSlot(): Promise<boolean> {
    console.log('Looking for available appointment slots...');

    try {
      // Quick detection of "No availability"
      const noAvail = this.page.getByText(/no hay (citas|disponibilidad|huecos)|no slots|no availability/i);
      if (await noAvail.first().isVisible().catch(() => false)) {
        console.log('No available slots message visible');
        return false;
      }

      // Generic time block pattern (HH:MM) and clickable
      const candidates = this.page.locator('text=/^([0-2]?\\d:[0-5]\\d)$/');
      const count = await candidates.count();
      if (count === 0) {
        console.log('No time blocks found');
        return false;
      }
      const first = candidates.first();
      const text = await first.textContent();
      console.log(`Selecting first visible slot: ${text ?? 'desconocido'}`);
      await first.click();
      await waitHuman(1200, 1800);
      return true;

    } catch (error) {
      console.error('Error selecting appointment slot:', error);
      return false;
    }
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
      // Check for error-cita.aspx or blocking indicators
      const url = this.page.url();
      if (url.includes('error-cita.aspx')) {
        return true;
      }

      const blocked = this.page.getByText(/bloquead|error de sistema|system error|blocked/i);
      return await blocked.first().isVisible().catch(() => false);

    } catch (error) {
      return false;
    }
  }
}
