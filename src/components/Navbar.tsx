import React from 'react';
import { Home, Phone, Info } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Home className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Tujenge</span>
          </div>
          <div className="flex items-center">
            <a href="#properties" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Properties</a>
            <a href="#consultation" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Consultation</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;