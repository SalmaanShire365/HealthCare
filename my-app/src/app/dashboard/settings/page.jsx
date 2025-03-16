// src/app/dashboard/settings.jsx
import Layout from '../components/Layout';

const SettingsPage = () => {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-3xl font-semibold mb-4">Settings</h1>
        
        {/* Settings Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Change Theme</label>
            <select className="mt-2 p-2 border border-gray-300 rounded-md">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Notification Preferences</label>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Receive email notifications</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Language</label>
            <select className="mt-2 p-2 border border-gray-300 rounded-md">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>

          <div>
            <button type="submit" className="bg-emerald-500 text-white p-2 rounded-lg">
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default SettingsPage;
