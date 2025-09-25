import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

// Operators table - people who manage the bot and clients
export const operators = pgTable("operators", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  telegramUserId: varchar("telegram_user_id").notNull().unique(),
  name: text("name").notNull(),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
});

// Clients table - people who need appointments
export const clients = pgTable("clients", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email"),
  username: text("username").notNull(), // for citaconsular.es login
  password: text("password").notNull(), // for citaconsular.es login
  isActive: boolean("is_active").notNull().default(true),
  operatorId: varchar("operator_id").references(() => operators.id),
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
});

// Preferences table - client preferences for appointments
export const preferences = pgTable("preferences", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  clientId: varchar("client_id").notNull().references(() => clients.id).unique(),
  serviceType: text("service_type").notNull().default("dni_habana"), // "dni_habana", etc.
  preferredTimes: jsonb("preferred_times"), // ["morning", "afternoon", etc.]
  urgency: integer("urgency").notNull().default(1), // 1-5 priority
  notes: text("notes"),
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
});

// Appointments table - successful bookings
export const appointments = pgTable("appointments", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  clientId: varchar("client_id").notNull().references(() => clients.id),
  serviceType: text("service_type").notNull(),
  appointmentDate: timestamp("appointment_date").notNull(),
  appointmentTime: text("appointment_time").notNull(), // "09:30", etc.
  confirmationData: jsonb("confirmation_data"), // extracted data from success page
  screenshotBeforePath: text("screenshot_before_path"),
  screenshotAfterPath: text("screenshot_after_path"),
  status: text("status").notNull().default("confirmed"), // confirmed, cancelled, completed
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
});

// Queue table - pending appointment requests
export const queue = pgTable("queue", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  clientId: varchar("client_id").notNull().references(() => clients.id),
  status: text("status").notNull().default("pending"), // pending, processing, failed, completed
  attempts: integer("attempts").notNull().default(0),
  lastAttempt: timestamp("last_attempt"),
  nextAttempt: timestamp("next_attempt"),
  error: text("error"),
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
});

// Cooldowns table - IP/account blocking management
export const cooldowns = pgTable("cooldowns", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  type: text("type").notNull(), // "ip", "account"
  identifier: text("identifier").notNull(), // IP address or username
  reason: text("reason").notNull(), // "error-cita.aspx", "captcha_failed", etc.
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
});

// Captcha requests table - human intervention needed
export const captchaRequests = pgTable("captcha_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  clientId: varchar("client_id").notNull().references(() => clients.id),
  operatorId: varchar("operator_id").references(() => operators.id),
  screenshotPath: text("screenshot_path").notNull(),
  status: text("status").notNull().default("pending"), // pending, solved, failed
  solution: text("solution"),
  solvedAt: timestamp("solved_at"),
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
});

// Relations
export const operatorsRelations = relations(operators, ({ many }) => ({
  clients: many(clients),
  captchaRequests: many(captchaRequests),
}));

export const clientsRelations = relations(clients, ({ one, many }) => ({
  operator: one(operators, {
    fields: [clients.operatorId],
    references: [operators.id],
  }),
  preferences: many(preferences),
  appointments: many(appointments),
  queueItems: many(queue),
  captchaRequests: many(captchaRequests),
}));

export const preferencesRelations = relations(preferences, ({ one }) => ({
  client: one(clients, {
    fields: [preferences.clientId],
    references: [clients.id],
  }),
}));

export const appointmentsRelations = relations(appointments, ({ one }) => ({
  client: one(clients, {
    fields: [appointments.clientId],
    references: [clients.id],
  }),
}));

export const queueRelations = relations(queue, ({ one }) => ({
  client: one(clients, {
    fields: [queue.clientId],
    references: [clients.id],
  }),
}));

export const captchaRequestsRelations = relations(captchaRequests, ({ one }) => ({
  client: one(clients, {
    fields: [captchaRequests.clientId],
    references: [clients.id],
  }),
  operator: one(operators, {
    fields: [captchaRequests.operatorId],
    references: [operators.id],
  }),
}));

// Insert schemas
export const insertOperatorSchema = createInsertSchema(operators).omit({
  id: true,
  createdAt: true,
});

export const insertClientSchema = createInsertSchema(clients).omit({
  id: true,
  createdAt: true,
});

export const insertPreferencesSchema = createInsertSchema(preferences).omit({
  id: true,
  createdAt: true,
});

export const insertAppointmentSchema = createInsertSchema(appointments).omit({
  id: true,
  createdAt: true,
});

export const insertQueueSchema = createInsertSchema(queue).omit({
  id: true,
  createdAt: true,
  lastAttempt: true,
  nextAttempt: true,
});

export const insertCooldownSchema = createInsertSchema(cooldowns).omit({
  id: true,
  createdAt: true,
});

export const insertCaptchaRequestSchema = createInsertSchema(captchaRequests).omit({
  id: true,
  createdAt: true,
  solvedAt: true,
});

// Types
export type InsertOperator = z.infer<typeof insertOperatorSchema>;
export type Operator = typeof operators.$inferSelect;

export type InsertClient = z.infer<typeof insertClientSchema>;
export type Client = typeof clients.$inferSelect;

export type InsertPreferences = z.infer<typeof insertPreferencesSchema>;
export type Preferences = typeof preferences.$inferSelect;

export type InsertAppointment = z.infer<typeof insertAppointmentSchema>;
export type Appointment = typeof appointments.$inferSelect;

export type InsertQueue = z.infer<typeof insertQueueSchema>;
export type Queue = typeof queue.$inferSelect;

export type InsertCooldown = z.infer<typeof insertCooldownSchema>;
export type Cooldown = typeof cooldowns.$inferSelect;

export type InsertCaptchaRequest = z.infer<typeof insertCaptchaRequestSchema>;
export type CaptchaRequest = typeof captchaRequests.$inferSelect;

// Keep legacy user types for compatibility with existing template
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;