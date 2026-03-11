import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';

// Images Import
import event1 from '../../assets/Image/SixEvents1.jpg';
import event2 from '../../assets/Image/SixEvents2.jpg';
import event3 from '../../assets/Image/SixEvents3.jpg';
import event4 from '../../assets/Image/SixEvents4.jpg';

const HomeSixEventSection = () => {
  const eventData = [
    { id: 1, img: event1, title: "Private Car", price: "$329.00", duration: "4 Weeks" },
    { id: 2, img: event2, title: "Bike Riding", price: "$249.00", duration: "3 Weeks" },
    { id: 3, img: event3, title: "Truck Driving", price: "$599.00", duration: "6 Weeks" },
    { id: 4, img: event4, title: "Bus Driving", price: "$450.00", duration: "5 Weeks" },
    { id: 5, img: event3, title: "Truck Driving", price: "$599.00", duration: "6 Weeks"},
  ];

  return (
    <section className="py-24 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#ffdc12] font-bold uppercase tracking-[0.4em] text-[13px] mb-2">
            Don't Miss The Day
          </p>
          <h2 className="text-[#07294d] text-[42px] md:text-[52px] font-[1000] leading-tight">
            Upcoming Events
          </h2>
        </div>

        {/* Swiper Slider Container */}
        <div className="relative group">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={0} 
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            speed={800}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{
              nextEl: '.event-nav-next',
              prevEl: '.event-nav-prev',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 }, 
            }}
            className="rounded-[25px] shadow-[0_20px_60px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100"
          >
            {eventData.map((event, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col h-full bg-white border-r border-gray-100 last:border-r-0 group/card">
                  <div className="relative h-[200px] overflow-hidden">
                    <img 
                      src={event.img} 
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" 
                    />
                  </div>

                  <div className="bg-[#ffdc12] py-4 text-center transition-all duration-300 group-hover/card:bg-[#07294d]">
                    <h5 className="text-[#07294d] font-black text-[18px] transition-colors duration-300 group-hover/card:text-white uppercase tracking-wider">
                      {event.title}
                    </h5>
                  </div>

                  <div className="p-8 text-center flex flex-col items-center flex-grow  shadow-sm">
                    <h2 className="text-[#07294d] text-[38px] font-[1000] leading-none mb-1">
                      {event.price}
                    </h2>
                    <span className="text-gray-400 text-[14px] font-semibold italic block mb-6">
                      {event.duration}
                    </span>

                    <ul className="space-y-3 mb-8">
                      <li className="text-gray-500 text-[15px] font-medium">Driving License</li>
                      <li className="text-gray-600 text-[15px]">15 Classroom Lessons</li>
                      <li className="text-gray-600 text-[15px]">10 In-Car Lessons</li>
                      <li className="text-gray-600 text-[15px]">Medical Service</li>
                      <li className="text-gray-600 text-[15px]">FREE final exam</li>
                      <li className="text-gray-600 text-[15px]">With MTO Certification</li>
                    </ul>

                    <a href="/login" className="inline-block bg-[#ffdc12] hover:bg-[#07294d] text-[#07294d] hover:text-white px-10 py-3.5 rounded-[5px] font-bold text-[14px] uppercase tracking-wide transition-all duration-300">
                      Read More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows - */}
          
          <button className="event-nav-prev absolute top-[100px] left-2 md:-left-5 z-20 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 bg-white rounded-full shadow-xl flex items-center justify-center text-gray-400 hover:bg-[#07294d] hover:text-white transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button className="event-nav-next absolute top-[100px] right-2 md:-right-5 z-20 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 bg-white rounded-full shadow-xl flex items-center justify-center text-gray-400 hover:bg-[#07294d] hover:text-white transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSixEventSection;