import React, { useState, useEffect } from 'react';
import workshopBg from '../../assets/Image/WorkshopBg.jpg';

const WorkshopSection = () => {
  // 1. Initial State: 
  const [timeLeft, setTimeLeft] = useState({
    days: 1214,
    hours: 2,
    minutes: 45,
    seconds: 52
  });

  //  Timer Logic: 
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer); 
  }, []);


  const timerDisplay = [
    { label: "Day", value: timeLeft.days },
    { label: "Hour", value: timeLeft.hours },
    { label: "Minute", value: timeLeft.minutes },
    { label: "Second", value: timeLeft.seconds },
  ];

  return (
    <div className="relative font-['Roboto',sans-serif]">
      <section 
        className="relative pt-24 pb-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${workshopBg})` }}
      >
       

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <span 
              className="bg-[#ff6b2c] text-white font-bold uppercase tracking-[2px] text-xs px-6 py-2 mb-6 inline-block"
              style={{ clipPath: "polygon(0 0, 90% 0, 100% 100%, 0% 100%)" }}
            >
              Save The Day
            </span>

            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-12">
              Join on Day Long Free <br /> 
              Workshop for <span className="text-[#ff6b2c]">Advance PHP</span> <br /> 
              Language
            </h2>

            {/* --- Live Countdown Circles  */}
            <div className="flex flex-wrap gap-4 md:gap-8 mb-16">
              {timerDisplay.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-full flex flex-col items-center justify-center shadow-2xl transition-all duration-300">
                    {/* Number with Minus  */}
                    <span className="text-[#07294d] text-2xl md:text-3xl font-black leading-none">
                      -{item.value < 10 ? `0${item.value}` : item.value}
                    </span>
                    <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-1">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Floating Form Section  */}
      <div className="relative -mt-20 z-20 px-4">
        <div className="container mx-auto max-w-6xl">
          
           <div className="bg-[#ff6b2c] text-white px-8 py-4 inline-block rounded-t-lg" style={{ clipPath: "polygon(0 0, 95% 0, 100% 100%, 0% 100%)" }}>
              <h4 className="font-bold text-lg">Just Create Your Free Account Now & Join the Workshop</h4>
            </div>
            <div className="bg-white p-4 md:p-10 grid grid-cols-1 md:grid-cols-4 gap-4 rounded-b-lg rounded-tr-lg border-b-4 border-[#ff6b2c]">
              <input type="text" placeholder="Username" className="bg-gray-50 border border-gray-200 px-5 py-4 text-sm outline-none focus:border-[#ff6b2c]" />
              <input type="email" placeholder="Email" className="bg-gray-50 border border-gray-200 px-5 py-4 text-sm outline-none focus:border-[#ff6b2c]" />
              <input type="text" placeholder="Phone" className="bg-gray-50 border border-gray-200 px-5 py-4 text-sm outline-none focus:border-[#ff6b2c]" />
              <button className="bg-[#ff6b2c] text-white font-black py-4 uppercase text-sm hover:bg-[#07294d] transition-all">Join Now</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopSection;