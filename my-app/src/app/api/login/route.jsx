// app/api/login/route.js (or route.jsx)

import bcrypt from 'bcryptjs';
import client from '../../../lib/db';  // Your database connection file
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    // Parse the request body
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    // Query the database for the user by email
    const result = await client.query('SELECT * FROM users WHERE email = ?', [email]);

    // Log the result to check for errors
    console.log('Query result:', result);

    // If no user found, return an error
    if (!result || result.length === 0) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Access the first user record from the result
    const user = result[0];

    // Validate password
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
