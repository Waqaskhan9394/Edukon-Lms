import React from 'react';


import instructorBg from '../../assets/Image/HomeFiveHeroBg.jpg'; 

const HomeFiveHeroSection = () => {
  return (
    <section className="relative w-full h-full overflow-hidden font-sans">
      
      {/* --- FIXED BACKGROUND LAYER  */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${instructorBg})`,
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 flex flex-col md:flex-row h-full">
        
       
        <div className="w-full md:w-1/2  lg:h-[30vh] md:h-full pointer-events-none"></div>

      
        <div className="w-full md:w-1/2 h-full bg-[#ffdc12]/70 backdrop-blur-[1px] flex items-start justify-start">
          
          
          <div className="w-full py-50 md:py-54 lg:py-100 pl-6 pr-8 md:pl-16 lg:pl-20 xl:pl-28">
            
           
            <span className="text-[#07294d] font-bold text-[16px] md:text-[20px] mb-3 block tracking-[3px] uppercase font-sans">
              Hi There!
            </span>
            
            {/* MAIN HEADING: */}
            <h1 className="text-black text-[24px] sm:text-[40px] lg:text-[68px] font-extralight leading-[0.95] mb-6 tracking-tight font-sans">
              I Am <span className="block xl:inline font-bold ">Lincon Sein</span>
            </h1>
            
            {/* DESIGNATION:  */}
            <p className="text-gray-400 text-[18px] md:text-[22px] lg:text-[26px] font-light mb-10 opacity-90 font-sans">
              Senior English Teacher
            </p>

           
            
            {/* BUTTON:  */}
            <button className="relative group overflow-hidden border-[3px] border-[#07294d] text-[#07294d] font-bold px-8 py-3 rounded-md text-[14px] uppercase tracking-[2px] transition-all duration-500 font-sans">
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                View Lincon's Courses
              </span>
              <div className="absolute inset-0 bg-[#07294d] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeFiveHeroSection;