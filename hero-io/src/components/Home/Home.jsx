import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import AppCard from '../AppCard/AppCard.jsx';
import hero from '../../assets/hero.png';

export async function loader() {
  const response = await fetch('/apps.json');
  if (!response.ok) throw new Error('Failed to fetch apps');
  const apps = await response.json();
  return apps.slice(0, 8);
}

const Home = () => {
  const apps = useLoaderData();
  const navigate = useNavigate();

  return (
    <>
      {/* Banner */}
      <div className="hero ">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-gray-800">We Build <br /> <span className='g-linear-35 bg-gradient-to-r from-violet-700 to-purple-500 bg-clip-text text-transparent'>Productive</span> Apps</h1>
            <p className="py-6 text-lg text-gray-600">
              At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
            <div className="space-x-4">
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                className="btn btn-primary shadow-2xl text-black bg-white border-gray-300 hover:bg-blue-700"
              ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><defs><linearGradient id="SVG1vlmueNw" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#17c9fb"/><stop offset="100%" stop-color="#1a74e8"/></linearGradient></defs><path fill="url(#SVG1vlmueNw)" d="M56.064 0h143.872C230.9 0 256 25.1 256 56.064v143.872C256 230.9 230.9 256 199.936 256H56.064C25.1 256 0 230.9 0 199.936V56.064C0 25.1 25.1 0 56.064 0"/><path fill="#fff" d="m82.042 185.81l.024.008l-8.753 15.16c-3.195 5.534-10.271 7.43-15.805 4.235s-7.43-10.271-4.235-15.805l6.448-11.168l.619-1.072c1.105-1.588 3.832-4.33 9.287-3.814c0 0 12.837 1.393 13.766 8.065c0 0 .126 2.195-1.351 4.391m124.143-38.72h-27.294c-1.859-.125-2.67-.789-2.99-1.175l-.02-.035l-29.217-50.606l-.038.025l-1.752-2.512c-2.872-4.392-7.432 6.84-7.432 6.84c-5.445 12.516.773 26.745 2.94 31.046l40.582 70.29c3.194 5.533 10.27 7.43 15.805 4.234c5.533-3.195 7.43-10.271 4.234-15.805l-10.147-17.576c-.197-.426-.539-1.582 1.542-1.587h13.787c6.39 0 11.57-5.18 11.57-11.57s-5.18-11.57-11.57-11.57m-53.014 15.728s1.457 7.411-4.18 7.411H48.092c-6.39 0-11.57-5.18-11.57-11.57s5.18-11.57 11.57-11.57h25.94c4.188-.242 5.18-2.66 5.18-2.66l.024.012l33.86-58.648l-.01-.002c.617-1.133.103-2.204.014-2.373l-11.183-19.369c-3.195-5.533-1.299-12.61 4.235-15.804s12.61-1.3 15.805 4.234l5.186 8.983l5.177-8.967c3.195-5.533 10.271-7.43 15.805-4.234s7.43 10.27 4.235 15.804l-47.118 81.61c-.206.497-.269 1.277 1.264 1.414h28.164l.006.275s16.278.253 18.495 15.454"/></svg>
                App Store
              </a>
              <a
                href="https://play.google.com/store"
                target="_blank"
                className="btn btn-primary shadow-2xl text-black bg-white border-gray-300 hover:bg-green-700"
              ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14"><g fill="none"><path fill="#8fbffa" d="M.352 12.418V1.305c0-.73.858-1.192 1.556-.837l10.936 5.556c.719.365.719 1.31 0 1.675L1.908 13.255c-.698.355-1.556-.107-1.556-.838"/><path fill="#2859c5" fill-rule="evenodd" d="M1.61.366C1.014.25.403.643.356 1.232l5.63 5.629l-5.63 5.63c.047.588.657.98 1.254.866l5.436-5.435l1.806 1.806l1.407-.715L8.106 6.86l2.151-2.151l-1.407-.715L7.045 5.8z" clip-rule="evenodd"/></g></svg>
                Play Store
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* BG */}
      <img className='mx-auto' src={hero} alt="" />

      {/* Stats */}
      <div className="w-full py-20 bg-gradient-to-r from-violet-700 to-purple-500 flex flex-col items-center gap-10">
        <h2 className="text-5xl font-bold text-white text-center capitalize">
          Trusted by Millions, Built for You
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="w-80 flex flex-col items-center gap-4">
            <p className="text-base text-white opacity-80 text-center">Total Downloads</p>
            <p className="text-6xl font-extrabold text-white text-center">29.6M</p>
            <p className="text-base text-white opacity-80 text-center">21% more than last month</p>
          </div>
          <div className="w-80 flex flex-col items-center gap-4">
            <p className="text-base text-white opacity-80 text-center">Total Reviews</p>
            <p className="text-6xl font-extrabold text-white text-center">906K</p>
            <p className="text-base text-white opacity-80 text-center">46% more than last month</p>
          </div>
          <div className="w-80 flex flex-col items-center gap-4">
            <p className="text-base text-white opacity-80 text-center">Active Apps</p>
            <p className="text-6xl font-extrabold text-white text-center">132+</p>
            <p className="text-base text-white opacity-80 text-center">31 more will Launch</p>
          </div>
        </div>
      </div>

      {/* Top Apps Section */}
      <div className="container mx-auto py-12 px-4 bg-white">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Trending Apps</h2>
        <h2 className="text-1xl text-gray-800 text-center mb-8">Explore All Trending Apps on the Market developed by us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            className="btn btn-primary bg-linear-35 from-violet-700 to-purple-500 border-none hover:bg-blue-700"
            onClick={() => navigate('/apps')}
          >
            Show All
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;