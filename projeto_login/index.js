const express = require('express');
const db = require('./db');

const port = 3000;
const app = express();

// Usar express.urlencoded diretamente
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM users WHERE username = ? and password = ?';

    db.query(query, [username, password], (err, results) => {
        if (err) {
            console.error('Erro ao consultar banco de dados:', err);
            return res.status(500).send('Erro interno no servidor');
        }
        
        if (results.length > 0) {
            console.log('Login bem-sucedido:', username);
            return res.redirect('https://github.com/');
        } else {
            console.log('Login falhou:', username);
            return res.send(`
                <h1>Usuário ou senha inválidos!</h1>
                <a href="/">Voltar</a>
            `);
        }
    });
});

