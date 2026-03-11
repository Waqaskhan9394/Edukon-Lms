import React from 'react';
import { FaPlay, FaStar } from 'react-icons/fa';

// Images
import heroBannerImg from '../../assets/Image/CourseD.jpg'; 
import authorImg from '../../assets/Image/author1.jpg';
import bgShape from '../../assets/Image/download.jpeg'; 

const AdvancedHeroSection = () => {
  return (
    <section 
      className="relative w-full overflow-hidden bg-[#F8F9FA]"
      style={{ backgroundImage: `url(${bgShape})`, backgroundSize: 'cover' }}
    >
     

      {/* 2. Main Content 
      */}
      <div className="container mx-auto px-4 md:px-10 lg:px-20 relative z-10 pt-48 md:pt-60">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          
          {/* LEFT CONTENT AREA */}
          <div className="w-full lg:w-[48%] text-left pb-20 md:pb-32">
            {/* Badges:  */}
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-[#26C976] text-white text-[13px] font-bold px-4 py-1.5 rounded-[4px] flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span> Adobe XD
              </span>
              <span className="bg-[#FF6B2C] text-white text-[13px] font-bold px-4 py-1.5 rounded-[4px]">
                30% Off
              </span>
            </div>

            {/* Heading: */}
            <h1 className="text-[40px] md:text-[45px] lg:text-[50px] font-[700] text-[#1A2132] leading-[1.1] mb-2 tracking-tight">
              Advanced Adobe <br /> Photoshop For Everyone
            </h1>

            {/* Description: */}
            <p className="text-[#777777] text-[16px] md:text-[19px] leading-relaxed mb-3 max-w-[500px]">
              The most impressive is collection of share me online college courses
            </p>

            {/* Author & Rating Group */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-white shadow-md">
                  <img src={authorImg} alt="Rajib Raj" className="w-full h-full object-cover" />
                </div>
                <span className="text-[#1A2132] font-bold text-[17px]">Rajib Raj</span>
              </div>
              
              <div className="flex items-center gap-1">
                <div className="flex text-[#FF6B2C] text-[13px] gap-0.5">
                   {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                </div>
                <span className="text-[#777777] text-[14px] ml-2">03 reviews</span>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT: 
            
          */}
          <div className="w-full lg:w-[52%] relative flex items-end justify-end">
            <div className="relative w-full max-w-[680px] -mb-1">
              <img 
                src={heroBannerImg} 
                alt="Course Banner" 
                className="w-full h-auto object-cover bg-cover shadow-2xl"
              />
              
              {/* Play Button  */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="group relative cursor-pointer">
                 
                  <div className="absolute inset-0 bg-white/40 rounded-full animate-ping scale-100"></div>
                  
                  {/* Main Button Circles */}
                  <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-105">
                    <div className="w-[65px] h-[65px] bg-[#FF6B2C] rounded-full flex items-center justify-center text-white pl-1">
                      <FaPlay className="text-[20px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdvancedHeroSection;