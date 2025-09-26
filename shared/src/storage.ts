import { and, desc, eq, gt } from 'drizzle-orm';
import type * as Schema from './schema.js';
import type { drizzle } from 'drizzle-orm/neon-serverless';
import {
  appointments,
  captchaRequests,
  clients,
  cooldowns,
  operators,
  preferences,
  queue,
  type Appointment,
  type CaptchaRequest,
  type Client,
  type Cooldown,
  type InsertAppointment,
  type InsertCaptchaRequest,
  type InsertClient,
  type InsertCooldown,
  type InsertOperator,
  type InsertPreferences,
  type InsertQueue,
  type Operator,
  type Preferences,
  type Queue,
} from './schema.js';

type Database = any;

type QueueUpdate = Partial<InsertQueue> & Partial<Pick<Queue, 'lastAttempt' | 'nextAttempt'>>;
type CaptchaRequestUpdate = Partial<InsertCaptchaRequest> & Partial<Pick<CaptchaRequest, 'solvedAt'>>;
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
  updateQueueItem(id: string, updates: Partial<Queue>): Promise<Queue | undefined>;

  getRecentAppointments(limit?: number): Promise<Appointment[]>;
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;

  getPendingCaptchaRequests(): Promise<CaptchaRequest[]>;
  createCaptchaRequest(request: InsertCaptchaRequest): Promise<CaptchaRequest>;
  updateCaptchaRequest(id: string, updates: CaptchaRequestUpdate): Promise<CaptchaRequest | undefined>;

  getActiveCooldowns(): Promise<Cooldown[]>;
  createCooldown(cooldown: InsertCooldown): Promise<Cooldown>;
  isInCooldown(type: string, identifier: string): Promise<boolean>;

  getClientPreferences(clientId: string): Promise<Preferences | undefined>;
  createOrUpdatePreferences(preferences: InsertPreferences): Promise<Preferences>;
}

export class DatabaseStorage implements IStorage {
  constructor(private readonly db: Database) {}

  async getOperator(id: string): Promise<Operator | undefined> {
    const [operator] = await this.db.select().from(operators).where(eq(operators.id, id));
    return operator || undefined;
  }

  async getOperatorByTelegramId(telegramUserId: string): Promise<Operator | undefined> {
    const [operator] = await this.db.select().from(operators).where(eq(operators.telegramUserId, telegramUserId));
    return operator || undefined;
  }

  async createOperator(insertOperator: InsertOperator): Promise<Operator> {
    const [operator] = await this.db.insert(operators).values(insertOperator).returning();
    return operator;
  }

  async getActiveOperators(): Promise<Operator[]> {
    return this.db.select().from(operators).where(eq(operators.isActive, true)).orderBy(desc(operators.createdAt));
  }

  async updateOperator(id: string, updates: Partial<InsertOperator>): Promise<Operator | undefined> {
    const [operator] = await this.db.update(operators).set(updates).where(eq(operators.id, id)).returning();
    return operator || undefined;
  }

  async getClient(id: string): Promise<Client | undefined> {
    const [client] = await this.db.select().from(clients).where(eq(clients.id, id));
    return client || undefined;
  }

  async getActiveClients(): Promise<Client[]> {
    return this.db.select().from(clients).where(eq(clients.isActive, true)).orderBy(desc(clients.createdAt));
  }

  async createClient(insertClient: InsertClient): Promise<Client> {
    const [client] = await this.db.insert(clients).values(insertClient).returning();
    return client;
  }

  async updateClient(id: string, updates: Partial<InsertClient>): Promise<Client | undefined> {
    const [client] = await this.db.update(clients).set(updates).where(eq(clients.id, id)).returning();
    return client || undefined;
  }

  async getQueueItems(): Promise<Queue[]> {
    return this.db.select().from(queue).orderBy(desc(queue.createdAt));
  }

  async getPendingQueueItems(): Promise<Queue[]> {
    return this.db.select().from(queue).where(eq(queue.status, 'pending')).orderBy(desc(queue.createdAt));
  }

  async createQueueItem(queueItem: InsertQueue): Promise<Queue> {
    const [created] = await this.db.insert(queue).values(queueItem).returning();
    return created;
  }

  async updateQueueItem(id: string, updates: QueueUpdate): Promise<Queue | undefined> {
    const [queueItem] = await this.db.update(queue).set(updates).where(eq(queue.id, id)).returning();
    return queueItem || undefined;
  }

  async getRecentAppointments(limit: number = 50): Promise<Appointment[]> {
    return this.db.select().from(appointments).orderBy(desc(appointments.createdAt)).limit(limit);
  }

  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    const [appointment] = await this.db.insert(appointments).values(insertAppointment).returning();
    return appointment;
  }

  async getPendingCaptchaRequests(): Promise<CaptchaRequest[]> {
    return this.db.select().from(captchaRequests).where(eq(captchaRequests.status, 'pending')).orderBy(desc(captchaRequests.createdAt));
  }

  async createCaptchaRequest(insertRequest: InsertCaptchaRequest): Promise<CaptchaRequest> {
    const [request] = await this.db.insert(captchaRequests).values(insertRequest).returning();
    return request;
  }

  async updateCaptchaRequest(id: string, updates: CaptchaRequestUpdate): Promise<CaptchaRequest | undefined> {
    const [request] = await this.db.update(captchaRequests).set(updates).where(eq(captchaRequests.id, id)).returning();
    return request || undefined;
  }

  async getActiveCooldowns(): Promise<Cooldown[]> {
    const now = new Date();
    return this.db.select().from(cooldowns).where(gt(cooldowns.expiresAt, now)).orderBy(desc(cooldowns.createdAt));
  }

  async createCooldown(insertCooldown: InsertCooldown): Promise<Cooldown> {
    const [cooldown] = await this.db.insert(cooldowns).values(insertCooldown).returning();
    return cooldown;
  }

  async isInCooldown(type: string, identifier: string): Promise<boolean> {
    const now = new Date();
    const [cooldown] = await this.db.select().from(cooldowns).where(and(eq(cooldowns.type, type), eq(cooldowns.identifier, identifier), gt(cooldowns.expiresAt, now))).limit(1);
    return !!cooldown;
  }

  async getClientPreferences(clientId: string): Promise<Preferences | undefined> {
    const [prefs] = await this.db.select().from(preferences).where(eq(preferences.clientId, clientId));
    return prefs || undefined;
  }

  async createOrUpdatePreferences(insertPrefs: InsertPreferences): Promise<Preferences> {
    const existing = await this.getClientPreferences(insertPrefs.clientId);
    if (existing) {
      const [updated] = await this.db.update(preferences).set(insertPrefs).where(eq(preferences.clientId, insertPrefs.clientId)).returning();
      return updated;
    }
    const [created] = await this.db.insert(preferences).values(insertPrefs).returning();
    return created;
  }
}

export const createDatabaseStorage = (db: Database) => new DatabaseStorage(db);
