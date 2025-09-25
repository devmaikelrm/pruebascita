import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
import { db } from './db.js';
import { storage } from './storage.js';
import { TelegramCommands } from './commands.js';

dotenv.config();

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

if (!TELEGRAM_BOT_TOKEN) {
  console.error('TELEGRAM_BOT_TOKEN environment variable is required');
  process.exit(1);
}

// Create bot instance
const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

// Initialize commands handler
const commands = new TelegramCommands(bot, storage);

console.log('Spanish Consular Bot starting...');

// Set up bot commands
bot.setMyCommands([
  { command: 'start', description: 'Welcome message and registration' },
  { command: 'operador', description: 'Register as an operator' },
  { command: 'cliente', description: 'Manage clients' },
  { command: 'preferencia', description: 'Set client preferences' },
  { command: 'status', description: 'Check system status' },
  { command: 'captcha', description: 'Solve captcha challenges' },
  { command: 'queue', description: 'Check appointment queue' },
  { command: 'help', description: 'Show available commands' }
]);

// Handle text messages
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (!text) return;

  try {
    // Check if user is registered as operator
    const operator = await storage.getOperatorByTelegramId(chatId.toString());
    
    if (!operator && !text.startsWith('/start') && !text.startsWith('/operador')) {
      await bot.sendMessage(chatId, 
        '❌ You need to register as an operator first. Use /operador to register.',
        { parse_mode: 'Markdown' }
      );
      return;
    }

    // Handle commands
    if (text.startsWith('/')) {
      await commands.handleCommand(msg, operator);
    } else {
      // Handle non-command messages (e.g., captcha solutions, client data)
      await commands.handleMessage(msg, operator);
    }
  } catch (error) {
    console.error('Error handling message:', error);
    await bot.sendMessage(chatId, '❌ An error occurred. Please try again.');
  }
});

// Handle callback queries (inline buttons)
bot.on('callback_query', async (query) => {
  try {
    const operator = await storage.getOperatorByTelegramId(query.from.id.toString());
    if (!operator) {
      await bot.answerCallbackQuery(query.id, { text: 'Access denied' });
      return;
    }
    
    await commands.handleCallback(query, operator);
  } catch (error) {
    console.error('Error handling callback:', error);
    await bot.answerCallbackQuery(query.id, { text: 'Error occurred' });
  }
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('Bot shutting down gracefully...');
  bot.stopPolling();
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('Bot shutting down gracefully...');
  bot.stopPolling();
  process.exit(0);
});

console.log('Spanish Consular Bot is running! 🤖');