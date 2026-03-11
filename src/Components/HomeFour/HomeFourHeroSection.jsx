import React from 'react';
import { FaUsers, FaSearch } from 'react-icons/fa';
import { IoChevronDown } from 'react-icons/io5';
import { HiBell } from "react-icons/hi"; 
import { AiOutlineGlobal } from "react-icons/ai"; 

// Background Image Import
import heroBg from '../../assets/Image/HomeFourHeroBg.jpg';

const HomeFourHero = () => {
  return (
    <section className="relative pt-40 pb-40 lg:pt-80 lg:pb-64 overflow-hidden bg-white">
      
      {/* --- BACKGROUND IMAGE --- */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-right-bottom lg:bg-contain bg-cover"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          opacity: '1', 
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* --- HEADING --- */}
          <h1 className="text-[#07294d] text-[32px] md:text-[50px] lg:text-[55px] font-normal leading-[1.2] mb-10 tracking-tight">
            Search Your One From <span className="text-[#ffdc12] font-semibold">150+</span> Online <br className="hidden md:block" /> Courses
          </h1>

          {/* --- SEARCH BAR WITH ALL CATEGORIES --- */}
          <div className="bg-white rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col md:flex-row items-center mb-10 border border-gray-100 max-w-3xl mx-auto p-2">
            
            {/* Category Dropdown Area */}
            <div className="relative w-full md:w-[35%] px-6 py-2 border-b md:border-b-0 md:border-r border-gray-100 flex items-center justify-between">
              <select className="w-full bg-transparent text-[#555] font-normal focus:outline-none cursor-pointer appearance-none text-[15px] pr-4">
                <option value="all">All Categories</option>
                <option value="uncategorized">Uncategorized</option>
                <option value="academy">Academy</option>
                <option value="agency">Agency</option>
                <option value="app">App</option>
                <option value="bar">Bar</option>
                <option value="blog">Blog</option>
                <option value="business">Business</option>
                <option value="butcher-shop">Butcher Shop</option>
                <option value="cafe">Cafe</option>
                <option value="charity-2">Charity</option>
                <option value="church">Church</option>
                <option value="clinic">clinic</option>
                <option value="college">College</option>
                <option value="conference">Conference</option>
                <option value="construction">Construction</option>
                <option value="corona-virus">Corona Virus</option>
                <option value="corporate">Corporate</option>
                <option value="covid19">Covid19</option>
                <option value="digital-products">Digital Products</option>
                <option value="doctors">doctors</option>
                <option value="ecological">Ecological</option>
                <option value="education">Education</option>
                <option value="entertainment">Entertainment</option>
                <option value="environment">Environment</option>
                <option value="environmental">Environmental</option>
                <option value="events">Events</option>
                <option value="fitness">Fitness</option>
                <option value="food-shop">Food Shop</option>
                <option value="free">Free</option>
                <option value="gym">Gym</option>
                <option value="halloween">Halloween</option>
                <option value="health">health</option>
                <option value="healthcare">healthcare</option>
                <option value="learnpress">learnpress</option>
                <option value="meat-shop">Meat Shop</option>
                <option value="medical">medical</option>
                <option value="medical-prevention">Medical Prevention</option>
                <option value="meetup">Meetup</option>
                <option value="mobile-apps">Mobile Apps</option>
                <option value="music">Music</option>
                <option value="news">News</option>
                <option value="nonprofit">Nonprofit</option>
                <option value="onepage">Onepage</option>
                <option value="online-course">Online Course</option>
                <option value="personal-blog">Personal Blog</option>
                <option value="portfolio">Portfolio</option>
                <option value="pregnancy">pregnancy</option>
                <option value="premium">premium</option>
                <option value="psd">psd</option>
                <option value="religion">Religion</option>
                <option value="restaurants">Restaurants</option>
                <option value="school">School</option>
                <option value="seo">SEO</option>
                <option value="software">Software</option>
                <option value="startups">Startups</option>
                <option value="university">University</option>
                <option value="vcard">Vcard</option>
                <option value="woocommerce">WooCommerce</option>
                <option value="yoga">Yoga</option>
                <option value="magazine">Magazine</option>
                <option value="event-wordpress">Event</option>
              </select>
              <IoChevronDown className="absolute right-4 text-gray-400 text-xs pointer-events-none" />
            </div>

            {/* Input Search */}
            <div className="w-full md:w-[65%] flex items-center px-6 py-2">
              <input 
                type="text" 
                placeholder="Search your theme" 
                className="w-full bg-transparent focus:outline-none text-gray-400 text-[15px]"
              />
              <button className="text-gray-300 hover:text-[#ffdc12] transition-colors ml-2">
                <FaSearch size={18} />
              </button>
            </div>
          </div>

          {/* --- SUBTITLE --- */}
          <p className="text-gray-500 text-[18px] mb-16 font-light">
            We Have The Largest Collection of Courses
          </p>

          {/* --- BOTTOM TAGS --- */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white px-6 py-4 rounded-md shadow-sm flex items-center gap-3 border border-gray-50">
              <FaUsers className="text-[#ffdc12] text-xl" />
              <span className="text-[#555] font-medium text-[14px]">1.5 Million Students</span>
            </div>
            <div className="bg-white px-6 py-4 rounded-md shadow-sm flex items-center gap-3 border border-gray-50">
              <HiBell className="text-[#ffdc12] text-xl" />
              <span className="text-[#555] font-medium text-[14px]">More then 2000 Courses</span>
            </div>
            <div className="bg-white px-6 py-4 rounded-md shadow-sm flex items-center gap-3 border border-gray-50">
              <AiOutlineGlobal className="text-[#ffdc12] text-xl" />
              <span className="text-[#555] font-medium text-[14px]">Learn Anything Online</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeFourHero;