import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP } from 'react-icons/fa';

const RegisterPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#fdfaf3] flex items-center justify-center py-20 px-4 font-['Roboto',sans-serif]">
      <div className="w-full max-w-[600px] bg-white shadow-[0_0_20px_rgba(0,0,0,0.08)] rounded-sm border border-[#ececec] overflow-hidden">
        
        {/* Form Header */}
        <div className="p-8 md:p-10 pb-0 text-center">
          <h2 className="text-[28px] md:text-[32px] font-extrabold text-[#07294d] mb-2">Register Now</h2>
        </div>

        {/* Register Form */}
        <form className="p-8 md:p-10 space-y-5">
          {/* User Name Input */}
          <div>
            <input 
              type="text" 
              placeholder="User Name" 
              className="w-full h-[55px] px-5 rounded-md border border-[#ececec] outline-none bg-white text-gray-600 focus:border-[#ff6b2c] transition-all text-[15px]"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full h-[55px] px-5 rounded-md border border-[#ececec] outline-none bg-white text-gray-600 focus:border-[#ff6b2c] transition-all text-[15px]"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full h-[55px] px-5 rounded-md border border-[#ececec] outline-none bg-white text-gray-600 focus:border-[#ff6b2c] transition-all text-[15px]"
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <input 
              type="password" 
              placeholder="Confirm Password" 
              className="w-full h-[55px] px-5 rounded-md border border-[#ececec] outline-none bg-white text-gray-600 focus:border-[#ff6b2c] transition-all text-[15px]"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button 
              type="submit" 
              className="w-full bg-[#ff6b2c] text-white h-[55px] rounded-md font-bold text-[16px] uppercase tracking-wider hover:bg-[#07294d] transition-all duration-300 shadow-md"
            >
              Get Started Now
            </button>
          </div>

          {/* Footer Text */}
          <div className="text-center pt-4">
            <p className="text-gray-500 text-[15px]">
              Are you a member? <a href="#" className="text-[#ff6b2c] font-bold hover:underline">Login</a>
            </p>
          </div>

          {/* Social Register Section */}
          <div className="text-center space-y-6 pt-4">
             {/* OR Badge */}
             <div className="relative flex justify-center items-center">
                <div className="w-12 h-12 bg-[#ff6b2c] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-[0_0_10px_rgba(255,107,44,0.3)] z-10">
                  OR
                </div>
                <div className="absolute w-full h-[1px] bg-gray-100"></div>
             </div>

             <h4 className="text-[#07294d] font-bold text-[20px]">Register With Social Media</h4>

             {/* Social Icons */}
             <div className="flex justify-center gap-3 pb-4">
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3b5998] text-white hover:-translate-y-1 transition-all">
                  <FaFacebookF size={14} />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1da1f2] text-white hover:-translate-y-1 transition-all">
                  <FaTwitter size={14} />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0077b5] text-white hover:-translate-y-1 transition-all">
                  <FaLinkedinIn size={14} />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e4405f] text-white hover:-translate-y-1 transition-all">
                  <FaInstagram size={14} />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#bd081c] text-white hover:-translate-y-1 transition-all">
                  <FaPinterestP size={14} />
                </a>
             </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;