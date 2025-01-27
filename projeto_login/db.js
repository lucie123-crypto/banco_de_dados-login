const mysql = requere('mysql');

const connection = mysql.createConection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'login_db'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connectado ao MySQL server.');
});
module.exports = connection;