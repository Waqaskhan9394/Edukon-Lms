import React from 'react';
import { FaUser, FaCalendarAlt, FaRegCommentDots, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Images Import
import blogImg1 from '../../assets/Image/courseD.jpg'; 
import blogImg2 from '../../assets/Image/courseD2.jpg'; 
import blogImg3 from '../../assets/Image/courseD3.jpg'; 

const BlogStyle3LeftTwo = () => {
  const postData = {
    id: 1,
    title: "Interactively Morph High Standards Anding",
    author: "Begrass Tyson",
    date: "April 23, 2021",
    comments: "09 Comments",
    images: [blogImg1, blogImg2, blogImg3], 
    desc: "Complete deploy focused supply chains rather than viraling services productiva pandemc experiences via interoperable niche markets ramatica incentivize superior functionalitese Rapidiously evolve impactful core competencies without"
  };

  return (
    <div className="space-y-10">
      <div className="bg-white rounded-md overflow-hidden shadow-sm border border-gray-100 group transition-all duration-300 hover:shadow-md">
        
        {/* --- IMAGE SLIDER  */}
        <div className="relative overflow-hidden group/slider">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={0} 
            slidesPerView={1} 
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            // pagination={{ clickable: true }} 
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            loop={true}
            speed={800} 
            className="w-full h-auto md:h-[450px]"
          >
            {postData.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img 
                  src={img} 
                  alt={`Slide ${index}`} 
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}

            {/* Custom Navigation Arrows */}
            <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 text-[#1A2132] hover:bg-[#FF6B2C] hover:text-white rounded-full flex items-center justify-center transition-all opacity-0 group-hover/slider:opacity-100 shadow-md">
              <FaChevronLeft size={14} />
            </button>
            <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 text-[#1A2132] hover:bg-[#FF6B2C] hover:text-white rounded-full flex items-center justify-center transition-all opacity-0 group-hover/slider:opacity-100 shadow-md">
              <FaChevronRight size={14} />
            </button>
          </Swiper>
        </div>

        {/* --- CONTENT SECTION --- */}
        <div className="p-8">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#1A2132] mb-4 hover:text-[#FF6B2C] transition-colors cursor-pointer leading-tight">
            {postData.title}
          </h2>

          <div className="flex flex-wrap items-center gap-6 text-[#777777] text-[14px] mb-6">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-[#FF6B2C]" />
              <span>{postData.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUser className="text-[#FF6B2C]" />
              <span>{postData.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRegCommentDots className="text-[#FF6B2C]" />
              <span>{postData.comments}</span>
            </div>
          </div>

          <p className="text-[#555555] text-[16px] leading-[1.8] mb-8">
            {postData.desc}
          </p>

          <button className="bg-[#FF6B2C] text-white px-8 py-3 rounded-md font-bold text-[15px] flex items-center gap-2 hover:bg-[#1A2132] transition-all duration-300 shadow-lg shadow-orange-100">
            Read More <FaExternalLinkAlt className="text-[12px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogStyle3LeftTwo;