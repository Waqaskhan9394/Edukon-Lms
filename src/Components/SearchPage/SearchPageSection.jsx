import React from 'react';
import { FiSearch, FiChevronRight, FiCalendar, FiUser, FiMessageSquare, FiExternalLink } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP } from 'react-icons/fa';

const EdukonBlogFullLayout = () => {
  
 
  

 
  return (
    <div className="bg-[#FDF9F6] min-h-screen font-['Roboto',sans-serif] py-16 text-[#555555]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* --- LEFT SIDE: MAIN CONTENT (70%) --- */}
          <div className="w-full lg:w-[70%] space-y-10">
            
          
            {[
              "Interactively Morph High Standards Anding",
              "Financial Reporting Qoncil What Could More.",
              "Consulting Reporting Qounc Arei Could More.",
              "Strategic Social Media and of visual design"
            ].map((title, index) => (
              <div key={index} className="bg-white rounded-md shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-gray-50 overflow-hidden group">
                <div className="p-6 md:p-8">
                  <h2 className="text-[28px] md:text-[34px] font-bold text-[#07294d] mb-2 group-hover:text-[#ff6b2c] transition-colors cursor-pointer leading-tight">
                    {title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-5 text-[14px] text-[#777777] mb-2 border-b border-gray-100 pb-6">
                    <span className="flex items-center gap-2 italic"><FiCalendar className="text-[#ff6b2c]" /> April 23, 2021</span>
                    <span className="flex items-center gap-2 italic"><FiUser className="text-[#ff6b2c]" /> Begrass Tyson</span>
                    <span className="flex items-center gap-2 italic"><FiMessageSquare className="text-[#ff6b2c]" /> 09 Comments</span>
                  </div>
                  <button className="bg-[#ff6b2c] text-white px-9 py-2 rounded-md font-bold uppercase text-[13px] tracking-wider flex items-center gap-2 hover:bg-[#07294d] transition-all shadow-lg shadow-orange-200 hover:shadow-none">
                    Read More <FiExternalLink strokeWidth={3} />
                  </button>
                </div>
              </div>
            ))}

            
          </div>

          {/* --- RIGHT SIDE: SIDEBAR (30%) --- */}
          <div className="w-full lg:w-[30%] space-y-8">
            
            {/* Search Widget (Capture 4) */}
            <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full bg-[#f8f9fa] border-none py-4 px-5 pr-12 rounded-md outline-none text-[#555555] focus:ring-2 focus:ring-[#ff6b2c]/20"
                />
                <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-[#07294d] group-hover:text-[#ff6b2c] transition-colors cursor-pointer" />
              </div>
            </div>

          

          </div>
        </div>
      </div>
    </div>
  );
};

export default EdukonBlogFullLayout;