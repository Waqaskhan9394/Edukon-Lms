import React from 'react';





// Gallery Images
import g1 from '../../assets/Image/g1.jpg';
import g2 from '../../assets/Image/g2.jpg';
import g3 from '../../assets/Image/g3.jpg';
import g4 from '../../assets/Image/g4.jpg';
import g5 from '../../assets/Image/g5.jpg';
import g6 from '../../assets/Image/g6.jpg';
import g7 from '../../assets/Image/g7.jpg';
import g8 from '../../assets/Image/g8.jpg';
import g9 from '../../assets/Image/g9.jpg';

const BlogSidebarThree = () => {
 

  const galleryImages = [g1, g2, g3, g4, g5, g6, g7, g8, g9];

  const tags = [
    "envato", "themeforest", "codecanyon", "videohive", "audiojungle", "3docean", "envato", "themeforest", "codecanyon"
  ];

  return (
    <aside className="space-y-8 font-sans">
      
     

      {/* 4. GALLERY PHOTOS WIDGET */}
      <div className="bg-white border border-gray-100 shadow-sm rounded-md overflow-hidden">
        <div className="p-5 border-b border-gray-100"><h4 className="text-[20px] font-bold text-[#1A2132]">Gallery Photos</h4></div>
        <div className="p-5 grid grid-cols-3 gap-2">
          {galleryImages.map((img, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-sm cursor-pointer group">
              <img src={img} alt="gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* 5. OUR POPULAR TAGS WIDGET*/}
      <div className="bg-white border border-gray-100 shadow-sm rounded-md overflow-hidden">
        <div className="p-5 border-b border-gray-100"><h4 className="text-[20px] font-bold text-[#1A2132]">Our Popular Tags</h4></div>
        <div className="p-5 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="px-4 py-1.5 border border-gray-100 text-[13px] text-gray-500 rounded-sm cursor-pointer hover:bg-[#FF6B2C] hover:text-white hover:border-[#FF6B2C] transition-all uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </div>

    </aside>
  );
};

export default BlogSidebarThree;