import React from 'react';
// Images as per your instruction
import About1 from '../../assets/Image/About1.jpg';
import About2 from '../../assets/Image/about22.jpg';
import aboutIcon2 from '../../assets/Image/About2.jpg'; 
import aboutIcon3 from '../../assets/Image/About3.jpg'; 
import aboutIcon4 from '../../assets/Image/About4.jpg'; 

import { FaGraduationCap, FaCertificate, FaTv } from 'react-icons/fa';

const AboutSectionThumb = () => {
     const features = [
    {
      id: 1,
      title: "Skilled Instructors",
      desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
      img: aboutIcon2,
      bgColor: "bg-[#E9F8F1]"
    },
    {
      id: 2,
      title: "Get Certificate",
      desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
      img: aboutIcon3,
      bgColor: "bg-[#E7F6FC]"
    },
    {
      id: 3,
      title: "Online Classes",
      desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
      img: aboutIcon4,
      bgColor: "bg-[#FFF6E6]"
    }
  ];
  return (
    <section className="py-20 bg-[#FFF9F1] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side: Images Section */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative">
              {/* Main Image (About1) */}
              <div className="rounded-lg overflow-hidden border-[10px] border-[#f8f9fa] shadow-sm">
                <img 
                  src={About1} 
                  alt="About One" 
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Smaller Image (About2) */}
              <div className="absolute -bottom-10 -right-5 md:right-0 w-1/2 rounded-lg overflow-hidden border-[8px] border-white shadow-xl z-20">
                <img 
                  src={About2} 
                  alt="About Two" 
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute bottom-0 left-0 bg-[#ff6b2c] p-6  text-white shadow-lg z-30 animate-bounce-slow border-[8px] border-white">
                <h3 className="text-4xl font-bold">30+</h3>
                <p className="text-sm font-medium leading-tight">Years Of <br /> Experiences</p>
              </div>
            </div>
          </div>

           {/* --- RIGHT SIDE: CONTENT --- */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <div className="mb-8">
              <span className="text-[#FF6B2C] font-bold tracking-[2px] uppercase text-[16px] block mb-4">
                ABOUT OUR EDUKON
              </span>
              <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-[500] text-[#1A2132] leading-[1.1] mb-6">
                Good Qualification Services And Better Skills
              </h2>
              <p className="text-[#6C757D] text-[16px] leading-[1.7] mb-10 max-w-xl">
                Distinctively provide acces mutfuncto users whereas transparent proceses somes ncentivize eficient functionalities rather than extensible archtectur communicate leveraged services and cross-platform.
              </p>
            </div>

            {/* FEATURES LIST - Optimized for 100% Similarity */}
            <div className="flex flex-col gap-8">
              {features.map((item) => (
                <div key={item.id} className="flex items-center gap-5 group">
                  {/* Image Icon: Size and Background match */}
                  <div className={`flex-shrink-0 w-[65px] h-[65px] md:w-[75px] md:h-[75px] ${item.bgColor} rounded-full flex items-center justify-center transition-all duration-300 border border-transparent`}>
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] object-contain mix-blend-multiply" 
                    />
                  </div>
                  
                  {/* Text Content */}
                  <div>
                    <h4 className="text-[20px] md:text-[22px] font-bold text-[#1A2132] mb-1 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[#6C757D] text-[14px] md:text-[15px] leading-snug max-w-[350px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSectionThumb;