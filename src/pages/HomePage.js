import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Our Platform</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We provide innovative solutions to help your business grow
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold inline-block hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <img 
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg" 
                alt="Service 1" 
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-600 mb-4">
                Custom websites and web applications tailored to your needs.
              </p>
              <Link to="/services" className="text-blue-600 font-medium hover:underline">
                Learn more →
              </Link>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <img 
                src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg" 
                alt="Service 2" 
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
              <p className="text-gray-600 mb-4">
                Cross-platform mobile applications for iOS and Android.
              </p>
              <Link to="/services" className="text-blue-600 font-medium hover:underline">
                Learn more →
              </Link>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <img 
                src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg" 
                alt="Service 3" 
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Cloud Solutions</h3>
              <p className="text-gray-600 mb-4">
                Scalable cloud infrastructure and services for your business.
              </p>
              <Link to="/services" className="text-blue-600 font-medium hover:underline">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;