import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full px-6 pt-4">

      {/* Top Bar */}
      <div className="h-14 flex items-center justify-between font-semibold">
        
        {/* Left arrows */}
        <div className="flex items-center gap-2">
          <img
          onClick={()=>navigate(-1)}
            className="w-8 h-8 bg-black p-2 rounded-full cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img
          onClick={()=>navigate(1)}
            className="w-8 h-8 bg-black p-2 rounded-full cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <p className="bg-white text-black text-sm px-4 py-1 rounded-full hidden md:block cursor-pointer">
            Explore Premium
          </p>
          <p className="bg-black text-white text-sm px-3 py-1 rounded-full cursor-pointer">
            Install App
          </p>
          <div className="bg-purple-500 text-black w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">
            A
          </div>
        </div>

      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 mt-3">
        <p className="bg-white text-black px-4 py-1 rounded-full text-sm cursor-pointer">
          All
        </p>
        <p className="bg-black text-white px-4 py-1 rounded-full text-sm cursor-pointer">
          Music
        </p>
        <p className="bg-black text-white px-4 py-1 rounded-full text-sm cursor-pointer">
          Podcasts
        </p>
      </div>

    </div>
  );
};

export default Navbar;
