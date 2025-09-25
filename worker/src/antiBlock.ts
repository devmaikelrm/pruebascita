import type { IStorage } from '../../server/storage.js';

export class AntiBlockingManager {
  private storage: IStorage;

  constructor(storage: IStorage) {
    this.storage = storage;
  }

  /**
   * Check if account or IP is in cooldown
   */
  async isInCooldown(type: 'account' | 'ip', identifier: string): Promise<boolean> {
    return await this.storage.isInCooldown(type, identifier);
  }

  /**
   * Add cooldown for account or IP when blocked
   */
  async addCooldown(type: 'account' | 'ip', identifier: string, reason: string): Promise<void> {
    const cooldownDuration = this.getCooldownDuration(reason);
    const expiresAt = new Date(Date.now() + cooldownDuration);

    await this.storage.createCooldown({
      type,
      identifier,
      reason,
      expiresAt
    });

    console.log(`Added ${type} cooldown for ${identifier}: ${reason} (expires at ${expiresAt.toISOString()})`);
  }

  /**
   * Get cooldown duration based on error type
   */
  private getCooldownDuration(reason: string): number {
    // Different cooldown periods based on error type
    if (reason.includes('error-cita.aspx')) {
      // System blocking - longer cooldown (2-4 hours)
      return (2 + Math.random() * 2) * 60 * 60 * 1000;
    }
    
    if (reason.includes('captcha')) {
      // Captcha failure - shorter cooldown (30-60 minutes)  
      return (30 + Math.random() * 30) * 60 * 1000;
    }

    if (reason.includes('rate limit')) {
      // Rate limiting - medium cooldown (1-2 hours)
      return (60 + Math.random() * 60) * 60 * 1000;
    }

    // Default cooldown (1 hour)
    return 60 * 60 * 1000;
  }

  /**
   * Generate human-like delay between actions
   */
  static getHumanDelay(base: number = 1000, variance: number = 2000): number {
    return base + Math.random() * variance;
  }

  /**
   * Wait with human-like delay
   */
  static async waitHuman(base: number = 1000, variance: number = 2000): Promise<void> {
    const delay = this.getHumanDelay(base, variance);
    await new Promise(resolve => setTimeout(resolve, delay));
  }
}