import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

// Course Images Import
import four1 from '../../assets/Image/Four1.jpg';
import four2 from '../../assets/Image/Four2.jpg';
import four3 from '../../assets/Image/Four3.jpg';
import four4 from '../../assets/Image/Four4.jpg';
import four5 from '../../assets/Image/Four5.jpg';
import four6 from '../../assets/Image/Four6.jpg';
import four7 from '../../assets/Image/Four7.jpg';
import four8 from '../../assets/Image/Four8.jpg';

// Author Image Import
import author1 from '../../assets/Image/author1.jpg'; 
import author2 from '../../assets/Image/author2.jpg'; 
import author3 from '../../assets/Image/author3.jpg'; 
import author4 from '../../assets/Image/author4.jpg'; 
import author5 from '../../assets/Image/author5.jpg'; 
import author6 from '../../assets/Image/author6.jpg'; 
import author7 from '../../assets/Image/author13.jpg'; 
import author8 from '../../assets/Image/author14.jpg'; 

const coursesData = [
  { id: 1, title: "Basic English Spoken and Writing", cat: "English", price: "$199.00", img: four1, author: "William Smith", authImg: author1 },
  { id: 2, title: "Learn Advance with PHP Language", cat: "Software", price: "$199.00", img: four2, author: "Angel Mili", authImg: author2 },
  { id: 3, title: "Logo Design in Adobe Illustrator", cat: "Design", price: "$199.00", img: four3, author: "Sajahan Sagor", authImg: author3 },
  { id: 4, title: "Digital Photography for Beginner", cat: "Photography", price: "$199.00", img: four4, author: "Ummi Nishat", authImg: author4 },
  { id: 5, title: "Advance Social Media Marketing", cat: "Marketing", price: "$199.00", img: four5, author: "Rassel Hossin", authImg: author5 },
  { id: 6, title: "A Guidelines Complete Guitar System", cat: "Music", price: "$199.00", img: four6, author: "Zinat Zaara", authImg: author6 },
  { id: 7, title: "Learn Piano Guidelines System A to Z", cat: "Design", price: "$199.00", img: four7, author: "William Smith", authImg: author7 },
  { id: 8, title: "Advance Professional Graphic Design", cat: "Software", price: "$199.00", img: four8, author: "Angel Mili", authImg: author8},
];

const CourseGrid = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'English', 'Software', 'Design', 'Photography', 'Music', 'Marketing'];

  // Filtering Logic
  const filteredCourses = activeTab === 'All' 
    ? coursesData 
    : coursesData.filter(course => course.cat === activeTab);

  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* --- TABS HEADER --- */}
        <div className="bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] p-8 mb-12 flex flex-col md:flex-row items-center justify-between border border-gray-50">
          <h2 className="text-[#07294d] text-[32px] font-bold">Our Courses</h2>
          <div className="flex flex-wrap justify-center gap-7 mt-4 md:mt-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[16px] font-semibold transition-all duration-300 relative pb-1 ${
                  activeTab === tab 
                  ? 'text-[#ff7a41] border-b-2 border-[#ff7a41]' 
                  : 'text-[#555] hover:text-[#ff7a41]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* --- COURSES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all duration-500 group flex flex-col h-full border border-gray-100">
              
              {/* Course Image */}
              <div className="relative overflow-hidden aspect-[1.35/1]">
                <img 
                  src={course.img} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute bottom-4 left-4 bg-[#ffdc12] text-[#07294d] px-3 py-1 text-[12px] font-bold rounded-sm uppercase">
                  {course.cat}
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex text-[#ffdc12] mb-3 gap-0.5">
                   {[...Array(5)].map((_, i) => <FaStar key={i} size={13} />)}
                </div>
                
                <h3 className="text-[#07294d] font-bold text-[19px] mb-6 leading-[1.4] group-hover:text-[#ffdc12] transition-colors cursor-pointer min-h-[54px]">
                  {course.title}
                </h3>
                
                {/* Footer Part */}
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                   
                    <img 
                      src={course.authImg} 
                      className="w-9 h-9 rounded-full border border-gray-200 object-cover" 
                      alt="author" 
                    />
                    <span className="text-[#555] text-[14px] font-medium">{course.author}</span>
                  </div>
                  <div className="text-[#ffdc12] font-extrabold text-[18px]">
                    {course.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CourseGrid;