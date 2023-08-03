const venom = require('venom-bot');
const TelegramBot = require('node-telegram-bot-api');

// Substitua 'SEU_TOKEN_DO_TELEGRAM' pelo token do seu bot obtido no BotFather do Telegram

let client;
const bot = new TelegramBot('6149424551:AAFA2MKrV2k3hXrFLC9ofYEGKNFYcm9LYz4');

bot.on('text', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;
  console.log(`Mensagem de texto recebida: "${messageText}"`);

  // Responder à mensagem de texto enviada pelo bot (opcional)
  // Por exemplo, enviar uma mensagem de resposta
  bot.sendMessage(chatId, 'Esta é uma resposta automática do bot.');
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;
  console.log(msg)
  console.log(`Mensagem recebida: "${messageText}"`);

  // Responder à mensagem recebida
  bot.sendMessage(chatId, '6593286839');
  enviarMensagem('5587991596395@c.us', messageText);
});

venom.create({
  session: 'mySessionName',
  // Informe o número do celular com o DDD
  number: '+17813431064',
  // Informe o nome do arquivo de sessão (opcional)
  sessionFile: './mySessionName.json',
  // Opções para executar o Chrome Headless
  puppeteerOptions: {
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--single-process',
      '--disable-gpu',
    ],
  },
}).then((waClient) => {
  console.log('Cliente conectado');
  client = waClient;

  // Monitorar mensagens recebidas
  client.onMessage((message) => {
    console.log(message)
    console.log(`Mensagem recebida de ${message.from}: ${message.body}`);
  });
}).catch((error) => {
  console.error(error);
});

// Evento que será acionado quando uma mensagem for recebida


// Função para enviar a mensagem
async function enviarMensagem(numeroDestino, mensagem) {
  try {
    if (client === undefined) {
      throw new Error('Cliente do WhatsApp ainda não está conectado. Aguarde a conexão.');
    }

    // Envia a mensagem para o número de destino
    await client.sendText(numeroDestino, mensagem);

    console.log(`Mensagem enviada via WhatsApp para ${numeroDestino}: ${mensagem}`);
  } catch (error) {
    console.error('Erro ao enviar mensagem via WhatsApp:', error);
  }
}


bot.startPolling();
