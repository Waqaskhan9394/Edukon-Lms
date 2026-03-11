import React from 'react';
// Images as per your instruction
import Image15 from '../../assets/Image/15.jpg';
import Image16 from '../../assets/Image/16.jpg';
import Image17 from '../../assets/Image/17.jpg';

const TeachOnEdukon = () => {
  const features = [
    {
      id: 1,
      title: "Build Your Brand",
      img: Image15,
     
      desc: "Like graphic design, business analytics coding and much more"
    },
    {
      id: 2,
      title: "Plan Your Course",
      img: Image16,
    
      desc: "Like graphic design, business analytics coding and much more"
    },
    {
      id: 3,
      title: "Help Shape Future",
      img: Image17,
    
      desc: "Like graphic design, business analytics coding and much more"
    }
  ];

  return (
    <section className="py-20 bg-[#FDF9F6] font-sans">
      <div className="container mx-auto px-4">
        
        {/* --- HEADER (Capture 12 Match) --- */}
        <div className="text-center mb-16">
          <span className="text-[#ff6b2c] font-bold uppercase tracking-[4px] text-sm mb-3 block">
            TEACH ON EDUKON
          </span>
          <h2 className="text-[32px] md:text-[46px] font-[800] text-[#07294d] leading-tight max-w-2xl mx-auto">
            Discover Your Potential. Make A Global Impact.
          </h2>
        </div>

        {/* --- CARDS GRID (Capture 13 Match) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-10 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-center transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Icon Image Container */}
              <div className={` w-24 h-24 rounded-full mx-auto mb-8 flex items-center justify-center overflow-hidden`}>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="bg-cover object-contain rounded-full "
                />
              </div>

              {/* Text Content */}
              <h3 className="text-[24px] font-bold text-[#07294d] mb-4">
                {item.title}
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* --- BOTTOM BUTTON (Capture 13 Match) --- */}
        <div className="text-center mt-16">
          <button className="bg-[#ff6b2c] text-white font-bold px-8 py-3 rounded-md shadow-lg hover:bg-[#e65a1f] transition-all duration-300 hover:-translate-y-2 group uppercase text-sm tracking-wide">
            Browse All Categories
          </button>
        </div>

      </div>
    </section>
  );
};

export default TeachOnEdukon;