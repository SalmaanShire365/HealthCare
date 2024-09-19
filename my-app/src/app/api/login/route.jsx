import bcrypt from 'bcryptjs';
import pool from '../../../lib/db'; // Adjust the import path as necessary

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: 'Email and password are required' }),
        { status: 400 }
      );
    }

    // Check if the user exists
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    const user = rows[0];

    if (user) {
      console.log('User found:', user); // Debug: Log user details

      // User exists, verify password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      console.log('Password validation result:', isPasswordValid); // Debug: Log password validation result

      if (isPasswordValid) {
        return new Response(
          JSON.stringify({ message: 'Login successful' }),
          { status: 200 }
        );
      } else {
        return new Response(
          JSON.stringify({ error: 'Invalid credentials' }),
          { status: 401 }
        );
      }
    } else {
      console.log('User not found, creating new user.'); // Debug: Log when user is not found

      // User does not exist, create a new user
      const hashedPassword = await bcrypt.hash(password, 10);

      await pool.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword]);

      return new Response(
        JSON.stringify({ message: 'User registered and logged in successfully' }),
        { status: 201 }
      );
    }
  } catch (error) {
    console.error('Error during login or registration:', error);
    return new Response(
      JSON.stringify({ error: 'Internal Server Error' }),
      { status: 500 }
    );
  }
}
