// lib/db.js
import mysql from 'mysql2/promise';

// If you haven’t already, load .env files in a pages-API context:
import 'dotenv/config';

export const pool = mysql.createPool({
  host:     process.env.DB_HOST     || 'localhost',
  user:     process.env.DB_USER     || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME     || 'alphaqualitycare',
  waitForConnections: true,
  connectionLimit:     10,
  queueLimit:          0,
});


