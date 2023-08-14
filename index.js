//const venom = require('venom-bot');
const express = require('express');
const app = express();

let client;

async function iniciarCliente() {
  try {
    console.log('Iniciando o cliente do WhatsApp...');
    // client = await venom.create({
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
    // });
    console.log('Cliente conectado');


      // Resto do código...
  } catch (error) {
    console.error('Erro ao iniciar o cliente do WhatsApp:', error);
    process.exit(1); // Encerrar o servidor em caso de erro na inicialização
  }
}

// Função para enviar a mensagem
// async function enviarMensagem(numeroDestino, mensagem) {
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

// Rota para enviar mensagem pelo WhatsApp
// app.get('/enviar-mensagem', (req, res) => {
//   const numeroDestino = '5587991596395@c.us';
//   const mensagem = req.query.mensagem;

//   if (!numeroDestino || !mensagem) {
//     return res.status(400).send('Parâmetros inválidos. Você precisa fornecer "numeroDestino" e "mensagem" na URL.');
//   }

//   enviarMensagem(numeroDestino, mensagem); // Chamar a função enviarMensagem diretamente
//   res.send().status(200);
//   //res.send('Mensagem enviada com sucesso!');
// });

// Iniciar o servidor Express
const port = 3000;
app.use((req, res, next) => {
  // Adiciona o cabeçalho de solicitação "ngrok-skip-browser-warning"
  res.setHeader('ngrok-skip-browser-warning', 'any-value-you-want');
  next();
});
iniciarCliente().then(() => {
  app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
  });
});

app.get('/cu', (req, res) => {
  console.log('cu')
  res.status(200).send()
});