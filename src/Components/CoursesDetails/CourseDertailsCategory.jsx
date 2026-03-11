import React from 'react';

const CourseCategories = () => {
  const categories = [
    { name: "Personal Development", count: 30 },
    { name: "Photography", count: 20 },
    { name: "Teaching and Academics", count: 93 },
    { name: "Art and Design", count: 54 },
    { name: "Business", count: 28 },
    { name: "Data Science", count: 30 },
    { name: "Development", count: 38 },
    { name: "Finance", count: 75 },
    { name: "Health & Fitness", count: 89 },
    { name: "Lifestyle", count: 37 },
    { name: "Marketing", count: 18 },
    { name: "Music", count: 20 },
  ];

  return (
    <div className="w-full max-w-full lg:max-w-[360px] font-sans shadow-sm border border-gray-100 rounded-sm overflow-hidden mt-6">
      {/* Exact Orange Header from Image */}
      <div className="bg-[#ff5a2c] p-5">
        <h3 className="text-white text-xl font-bold tracking-tight">
          Course Categories
        </h3>
      </div>

      {/* Categories List */}
      <div className="bg-white">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`flex justify-between items-center px-6 py-4 cursor-pointer transition-all duration-300 group
              ${index % 2 !== 0 ? 'bg-[#fcfcfc]' : 'bg-white'} 
              hover:bg-[#ff5a2c] border-b border-gray-50 last:border-0`}
          >
            {/* Category Name */}
            <span className="text-gray-600 font-medium text-[15px] group-hover:text-white transition-colors">
              {cat.name}
            </span>
            
            {/* Count */}
            <span className="text-gray-400 text-[15px] group-hover:text-white transition-colors">
              {cat.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCategories;