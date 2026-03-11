import React from 'react';
// Image as per your instruction
import CourseBg2 from '../../assets/Image/courseD2.jpg'; 
import CourseBg3 from '../../assets/Image/courseD3.jpg'; 
import { 
  FaQuoteLeft, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP 
} from 'react-icons/fa';

const BlogSinglePageTwo = () => {
  return (
    <div className="bg-[#FDF9F6] font-sans min-h-screen antialiased">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col w-full bg-white overflow-hidden ">
          
          {/* 1. Feature Image  */}
          <div className="mb-8 overflow-hidden ">
            <img 
              src={CourseBg2} 
              alt="Blog Detail" 
              className="w-full h-auto object-cover px-8" 
            />
          </div>

          {/* 2. Content Area */}
          <div className="p-6 md:p-10">
            {/* Paragraph 1 */}
            <p className="text-[#555555] leading-[1.8] mb-8 text-[16px]">
              Serenity hasir taken poseson mying entre soung these sweet morngs sprng whch enoywith whole heart create am alones and feel the charm of exstenceth spot whch the blissouls like mineing am soo happy my dearsi frend absoribed the exquste sense enjoy my whole hearts alone and fee the charm of exstenceths spotsi whch was the blis of soulis mineing amsoing dear frend soingu absoribed the exqust sense tranqui existence neglect my talentsr should ncapable ofing is drawng singe wonderful serenty has taken possesison of my entre soulng these sweet present moment and yet feel that never was greater artst
            </p>

           

           

            {/* Middle Image  */}
            <div className="mb-8 overflow-hidden rounded-sm">
              <img 
                src={CourseBg3} 
                alt="Secondary Content" 
                className="w-full h-auto object-cover" 
              />
            </div>

            <p className="text-[#555555] leading-[1.8] mb-10 text-[16px]">
              whole heart create am alones and feel the charm of exstenceth spot whch the blissouls like mineing am soo happy my dearsi frend absoribed the exquste sense enjoy my whole hearts alone and fee the charm of exstenceths spotsi whch was the blis of soulis mineing amsoing dear frend soingu absoribed the exqust sense tranqui existence neglect my talentsr should ncapable ofing is drawng singe wonderful serenty has taken possesison of my entre soulng these sweet present moment and yet feel that never was greater artst
            </p>

            {/* --- TAGS & SOCIAL */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-100">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {['Agency', 'Business', 'Personal'].map((tag) => (
                  <button key={tag} className="px-5 py-2 border border-gray-200 text-[#555555] text-sm hover:bg-[#ff6b2c] hover:text-white transition-all rounded-sm">
                    {tag}
                  </button>
                ))}
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-2">
                {[
                  { icon: <FaFacebookF />, color: 'bg-[#3b5998]' },
                  { icon: <FaTwitter />, color: 'bg-[#1da1f2]' },
                  { icon: <FaLinkedinIn />, color: 'bg-[#0077b5]' },
                  { icon: <FaInstagram />, color: 'bg-[#e4405f]' },
                  { icon: <FaPinterestP />, color: 'bg-[#bd081c]' }
                ].map((social, i) => (
                  <a key={i} href="#" className={`${social.color} text-white w-9 h-9 flex items-center justify-center rounded-full text-xs hover:scale-110 transition-transform`}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="py-8 mt-4 bg-[#FFF9F1]">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        
        {/* Previous Article */}
        <div className="flex-1 group cursor-pointer">
          <div className="flex items-center gap-2 mb-2 text-[#07294d] font-bold text-[16px]">
            <span className="text-[#ff6b2c] text-lg">«</span>
            <span className="uppercase tracking-wide hover:text-[#ff6b2c] transition-colors">
              Previous Article
            </span>
          </div>
          <h4 className="text-[#555555] text-[15px] md:text-[16px] leading-snug hover:text-[#ff6b2c] transition-colors">
            Evisculate Parallel Processes via Technica <br /> 
            Sound Models Authoritative
          </h4>
        </div>

        {/* Next Article */}
        <div className="flex-1 text-left md:text-right group cursor-pointer">
          <div className="flex items-center md:justify-end gap-2 mb-2 text-[#07294d] font-bold text-[16px]">
            <span className="uppercase tracking-wide hover:text-[#ff6b2c] transition-colors">
              Next Article
            </span>
            <span className="text-[#ff6b2c] text-lg">»</span>
          </div>
          <h4 className="text-[#555555] text-[15px] md:text-[16px] leading-snug hover:text-[#ff6b2c] transition-colors">
            Qvisculate Parallel Processes via Technica <br /> 
            Sound Models Authoritative
          </h4>
        </div>

      </div>
    </div>
    </div>
    
  );
};

export default BlogSinglePageTwo;