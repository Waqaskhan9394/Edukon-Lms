import React from 'react';
import { FaUser, FaCalendarAlt, FaRegCommentDots, FaExternalLinkAlt, FaQuoteRight, FaRegComments } from 'react-icons/fa';

const BlogStyle3LeftFour = () => {
  const postData = {
    id: 4,
    title: "Interactively Morph High Standards Anding",
    author: "Begrass Tyson",
    date: "April 23, 2021",
    comments: "09 Comments",
    quoteText: "Quickly morph empowered networks through viral systems uniquely opensource metrics",
    desc: "Complete deploy focused supply chains rather than viraling services productiva pandemc experiences via interoperable niche markets ramatica incentivize superior functionalitese Rapidiously evolve impactful core competencies without"
  };

  return (
    <div className="mb-10">
      <div className="bg-white rounded-md overflow-hidden shadow-sm border border-gray-100 group transition-all duration-300 hover:shadow-md">
        
        {/* --- GREEN SECTION WITH MESSAGE ICON --- */}
        <div 
          className="relative h-[320px] md:h-[400px] flex flex-col items-center justify-center p-8 text-center overflow-hidden"
          style={{ background: '#22D481' }}
        >
          {/* Top Right Quote Icon */}
          <FaQuoteRight className="absolute top-6 right-8 text-white text-5xl opacity-40" />

          {/* --- CENTER MESSAGE ICON --- */}
          <div className="relative z-10 mb-6">
             {/* Double Speech Bubble Icon */}
            <div className="text-white text-7xl md:text-8xl transition-transform duration-500 group-hover:scale-110">
               <FaRegComments />
            </div>
          </div>

          {/* Center Quote Text */}
          <h3 className="relative z-10 text-white text-xl md:text-2xl font-bold max-w-2xl leading-[1.6]">
            "{postData.quoteText}"
          </h3>

          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>

        {/* --- CONTENT SECTION --- */}
        <div className="p-8">
          <h2 className="text-[26px] md:text-[30px] font-bold text-[#1A2132] mb-4 hover:text-[#FF6B2C] transition-colors cursor-pointer leading-tight">
            {postData.title}
          </h2>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-5 text-[#777777] text-[14px] mb-6">
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

          <div className="flex items-center gap-4">
            <button className="bg-[#FF6B2C] text-white px-7 py-3 rounded-md font-bold text-[15px] flex items-center gap-2 hover:bg-[#1A2132] transition-all duration-300">
              Read More <FaExternalLinkAlt className="text-[12px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogStyle3LeftFour;