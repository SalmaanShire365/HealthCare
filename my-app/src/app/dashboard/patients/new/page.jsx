'use client'; // Ensure this is a Client Component
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../../components/Layout';

const NewPatientPage = () => {
  const [name, setName] = useState('');
  const [condition, setCondition] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/patients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, condition }),
      });
      if (response.ok) {
        router.push('/dashboard/patients');
      } else {
        const data = await response.json();
        alert(data.error || 'Failed to add patient');
      }
    } catch (error) {
      alert('Error adding patient');
    }
  };

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-3xl font-semibold mb-6">Add New Patient</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Patient Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="condition" className="block text-sm font-medium text-gray-700">
              Condition
            </label>
            <input
              type="text"
              id="condition"
              name="condition"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="bg-emerald-500 text-white py-2 px-6 rounded-lg font-semibold shadow-md hover:bg-emerald-600"
          >
            Add Patient
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default NewPatientPage;
