const mysql = require('mysql2/promise');
require('dotenv').config();

const db = mysql.createPool({
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB,
    timezone:'+07:00'
})

module.exports = db