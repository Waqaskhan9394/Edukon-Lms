import React from 'react';

// Images Import
import bg1 from '../../assets/Image/categorybg1.jpg';
import bg2 from '../../assets/Image/categorybg2.jpg';
import bg3 from '../../assets/Image/categorybg3.jpg';
import bg4 from '../../assets/Image/categorybg4.jpg';
import bg5 from '../../assets/Image/categorybg5.jpg';
import bg6 from '../../assets/Image/categorybg6.jpg';
import bg7 from '../../assets/Image/categorybg7.jpg';
import bg8 from '../../assets/Image/categorybg8.jpg';

import icon1 from '../../assets/Image/categoryicon1.jpg';
import icon2 from '../../assets/Image/categoryicon2.jpg';
import icon3 from '../../assets/Image/categoryicon3.jpg';
import icon4 from '../../assets/Image/categoryicon4.jpg';
import icon5 from '../../assets/Image/categoryicon5.jpg';
import icon6 from '../../assets/Image/categoryicon6.jpg';
import icon7 from '../../assets/Image/categoryicon7.jpg';
import icon8 from '../../assets/Image/categoryicon8.jpg';

const PopularCategory = () => {
  const categories = [
    { id: 1, title: "Computer Science", count: "24 Course", bg: bg1, icon: icon1, color: "bg-[#26C976]/80" },
    { id: 2, title: "Civil Engineering", count: "63 Course", bg: bg2, icon: icon2, color: "bg-[#12A9FF]/80" },
    { id: 3, title: "Business Analysis", count: "43 Course", bg: bg3, icon: icon3, color: "bg-[#FFB128]/80" },
    { id: 4, title: "Data Science Analytics", count: "50 Course", bg: bg4, icon: icon4, color: "bg-[#A162F7]/80" },
    { id: 5, title: "Learning Management", count: "27 Course", bg: bg5, icon: icon5, color: "bg-[#F16126]/80" },
    { id: 6, title: "Computer Enginaering", count: "87 Course", bg: bg6, icon: icon6, color: "bg-[#FF9527]/80" },
    { id: 7, title: "Design & Arts", count: "43 Course", bg: bg7, icon: icon7, color: "bg-[#E9BA1F]/80" },
    { id: 8, title: "Foreign Language", count: "58 Course", bg: bg8, icon: icon8, color: "bg-[#FFB128]/80" },
  ];

  return (
    <section className="py-24 bg-[#FFF9F1]">
      <div className="container mx-auto px-4 lg:px-16 text-center">
        
        {/* Header Section */}
        <div className="mb-14">
          <span className="text-[#FF6B2C] font-bold tracking-[4px] uppercase text-[13px] mb-2 block">
            Popular Category
          </span>
          <h2 className="text-[34px] md:text-[44px] font-[900] text-[#1A2132] leading-tight">
            Popular Category For Learn
          </h2>
        </div>

        {/* 100% Match Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="relative group w-full h-[300px] rounded-lg overflow-hidden cursor-pointer shadow-sm"
            >
              {/* Image with zoom effect */}
              <img 
                src={cat.bg} 
                alt={cat.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Color Overlay */}
              <div className={`absolute inset-0 ${cat.color} transition-all duration-300`}></div>

              {/* Centered Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-5 text-white">
                
                {/* Circle Icon - Adjusted Size */}
                <div className="w-[75px] h-[75px] bg-white rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
                  <img 
                    src={cat.icon} 
                    alt="icon" 
                    className="w-[38px] h-[38px] object-contain" 
                  />
                </div>

                {/* Text styling */}
                <h3 className="text-[19px] font-bold mb-0.5 leading-tight tracking-tight">
                  {cat.title}
                </h3>
                <p className="text-[13.5px] font-medium text-white/90">
                  {cat.count}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PopularCategory;