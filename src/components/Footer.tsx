import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Tujenge</h3>
            <p className="text-gray-300">
              Tujenge is a leading real estate company dedicated to helping you find your perfect home. With years of experience and a commitment to excellence, we're here to make your property dreams a reality.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#properties" className="text-gray-300 hover:text-white">Properties</a></li>
              <li><a href="#consultation" className="text-gray-300 hover:text-white">Consultation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <a href="mailto:info@tujenge.com" className="text-gray-300 hover:text-white">info@tujenge.com</a>
              </p>
              <p className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white">+1 (234) 567-890</a>
              </p>
            </div>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">&copy; 2023 Tujenge Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;