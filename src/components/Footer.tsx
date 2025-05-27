
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 border-t border-gray-800 dark:border-gray-700 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              EURO VISION 2000
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Preserving European cultural heritage through comprehensive event documentation, 
              leadership showcase, and community engagement initiatives.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-100">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#leadership" className="text-gray-300 hover:text-white transition-colors duration-300">Leadership</a></li>
              <li><a href="#events" className="text-gray-300 hover:text-white transition-colors duration-300">Events</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-100">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>Email: eurovsn@gmail.com</p>
              <p>Phone: +92 335 9494167</p>
              <p>Address: Attock, Pakistan</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Euro Vision 2000. All rights reserved. | 
            <span className="ml-2 text-blue-400 font-medium">
              Designed by ZeroxCoding | Powered by M&N's
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
