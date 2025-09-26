// shared/schema.ts — Drizzle ORM schema (ESM, TypeScript)
// Mantiene paridad con los enums/tablas del SQL.

import { pgEnum, pgTable, uuid, text, timestamp, boolean, jsonb, bigserial, bigint, uniqueIndex, index } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Enums
export const serviceTypeEnum = pgEnum('service_type', ['dni', 'turismo', 'notaria', 'legalizacion']);
export const bookingStatusEnum = pgEnum('booking_status', ['BOOKED', 'NO_SLOTS', 'ERROR']);
export const blockReasonEnum = pgEnum('block_reason', ['CAPTCHA', 'HTTP_403', 'HTTP_429', 'UNKNOWN']);

// usuarios
export const usuarios = pgTable('usuarios', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: text('email').unique(),
  displayName: text('display_name'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});

// clientes
export const clientes = pgTable('clientes', {
  id: uuid('id').primaryKey().defaultRandom(),
  usuarioId: uuid('usuario_id').references(() => usuarios.id, { onDelete: 'set null' }),
  name: text('name').notNull(),
  siteUrl: text('site_url').notNull(),
  username: text('username').notNull(),
  password: text('password').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
}, (t) => ({
  idxUsuarioId: index('idx_clientes_usuario_id').on(t.usuarioId),
}));

