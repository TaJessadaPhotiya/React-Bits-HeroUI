// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 text-center text-white">
      <div className="container mx-auto">
        <p>&copy; 2024 Real Estate. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-2">
          <a href="#facebook" className="hover:text-gray-400">
            Facebook
          </a>
          <a href="#twitter" className="hover:text-gray-400">
            Twitter
          </a>
          <a href="#instagram" className="hover:text-gray-400">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
