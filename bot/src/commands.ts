import TelegramBot, { Message, CallbackQuery } from 'node-telegram-bot-api';
import type { Operator, Client, Preferences, InsertOperator, InsertClient } from '@repo/shared/schema';
import type { IStorage } from '@repo/shared/storage';
import { exec as _exec } from 'child_process';
import { promisify } from 'util';
const exec = promisify(_exec);

export class TelegramCommands {
  private bot: TelegramBot;
  private storage: IStorage;
  private userStates: Map<string, any> = new Map();

  constructor(bot: TelegramBot, storage: IStorage) {
    this.bot = bot;
    this.storage = storage;
  }

  async handleCommand(msg: Message, operator: Operator | undefined): Promise<void> {
    const chatId = msg.chat.id;
    const raw = msg.text?.split(' ')[0] || '';
    const command = raw.split('@')[0].toLowerCase();

    switch (command) {
      case '/start':
        await this.handleStart(chatId, msg.from);
        break;
      case '/operador':
        await this.handleOperatorRegistration(chatId, msg.from);
        break;
      case '/cliente':
        await this.handleClientCommand(chatId, operator);
        break;
      case '/preferencia':
        await this.handlePreferencesCommand(chatId, operator);
        break;
      case '/status':
        await this.handleStatusCommand(chatId, operator);
        break;
      case '/captcha':
        await this.handleCaptchaCommand(chatId, operator);
        break;
      case '/queue':
        await this.handleQueueCommand(chatId, operator);
        break;
      case '/prueba':
      case '/video':
        await this.handleTestCommand(chatId, operator);
        break;
      case '/prueba':
        await this.handleTestCommand(chatId, operator);
        break;
      case '/prueba':\n        await this.handleTestCommand(chatId, operator);\n        break;\n      case '/video':\n        await this.handleTestCommand(chatId, operator);\n        break;\n      case '/help':
        await this.handleHelpCommand(chatId);
        break;
      default:
        await this.bot.sendMessage(chatId, '❌ Unknown command. Use /help to see available commands.');
    }
  }

  async handleMessage(msg: Message, operator: Operator | undefined): Promise<void> {
    const chatId = msg.chat.id;
    const userState = this.userStates.get(chatId.toString());

    if (!userState) return;

    switch (userState.action) {
      case 'waiting_client_data':
        await this.processClientData(chatId, msg.text || '', operator);
        break;
      case 'waiting_captcha_solution':
        await this.processCaptchaSolution(chatId, msg.text || '', userState.captchaId);
        break;
      default:
        break;
    }
  }

  async handleCallback(query: CallbackQuery, operator: Operator): Promise<void> {
    const data = query.data;
    const chatId = query.message?.chat.id;

    if (!chatId || !data) return;

    await this.bot.answerCallbackQuery(query.id);

    if (data.startsWith('client_')) {
      const clientId = data.split('_')[1];
      await this.showClientDetails(chatId, clientId, operator);
    } else if (data.startsWith('captcha_')) {
      const captchaId = data.split('_')[1];
      await this.startCaptchaSolution(chatId, captchaId);
    }
  }

  private async handleStart(chatId: number, user: any): Promise<void> {
    const welcomeMessage = `
🇪🇸 *Welcome to Spanish Consular Bot*

This bot helps manage automated appointment booking for Spanish consular services in Havana.

Available commands:
• /operador - Register as an operator
• /help - Show all commands

To get started, please register as an operator using /operador
    `;
    
    await this.bot.sendMessage(chatId, welcomeMessage, { parse_mode: 'Markdown' });
  }

