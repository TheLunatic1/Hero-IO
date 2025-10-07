import React from 'react';

export async function loader() {
  // loader 
  return null;
}

const Home = () => {
  return (
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
  );
};

export default Home;