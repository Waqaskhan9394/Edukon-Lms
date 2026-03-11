import React, { useState, useEffect } from 'react';

import offerBg from '../../assets/Image/offerbg.jpg';

const HomeSevenOffer = () => {
  
  const targetDate = new Date("December 31, 2026 23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

 return (
    <section 
      className="relative w-full py-12 md:py-16 lg:py-28 bg-no-repeat bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${offerBg})` }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex flex-col lg:grid lg:grid-cols-2 items-center lg:items-start gap-10 lg:gap-10">
          
          {/* Left Side Content */}
          <div className="text-center lg:text-left w-full">
            <h2 className="text-black text-[28px] sm:text-[36px] md:text-[40px] lg:text-[45px] font-[700] leading-[1.2] lg:leading-[1.1] mb-4 lg:mb-6">
              Learning Spanish <br className="hidden md:block" /> Language
            </h2>
            <p className="text-black/90 text-[16px] md:text-[20px] font-medium lg:font-extralight max-w-md mx-auto lg:mx-0">
              It's Perfect Time to Learn Spanish Language
            </p>
          </div>

          {/* Right Side Countdown Card  */}
          <div className="flex justify-center lg:justify-end w-full mt-4 lg:mt-0">
            <div className="bg-white rounded-[10px] p-6 sm:p-8 md:p-12 shadow-2xl w-full max-w-[500px] text-center border border-gray-100">
              
              <h3 className="text-[20px] md:text-[32px] font-bold text-black mb-8 lg:mb-10 leading-tight">
                <span className="text-[#ffdc12]">35%</span> Discount. Let's Start!
              </h3>

             
              <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-8 lg:mb-10">
                {[
                  { label: "Day", val: timeLeft.days },
                  { label: "Hour", val: timeLeft.hours },
                  { label: "Minute", val: timeLeft.minutes },
                  { label: "Secound", val: timeLeft.seconds }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-[#ffdc12] text-[22px] sm:text-[32px] md:text-[42px] font-extrabold leading-none">
                      -{item.val}
                    </span>
                    <span className="text-gray-400 text-[10px] md:text-[14px] mt-2 uppercase font-bold tracking-tighter">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Register Button */}
              <button className="bg-[#ffdc12] hover:-translate-y-1.5 text-black py-3 px-8 rounded-[5px] transition-all duration-300 uppercase text-[11px] md:text-[12px] font-bold tracking-widest shadow-lg active:scale-95">
                Register Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeSevenOffer;