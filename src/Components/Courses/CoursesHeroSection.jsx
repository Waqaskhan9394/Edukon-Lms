import React from 'react';

// Background 
import heroBg from '../../assets/Image/download.jpeg'; 

const CourseHeroSection = () => {
  return (
    <section 
      className="relative w-full h-[320px] md:h-[550px] flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ 
        backgroundImage: `url(${heroBg})`,
        
        fontFamily: '"Inter", "Roboto", sans-serif'
      }}
    >
   
      {/* Main Content Area */}
      <div className="relative z-10 text-center px-4 pt-18">
        
        {/* Title:  */}
        <h1 className="text-[36px] md:text-[46px] font-[700] text-[#1A2132] leading-tight mb-4 tracking-[-1.5px]">
          Archives: Courses
        </h1>
        
        {/* Breadcrumb Navigation: */}
        <nav className="flex items-center justify-center gap-2 text-[14px] md:text-[16px] font-light">
          <span className="text-[#777777] hover:text-[#FF6B2C] cursor-pointer transition-all duration-300">
            Home
          </span>
          <span className="text-[#777777] font-normal mx-1">/</span>
          <span className="text-[#1A2132] font-light uppercase tracking-wide">
            Course Page
          </span>
        </nav>
      </div>
    </section>
  );
};

export default CourseHeroSection;