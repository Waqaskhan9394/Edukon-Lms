import React from 'react';
import heroBoy from '../../assets/Image/HomeTwoHero.png'; 
import heroBG from '../../assets/Image/HomeTwoBg.jpg'; 

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden pt-32  lg:pt-60  bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBG})` }}
    >
      
     
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-25px); }
            100% { transform: translateY(0px); }
          }
          .floating-img {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>

    

      

      <div className="container mx-auto px-4 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          
          {/* --- CONTENT DIV --- 
             
          */}
          <div className="text-left order-1 lg:order-2 lg:pl-10">
            <span className="text-[#FF6B2C] font-bold tracking-[3px] uppercase text-[14px] md:text-[15px] mb-4 block">
              Online Education
            </span>
            <h1 className="text-[36px] md:text-[60px] lg:text-[60px] font-[900] text-[#1A2132] leading-[1.1] mb-6 tracking-tight">
              Build Skills With <br className="hidden md:block" /> 
              Experts Any Time <br className="hidden md:block" /> 
              Anywhere
            </h1>
            <p className="text-[#777777] text-[16px] md:text-[19px] mb-10 max-w-lg leading-relaxed font-normal">
              Free online courses from the world’s Leading experts. join 18+ million Learners today.
            </p>

            {/* SEARCH BOX */}
            <div className="relative flex flex-col sm:flex-row items-center bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] rounded-md overflow-hidden p-1.5 max-w-xl border border-gray-100">
              <div className="hidden sm:flex pl-5 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <input 
                type="text" 
                placeholder="Keywords of your course" 
                className="w-full py-4 px-4 text-[#1A2132] outline-none placeholder:text-gray-400 font-medium text-[16px]"
              />
              <button className="w-full sm:w-auto bg-[#FF6B2C] hover:bg-[#e85a1e] text-white font-bold py-4 px-10 rounded-md transition-all whitespace-nowrap text-[16px]">
                Search Course
              </button>
            </div>

            {/* POPULAR TAGS */}
            <div className="mt-8 flex flex-wrap items-center gap-4 text-[14px] md:text-[15px]">
              <span className="text-[#1A2132] font-extrabold">Most Popular :</span>
              {['Figma', 'Adobe XD', 'illustration', 'Photoshop'].map((tag) => (
                <a key={tag} href="#" className="text-[#777777] border-b border-transparent hover:text-[#FF6B2C] hover:border-[#FF6B2C] transition-all font-medium">
                  {tag}
                </a>
              ))}
            </div>
          </div>

          {/* --- IMAGE DIV --- 
              
          */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1 mt-10 lg:mt-0">
            <div className="floating-img relative z-20">
              <img 
                src={heroBoy} 
                alt="Student Learning" 
                className="w-[300px] md:w-[500px] lg:w-[680px] h-auto object-contain"
              />
            
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 -z-10 w-[70%] h-[15%] bg-black/5 rounded-[100%] blur-3xl"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;