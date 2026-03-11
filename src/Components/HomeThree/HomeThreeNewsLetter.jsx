import React from 'react';
import { FaEnvelopeOpenText } from 'react-icons/fa';

const Newsletter = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* --- Left Content --- */}
          <div className="lg:w-5/12 text-center lg:text-left">
            <h2 className="text-[#07294d] text-4xl md:text-5xl font-black mb-4">
              Subscribe to Newsletter
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Subscribe free and get the notification and latest offers of our courses.
            </p>
          </div>

          {/* --- Middle Icon (Pulse Effect) --- */}
          <div className="relative flex items-center justify-center">
            {/* Outer Animated Rings */}
            <div className="absolute w-24 h-24 bg-[#ff6b2c] opacity-20 rounded-full animate-ping"></div>
            <div className="absolute w-20 h-20 bg-[#ff6b2c] opacity-30 rounded-full animate-pulse"></div>
            
            {/* Icon Circle */}
            <div className="relative w-16 h-16 bg-[#ff6b2c] rounded-full flex items-center justify-center z-10 shadow-lg shadow-orange-200">
              <FaEnvelopeOpenText className="text-white text-2xl" />
            </div>
          </div>

          {/* --- Right Form --- */}
          <div className="lg:w-5/12 w-full bg-white">
            <h4 className="text-[#07294d] text-xl font-bold mb-6">
              Enter Your Name & Email <br /> 
              Press to Submit Button
            </h4>
            
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="w-full px-6 py-4 bg-[#f8f9fa] border border-gray-100 rounded-md focus:outline-none focus:border-[#ff6b2c] transition-all"
              />
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full px-6 py-4 bg-[#f8f9fa] border border-gray-100 rounded-md focus:outline-none focus:border-[#ff6b2c] transition-all"
              />
              <button 
                type="submit" 
                className="w-full lg:w-max px-10 py-4 bg-[#ff6b2c] text-white font-bold rounded-md hover:bg-[#e85a1e] transition-colors duration-300 uppercase tracking-wider text-sm"
              >
                Get Started Now
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Background Decorative Shape (Bottom Wave) */}
      <div className="absolute bottom-0 left-0 w-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#07294d" fillOpacity="1" d="M0,224L120,202.7C240,181,480,139,720,138.7C960,139,1200,181,1320,202.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Newsletter;