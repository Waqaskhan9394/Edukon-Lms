import React from 'react';
import { FiSearch } from 'react-icons/fi';

const EdukonBottomSections = () => {
  return (
    
    <div className="bg-[#FDF9F6] antialiased py-24 font-['Roboto',sans-serif]">
      
      <section>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            
            {/* --- Left Column: */}
            <div className="flex-[1.8] bg-white p-10  rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.02)] border border-gray-50 flex flex-col justify-center">
             
              <h2 className="text-[28px] md:text-[34px] font-semibold text-[#07294d] ">
                Couldn't find what you're looking for!
              </h2>
             
              <h1 className="text-[40px] md:text-[60px] font-[900] text-[#ff6b2c] leading-none tracking-tight">
                Oops!
              </h1>
            </div>

            {/* --- Right Column: */}
            <div className="flex-1 bg-white p-10 rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col justify-center">
              
              <h3 className="text-[24px] font-bold text-[#07294d] mb-4">
                Need a new search?
              </h3>
              
              <p className="text-[#555555] text-[16px] mb-8 leading-[1.7] font-normal">
                If you didn't find what you were looking for, try a new search!
              </p>
              
              {/* Search Bar */}
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full bg-[#f8f9fa] border-none py-4 px-6 pr-12 rounded-md focus:ring-2 focus:ring-[#ff6b2c]/20 outline-none text-[#555555] text-[15px] transition-all placeholder:text-gray-400"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[16px] text-[#07294d] group-hover:text-[#ff6b2c] transition-colors">
                  <FiSearch strokeWidth={3} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default EdukonBottomSections;