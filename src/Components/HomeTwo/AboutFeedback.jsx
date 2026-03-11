import React from 'react';
// Images import karein
import AboutFeed1 from '../../assets/Image/AboutFeed1.jpg';
import AboutFeed2 from '../../assets/Image/AboutFeed2.jpg';
import AboutFeed3 from '../../assets/Image/AboutFeed3.jpg';

const AboutSection = () => {
  const aboutData = [
    {
      id: 1,
      img: AboutFeed1,
      title: "30,000+ Online Courses",
      desc: "Grow your knowledge and your training and tools.",
    },
    {
      id: 2,
      img: AboutFeed2,
      title: "Experts Teachers",
      desc: "Grow your knowledge and your training and tools.",
    },
    {
      id: 3,
      img: AboutFeed3,
      title: "Lifetime Access",
      desc: "Grow your knowledge and your training and tools.",
    },
  ];

  return (
    <section className="py-12 bg-[#FFF9F1]">
      <div className="container mx-auto px-4 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutData.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center gap-5 p-4 "
            >
              {/* Image Section (Icon ki jagah) */}
              <div className="flex-shrink-0">
                <div className=" rounded-full overflow-hidden ">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover bg-cover"
                  />
                </div>
              </div>

              {/* Text Section */}
              <div>
                <h3 className="text-[20px] font-bold text-[#1A2132] mb-1">
                  {item.title}
                </h3>
                <p className="text-[#777777] text-[15px] leading-relaxed">
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

export default AboutSection;