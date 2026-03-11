import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#1A2132] font-['Roboto',sans-serif] text-white">
      
      {/* --- TOP NEWSLETTER SECTION --- */}
      <div className="container mx-auto px-4 py-16 border-b border-gray-700">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-md">
            <h2 className="text-[28px] md:text-[34px] font-[800] leading-tight">
              Want Us To Email You About Special Offers And Updates?
            </h2>
          </div>
          
          <div className="w-full max-w-xl">
            <div className="relative flex items-center bg-white rounded-md overflow-hidden p-1">
              <div className="pl-4 text-[#26B978]">
                <FontAwesomeIcon icon={faPaperPlane} />
              </div>
              <input 
                type="email" 
                placeholder="Enter Your Email" 
                className="w-full py-4 px-4 text-gray-800 outline-none placeholder:text-gray-400"
              />
              <button className="bg-[#26B978] hover:bg-[#1f9661] text-white font-bold py-3 px-8 rounded-md transition-all">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- MIDDLE LINKS SECTION --- */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Site Map */}
          <div>
            <h4 className="text-[22px] font-bold mb-8 relative inline-block">
              Site Map
              <span className="absolute bottom-[-10px] left-0 w-10 h-[2px] bg-[#26B978]"></span>
            </h4>
            <ul className="space-y-4 text-[#A5AAB5] text-[15px]">
              <li className="hover:text-white cursor-pointer transition">Documentation</li>
              <li className="hover:text-white cursor-pointer transition">Feedback</li>
              <li className="hover:text-white cursor-pointer transition">Plugins</li>
              <li className="hover:text-white cursor-pointer transition">Support Forums</li>
              <li className="hover:text-white cursor-pointer transition">Themes</li>
            </ul>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h4 className="text-[22px] font-bold mb-8 relative inline-block">
              Useful Links
              <span className="absolute bottom-[-10px] left-0 w-10 h-[2px] bg-[#26B978]"></span>
            </h4>
            <ul className="space-y-4 text-[#A5AAB5] text-[15px]">
              <li className="hover:text-white cursor-pointer transition">About Us</li>
              <li className="hover:text-white cursor-pointer transition">Help Link</li>
              <li className="hover:text-white cursor-pointer transition">Terms & Conditions</li>
              <li className="hover:text-white cursor-pointer transition">Contact Us</li>
              <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
            </ul>
          </div>

          {/* Column 3: Social Contact */}
          <div>
            <h4 className="text-[22px] font-bold mb-8 relative inline-block">
              Social Contact
              <span className="absolute bottom-[-10px] left-0 w-10 h-[2px] bg-[#26B978]"></span>
            </h4>
            <ul className="space-y-4 text-[#A5AAB5] text-[15px]">
              <li className="hover:text-white cursor-pointer transition">Facebook</li>
              <li className="hover:text-white cursor-pointer transition">Twitter</li>
              <li className="hover:text-white cursor-pointer transition">Instagram</li>
              <li className="hover:text-white cursor-pointer transition">YouTube</li>
              <li className="hover:text-white cursor-pointer transition">Github</li>
            </ul>
          </div>

          {/* Column 4: Our Support */}
          <div>
            <h4 className="text-[22px] font-bold mb-8 relative inline-block">
              Our Support
              <span className="absolute bottom-[-10px] left-0 w-10 h-[2px] bg-[#26B978]"></span>
            </h4>
            <ul className="space-y-4 text-[#A5AAB5] text-[15px]">
              <li className="hover:text-white cursor-pointer transition">Help Center</li>
              <li className="hover:text-white cursor-pointer transition">Paid with Mollie</li>
              <li className="hover:text-white cursor-pointer transition">Status</li>
              <li className="hover:text-white cursor-pointer transition">Changelog</li>
              <li className="hover:text-white cursor-pointer transition">Contact Support</li>
            </ul>
          </div>

        </div>
      </div>

      {/* --- BOTTOM COPYRIGHT BAR --- */}
      <div className="bg-white py-6 text-center text-[#555555] text-[15px]">
        <p>
          © 2022 <span className="text-[#1A2132] font-bold">Edukon</span> Designed by <span className="text-[#26B978] font-bold">CodexCoder</span>
        </p>
      </div>

    </footer>
  );
};

export default Footer;