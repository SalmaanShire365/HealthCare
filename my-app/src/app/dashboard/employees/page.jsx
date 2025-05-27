// src/pages/dashboard/employees/index.jsx (or wherever)
'use client';
import Layout from '../components/Layout.jsx';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function EmployeesListPage() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/employees')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(setEmployees)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Layout><p>Loading…</p></Layout>;
  if (error)   return <Layout><p>Error: {error}</p></Layout>;

  return (
    <Layout>
      <h1 className="text-3xl font-semibold mb-4">Employees List</h1>
      <button
        onClick={() => router.push('/dashboard/employees/new')}
        className="bg-emerald-500 text-white px-4 py-2 rounded"
      >
        Add New
      </button>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full table-auto">
          <thead className="bg-emerald-500 text-white">
            <tr>
              <th>ID</th>
              <th>First&nbsp;Name</th>
              <th>Last&nbsp;Name</th>
              <th>DOB</th>
              <th>Login</th>
              <th>Mobile</th>
              <th>Address</th>
              <th>Aggregator</th>
              <th>OIG</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(emp => (
              <tr key={emp.id} className="border-b hover:bg-gray-50">
                <td>{emp.id}</td>
                <td>{emp.firstName}</td>
                <td>{emp.lastName}</td>
                <td>{emp.dob}</td>
                <td>{emp.loginName}</td>
                <td>{emp.mobile}</td>
                <td>{emp.address}</td>
                <td>{emp.aggregator ?? '-'}</td>
                <td>{emp.oig       ?? '-'}</td>
                <td>
                  <button onClick={() => router.push(`/dashboard/employees/${emp.id}/edit`)} className="text-emerald-500 mr-3">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(emp.id)} className="text-red-500">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

