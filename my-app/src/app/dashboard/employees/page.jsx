// src/app/dashboard/employees/page.jsx (for example)

'use client'; // Ensure this is a Client Component
import Layout from '../components/Layout'; // Import Layout
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const EmployeesListPage = () => {
  const [employees, setEmployees] = useState([]);
  const router = useRouter();

  // Fetch employees when the component mounts
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await fetch('/api/employees');
        const data = await res.json();
        if (res.ok) {
          setEmployees(data);
        } else {
          console.error('Failed to fetch employees:', data);
        }
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-3xl font-semibold mb-4">Employees List</h1>

        {/* Button to add a new employee */}
        <div className="mb-4 text-right">
          <button
            onClick={() => router.push('/dashboard/employees/new')}
            className="bg-emerald-500 text-white py-2 px-6 rounded-lg font-semibold shadow-md hover:bg-emerald-600"
          >
            Add New Employee
          </button>
        </div>

        {/* Employee table */}
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-emerald-500 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Employee Name</th>
                <th className="py-3 px-6 text-left">Position</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id} className="border-b">
                  <td className="py-3 px-6">{employee.name}</td>
                  <td className="py-3 px-6">{employee.position}</td>
                  <td className="py-3 px-6">
                    <button
                      onClick={() => alert(`Editing ${employee.name}`)}
                      className="text-emerald-500 hover:text-emerald-700 mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => alert(`Deleting ${employee.name}`)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default EmployeesListPage;
