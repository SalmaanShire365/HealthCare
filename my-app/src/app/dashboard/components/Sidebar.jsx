'use client';

import { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className={`bg-emerald-500 text-white w-48 h-screen p-4 ${isOpen ? 'block' : 'hidden'} md:block transition-all duration-300`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden"
        aria-label="Toggle Sidebar"
      >
        ☰
      </button>
      <h1 className="text-lg font-semibold mb-6 text-center md:text-left">Dashboard</h1>
      <ul className="space-y-4">
        <li>
          <Link href="/dashboard/employees/">Employees</Link>
        </li>
        <li>
          <Link href="/dashboard/patients">Patients</Link>
        </li>
        <li>
          <Link href="/dashboard/settings">Settings</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
