import React from 'react';

import newsBg from '../../assets/Image/homesevennewsbg.jpg';

const HomeSevenNews = () => {
  return (
    <section 
      className="py-24 bg-cover bg-center bg-no-repeat relative overflow-hidden font-['Roboto',sans-serif]"
      style={{ backgroundImage: `url(${newsBg})` }}
    >
      <div className="container mx-auto px-4 relative z-10 text-center">
        
        {/* Main Heading */}
        <h2 className="text-[#000000] text-[32px] md:text-[45px] font-[700] mb-4 leading-tight">
          Subscribe to <span className="text-[#000000]">Newsletter</span>
        </h2>
        
      
        <p className="text-[#555555] text-[15px] md:text-[16px] max-w-[600px] mx-auto mb-10 font-[400] leading-[1.6]">
          Subscribe free in our website and get the notification and latest offers of our courses.
        </p>

        {/* Form Container */}
        <div className="max-w-[750px] mx-auto">
          <form 
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col items-center"
          >
     
            <div className="w-full mb-6">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full py-[18px] px-8 text-[#777777] bg-white border-none rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.05)] outline-none text-[15px] placeholder:text-[#999999]"
                required
              />
            </div>

           
            <button 
              type="submit" 
              className="bg-[#ffdc12] text-[#000000] font-[600] py-[16px] px-[45px] rounded-md transition-all duration-300 hover:bg-[#07294d] hover:text-white text-[15px] uppercase tracking-[0.5px]"
            >
              Submit Now
            </button>
          </form>
        </div>

      </div>

    
      <div className="absolute top-[20%] left-[10%] w-3 h-3 border-2 border-[#ffdc12] rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute bottom-[20%] right-[12%] w-4 h-4 border-2 border-white rounded-full opacity-30"></div>
      <div className="absolute top-[40%] right-[5%] w-6 h-6 border-2 border-white rotate-45 opacity-20"></div>

    </section>
  );
};

export default HomeSevenNews;