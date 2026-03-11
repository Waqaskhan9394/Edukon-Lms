import React from 'react';

// Background image import
import heroBg from '../../assets/Image/HomeSevenHero.jpg'; 

// Flag imports
import flag1 from '../../assets/Image/flag1.jpg';
import flag2 from '../../assets/Image/flag2.jpg';
import flag3 from '../../assets/Image/flag3.jpg';
import flag4 from '../../assets/Image/flag4.jpg';
import flag5 from '../../assets/Image/flag5.jpg';
import flag6 from '../../assets/Image/flag6.jpg';
import flag7 from '../../assets/Image/flag7.jpg';
import flag8 from '../../assets/Image/flag8.jpg';
import flag9 from '../../assets/Image/flag9.jpg';
import flag10 from '../../assets/Image/flag10.jpg';
import flag11 from '../../assets/Image/flag11.jpg';
import flag12 from '../../assets/Image/flag12.jpg';
import flag13 from '../../assets/Image/flag13.jpg';

const HomeSevenHero = () => {
  const flags = [flag1, flag2, flag3, flag4, flag5, flag6, flag7, flag8, flag9, flag10, flag11, flag12, flag13];

  return (
    <section className="relative w-full h-auto min-h-[500px] md:min-h-[800px] overflow-hidden font-sans bg-white">
      
      {/* 1. Background Image - Desktop logic preserved, Mobile logic added via className */}
      <div 
        className="absolute top-[80px] md:top-[120px] lg:top-[150px] left-0 w-full h-[calc(100%-100px)] md:h-[calc(100%-120px)]
                   bg-no-repeat bg-center lg:bg-right transition-all duration-500
                   /* Mobile par cover aur full height ka fix */
                   max-sm:top-0 max-sm:h-full max-sm:bg-cover"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          backgroundSize: window.innerWidth > 1024 ? '110%' : undefined, // Desktop par 110%
        }}
      />

      {/* 2. Content Container - Aligned to Right */}
      <div className="container mx-auto px-6 sm:px-12 md:px-20 lg:px-24 relative z-10 
                      flex flex-col lg:flex-row items-center justify-center lg:justify-end 
                      py-[60px] md:py-[100px] lg:pt-[180px] lg:pb-[100px]">
        
        <div className="w-full lg:max-w-xl text-center lg:text-left mt-[120px] md:mt-[150px] lg:mt-[50px] p-5 lg:p-0"> 
          
          <h1 className="text-black text-[28px] sm:text-[36px] md:text-[45px] lg:text-[55px] font-[800] leading-[1.2] mb-5 tracking-tighter">
            Language is The <br />
            <span>Dress of Thought</span>
          </h1>
          
          <p className="text-black/80 text-[16px] sm:text-[18px] md:text-[20px] font-medium mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
            Learn Unlimited Language & Explore Yourself
          </p>

          <button className="inline-block px-9 py-3.5 border-2 border-black text-black font-bold text-[15px] rounded-[4px] uppercase tracking-wide transition-all duration-300 hover:bg-[#ffdc12] hover:border-[#ffdc12] hover:-translate-y-1">
            Get Started Now
          </button>
          
        </div>
      </div>

      {/* 3. Flags Slider -  */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="bg-white py-5 shadow-lg border border-gray-100 overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap items-center">
              {[...flags, ...flags].map((flag, index) => (
                <div key={index} className="flex-shrink-0 mx-8">
                  <img 
                    src={flag} 
                    alt="flag" 
                    className="h-6 md:h-8 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 50s linear infinite;
        }
        /* Mobile specific fix for Background Image */
        @media (max-width: 640px) {
          .bg-no-repeat {
            background-size: cover !important;
            background-position: 70% center !important; /* People ko center mein rakhne ke liye */
          }
        }
      `}} />

    </section>
  );
};

export default HomeSevenHero;