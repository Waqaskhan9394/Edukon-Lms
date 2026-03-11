import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
// Image path ko confirm karlein
import Image404 from '../assets/Image/404.png';

const ErrorPage = () => {
  return (
    // Background color aur full height setup
    <div className="min-h-screen bg-[#FDF9F6] font-['Roboto',sans-serif] flex items-center justify-center selection:bg-[#ff6b2c]/20">
      
      {/* Container with responsive padding */}
      <div className="container mx-auto px-6 py-12 md:py-20 lg:py-28 max-w-7xl">
        
        {/* Flex: Mobile me column (stack), Desktop me row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          
          {/* --- TEXT CONTENT (Left on Desktop, Bottom on Mobile) --- */}
          {/* order-2 lagaya hai taaki mobile par image pehle dikhe */}
          <div className="w-full lg:w-[45%] text-center lg:text-left order-2 lg:order-1">
            
            {/* Responsive Heading: Mobile (45px) -> Tablet (70px) -> Desktop (100px) */}
            <h1 className="text-[45px] sm:text-[70px] md:text-[85px] lg:text-[100px] font-[900] text-[#07294d] leading-[0.9] mb-4 tracking-tighter">
              ERROR <br /> 404!
            </h1>
            
            {/* Responsive Paragraph */}
            <p className="text-[16px] sm:text-[18px] md:text-[22px] text-[#555555] font-medium mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Oops! The Page You Are Looking For Could Not Be Found
            </p>
            
            {/* Action Button */}
            <button className="bg-[#ff6b2c] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-md font-bold uppercase text-[13px] sm:text-[15px] tracking-wide flex items-center gap-2 hover:bg-[#07294d] transition-all duration-300 shadow-lg shadow-orange-200 hover:shadow-none mx-auto lg:mx-0 active:scale-95">
              Go Back To Home <FiExternalLink strokeWidth={3} className="text-lg" />
            </button>
          </div>

          {/* --- IMAGE CONTENT (Right on Desktop, Top on Mobile) --- */}
          {/* order-1 lagaya hai taaki mobile par image upar aaye */}
          <div className="w-full lg:w-[55%] order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[300px] sm:max-w-[450px] lg:max-w-full">
              <img 
                src={Image404} 
                alt="404 Error Illustration" 
                className="w-full h-auto object-contain transition-transform duration-700 hover:scale-105"
                style={{ maxHeight: 'min(500px, 60vh)' }}
              />
              
              {/* Background Glow/Shape (Optional - screenshot feel ke liye) */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-orange-100/50 to-blue-100/30 rounded-full blur-3xl" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ErrorPage;