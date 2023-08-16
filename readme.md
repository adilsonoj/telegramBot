# ChatGPT TelegramBot

Um simples TelegramBot com integração com ChatGpt API 3.5

- [telegraf](https://www.npmjs.com/package/telegraf)
- [openai](https://www.npmjs.com/package/openai)
- [dotenv-safe](https://www.npmjs.com/package/dotenv-safe)

## Instalação

Faça o clone do projeto e execute:

```bash
npm i
```

## Usando

1 - Criar o bot de Telegram que fará o envio de mensagens para você. Para fazer isso, primeiro fale com o BotFather. O BotFather é o bot que lhe ajuda na criação de bots. siga esse exemplo de [Luiz Tools](https://www.luiztools.com.br/post/como-enviar-mensagens-de-telegram-em-node-js-via-telegraf/)

2 - Criar uma conta no ChatGPT e gerar uma API Key

3 - Renomear o arquivo .env.example para .env e substituir os valores

```javascript
BOT_TOKEN=
CHATGPT_KEY=
```

4 - Rodar o bot
```javascript
node index.js
```

5 - no Telegram em seu bot criado digite: /chatgpt <SUA PERGUNTA>


## Produção
Utilize [pm2](https://pm2.keymetrics.io/)

## Licença

[MIT](https://choosealicense.com/licenses/mit/)