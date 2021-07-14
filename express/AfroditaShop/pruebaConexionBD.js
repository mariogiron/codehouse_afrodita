const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'afrodita_shop',
    port: 3306
});

connection.connect((err) => {
    connection.query('select * from products where id = 1', (err, result) => {
        if (err) {
            return console.log(err.message);
        }
        console.log(result);
    });
    connection.end();
});