// src/pages/api/patients.js
import { pool } from '../../lib/db'; // Import the MySQL connection pool

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'GET':
        const [patients] = await pool.query('SELECT * FROM patients');
        return res.status(200).json(patients); // Return patients data in the response

      case 'POST':
        const { name, condition } = req.body;
        if (!name || !condition) {
          return res.status(400).json({ error: 'Name and condition are required' });
        }

        // Fix the issue with reserved keyword `condition`
        const [insertResult] = await pool.query(
          'INSERT INTO patients (name, `condition`) VALUES (?, ?)',  // Use backticks around `condition`
          [name, condition]
        );
        return res.status(201).json({
          message: 'Patient added successfully',
          id: insertResult.insertId,
        });

      case 'DELETE':
        const { id } = req.query;
        await pool.query('DELETE FROM patients WHERE id = ?', [id]);
        return res.status(200).json({ message: 'Patient deleted successfully' });

      default:
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (err) {
    console.error('Database error:', err); // Log detailed error
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
