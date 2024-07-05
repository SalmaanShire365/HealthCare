"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCube } from '@fortawesome/free-solid-svg-icons'; // Import faCube icon

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick); // Toggle isClick state
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo with FontAwesome Icon */}
            <div className="flex-shrink-0">
              <FontAwesomeIcon icon={faCube} className="text-white text-lg" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:ml-4">
              <a href="/home" className="text-white hover:bg-white hover:text-black px-3 py-2 rounded-lg">
                Home
              </a>
              <a href="/about" className="text-white hover:bg-white hover:text-black px-3 py-2 rounded-lg">
                About
              </a>
              <a href="/services" className="text-white hover:bg-white hover:text-black px-3 py-2 rounded-lg">
                Services
              </a>
              <a href="/contact" className="text-white hover:bg-white hover:text-black px-3 py-2 rounded-lg">
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                <FontAwesomeIcon icon={isClick ? faTimes : faBars} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isClick && (
        <div className="md:hidden bg-black">
          <div className="px-2 pt-2 pb-3">
            <a
              href="/home"
              className="block text-white hover:bg-white hover:text-black rounded-lg px-3 py-2 mt-1"
            >
              Home
            </a>
            <a
              href="/about"
              className="block text-white hover:bg-white hover:text-black rounded-lg px-3 py-2 mt-1"
            >
              About
            </a>
            <a
              href="/services"
              className="block text-white hover:bg-white hover:text-black rounded-lg px-3 py-2 mt-1"
            >
              Services
            </a>
            <a
              href="/contact"
              className="block text-white hover:bg-white hover:text-black rounded-lg px-3 py-2 mt-1"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
