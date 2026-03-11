import React from 'react';
import { 
  FaRegLightbulb, FaUserGraduate, FaRocket, 
  FaChartLine, FaDollarSign, FaFlag, 
  FaBrain, FaBookOpen, FaUsers 
} from 'react-icons/fa';

const HomeFiveLearningSection = () => {
  const objectives = [
    { title: "Creative Thinking", desc: "Proactive enhance rospect resource for next generation convergence dramatical myocardinate.", icon: <FaBrain /> },
    { title: "Improve Skill", desc: "Proactive enhance rospect resource for next generation convergence dramatical myocardinate.", icon: <FaRegLightbulb /> },
    { title: "Self Learning", desc: "Proactive enhance rospect resource for next generation convergence dramatical myocardinate.", icon: <FaUserGraduate /> },
    { title: "Knowledge", desc: "Proactive enhance rospect resource for next generation convergence dramatical myocardinate.", icon: <FaRocket /> },
    { title: "Self Development", desc: "Proactive enhance rospect resource for next generation convergence dramatical myocardinate.", icon: <FaBookOpen /> },
    { title: "Community Building", desc: "Proactive enhance rospect resource for next generation convergence dramatical myocardinate.", icon: <FaUsers /> },
    { title: "Career Building", desc: "Proactive enhance rospect resource for next generation convergence dramatical myocardinate.", icon: <FaChartLine /> },
    { title: "Start Earning", desc: "Proactive enhance rospect resource for next generation convergence dramatical myocardinate.", icon: <FaDollarSign /> },
    { title: "Be Confedent", desc: "Proactive enhance rospect resource for next generation convergence dramatical myocardinate.", icon: <FaFlag /> },
  ];

  return (
    <section className="py-28 bg-white font-sans">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-20">
          <span className="text-[#ffdc12] font-bold text-[15px] uppercase tracking-[4px] block mb-3">
            What Can You Learn
          </span>
          <h2 className="text-[#07294d] text-[30px] md:text-[40px]  tracking-tight">
            Learning Objectives
          </h2>
        </div>

        {/* --- OBJECTIVES GRID --- */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
          {objectives.map((item, index) => (
            <div key={index} className="flex items-start gap-6 group">
              
            
              <div className="w-[75px] h-[75px] rounded-full border border-[#ffdc12] flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-[#ffdc12] group-hover:shadow-lg">
                <div className="text-[#ffdc12] text-[26px] group-hover:text-white transition-colors duration-500">
                  {item.icon}
                </div>
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-[#07294d] text-[22px] font-black mb-3 transition-colors duration-300 group-hover:text-[#ffdc12]">
                  {item.title}
                </h3>
                <p className="text-[#07294d]/60 text-[16px] leading-[1.7] font-medium">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeFiveLearningSection;