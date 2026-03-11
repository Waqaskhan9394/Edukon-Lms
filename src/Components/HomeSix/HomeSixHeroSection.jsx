import React from 'react';

// Background Image Import
import drivingHeroBg from '../../assets/Image/HomeSixHeroBg.jpg'; 

const HomeSixHeroSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      
      {/* --- FIXED BACKGROUND LAYER (Parallax) --- */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${drivingHeroBg})`,
          backgroundAttachment: 'fixed', 
        }}
      >
        {/* Dark Overlay - Subtle depth */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-[250px] md:py-[450px]">
        
        {/* SUBTITLE: Font size aur spacing screenshot ke mutabiq */}
        <span className="text-[#ffdc12]  text-[16px] md:text-[18px] mb-6 font-extralight tracking-[5px] uppercase">
          Let’s Start
        </span>
        
        {/* MAIN HEADING: Ultra Bold (1000) aur Large Font Size */}
        <h1 className="text-white text-[20px] sm:text-[40px] lg:text-[60px] font-[1000] leading-[1] mb-8 tracking-[-2px] uppercase">
          Driving Career
        </h1>
        
        {/* DESCRIPTION: Lightweight but clear */}
        <p className="text-white text-[18px] md:text-[20px] font-extralight opacity-90 max-w-4xl leading-relaxed tracking-wide">
          Drive Your Car with Hapyness
        </p>

       
      </div>

    </section>
  );
};

export default HomeSixHeroSection;