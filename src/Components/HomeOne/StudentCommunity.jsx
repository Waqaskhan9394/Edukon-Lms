import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FaPlay } from 'react-icons/fa';

// Images Import
import communityVideo from '../../assets/Image/Community1.jpg'; 
import user1 from '../../assets/Image/Community2.jpg'; 
import user2 from '../../assets/Image/Community3.jpg'; 

const CommunityFeedback = () => {
  const testimonials = [
    {
      id: 1,
      name: "Oliver Beddows",
      role: "UX designer",
      img: user1,
      text: "Rapidiously buildcollaboration anden deas sharing viaing and bleedng edgeing nterfaces fnergstically plagiarize teams anbuilding paradgms whereas goingi forward process and monetze",
      rating: 5
    },
    {
      id: 2,
      name: "Madley Pondor",
      role: "UX designer",
      img: user2,
      text: "Rapidiously buildcollaboration anden deas sharing viaing and bleedng edgeing nterfaces fnergstically plagiarize teams anbuilding paradgms whereas goingi forward process and monetze",
      rating: 5
    }
  ];

  return (
    
    <section className="py-20 md:py-28 lg:py-32 bg-white font-['Roboto',sans-serif] relative overflow-hidden">
      
      
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dot-grid.png')]"></div>

      <div className="container mx-auto px-4 md:px-12 lg:px-24 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20">
          <span className="text-[#FF6B2C] font-bold tracking-[3px] uppercase text-[15px] block mb-3">
            LOVED BY 200,000+ STUDENTS
          </span>
          <h2 className="text-[32px] md:text-[44px] lg:text-[46px] font-[800] text-[#1A2132] leading-[1.2]">
            Students Community Feedback
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* --- LEFT SIDE: VIDEO PREVIEW --- */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative rounded-[15px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
              <img 
                src={communityVideo} 
                alt="Community Video" 
                className="w-full h-auto object-cover bg-cover transform transition-transform duration-1000 "
              />
              {/* Play Button Overlay with Pulse */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-2xl relative cursor-pointer transform transition-transform group-hover:scale-110 duration-500">
                  <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-30"></div>
                  <FaPlay className="text-[#FF6B2C] text-2xl md:text-3xl ml-1 relative z-10" />
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: TESTIMONIALS --- */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {testimonials.map((item) => (
              <div 
                key={item.id} 
                className="bg-white p-6 md:p-10 rounded-[12px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-5">
                    {/* User Image with exact border style */}
                    <div className="w-16 h-16 rounded-full overflow-hidden ">
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <h4 className="text-[20px] font-bold text-[#1A2132] mb-0.5">{item.name}</h4>
                      <p className="text-[#777777] text-[14px] font-medium uppercase tracking-wider">{item.role}</p>
                    </div>
                  </div>
                  
                  {/* Star Rating Section */}
                  <div className="flex text-[#FF6B2C] text-[15px] gap-0.5">
                    {[...Array(item.rating)].map((_, i) => <AiFillStar key={i} />)}
                  </div>
                </div>
                
                {/* Text styling with better line height */}
                <p className="text-[#555555] text-[16px] leading-[1.8] font-normal italic opacity-90">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CommunityFeedback;