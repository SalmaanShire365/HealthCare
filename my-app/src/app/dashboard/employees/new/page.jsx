'use client'; // Ensure this is a Client Component
import Layout from '../../components/Layout'; // Import Layout
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const NewEmployeePage = () => {
  const [name, setName] = useState(''); // State for employee name
  const [position, setPosition] = useState(''); // State for employee position
  const [loading, setLoading] = useState(false); // Loading state for form submission
  const [error, setError] = useState(null); // Error state to display any error messages
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error before submitting

    // Validate that the name and position are provided
    if (!name || !position) {
      setError('Please provide both name and position');
      return;
    }

    setLoading(true); // Set loading state to true

    // Send POST request to the API to create a new employee
    try {
      const res = await fetch('/api/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, position }),
      });

      if (res.ok) {
        // Show success and redirect to the employee list page after a short delay
        setTimeout(() => {
          router.push('/dashboard/employees');
        }, 500); // Delay to show any success message before redirect
      } else {
        const data = await res.json();
        setError(data.error || 'Failed to add employee');
      }
    } catch (error) {
      console.error('Error adding employee:', error);
      setError('An error occurred while adding the employee');
    } finally {
      setLoading(false); // Set loading state to false after the request is finished
    }
  };

  return (
    <Layout>
      <div className="p-6 max-w-xl mx-auto bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-6">Add New Employee</h1>

        {/* Display error message if there is an error */}
        {error && (
          <div className="text-red-500 text-sm mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Employee Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label htmlFor="position" className="block text-sm font-medium text-gray-700">
              Position
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading} // Disable button when loading
              className="bg-emerald-500 text-white py-2 px-6 rounded-lg font-semibold shadow-md hover:bg-emerald-600 focus:ring-4 focus:ring-emerald-300 disabled:bg-gray-300"
            >
              {loading ? 'Adding Employee...' : 'Add Employee'}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default NewEmployeePage;
