import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

// Icons
import { 
  FaEnvelope, FaYoutube, FaFacebookF, FaTwitter, FaLinkedinIn, 
  FaChevronLeft, FaChevronRight 
} from 'react-icons/fa';

// Images Import
import instructor1 from '../../assets/Image/SevenInstruct1.jpg';
import instructor2 from '../../assets/Image/SevenInstruct2.jpg';
import s1 from '../../assets/Image/SevenISlide1.jpg';
import s2 from '../../assets/Image/SevenISlide2.jpg';
import s3 from '../../assets/Image/SevenISlide3.jpg';
import s4 from '../../assets/Image/SevenISlide4.jpg';
import s5 from '../../assets/Image/SevenISlide5.jpg';
import s6 from '../../assets/Image/SevenISlide6.jpg';

const HomeSevenInstructor = () => {
  const topInstructors = [
    { img: instructor1, name: "Emilee Logan", role: "Lead Instructor" },
    { img: instructor2, name: "Angel Mili", role: "Lead Instructor" },
  ];

  const sliderInstructors = [
    { img: s1, name: "Mim Jaqno" },
    { img: s2, name: "Henri" },
    { img: s3, name: "Bin Tonso" },
    { img: s4, name: "Selina Gomez" },
    { img: s5, name: "Baluni Chobo" },
    { img: s6, name: "Angel Mili" },
  ];

  return (
    <section className="py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-[#ffdc12] uppercase tracking-[4px] text-[14px] font-bold">
            WHY CHOOSE US
          </span>
          <h2 className="text-black text-[32px] md:text-[40px]  mt-3">
            Get Everything for Learning
          </h2>
        </div>

     
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
  {topInstructors.map((item, index) => (
    <div 
      key={index} 
      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8 group transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg"
    >
     
      <div className="w-full md:w-[220px] overflow-hidden rounded-lg">
        <img 
          src={item.img} 
          alt={item.name} 
          className="w-full h-[250px] object-cover" 
        />
      </div>
      
      {/* Content Section */}
      <div className="text-left flex-1">
      
        <h4 className="text-[24px] font-bold text-black group-hover:text-[#ffdc12] transition-colors duration-300">
          {item.name}
        </h4>
        <p className="text-gray-400 mb-4">{item.role}</p>
        
        <div className="space-y-2 mb-6 text-[15px] text-gray-600">
          <p className="flex items-center gap-3">
            <FaEnvelope className="text-[#ffdc12]" /> info@prof.mail.com
          </p>
          <p className="flex items-center gap-3">
            <FaYoutube className="text-[#ffdc12]" /> www.youtube.com/prof.ls
          </p>
        </div>

        <div className="flex gap-3">
          <a href="#" className="w-8 h-8 bg-[#3b5998] text-white flex items-center justify-center rounded-sm text-sm hover:opacity-80 transition-all"><FaFacebookF /></a>
          <a href="#" className="w-8 h-8 bg-[#55acee] text-white flex items-center justify-center rounded-sm text-sm hover:opacity-80 transition-all"><FaTwitter /></a>
          <a href="#" className="w-8 h-8 bg-[#0077b5] text-white flex items-center justify-center rounded-sm text-sm hover:opacity-80 transition-all"><FaLinkedinIn /></a>
        </div>
      </div>
    </div>
  ))}
</div>

        {/*  (Slider) */}
<div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 relative group/slider-main">
  
 
 
  <button className="swiper-prev-btn absolute left-[-10px] md:left-[-15px] top-1/2 -translate-y-1/2 z-50 bg-white shadow-lg w-8 h-8 md:w-10 md:h-10 rounded-[4px] flex items-center justify-center text-black border border-gray-100 opacity-100 lg:opacity-0 lg:group-hover/slider-main:opacity-100 transition-all duration-300 hover:bg-[#ffdc12]">
    <FaChevronLeft size={12} className="md:text-[14px]" />
  </button>
  
  <button className="swiper-next-btn absolute right-[-10px] md:right-[-15px] top-1/2 -translate-y-1/2 z-50 bg-white shadow-lg w-8 h-8 md:w-10 md:h-10 rounded-[4px] flex items-center justify-center text-black border border-gray-100 opacity-100 lg:opacity-0 lg:group-hover/slider-main:opacity-100 transition-all duration-300 hover:bg-[#ffdc12]">
    <FaChevronRight size={12} className="md:text-[14px]" />
  </button>

  <Swiper
    modules={[Autoplay, Navigation]}
    spaceBetween={20}
    slidesPerView={1}
    loop={true}
    navigation={{
      nextEl: '.swiper-next-btn',
      prevEl: '.swiper-prev-btn',
    }}
    autoplay={{ delay: 2500, disableOnInteraction: false }}
    breakpoints={{
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 5 },
    }}
  >
    {sliderInstructors.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="text-center group cursor-pointer py-2">
          <div className="overflow-hidden rounded-lg mb-4">
            <img 
              src={item.img} 
              alt={item.name} 
              className="w-full h-[220px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" 
            />
          </div>
          <h5 className="font-bold text-[18px] text-black group-hover:text-[#ffdc12] transition-colors duration-300">
            {item.name}
          </h5>
          <p className="text-gray-400 text-sm">Lead Instructor</p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

      </div>
    </section>
  );
};

export default HomeSevenInstructor;