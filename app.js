// const express = require('express');
// const phpExpress = require('php-express')({
//  binPath: 'php' // Caminho para o executável do PHP (use 'php' se estiver no PATH do sistema)
// });

// const app = express();

// // Define o .php como mecanismo para arquivos PHP
// app.engine('php', phpExpress.engine);

// // Define a pasta 'views' e o mecanismo de visualização como PHP
// app.set('views', './views');
// app.set('view engine', 'php');

// // Serve arquivos estáticos (CSS, JS, imagens) da pasta 'public'
// app.use(express.static('./public'));

// // Rota de teste simples para verificar o Node.js
// app.get('/', (req, res) => {
//   console.log('Acessando a rota /');
//   res.render('index.php');
// });

// // Rota para renderizar o arquivo PHP 'test.php'
// app.get('/php-test', (req, res) => {
//   res.render('test.php');
// });

// // Middleware para erros 404 (arquivo PHP não encontrado)
// app.use((req, res, next) => {
//   res.status(404).send('Página não encontrada');
// });

// // Middleware básico para capturar erros
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   console.log('ERROOOOOOOOOOOOO');
//   res.status(500).send('Ocorreu um erro no servidor');
// });

// Inicializa o servidor
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Servidor rodando na porta ${port}`);
// });