  private async handleOperatorRegistration(chatId: number, user: any): Promise<void> {
    try {
      // Check if already registered
      const existing = await this.storage.getOperatorByTelegramId(chatId.toString());
      if (existing) {
        await this.bot.sendMessage(chatId, 
          `✅ You are already registered as operator: *${existing.name}*`,
          { parse_mode: 'Markdown' }
        );
        return;
      }

      // Register new operator
      const operatorData: InsertOperator = {
        telegramUserId: chatId.toString(),
        name: user?.first_name ? `${user.first_name} ${user.last_name || ''}`.trim() : 'Unknown',
        isActive: true
      };

      const operator = await this.storage.createOperator(operatorData);
      
      await this.bot.sendMessage(chatId, 
        `✅ Operator registration successful!\n\n*Name:* ${operator.name}\n*ID:* ${operator.id}\n\nYou can now use all bot commands. Type /help to see available options.`,
        { parse_mode: 'Markdown' }
      );
    } catch (error) {
      console.error('Error registering operator:', error);
      await this.bot.sendMessage(chatId, '❌ Registration failed. Please try again.');
    }
  }

  private async handleClientCommand(chatId: number, operator: Operator | undefined): Promise<void> {
    if (!operator) return;

    try {
      const clients = await this.storage.getActiveClients();
      
      if (clients.length === 0) {
        await this.bot.sendMessage(chatId, 
          '📝 No active clients found.\n\nTo add a new client, send their information in this format:\n\n*Name:* Full Name\n*Email:* email@example.com (optional)\n*Username:* consular_username\n*Password:* consular_password\n*Priority:* 1-5',
          { parse_mode: 'Markdown' }
        );
        
        this.userStates.set(chatId.toString(), { action: 'waiting_client_data' });
        return;
      }

      const preferencesByClient = new Map<string, Preferences>();
      await Promise.all(
        clients.map(async (client) => {
          const prefs = await this.storage.getClientPreferences(client.id);
          if (prefs) {
            preferencesByClient.set(client.id, prefs);
          }
        })
      );

      const keyboard = clients.map((client) => [{
        text: `${client.name} (Priority: ${preferencesByClient.get(client.id)?.urgency ?? 'N/A'})`,
        callback_data: `client_${client.id}`
      }]);

      await this.bot.sendMessage(chatId, '👥 *Active Clients:*', {
        parse_mode: 'Markdown',
        reply_markup: { inline_keyboard: keyboard }
      });
    } catch (error) {
      console.error('Error fetching clients:', error);
      await this.bot.sendMessage(chatId, '❌ Error fetching clients.');
    }
  }

  private async handleStatusCommand(chatId: number, operator: Operator | undefined): Promise<void> {
    if (!operator) return;

    try {
      const [clients, queueItems, captchaRequests, cooldowns] = await Promise.all([
        this.storage.getActiveClients(),
        this.storage.getQueueItems(),
        this.storage.getPendingCaptchaRequests(),
        this.storage.getActiveCooldowns()
      ]);

      const pendingQueue = queueItems.filter(q => q.status === 'pending').length;
      const processingQueue = queueItems.filter(q => q.status === 'processing').length;

      const statusMessage = `
📊 *System Status*

👥 *Clients:* ${clients.length} active
⏳ *Queue:* ${pendingQueue} pending, ${processingQueue} processing
🔐 *Captchas:* ${captchaRequests.length} pending
❄️ *Cooldowns:* ${cooldowns.length} active

🤖 *System:* Operational
      `;

      await this.bot.sendMessage(chatId, statusMessage, { parse_mode: 'Markdown' });
    } catch (error) {
      console.error('Error fetching status:', error);
      await this.bot.sendMessage(chatId, '❌ Error fetching system status.');
    }
  }

  private async handleTestCommand(chatId: number, operator: Operator | undefined): Promise<void> {
    if (!operator) return;
    try {
      const now = new Date();
      await this.bot.sendMessage(chatId, `▶️ Iniciando prueba a las ${now.toLocaleString()}`);
      const env = [
        `DATABASE_URL=${process.env.DATABASE_URL || ''}`,
        `TELEGRAM_BOT_TOKEN=${process.env.TELEGRAM_BOT_TOKEN || ''}`,
        `TELEGRAM_ADMIN_CHAT=${process.env.TELEGRAM_ADMIN_CHAT || ''}`,
        `TELEGRAM_ADMIN_CHAT_LIST=${process.env.TELEGRAM_ADMIN_CHAT_LIST || ''}`,
      ].join(' ');
      // Ejecuta demo y luego envío del último video (con conversión a MP4 y borrado)
      const cmd = `${env} bash -lc 'cd /opt/CitaConsulares/worker && pnpm run demo && pnpm run send-video'`;
      await exec(cmd, { timeout: 10 * 60 * 1000 });
      const done = new Date();
      await this.bot.sendMessage(chatId, `✅ Prueba finalizada a las ${done.toLocaleString()} (revisa el video en Telegram).`);
    } catch (error) {
      console.error('Error en prueba:', error);
      await this.bot.sendMessage(chatId, '❌ Error ejecutando la prueba. Revisa logs o intenta de nuevo.');
    }
  }

