import React from 'react';
import { FaUsers, FaGraduationCap, FaBell } from 'react-icons/fa';

// Image Import
import instructorImg from '../../assets/Image/HomeFourInstructor.png';

const HomeFourInstructor = () => {
  const stats = [
    {
      id: 1,
      count: "12600 +",
      label: "Students Enrolled",
      icon: <FaUsers />,
      bgColor: "bg-[#ff7a41]",
    },
    {
      id: 2,
      count: "50 +",
      label: "Certified Trainer",
      icon: <FaGraduationCap />,
      bgColor: "bg-[#2ecc71]",
    },
    {
      id: 3,
      count: "350 +",
      label: "Professional Courses",
      icon: <FaBell />,
      bgColor: "bg-[#ffdc12]",
    },
  ];

  return (
    <section className="relative overflow-hidden min-h-[600px] flex items-center bg-[#1a1a1a]">
    
      <div className="absolute inset-0 hidden md:flex flex-row">
        <div className="w-1/2 bg-[#1a1a1a]"></div>
        <div className="w-1/2 bg-[#ffdc12]"></div>
      </div>

      
      <div className="absolute inset-0 hidden md:block">
        <div 
          className="absolute inset-0 bg-[#ffdc12]" 
          style={{ clipPath: 'polygon(45% 0, 100% 0, 100% 100%, 55% 100%)' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-16 md:py-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* --- LEFT SIDE: STATS --- */}
          <div className="w-full md:w-1/3 flex flex-col gap-10">
            {stats.map((stat) => (
              <div key={stat.id} className="flex items-center gap-6 group">
                <div className={`${stat.bgColor} w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white text-2xl md:text-3xl shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-transform group-hover:scale-110`}>
                  {stat.icon}
                </div>
                <div className="text-white">
                  <h3 className="text-[28px] md:text-[36px] font-bold leading-none">{stat.count}</h3>
                  <p className="text-gray-400 text-[14px] md:text-[16px] mt-1">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* --- CENTER: INSTRUCTOR IMAGE --- */}
          <div className="w-full md:w-1/3 flex justify-center relative">

          
            
            <img 
              src={instructorImg} 
              alt="Instructor" 
              className="relative z-20 w-[280px] md:w-[380px] h-auto object-contain"
            />
          </div>

          {/* --- RIGHT SIDE --- */}
          <div className="w-full md:w-1/3 text-left">
            
            <span className="text-[#ffdc12] md:text-[#07294d] font-semibold text-[14px] md:text-[16px] mb-2 block uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-white md:text-[#07294d] text-[32px] md:text-[45px] font-bold leading-tight mb-6">
              Become Online <br /> Instructor
            </h2>
            <p className="text-gray-300 md:text-[#07294d]/80 text-[16px] md:text-[17px] leading-relaxed mb-8 max-w-sm">
              Take courses on your any device with our app & learn all time what you want. 
              Just download & install & start to learn
            </p>
            <button className="bg-[#ffdc12] md:bg-white text-[#07294d] font-bold px-8 py-3.5 rounded-md shadow-lg hover:bg-white md:hover:bg-[#07294d] md:hover:text-white transition-all duration-300">
              Apply Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeFourInstructor;