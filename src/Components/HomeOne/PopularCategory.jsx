import React from 'react';

// Images Import
import catImg1 from '../../assets/Image/category1.jpg';
import catImg2 from '../../assets/Image/category2.jpg';
import catImg3 from '../../assets/Image/category3.jpg';
import catImg4 from '../../assets/Image/category4.jpg';
import catImg5 from '../../assets/Image/category5.jpg';
import catImg6 from '../../assets/Image/category6.jpg';

const PopularCategory = () => {
  const categories = [
    { id: 1, title: "Computer Science", count: "24 Course", img: catImg1, color: "text-[#26B96C]" },
    { id: 2, title: "Civil Engineering", count: "04 Course", img: catImg2, color: "text-[#11A2DE]" },
    { id: 3, title: "Business Analysis", count: "27 Course", img: catImg3, color: "text-[#FBA905]" },
    { id: 4, title: "Data Science Analytics", count: "28 Course", img: catImg4, color: "text-[#D371F9]" },
    { id: 5, title: "Learning Management", count: "78 Course", img: catImg5, color: "text-[#F16126]" },
    { id: 6, title: "Computer Engineering", count: "38 Course", img: catImg6, color: "text-[#FBA905]" },
  ];

  return (
    <section className="py-24 bg-white font-['Roboto',sans-serif]">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-16">
          <span className="text-[#FF6B2C] font-bold tracking-[2px] uppercase text-[16px] block mb-2">
            POPULAR CATEGORY
          </span>
          <h2 className="text-[32px] md:text-[46px] font-[800] text-[#1A2132] leading-[1.2] tracking-tight">
            Popular Category For Learn
          </h2>
        </div>

        {/* --- CATEGORY GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="group bg-white pt-10 pb-9 px-4 rounded-[10px] text-center transition-all duration-400 hover:-translate-y-2 shadow-[0_5px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] cursor-pointer border border-[#f1f1f1]"
            >
              {/* Image without Background */}
              <div className="flex items-center justify-center mx-auto mb-6 h-[80px]">
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="w-auto h-[60px] object-contain transition-all duration-400" 
                />
              </div>

              {/* Text Content */}
              <h3 className="text-[#1A2132] font-[50] text-[20px] mb-3 leading-tight group-hover:text-[#FF6B2C] transition-colors">
                {cat.title}
              </h3>
              <p className={`${cat.color} font-[600] text-[15px] transition-all`}>
                {cat.count}
              </p>
            </div>
          ))}
        </div>

       {/* --- BOTTOM BUTTON --- */}
<div className="text-center mt-16">
  <button className="bg-[#FF6B2C] text-white px-10 py-4 rounded-[5px] font-[500] text-[16px] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 active:scale-95 uppercase tracking-wide">
    Browse All Categories
  </button>
</div>

      </div>
    </section>
  );
};

export default PopularCategory;