import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
// Icons for Buttons
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import userImg1 from '../../assets/Image/HomeFiveTestimonialUser1.jpg'; 
import userImg2 from '../../assets/Image/HomeFiveTestimonialUser2.jpg'; 
import userImg3 from '../../assets/Image/HomeFiveTestimonialUser3.jpg'; 

const HomeFiveTestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: "Anthony McGuffog",
      designation: "Payroll bookkeeper",
      feedback: "Dynamically impact tactical methods of empowerment through ubiquitous methodologies. Global utilize robust services without integrated process improvements. Completely leverage existing niche markets via exceptional leadership skills.",
      image: userImg1,
    },
    {
      id: 2,
      name: "Lincon Senses",
      designation: "Senior English Teacher",
      feedback: "Dynamically impact tactical methods of empowerment through ubiquitous methodologies. Global utilize robust services without integrated process improvements. Completely leverage existing niche markets via exceptional leadership skills.",
      image: userImg2,
    },
    {
      id: 3,
      name: "John Doe",
      designation: "UI/UX Designer",
      feedback: "Dynamically impact tactical methods of empowerment through ubiquitous methodologies. Global utilize robust services without integrated process improvements. Completely leverage existing niche markets via exceptional leadership skills.",
      image: userImg3,
    },
  ];

  return (
    <section className="py-28 bg-white relative overflow-hidden font-sans">
      
      {/* --- BACKGROUND WATERMARK (Same as Screenshot) --- */}
      <div className="absolute inset-0 z-0 flex items-center justify-center select-none pointer-events-none">
        <h1 className="text-[12vw] font-black text-[#f8f9fa] uppercase tracking-widest leading-none">
          Testimonials
        </h1>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-16">
          <span className="text-[#ffdc12] font-bold text-[14px] md:text-[16px] uppercase tracking-[4px] block mb-2">
            TESTIMONIALS
          </span>
          <h2 className="text-[#07294d] text-[30px] md:text-[40px] font-black">
            What People Say
          </h2>
        </div>

        {/* --- SWIPER SLIDER WITH NAVIGATION --- */}
        <div className="relative group max-w-5xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            // pagination={{ clickable: true }}
            navigation={{
              nextEl: '.testimonial-next',
              prevEl: '.testimonial-prev',
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="testimonial-swiper !pb-20"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="text-center flex flex-col items-center px-4">
                  
                  {/* --- USER IMAGE --- */}
                  <div className="relative mb-10">
                    <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-[5px] border-white shadow-xl relative z-10">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    {/* Quote Icon */}
                    <div className="absolute top-0 left-0 z-20 w-[40px] h-[40px] rounded-full bg-[#ffdc12] text-[#07294d] flex items-center justify-center text-xl font-black shadow-md">
                      “
                    </div>
                  </div>

                  {/* --- FEEDBACK --- */}
                  <p className="text-[#555] text-[15px] md:text-[20px] leading-[1.7]  mb-10 max-w-3xl">
                    {item.feedback}
                  </p>

                  {/* --- DETAILS --- */}
                  <div className="mt-4">
                    <h3 className="text-[#07294d] text-[24px] font-black mb-1">
                      {item.name}
                    </h3>
                    <p className="text-[#555] font-bold text-[14px] uppercase tracking-widest">
                      {item.designation}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* --- CUSTOM NAVIGATION BUTTONS --- */}
          <button className="testimonial-prev absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-[#07294d]/10 flex items-center justify-center text-[#07294d] hover:bg-[#ffdc12] hover:border-[#ffdc12] transition-all duration-300 opacity-0 group-hover:opacity-100">
            <FaChevronLeft />
          </button>
          <button className="testimonial-next absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-[#07294d]/10 flex items-center justify-center text-[#07294d] hover:bg-[#ffdc12] hover:border-[#ffdc12] transition-all duration-300 opacity-0 group-hover:opacity-100">
            <FaChevronRight />
          </button>
        </div>

      </div>
    </section>
  );
};

export default HomeFiveTestimonialSlider;