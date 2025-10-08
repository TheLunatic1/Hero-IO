import React from 'react';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">HERO.IO</h2>
            <p className="text-sm">
              Empowering productivity with innovative apps. Join us in building a smarter future!
            </p>
          </div>

          
          <div>
            <span className="footer-title">Quick Links</span>
            <ul className="space-y-2">
              <li><a href="/" className="link link-hover">Home</a></li>
              <li><a href="/apps" className="link link-hover">Apps</a></li>
              <li><a href="/installation" className="link link-hover">Installation</a></li>
              <li><a href="/my-installations" className="link link-hover">My Installations</a></li>
            </ul>
          </div>

          
          <div>
            <span className="footer-title">Connect With Us</span>
            <div className="grid grid-flow-col gap-4 mt-2">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.732-.666 1.585-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.396 0-.788-.023-1.175-.068 2.187 1.405 4.787 2.224 7.561 2.224 9.054 0 14.002-7.496 14.002-13.986 0-.209 0-.42-.015-.63.961-.695 1.8-1.562 2.46-2.549l-.001-.011z"/>
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
        <div className="mt-8 text-center">
          <p className="text-sm">© 2025 HERO.IO - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;