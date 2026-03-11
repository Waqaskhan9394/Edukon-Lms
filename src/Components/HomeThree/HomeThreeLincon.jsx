import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaStar, FaUser, FaComment, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';

import webImg from '../../assets/Image/web1.jpg';
import img13 from '../../assets/Image/13.jpg';
import img14 from '../../assets/Image/14.jpg';

const CourseSlider = () => {
  const courses = [
    { id: 1, img: img13, category: "PHP", price: "Free", title: "Learn Basic Web Design with HTML & CSS" },
    { id: 2, img: img14, category: "English", price: "$199.00", title: "Learn Basic Web Design with HTML & CSS" },
    { id: 3, img: webImg, category: "Web Design", price: "$199.00", title: "Learn Basic Web Design with HTML & CSS" },
    { id: 4, img: img14, category: "UI/UX", price: "$50.00", title: "Mastering Figma for Web Design" },
  ];

  return (
    <section className="py-24 bg-[#fdfaf3] overflow-hidden">
      {/* Container ko relative rakha taaki buttons iske hisab se align hon */}
      <div className="container mx-auto px-4 relative">
        
        {/* Header Section */}
        <div className="flex justify-between items-end mb-12 relative z-10">
          <div>
            <span className="text-[#ff6b2c] font-bold uppercase tracking-[2px] text-sm">Don’t Miss</span>
            <h2 className="text-[#07294d] text-3xl md:text-5xl font-[900] mt-2">Lincon’s Courses</h2>
          </div>

          {/* Buttons: Inhe hamesha visible rakhne ke liye flex aur z-index fix kiya */}
          <div className="flex gap-3 relative z-50"> 
            <button className="course-prev-btn w-12 h-10 bg-[#ff6b2c] text-white flex items-center justify-center rounded-sm hover:bg-[#07294d] transition-all cursor-pointer shadow-lg active:scale-95">
              <FaAngleLeft size={24} />
            </button>
            <button className="course-next-btn w-12 h-10 bg-[#ff6b2c] text-white flex items-center justify-center rounded-sm hover:bg-[#07294d] transition-all cursor-pointer shadow-lg active:scale-95">
              <FaAngleRight size={24} />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: '.course-prev-btn',
            nextEl: '.course-next-btn',
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }, // Desktop screen
          }}
          // Overflow visible rakha hai taaki side movement dikhe
          className="!overflow-visible"
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md group border border-gray-100 h-full transition-all duration-300 hover:shadow-2xl">
                
                <div className="relative overflow-hidden">
                  <img src={course.img} alt="course" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" />
                  
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <div className="flex gap-2">
                      <span className="bg-[#07294d] text-white px-3 py-1 text-[12px] font-bold rounded-sm uppercase">{course.category}</span>
                      <span className="bg-[#ff6b2c] text-white px-3 py-1 text-[12px] font-bold rounded-sm">{course.price}</span>
                    </div>
                    <div className="bg-white px-2 py-1 flex items-center gap-1 rounded-sm shadow-sm">
                      {[...Array(5)].map((_, i) => <FaStar key={i} className="text-[#ff6b2c] text-[10px]" />)}
                    </div>
                  </div>
                </div>

                <div className="p-8 text-center">
                  <h3 className="text-[#07294d] text-[20px] font-extrabold mb-5 group-hover:text-[#ff6b2c] transition-colors leading-tight min-h-[50px]">
                    {course.title}
                  </h3>
                  <div className="flex justify-center items-center gap-6 text-gray-500 text-sm mb-6">
                    <span className="flex items-center gap-2 font-medium"><FaUser className="text-[#ff6b2c]" /> 200</span>
                    <span className="flex items-center gap-2 font-medium"><FaComment className="text-[#ff6b2c]" /> 23</span>
                  </div>
                  <hr className="mb-6 opacity-50 border-gray-200" />
                  <button className="text-[#ff6b2c] font-bold uppercase text-sm tracking-widest hover:tracking-[3px] transition-all duration-300">
                    Read More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CourseSlider;