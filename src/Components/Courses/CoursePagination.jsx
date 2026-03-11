import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const CoursePagination = () => {
  return (
    <div className="flex items-center justify-center gap-3 py-10  bg-[#FFF9F1]">
      
      {/* Previous Arrow */}
      <button className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-white text-[#777777] border border-[#EEEEEE] hover:bg-[#FF6B2C] hover:text-white transition-all duration-300 shadow-sm">
        <FaAngleLeft className="text-[18px]" />
      </button>

      {/* Page Numbers */}
      <button className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-white text-[#1A2132] font-bold border border-[#EEEEEE] hover:bg-[#FF6B2C] hover:text-white transition-all duration-300 shadow-sm">
        01
      </button>

      {/* Active Page (Orange) */}
      <button className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#FF6B2C] text-white font-bold shadow-md">
        02
      </button>

      <button className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-white text-[#1A2132] font-bold border border-[#EEEEEE] hover:bg-[#FF6B2C] hover:text-white transition-all duration-300 shadow-sm">
        03
      </button>

      {/* Next Arrow */}
      <button className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-white text-[#777777] border border-[#EEEEEE] hover:bg-[#FF6B2C] hover:text-white transition-all duration-300 shadow-sm">
        <FaAngleRight className="text-[18px]" />
      </button>
      
    </div>
  );
};

export default CoursePagination;