import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertClientSchema, insertOperatorSchema, insertQueueSchema, insertAppointmentSchema, insertCaptchaRequestSchema, insertPreferencesSchema } from "@repo/shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Operators routes
  app.get("/api/operators", async (req, res) => {
    try {
      const operators = await storage.getActiveOperators();
      res.json(operators);
    } catch (error) {
      console.error("Error fetching operators:", error);
      res.status(500).json({ error: "Failed to fetch operators" });
    }
  });

  app.post("/api/operators", async (req, res) => {
    try {
      const operatorData = insertOperatorSchema.parse(req.body);
      const operator = await storage.createOperator(operatorData);
      res.status(201).json(operator);
    } catch (error) {
      console.error("Error creating operator:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Validation error", details: error.errors });
      }
      res.status(500).json({ error: "Failed to create operator" });
    }
  });

  // Clients routes
  app.get("/api/clients", async (req, res) => {
    try {
      const clients = await storage.getActiveClients();
      res.json(clients);
    } catch (error) {
      console.error("Error fetching clients:", error);
      res.status(500).json({ error: "Failed to fetch clients" });
    }
  });

  app.get("/api/clients/:id", async (req, res) => {
    try {
      const client = await storage.getClient(req.params.id);
      if (!client) {
        return res.status(404).json({ error: "Client not found" });
      }
      res.json(client);
    } catch (error) {
      console.error("Error fetching client:", error);
      res.status(500).json({ error: "Failed to fetch client" });
    }
  });

  app.post("/api/clients", async (req, res) => {
    try {
      const clientData = insertClientSchema.parse(req.body);
      const client = await storage.createClient(clientData);
      
      // Also create default preferences if provided
      if (req.body.preferences) {
        const preferencesData = insertPreferencesSchema.parse({
          clientId: client.id,
          ...req.body.preferences
        });
        await storage.createOrUpdatePreferences(preferencesData);
      }
      
      res.status(201).json(client);
    } catch (error) {
      console.error("Error creating client:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Validation error", details: error.errors });
      }
      res.status(500).json({ error: "Failed to create client" });
    }
  });

  app.put("/api/clients/:id", async (req, res) => {
    try {
      const updates = insertClientSchema.partial().parse(req.body);
      const client = await storage.updateClient(req.params.id, updates);
      if (!client) {
        return res.status(404).json({ error: "Client not found" });
      }
      res.json(client);
    } catch (error) {
      console.error("Error updating client:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Validation error", details: error.errors });
      }
      res.status(500).json({ error: "Failed to update client" });
    }
  });

  // Queue routes
  app.get("/api/queue", async (req, res) => {
    try {
      const queueItems = await storage.getQueueItems();
      res.json(queueItems);
    } catch (error) {
      console.error("Error fetching queue:", error);
      res.status(500).json({ error: "Failed to fetch queue" });
    }
  });

  app.get("/api/queue/pending", async (req, res) => {
    try {
      const pendingItems = await storage.getPendingQueueItems();
      res.json(pendingItems);
    } catch (error) {
      console.error("Error fetching pending queue items:", error);
      res.status(500).json({ error: "Failed to fetch pending items" });
    }
  });

  app.post("/api/queue", async (req, res) => {
    try {
      const queueData = insertQueueSchema.parse(req.body);
      const queueItem = await storage.createQueueItem(queueData);
      res.status(201).json(queueItem);
    } catch (error) {
      console.error("Error creating queue item:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Validation error", details: error.errors });
      }
      res.status(500).json({ error: "Failed to create queue item" });
    }
  });

  app.put("/api/queue/:id", async (req, res) => {
    try {
      const updates = insertQueueSchema.partial().parse(req.body);
      const queueItem = await storage.updateQueueItem(req.params.id, updates);
      if (!queueItem) {
        return res.status(404).json({ error: "Queue item not found" });
      }
      res.json(queueItem);
    } catch (error) {
      console.error("Error updating queue item:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Validation error", details: error.errors });
      }
      res.status(500).json({ error: "Failed to update queue item" });
    }
  });

  // Appointments routes
  app.get("/api/appointments", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
      const appointments = await storage.getRecentAppointments(limit);
      res.json(appointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      res.status(500).json({ error: "Failed to fetch appointments" });
    }
  });

  app.post("/api/appointments", async (req, res) => {
    try {
      const appointmentData = insertAppointmentSchema.parse(req.body);
      const appointment = await storage.createAppointment(appointmentData);
      res.status(201).json(appointment);
    } catch (error) {
      console.error("Error creating appointment:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Validation error", details: error.errors });
      }
      res.status(500).json({ error: "Failed to create appointment" });
    }
  });

  // Captcha requests routes
  app.get("/api/captcha", async (req, res) => {
    try {
      const requests = await storage.getPendingCaptchaRequests();
      res.json(requests);
    } catch (error) {
      console.error("Error fetching captcha requests:", error);
      res.status(500).json({ error: "Failed to fetch captcha requests" });
    }
  });

  app.post("/api/captcha", async (req, res) => {
    try {
      const captchaData = insertCaptchaRequestSchema.parse(req.body);
      const request = await storage.createCaptchaRequest(captchaData);
      res.status(201).json(request);
    } catch (error) {
      console.error("Error creating captcha request:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Validation error", details: error.errors });
      }
      res.status(500).json({ error: "Failed to create captcha request" });
    }
  });

  app.put("/api/captcha/:id", async (req, res) => {
    try {
      const updates = insertCaptchaRequestSchema.partial().parse(req.body);
      const request = await storage.updateCaptchaRequest(req.params.id, updates);
      if (!request) {
        return res.status(404).json({ error: "Captcha request not found" });
      }
      res.json(request);
    } catch (error) {
      console.error("Error updating captcha request:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Validation error", details: error.errors });
      }
      res.status(500).json({ error: "Failed to update captcha request" });
    }
  });

  // Cooldowns routes
  app.get("/api/cooldowns", async (req, res) => {
    try {
      const cooldowns = await storage.getActiveCooldowns();
      res.json(cooldowns);
    } catch (error) {
      console.error("Error fetching cooldowns:", error);
      res.status(500).json({ error: "Failed to fetch cooldowns" });
    }
  });

  app.get("/api/cooldowns/check/:type/:identifier", async (req, res) => {
    try {
      const { type, identifier } = req.params;
      const inCooldown = await storage.isInCooldown(type, identifier);
      res.json({ inCooldown });
    } catch (error) {
      console.error("Error checking cooldown:", error);
      res.status(500).json({ error: "Failed to check cooldown" });
    }
  });

  // Dashboard stats route
  app.get("/api/dashboard/stats", async (req, res) => {
    try {
      const [clients, queueItems, appointments, captchaRequests, cooldowns] = await Promise.all([
        storage.getActiveClients(),
        storage.getQueueItems(),
        storage.getRecentAppointments(30), // Last 30 appointments
        storage.getPendingCaptchaRequests(),
        storage.getActiveCooldowns()
      ]);

      const stats = {
        activeClients: clients.length,
        queuePending: queueItems.filter(q => q.status === 'pending').length,
        appointmentsThisWeek: appointments.filter(a => {
          const weekAgo = new Date();
          weekAgo.setDate(weekAgo.getDate() - 7);
          return a.createdAt > weekAgo;
        }).length,
        captchaAlerts: captchaRequests.length,
        systemStatus: "active"
      };

      res.json(stats);
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
      res.status(500).json({ error: "Failed to fetch dashboard stats" });
    }
  });

  // Activity log route - mock implementation for now
  app.get("/api/activity", async (req, res) => {
    try {
      // This would be implemented with a proper activity log system
      // For now, return recent appointments and queue updates as activities
      const appointments = await storage.getRecentAppointments(10);
      const queueItems = await storage.getQueueItems();
      
      const activities = [
        ...appointments.map(apt => ({
          id: apt.id,
          type: "appointment",
          title: "Appointment Booked Successfully",
          description: `${apt.serviceType} appointment secured for ${apt.appointmentDate}`,
          timestamp: apt.createdAt,
          status: "success",
          clientId: apt.clientId,
          metadata: { slot: apt.appointmentTime, date: apt.appointmentDate }
        })),
        ...queueItems.filter(q => q.error).map(q => ({
          id: q.id,
          type: "error",
          title: "Booking Failed",
          description: q.error || "Unknown error occurred",
          timestamp: q.lastAttempt || q.createdAt,
          status: "error",
          clientId: q.clientId
        }))
      ].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()).slice(0, 20);

      res.json(activities);
    } catch (error) {
      console.error("Error fetching activity log:", error);
      res.status(500).json({ error: "Failed to fetch activity log" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
