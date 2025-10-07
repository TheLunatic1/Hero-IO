import React from 'react';

export async function loader() {
  const response = await fetch('/apps.json');
  if (!response.ok) throw new Error('Failed to fetch apps');
  return response.json();
}

const Apps = () => {
  return (
    <div>
      <h1>All Apps</h1>
      // Implement title, search, sort, app cards
    </div>
  );
};

export default Apps;