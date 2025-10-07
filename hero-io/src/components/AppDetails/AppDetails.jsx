import React from 'react';
import { useParams } from 'react-router-dom';

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
  // Use loader data here later
  return (
    <div>
      <h1>App Details</h1>
      // Implement app info, chart, description
    </div>
  );
};

export default AppDetails;