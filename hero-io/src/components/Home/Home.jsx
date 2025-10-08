import React from 'react';
import { Route, useLoaderData } from 'react-router-dom';


export async function loader() {
  const response = await fetch('/apps.json');
  if (!response.ok) throw new Error('Failed to fetch apps');
  const apps = await response.json();
  return apps.slice(0, 8);
}

const Home = () => {
  const apps = useLoaderData();

  return (
    <>
      {/* Banner Section */}
      <div className="hero min-h-screen bg-gradient-to-r from-blue-100 to-green-100">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-gray-800">We Build Productive Apps</h1>
            <p className="py-6 text-lg text-gray-600">
              At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
            <div className="space-x-4">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary bg-blue-600 border-none hover:bg-blue-700"
              >
                App Store
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary bg-green-600 border-none hover:bg-green-700"
              >
                Play Store
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Top Apps Section */}
      <div className="container mx-auto py-12 px-4 bg-white">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Top Apps</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {apps.map((app) => (
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;