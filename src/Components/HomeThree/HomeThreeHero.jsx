import React from 'react';

import heroImg from '../../assets/Image/HomeTwoHero.jpg'; 

const HomeThreeHeroSection = () => {
  return (
    <section 
      className="relative w-full flex items-center bg-white overflow-hidden"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      
      {/* --- Background Image  */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Edukon Hero" 
          className="w-full h-full object-cover object-right lg:object-center scale-105" 
        />
       
        
      </div>

      {/* --- Content Area --- 
         
      */}
      <div className="container mx-auto px-6 md:px-12 pt-40 pb-24 md:pt-48 md:pb-32 lg:pt-120 lg:pb-40 relative z-10">
        <div className="max-w-[1000px]">
          
          {/* Main Heading:*/}
          <h1 className="text-[35px] sm:text-[45px] md:text-[50px] lg:text-[65px] font-[700] text-black leading-[1] mb-8 tracking-tighter drop-shadow-sm">
            Build Skills With <br />
            Experts Any Time <br />
            Anywhere
          </h1>

          {/* Subtext:  */}
          <p className="text-[#555] text-[18px] md:text-[22px] lg:text-[20px] font-light mb-12 max-w-2xl leading-relaxed">
            Professor is Best & Perfect Venue to Grow up Your Knowledge
          </p>
          
          {/* Action Button:*/}
          <div className="flex">
            <button className="bg-[#ff6b2c] text-white px-6 py-2 md:px-6 md:py-4 rounded-[5px]  text-[14px] md:text-[16px] uppercase tracking-widest transition-all duration-500 shadow-[0_25px_50px_rgba(255,107,44,0.35)]">
              Get Started Now
            </button>
          </div>

        </div>
      </div>

      {/* Right Side aesthetic fade */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none"></div>

    </section>
  );
};

export default HomeThreeHeroSection;