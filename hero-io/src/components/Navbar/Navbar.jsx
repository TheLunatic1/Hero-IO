import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-md">
      <div className="flex-1">
        <NavLink to="/" className="btn btn-ghost text-xl text-blue-600">HERO.IO</NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 font-bold' : 'text-gray-600'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 font-bold' : 'text-gray-600'
              }
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 font-bold' : 'text-gray-600'
              }
            >
              Installation
            </NavLink>
          </li>
        </ul>
        <a
          href="https://github.com/TheLunatic1"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary bg-purple-600 border-none"
        >
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;