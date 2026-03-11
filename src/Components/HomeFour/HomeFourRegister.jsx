import React from 'react';

// Background Image Import
import bgImg from '../../assets/Image/HomeFourRegister.jpg';

const HomeFourRegister = () => {
  return (
    <section 
      className="relative py-24 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
  
      

      
      <div className="absolute bottom-[-50px] left-[-50px] w-[300px] h-[300px] bg-[#ffdc12] rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
          
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2 text-left animate-fadeInLeft">
            <span className="text-[#ffdc12] font-bold tracking-[4px] text-[13px] uppercase block mb-4">
              Save The Day
            </span>
            <h2 className="text-white text-[38px] md:text-[52px] font-bold leading-[1.2] mb-6">
              Join on Day Long Free Workshop for <br />
              <span className="text-[#ffdc12]">Advance PHP Language</span>
            </h2>
            <p className="text-gray-200 text-[18px] font-medium">
              Limited Time Offer! Hurry Up
            </p>
          </div>

          {/* RIGHT REGISTRATION FORM */}
          <div className="w-full lg:w-[430px] animate-fadeInRight">
            <div className="bg-white p-10 rounded-[15px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden">
              
              <h3 className="text-[#07294d] text-center text-[26px] font-extrabold mb-10">
                Register Now
              </h3>
              
              <form className="space-y-5 relative z-10">
                <input 
                  type="text" 
                  placeholder="Username" 
                  className="w-full bg-[#f8f9fa] border border-gray-100 rounded-[8px] px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#ffdc12]/50 transition-all text-[#555]"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-[#f8f9fa] border border-gray-100 rounded-[8px] px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#ffdc12]/50 transition-all text-[#555]"
                />
                <input 
                  type="tel" 
                  placeholder="Phone" 
                  className="w-full bg-[#f8f9fa] border border-gray-100 rounded-[8px] px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#ffdc12]/50 transition-all text-[#555]"
                />
                
                {/* --- GRADIENT BUTTON --- */}
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[#ffdc12] to-[#ffb800] text-[#07294d] font-bold py-4 rounded-[8px] mt-4 hover:shadow-lg hover:brightness-110 transition-all duration-300 transform active:scale-95 uppercase tracking-wider text-[15px]"
                >
                  Register Now
                </button>
              </form>

             
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white via-white/20 to-transparent pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeFourRegister;