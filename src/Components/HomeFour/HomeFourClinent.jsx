import React from 'react';

// Images Import
import clinteBg from '../../assets/Image/Clintebg.png';
import avatar from '../../assets/Image/avater.jpg'; 

const WorldMapSection = () => {
  const dotPositions = [
    { id: 1, top: '25%', left: '22%', color: 'bg-[#ff7a41]' },
    { id: 2, top: '42%', left: '42%', color: 'bg-[#7d5fff]' },
    { id: 3, top: '45%', right: '28%', color: 'bg-[#00c0ff]' },
    { id: 4, top: '75%', left: '38%', color: 'bg-[#2ecc71]' },
    { id: 5, top: '35%', left: '48%', color: 'bg-[#ffdc12]' },
    { id: 6, top: '65%', right: '35%', color: 'bg-[#e84393]' },
  ];

  return (
    <section className="py-12 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        
        {/* --- HEADING  */}
        <div className="max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-[#07294d] text-[28px] sm:text-[35px] md:text-[48px] font-bold leading-tight mb-4 md:mb-5 px-2">
            More Than <span className="text-[#ffdc12]">60,000</span> Students
          </h2>
          <p className="text-[#555] text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed max-w-2xl mx-auto px-4">
            Take courses on your any device with our app & learn all time what you 
            want. Just download & install & start to learn
          </p>
        </div>

        {/* --- WORLD MAP CONTAINER --- */}
        <div className="relative w-full max-w-5xl mx-auto px-2">
          {/* Map Image */}
          <img 
            src={clinteBg} 
            alt="World Map" 
            className="w-full h-auto object-contain opacity-100 min-h-[250px]" 
          />
          
          {/* Interactive Dots Layer */}
          {dotPositions.map((dot) => (
            <div 
              key={dot.id}
              className="absolute group cursor-pointer"
              style={{ 
                top: dot.top, 
                left: dot.left, 
                right: dot.right,
                transform: 'translate(-50%, -50%)' 
              }}
            >
              {/* --- TOOLTIP TEXT --- */}
              <div className="absolute bottom-full mb-2 md:mb-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-30 translate-y-2 group-hover:translate-y-0">
                <div className="bg-[#07294d] text-white text-[10px] md:text-[13px] font-semibold px-2 md:px-4 py-1 md:py-2 rounded-md shadow-xl">
                  Join with Us
                </div>
                {/* Tooltip Arrow */}
                <div className="w-2 h-2 bg-[#07294d] rotate-45 absolute -bottom-0.5 left-1/2 -translate-x-1/2"></div>
              </div>

              {/* --- RESPONSIVE DOT / AVATAR --- */}
              
              <div className={`relative 
                w-4 h-4 md:w-7 md:h-7 
                ${dot.color} rounded-full transition-all duration-500 ease-in-out 
                group-hover:w-10 group-hover:h-10 md:group-hover:w-16 md:group-hover:h-16 
                group-hover:shadow-2xl overflow-hidden border-2 md:border-[3px] border-transparent ring-1 ring-black/5`}>
                
                <img 
                  src={avatar} 
                  alt="avatar" 
                  className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110 group-hover:scale-100"
                />
              </div>

              {/* Outer Pulse Animation (Hidden on very small screens to save performance) */}
              <div className={`absolute inset-0 w-full h-full ${dot.color} rounded-full opacity-30 group-hover:hidden animate-ping scale-150 hidden sm:block`}></div>
            </div>
          ))}
        </div>

      </div>

      
    </section>
  );
};

export default WorldMapSection;