import React from 'react';
import { FaFilter } from 'react-icons/fa';

const CourseFilterBar = () => {
  // Option lists extracted from your provided HTML
  const categories = ["Uncategorized", "Academy", "Agency", "App", "Bar", "Blog", "Business", "Butcher Shop", "Cafe", "Charity", "Church", "clinic", "College", "Conference", "Construction", "Corona Virus", "Corporate", "Covid19", "Digital Products", "doctors", "Ecological", "Education", "Entertainment", "Environment", "Environmental", "Events", "Fitness", "Food Shop", "Free", "Gym", "Halloween", "health", "healthcare", "learnpress", "Meat Shop", "medical", "Medical Prevention", "Meetup", "Mobile Apps", "Music", "News", "Nonprofit", "Onepage", "Online Course", "Personal Blog", "Portfolio", "pregnancy", "premium", "psd", "Religion", "Restaurants", "School", "SEO", "Software", "Startups", "University", "Vcard", "WooCommerce", "Yoga", "Magazine", "Event"];
  const languages = ["JAVA", "PHP", "HTML", "PYTHON", "JAVASCRIPT"];
  const skills = ["HTML", "CSS", "PHP", "JAVA", "JAVASCRIPT", "WORDPRESS", "REACT", "VUE", "ANGULAR"];
  const prices = Array.from({ length: 100 }, (_, i) => i + 1); // 1 to 100

  return (
    <section className="bg-[#FF6B2C] py-5">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
          
          {/* Left Side: Filter Icon and Text */}
          <div className="flex items-center gap-3 text-white">
            <div className="flex items-center gap-2 cursor-pointer">
              <FaFilter className="text-[18px]" />
              <span className="text-[20px] font-bold tracking-wide">Filters</span>
            </div>
          </div>

          {/* Right Side: Select Dropdowns Group */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full lg:flex-1">
            
            {/* Category Select */}
            <div className="relative">
              <select className="w-full h-[54px] px-5 rounded-[5px] bg-white text-[#555555] font-medium outline-none appearance-none cursor-pointer border-none shadow-sm text-[15px]">
                <option value="all">All Categories</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat.toLowerCase().replace(/\s+/g, '-')}>{cat}</option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <span className="text-gray-400 text-[12px]">▼</span>
              </div>
            </div>

            {/* Language Select */}
            <div className="relative">
              <select className="w-full h-[54px] px-5 rounded-[5px] bg-white text-[#555555] font-medium outline-none appearance-none cursor-pointer border-none shadow-sm text-[15px]">
                <option value="all">All Language</option>
                {languages.map((lang, index) => (
                  <option key={index} value={lang.toLowerCase()}>{lang}</option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <span className="text-gray-400 text-[12px]">▼</span>
              </div>
            </div>

            {/* Prices Select */}
            <div className="relative">
              <select className="w-full h-[54px] px-5 rounded-[5px] bg-white text-[#555555] font-medium outline-none appearance-none cursor-pointer border-none shadow-sm text-[15px]">
                <option value="all">All Prices</option>
                {prices.map((price) => (
                  <option key={price} value={price}>{price}</option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <span className="text-gray-400 text-[12px]">▼</span>
              </div>
            </div>

            {/* Skills Select */}
            <div className="relative">
              <select className="w-full h-[54px] px-5 rounded-[5px] bg-white text-[#555555] font-medium outline-none appearance-none cursor-pointer border-none shadow-sm text-[15px]">
                <option value="all">All Skills</option>
                {skills.map((skill, index) => (
                  <option key={index} value={skill.toLowerCase()}>{skill}</option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <span className="text-gray-400 text-[12px]">▼</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseFilterBar;