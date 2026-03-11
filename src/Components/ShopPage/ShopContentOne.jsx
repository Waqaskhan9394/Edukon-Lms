import React, { useState } from 'react'
import { FiStar, FiShoppingCart, FiHeart, FiEye } from 'react-icons/fi';

// Image imports (keeping your existing structure)
import shop1 from '../../assets/Image/Shop1.jpg';
import shop2 from '../../assets/Image/Shop2.jpg';
import shop3 from '../../assets/Image/Shop3.jpg';
import shop4 from '../../assets/Image/Shop4.jpg';
import shop5 from '../../assets/Image/Shop5.jpg';
import shop6 from '../../assets/Image/Shop6.jpg';
import shop7 from '../../assets/Image/Shop7.jpg';
import shop8 from '../../assets/Image/Shop8.jpg';
import shop9 from '../../assets/Image/Shop9.jpg';

const LeftShopContent = () => {
  // View state: true for Grid, false for List
  const [isGridView, setIsGridView] = useState(true);

  const products = [
    { id: 1, title: "Product Title Here", price: "$200.00", rating: 5, img: shop1, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" },
    { id: 2, title: "Product Title Here", price: "$200.00", rating: 5, img: shop2, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" },
    { id: 3, title: "Product Title Here", price: "$200.00", rating: 5, img: shop3, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" },
    { id: 4, title: "Product Title Here", price: "$200.00", rating: 5, img: shop4, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" },
    { id: 5, title: "Product Title Here", price: "$200.00", rating: 5, img: shop5, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" },
    { id: 6, title: "Product Title Here", price: "$200.00", rating: 5, img: shop6, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" },
    { id: 7, title: "Product Title Here", price: "$200.00", rating: 5, img: shop7, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" },
    { id: 8, title: "Product Title Here", price: "$200.00", rating: 5, img: shop8, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" },
    { id: 9, title: "Product Title Here", price: "$200.00", rating: 5, img: shop9, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" },
  ];

  return (
    <div className="w-full space-y-8 font-['Roboto',sans-serif]">
      
      {/* --- Results Header Bar --- */}
      <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-[15px] font-medium text-[#07294d]">
          Showing 01 - 09 of 139 Results
        </p>
        
        <div className="flex gap-2">
          {/* Grid View Button */}
          <button 
            onClick={() => setIsGridView(true)}
            className={`w-10 h-10 flex items-center justify-center rounded-sm transition-all ${isGridView ? 'bg-[#ff6b2c] text-white shadow-md shadow-orange-100' : 'bg-[#f8f9fa] text-gray-400 hover:text-[#ff6b2c]'}`}
          >
            <span className="text-xl">≡</span>
          </button>
          {/* List View Button */}
          <button 
            onClick={() => setIsGridView(false)}
            className={`w-10 h-10 flex items-center justify-center rounded-sm transition-all ${!isGridView ? 'bg-[#ff6b2c] text-white shadow-md shadow-orange-100' : 'bg-[#f8f9fa] text-gray-400 hover:text-[#ff6b2c]'}`}
          >
            <span className="text-xl">▤</span>
          </button>
        </div>
      </div>

      {/* --- Products */}
      <div className={isGridView ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col gap-6"}>
        {products.map((product) => (
          <div 
            key={product.id} 
            className={`bg-white rounded-md group overflow-hidden transition-all duration-500 hover:shadow-lg border border-gray-100 flex ${isGridView ? 'flex-col' : 'flex-col md:flex-row items-center p-4'}`}
          >
            
            {/* Image Container */}
            <div className={` relative overflow-hidden flex-shrink-0 ${isGridView ? 'h-72 w-full' : 'h-64 w-full md:w-80'}`}>
              <img 
                src={product.img} 
                alt={product.title} 
                className="w-full h-full object-cover  bg-cover transition-transform duration-700"
              />
              
              {/* Blur Layer - Bottom to Top */}
              <div className="absolute inset-0 bg-white/40 backdrop-blur-[4px] flex items-center justify-center gap-3 transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
                <button className="w-11 h-11 bg-[#ff6b2c] text-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"><FiEye /></button>
                <button className="w-11 h-11 bg-[#ff6b2c] text-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"><FiHeart /></button>
                <button className="w-11 h-11 bg-[#ff6b2c] text-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"><FiShoppingCart /></button>
              </div>
            </div>

            {/* Content Area */}
            <div className={`p-6 ${isGridView ? 'text-center' : 'text-left flex-1'}`}>
              <h3 className="text-[20px] font-bold text-[#07294d] hover:text-[#ff6b2c] cursor-pointer transition-colors duration-300 mb-2">
                {product.title}
              </h3>
              
              <div className={`flex gap-1 mb-2 ${isGridView ? 'justify-center' : 'justify-start'}`}>
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="text-[#ffb400] fill-[#ffb400] text-[14px]" />
                ))}
              </div>

              <p className="text-[18px] font-[800] text-[#07294d] mb-3">
                {product.price}
              </p>

              {/* Description (Only visible in List View) */}
              {!isGridView && (
                <p className="text-gray-500 text-[15px] leading-relaxed mb-4 max-w-2xl">
                  {product.desc}
                </p>
              )}
            </div>

          </div>
        ))}
      </div>

      {/* --- Pagination --- */}
      <div className="flex justify-center pt-8">
        <div className="flex gap-3">
          <button className="w-11 h-11 border border-gray-200 rounded-full flex items-center justify-center text-[#555555] font-bold hover:bg-[#ff6b2c] hover:text-white hover:border-[#ff6b2c] transition-all">1</button>
          <button className="w-11 h-11 border border-gray-200 rounded-full flex items-center justify-center text-[#555555] font-bold hover:bg-[#ff6b2c] hover:text-white hover:border-[#ff6b2c] transition-all">2</button>
          <button className="w-11 h-11 border border-gray-200 rounded-full flex items-center justify-center text-[#555555] font-bold hover:bg-[#ff6b2c] hover:text-white hover:border-[#ff6b2c] transition-all">»</button>
        </div>
      </div>

    </div>
  )
}

export default LeftShopContent;