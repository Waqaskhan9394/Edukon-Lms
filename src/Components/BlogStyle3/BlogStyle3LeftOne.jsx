import React from 'react';
import { FaUser, FaCalendarAlt, FaRegCommentDots, FaExternalLinkAlt } from 'react-icons/fa';

// Images Import (Aap apni images ke path yahan adjust karein)
import blogImg1 from '../../assets/Image/courseD.jpg'; 


const BlogStyle3LeftOne = () => {
  const largePosts = [
    {
      id: 1,
      title: "Interactively Morph High Standards Anding",
      author: "Begrass Tyson",
      date: "April 23, 2021",
      comments: "09 Comments",
      img: blogImg1,
      desc: "Complete deploy focused supply chains rather than viraling services productiva pandemc experiences via interoperable niche markets ramatica incentivize superior functionalitese Rapidiously evolve impactful core competencies without"
    },
    
  ];

  return (
    <div className="space-y-10">
      {largePosts.map((post) => (
        <div 
          key={post.id} 
          className="bg-white rounded-md overflow-hidden shadow-sm border border-gray-100 group transition-all duration-300 hover:shadow-md"
        >
          {/* --- LARGE IMAGE SECTION --- */}
          <div className="relative overflow-hidden">
            <img 
              src={post.img} 
              alt={post.title} 
              className="w-full h-auto md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* --- CONTENT SECTION --- */}
          <div className="p-8">
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#1A2132] mb-4 hover:text-[#FF6B2C] transition-colors cursor-pointer leading-tight">
              {post.title}
            </h2>

            {/* --- META INFO (Capture 2 Style) --- */}
            <div className="flex flex-wrap items-center gap-6 text-[#777777] text-[14px] mb-6">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-[#FF6B2C]" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUser className="text-[#FF6B2C]" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCommentDots className="text-[#FF6B2C]" />
                <span>{post.comments}</span>
              </div>
            </div>

            <p className="text-[#555555] text-[16px] leading-[1.8] mb-8">
              {post.desc}
            </p>

            {/* --- READ MORE BUTTON (Orange Style) --- */}
            <button className="bg-[#FF6B2C] text-white px-8 py-3 rounded-md font-bold text-[15px] flex items-center gap-2 hover:bg-[#1A2132] transition-all duration-300 shadow-lg shadow-orange-100">
              Read More <FaExternalLinkAlt className="text-[12px]" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogStyle3LeftOne;