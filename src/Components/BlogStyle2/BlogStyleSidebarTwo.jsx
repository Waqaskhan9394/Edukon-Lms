import React from 'react';
import { FaSearch, FaAngleDoubleRight } from 'react-icons/fa';

// Thumbnails for Popular Posts
import thumb1 from '../../assets/Image/01.jpg';
import thumb2 from '../../assets/Image/02.jpg';
import thumb3 from '../../assets/Image/03.jpg';
import thumb4 from '../../assets/Image/04.jpg';

const BlogSidebarTwo = () => {
 

  const popularPosts = [
    { id: 1, title: "Poor People's Campaign Our Resources", date: "Jun 05,2022", img: thumb1 },
    { id: 2, title: "Financial Reporting Qouncil What More.", date: "Jun 05,2022", img: thumb2 },
    { id: 3, title: "Consulting Reporting Qounc Arei More.", date: "Jun 05,2022", img: thumb3 },
    { id: 4, title: "Strategic Social Media and Visual Design.", date: "Jun 05,2022", img: thumb4 },
  ];

  const archives = [
    { month: "January", year: "2021" },
    { month: "February", year: "2021" },
    { month: "March", year: "2021" },
    { month: "April", year: "2021" },
    { month: "June", year: "2021" },
    { month: "July", year: "2021" },
  ];

  return (
    <aside className="space-y-8">
      
    

      {/* MOST POPULAR POSTS */}
      <div className="bg-white border border-gray-100 shadow-sm rounded-md overflow-hidden">
        <div className="p-5 border-b border-gray-100">
          <h4 className="text-[20px] font-bold text-[#1A2132]">Most Popular Post</h4>
        </div>
        <div className="p-5 space-y-5">
          {popularPosts.map((post) => (
            <div key={post.id} className="flex gap-4 group cursor-pointer">
              <div className="w-20 h-16 flex-shrink-0 overflow-hidden rounded bg-gray-100">
                <img src={post.img} alt="thumb" className="w-full h-full object-cover group-hover:scale-110 transition-duration-500" />
              </div>
              <div>
                <h5 className="text-[14px] font-bold text-[#1A2132] leading-tight group-hover:text-[#FF6B2C]">{post.title}</h5>
                <span className="text-[12px] text-gray-400 mt-1 block">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* OUR ARCHIVES */}
      <div className="bg-white border border-gray-100 shadow-sm rounded-md overflow-hidden">
        <div className="p-5 border-b border-gray-100">
          <h4 className="text-[20px] font-bold text-[#1A2132]">Our Archives</h4>
        </div>
        <ul className="divide-y divide-gray-50">
          {archives.map((item, i) => (
            <li key={i} className="group flex justify-between items-center py-4 px-6 cursor-pointer hover:bg-[#FFF9F1] transition-all">
              <div className="flex items-center gap-3 text-gray-600 group-hover:text-[#FF6B2C]">
                <FaAngleDoubleRight className="text-[12px]" />
                <span className="text-[15px] font-medium">{item.month}</span>
              </div>
              <span className="text-[14px] text-gray-400 font-semibold">{item.year}</span>
            </li>
          ))}
        </ul>
      </div>

    </aside>
  );
};

export default BlogSidebarTwo;