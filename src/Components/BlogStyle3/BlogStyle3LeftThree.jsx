import React, { useState } from 'react';
import { FaUser, FaCalendarAlt, FaRegCommentDots, FaExternalLinkAlt, FaPlay, FaTimes } from 'react-icons/fa';

// Image Import
import blogImg1 from '../../assets/Image/courseD3.jpg'; 

const BlogStyle3LeftThree = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const postData = {
    id: 1,
    title: "Interactively Morph High Standards Anding",
    author: "Begrass Tyson",
    date: "April 23, 2021",
    comments: "09 Comments",
    img: blogImg1,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Yahan apni video link dalein
    desc: "Complete deploy focused supply chains rather than viraling services productiva pandemc experiences via interoperable niche markets ramatica incentivize superior functionalitese Rapidiously evolve impactful core competencies without"
  };

  return (
    <div className="space-y-10">
      <div className="bg-white rounded-md overflow-hidden shadow-sm border border-gray-100 group transition-all duration-300 hover:shadow-md">
        
        {/* --- IMAGE & PLAY ICON SECTION --- */}
        <div 
          className="relative overflow-hidden cursor-pointer"
          onClick={() => setIsVideoOpen(true)}
        >
          <img 
            src={postData.img} 
            alt={postData.title} 
            className="w-full h-auto md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all duration-300">
            <div className="w-20 h-20 bg-[#FF6B2C] text-white rounded-full flex items-center justify-center pl-1 shadow-2xl animate-pulse transform group-hover:scale-110 transition-all duration-300">
              <FaPlay size={25} />
            </div>
          </div>
        </div>

        {/* --- CONTENT SECTION --- */}
        <div className="p-8">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#1A2132] mb-4 hover:text-[#FF6B2C] transition-colors cursor-pointer leading-tight">
            {postData.title}
          </h2>

          <div className="flex flex-wrap items-center gap-6 text-[#777777] text-[14px] mb-6">
            <div className="flex items-center gap-2"><FaCalendarAlt className="text-[#FF6B2C]" /><span>{postData.date}</span></div>
            <div className="flex items-center gap-2"><FaUser className="text-[#FF6B2C]" /><span>{postData.author}</span></div>
            <div className="flex items-center gap-2"><FaRegCommentDots className="text-[#FF6B2C]" /><span>{postData.comments}</span></div>
          </div>

          <p className="text-[#555555] text-[16px] leading-[1.8] mb-8">{postData.desc}</p>

          <button className="bg-[#FF6B2C] text-white px-8 py-3 rounded-md font-bold text-[15px] flex items-center gap-2 hover:bg-[#1A2132] transition-all duration-300 shadow-lg shadow-orange-100">
            Read More <FaExternalLinkAlt className="text-[12px]" />
          </button>
        </div>
      </div>

      {/* --- VIDEO MODAL (POPUP) --- */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4">
          <button 
            className="absolute top-10 right-10 text-white text-3xl hover:text-[#FF6B2C] transition-colors"
            onClick={() => setIsVideoOpen(false)}
          >
            <FaTimes />
          </button>
          
          <div className="w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src={`${postData.videoUrl}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogStyle3LeftThree;