  private async handleCaptchaCommand(chatId: number, operator: Operator | undefined): Promise<void> {
    if (!operator) return;

    try {
      const captchaRequests = await this.storage.getPendingCaptchaRequests();
      
      if (captchaRequests.length === 0) {
        await this.bot.sendMessage(chatId, '✅ No pending captcha requests.');
        return;
      }

      for (const request of captchaRequests) {
        const client = await this.storage.getClient(request.clientId);
        const clientName = client?.name || 'Unknown Client';

        await this.bot.sendMessage(chatId, 
          `🔐 *Captcha Required*\n\nClient: ${clientName}\nCreated: ${request.createdAt.toLocaleString()}\n\nScreenshot: ${request.screenshotPath}`,
          {
            parse_mode: 'Markdown',
            reply_markup: {
              inline_keyboard: [[{
                text: '🔍 Solve Captcha',
                callback_data: `captcha_${request.id}`
              }]]
            }
          }
        );
      }
    } catch (error) {
      console.error('Error fetching captcha requests:', error);
      await this.bot.sendMessage(chatId, '❌ Error fetching captcha requests.');
    }
  }

  private async handleQueueCommand(chatId: number, operator: Operator | undefined): Promise<void> {
    if (!operator) return;

    try {
      const queueItems = await this.storage.getQueueItems();
      
      if (queueItems.length === 0) {
        await this.bot.sendMessage(chatId, '✅ Queue is empty.');
        return;
      }

      const queueMessage = queueItems.slice(0, 10).map((item, index) => {
        const status = item.status === 'pending' ? '⏳' : 
                     item.status === 'processing' ? '🔄' :
                     item.status === 'completed' ? '✅' : '❌';
        return `${index + 1}. ${status} Client ID: ${item.clientId} (${item.attempts} attempts)`;
      }).join('\n');

      await this.bot.sendMessage(chatId, 
        `📋 *Queue Status* (showing first 10)\n\n${queueMessage}`, 
        { parse_mode: 'Markdown' }
      );
    } catch (error) {
      console.error('Error fetching queue:', error);
      await this.bot.sendMessage(chatId, '❌ Error fetching queue.');
    }
  }

  private async handleHelpCommand(chatId: number): Promise<void> {
    const helpMessage = `
🤖 *Spanish Consular Bot Commands*

*General:*
• /start - Welcome message
• /operador - Register as operator
• /help - This help message

*Management:*
• /cliente - View and manage clients
• /preferencia - Set client preferences
• /status - System status overview
• /queue - View appointment queue

*Actions:*
• /captcha - Solve pending captchas

*Usage Tips:*
- Register as operator first
- Add clients via /cliente
- Monitor system via /status
- Solve captchas when needed
    `;

    await this.bot.sendMessage(chatId, helpMessage, { parse_mode: 'Markdown' });
  }

  private async handlePreferencesCommand(chatId: number, operator: Operator | undefined): Promise<void> {
    await this.bot.sendMessage(chatId, 
      '⚙️ Preferences management will be implemented in the dashboard.\n\nUse the web interface to configure client appointment preferences.',
      { parse_mode: 'Markdown' }
    );
  }

