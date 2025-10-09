import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../assets/error.png';

const ErrorPage = () => {
  return (
    <div className="container mx-auto py-12 px-4 text-center">
      <img
        src={error}
        alt="Page Not Found"
        className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md h-auto"
      />
      <h1 className="text-4xl font-bold text-gray-800 mt-6">Oops, Page Not Found!</h1>
      <p className="text-lg text-gray-600 mt-2">
        The page you are looking for is not available.
      </p>
      <Link
        to="/"
        className="btn btn-primary bg-linear-35 from-violet-700 to-purple-500 border-none hover:bg-blue-700 mt-6"
      >
        Home
      </Link>
    </div>
  );
};

export default ErrorPage;