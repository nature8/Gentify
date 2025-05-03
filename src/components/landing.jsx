import React, { useState } from 'react';
import { Box, Menu, Crosshair, BellIcon, Clock12 } from 'lucide-react';
import Hero from './hero.jsx';
import Right from './Right.jsx';
const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="min-h-screen bg-black text-white">
    <nav className="flex items-center justify-between p-6">
      <div className="flex items-center space-x-2">
        <Box className="h-8 w-8" />
        <span className="text-xl font-bold">Ganttify</span>
      </div>
      <div className="hidden md:flex space-x-8">
        <a href="#" className="hover:text-gray-300">Product</a>
        <a href="#" className="hover:text-gray-400">Solutions</a>
        <a href="#" className="hover:text-gray-300">Resources</a>
        <a href="#" className="hover:text-gray-200">Company</a>
        <a href="#" className="hover:text-gray-300">Pricing</a>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <Menu className="h-6 w-6" />
        </button>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <button className="hover:text-gray-300">Sign In</button>
        <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200">
          Get Started
        </button>
      </div>
    </nav>
    {isMenuOpen && (
      <div className="md:hidden px-6 py-4 space-y-4">
        <a href="#" className="block hover:text-gray-300">Product</a>
        <a href="#" className="block hover:text-gray-400">Solutions</a>
        <a href="#" className="block hover:text-gray-300">Resources</a>
        <a href="#" className="block hover:text-gray-200">Company</a>
        <a href="#" className="block hover:text-gray-300">Pricing</a>
        <button className="block hover:text-gray-300">Sign In</button>
        <button className="block bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 mt-2">
          Get Started
        </button>
      </div>
    )}
    <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="inline-flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full mb-6">
              <Crosshair className="h-5 w-5" />
              <span>Goals & Reporting</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Goals and Reporting<br />In One Place
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Connect every team's work to company objectives, then track progress with real-time data
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 font-medium">
                Get Started
              </button>
              <button className="border border-gray-600 px-6 py-3 rounded-md hover:border-gray-400 font-medium">
                How it Works
              </button>
            </div>
          </div>
              <Right />
        </div>
        <div className="mt-20">
         <Hero />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;