import React from 'react';

// Images Import
import appStore from '../../assets/Image/AppStore.jpg';
import googlePlay from '../../assets/Image/GooglePlay.jpg';

const HomeFourAppDownload = () => {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      
    
      
   
      
     
      
      

      <div className="container mx-auto px-4 text-center relative z-10">
        
        {/* --- SMALL BADGE --- */}
        <div className="inline-block mb-8">
          <span className="border-2 border-[#ffdc12] text-[#07294d] font-bold px-8 py-2.5 rounded-md text-[14px] uppercase tracking-widest bg-white shadow-sm ">
            Sign up for Free
          </span>
        </div>

        {/* --- MAIN HEADING */}
        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="text-[#07294d] text-[38px] md:text-[55px] font-extrabold leading-[1.1]">
            Learn Anytime, Anywhere
          </h2>
        </div>

       
        <div className="max-w-2xl mx-auto mb-16">
          <p className="text-[#555] text-[17px] md:text-[19px] leading-relaxed opacity-90">
            Take courses on your any device with our app & learn all time what you 
            want. Just download & install & start to learn
          </p>
        </div>

        {/* --- DOWNLOAD BUTTONS --- */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
          {/* App Store Button */}
          <a 
            href="#" 
            className="transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:scale-95"
          >
            <img 
              src={appStore} 
              alt="Download on the App Store" 
              className="h-[65px] md:h-[85px] w-auto rounded-xl shadow-lg border border-gray-100"
            />
          </a>

          {/* Google Play Button */}
          <a 
            href="#" 
            className="transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:scale-95"
          >
            <img 
              src={googlePlay} 
              alt="Get it on Google Play" 
              className="h-[65px] md:h-[85px] w-auto rounded-xl shadow-lg border border-gray-100"
            />
          </a>
        </div>

      </div>
    </section>
  );
};

export default HomeFourAppDownload;