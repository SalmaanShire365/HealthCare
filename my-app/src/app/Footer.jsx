import Link from 'next/link';
import React from 'react';
// import { GlobeAltIcon, PhoneIcon, MailIcon } from '@heroicons/react/24/outline'; // Import icons from Heroicons

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
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/4 mb-6">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <ul>
              <li className="flex items-center mb-2">
                {/* <PhoneIcon className="h-5 w-5 text-gray-300 mr-2" aria-hidden="true" /> */}
                <a href="tel:+1234567890" className="hover:underline">(123) 456-7890</a>
              </li>
              <li className="flex items-center mb-2">
                {/* <MailIcon className="h-5 w-5 text-gray-300 mr-2" aria-hidden="true" /> */}
                <a href="mailto:info@example.com" className="hover:underline">info@example.com</a>
              </li>
              <li className="flex items-center mb-2">
                {/* <GlobeAltIcon className="h-5 w-5 text-gray-300 mr-2" aria-hidden="true" /> */}
                <a href="#" className="hover:underline">123 Main Street, Anytown, USA</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/4 mb-6">
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M22 12.1c0 5.5-4.4 9.9-9.9 9.9-5.5 0-9.9-4.4-9.9-9.9 0-5.5 4.4-9.9 9.9-9.9 5.5 0 9.9 4.4 9.9 9.9zm-5.5-2.4h-2.4v2.4h-2.4v-2.4h-2.4v-2.4h2.4v-2.4h2.4v2.4h2.4v2.4zm2.4 7.2c0 .8-.7 1.5-1.5 1.5h-16.8c-.8 0-1.5-.7-1.5-1.5v-16.8c0-.8.7-1.5 1.5-1.5h16.8c.8 0 1.5.7 1.5 1.5v16.8z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M22 12.1c0 5.5-4.4 9.9-9.9 9.9-5.5 0-9.9-4.4-9.9-9.9 0-5.5 4.4-9.9 9.9-9.9 5.5 0 9.9 4.4 9.9 9.9zm-5.5-2.4h-2.4v2.4h-2.4v-2.4h-2.4v-2.4h2.4v-2.4h2.4v2.4h2.4v2.4zm2.4 7.2c0 .8-.7 1.5-1.5 1.5h-16.8c-.8 0-1.5-.7-1.5-1.5v-16.8c0-.8.7-1.5 1.5-1.5h16.8c.8 0 1.5.7 1.5 1.5v16.8z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
