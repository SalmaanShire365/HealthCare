'use client'; // Ensure this is a Client Component
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout'; // Adjust the import according to your file structure

const PatientsPage = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('/api/patients');
        if (!response.ok) {
          throw new Error('Failed to fetch patients');
        }
        const data = await response.json();
        setPatients(data);
      } catch (err) {
        setError(err.message); // Set the error message to be displayed
      } finally {
        setLoading(false); // Stop loading when the request is done
      }
    };

    fetchPatients();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-3xl font-semibold mb-4">Patients</h1>
        <Link
          href="/dashboard/patients/new"
          className="bg-emerald-500 text-white p-2 rounded-lg mb-4"
        >
          Add New Patient
        </Link>

        <div className="mt-6">
          {patients.length === 0 ? (
            <p>No patients found.</p>
          ) : (
            <table className="min-w-full table-auto bg-white border border-gray-300 rounded-lg shadow-md">
              <thead className="bg-emerald-500 text-white">
                <tr>
                  <th className="py-2 px-4 border-b text-left">ID</th>
                  <th className="py-2 px-4 border-b text-left">Name</th>
                  <th className="py-2 px-4 border-b text-left">Condition</th>
                  <th className="py-2 px-4 border-b text-left">Created At</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient) => (
                  <tr key={patient.id} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b">{patient.id}</td>
                    <td className="py-2 px-4 border-b">{patient.name}</td>
                    <td className="py-2 px-4 border-b">{patient.condition}</td>
                    <td className="py-2 px-4 border-b">{patient.created_at}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default PatientsPage;
