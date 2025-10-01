import dotenv from 'dotenv';
import cron from 'node-cron';
import { AppointmentScheduler } from './scheduler.js';
import { storage } from './db.js';

dotenv.config();

console.log('Spanish Consular Worker starting...');

// Create scheduler instance
const scheduler = new AppointmentScheduler(storage);

// Self-rescheduling timer with jitter between CHECK_MIN_MINUTES and CHECK_MAX_MINUTES
let isRunning = false;

async function scheduleNextRun() {
  if (isRunning) return;
  
  const minM = Number(process.env.CHECK_MIN_MINUTES || process.env.CHECK_INTERVAL_MIN || 6);
  const maxM = Number(process.env.CHECK_MAX_MINUTES || process.env.CHECK_INTERVAL_MAX || 10);
  const minDelay = Math.max(1, minM) * 60 * 1000;
  const maxDelay = Math.max(minDelay, maxM * 60 * 1000);
  const delay = minDelay + Math.random() * (maxDelay - minDelay);
  
  console.log(`Next appointment cycle in ${Math.round(delay/60000)} minutes...`);
  
  setTimeout(async () => {
    if (isRunning) return;
    
    isRunning = true;
    try {
      console.log('Running appointment booking cycle...');
      await scheduler.processQueue();
    } catch (error) {
      console.error('Error in processing cycle:', error);
    } finally {
      isRunning = false;
      // Schedule the next run after this one completes
      await scheduleNextRun();
    }
  }, delay);
}

// Start the self-rescheduling cycle
scheduleNextRun();

// Health check and cleanup task - every hour  
cron.schedule('0 * * * *', async () => {
  console.log('Running cleanup tasks...');
  await scheduler.cleanupExpiredCooldowns();
});

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('Worker shutting down gracefully...');
  await scheduler.shutdown();
  process.exit(0);
});

process.on('SIGINT', async () => {
  console.log('Worker shutting down gracefully...');
  await scheduler.shutdown();
  process.exit(0);
});

console.log('Spanish Consular Worker is running! 🔄');
console.log('Queue processing every 6-10 minutes with human-like jitter...');
