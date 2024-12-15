import React from 'react';
import { FaPinterest, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Header = () => {
  return (
    <div>
      {/* Header Section */}
      <header
        style={{
          backgroundImage: "url('/pic1.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '340px', // Adjust as needed
        }}
        className="relative text-white"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Navigation Bar */}
        <nav className="flex justify-between items-center px-8 py-4 relative z-10">
          <div className="text-xl font-bold">
            <span className="text-orange-500">Food</span>tuck
          </div>
          <ul className="flex space-x-6">
            <li className="hover:text-orange-500">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-orange-500">
              <a href="#">Menu</a>
            </li>
            <li className="hover:text-orange-500">
              <a href="#">Blog</a>
            </li>
            <li className="hover:text-orange-500">
              <a href="#">Pages</a>
            </li>
            <li className="hover:text-orange-500">
              <a href="#">About</a>
            </li>
            <li className="hover:text-orange-500">
              <a href="#">Shop</a>
            </li>
            <li className="hover:text-orange-500">
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-orange-500">🔍</a>
            <a href="#" className="hover:text-orange-500">👤</a>
            <a href="#" className="hover:text-orange-500">🛒</a>
          </div>
        </nav>

        {/* Title Section */}
        <div className="absolute bottom-8 left-8 text-white z-10">
          <h1 className="text-4xl font-bold">Our Shop</h1>
          <p>
            <span>Home</span> &gt; <span className="text-orange-500">Shop</span>
          </p>
        </div>
      </header>

      <br/>
      <br/>

      {/* Social Media Icons Outside Header */}
      <div className="flex justify-start space-x-4 mt-4">
        <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
          <FaPinterest size={24} className="text-black hover:text-gray-600" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF size={24} className="text-black hover:text-gray-600" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter size={24} className="text-black hover:text-gray-600" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram size={24} className="text-black hover:text-gray-600" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <FaYoutube size={24} className="text-black hover:text-gray-600" />
        </a>
      </div>
    </div>
  );
};

export default Header;
