import React, { useState, useEffect } from 'react';
import { FiStar, FiMinus, FiPlus, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Image imports
import shop1 from '../../assets/Image/Shop1.jpg';
import shop2 from '../../assets/Image/Shop2.jpg';
import shop3 from '../../assets/Image/Shop3.jpg';

const ShopDetailsContent = () => {
  const [quantity, setQuantity] = useState(1);
  
  // Continuous loop images logic
  const productImages = [shop3, shop1, shop2, shop3, shop1]; 
  const [currentImg, setCurrentImg] = useState(1);
  const [transition, setTransition] = useState(true);

  const handleTransitionEnd = () => {
    if (currentImg >= productImages.length - 1) {
      setTransition(false);
      setCurrentImg(1);
    } else if (currentImg <= 0) {
      setTransition(false);
      setCurrentImg(productImages.length - 2);
    }
  };

  useEffect(() => {
    if (!transition) {
      setTimeout(() => setTransition(true), 1);
    }
  }, [transition]);

  const nextSlide = () => { if (transition) setCurrentImg((prev) => prev + 1); };
  const prevSlide = () => { if (transition) setCurrentImg((prev) => prev - 1); };

  return (
    <div className="w-full font-['Roboto',sans-serif] py-10 max-w-7xl mx-auto px-4 bg-white shadow-sm rounded-sm">
      
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* LEFT: Continuous Slider (Screenshot style navigation) */}
        <div className="w-full lg:w-[45%] relative group bg-[#F1F8E9] rounded-md overflow-hidden h-[400px] md:h-[500px]">
          <div 
            className={`flex h-full ${transition ? 'transition-transform duration-500 ease-in-out' : ''}`}
            style={{ transform: `translateX(-${currentImg * 100}%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {productImages.map((img, index) => (
              <div key={index} className="w-full h-full flex-shrink-0 flex items-center justify-center p-10">
                <img src={img} alt="" className="max-w-full max-h-full object-contain mix-blend-multiply" />
              </div>
            ))}
          </div>

          {/* Screenshot Style Orange Arrows */}
          <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#ff6b2c] text-white p-2 hover:bg-[#07294d] transition-colors z-20">
            <FiChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#ff6b2c] text-white p-2 hover:bg-[#07294d] transition-colors z-20">
            <FiChevronRight size={24} />
          </button>
        </div>

        {/* RIGHT: Content exactly like Screenshot */}
        <div className="w-full lg:w-[55%] space-y-5 px-2">
          
          <h2 className="text-3xl font-bold text-[#07294d]">The Title here</h2>
          
          <div className="flex items-center gap-1">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => <FiStar key={i} className="fill-current" />)}
            </div>
            <span className="text-gray-500 text-sm">(3 review)</span>
          </div>

          <p className="text-3xl font-bold text-[#07294d]">$ 340.00</p>

          <div className="space-y-3">
            <h4 className="text-lg font-bold text-[#07294d]">Product Description</h4>
            <p className="text-gray-500 leading-relaxed text-[16px]">
              Energistia an deliver atactica metrcs after avsionary Apropria trnsition enterpris an sources applications emerging psd template.
            </p>
          </div>

          {/* Select Options Like Screenshot */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <select className="flex-1 border border-gray-200 p-3 rounded bg-white text-gray-500 outline-none appearance-none cursor-pointer">
              <option>Select Size</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
            </select>

            <select className="flex-1 border border-gray-200 p-3 rounded bg-white text-gray-500 outline-none appearance-none cursor-pointer">
              <option>Ash</option>
              <option>Red</option>
              <option>Blue</option>
            </select>
          </div>

          {/* Quantity and Discount Row Like Screenshot */}
          <div className="flex flex-col sm:flex-row gap-4 items-center pt-2">
            <div className="flex items-center border border-gray-200 rounded h-[50px]">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 text-gray-400 hover:text-[#ff6b2c] transition-colors"><FiMinus /></button>
              <input 
                type="text" 
                value={quantity} 
                readOnly 
                className="w-12 text-center border-x border-gray-200 h-full text-[#07294d] font-medium"
              />
              <button onClick={() => setQuantity(quantity + 1)} className="px-3 text-gray-400 hover:text-[#ff6b2c] transition-colors"><FiPlus /></button>
            </div>

            <div className="flex-1 w-full">
              <input 
                type="text" 
                placeholder="Enter Discount Code" 
                className="w-full border border-gray-200 p-3 rounded outline-none h-[50px]"
              />
            </div>
          </div>

          {/* Add To Cart Button */}
          <div className="pt-4">
            <button className="bg-[#ff6b2c] text-white px-10 py-3 rounded font-bold hover:bg-[#07294d] transition-all">
              Add To Cart
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ShopDetailsContent;