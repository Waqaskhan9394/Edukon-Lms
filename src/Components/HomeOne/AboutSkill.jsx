import React from 'react';

// Images Import
import mainAboutImg from '../../assets/Image/About1.png'; 
import aboutIcon2 from '../../assets/Image/About2.jpg'; 
import aboutIcon3 from '../../assets/Image/About3.jpg'; 
import aboutIcon4 from '../../assets/Image/About4.jpg'; 

const AboutSection = () => {
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
    <section className="pt-20 lg:pt-28 bg-white font-['Roboto',sans-serif] overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          
          {/* --- LEFT SIDE: IMAGE WITH BG SHAPE --- */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start">
            {/* The Background Yellow Circle from Screenshot */}
            <div className="absolute top-1/2 left-1/2 lg:left-[45%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-[#FFF9F1] rounded-full -z-0"></div>
            
            <div className="relative z-10 w-full max-w-[500px]">
              <img 
                src={mainAboutImg} 
                alt="About Edukon" 
                className="w-full h-auto object-contain scale-110 lg:scale-125"
              />
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

export default AboutSection;