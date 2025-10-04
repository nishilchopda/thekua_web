import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-yellow-700 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; 2025 Shuddh Swad. All rights reserved.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <Link to="/about" className="hover:underline transition-all duration-200">
            About Us
          </Link>
          <Link to="/contact" className="hover:underline transition-all duration-200">
            Contact Us
          </Link>
          <a href="#privacy" className="hover:underline transition-all duration-200">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:underline transition-all duration-200">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
