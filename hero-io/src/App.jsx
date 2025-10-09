import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home, { loader as homeLoader } from './components/Home/Home';
import Apps, { loader as appsLoader } from './components/Apps/Apps';
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

  const router = createBrowserRouter(
    [
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
            element: <MyInstallations installedApps={installedApps} setInstalledApps={setInstalledApps} />,
          },
          {
            path: '/apps/:id',
            element: <AppDetails installedApps={installedApps} setInstalledApps={setInstalledApps} />,
            loader: appDetailsLoader,
          },
        ],
      },
    ],
    {
      hydrationData: {
        fallback: (
          <div className="text-center py-12">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ),
      },
    }
  );

  return <RouterProvider router={router} />;
}

export default App;