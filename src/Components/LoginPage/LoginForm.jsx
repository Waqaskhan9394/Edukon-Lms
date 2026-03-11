import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP } from 'react-icons/fa';

const LoginPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#fdfaf3] flex items-center justify-center py-20 px-4 font-['Roboto',sans-serif]">
      <div className="w-full max-w-[600px] bg-white shadow-[0_0_20px_rgba(0,0,0,0.08)] rounded-sm border border-[#ececec] overflow-hidden">
        
        {/* Form Header */}
        <div className="p-8 md:p-10 pb-0">
          <h2 className="text-[28px] md:text-[32px] font-extrabold text-[#07294d] mb-2">Login</h2>
        </div>

        {/* Login Form */}
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

          {/* Password Input */}
          <div>
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full h-[55px] px-5 rounded-md border border-[#ececec] outline-none bg-white text-gray-600 focus:border-[#ff6b2c] transition-all text-[15px]"
              required
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex flex-wrap justify-between items-center gap-2 pt-2">
            <div className="flex items-center gap-2">
              <input 
                type="checkbox" 
                id="remember" 
                className="w-4 h-4 accent-[#ff6b2c] cursor-pointer"
              />
              <label htmlFor="remember" className="text-gray-500 text-[14px] cursor-pointer">
                Remember Me
              </label>
            </div>
            <a href="#" className="text-[#ff6b2c] text-[14px] font-medium hover:underline">
              Forget Password?
            </a>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button 
              type="submit" 
              className="w-full bg-[#ff6b2c] text-white h-[55px] rounded-md font-bold text-[16px] uppercase tracking-wider hover:bg-[#07294d] transition-all duration-300 shadow-md"
            >
              Submit Now
            </button>
          </div>

          {/* Footer Text */}
          <div className="text-center pt-4">
            <p className="text-gray-500 text-[15px]">
              Don't Have an Account? <a href="#" className="text-[#ff6b2c] font-bold hover:underline">Sign Up</a>
            </p>
          </div>

          {/* Social Login Divider */}
          <div className="relative py-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-gray-400 text-sm italic">OR Login With</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-3">
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
        </form>
      </div>
    </div>
  );
};

export default LoginPage;