import React from 'react';

// Images Import
import achieveBG from '../../assets/Image/AchieveBG.png'; 
import instructorImg from '../../assets/Image/Achieve1.png'; 
import studentImg from '../../assets/Image/Achieve2.png'; 

const AchievementSection = () => {
  return (
    <section className="relative py-16 font-['Roboto',sans-serif] overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-center "
        style={{ backgroundImage: `url(${achieveBG})` }}
      ></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
         {/* --- HEADER SECTION (AS PER CAPTURE.5PNG) --- */}
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

        {/* --- CTA CARDS (Bigger Images & Less Padding) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Card 1: Become An Instructor */}
          <div className="bg-white rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.05)] flex flex-col md:flex-row items-stretch group hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-gray-100">
            {/* Content Left (Padding Reduced) */}
            <div className="p-5 md:p-8 flex-1 flex flex-col justify-center items-start text-left z-10">
              <h3 className="text-[24px] font-[800] text-[#1A2132] mb-2 leading-tight">Start Teaching Today</h3>
              <p className="text-[#777777] text-[14px] leading-relaxed mb-5">
                Seamlessly engage technically sound coaborative reintermed goal oriented content.
              </p>
              <button className="bg-[#FFEBCC] text-[#1A2132] font-bold py-2.5 px-6 rounded-md hover:bg-[#FF6B2C] hover:text-white transition-all duration-300 text-[14px]">
                Become A Instructor
              </button>
            </div>
            
            {/* Image Right (Larger Size) */}
            <div className="relative w-full md:w-[260px] flex items-end justify-center md:justify-end self-end">
              <img 
                src={instructorImg} 
                alt="Instructor" 
                className="w-[200px] md:w-full h-auto object-contain block leading-none" 
                style={{ marginBottom: '-1px' }} // To prevent any white gaps at bottom
              />
            </div>
          </div>

          {/* Card 2: Join Our Course */}
          <div className="bg-white rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.05)] flex flex-col md:flex-row items-stretch group hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-gray-100">
            {/* Content Left (Padding Reduced) */}
            <div className="p-5 md:p-8 flex-1 flex flex-col justify-center items-start text-left z-10">
              <h3 className="text-[24px] font-[800] text-[#1A2132] mb-2 leading-tight">If You Join Our Course</h3>
              <p className="text-[#777777] text-[14px] leading-relaxed mb-5">
                Seamlessly engage technically sound coaborative reintermed goal oriented content.
              </p>
              <button className="bg-[#26B978] text-white font-bold py-2.5 px-6 rounded-md hover:bg-[#1f9661] transition-all duration-300 text-[14px]">
                Register For Free
              </button>
            </div>
            
            {/* Image Right (Larger Size) */}
            <div className="relative w-full md:w-[260px] flex items-end justify-center md:justify-end self-end">
              <img 
                src={studentImg} 
                alt="Student" 
                className="w-[200px] md:w-full h-auto object-contain block leading-none"
                style={{ marginBottom: '-1px' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AchievementSection;