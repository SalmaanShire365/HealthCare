// lib/db.js
import mysql from 'mysql2/promise';

// Create a connection pool (better for handling multiple requests)
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,  // Default to port 3306 if not set in .env
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,  // Wait for a connection if the pool is full
  connectionLimit: 10,       // Max number of connections in the pool
  queueLimit: 0              // Unlimited queue length
});

// Export a function to get a connection from the pool
const getConnection = async () => {
  const connection = await pool.getConnection();
  return connection;
};

export { pool, getConnection };
