import type { Page } from 'playwright';
import type { Client, Preferences } from '../../../shared/schema.js';
import type { IStorage } from '../../../server/storage.js';
import type { BookingResult } from '../scheduler.js';
import { CaptchaManager } from '../anticaptcha.js';
import { StorageManager } from '../storage.js';
import { AntiBlockingManager } from '../antiBlock.js';
import { SELECTORS } from '../selectors.js';

export class DNIHabanaAdapter {
  private page: Page;
  private storage: IStorage;
  private captchaManager: CaptchaManager;
  private storageManager: StorageManager;

  // Official DNI appointment URL for Habana
  private readonly BASE_URL = 'https://www.citaconsular.es/es/hosteds/widgetdefault/2f21cd9c0d8aa26725bf8930e4691d645/bkt195382';

  constructor(
    page: Page, 
    storage: IStorage, 
    captchaManager: CaptchaManager, 
    storageManager: StorageManager
  ) {
    this.page = page;
    this.storage = storage;
    this.captchaManager = captchaManager;
    this.storageManager = storageManager;
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
    await AntiBlockingManager.waitHuman(2000, 3000);
  }

  private async handleWelcomeModal(): Promise<void> {
    try {
      // Look for welcome modal
      const modal = await this.page.$(SELECTORS.welcomeModal.container);
      if (modal && await modal.isVisible()) {
        console.log('Welcome modal detected, clicking continue...');
        
        // Click continue button
        const continueButton = await this.page.$(SELECTORS.welcomeModal.continueButton);
        if (continueButton) {
          await continueButton.click();
          await AntiBlockingManager.waitHuman(1000, 2000);
        }
      }
    } catch (error) {
      console.log('No welcome modal found or failed to handle:', error);
    }
  }

  private async selectFirstAvailableSlot(): Promise<boolean> {
    console.log('Looking for available appointment slots...');

    try {
      // Wait for slots to load
      await this.page.waitForSelector(SELECTORS.appointmentSlots.container, { 
        timeout: 15000 
      });

      // Look for available slots with "Huecos libres" text
      const availableSlots = await this.page.$$(SELECTORS.appointmentSlots.availableSlot);
      
      if (availableSlots.length === 0) {
        console.log('No available slots found');
        return false;
      }

      // Select the first available slot (first_available mode as requested)
      console.log(`Found ${availableSlots.length} available slots, selecting first one...`);
      const firstSlot = availableSlots[0];
      
      // Get slot time for logging
      const timeElement = await firstSlot.$(SELECTORS.appointmentSlots.slotTime);
      const slotTime = timeElement ? await timeElement.textContent() : 'Unknown';
      console.log(`Selecting slot at: ${slotTime}`);

      await firstSlot.click();
      await AntiBlockingManager.waitHuman(1500, 2500);

      return true;

    } catch (error) {
      console.error('Error selecting appointment slot:', error);
      return false;
    }
  }

  private async performLogin(client: Client): Promise<boolean> {
    console.log(`Performing login for client ${client.name}...`);

    try {
      // Wait for login form
      await this.page.waitForSelector(SELECTORS.loginForm.container, { timeout: 10000 });

      // Fill username
      const usernameField = await this.page.$(SELECTORS.loginForm.usernameField);
      if (usernameField) {
        await usernameField.fill(client.username);
        await AntiBlockingManager.waitHuman(500, 1000);
      }

      // Fill password
      const passwordField = await this.page.$(SELECTORS.loginForm.passwordField);
      if (passwordField) {
        await passwordField.fill(client.password);
        await AntiBlockingManager.waitHuman(500, 1000);
      }

      // Check for captcha before submitting
      const captchaSolution = await this.captchaManager.handleCaptcha(this.page, client);
      if (captchaSolution) {
        await this.captchaManager.submitSolution(this.page, captchaSolution);
      }

      // Submit form
      const submitButton = await this.page.$(SELECTORS.loginForm.submitButton);
      if (submitButton) {
        await submitButton.click();
        await AntiBlockingManager.waitHuman(2000, 4000);
      }

      // Check for login errors
      const errorElement = await this.page.$(SELECTORS.loginForm.errorMessage);
      if (errorElement && await errorElement.isVisible()) {
        const errorText = await errorElement.textContent();
        throw new Error(`Login error: ${errorText}`);
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
      
      // Wait for success page indicators
      await this.page.waitForSelector(SELECTORS.successPage.successMessage, { 
        timeout: 15000 
      });

      // Extract confirmation details
      const confirmationData: any = {};

      // Try to extract all available confirmation details
      const detailsContainer = await this.page.$(SELECTORS.successPage.confirmationDetails);
      if (detailsContainer) {
        confirmationData.rawHtml = await detailsContainer.innerHTML();
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
      const pageContent = await this.page.content();
      
      // Look for date patterns (this would need refinement based on actual page structure)
      const dateMatch = pageContent.match(/(\d{1,2}\/\d{1,2}\/\d{4})/);
      const timeMatch = pageContent.match(/(\d{1,2}:\d{2})/);

      const date = dateMatch ? new Date(dateMatch[1]) : new Date();
      const time = timeMatch ? timeMatch[1] : '00:00';

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

      const errorElement = await this.page.$(SELECTORS.errorPage.errorMessage);
      return errorElement && await errorElement.isVisible();

    } catch (error) {
      return false;
    }
  }
}