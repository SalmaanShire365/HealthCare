import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

async function main() {
  // Connect to MySQL database
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  // Define users and passwords
  const users = [
    { email: 'salmaanshire@gmail.com', password: 'password1' },
    { email: 'user@nextmail.com', password: '123456' },
    // Add more users here
  ];

  // Hash passwords and insert users into the database
  const hashPasswords = async () => {
    for (const user of users) {
      try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(user.password, 12);

        // Insert user with hashed password into the MySQL database
        const [result] = await connection.execute(
          'INSERT INTO users (email, password) VALUES (?, ?)',
          [user.email, hashedPassword]
        );

        console.log(`Inserted user: ${user.email}, ID: ${result.insertId}`);
      } catch (err) {
        console.error(`Error inserting user ${user.email}:`, err);
      }
    }
  };

  // Start the password hashing and insertion process
  await hashPasswords();

  // Close the database connection
  await connection.end();
  console.log('Database connection closed.');
}

// Call the main function to execute the logic
main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
