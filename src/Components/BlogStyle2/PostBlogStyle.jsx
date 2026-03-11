import React from 'react';
import { FaUser, FaCalendarAlt, FaExternalLinkAlt, FaRegCommentDots } from 'react-icons/fa';

// Images Import
import post1 from '../../assets/Image/Post1.jpg';
import post2 from '../../assets/Image/Post2.jpg';
import post3 from '../../assets/Image/Post3.jpg';
import post4 from '../../assets/Image/BlogGrid4.jpg';
import post5 from '../../assets/Image/BlogGrid5.jpg';
import post6 from '../../assets/Image/BlogGrid6.jpg';
import post7 from '../../assets/Image/BlogGrid7.jpg';
import post8 from '../../assets/Image/BlogGrid8.jpg';

const BlogStyleSection = () => {
  const posts = [
    { id: 1, title: "Scottish Creatives To Receive Funded Business.", author: "Begrass Tyson", date: "April 23,2022", img: post1, comments: 3, desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe" },
    { id: 2, title: "How to Build a Modern Website for 2024.", author: "John Doe", date: "May 12,2022", img: post2, comments: 4, desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe" },
    { id: 3, title: "UI/UX Trends That Are Changing the World.", author: "Robot Smith", date: "June 05,2022", img: post3, comments: 8, desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe" },
    { id: 4, title: "The Future of Artificial Intelligence in Design.", author: "Alex Carry", date: "July 15,2022", img: post4, comments: 12, desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe" },
    { id: 5, title: "Learning React JS: Tips and Tricks for Beginners.", author: "Sarah Connor", date: "Aug 10,2022", img: post5, comments: 5, desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe" },
    { id: 6, title: "Digital Marketing Strategies for Small Businesses.", author: "Jane Smith", date: "Sep 20,2022", img: post6, comments: 9, desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe" },
    { id: 7, title: "Graphic Design Masterclass: Adobe Creative Cloud.", author: "Michael Ross", date: "Oct 05,2022", img: post7, comments: 1, desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe" },
    { id: 8, title: "The Importance of Fast Loading Websites.", author: "Harvey Specter", date: "Nov 18,2022", img: post8, comments: 15, desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe" },
  ];

  return (
    <div className="w-full">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div 
            key={post.id} 
            className="bg-white  overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] group cursor-pointer flex flex-col h-full"
          >
            
            {/* Image Container */}
            <div className="p-3 pb-0">
              <div className="relative overflow-hidden rounded-[5px]">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-[200px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-[18px] font-[800] text-[#1A2132] leading-[1.4] mb-3 group-hover:text-[#FF6B2C] transition-colors line-clamp-2">
                {post.title}
              </h3>

              {/* Meta Info */}
              <div className="flex items-center gap-4 text-[#777777] text-[13px] mb-4">
                <div className="flex items-center gap-1.5">
                  <FaUser className="text-[#FF6B2C]" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaCalendarAlt className="text-[#FF6B2C]" />
                  <span>{post.date}</span>
                </div>
              </div>

              <p className="text-[#555555] text-[14px] leading-[1.6] mb-6 line-clamp-2">
                {post.desc}
              </p>

              {/* Footer */}
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                <button className="flex items-center gap-2 text-[#1A2132] font-extrabold text-[13px] hover:text-[#FF6B2C] transition-colors uppercase tracking-tight">
                  Read More <FaExternalLinkAlt className="text-[10px] text-[#FF6B2C]" />
                </button>
                
                <div className="relative flex items-center justify-center text-[#777777]">
                  <FaRegCommentDots className="text-[20px]" />
                  <span className="absolute -top-2 -right-2 bg-[#FF6B2C] text-white text-[9px] w-[16px] h-[16px] rounded-full flex items-center justify-center font-bold">
                    {post.comments}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogStyleSection;