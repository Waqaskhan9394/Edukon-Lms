import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaUsers, FaGraduationCap, FaBell, FaClock } from 'react-icons/fa';

const AchievementThree = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const stats = [
    { id: 1, icon: <FaUsers />, count: 12600, title: "Students Enrolled", color: "bg-[#ff6b2c]", shadow: "shadow-[0_0_20px_rgba(255,107,44,0.3)]", border: "border-[#ff6b2c]" },
    { id: 2, icon: <FaGraduationCap />, count: 50, title: "Certified Trainer", color: "bg-[#2ec4b6]", shadow: "shadow-[0_0_20px_rgba(46,196,182,0.3)]", border: "border-[#2ec4b6]" },
    { id: 3, icon: <FaBell />, count: 350, title: "Professional Courses", color: "bg-[#e71d36]", shadow: "shadow-[0_0_20px_rgba(231,29,54,0.3)]", border: "border-[#e71d36]" },
    { id: 4, icon: <FaClock />, count: 50, title: "Years of Experience", color: "bg-[#4361ee]", shadow: "shadow-[0_0_20px_rgba(67,97,238,0.3)]", border: "border-[#4361ee]" },
  ];

  return (
    <section 
      ref={ref}
      className="py-24 bg-[#f8f9fa] relative overflow-hidden"
      style={{
        backgroundImage: 'url("https://img.freepik.com/free-vector/white-abstract-background_23-2148810353.jpg")',
        backgroundSize: 'cover'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((item) => (
            <div key={item.id} className="text-center group cursor-default">
              
              {/* --- Icon Container --- */}
              <div className="relative mx-auto w-32 h-32 flex items-center justify-center mb-6">
                
                {/* 1. Static Outer Border (Visible Always) */}
                <div className={`absolute inset-2 rounded-full border-2 border-dashed ${item.border} opacity-20 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-700`}></div>

                {/* 2. Hover Layer (Pulsing Effect only on Hover) */}
                <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 group-hover:animate-ping ${item.color}`}></div>
                
                {/* 3. Main Circle */}
                <div className={`relative w-20 h-20 rounded-full ${item.color} ${item.shadow} flex items-center justify-center text-white text-3xl z-10 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-[360deg]`}>
                  {item.icon}
                </div>
              </div>

              {/* Counter Number */}
              <div className="text-[#07294d] text-4xl md:text-5xl font-[900] mb-2 tracking-tight">
                {inView && (
                  <>
                    <CountUp end={item.count} duration={3} />
                    <span>+</span>
                  </>
                )}
              </div>

              {/* Title */}
              <p className="text-gray-500 text-[15px] font-bold tracking-widest uppercase transition-colors duration-300 group-hover:text-[#07294d]">
                {item.title}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementThree;