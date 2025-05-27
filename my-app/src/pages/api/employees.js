// src/pages/api/employees.js
import { pool } from '@/lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const [rows] = await pool.query(`
        SELECT
          id,
          firstName,
          lastName,
          dob,
          loginName,
          mobile,
          address,
          aggregator,
          oig
        FROM employees
      `);
      return res.status(200).json(rows);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to fetch employees' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}


