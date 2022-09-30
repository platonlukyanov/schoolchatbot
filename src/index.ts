import TelegramBot from 'node-telegram-bot-api';
import jsonfile from 'jsonfile';
import { ScheduleItem } from './types.js';
import scheduleSchoolCallsMessages from './utils/scheduleSchoolCallsMessages.js';
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

async function isChatAlreadyRequestedTheScheduleService(id: number) {
  const alreadyExistingChat = await prisma.chat.findFirst({
    where: {
      telegramId: id,
    }
  })

  return Boolean(alreadyExistingChat);
}

export async function startBot() {
  let schoolCallsSchedule: ScheduleItem[] = [];

  const file = './src/data/school-calls-schedule.json'
  schoolCallsSchedule = await jsonfile.readFile(file);
  
  const token = '5669136203:AAHwF4XQby2-vpT7tWf3gvotAxoPO1U8jCw';
  
  const bot = new TelegramBot(token, {polling: true});
  
  // Matches "/start"
  bot.onText(/\/start/, async msg => {
    const chatId = msg.chat.id;

    bot.sendSticker(chatId, 'CAACAgIAAxkBAAMDYyDodnuKsnKN1KkChLjRhyKV9sIAAlNzAAKezgsAAe9SCN0iEzDGKQQ') // will send 'Боброе Утр

    scheduleSchoolCallsMessages(schoolCallsSchedule, {
      sendMessage: message => {
        bot.sendMessage(chatId, message);
      }
    });

  });

  console.log('Bot is started')
}



