import React from 'react';

// Images Import
import achieveBG from '../../assets/Image/AchieveBG.png'; 
import instructorImg from '../../assets/Image/Achieve1.png'; 
import studentImg from '../../assets/Image/Achieve2.png'; 

const AchievementGoul = () => {
  return (
    <section className="relative py-18 font-['Roboto',sans-serif] overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-center "
        style={{ backgroundImage: `url(${achieveBG})` }}
      ></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
         {/* --- HEADER SECTION  --- */}
        <div className="text-center mb-16">
          <span className="text-[#FF6B2C] font-bold tracking-[4px] uppercase text-[14px] block mb-3">
            START TO SUCCESS
          </span>
          <h2 className="text-[36px] md:text-[48px] font-[900] text-[#1A2132] leading-tight">
            Achieve Your Goals With Edukon
          </h2>
        </div>
        
        {/* --- STATS SECTION --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 text-center">
          {[
            { count: "30+", text: "Years of Language Education Experience" },
            { count: "3084+", text: "Learners Enrolled in Edukon Courses" },
            { count: "330+", text: "Qualified Teachers And Language Experts" },
            { count: "2300+", text: "Innovative Foreign Language Courses" }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-[42px] font-[900] text-[#1A2132] leading-none mb-2">{item.count}</h3>
              <p className="text-[#555555] text-[13px] font-medium max-w-[160px] leading-tight">{item.text}</p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default AchievementGoul;