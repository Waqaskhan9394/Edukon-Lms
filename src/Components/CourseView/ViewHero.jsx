import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import heroBg from '../../assets/Image/download.jpeg'; 

const ViewHeroSection = ({ 
  title , 
  homeText , 
  homeLink , 
  currentPage 
}) => {
  return (
    <section 
      className="relative w-full h-[350px] md:h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ 
        backgroundImage: `url(${heroBg})`,
        backgroundColor: '#fdf8f0' 
      }}
    >
      {/* Content Container */}
      <div className="relative z-10 text-center px-4 pt-32 md:pt-40">
        
        {/* Main Title - Assigned via Props */}
        <h1 className="text-[36px] md:text-[46px] font-[700] text-[#1A2132] leading-tight mb-4 tracking-[-1.5px]">
          {title}
        </h1>

        {/* Breadcrumb Navigation - Assigned via Props */}
        <nav className="flex justify-center items-center gap-2 text-[16px] font-semibold">
          <a 
            href={homeLink} 
            className="text-gray-700 hover:text-[#ff5a2c] transition-colors"
          >
            {homeText}
          </a>
          
          <span className="text-gray-400 mt-1">
             <FaAngleRight size={14} />
          </span>

          <span className="text-gray-500 capitalize">
            {currentPage}
          </span>
        </nav>
      </div>
    </section>
  );
};

export default ViewHeroSection;