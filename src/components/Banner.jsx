// src/components/Banner.jsx
import React from 'react';

const Banner = () => (
  <header id="home" className="relative h-[300px] w-full overflow-hidden">
    <img src="/banner.png" alt="Banner" className="w-full h-full object-cover" />
    <div className="absolute bottom-8 left-10 flex flex-col items-start gap-2">
      <img src="/welogo.png" alt="Logo" className="h-14 mb-20 ml-[-18px]" />
      <div className="bg-white/60 dark:bg-gray-800/60 px-5 py-3 rounded-md shadow-md ml-[-38px] mb-[-10px]">
        <h1 className="text-lg font-bold text-black dark:text-white">WE Engineering Pte Ltd</h1>
        <p className="text-blue-600 dark:text-blue-300 font-medium text-sm">Company Profile</p>
        <div className="h-[3px] w-full bg-blue-600 rounded mt-1" />
      </div>
    </div>
  </header>
);

export default Banner;