// servicios
export const servicios = pgTable('servicios', {
  id: uuid('id').primaryKey().defaultRandom(),
  clienteId: uuid('cliente_id').references(() => clientes.id, { onDelete: 'cascade' }),
  type: serviceTypeEnum('type').notNull(),
  enabled: boolean('enabled').notNull().default(true),
  notes: text('notes'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
}, (t) => ({
  uqClienteTipo: uniqueIndex('uq_servicios_cliente_tipo').on(t.clienteId, t.type),
}));

// reservas (bigserial PK)
export const reservas = pgTable('reservas', {
  id: bigserial('id', { mode: 'number' }).primaryKey(),
  clienteId: uuid('cliente_id').references(() => clientes.id, { onDelete: 'set null' }),
  servicioId: uuid('servicio_id').references(() => servicios.id, { onDelete: 'set null' }),
  serviceType: serviceTypeEnum('service_type').notNull(),
  portalRef: text('portal_ref'),
  reservedFor: timestamp('reserved_for', { withTimezone: true }),
  screenshotPath: text('screenshot_path'),
  meta: jsonb('meta'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
}, (t) => ({
  idxCliente: index('idx_reservas_cliente_id').on(t.clienteId),
  idxServicio: index('idx_reservas_servicio_id').on(t.servicioId),
  idxServiceType: index('idx_reservas_service_type').on(t.serviceType),
  idxCreatedDesc: index('idx_reservas_created_at_desc').on(t.createdAt),
  idxClienteReservedFor: index('idx_reservas_cliente_reserved_for').on(t.clienteId, t.reservedFor),
  idxServiceTypeCreatedDesc: index('idx_reservas_service_type_created_desc').on(t.serviceType, t.createdAt),
}));

// reservas_logs
export const reservasLogs = pgTable('reservas_logs', {
  id: bigserial('id', { mode: 'number' }).primaryKey(),
  clienteId: uuid('cliente_id').references(() => clientes.id, { onDelete: 'set null' }),
  servicioId: uuid('servicio_id').references(() => servicios.id, { onDelete: 'set null' }),
  serviceType: serviceTypeEnum('service_type').notNull(),
  status: bookingStatusEnum('status').notNull(),
  message: text('message'),
  screenshotPath: text('screenshot_path'),
  meta: jsonb('meta'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
}, (t) => ({
  idxCliente: index('idx_reservas_logs_cliente_id').on(t.clienteId),
  idxServicio: index('idx_reservas_logs_servicio_id').on(t.servicioId),
  idxServiceType: index('idx_reservas_logs_service_type').on(t.serviceType),
  idxStatusCreatedDesc: index('idx_reservas_logs_status_created_desc').on(t.status, t.createdAt),
  idxClienteCreatedDesc: index('idx_reservas_logs_cliente_created_desc').on(t.clienteId, t.createdAt),
}));

// captcha_events
export const captchaEvents = pgTable('captcha_events', {
  id: bigserial('id', { mode: 'number' }).primaryKey(),
  clienteId: uuid('cliente_id').references(() => clientes.id, { onDelete: 'set null' }),
  servicioId: uuid('servicio_id').references(() => servicios.id, { onDelete: 'set null' }),
  serviceType: serviceTypeEnum('service_type').notNull(),
  reason: blockReasonEnum('reason').notNull(),
  details: text('details'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
}, (t) => ({
  idxCliente: index('idx_captcha_cliente_id').on(t.clienteId),
  idxServicio: index('idx_captcha_servicio_id').on(t.servicioId),
  idxServiceType: index('idx_captcha_service_type').on(t.serviceType),
  idxCreatedDesc: index('idx_captcha_created_at_desc').on(t.createdAt),
  idxServiceTypeCreatedDesc: index('idx_captcha_service_type_created_desc').on(t.serviceType, t.createdAt),
}));

// maintenance_counters
export const maintenanceCounters = pgTable('maintenance_counters', {
  key: text('key').primaryKey(),
  value: bigint('value', { mode: 'number' }).notNull().default(0),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
});

// Relaciones
export const usuariosRelations = relations(usuarios, ({ many }) => ({
  clientes: many(clientes),
}));

export const clientesRelations = relations(clientes, ({ one, many }) => ({
  usuario: one(usuarios, { fields: [clientes.usuarioId], references: [usuarios.id] }),
  servicios: many(servicios),
  reservas: many(reservas),
  reservasLogs: many(reservasLogs),
  captchaEvents: many(captchaEvents),
}));

export const serviciosRelations = relations(servicios, ({ one, many }) => ({
  cliente: one(clientes, { fields: [servicios.clienteId], references: [clientes.id] }),
  reservas: many(reservas),
  reservasLogs: many(reservasLogs),
  captchaEvents: many(captchaEvents),
}));

export const reservasRelations = relations(reservas, ({ one }) => ({
  cliente: one(clientes, { fields: [reservas.clienteId], references: [clientes.id] }),
  servicio: one(servicios, { fields: [reservas.servicioId], references: [servicios.id] }),
}));

export const reservasLogsRelations = relations(reservasLogs, ({ one }) => ({
  cliente: one(clientes, { fields: [reservasLogs.clienteId], references: [clientes.id] }),
  servicio: one(servicios, { fields: [reservasLogs.servicioId], references: [servicios.id] }),
}));

export const captchaEventsRelations = relations(captchaEvents, ({ one }) => ({
  cliente: one(clientes, { fields: [captchaEvents.clienteId], references: [clientes.id] }),
  servicio: one(servicios, { fields: [captchaEvents.servicioId], references: [servicios.id] }),
}));

// Tipos inferidos
export type Usuario = typeof usuarios.$inferSelect;
export type NewUsuario = typeof usuarios.$inferInsert;

export type Cliente = typeof clientes.$inferSelect;
export type NewCliente = typeof clientes.$inferInsert;

export type Servicio = typeof servicios.$inferSelect;
export type NewServicio = typeof servicios.$inferInsert;

export type Reserva = typeof reservas.$inferSelect;
export type NewReserva = typeof reservas.$inferInsert;

export type ReservaLog = typeof reservasLogs.$inferSelect;
export type NewReservaLog = typeof reservasLogs.$inferInsert;

export type CaptchaEvent = typeof captchaEvents.$inferSelect;
export type NewCaptchaEvent = typeof captchaEvents.$inferInsert;

export type MaintenanceCounter = typeof maintenanceCounters.$inferSelect;
export type NewMaintenanceCounter = typeof maintenanceCounters.$inferInsert;

// Ejemplos de uso (comentados)
/*
import { db } from '../server/db';
import { eq, desc } from 'drizzle-orm';

// Insert de log NO_SLOTS
await db.insert(reservasLogs).values({
  clienteId: 'uuid-cliente',
  servicioId: 'uuid-servicio',
  serviceType: 'dni',
  status: 'NO_SLOTS',
  message: 'No hay disponibilidad visible en la franja',
});

// Insert de BOOKED y lectura del contador vía RPC (increment_counter)
await db.insert(reservas).values({
  clienteId: 'uuid-cliente',
  servicioId: 'uuid-servicio',
  serviceType: 'dni',
  portalRef: 'ABC123',
  reservedFor: new Date().toISOString() as any,
  screenshotPath: '/opt/CitaConsulares/worker/screenshots/after.png',
  meta: { office: 'La Habana' } as any,
});

// Luego (Supabase RPC): select increment_counter('booked_since_advice', 1);
*/

