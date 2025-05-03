import React from 'react';
import assets from '../assets/assets';

const Right = () => {
  return (
    <div className="md:w-1/2 flex flex-col items-center overflow-hidden">
      <div className="rounded-xl flex flex-col items-center space-y-4 w-full">
        {/* First Row of Images */}
        <div className="flex flex-wrap justify-center space-x-3 mb-6 w-full">
          <img src={assets.Image5} alt="analyse" className="rounded-lg mt-12 w-1/3 sm:w-1/4 md:w-auto max-w-full" />
          <img src={assets.Clock} alt="Clock" className="rounded-lg h-10 rotate-12" />
          <img src={assets.Image6} alt="market chart" className="rounded-lg w-1/2 sm:w-1/4 md:w-auto max-w-full" />
        </div>

        {/* Second Row of Images */}
        <div className="flex flex-wrap justify-center space-x-3 mt-4 w-full">
          <img src={assets.Menu} alt="Menu" className="rounded-lg h-10 -rotate-12" />
          <img src={assets.Image7} alt="Analyse" className="rounded-lg w-1/2 sm:w-1/4 md:w-auto max-w-full" />
          <img src={assets.Calendar} alt="Calendar" className="rounded-lg h-10 mt-20 rotate-12" />
        </div>
      </div>
    </div>
  );
};

export default Right;
