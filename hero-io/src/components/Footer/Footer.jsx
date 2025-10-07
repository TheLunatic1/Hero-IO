import React from 'react';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-dark text-white">
      <div>
        <h2 className="text-xl">HERO.IO</h2>
        <p>Copyright © 2025 - All right reserved</p>
      </div>
      <div>
        <span className="footer-title">Social Links</span>
        <div className="grid grid-flow-col gap-4">
          <a>X</a>
          <a>In</a>
          <a>Fb</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;