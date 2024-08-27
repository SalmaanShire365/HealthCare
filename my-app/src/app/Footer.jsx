'use client';
import Link from 'next/link';
import React from 'react';
import { GlobeAltIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

// Example Footer Component
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* Footer Links */}
          <div className="w-full md:w-1/4 mb-6">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul>
              <li><Link href="#home" className="hover:underline">Home</Link></li>
              <li><Link href="#services" className="hover:underline">Services</Link></li>
              <li><Link href="#contact" className="hover:underline">Contact Us</Link></li>
              <li><Link href="#" className="hover:underline">Careers</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/4 mb-6">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <ul>
              <li className="flex items-center mb-2">
                <PhoneIcon className="h-5 w-5 text-gray-300 mr-2" aria-hidden="true" />
                <a href="tel:+1234567890" className="hover:underline">(612) 583-8529</a>
              </li>
              <li className="flex items-center mb-2">
                <EnvelopeIcon className="h-5 w-5 text-gray-300 mr-2" aria-hidden="true" />
                <a href="mailto:info@example.com" className="hover:underline">alphaqualitycare1@gmail.com</a>
              </li>
              <li className="flex items-center mb-2">
                <GlobeAltIcon className="h-5 w-5 text-gray-300 mr-2" aria-hidden="true" />
                <a href="#" className="hover:underline">1020 E 146th St, Ste 107, Burnsville, MN, 55337</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/4 mb-6">
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>

            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Your Company. All rights reserved.</p>

      </div>
    </footer>
  );
}
