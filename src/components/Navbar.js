import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-900 text-2xl">Company</span>
              </Link>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="py-4 px-2 text-gray-700 hover:text-blue-600 transition duration-300">Home</Link>
            <Link to="/about" className="py-4 px-2 text-gray-700 hover:text-blue-600 transition duration-300">About</Link>
            <Link to="/services" className="py-4 px-2 text-gray-700 hover:text-blue-600 transition duration-300">Services</Link>
            <Link to="/contact" className="py-4 px-2 text-gray-700 hover:text-blue-600 transition duration-300">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;