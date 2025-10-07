import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

export async function loader() {
  const response = await fetch('/apps.json');
  if (!response.ok) throw new Error('Failed to fetch apps');
  return response.json();
}

const Apps = () => {
  const apps = useLoaderData();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('title');
  const [filteredApps, setFilteredApps] = useState([]);

  useEffect(() => {
    let result = [...apps];

    // Filter
    if (searchTerm) {
      result = result.filter(app =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.companyName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort
    result.sort((a, b) => {
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      if (sortBy === 'rating') return b.ratingAvg - a.ratingAvg;
      if (sortBy === 'downloads') return b.downloads - a.downloads;
      return 0;
    });

    setFilteredApps(result);
  }, [searchTerm, sortBy, apps]);

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">All Apps</h1>
      {/* Apps Found and Search/Sort */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <p className="text-lg text-gray-600">
          {filteredApps.length} Apps Found
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Search by title or company..."
            className="input input-bordered w-full md:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="select select-bordered w-full md:w-48"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="title">Sort by Title</option>
            <option value="rating">Sort by Rating</option>
            <option value="downloads">Sort by Downloads</option>
          </select>
        </div>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredApps.map((app) => (
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;