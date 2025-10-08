import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Installation = ({ installedApps = [], setInstalledApps }) => {
  const navigate = useNavigate();

  useEffect(() => {
    
    const storedApps = localStorage.getItem('installedApps');
    if (storedApps && installedApps.length === 0) {
      setInstalledApps(JSON.parse(storedApps));
    }
  }, [installedApps.length, setInstalledApps]); 

  const handleUninstall = (appId) => {
    const updatedApps = installedApps.filter(app => app.id !== appId);
    setInstalledApps(updatedApps);
    localStorage.setItem('installedApps', JSON.stringify(updatedApps));
    toast.success(`Uninstalled ${installedApps.find(app => app.id === appId)?.title} successfully!`);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">My Installations</h1>
      {installedApps.length === 0 ? (
        <p className="text-center text-gray-600">No apps installed yet. Install some from the <a href="/apps" className="link link-primary">Apps</a> page!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {installedApps.map((app) => (
            <div key={app.id} className="card bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow">
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-700">{app.title}</h3>
                <p className="text-sm text-gray-500">{app.companyName}</p>
                <p className="text-sm text-gray-600 mt-2">{app.description.substring(0, 50)}...</p>
                <p className="text-sm text-yellow-600 mt-2">★ {app.ratingAvg}</p>
                <button
                  className="btn btn-error mt-4 w-full"
                  onClick={() => handleUninstall(app.id)}
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Installation;