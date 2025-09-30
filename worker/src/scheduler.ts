import { chromium, Browser, BrowserContext, Page } from 'playwright';
import type { IStorage } from '@repo/shared';
import type { Queue, Client, Preferences } from '@repo/shared';
import { DNIHabanaAdapter } from './adapters/dni_habana.js';
import { AntiBlockingManager, CooldownReason } from './antiBlock.js';
import { CaptchaManager } from './anticaptcha.js';
import { StorageManager } from './storage.js';
import { NotificationManager } from './notify.js';

export class AppointmentScheduler {
  private browser: Browser | null = null;
  private storage: IStorage;
  private antiBlock: AntiBlockingManager;
  private captchaManager: CaptchaManager;
  private storageManager: StorageManager;
  private notificationManager: NotificationManager;
  private isProcessing = false;

  constructor(storage: IStorage) {
    this.storage = storage;
    this.antiBlock = new AntiBlockingManager(storage);
    this.notificationManager = new NotificationManager();
    this.captchaManager = new CaptchaManager(storage, this.notificationManager);
    this.storageManager = new StorageManager();
  }

  async processQueue(): Promise<void> {
    if (this.isProcessing) {
      console.log('Queue processing already in progress, skipping...');
      return;
    }

    this.isProcessing = true;

    try {
      const pendingItems = await this.storage.getPendingQueueItems();
      
      if (pendingItems.length === 0) {
        console.log('No pending queue items found');
        return;
      }

      console.log(`Processing ${pendingItems.length} queue items...`);

      // Process items one by one to avoid blocking
      for (const queueItem of pendingItems) {
        try {
          await this.processQueueItem(queueItem);
          
          // Add delay between clients (human-like behavior)
          const delay = 30000 + Math.random() * 60000; // 30-90 seconds
          console.log(`Waiting ${Math.round(delay/1000)}s before next client...`);
          await new Promise(resolve => setTimeout(resolve, delay));
          
        } catch (error) {
          console.error(`Error processing queue item ${queueItem.id}:`, error);
          
          // Update queue item with error
          await this.storage.updateQueueItem(queueItem.id, {
            status: 'failed',
            attempts: queueItem.attempts + 1,
            lastAttempt: new Date(),
            error: error instanceof Error ? error.message : 'Unknown error'
          });

          // Continue with next item (don't block the entire queue)
          continue;
        }
      }

    } finally {
      this.isProcessing = false;
      
      // Cleanup browser if still open
      if (this.browser) {
        await this.browser.close();
        this.browser = null;
      }
    }
  }

  private async processQueueItem(queueItem: Queue): Promise<void> {
    console.log(`Processing queue item ${queueItem.id} for client ${queueItem.clientId}`);

    // Get client and preferences
    const client = await this.storage.getClient(queueItem.clientId);
    if (!client) {
      throw new Error('Client not found');
    }

    const preferences = await this.storage.getClientPreferences(queueItem.clientId);
    
    // Check if client/IP is in cooldown
    const isClientCooldown = await this.antiBlock.isInCooldown('account', client.username);
    if (isClientCooldown) {
      console.log(`Client ${client.name} is in cooldown, skipping...`);
      return;
    }

    // Update queue status to processing
    await this.storage.updateQueueItem(queueItem.id, {
      status: 'processing',
      lastAttempt: new Date()
    });

    try {
      // Initialize browser if needed
      if (!this.browser) {
        this.browser = await chromium.launch({ 
          headless: true,
          args: [
            '--no-sandbox',
            '--disable-dev-shm-usage',
            '--disable-blink-features=AutomationControlled',
            '--disable-web-security'
          ]
        });
      }

      const context = await this.browser.newContext({
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      });

      const page = await context.newPage();

      // Use appropriate adapter based on service type
      const serviceType = preferences?.serviceType || 'dni_habana';
      let adapter;

      switch (serviceType) {
        case 'dni_habana':
        default:
          adapter = new DNIHabanaAdapter(page, this.storage, this.captchaManager, this.storageManager, this.notificationManager);
          break;
      }

      // Execute booking process
      const result = await adapter.processBooking(client, preferences);

      if (result.success) {
        // Create appointment record
        await this.storage.createAppointment({
          clientId: client.id,
          serviceType: serviceType,
          appointmentDate: result.appointmentDate!,
          appointmentTime: result.appointmentTime!,
          confirmationData: result.confirmationData,
          screenshotBeforePath: result.screenshotBeforePath,
          screenshotAfterPath: result.screenshotAfterPath,
          status: 'confirmed'
        });

        // Update queue item as completed
        await this.storage.updateQueueItem(queueItem.id, {
          status: 'completed',
          lastAttempt: new Date()
        });

        // Send notification
        await this.notificationManager.sendBookingSuccess(client, result);

        console.log(`✅ Appointment booked successfully for ${client.name}`);
      } else {
        // Handle different failure scenarios
        if (result.error?.includes('error-cita.aspx') || result.error?.includes('blocked')) {
          // Account/IP blocked - add to cooldown
          await this.antiBlock.addCooldown('account', client.username, CooldownReason.SYSTEM_BLOCK);
          console.log(`❄️ Added cooldown for client ${client.name}: ${result.error}`);
        }

        // Update queue item with failure
        await this.storage.updateQueueItem(queueItem.id, {
          status: 'failed',
          attempts: queueItem.attempts + 1,
          lastAttempt: new Date(),
          error: result.error
        });

        console.log(`❌ Booking failed for ${client.name}: ${result.error}`);
      }

      await context.close();

    } catch (error) {
      console.error(`Error during booking process for ${client.name}:`, error);
      throw error;
    }
  }

  async cleanupExpiredCooldowns(): Promise<void> {
    try {
      const cooldowns = await this.storage.getActiveCooldowns();
      const now = new Date();
      
      const expiredCount = cooldowns.filter(c => c.expiresAt <= now).length;
      if (expiredCount > 0) {
        console.log(`Cleaned up ${expiredCount} expired cooldowns`);
      }
    } catch (error) {
      console.error('Error cleaning up cooldowns:', error);
    }
  }

  async shutdown(): Promise<void> {
    console.log('Shutting down scheduler...');
    
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
    }
  }
}

export interface BookingResult {
  success: boolean;
  error?: string;
  appointmentDate?: Date;
  appointmentTime?: string;
  confirmationData?: any;
  screenshotBeforePath?: string;
  screenshotAfterPath?: string;
}
