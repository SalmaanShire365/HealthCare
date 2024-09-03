import bcrypt from 'bcryptjs';
import { Client } from 'pg'; // Assuming you're using the 'pg' library for PostgreSQL

// Connect to PostgreSQL database
const client = new Client({
  user: 'your-username',
  host: 'localhost',
  database: 'your-database',
  password: 'your-password',
  port: 5432,
});
await client.connect();

// Define users and passwords
const users = [
  { email: 'salmaanshire@gmail.com', password: 'password1' },
  // Add more users here
];

const hashPasswords = async () => {
  for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.password, 12);
    // Insert user with hashed password into the database
    await client.query('INSERT INTO users (email, password) VALUES ($1, $2)', [user.email, hashedPassword]);
    console.log(`Inserted user: ${user.email}`);
  }
  
  await client.end();
};

hashPasswords().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
