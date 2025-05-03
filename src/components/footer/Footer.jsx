import React from 'react';
import Country from './Country';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Section from './Section';
import { Box } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
           <Box className='h-8 w-8 mr-3' />
            <h2 className="text-white text-lg font-semibold">Ganttify</h2>
          </div>
          <div className="flex space-x-4">
            <FaTwitter className="text-gray-400 hover:text-white cursor-pointer" size={20} />
            <FaFacebook className="text-gray-400 hover:text-white cursor-pointer" size={20} />
            <FaInstagram className="text-gray-400 hover:text-white cursor-pointer" size={20} />
          </div>
        </div>
        <Section />
      </div>
      <hr className="my-8 border-gray-700" />

      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <Country />
        <p className="text-gray-400 mt-4 md:mt-0">&copy; Ganttify 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
