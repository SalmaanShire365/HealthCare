import bcrypt from 'bcryptjs';
import client from '../../../lib/db';

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: 'Email and password are required' }),
        { status: 400 }
      );
    }

    const result = await client.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    console.log('User from DB:', user); // Log the user data
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      console.log('Password valid:', isPasswordValid); // Log the result of password comparison
      if (isPasswordValid) {
        return new Response(
          JSON.stringify({ message: 'Login successful' }),
          { status: 200 }
        );
      }
    }
    
    return new Response(
      JSON.stringify({ error: 'Invalid credentials' }),
      { status: 401 }
    );
  } catch (error) {
    console.error('Error during login:', error);
    return new Response(
      JSON.stringify({ error: 'Internal Server Error' }),
      { status: 500 }
    );
  }
}
