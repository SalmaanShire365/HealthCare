const Header = () => {
    return (
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Management Datatable</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">Template User</span>
          <button className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
        </div>
      </header>
    );
  };
  
  export default Header;
  
