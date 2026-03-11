import React from 'react';
// React Icons import
import { FaRegCreditCard, FaLightbulb, FaGraduationCap } from 'react-icons/fa';
import { IoSendOutline, IoStatsChartOutline, IoPeopleOutline } from 'react-icons/io5';

// Image import
import professorImg from '../../assets/Image/Professor1.png';

const HomeSevenCourses = () => {
  const leftFeatures = [
    {
      title: "Brofessional Teacher",
      desc: "Proact enhance prospective resource for next conver dramaatical myocardin high-quality vortals.",
      icon: <FaRegCreditCard size={28} />,
    },
    {
      title: "Improve Skill",
      desc: "Proact enhance prospective resource for next conver dramaatical myocardin high-quality vortals.",
      icon: <FaLightbulb size={28} />,
    },
    {
      title: "Self Learning",
      desc: "Proact enhance prospective resource for next conver dramaatical myocardin high-quality vortals.",
      icon: <FaGraduationCap size={32} />,
    }
  ];

  const rightFeatures = [
    {
      title: "Knowledge",
      desc: "Proact enhance prospective resource for next conver dramaatical myocardin high-quality vortals.",
      icon: <IoSendOutline size={28} />,
    },
    {
      title: "Self Development",
      desc: "Proact enhance prospective resource for next conver dramaatical myocardin high-quality vortals.",
      icon: <IoStatsChartOutline size={28} />,
    },
    {
      title: "Community Building",
      desc: "Proact enhance prospective resource for next conver dramaatical myocardin high-quality vortals.",
      icon: <IoPeopleOutline size={30} />,
    }
  ];

  return (
    <section className="py-24 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="text-[#ffdc12] uppercase tracking-[4px] text-[18px] font-bold">
            Choose Any One Course
          </span>
          <h2 className="text-black text-[32px] md:text-[40px] font-[700] mt-3 leading-tight">
            Learn Everything with Professor
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12 lg:gap-8">
          
          {/*  Left Column  */}
          <div className="order-1 lg:order-1 space-y-16 w-full">
            {leftFeatures.map((item, index) => (
              <div key={index} className="group flex flex-col-reverse lg:flex-row items-center lg:items-start text-center lg:text-right gap-6 cursor-pointer">
                <div className="flex-1">
                  <h4 className="text-[22px] font-bold text-black mb-3 group-hover:text-[#ffdc12] transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-[#555555] text-[15px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="w-[75px] h-[75px] min-w-[75px] flex items-center justify-center rounded-full border-2 border-[#ffdc12] text-[#ffdc12] bg-transparent 
                                transition-all duration-300 transform group-hover:scale-110 group-hover:bg-[#ffdc12] group-hover:text-white shadow-sm">
                  {item.icon}
                </div>
              </div>
            ))}
          </div>

          {/*  Center Image  */}
          <div className="order-3 lg:order-2 relative flex justify-center z-10 scale-100 md:scale-110 lg:scale-125 mt-10 lg:mt-0">
             <img 
                src={professorImg} 
                alt="Professor" 
                className="max-w-full h-auto object-contain"
              />
          </div>

          {/*  Right Column */}
          <div className="order-2 lg:order-3 space-y-16 w-full">
            {rightFeatures.map((item, index) => (
              <div key={index} className="group flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-6 cursor-pointer">
                <div className="w-[75px] h-[75px] min-w-[75px] flex items-center justify-center rounded-full border-2 border-[#ffdc12] text-[#ffdc12] bg-transparent 
                                transition-all duration-300 transform group-hover:scale-110 group-hover:bg-[#ffdc12] group-hover:text-white shadow-sm">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-[22px] font-bold text-[#07294d] mb-3 group-hover:text-[#ffdc12] transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-[#555555] text-[15px] leading-relaxed">
                    {item.desc}
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

export default HomeSevenCourses;