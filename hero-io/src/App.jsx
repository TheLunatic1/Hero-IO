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
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const storedApps = localStorage.getItem('installedApps');
    if (storedApps) {
      setInstalledApps(JSON.parse(storedApps));
    }
  }, []);

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
          path: '/installation',
          element: <Installation />,
        },
        {
          path: '/apps/:id',
          element: <AppDetails installedApps={installedApps} setInstalledApps={setInstalledApps} />,
          loader: appDetailsLoader,
        },
        {
          path: '/my-installations',
          element: <MyInstallations installedApps={installedApps} setInstalledApps={setInstalledApps} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;