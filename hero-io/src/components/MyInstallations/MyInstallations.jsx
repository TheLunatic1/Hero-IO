import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AppCard from '../AppCard/AppCard.jsx';

const MyInstallations = ({ installedApps = [], setInstalledApps }) => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState('low-high');
  const [sortedApps, setSortedApps] = useState(installedApps);

  useEffect(() => {
    const storedApps = localStorage.getItem('installedApps');
    if (storedApps && installedApps.length === 0) {
      setInstalledApps(JSON.parse(storedApps));
    }
  }, [installedApps.length, setInstalledApps]);

  useEffect(() => {
    let result = [...installedApps];
    result.sort((a, b) => {
      if (sortBy === 'high-low') return a.downloads - b.downloads;
      if (sortBy === 'low-high') return b.downloads - a.downloads;
      return 0;
    });
    setSortedApps(result);
  }, [sortBy, installedApps]);

  const handleUninstall = (appId) => {
    const updatedApps = installedApps.filter((app) => app.id !== appId);
    setInstalledApps(updatedApps);
    localStorage.setItem('installedApps', JSON.stringify(updatedApps));
    toast.success(`Uninstalled ${installedApps.find((app) => app.id === appId)?.title} successfully!`);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Your Installed Apps</h1>
      <h1 className="text-2xl  text-gray-800 text-center mb-8">Explore All Trending Apps on the Market developed by us</h1>
      {installedApps.length > 0 && (
        <div className="flex justify-end mb-6">
          <select
            className="select select-bordered w-full md:w-48"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="high-low">Sort by Downloads: Low to High</option>
            <option value="low-high">Sort by Downloads: High to Low</option>
          </select>
        </div>
      )}
      {installedApps.length === 0 ? (
        <p className="text-center text-gray-600">
          No apps installed yet. Install some from the{' '}
          <a href="/apps" className="link link-primary">
            Apps
          </a>{' '}
          page!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sortedApps.map((app) => (
            <div key={app.id} className="card bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow">
              <AppCard app={app} />
              <button
                className="btn btn-error mt-4 w-full"
                onClick={() => handleUninstall(app.id)}
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyInstallations;