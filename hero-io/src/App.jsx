import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home, { loader as homeLoader } from './components/Home/Home';
import Apps, { loader as appsLoader } from './components/Apps/Apps';
import Installation from './components/Installation/Installation';
import AppDetails, { loader as appDetailsLoader } from './components/AppDetails/AppDetails';
import MyInstallations from './components/MyInstallations/MyInstallations';
import ErrorPage from './components/ErrorPage/ErrorPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      path: '/',
      element: (
        <>
          <Navbar />
          <Home />
          <Footer />
          <ToastContainer />
        </>
      ),
      loader: homeLoader,
      errorElement: <ErrorPage />,
    },
    {
      path: '/apps',
      element: (
        <>
          <Navbar />
          <Apps />
          <Footer />
          <ToastContainer />
        </>
      ),
      loader: appsLoader,
      errorElement: <ErrorPage />,
    },
    {
      path: '/installation',
      element: (
        <>
          <Navbar />
          <Installation />
          <Footer />
          <ToastContainer />
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: '/apps/:id',
      element: (
        <>
          <Navbar />
          <AppDetails installedApps={installedApps} setInstalledApps={setInstalledApps} />
          <Footer />
          <ToastContainer />
        </>
      ),
      loader: appDetailsLoader,
      errorElement: <ErrorPage />,
    },
    {
      path: '/my-installations',
      element: (
        <>
          <Navbar />
          <MyInstallations installedApps={installedApps} setInstalledApps={setInstalledApps} />
          <Footer />
          <ToastContainer />
        </>
      ),
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;