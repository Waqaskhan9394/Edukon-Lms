import React from 'react';
// Swiper React components import karein
import { Swiper, SwiperSlide } from 'swiper/react';
// Zaroori modules import karein
import { Autoplay, Pagination } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Images Import
import bgImg from '../../assets/Image/HomeThreeAboutBg.jpg';
import user1 from '../../assets/Image/HomeThreeAbout1.jpg';
import user2 from '../../assets/Image/HomeThreeAbout2.jpg';
import user3 from '../../assets/Image/HomeThreeAbout3.jpg';

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: "Angel Mili",
      role: "Assistant Principal",
      img: user1,
      desc: "Dynamically impact tactical methods of empowerment through ubiquitous methodologies. Global utilize robust services without integrated process improvements."
    },
    {
      id: 2,
      name: "Rajib Raj",
      role: "Assistant Principal",
      img: user2,
      desc: "Dynamically impact tactical methods of empowerment through ubiquitous methodologies. Global utilize robust services without integrated process improvements."
    },
    {
      id: 3,
      name: "Umme Nisha",
      role: "Assistant Principal",
      img: user3,
      desc: "Dynamically impact tactical methods of empowerment through ubiquitous methodologies. Global utilize robust services without integrated process improvements."
    },
    {
      id: 4,
      name: "Tyson Begrass",
      role: "Senior Trainer",
      img: user1,
      desc: "Dynamically impact tactical methods of empowerment through ubiquitous methodologies. Global utilize robust services without integrated process improvements."
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden ">
      
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>

      

      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <span className="text-[#ff6b2c] font-bold uppercase tracking-[3px] text-[13px] block mb-3">
            Don't Miss the Day
          </span>
          <h2 className="text-[#07294d] text-3xl md:text-5xl font-[900] leading-tight tracking-tight">
            The People Says About Us
          </h2>
        </div>

       
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          speed={1000} 
          autoplay={{ 
            delay: 4000, 
            disableOnInteraction: false 
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white p-10 rounded-xl shadow-xl text-center border-b-[5px] border-transparent transition-all duration-500 my-10 group">
                
                {/* User Image */}
                <div className="relative mx-auto w-24 h-24 mb-8">
                  <div className="absolute inset-[-6px] border-2 border-[#ff6b2c] rounded-full"></div>
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full rounded-full object-cover transition-transform duration-500"
                  />
                </div>

                <p className="text-[#555555] italic leading-[1.7] mb-8 text-[15px] font-normal">
                  "{item.desc}"
                </p>

                <div className="mt-auto">
                  <h4 className="text-[#07294d] text-[22px] font-[900] group-hover:text-[#ff6b2c] transition-colors duration-300">
                    {item.name}
                  </h4>
                  <p className="text-[#ff6b2c] font-bold text-[12px] uppercase tracking-[2px] mt-2">
                    {item.role}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlider;