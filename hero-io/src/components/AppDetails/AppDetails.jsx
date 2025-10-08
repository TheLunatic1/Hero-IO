import React from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

export async function loader({ params }) {
  const response = await fetch('/apps.json');
  if (!response.ok) throw new Error('Failed to fetch apps');
  const apps = await response.json();
  const app = apps.find(app => app.id === parseInt(params.id));
  if (!app) throw new Error('App not found');
  return app;
}

const AppDetails = ({ installedApps, setInstalledApps }) => {
  const { id } = useParams();
  const app = useLoaderData();

  const handleInstall = () => {
    if (!installedApps.some(installedApp => installedApp.id === app.id)) {
      const updatedApps = [...installedApps, app];
      setInstalledApps(updatedApps);
      localStorage.setItem('installedApps', JSON.stringify(updatedApps));
      toast.success(`Installed ${app.title} successfully!`);
    } else {
      toast.info(`${app.title} is already installed!`);
    }
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="card bg-white shadow-lg rounded-lg p-6">
        <img
          src={app.image}
          alt={app.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800">{app.title}</h1>
          <p className="text-sm text-gray-500 mt-2">{app.companyName}</p>
          <p className="text-lg text-gray-600 mt-4">{app.description}</p>
          <div className="mt-6">
            <p className="text-gray-700">Size: {app.size} MB</p>
            <p className="text-gray-700">Reviews: {app.reviews.toLocaleString()}</p>
            <p className="text-gray-700">Rating: ★ {app.ratingAvg}</p>
            <p className="text-gray-700">Downloads: {app.downloads.toLocaleString()}</p>
          </div>
          <button
            className="btn btn-success mt-6 w-full"
            onClick={handleInstall}
          >
            Install
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;