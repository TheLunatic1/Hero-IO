import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppCard from '../AppCard/AppCard';

export async function loader() {
  const response = await fetch('/apps.json');
  if (!response.ok) throw new Error('Failed to fetch apps');
  return response.json();
}

const Apps = () => {
  const apps = useLoaderData();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('low-high');
  const [filteredApps, setFilteredApps] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    let result = [...apps];

    // Filter
    if (searchTerm) {
      result = result.filter((app) =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort
    result.sort((a, b) => {
      if (sortBy === 'high-low') return a.downloads - b.downloads;
      if (sortBy === 'low-high') return b.downloads - a.downloads;
      return 0;
    });

    setFilteredApps(result);
    setTimeout(() => setIsLoading(false), 500);
  }, [searchTerm, sortBy, apps]);

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Our All Applications</h1>
      <h1 className="text-2xl text-gray-800 text-center mb-8">Explore All Apps on the Market developed by us. We code for Millions</h1>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <p className="text-lg text-gray-600">{filteredApps.length} Apps Found</p>
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
            <option value="high-low">Sort by Downloads: Low to High</option>
            <option value="low-high">Sort by Downloads: High to Low</option>
          </select>
        </div>
      </div>
      {isLoading ? (
        <div className="text-center">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : filteredApps.length === 0 ? (
        <p className="text-center text-gray-600">No Apps Found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;