const express = require('express');
const phpExpress = require('php-express')({
    binPath: 'php' // Caminho para o executável do PHP (use 'php' se estiver no PATH do sistema)
});
const path = require('path');

const app = express();

// Define o .php como mecanismo para arquivos PHP
app.engine('php', phpExpress.engine);
app.set('views', path.join(__dirname, 'api'));
app.set('view engine', 'php');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index.php'); 
});

// Outras rotas
app.get('/gallery', (req, res) => {
    console.log('Acessando a Galeria /');
    res.render('gallery.php');
});

app.get('/conexao', (req, res) => {
    console.log('Acessando a Conexão /');
    res.render('conexao.php');
});

// Rota para renderizar o arquivo PHP 'test.php'
app.get('/php-test', (req, res) => {
    res.render('test.php');
});

// Rota para renderizar o arquivo PHP 'test.php'
app.get('/neon', (req, res) => {
    res.render('neon.php');
});

// Middleware para erros 404 (arquivo PHP não encontrado)
app.use((req, res, next) => {
    res.status(404).send('Página não encontrada');
});

// Middleware básico para capturar erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Ocorreu um erro no servidor');
});

// Inicializa o servidor
const port = process.env.PORT ||  3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});