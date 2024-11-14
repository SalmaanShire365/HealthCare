// lib/db.js
import mysql from 'mysql2/promise';  // Use the promise version directly

// Create a connection with promise support
const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export default connection;
