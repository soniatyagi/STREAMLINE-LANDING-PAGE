import React from 'react';
import { Tv, Smartphone, Laptop, MonitorSmartphone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-blue-dark text-gray-400 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center items-center space-x-4 mb-6">
          <Tv className="h-7 w-7 text-brand-green" />
          <MonitorSmartphone className="h-7 w-7 text-brand-green" />
          <Smartphone className="h-7 w-7 text-brand-green" />
          <Laptop className="h-7 w-7 text-brand-green" />
        </div>
        <p className="text-lg mb-4">Works on all your favorite devices.</p>
        <div className="mb-4">
          <a href="#" className="px-3 hover:text-brand-green transition-colors">Terms of Service</a>
          <span className="text-gray-500">|</span>
          <a href="#" className="px-3 hover:text-brand-green transition-colors">Privacy Policy</a>
        </div>
        <p className="text-sm">
          Streamline Services &copy; {new Date().getFullYear()} | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;