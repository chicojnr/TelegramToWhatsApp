// Done This To Fix IT !!!
const repl = require('repl');
const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
  puppeteer: { headless: true },
  authStrategy: new LocalAuth()
});

console.log('Initializing...');

client.initialize();

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

client.on('qr', () => {
  console.log('Please scan the QR code.');
});

client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('ready', () => {
  const shell = repl.start('wwebjs> ');
  shell.context.client = client;
  shell.on('exit', async () => {
    await client.destroy();
  });
});

client.on('message', message => {
  console.log(message.body);
});

client.on('message', message => {
  if (message.body === '!ping') {
    message.reply('pong');
  }
});


// const venom = require('venom-bot');
// const express = require('express');
// const app = express();

// let client; // Definir a variável 'client' no escopo global

// venom.create({
//   session: 'mySessionName',
//   number: '+17813431064',
//   sessionFile: './mySessionName.json',
//   puppeteerOptions: {
//     args: [
//       '--no-sandbox',
//       '--disable-setuid-sandbox',
//       '--disable-dev-shm-usage',
//       '--disable-accelerated-2d-canvas',
//       '--no-first-run',
//       '--no-zygote',
//       '--single-process',
//       '--disable-gpu',
//     ],
//   },
// }).then((waClient) => {
//   console.log('Cliente conectado');
//   client = waClient;
//   // Resto do código...
// }).catch((error) => {
//   console.error(error);
// });

// // Rota para enviar mensagem pelo WhatsApp
// app.get('/enviar-mensagem', (req, res) => {
//   const numeroDestino = '5587991596395@c.us';
//   const mensagem = req.query.mensagem;

//   if (!numeroDestino || !mensagem) {
//     return res.status(400).send('Parâmetros inválidos. Você precisa fornecer "numeroDestino" e "mensagem" na URL.');
//   }

//   enviarMensagem(client, numeroDestino, mensagem); // Passar a variável 'client' como parâmetro
//   res.send('Mensagem enviada com sucesso!');
// });

// // Função para enviar a mensagem
// async function enviarMensagem(client, numeroDestino, mensagem) { // Receber 'client' como parâmetro
//   try {
//     if (!client || !client.isConnected()) {
//       throw new Error('Cliente do WhatsApp ainda não está conectado. Aguarde a conexão.');
//     }

//     // Envia a mensagem para o número de destino
//     await client.sendText(numeroDestino, mensagem);

//     console.log(`Mensagem enviada via WhatsApp para ${numeroDestino}: ${mensagem}`);
//   } catch (error) {
//     console.error('Erro ao enviar mensagem via WhatsApp:', error);
//   }
// }

// // Iniciar o servidor Express
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Servidor iniciado na porta ${port}`);
// });


// const venom = require('venom-bot');
// const TelegramBot = require('node-telegram-bot-api');

// // Substitua 'SEU_TOKEN_DO_TELEGRAM' pelo token do seu bot obtido no BotFather do Telegram

// let client;
// const bot = new TelegramBot('6149424551:AAFA2MKrV2k3hXrFLC9ofYEGKNFYcm9LYz4');

// bot.on('text', (msg) => {
//   const chatId = msg.chat.id;
//   const messageText = msg.text;
//   console.log(`Mensagem de texto recebida: "${messageText}"`);

//   // Responder à mensagem de texto enviada pelo bot (opcional)
//   // Por exemplo, enviar uma mensagem de resposta
//   bot.sendMessage(chatId, 'Esta é uma resposta automática do bot.');
// });

// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
//   const messageText = msg.text;
//   console.log(msg)
//   console.log(`Mensagem recebida: "${messageText}"`);

//   // Responder à mensagem recebida
//   bot.sendMessage(chatId, '6593286839');
//   enviarMensagem('5587991596395@c.us', messageText);
// });

// venom.create({
//   session: 'mySessionName',
//   // Informe o número do celular com o DDD
//   number: '+17813431064',
//   // Informe o nome do arquivo de sessão (opcional)
//   sessionFile: './mySessionName.json',
//   // Opções para executar o Chrome Headless
//   puppeteerOptions: {
//     args: [
//       '--no-sandbox',
//       '--disable-setuid-sandbox',
//       '--disable-dev-shm-usage',
//       '--disable-accelerated-2d-canvas',
//       '--no-first-run',
//       '--no-zygote',
//       '--single-process',
//       '--disable-gpu',
//     ],
//   },
// }).then((waClient) => {
//   console.log('Cliente conectado');
//   client = waClient;

//   // Monitorar mensagens recebidas
//   client.onMessage((message) => {
//     console.log(message)
//     console.log(`Mensagem recebida de ${message.from}: ${message.body}`);
//   });
// }).catch((error) => {
//   console.error(error);
// });

// // Evento que será acionado quando uma mensagem for recebida


// // Função para enviar a mensagem
// async function enviarMensagem(numeroDestino, mensagem) {
//   try {
//     if (client === undefined) {
//       throw new Error('Cliente do WhatsApp ainda não está conectado. Aguarde a conexão.');
//     }

//     // Envia a mensagem para o número de destino
//     await client.sendText(numeroDestino, mensagem);

//     console.log(`Mensagem enviada via WhatsApp para ${numeroDestino}: ${mensagem}`);
//   } catch (error) {
//     console.error('Erro ao enviar mensagem via WhatsApp:', error);
//   }
// }


// bot.startPolling();

