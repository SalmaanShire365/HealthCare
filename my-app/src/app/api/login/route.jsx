// src/app/api/login/route.jsx
import bcrypt from 'bcryptjs';
import client from '../../../lib/db'; // Adjust the import path as needed

export async function POST(req) {
  try {
    // Parse JSON request body
    const { email, password } = await req.json();

    // Validate inputs
    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: 'Email and password are required' }),
        { status: 400 }
      );
    }

    // Query the database for the user
    const result = await client.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    // Check if user exists and password is correct
    if (user && await bcrypt.compare(password, user.password)) {
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
  } catch (error) {
    console.error('Error during login:', error); // Log the error to the server console
    return new Response(
      JSON.stringify({ error: 'Internal Server Error' }),
      { status: 500 }
    );
  }
}
