import type { IStorage } from '@repo/shared';
import { waitHuman } from './utils.js';

export enum CooldownReason {
  SYSTEM_BLOCK = 'error-cita.aspx',
  CAPTCHA_FAILURE = 'captcha',
  RATE_LIMIT = 'rate limit',
  DEFAULT = 'default',
}

// Interfaz para llevar un registro de los reintentos
interface RetryState {
  attempts: number;
  lastAttempt: Date;
}

export class AntiBlockingManager {
  private storage: IStorage;
  // Mapa para guardar el estado de los reintentos en memoria
  private retryStates: Map<string, RetryState> = new Map();

  constructor(storage: IStorage) {
    this.storage = storage;
  }

  /**
   * Decide qué hacer ante un fallo: reintentar o iniciar un cooldown.
   * Esta función se convierte en el cerebro del anti-bloqueo.
   */
  async handleFailure(type: 'account' | 'ip', identifier: string, reason: CooldownReason): Promise<boolean> {
    const maxRetries = this.getMaxRetries(reason);
    const currentState = this.retryStates.get(identifier) || { attempts: 0, lastAttempt: new Date() };

    if (currentState.attempts < maxRetries) {
      // Si aún podemos reintentar, incrementamos el contador y esperamos un poco.
      currentState.attempts++;
      currentState.lastAttempt = new Date();
      this.retryStates.set(identifier, currentState);
      
      console.log(`[AntiBlock] Fallo (${reason}) para ${identifier}. Reintento ${currentState.attempts}/${maxRetries}.`);
      await waitHuman(2000, 3000); // Espera corta antes de reintentar
      return true; // `true` significa que se debe reintentar la operación
    } else {
      // Si ya no hay más reintentos, iniciamos el cooldown y reseteamos el estado.
      console.log(`[AntiBlock] Límite de reintentos alcanzado para ${identifier}. Iniciando cooldown.`);
      await this.addCooldown(type, identifier, reason);
      this.retryStates.delete(identifier);
      return false; // `false` significa que no se debe reintentar
    }
  }

  /**
   * Obtiene el número máximo de reintentos según la razón del fallo.
   */
  private getMaxRetries(reason: CooldownReason): number {
    switch (reason) {
      case CooldownReason.CAPTCHA_FAILURE:
        return 3; // Permitimos 3 reintentos para fallos de captcha
      case CooldownReason.RATE_LIMIT:
        return 1; // Para rate limit, quizás solo 1 reintento
      default:
        return 0; // Para bloqueos del sistema, 0 reintentos, cooldown directo
    }
  }

  // --- El resto de tus funciones actuales ---

  async isInCooldown(type: 'account' | 'ip', identifier: string): Promise<boolean> {
    // Limpiamos estados de reintentos si la cuenta ya está en cooldown por otra razón
    const inCooldown = await this.storage.isInCooldown(type, identifier);
    if (inCooldown) {
      this.retryStates.delete(identifier);
    }
    return inCooldown;
  }

  async addCooldown(type: 'account' | 'ip', identifier: string, reason: CooldownReason): Promise<void> {
    const cooldownDuration = this.getCooldownDuration(reason);
    const expiresAt = new Date(Date.now() + cooldownDuration);

    await this.storage.createCooldown({
      type,
      identifier,
      reason: reason.toString(),
      expiresAt
    });

    console.log(`[AntiBlock] Cooldown añadido para ${identifier}: ${reason} (expira en ${Math.round(cooldownDuration / 60000)} min)`);
  }
  
  private getCooldownDuration(reason: CooldownReason): number {
    // (Esta función se mantiene como la tenías, totalmente configurable)
    const getEnvNumber = (key: string, defaultValue: number) => Number(process.env[key] || defaultValue);
    const jitterPercentage = getEnvNumber('COOLDOWN_JITTER_PERCENTAGE', 0.5);
    const calculateCooldown = (baseMinutes: number) => {
      const jitter = baseMinutes * jitterPercentage;
      return (baseMinutes + Math.random() * jitter) * 60 * 1000;
    };
  
    switch (reason) {
      case CooldownReason.SYSTEM_BLOCK:
        const baseHours = getEnvNumber('COOLDOWN_HOURS_SYSTEM_BLOCK', 2);
        return calculateCooldown(baseHours * 60);
      case CooldownReason.CAPTCHA_FAILURE:
        const baseMinutesCaptcha = getEnvNumber('COOLDOWN_MINUTES_CAPTCHA', 30);
        return calculateCooldown(baseMinutesCaptcha);
      case CooldownReason.RATE_LIMIT:
        const baseMinutesRateLimit = getEnvNumber('COOLDOWN_MINUTES_RATE_LIMIT', 60);
        return calculateCooldown(baseMinutesRateLimit);
      default:
        const baseMinutesDefault = getEnvNumber('COOLDOWN_MINUTES_DEFAULT', 60);
        return calculateCooldown(baseMinutesDefault);
    }
  }
}