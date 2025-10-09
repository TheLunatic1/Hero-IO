import React from 'react';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-linear-35 from-violet-700 to-purple-500 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div href="/" className="btn border-none bg-transparent shadow-none text-xl text-white">
              <img className='h-[40px] ' src={`${logo}`} alt="" />
              <h2 className="text-2xl font-bold">HERO.IO</h2>
            </div>
            
            <p className="text-sm">
              Empowering productivity with innovative apps. Join us in building a smarter future!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="footer-title">Quick Links</span>
            <ul className="space-y-2">
              <li><a href="/" className="link link-hover">Home</a></li>
              <li><a href="/apps" className="link link-hover">Apps</a></li>
              <li><a href="/installation" className="link link-hover">Installation</a></li>
              <li><a href="/my-installations" className="link link-hover">My Installations</a></li>
            </ul>
          </div>

          {/* Contact and Social */}
          <div>
            <span className="footer-title">Connect With Us</span>
            <div className="grid grid-flow-col gap-4 mt-2">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.255-2.391-1.875-2.391-1.625 0-1.875 1.235-1.875 2.391v5.604h-3v-11h3v1.542c.5-.916 1.375-1.542 2.375-1.542 1.875 0 2.625 1.23 2.625 3.773v6.227z"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center mx-auto">
          <p className="text-sm">© 2025 HERO.IO - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;