import dotenv from 'dotenv';
import cron from 'node-cron';
import { AppointmentScheduler } from './scheduler.js';
import { storage } from './db.js';

dotenv.config();

console.log('Spanish Consular Worker starting...');

// Create scheduler instance
const scheduler = new AppointmentScheduler(storage);

// Self-rescheduling timer for 6-10 minute intervals as specified
let isRunning = false;

async function scheduleNextRun() {
  if (isRunning) return;
  
  // Generate random delay between 6-10 minutes (360-600 seconds)
  const minDelay = 6 * 60 * 1000; // 6 minutes
  const maxDelay = 10 * 60 * 1000; // 10 minutes
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