  private async processClientData(chatId: number, data: string, operator: Operator | undefined): Promise<void> {
    if (!operator) return;

    try {
      // Parse client data from message
      const lines = data.split('\n').map(line => line.trim());
      const clientData: Record<string, string> = {};
      let urgencyInput: number | undefined;

      for (const line of lines) {
        const normalized = line.toLowerCase();
        if (normalized.startsWith('name:')) {
          clientData.name = line.substring(5).trim();
        } else if (normalized.startsWith('email:')) {
          clientData.email = line.substring(6).trim();
        } else if (normalized.startsWith('username:')) {
          clientData.username = line.substring(9).trim();
        } else if (normalized.startsWith('password:')) {
          clientData.password = line.substring(9).trim();
        } else if (normalized.startsWith('priority:')) {
          const parsed = parseInt(line.substring(9).trim(), 10);
          if (!Number.isNaN(parsed)) {
            urgencyInput = parsed;
          }
        }
      }

      if (!clientData.name || !clientData.username || !clientData.password) {
        await this.bot.sendMessage(chatId, '❌ Missing required fields. Please provide at least Name, Username, and Password.');
        return;
      }

      const insertClient: InsertClient = {
        name: clientData.name,
        email: clientData.email && clientData.email.length > 0 ? clientData.email : null,
        username: clientData.username,
        password: clientData.password,
        operatorId: operator.id,
        isActive: true
      };

      const client = await this.storage.createClient(insertClient);

      const urgency = typeof urgencyInput === 'number' && Number.isFinite(urgencyInput)
        ? Math.min(Math.max(urgencyInput, 1), 5)
        : 3;

      await this.storage.createOrUpdatePreferences({
        clientId: client.id,
        serviceType: 'dni_habana',
        urgency,
        preferredTimes: null,
        notes: null
      });

      await this.bot.sendMessage(chatId, 
        `✅ Client added successfully!\n\n*Name:* ${client.name}\n*ID:* ${client.id}\n*Priority:* ${urgency}`,
        { parse_mode: 'Markdown' }
      );

      this.userStates.delete(chatId.toString());
    } catch (error) {
      console.error('Error creating client:', error);
      await this.bot.sendMessage(chatId, '❌ Error creating client. Please check the format and try again.');
    }
  }
  private async startCaptchaSolution(chatId: number, captchaId: string): Promise<void> {
    this.userStates.set(chatId.toString(), { 
      action: 'waiting_captcha_solution', 
      captchaId 
    });

    await this.bot.sendMessage(chatId, 
      '🔐 Please enter the captcha solution:'
    );
  }

  private async processCaptchaSolution(chatId: number, solution: string, captchaId: string): Promise<void> {
    try {
      await this.storage.updateCaptchaRequest(captchaId, {
        status: 'solved',
        solution: solution.trim(),
        solvedAt: new Date()
      });

      await this.bot.sendMessage(chatId, 
        `✅ Captcha solution submitted: *${solution}*\n\nThe worker will continue with the appointment booking.`,
        { parse_mode: 'Markdown' }
      );

      this.userStates.delete(chatId.toString());
    } catch (error) {
      console.error('Error updating captcha:', error);
      await this.bot.sendMessage(chatId, '❌ Error submitting captcha solution.');
    }
  }

  private async showClientDetails(chatId: number, clientId: string, operator: Operator): Promise<void> {
    try {
      const client = await this.storage.getClient(clientId);
      if (!client) {
        await this.bot.sendMessage(chatId, '❌ Client not found.');
        return;
      }

      const preferences = await this.storage.getClientPreferences(clientId);
      
      const message = `
👤 *Client Details*

*Name:* ${client.name}
*Email:* ${client.email || 'Not provided'}
*Status:* ${client.isActive ? '✅ Active' : '❌ Inactive'}
*Created:* ${client.createdAt.toLocaleString()}

*Service:* ${preferences?.serviceType || 'dni_habana'}
*Priority:* ${preferences?.urgency || 3}
*Notes:* ${preferences?.notes || 'None'}
      `;

      await this.bot.sendMessage(chatId, message, { parse_mode: 'HTML' });
    } catch (error) {
      console.error('Error fetching client details:', error);
      await this.bot.sendMessage(chatId, '❌ Error fetching client details.');
    }
  }
}



