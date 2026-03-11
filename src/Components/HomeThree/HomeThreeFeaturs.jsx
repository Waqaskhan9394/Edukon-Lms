import React from 'react';

import { FaArrowRightLong } from "react-icons/fa6";

// Images Import
import learnBg from '../../assets/Image/learnbgimg.png';
import learn1 from '../../assets/Image/learn1.png';
import learn2 from '../../assets/Image/learn2.png';
import learn3 from '../../assets/Image/learn3.png';
import learn4 from '../../assets/Image/learn4.png';
import learn5 from '../../assets/Image/learn5.png';
import learn6 from '../../assets/Image/learn6.png';

const FeatureSection = () => {
  const features = [
    { id: 1, img: learn1, title: "Book & Library Facilities", link: "View More" },
    { id: 2, img: learn2, title: "Online & Offline Courses", link: "View More" },
    { id: 3, img: learn3, title: "Certification After Course Complete", link: "View More" },
    { id: 4, img: learn4, title: "Professional and Ingenious Instructor", link: "View More" },
    { id: 5, img: learn5, title: "Air Condition Class Room", link: "View More" },
    { id: 6, img: learn6, title: "Best Industry Leader", link: "View More" },
  ];

  return (
    <section 
      className="relative w-full py-20 bg-no-repeat bg-bottom"
      style={{ 
        backgroundImage: `url(${learnBg})`,
        backgroundColor: '#f8f8f8', 
        fontFamily: "'Roboto', sans-serif" 
      }}
    >
      <div className="container mx-auto px-4 md:px-12">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-16">
          <span className="text-[#ff6b2c] uppercase tracking-[3px] font-bold text-sm">
            Why Choose Us
          </span>
          <h2 className="text-[#07294d] text-3xl md:text-5xl font-[900] mt-3">
            Get Everything for Learning
          </h2>
        </div>

        {/* --- Features Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item) => (
            <div 
              key={item.id}
              className="bg-white p-10 shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer flex items-start space-x-6 border border-transparent"
            >
              {/* Icon Image */}
              <div className="flex-shrink-0">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-16 h-16 object-contain"
                />
              </div>

              {/* Text Content */}
              <div>
                <h4 className="text-[#07294d] text-xl font-bold mb-3 leading-snug group-hover:text-[#ff6b2c] transition-colors">
                  {item.title}
                </h4>
                
                {/* View More Link */}
                <a 
                  href="#" 
                  className="text-[#555] font-semibold text-sm hover:text-[#ff6b2c] flex items-center transition-all duration-300 relative group/link"
                >
                  {item.link}
                  
                  {/* Arrow Icon: Initially Hidden, shows on hover with translation */}
                  <span className="ml-2 opacity-0 invisible translate-x-[-10px] group-hover/link:opacity-100 group-hover/link:visible group-hover/link:translate-x-0 transition-all duration-300 ease-in-out">
                    <FaArrowRightLong className="text-[12px] text-[#ff6b2c]" />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeatureSection;