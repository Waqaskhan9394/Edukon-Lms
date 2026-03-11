import React from 'react';
import { FaUser, FaCalendarAlt, FaExternalLinkAlt, FaRegCommentDots } from 'react-icons/fa';

// Images Import
import post1 from '../../assets/Image/Post1.jpg';
import post2 from '../../assets/Image/Post2.jpg';
import post3 from '../../assets/Image/Post3.jpg';

const BlogPostSection = () => {
  const posts = [
    {
      id: 1,
      title: "Scottish Creatives To Receive Funded Business.",
      author: "Begrass Tyson",
      date: "April 23,2022",
      img: post1,
      comments: 3,
      desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe"
    },
    {
      id: 2,
      title: "Scottish Creatives To Receive Funded Business.",
      author: "Begrass Tyson",
      date: "April 23,2022",
      img: post2,
      comments: 4,
      desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe"
    },
    {
      id: 3,
      title: "Scottish Creatives To Receive Funded Business.",
      author: "Begrass Tyson",
      date: "April 23,2022",
      img: post3,
      comments: 8,
      desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe"
    }
  ];

  return (
    <section className="py-24 bg-[#FFF9F1] font-['Roboto',sans-serif]">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <span className="text-[#FF6B2C] font-bold tracking-[3px] uppercase text-[15px] block mb-2">
            FORM OUR BLOG POSTS
          </span>
          <h2 className="text-[34px] md:text-[46px] font-[800] text-[#1A2132] leading-tight">
            More Articles From Resource Library
          </h2>
        </div>

        {/* --- BLOG GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded-[10px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-[0_25px_50px_rgba(0,0,0,0.1)] group cursor-pointer"
            >
              
              {/* Image with White Border (Exact match for Capture4.jpg) */}
              <div className="p-4 pb-0">
                <div className="relative overflow-hidden rounded-[5px]">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-[240px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8">
                {/* Title */}
                <h3 className="text-[22px] font-[800] text-[#1A2132] leading-[1.4] mb-4 group-hover:text-[#FF6B2C] transition-colors">
                  {post.title}
                </h3>

                {/* Meta Info (Author & Date) */}
                <div className="flex items-center gap-5 text-[#777777] text-[14px] mb-6">
                  <div className="flex items-center gap-2">
                    <FaUser className="text-[#FF6B2C]" />
                    <span className="font-medium">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-[#FF6B2C]" />
                    <span className="font-medium">{post.date}</span>
                  </div>
                </div>

                {/* Short Description */}
                <p className="text-[#555555] text-[15px] leading-[1.8] mb-8 line-clamp-3">
                  {post.desc}
                </p>

                {/* Footer Section (Read More & Comments) */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <button className="flex items-center gap-2 text-[#1A2132] font-extrabold text-[15px] hover:text-[#FF6B2C] transition-colors uppercase tracking-tight">
                    Read More <FaExternalLinkAlt className="text-[12px] text-[#FF6B2C]" />
                  </button>
                  
                  {/* Comment Icon with Orange Notification Style */}
                  <div className="relative flex items-center justify-center text-[#777777] hover:text-[#FF6B2C] transition-colors">
                    <FaRegCommentDots className="text-[22px]" />
                    <span className="absolute -top-2.5 -right-2 bg-[#FF6B2C] text-white text-[10px] w-[18px] h-[18px] rounded-full flex items-center justify-center font-bold shadow-sm">
                      {post.comments}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPostSection;