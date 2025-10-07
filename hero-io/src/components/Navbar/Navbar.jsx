import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-md">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl text-blue-600">HERO.IO</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/apps">Apps</Link></li>
          <li><Link to="/installation">Installation</Link></li>
        </ul>
        <button className="btn btn-primary bg-purple-600 border-none">Contribute</button>
      </div>
    </div>
  );
};

export default Navbar;