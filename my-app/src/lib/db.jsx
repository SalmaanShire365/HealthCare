// src/lib/db.jsx
import { Client } from 'pg';

// Create a new instance of the Client class
const client = new Client({
  connectionString: process.env.DATABASE_URL, // Use your environment variable for the connection string
});

// Connect to the database
client.connect()
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error:', err));

export default client;
