const mysql = require('mysql2');

// TODO: Datos en .env
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'afrodita_shop',
    port: 3306
});

global.db = pool;