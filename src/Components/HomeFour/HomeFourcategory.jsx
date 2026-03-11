import React from 'react';
import { FaWindows } from 'react-icons/fa'; 

// Images path (Ensure your assets folder has these)
import catImg1 from '../../assets/Image/cat1.jpg';
import catImg2 from '../../assets/Image/cat2.jpg';
import catImg3 from '../../assets/Image/cat3.jpg';
import catImg4 from '../../assets/Image/cat4.jpg';
import catImg5 from '../../assets/Image/cat5.jpg';
import catImg6 from '../../assets/Image/cat6.jpg';

const categories = [
  { id: 1, name: "Software", image: catImg1 },
  { id: 2, name: "Design & Art", image: catImg2 },
  { id: 3, name: "Photography", image: catImg3 },
  { id: 4, name: "Language", image: catImg4 },
  { id: 5, name: "Marketing", image: catImg5 },
  { id: 6, name: "Music", image: catImg6 },
];

const CourseCategories = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-16">
          <span className="text-[#ffdc12] font-bold tracking-[3px] text-sm uppercase block mb-3">
            Choose Any One Course
          </span>
          <h2 className="text-[#07294d] text-[36px] md:text-[45px] font-bold">
            Learn Everything with Professor
          </h2>
        </div>

        {/* --- CATEGORIES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="relative group overflow-hidden rounded-md cursor-pointer h-[250px] transition-transform duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl"
            >
              {/* Image (Scale Removed) */}
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover"
              />
              
              {/* Dark Overlay (Smooth transition) */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300"></div>

              {/* Text & Icon (Bottom Left) */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#ffdc12] rounded-full flex items-center justify-center text-[#07294d]">
                  <FaWindows size={18} />
                </div>
                <span className="text-white font-bold text-xl">{cat.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* --- GET STARTED BUTTON (With Translate Effect) --- */}
        <div className="text-center">
          <button className="border-2 border-[#ffdc12] text-[#07294d] px-10 py-3 rounded-md font-bold transition-all duration-300 transform hover:-translate-y-1 hover:bg-[#ffdc12] hover:shadow-lg active:scale-95">
            Get Started Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default CourseCategories;