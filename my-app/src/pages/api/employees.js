// src/pages/api/employees.js
import { pool } from '../../lib/db'; // Import the database connection

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      try {
        const [employees] = await pool.query('SELECT * FROM employees');
        res.status(200).json(employees);  // Return the list of employees
      } catch (err) {
        console.error('Error fetching employees:', err);
        res.status(500).json({ error: 'Failed to fetch employees' });
      }
      break;

    case 'POST':
      const { name, position } = req.body;
      if (!name || !position) {
        return res.status(400).json({ error: 'Name and position are required' });
      }
      try {
        const result = await pool.query(
          'INSERT INTO employees (name, position) VALUES (?, ?)',
          [name, position]
        );
        res.status(201).json({ message: 'Employee added', id: result[0].insertId });
      } catch (err) {
        console.error('Error adding employee:', err);
        res.status(500).json({ error: 'Failed to add employee' });
      }
      break;

    default:
      res.status(405).json({ error: 'Method not allowed' });
      break;
  }
}

