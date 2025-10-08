import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home, { loader as homeLoader } from './components/Home/Home';
import Apps, { loader as appsLoader } from './components/Apps/Apps';
import Installation from './components/Installation/Installation';
import AppDetails, { loader as appDetailsLoader } from './components/AppDetails/AppDetails';
import MyInstallations from './components/MyInstallations/MyInstallations';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  const [installedApps, setInstalledApps] = useState(() => {
    const storedApps = localStorage.getItem('installedApps');
    return storedApps ? JSON.parse(storedApps) : [];
  });

  useEffect(() => {
    localStorage.setItem('installedApps', JSON.stringify(installedApps));
  }, [installedApps]);

  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
          loader: homeLoader,
        },
        {
          path: '/apps',
          element: <Apps />,
          loader: appsLoader,
        },
        {
          path: '/my-installations',
          element: <Installation installedApps={installedApps} setInstalledApps={setInstalledApps} />,
        },
        {
          path: '/apps/:id',
          element: <AppDetails installedApps={installedApps} setInstalledApps={setInstalledApps} />,
          loader: appDetailsLoader,
        },
      ],
    },
  ], {
    hydrationData: { fallback: <div>Loading...</div> },
  });

  return <RouterProvider router={router} />;
}

export default App;