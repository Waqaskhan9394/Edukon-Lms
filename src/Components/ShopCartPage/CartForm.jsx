import React from 'react';

const CartFormSection = () => {
  return (
    <div className="w-full bg-[#fdfdfd] pb-20 px-4 font-['Roboto',sans-serif]">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Main Container --- */}
        <div className="bg-white shadow-[0_0_25px_rgba(0,0,0,0.06)] border border-[#ececec] rounded-sm p-6 md:p-12">
          
          {/* 1. Top Part: Coupon aur Action Buttons */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 mb-10 pb-10 border-b border-[#ececec]">
            
            {/* Coupon Box */}
            <div className="flex flex-col sm:flex-row border border-[#ececec] rounded-sm overflow-hidden w-full lg:max-w-[450px]">
              <input 
                type="text" 
                placeholder="Coupon Code..." 
                className="px-5 py-3 outline-none flex-1 text-[15px] placeholder:text-gray-400 min-h-[55px]"
              />
              <button className="bg-[#ff6b2c] text-white px-8 py-3 font-bold text-[14px] uppercase tracking-wider hover:bg-[#07294d] transition-all min-h-[55px]">
                Apply Coupon
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <button className="border border-[#ececec] px-6 h-[55px] font-bold text-[14px] text-[#07294d] uppercase hover:bg-[#ff6b2c] hover:text-white hover:border-[#ff6b2c] transition-all rounded-sm w-full sm:w-auto">
                Update Cart
              </button>
              <button className="border border-[#ececec] px-6 h-[55px] font-bold text-[14px] text-[#07294d] uppercase hover:bg-[#ff6b2c] hover:text-white hover:border-[#ff6b2c] transition-all rounded-sm w-full sm:w-auto">
                Proceed to Checkout
              </button>
            </div>
          </div>

          {/* 2. Bottom Part: Shipping aur Totals Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Column: Calculate Shipping */}
            <div className="w-full">
              <h3 className="text-[22px] md:text-[24px] font-bold text-[#07294d] mb-6 md:mb-8 border-b-2 border-[#ff6b2c] inline-block pb-1">
                Calculate Shipping
              </h3>
              <div className="space-y-5">
                {/* Country Select */}
                <div className="relative group">
                  <select className="w-full border border-[#ececec] h-[55px] px-5 appearance-none text-gray-500 bg-white outline-none cursor-pointer text-[15px]">
                    <option>United Kingdom (UK)</option>
                    <option>United States (US)</option>
                    <option>Pakistan</option>
                  </select>
                  <div className="absolute right-0 top-0 h-full w-[50px] bg-[#ff6b2c] flex items-center justify-center pointer-events-none group-hover:bg-[#07294d] transition-colors rounded-r-sm">
                    <span className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-white"></span>
                  </div>
                </div>

                {/* State/Postcode Row */}
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="relative flex-1 group">
                    <select className="w-full border border-[#ececec] h-[55px] px-5 appearance-none text-gray-400 bg-white outline-none cursor-pointer text-[15px]">
                      <option>State/Country</option>
                    </select>
                    <div className="absolute right-0 top-0 h-full w-[50px] bg-[#ff6b2c] flex items-center justify-center pointer-events-none group-hover:bg-[#07294d] transition-colors rounded-r-sm">
                      <span className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-white"></span>
                    </div>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Postcode/ZIP" 
                    className="flex-1 border border-[#ececec] h-[55px] px-5 rounded-sm outline-none text-[15px] focus:border-[#ff6b2c] transition-colors"
                  />
                </div>

                <button className="bg-[#ff6b2c] text-white px-10 h-[55px] font-bold text-[14px] uppercase tracking-wider rounded-sm hover:bg-[#07294d] transition-all w-full sm:w-auto">
                  Update Total
                </button>
              </div>
            </div>

            {/* Right Column: Cart Totals */}
            <div className="w-full">
              <h3 className="text-[22px] md:text-[24px] font-bold text-[#07294d] mb-6 md:mb-8 border-b-2 border-[#ff6b2c] inline-block pb-1">
                Cart Totals
              </h3>
              <div className="border border-[#ececec] rounded-sm overflow-hidden shadow-sm bg-white">
                <div className="flex justify-between items-center p-4 md:p-5 border-b border-[#ececec]">
                  <span className="text-gray-500 font-medium text-[15px] md:text-[16px]">Cart Subtotal</span>
                  <span className="text-[#ff6b2c] font-bold text-[15px] md:text-[16px]">$ 0.00</span>
                </div>
                <div className="flex justify-between items-center p-4 md:p-5 border-b border-[#ececec]">
                  <span className="text-gray-500 font-medium text-[15px] md:text-[16px]">Shipping</span>
                  <span className="text-[#777] font-medium text-[14px] md:text-[15px]">Free Shipping</span>
                </div>
                <div className="flex justify-between items-center p-5 md:p-6 bg-[#fcfcfc]">
                  <span className="text-[#07294d] font-bold text-[17px] md:text-[18px]">Order Total</span>
                  <span className="text-[#ff6b2c] font-extrabold text-[20px] md:text-[24px]">$ 2940.00</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default CartFormSection;