import React from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export async function loader({ params }) {
  const response = await fetch('/apps.json');
  if (!response.ok) throw new Error('Failed to fetch apps');
  const apps = await response.json();
  const app = apps.find((app) => app.id === parseInt(params.id));
  return app || null;
}
// BugFix .1
const AppDetails = ({ installedApps, setInstalledApps }) => {
  const { id } = useParams();
  const app = useLoaderData();

  if (!app) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">App Not Found</h1>
        <p className="text-lg text-gray-600">
          The app you are looking for does not exist. Try browsing our{' '}
          <a href="/apps" className="link link-primary">
            Apps
          </a>{' '}
          page!
        </p>
      </div>
    );
  }

  const handleInstall = () => {
    if (!installedApps.some((installedApp) => installedApp.id === app.id)) {
      const updatedApps = [...installedApps, app];
      setInstalledApps(updatedApps);
      localStorage.setItem('installedApps', JSON.stringify(updatedApps));
      toast.success(`Installed ${app.title} successfully!`);
    } else {
      toast.info(`${app.title} is already installed!`);
    }
  };

  
  const sortedRatings = [...app.ratings].sort((a, b) => {
    const order = { '5 star': 1, '4 star': 2, '3 star': 3, '2 star': 4, '1 star': 5 };
    return order[a.name] - order[b.name];
  });

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="card bg-white shadow-lg rounded-lg p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={app.image}
            className="w-full md:w-1/3 object-cover rounded-lg"
          />
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-gray-800">{app.title}</h1>
            <p className="text-sm text-gray-500 mt-1">
                        Developed by: <span className="text-[#9F62F2]">{app.companyName}</span>
            </p>
            <hr className="my-4" />
            <div className="space-y-4">
                  <div className="flex justify-around items-center">
                    <div className="flex flex-col items-center w-1/3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 14 14">
                        <path fill="none" stroke="#00d38b" stroke-linecap="round" stroke-linejoin="round" d="M.819 10.397v.951A1.9 1.9 0 0 0 2.72 13.25h8.558a1.9 1.9 0 0 0 1.902-1.902v-.95M10.117 6.17C9.494 7.415 8.247 8.662 7 9.286c-1.247-.624-2.494-1.87-3.118-3.118m3.117-4.856v7.94" stroke-width="1"/>
                      </svg>
                    </div>
                    <div className="flex flex-col items-center w-1/3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 36 36">
                        <path fill="#ffac33" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.97 1.97 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.98 1.98 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.96 1.96 0 0 1-1.16.379"/>
                      </svg>
                    </div>
                    <div className="flex flex-col items-center w-1/3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                        <g fill="none" stroke="#b95fec" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                          <path d="M6.75 13.55v-4.9h.7A3.5 3.5 0 0 0 11 5.15a1.4 1.4 0 0 1 1.4-1.4a1.9 1.9 0 0 1 1.9 1.9v.9c0 .41.27.7.9.7a2.1 2.1 0 0 1 2.09 2.31L17 11.73a2.8 2.8 0 0 1-2.78 2.52h-2.9a9.3 9.3 0 0 1-2.46-.59a3 3 0 0 0-.77-.11z"/>
                          <path d="M21.75 18.75h-10.5l-6 4.5v-4.5h-3a1.5 1.5 0 0 1-1.5-1.5v-15a1.5 1.5 0 0 1 1.5-1.5h19.5a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1-1.5 1.5"/>
                        </g>
                      </svg>
                    </div>
                  </div>

                  
                  <div className="flex justify-around items-center">
                    <div className="flex flex-col items-center w-1/3">
                      <p className="text-gray-700 text-center">Downloads</p>
                    </div>
                    <div className="flex flex-col items-center w-1/3">
                      <p className="text-gray-700 text-center">Rating</p>
                    </div>
                    <div className="flex flex-col items-center w-1/3">
                      <p className="text-gray-700 text-center">Reviews</p>
                    </div>
                  </div>

                  
                  <div className="flex justify-around items-center">
                    <div className="flex flex-col items-center w-1/3">
                      <p className="text-black text-center font-extrabold text-[40px]">
                        {`${app.downloads / 1000000} M`}
                      </p>
                    </div>
                    <div className="flex flex-col items-center w-1/3">
                      <p className="text-black text-center font-extrabold text-[40px]">{app?.ratingAvg || 'N/A'}</p>
                    </div>
                    <div className="flex flex-col items-center w-1/3">
                      <p className="text-black text-center font-extrabold text-[40px]">
                        {(app?.reviews || 0).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
            <button
              className={`btn btn-success w-[240px] m-20 mt-20 ${
                installedApps.some((installedApp) => installedApp.id === app.id) ? 'btn-disabled' : ''
              }`}
              onClick={handleInstall}
            >
              {installedApps.some((installedApp) => installedApp.id === app.id)
                ? 'Installed'
                : `Install (${app.size} MB)`}
            </button>
          </div>
        </div>
        <hr className="my-6" />
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ratings</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={sortedRatings} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" />
              <Tooltip />
              <Bar dataKey="count" fill="#45B7D1" barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Description</h2>
          <p className="text-lg text-gray-600">{app.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;