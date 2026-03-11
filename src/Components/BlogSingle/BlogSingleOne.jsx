import React from 'react';
import CourseBg from '../../assets/Image/courseD.jpg';
import { 
  FaUser, FaCalendarAlt, FaRegCommentDots, FaQuoteLeft 
} from 'react-icons/fa';

const BlogSinglePage = () => {
  return (
    <div className="bg-[#FDF9F6] font-sans min-h-screen antialiased">
      {/* Container */}
      <div className="container mx-auto  max-w-5xl">
        <div className="flex flex-col w-full">
          
          {/* --- MAIN BLOG CONTENT --- */}
          <div className="w-full flex flex-col">
            
            {/* 1. Feature Image Section */}
            <div className="bg-white overflow-hidden ">
              <div className="relative overflow-hidden group">
                <img 
                  src={CourseBg}
                  alt="Blog Thumbnail" 
                  className="w-full h-auto md:h-[550px] object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
              </div>

              {/* Title & Meta Data Area */}
              <div className="p-6 md:p-10 pb-0">
                <h2 className="text-2xl md:text-[36px] font-extrabold text-[#07294d] mb-5 leading-[1.3] hover:text-[#ff6b2c] transition-all cursor-pointer">
                  Interactively Morph High Standards Anding
                </h2>
                
                {/* Meta Icons Section - Matched to Screenshot */}
                <div className="flex flex-wrap items-center gap-5 text-[#707070] text-[15px] pb-6 border-b border-[#ececec]">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-[#ff6b2c] text-sm" /> 
                    <span>April 23, 2021</span>
                  </div>
                  <div className="flex items-center gap-2 border-l border-[#ececec] pl-5">
                    <FaUser className="text-[#ff6b2c] text-sm" /> 
                    <span>Rajib Raj</span>
                  </div>
                  <div className="flex items-center gap-2 border-l border-[#ececec] pl-5">
                    <FaRegCommentDots className="text-[#ff6b2c] text-sm" /> 
                    <span>09 Comments</span>
                  </div>
                </div>
              </div>

              {/* 2. Text Content Area */}
              <div className="p-6 md:p-10 pt-8">
                <p className="text-[#555555] leading-[1.8] mb-8 text-[16px]">
                  Serenity hasir taken poseson mying entre soung these sweet morngs sprng whch enoywith whole heart create am alones and feel the charm of exstenceth spot whch the blissouls like mineing am soo happy my dearsi frend absorbed the exquste sense enjoy my whole hearts alone and fee the charm of exstenceth spotsi whch was the blis of soulis mineing amsoing dear frend soingu absorbed the exqust sense tranqui existence neglect my talentsr should ncapable ofing is drawng singe wonderful serenity.
                </p>

              {/* ORANGE QUOTE BLOCK - Compact Style */}
<div className="bg-[#ff6827] p-6 md:p-8 rounded-sm relative mb-8 overflow-hidden group">
  
  {/* Smaller Background Icon */}
  <FaQuoteLeft className="text-white/15 text-5xl absolute top-4 left-4 transition-transform duration-500 group-hover:scale-110" />
  
  <div className="relative z-10">
    {/* Compact Quote Text */}
    <p className="text-white text-[16px] md:text-[18px] font-medium italic leading-[1.6]">
      "Dynamically recaptualize distributed technologies is whereas turnkey channels and onotonectally provide access to resource leveling expertise vias worldwide deliverables uolisticly extend aserser are diverse vortals."
    </p>
    
    {/* Author Name - Minimal Style */}
    <div className="flex justify-end mt-4">
      <span className="text-white italic text-[14px] font-bold tracking-wide opacity-90">
        — Melissa Hunter
      </span>
    </div>
  </div>
</div>

                {/* Remaining Paragraphs */}
                <div className="space-y-7">
                  <p className="text-[#555555] leading-[1.8] text-[16px]">
                    whole heart create am alones and feel the charm of exstenceth spot whch the blissouls like mineing am soo happy my dearsi frend absorbed the exquste sense enjoy my whole hearts alone and fee the charm of exstenceth spotsi whch was the blis of soulis mineing amsoing dear frend soingu absorbed the exqust sense tranqui existence neglect my talentsr should ncapable ofing is drawng singe wonderful serenity has taken possesison of my entre soulng these sweet present moment and yet feel that never was greater artst
                  </p>
                  
                  <p className="text-[#555555] leading-[1.8] text-[16px]">
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSinglePage;