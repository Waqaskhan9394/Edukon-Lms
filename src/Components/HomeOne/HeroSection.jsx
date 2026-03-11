import React from 'react';
import { FiSearch } from 'react-icons/fi'; 
import RightImag from '../../assets/Image/02.png';
import BannerBg from '../../assets/Image/binner.jpg';

const HeroSection = () => {
  return (
    <section 
      className="relative w-full min-h-screen flex items-center overflow-hidden px-4 md:px-12 lg:px-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BannerBg})` }}
    >
      
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-end justify-between relative z-10 pt-[160px] lg:pt-[240px] pb-0">
        
        {/* --- LEFT CONTENT --- */}
        <div className="w-full lg:w-1/2 text-center lg:text-left z-20 pb-20 lg:pb-40">
          <div className="mb-4">
            <span className="text-[#FF6B2C] font-extrabold tracking-[3px] uppercase text-[12px] lg:text-[14px]">
              Online Education
            </span>
          </div>

          <h1 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[75px] font-[800] text-[#1A2132] leading-[1.1] mb-6">
            Learn The <br className="hidden sm:block" />
            Skills You Need <br className="hidden sm:block" />
            To Succeed
          </h1>

          <p className="text-gray-500 text-[15px] sm:text-[18px] lg:text-[19px] mb-8 lg:mb-10 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed">
            Free online courses from the world's Leading experts. join 18+ million Learners today.
          </p>

          {/* --- SEARCH BAR --- */}
          <div className="flex flex-col sm:flex-row items-center bg-white shadow-[0_15px_45px_rgba(0,0,0,0.08)] rounded-[10px] p-2 border border-gray-50 w-full max-w-[580px] mx-auto lg:mx-0">
            <div className="flex items-center flex-grow pl-3 w-full border-b sm:border-b-0 border-gray-100 sm:border-none">
              <FiSearch className="text-gray-400 text-[20px] shrink-0" /> 
              <input 
                type="text" 
                placeholder="Keywords of your course" 
                className="w-full p-4 outline-none text-gray-700 bg-transparent text-[15px] lg:text-[16px] placeholder:text-gray-400"
              />
            </div>
            <button className="bg-[#FF6B2C] hover:bg-[#e85a1e] text-white px-8 py-4 rounded-[8px] font-bold text-[16px] transition-all w-full sm:w-auto mt-2 sm:mt-0 whitespace-nowrap active:scale-95">
              Search Course
            </button>
          </div>

          {/* --- POPULAR TAGS --- */}
          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-[13px] lg:text-[14px]">
            <span className="text-gray-400">Most Popular :</span>
            <div className="flex flex-wrap justify-center gap-3 font-bold text-[#1A2132]">
              {["Figma", "Adobe XD", "illustration", "Photoshop"].map((item) => (
                <a key={item} href="#" className="underline decoration-gray-300 hover:text-[#FF6B2C] transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- RIGHT IMAGE DIV --- */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end relative">
          
          {/* DOTTED CIRCLES - Added 'hidden xl:flex' to hide on iPad/Mobile */}
          <div className="hidden xl:flex absolute right-[-20%] bottom-[-5%] w-[650px] h-[650px] items-center justify-center pointer-events-none z-0">
            <div className="absolute w-full h-full border-[2px] border-dotted border-[#ff70d2] rounded-full animate-[spin_60s_linear_infinite]"></div>
            <div className="absolute w-[80%] h-[80%] border-[2px] border-dotted border-[#007aff] rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
            <div className="absolute w-[60%] h-[60%] border-[2px] border-dotted border-[#fdca92] rounded-full animate-[spin_20s_linear_infinite]"></div>
          </div>

          <img 
            src={RightImag}
            alt="Edukon Student" 
            className="w-[85%] sm:w-[70%] lg:w-[100%] max-w-[550px] h-auto object-contain relative z-20 block"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;