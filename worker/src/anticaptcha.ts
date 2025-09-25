import type { Page } from 'playwright';
import type { IStorage } from '../../server/storage.js';
import type { Client } from '../../shared/schema.js';

export class CaptchaManager {
  private storage: IStorage;

  constructor(storage: IStorage) {
    this.storage = storage;
  }

  /**
   * Handle captcha detection and resolution
   */
  async handleCaptcha(page: Page, client: Client): Promise<string | null> {
    try {
      // Check if captcha is present
      const captchaPresent = await this.detectCaptcha(page);
      if (!captchaPresent) {
        return null; // No captcha needed
      }

      console.log(`Captcha detected for client ${client.name}, initiating HIL process...`);

      // Take screenshot of captcha
      const screenshotPath = await this.captureScreenshot(page, client.id);

      // Create captcha request in database (Human-in-the-Loop)
      const captchaRequest = await this.storage.createCaptchaRequest({
        clientId: client.id,
        screenshotPath,
        status: 'pending'
      });

      console.log(`Captcha request created: ${captchaRequest.id}, waiting for operator...`);

      // Wait for human operator to solve via Telegram bot
      const solution = await this.waitForSolution(captchaRequest.id);

      if (solution) {
        console.log(`Captcha solution received: ${solution}`);
        return solution;
      } else {
        throw new Error('Captcha solution timeout or failed');
      }

    } catch (error) {
      console.error('Captcha handling failed:', error);
      throw error;
    }
  }

  /**
   * Detect if captcha is present on the page
   */
  private async detectCaptcha(page: Page): Promise<boolean> {
    try {
      // Look for common captcha indicators
      const captchaSelectors = [
        '.captcha',
        '.g-recaptcha', 
        '.recaptcha',
        'img[src*="captcha"]',
        '[id*="captcha"]',
        '[class*="captcha"]',
        '.cf-challenge-form', // Cloudflare
        '#challenge-form'
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

  /**
   * Capture screenshot for human verification
   */
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

  /**
   * Wait for human operator to provide captcha solution
   */
  private async waitForSolution(captchaRequestId: string, timeoutMs: number = 300000): Promise<string | null> {
    const startTime = Date.now();
    const checkInterval = 2000; // Check every 2 seconds

    while (Date.now() - startTime < timeoutMs) {
      try {
        // Check if captcha request has been solved
        const request = await this.storage.getClient(captchaRequestId); // This should be a getCaptchaRequest method
        // Note: We need to add getCaptchaRequest method to storage interface
        
        // For now, simulate checking - this would need proper implementation
        // when storage interface is extended with captcha request methods
        
        await new Promise(resolve => setTimeout(resolve, checkInterval));
        
        // TODO: Implement proper checking when storage interface is complete
        // if (request && request.status === 'solved' && request.solution) {
        //   return request.solution;
        // }

      } catch (error) {
        console.error('Error checking captcha solution:', error);
      }
    }

    console.log('Captcha solution timeout reached');
    return null;
  }

  /**
   * Submit captcha solution to the page
   */
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