'use client';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const EmployeesListPage = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true); // New state to track loading status
  const [error, setError] = useState(null); // New state to handle errors
  const router = useRouter();

  // Fetch employees when the component mounts
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await fetch('/api/employees'); // Fetch from the API endpoint
        if (!res.ok) {
          throw new Error('Failed to fetch employees');
        }
        const data = await res.json(); // Parse JSON data
        setEmployees(data); // Update the state with employee data
      } catch (error) {
        setError(error.message); // Handle any errors
      } finally {
        setLoading(false); // Set loading to false after data fetching is complete
      }
    };

    fetchEmployees(); // Call the fetch function when component mounts
  }, []);

  // If data is still loading, show a loading message
  if (loading) {
    return <Layout><div>Loading...</div></Layout>;
  }

  // If there is an error, display the error message
  if (error) {
    return <Layout><div>Error: {error}</div></Layout>;
  }

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
                <th className="py-3 px-6 text-left">ID</th>
                <th className="py-3 px-6 text-left">First Name</th>
                <th className="py-3 px-6 text-left">Last Name</th>
                <th className="py-3 px-6 text-left">Date of Birth</th>
                <th className="py-3 px-6 text-left">Login Name</th>
                <th className="py-3 px-6 text-left">Mobile #</th>
                <th className="py-3 px-6 text-left">Address</th>
                <th className="py-3 px-6 text-left">Aggregator</th>
                <th className="py-3 px-6 text-left">OIG</th>
                <th className="py-3 px-6 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-6">{employee.id}</td>
                  <td className="py-3 px-6">{employee.first_name}</td>
                  <td className="py-3 px-6">{employee.last_name}</td>
                  <td className="py-3 px-6">{employee.dob}</td>
                  <td className="py-3 px-6">{employee.login_name}</td>
                  <td className="py-3 px-6">{employee.mobile}</td>
                  <td className="py-3 px-6">{employee.address}</td>
                  <td className="py-3 px-6">{employee.aggregator || '-'}</td>
                  <td className="py-3 px-6">{employee.oig || '-'}</td>
                  <td className="py-3 px-6">
                    <button
                      onClick={() => router.push(`/dashboard/employees/${employee.id}/edit`)}
                      className="text-emerald-500 hover:text-emerald-700 mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => alert(`Deleting ${employee.first_name} ${employee.last_name}`)}
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

