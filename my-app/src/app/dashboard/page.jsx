// src/app/dashboard/index.jsx
import Layout from './components/Layout';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <Layout>
      <div className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to the Dashboard</h1>
        <p className="text-lg text-gray-600 mb-8">
          Manage your employees, patients, and settings here.
        </p>

        {/* Cards Grid with Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-200">
            <h2 className="text-xl font-medium text-gray-800">Employees Overview</h2>
            <p className="text-gray-600 mt-2">Manage and view employee data.</p>
            <Link href="/dashboard/employees" className="text-emerald-500 hover:underline mt-4 block">
              View Employees
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-200">
            <h2 className="text-xl font-medium text-gray-800">Patients Overview</h2>
            <p className="text-gray-600 mt-2">Manage and view patient data.</p>
            <Link href="/dashboard/patients" className="text-emerald-500 hover:underline mt-4 block">
              View Patients
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-200">
            <h2 className="text-xl font-medium text-gray-800">Settings</h2>
            <p className="text-gray-600 mt-2">Customize the dashboard settings.</p>
            <Link href="/dashboard/settings" className="text-emerald-500 hover:underline mt-4 block">
              View Settings
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
