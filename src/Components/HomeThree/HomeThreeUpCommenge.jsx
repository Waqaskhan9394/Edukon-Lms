import React from 'react';
import { FaUser, FaCalendarAlt } from 'react-icons/fa';

// Images Import (Apne folder structure ke hisab se check karein)
import img1 from '../../assets/Image/10.jpg';
import img2 from '../../assets/Image/HomeThreeFounded.jpg';
import img3 from '../../assets/Image/laravel.jpg';

const HomeThreeBlog = () => {
  const blogs = [
    {
      id: 1,
      image: img1,
      title: "Learn Basic Web Design with HTML and CSS",
      author: "Ummi Nishat",
      date: "April 23, 2022",
      desc: "Proactively enhance prospective resources for next generation convergence. Dramatically myocardinate high-quality vortals through transparent."
    },
    {
      id: 2,
      image: img2,
      title: "Scottish Creatives To Receive Funded Business.",
      author: "Begrass Tyson",
      date: "April 23, 2022",
      desc: "Proactively enhance prospective resources for next generation convergence. Dramatically myocardinate high-quality vortals through transparent."
    },
    {
      id: 3,
      image: img3,
      title: "Learn Basic Web Design with PHP and Laravel",
      author: "Rajib Raj",
      date: "April 23, 2022",
      desc: "Proactively enhance prospective resources for next generation convergence. Dramatically myocardinate high-quality vortals through transparent."
    }
  ];

  return (
    <section className="py-24 bg-white font-['Roboto',sans-serif]">
      <div className="container mx-auto px-4">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-16">
          <span className="text-[#ff6b2c] font-bold uppercase tracking-[3px] text-sm">Don't Miss the Day</span>
          <h2 className="text-[#07294d] text-4xl md:text-5xl font-black mt-3 mb-4">Upcoming Events</h2>
        </div>

        {/* --- Blog Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="group bg-white overflow-hidden transition-all duration-300">
              
              {/* Image Container */}
              <div className="relative overflow-hidden mb-6">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-[250px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content Container */}
              <div className="px-2">
                {/* Title */}
                <h3 className="text-[#07294d] text-2xl font-black leading-tight mb-4 hover:text-[#ff6b2c] cursor-pointer transition-colors duration-300">
                  {blog.title}
                </h3>

                {/* Meta Data (Author & Date) */}
                <div className="flex items-center gap-6 mb-4 text-gray-500 text-sm">
                  <div className="flex items-center gap-2">
                    <FaUser className="text-[#ff6b2c]" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-[#ff6b2c]" />
                    <span>{blog.date}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-500 leading-relaxed mb-8 line-clamp-3">
                  {blog.desc}
                </p>

                {/* Read More Button - Styled like screenshot */}
                <button className="border-2 border-[#ff6b2c] text-[#ff6b2c] px-8 py-3 font-bold rounded-md hover:bg-[#ff6b2c] hover:text-white transition-all duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeThreeBlog;