const DB = require('mysql2');
dotenv = require('dotenv');
dotenv.config();

const connection = DB.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

connection.connect((err) => {
    if (err) {
    console.error('❌ Database connection failed:', err.stack);
    return;
    }
    console.log('✅ Connected to MySQL as ID', connection.threadId);
});

module.exports = connection;