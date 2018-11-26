const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(async ctx => {
    const name = ctx.update.message.from.first_name
    await ctx.reply(`Seja bem vindo ${name} 🤡`)
    await ctx.replyWithHTML(`Destacando mensagem <b>HTML</b>
        <i>de várias</i> <code>formas</code> <pre>possíveis</pre>
        <a href="http://www.google.com">Google</a>`)
    await ctx.replyWithMarkdown('Destacando mensagem *Markdown* '
            + ' _de várias_ `formas` ```possíveis```'
            + ' [Google](http://www.google.com)')
    await ctx.replyWithPhoto({source: `${__dirname}/cat.jpeg`})
    await ctx.replyWithPhoto('http://files.cod3r.com.br/curso-bot/gato1.jpg',
        {caption: 'Olha o estilo'})
    await ctx.replyWithPhoto({ url: 'http://files.cod3r.com.br/curso-bot/gato2.jpg'})
    await ctx.replyWithLocation(-15.869077, -48.015034)
    await ctx.replyWithVideo('http://files.cod3r.com.br/curso-bot/cod3r-end.m4v')
})

bot.startPolling()