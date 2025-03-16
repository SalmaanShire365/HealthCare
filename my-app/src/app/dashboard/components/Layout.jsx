// src/app/dashboard/components/Layout.jsx
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col h-screen">
        {/* Header (fixed at the top) */}
        <Header />

        {/* Main content with padding to prevent overlap with header */}
        <main className="flex-1 bg-gray-100 p-6 pt-20 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
