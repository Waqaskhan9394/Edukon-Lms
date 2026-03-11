import React from 'react';
import { FaSearch, FaAngleDoubleRight } from 'react-icons/fa';

const BlogSidebar = () => {
  const categories = [
    { name: "Themeforest", count: "06" },
    { name: "Photodune", count: "11" },
    { name: "Codecanyon", count: "07" },
    { name: "GRaphicdriver", count: "09" },
    { name: "Wordpress", count: "50" },
    { name: "Joomla", count: "20" },
    { name: "3docean", count: "93" },
  ];

  return (
    <aside className="space-y-8 ">
      
      {/* Search Widget */}
      <div className="bg-[#F8F9FA] p-6 rounded-md shadow-sm border border-gray-100">
        <div className="relative flex items-center bg-white border border-gray-200 rounded-md overflow-hidden">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full py-3 px-4 text-[15px] outline-none text-gray-600"
          />
          <button className="pr-4 text-gray-500 hover:text-[#FF6B2C]">
            <FaSearch size={16} />
          </button>
        </div>
      </div>

      {/* Categories Widget */}
      <div className="bg-white border border-gray-100 shadow-sm rounded-md overflow-hidden">
        <div className="p-5 border-b border-gray-100">
          <h4 className="text-[20px] font-bold text-[#1A2132]">Post Category</h4>
        </div>
        
        <ul className="divide-y divide-gray-50">
          {categories.map((item, index) => (
            <li 
              key={index} 
              className="group flex justify-between items-center py-4 px-6 cursor-pointer hover:bg-[#FFF9F1] transition-all"
            >
              <div className="flex items-center gap-3 text-gray-600 group-hover:text-[#FF6B2C]">
                <FaAngleDoubleRight className="text-[12px]" />
                <span className="text-[15px] font-medium">{item.name}</span>
              </div>
              <span className="text-[14px] text-gray-500 font-semibold group-hover:text-[#FF6B2C]">
                {item.count}
              </span>
            </li>
          ))}
        </ul>
      </div>

    </aside>
  );
};

export default BlogSidebar;