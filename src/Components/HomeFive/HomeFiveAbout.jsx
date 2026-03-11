import React from 'react';
import { FaUsers, FaGraduationCap, FaBell } from 'react-icons/fa';
import instructorImg from '../../assets/Image/HomeFiveAbout.jpg'; 

const HomeFiveAboutSection = () => {
  const stats = [
    { 
      id: 1, 
      count: "12600 +", 
      label: "Students Enrolled", 
      icon: <FaUsers />, 
      color: "#ff5a1f", 
      shadow: "rgba(255, 90, 31, 0.15)" 
    },
    { 
      id: 2, 
      count: "50 +", 
      label: "Certified Trainer", 
      icon: <FaGraduationCap />, 
      color: "#26d394", 
      shadow: "rgba(38, 211, 148, 0.15)" 
    },
    { 
      id: 3, 
      count: "350 +", 
      label: "Professional Courses", 
      icon: <FaBell />, 
      color: "#ffdc12", 
      shadow: "rgba(255, 220, 18, 0.15)" 
    },
  ];

  return (
    <section className="py-20 bg-white font-sans">
      <div className="container mx-auto px-4 md:px-10 lg:px-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* --- LEFT: INSTRUCTOR IMAGE (Size Reduced) --- */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className=" overflow-hidden  shadow-sm w-full max-w-[320px]">
              <img 
                src={instructorImg} 
                alt="Lincon Senses" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* --- CENTER: TEXT DETAILS (Font Size Reduced) --- */}
          <div className="lg:col-span-5">
            <h2 className="text-[32px] md:text-[40px] font-black font-light text-[#07294d] leading-tight mb-5">
              About <span className="text-[#07294d] font-bold">Lincon Senses</span>
            </h2>
            <p className="text-[#07294d]/70 text-[16px] leading-relaxed mb-8 font-medium max-w-md">
              Lincon Senses is Senior English Teacher of Professor University. 
              I am Sharing my knowledge with my lovely students
            </p>

            <div className="space-y-3">
              {[
                { label: "Role", value: "Senior English Teacher" },
                { label: "Experience", value: "15 Years" },
                { label: "Specialist in", value: "Web Developer" },
                { label: "Phone", value: "+880 1234 567890" },
                { label: "Mail", value: "contact@yourmail.com" },
                { label: "Location", value: "Grand Junction, Colorado USA" },
              ].map((item, index) => (
                <div key={index} className="flex items-center text-[15.5px]">
                  <span className="font-bold text-[#07294d] w-32 flex-shrink-0">{item.label}</span>
                  <span className="text-[#07294d]/70 font-semibold">: {item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT: CIRCULAR STATS --- */}
          <div className="lg:col-span-3 space-y-8 mt-10 lg:mt-0">
            {stats.map((stat) => (
              <div key={stat.id} className="flex items-center gap-5">
                <div 
                  className="w-[75px] h-[75px] rounded-full flex items-center justify-center text-white text-[26px] shrink-0 transition-transform hover:rotate-12"
                  style={{ 
                    backgroundColor: stat.color,
                    boxShadow: `0 0 0 8px ${stat.shadow}` 
                  }}
                >
                  {stat.icon}
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-[24px] font-black text-[#07294d] leading-none mb-1">
                    {stat.count}
                  </h3>
                  <p className="text-[#07294d]/50 font-bold text-[13px] uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeFiveAboutSection;