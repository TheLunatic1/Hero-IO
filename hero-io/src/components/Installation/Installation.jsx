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



//<div className="flex justify-between items-center mt-2">
//                   <span className="badge bg-green-100 text-green-600 text-xs"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill="none" stroke="#00d38b" stroke-linecap="round" stroke-linejoin="round" d="M.819 10.397v.951A1.9 1.9 0 0 0 2.72 13.25h8.558a1.9 1.9 0 0 0 1.902-1.902v-.95M10.117 6.17C9.494 7.415 8.247 8.662 7 9.286c-1.247-.624-2.494-1.87-3.118-3.118m3.117-4.856v7.94" stroke-width="1"/></svg> {`${app.downloads / 100000} M`}</span>
//                   <span className="badge bg-yellow-100 text-yellow-600 text-xs"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 36 36"><path fill="#ffac33" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.97 1.97 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.98 1.98 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.96 1.96 0 0 1-1.16.379"/></svg> {app.ratingAvg}</span>
//                 </div>