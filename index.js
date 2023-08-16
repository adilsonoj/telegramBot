import dotenv from 'dotenv-safe'
import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'

import { sendMessage } from './chatgpt.js'

dotenv.config()
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use(async (ctx, next) => {
  console.time(`Processing update ${ctx.update.update_id}`);
  await next() // runs next middleware
  // runs after next middleware finishes
  console.timeEnd(`Processing update ${ctx.update.update_id}`);
})

bot.start((ctx) => ctx.reply('Welcome'));
bot.command('oldschool', (ctx) => ctx.reply('Hello'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
bot.command('photo', (ctx) => ctx.replyWithPhoto('https://picsum.photos/200/300/'))

bot.help((ctx) => ctx.reply('Digite /chatgpt <PERGUNTA>'));


bot.command('chatgpt', async (ctx) => {
  let text = ctx.message.text.substring(8)

  console.log(ctx.from.username);

  if (!text || !text.trim()) {
    ctx.reply('Comando inválido\nDigite /help para mais informações')
    return
  }
  console.log(text.trim())

  try {
    const responses = await sendMessage(text[1].trim())

    console.log('resp', responses)

    for (const { message } of responses) {
      console.log(message.content)
      ctx.reply(message.content)
    }

  } catch (error) {
    ctx.reply("erro:", error)
  }
});






// bot.telegram.sendMessage(process.env.CHAT_ID, 'Hello Telegram!');
bot.launch();