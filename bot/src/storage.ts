import {
  operators,
  clients,
  appointments,
  queue,
  preferences,
  captchaRequests,
  cooldowns,
  type Operator,
  type Client,
  type Appointment,
  type Queue,
  type Preferences,
  type CaptchaRequest,
  type Cooldown,
  type InsertOperator,
  type InsertClient,
  type InsertAppointment,
  type InsertQueue,
  type InsertPreferences,
  type InsertCaptchaRequest,
  type InsertCooldown
} from "../../shared/schema.js";
import { db } from "./db.js";
import { eq, desc, and, gt } from "drizzle-orm";

// Database-backed storage implementation reused by the Telegram bot.
export interface IStorage {
  getOperator(id: string): Promise<Operator | undefined>;
  getOperatorByTelegramId(telegramUserId: string): Promise<Operator | undefined>;
  getActiveOperators(): Promise<Operator[]>;
  createOperator(operator: InsertOperator): Promise<Operator>;
  updateOperator(id: string, updates: Partial<InsertOperator>): Promise<Operator | undefined>;

  getClient(id: string): Promise<Client | undefined>;
  getActiveClients(): Promise<Client[]>;
  createClient(client: InsertClient): Promise<Client>;
  updateClient(id: string, updates: Partial<InsertClient>): Promise<Client | undefined>;

  getQueueItems(): Promise<Queue[]>;
  getPendingQueueItems(): Promise<Queue[]>;
  createQueueItem(queueItem: InsertQueue): Promise<Queue>;
  updateQueueItem(id: string, updates: Partial<InsertQueue>): Promise<Queue | undefined>;

  getRecentAppointments(limit?: number): Promise<Appointment[]>;
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;

  getPendingCaptchaRequests(): Promise<CaptchaRequest[]>;
  createCaptchaRequest(request: InsertCaptchaRequest): Promise<CaptchaRequest>;
  updateCaptchaRequest(id: string, updates: Partial<InsertCaptchaRequest> & { solvedAt?: Date | null }): Promise<CaptchaRequest | undefined>;

  getActiveCooldowns(): Promise<Cooldown[]>;
  createCooldown(cooldown: InsertCooldown): Promise<Cooldown>;
  isInCooldown(type: string, identifier: string): Promise<boolean>;

  getClientPreferences(clientId: string): Promise<Preferences | undefined>;
  createOrUpdatePreferences(preferences: InsertPreferences): Promise<Preferences>;
}

export class DatabaseStorage implements IStorage {
  async getOperator(id: string): Promise<Operator | undefined> {
    const [operator] = await db.select().from(operators).where(eq(operators.id, id));
    return operator || undefined;
  }

  async getOperatorByTelegramId(telegramUserId: string): Promise<Operator | undefined> {
    const [operator] = await db.select().from(operators).where(eq(operators.telegramUserId, telegramUserId));
    return operator || undefined;
  }

  async getActiveOperators(): Promise<Operator[]> {
    return await db.select().from(operators).where(eq(operators.isActive, true)).orderBy(desc(operators.createdAt));
  }

  async createOperator(insertOperator: InsertOperator): Promise<Operator> {
    const [operator] = await db.insert(operators).values(insertOperator).returning();
    return operator;
  }

  async updateOperator(id: string, updates: Partial<InsertOperator>): Promise<Operator | undefined> {
    const [operator] = await db.update(operators).set(updates).where(eq(operators.id, id)).returning();
    return operator || undefined;
  }

  async getClient(id: string): Promise<Client | undefined> {
    const [client] = await db.select().from(clients).where(eq(clients.id, id));
    return client || undefined;
  }

  async getActiveClients(): Promise<Client[]> {
    return await db.select().from(clients).where(eq(clients.isActive, true)).orderBy(desc(clients.createdAt));
  }

  async createClient(insertClient: InsertClient): Promise<Client> {
    const [client] = await db.insert(clients).values(insertClient).returning();
    return client;
  }

  async updateClient(id: string, updates: Partial<InsertClient>): Promise<Client | undefined> {
    const [client] = await db.update(clients).set(updates).where(eq(clients.id, id)).returning();
    return client || undefined;
  }

  async getQueueItems(): Promise<Queue[]> {
    return await db.select().from(queue).orderBy(desc(queue.createdAt));
  }

  async getPendingQueueItems(): Promise<Queue[]> {
    return await db.select().from(queue)
      .where(eq(queue.status, "pending"))
      .orderBy(desc(queue.createdAt));
  }

  async createQueueItem(insertQueue: InsertQueue): Promise<Queue> {
    const [queueItem] = await db.insert(queue).values(insertQueue).returning();
    return queueItem;
  }

  async updateQueueItem(id: string, updates: Partial<InsertQueue>): Promise<Queue | undefined> {
    const [queueItem] = await db.update(queue).set(updates).where(eq(queue.id, id)).returning();
    return queueItem || undefined;
  }

  async getRecentAppointments(limit: number = 50): Promise<Appointment[]> {
    return await db.select().from(appointments)
      .orderBy(desc(appointments.createdAt))
      .limit(limit);
  }

  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    const [appointment] = await db.insert(appointments).values(insertAppointment).returning();
    return appointment;
  }

  async getPendingCaptchaRequests(): Promise<CaptchaRequest[]> {
    return await db.select().from(captchaRequests)
      .where(eq(captchaRequests.status, "pending"))
      .orderBy(desc(captchaRequests.createdAt));
  }

  async createCaptchaRequest(insertRequest: InsertCaptchaRequest): Promise<CaptchaRequest> {
    const [request] = await db.insert(captchaRequests).values(insertRequest).returning();
    return request;
  }

  async updateCaptchaRequest(id: string, updates: Partial<InsertCaptchaRequest> & { solvedAt?: Date | null }): Promise<CaptchaRequest | undefined> {
    const [request] = await db.update(captchaRequests).set(updates).where(eq(captchaRequests.id, id)).returning();
    return request || undefined;
  }

  async getActiveCooldowns(): Promise<Cooldown[]> {
    const now = new Date();
    return await db.select().from(cooldowns)
      .where(gt(cooldowns.expiresAt, now))
      .orderBy(desc(cooldowns.createdAt));
  }

  async createCooldown(insertCooldown: InsertCooldown): Promise<Cooldown> {
    const [cooldown] = await db.insert(cooldowns).values(insertCooldown).returning();
    return cooldown;
  }

  async isInCooldown(type: string, identifier: string): Promise<boolean> {
    const now = new Date();
    const [cooldown] = await db.select().from(cooldowns)
      .where(
        and(
          eq(cooldowns.type, type),
          eq(cooldowns.identifier, identifier),
          gt(cooldowns.expiresAt, now)
        )
      )
      .limit(1);
    return !!cooldown;
  }

  async getClientPreferences(clientId: string): Promise<Preferences | undefined> {
    const [prefs] = await db.select().from(preferences).where(eq(preferences.clientId, clientId));
    return prefs || undefined;
  }

  async createOrUpdatePreferences(insertPrefs: InsertPreferences): Promise<Preferences> {
    const existing = await this.getClientPreferences(insertPrefs.clientId);
    if (existing) {
      const [updated] = await db.update(preferences)
        .set(insertPrefs)
        .where(eq(preferences.clientId, insertPrefs.clientId))
        .returning();
      return updated;
    } else {
      const [created] = await db.insert(preferences).values(insertPrefs).returning();
      return created;
    }
  }
}

export const storage = new DatabaseStorage();
