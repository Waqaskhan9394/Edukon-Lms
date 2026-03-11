import React from 'react';

// Image Import
import chooseImg from '../../assets/Image/HomeSixChoos1.png';

const HomeSixChooseSection = () => {
  const points = [
    "Smart & Relaxing Career",
    "No Required Higher Education",
    "WorldWide Working Opportunity",
    "Lots of Working Opportunity"
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden font-sans">
      <div className="container mx-auto px-6 max-w-7xl">
        
        
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0">
          
          {/* LEFT CONTENT AREA */}
          
          <div className="w-full lg:w-1/2 space-y-6 z-10 text-center lg:text-left">
            <div className="space-y-2">
               <h4 className="text-[#ffdc12] font-bold uppercase tracking-[0.3em] text-[14px] md:text-[15px]">
                Let's Start
              </h4>
              <h2 className="text-[#07294d] text-[32px] sm:text-[40px] md:text-[55px] font-[1000] leading-[1.1] tracking-tight">
                Why You Should <br className="hidden md:block" /> Start Driving
              </h2>
            </div>
            
            <p className="text-[#666666] text-[16px] md:text-[17px] leading-relaxed max-w-lg mx-auto lg:mx-0 font-normal">
              Proactively enhance prospective resources for next generation convergence. 
              Dramatically myocardinate high-quality vortals through transparent.
            </p>

          
            <ul className="space-y-4 pt-2 flex flex-col items-center lg:items-start">
              {points.map((point, index) => (
                <li key={index} className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-[#ffdc12] flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#ffdc12] rounded-full"></div>
                  </div>
                  <span className="text-[#07294d] font-bold text-[16px] md:text-[17px] tracking-tight group-hover:text-blue-700 transition-colors">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT IMAGE SECTION */}
      
          <div className="w-full lg:w-1/2 relative p-0 flex justify-center lg:justify-end">
            <div className="relative w-full flex justify-center lg:justify-end items-center">
              
              {/* Car Image -*/}
              <div className="relative z-10 w-full max-w-[500px] md:max-w-[700px]">
                <img 
                  src={chooseImg} 
                  alt="Driving School Car" 
                  className="w-full h-auto object-contain block mx-auto lg:mr-0"
                  style={{
                    filter: 'drop-shadow(20px 30px 40px rgba(0,0,0,0.15))'
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeSixChooseSection;