const db = require("../config/database");
require("dotenv").config();

const dbName = process.env.DB_NAME;

db.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``, (err) => {
    if (err) throw err;
    console.log(`Database ${dbName} Created or Already Exists`);

    db.changeUser({ database: dbName }, (err) => {
    if (err) throw err;

        const createLoginTableQuery = `CREATE TABLE Login(
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(40) NOT NULL,
        email VARCHAR(40) NOT NULL,
        password VARCHAR(100) NOT NULL, // minimum length should be 60 characters for bcrypt
        role ENUM( 'admin', 'vendor' ) NOT NULL DEFAULT 'vendor',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`;

        const createNotesTableQuery = `CREATE TABLE notes(
        id INT AUTO_INCREMENT PRIMARY KEY,
        Title VARCHAR(100) NOT NULL,
        Description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`;


        db.query(createLoginTableQuery, (err) => {
            if (err) throw err;
            console.log("Login Table Created Successfully");
            });

        db.query(createNotesTableQuery, (err) => {
            if (err) throw err;
            console.log("Notes Table Created Successfully");
        });
    });
});
