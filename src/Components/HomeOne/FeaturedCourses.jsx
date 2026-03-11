import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BiBookContent, BiSignal4 } from 'react-icons/bi';
import { FiExternalLink } from 'react-icons/fi';

// Course Images
import c1 from '../../assets/Image/01.jpg';
import c2 from '../../assets/Image/02.jpg';
import c3 from '../../assets/Image/03.jpg';
import c4 from '../../assets/Image/04.jpg';
import c5 from '../../assets/Image/05.jpg';
import c6 from '../../assets/Image/06.jpg';

// Author Images
import auth1 from '../../assets/Image/author1.jpg';
import auth2 from '../../assets/Image/author2.jpg';
import auth3 from '../../assets/Image/author3.jpg';
import auth4 from '../../assets/Image/author4.jpg';
import auth5 from '../../assets/Image/author5.jpg';
import auth6 from '../../assets/Image/author6.jpg';

const FeaturedCourses = () => {
  const courses = [
    { id: 1, tag: "Adobe XD", tagColor: "bg-[#FF6B2C]", title: "Fundamentals of Adobe XD Theory Learn New", img: c1, lessons: "18x Lesson", type: "Online Class", authorImg: auth1, authorName: "William Smith", price: "$30", reviews: "03 reviews" },
    { id: 2, tag: "PHP", tagColor: "bg-[#26B96C]", title: "Certified Graphic Design with Free Project Course", img: c2, lessons: "20x Lesson", type: "Online Class", authorImg: auth2, authorName: "Lora Smith", price: "$45", reviews: "05 reviews" },
    { id: 3, tag: "Python", tagColor: "bg-[#FBA905]", title: "Theory Learn New Student And Fundamentals", img: c3, lessons: "12x Lesson", type: "Online Class", authorImg: auth3, authorName: "Robot Smith", price: "$25", reviews: "02 reviews" },
    { id: 4, tag: "React JS", tagColor: "bg-[#D371F9]", title: "Mastering Modern Web Apps with React & Redux", img: c4, lessons: "25x Lesson", type: "Online Class", authorImg: auth4, authorName: "John Doe", price: "$50", reviews: "10 reviews" },
    { id: 5, tag: "Marketing", tagColor: "bg-[#F16126]", title: "Digital Marketing Strategy for Fast Growth", img: c5, lessons: "15x Lesson", type: "Online Class", authorImg: auth5, authorName: "Jane Smith", price: "$20", reviews: "08 reviews" },
    { id: 6, tag: "Civil", tagColor: "bg-[#11A2DE]", title: "Advanced Engineering and Structural Design", img: c6, lessons: "30x Lesson", type: "Online Class", authorImg: auth6, authorName: "Alex Carry", price: "$60", reviews: "04 reviews" },
  ];

  return (
    <section className="py-24 bg-[#FFF9F1] font-['Roboto',sans-serif]">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <span className="text-[#FF6B2C] font-bold tracking-[3px] uppercase text-[15px] block mb-2">
            FEATURED COURSES
          </span>
          <h2 className="text-[34px] md:text-[50px] font-[800] text-[#1A2132] leading-tight">
            Pick A Course To Get Started
          </h2>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-[10px] overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-all duration-500 group flex flex-col h-full border border-gray-50">
              
              {/* Image Container: Screenshot ke mutabiq No Padding */}
              <div className="relative overflow-hidden w-full h-[240px]">
                <img 
                  src={course.img} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                {/* Price Badge Overlay: Bottom-Right aur Size match kiya hai */}
                <div className="absolute -bottom-1 right-5 bg-[#FF6B2C] text-white font-bold w-[54px] h-[54px] flex items-center justify-center rounded-full shadow-lg border-[3px] border-white text-[16px] z-10">
                  {course.price}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 pt-10 flex flex-col flex-grow">
                {/* Tag & Rating */}
                <div className="flex justify-between items-center mb-5">
                  <span className={`${course.tagColor} text-white text-[11px] uppercase font-bold px-3 py-1 rounded-[4px]`}>
                    {course.tag}
                  </span>
                  <div className="flex items-center gap-1">
                    <div className="flex text-[#FBA905] text-[14px]">
                      {[...Array(5)].map((_, i) => <AiFillStar key={i} />)}
                    </div>
                    <span className="text-gray-400 text-[13px] ml-1">{course.reviews}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[22px] font-[700] text-[#1A2132] mb-6 leading-[1.3] group-hover:text-[#FF6B2C] transition-colors cursor-pointer">
                  {course.title}
                </h3>

                {/* Lessons & Type Info */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-6 mb-6 text-gray-500 text-[14px]">
                  <div className="flex items-center gap-2">
                    <BiBookContent className="text-[#FF6B2C] text-[20px]" />
                    {course.lessons}
                  </div>
                  <div className="flex items-center gap-2">
                    <BiSignal4 className="text-[#FF6B2C] text-[20px]" />
                    {course.type}
                  </div>
                </div>

                {/* Author Section */}
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={course.authorImg} alt="author" className="w-9 h-9 rounded-full object-cover" />
                    <span className="text-[#1A2132] font-bold text-[15px] hover:text-[#FF6B2C] cursor-pointer transition-colors">
                      {course.authorName}
                    </span>
                  </div>
                  <button className="flex items-center gap-1 font-bold text-[15px] hover:text-[#FF6B2C] transition-colors group/btn">
                    Read More 
                    <FiExternalLink className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;