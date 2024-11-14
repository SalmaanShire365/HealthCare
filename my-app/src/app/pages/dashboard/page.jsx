'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { name: 'Jan', patients: 30 },
  { name: 'Feb', patients: 50 },
  { name: 'Mar', patients: 45 },
  { name: 'Apr', patients: 70 },
  { name: 'May', patients: 90 },
  { name: 'Jun', patients: 60 },
];

export default function EHRDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Electronic Health Records Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Total Patients</h2>
          <p className="text-3xl font-bold text-indigo-600">120</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">New Admissions</h2>
          <p className="text-3xl font-bold text-green-600">15</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Appointments Today</h2>
          <p className="text-3xl font-bold text-yellow-600">8</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Patient Admissions Over Time</h2>
        <LineChart width={600} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Line type="monotone" dataKey="patients" stroke="#4f46e5" />
        </LineChart>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Patient Records</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Name</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Age</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Condition</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Array.from({ length: 5 }, (_, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 whitespace-nowrap">Patient {index + 1}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{20 + index}</td>
                  <td className="px-4 py-2 whitespace-nowrap">Condition {index + 1}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${index % 2 === 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {index % 2 === 0 ? 'Stable' : 'Critical'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
          <ul className="divide-y divide-gray-200">
            {Array.from({ length: 5 }, (_, index) => (
              <li key={index} className="flex justify-between py-3">
                <div>
                  <p className="text-sm font-medium">Appointment with Doctor {index + 1}</p>
                  <p className="text-sm text-gray-500">Date: {new Date().toLocaleDateString()}</p>
                </div>
                <span className="text-indigo-600 font-semibold">Details</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
