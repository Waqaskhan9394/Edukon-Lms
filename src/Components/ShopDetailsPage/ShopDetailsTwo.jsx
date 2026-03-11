import React, { useState } from 'react';
import { FiStar } from 'react-icons/fi';

// Image imports
import dec1 from '../../assets/Image/dec1.jpg';
import dec2 from '../../assets/Image/dec2.jpg';
import dec3 from '../../assets/Image/dec3.jpg';
import dec4 from '../../assets/Image/dec4.jpg';
import Shop1 from '../../assets/Image/Shop1.jpg';

const ShopDetailsContentTwo = () => {
  const [activeTab, setActiveTab] = useState('description');

  const reviewsData = [
    { id: 1, name: "Ganelon Boileau", date: "Jun 10, 2022", img: dec1 },
    { id: 2, name: "Robert Fox", date: "Aug 15, 2022", img: dec2 },
    { id: 3, name: "Arlene McCoy", date: "Sep 02, 2022", img: dec3 },
    { id: 4, name: "Jane Cooper", date: "Oct 10, 2022", img: dec4 },
  ];

  return (
    <div className="w-full font-['Roboto',sans-serif] py-6 md:py-12 max-w-7xl mx-auto px-4 bg-[#fdfdfd]">
      <div className="w-full">
        
        <div className="bg-white rounded-sm shadow-sm border border-gray-100">
          
          {/* ================= BUTTONS ALWAYS IN ONE ROW ================= */}
          <div className="flex flex-row border-b border-gray-100 overflow-x-auto no-scrollbar">
            <button 
              onClick={() => setActiveTab('description')} 
              className={`flex-1 sm:flex-none px-4 md:px-10 py-4 font-bold text-[11px] md:text-sm uppercase transition-all text-white whitespace-nowrap
                ${activeTab === 'description' ? 'bg-[#07294d]' : 'bg-[#ff6b2c] hover:bg-[#e85a1e]'}`}
            >
              Description
            </button>

            <button 
              onClick={() => setActiveTab('reviews')} 
              className={`flex-1 sm:flex-none px-4 md:px-10 py-4 font-bold text-[11px] md:text-sm uppercase transition-all text-white whitespace-nowrap
                ${activeTab === 'reviews' ? 'bg-[#07294d]' : 'bg-[#ff6b2c] hover:bg-[#e85a1e]'}`}
            >
              Reviews 4
            </button>
          </div>
          
          <div className="p-4 md:p-8">
            {/* ================= DESCRIPTION CONTENT ================= */}
            {activeTab === 'reviews' && (
              <div className="animate-fadeIn">
                <p className="text-[#777] text-[14px] md:text-[15px] leading-[24px] md:leading-[26px] mb-6 md:mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
                  <div className="w-full lg:flex-1 space-y-3 md:space-y-4">
                    {[
                      "Donec non est at libero vulputate rutrum.",
                      "Morbi ornare lectus quis justo gravida semper.",
                      "Pellentesque aliquet, sem eget laoreet ultrices.",
                      "Nulla tellus mi, vulputate adipiscing cursus eu.",
                      "Donec a neque libero.",
                      "Pellentesque aliquet, sem eget laoreet ultrices.",
                      "Morbi ornare lectus quis justo gravida semper."
                    ].map((text, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <FiStar className="text-[#ff6b2c] text-sm flex-shrink-0" />
                        <span className="text-[#777] text-[14px] md:text-[15px]">{text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="w-full lg:w-1/2">
                    <img src={Shop1} alt="Product Detail" className="w-full h-auto rounded-sm shadow-sm object-cover" />
                  </div>
                </div>
              </div>
            )}

            {/* ================= REVIEWS CONTENT ================= */}
            {activeTab === 'description' && (
              <div className="space-y-8 md:space-y-10 animate-fadeIn">
                {reviewsData.map((review) => (
                  <div key={review.id} className="flex flex-col sm:flex-row gap-4 md:gap-6 items-start">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0 border border-gray-200">
                      <img src={review.img} alt={review.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 border-b border-gray-50 pb-6 md:pb-8 last:border-0 w-full">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                        <div>
                          <h4 className="font-bold text-[#07294d] text-[16px] md:text-[17px]">{review.name}</h4>
                          <p className="text-[10px] md:text-[11px] text-gray-400 font-bold uppercase tracking-wide">Posted on {review.date}</p>
                        </div>
                        <div className="flex text-[#ffb400] text-xs space-x-0.5">
                          <FiStar className="fill-current" /><FiStar className="fill-current" /><FiStar className="fill-current" /><FiStar className="fill-current" /><FiStar className="fill-current" />
                        </div>
                      </div>
                      <p className="text-gray-500 text-[13px] md:text-[14px] mt-3 md:mt-4 leading-relaxed">
                        Excellent product quality and very detailed specifications.
                      </p>
                    </div>
                  </div>
                ))}
                
                {/* FORM SECTION */}
                <div className="pt-8 md:pt-10 border-t border-gray-50">
                  <h3 className="text-[20px] md:text-[22px] font-bold text-[#07294d] mb-6 md:mb-8">Add a Review</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-5">
                    <input type="text" placeholder="Full Name *" className="w-full border border-gray-200 p-3 md:p-4 rounded-sm outline-none text-sm focus:border-[#ff6b2c]" />
                    <input type="email" placeholder="Your Email *" className="w-full border border-gray-200 p-3 md:p-4 rounded-sm outline-none text-sm focus:border-[#ff6b2c]" />
                  </div>
                  <textarea placeholder="Type Here Message" rows="5" className="w-full border border-gray-200 p-3 md:p-4 rounded-sm outline-none text-sm mb-5 md:mb-6 focus:border-[#ff6b2c] resize-none"></textarea>
                  <button className="w-full sm:w-auto bg-[#ff6b2c] text-white px-8 md:px-10 py-3 md:py-4 rounded-sm font-bold uppercase text-[12px] md:text-[13px] tracking-wider hover:bg-[#07294d] transition-all">
                    Submit Review
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ShopDetailsContentTwo;