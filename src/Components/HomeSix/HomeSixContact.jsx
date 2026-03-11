import React from 'react';
import contactBg from '../../assets/Image/HomeSixForm.jpg';

const HomeSixContact = () => {
  return (
    
    <section className="relative py-20 md:py-40 font-sans overflow-hidden">
      {/* 1. Background  */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        {/* <div className="absolute inset-0 bg-white/90"></div> */}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/*  Section Header  */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[#07294d] text-[28px] sm:text-[32px] md:text-[42px] font-[1000] mb-3 leading-tight">
            Need Any <span className="text-[#ffdc12]">Help?</span>
          </h2>
          <p className="text-gray-500 text-[14px] sm:text-[15px] md:text-[17px] max-w-xl mx-auto font-medium px-4">
            You can contact with us for anykinds of informations and help. We are ready to help you.
          </p>
        </div>

       
        <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto gap-2 md:gap-0">
          
  
          <div className="flex flex-col items-center text-center w-full md:w-1/3">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-dashed border-[#ffdc12] flex items-center justify-center mb-4 p-1.5 transition-transform hover:rotate-12">
               <div className="w-full h-full bg-white rounded-full shadow-md flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#07294d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
               </div>
            </div>
            <p className="text-[#ffdc12] font-bold text-[12px] sm:text-[13px] uppercase tracking-wider mb-1">Make a Call:</p>
            <h3 className="text-[#07294d] text-[18px] sm:text-[22px] md:text-[28px] font-black tracking-tight break-all">
              +880 1234 567890
            </h3>
          </div>

          
          <div className="flex items-center justify-center py-6 md:py-0 w-full md:w-auto">
             <div className="hidden lg:block w-12 xl:w-20 h-[1px] bg-gray-300 border-dashed border-t"></div>
             <div className="w-10 h-10 rounded-full bg-[#ffdc12] flex items-center justify-center text-[#07294d] font-extrabold text-[12px] mx-2 shadow-sm shrink-0">
               Or
             </div>
             <div className="hidden lg:block w-12 xl:w-20 h-[1px] bg-gray-300 border-dashed border-t"></div>
          </div>

          {/* Email Section */}
          <div className="flex flex-col items-center text-center w-full md:w-1/3">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-dashed border-[#ffdc12] flex items-center justify-center mb-4 p-1.5 transition-transform hover:-rotate-12">
               <div className="w-full h-full bg-white rounded-full shadow-md flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#07294d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
               </div>
            </div>
            <p className="text-[#ffdc12] font-bold text-[12px] sm:text-[13px] uppercase tracking-wider mb-1">Send Us Messege at:</p>
            <h3 className="text-[#07294d] text-[18px] sm:text-[22px] md:text-[28px] font-black tracking-tight lowercase break-all">
              contact@yourmail.com
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeSixContact;