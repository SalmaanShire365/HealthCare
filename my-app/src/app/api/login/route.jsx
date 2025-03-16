import bcrypt from 'bcryptjs';
import { getConnection } from '../../../lib/db';  // Import the getConnection function
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    // Parse the request body
    const { email, password } = await req.json();

    // Check for missing email or password
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    // Get a connection from the pool
    const connection = await getConnection();

    // Query the database for the user by email
    const [rows] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);

    // Log the result to check for errors
    console.log('Query result:', rows);

    // If no user found, return an error
    if (rows.length === 0) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Access the first user record from the result
    const user = rows[0];

    // Validate the password using bcrypt
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      return NextResponse.json({ message: 'Login successful' }, { status: 200 });
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
