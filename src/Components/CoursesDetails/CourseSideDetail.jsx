import React from 'react';
import { 
  FaRegClock, FaSignal, FaBook, FaQuestionCircle, 
  FaPercent, FaCertificate, FaGlobe, FaTwitter, 
  FaVimeoV, FaRss 
} from 'react-icons/fa';
import { MdOutlineOndemandVideo } from 'react-icons/md';

const SidebarEdukon = () => {
  return (
    /* Responsive Wrapper: Mobile par full width, Desktop (lg) par 340px */
    <div className="w-full lg:w-full font-sans mx-auto">
      
      {/* 1. Main Pricing & Info Card */}
      <div className="bg-white rounded-sm border border-gray-100 shadow-sm overflow-hidden mb-6">
        
        {/* Header - Orange Section */}
        <div className="bg-[#ff5a2c] text-white p-5 flex justify-between items-center">
          <h2 className="text-3xl font-extrabold">$89</h2>
          <div className="flex items-center gap-2 text-sm">
            <FaRegClock />
            <span className="font-medium">Limited time offer</span>
          </div>
        </div>

        {/* Course Stats Rows */}
        <div className="text-[15px]">
          <StatRow icon={<FaRegClock />} label="Course level" value="Beginner" bg="bg-white" />
          <StatRow icon={<FaBook />} label="Course Duration" value="10 week" bg="bg-[#fcfcfc]" />
          <StatRow icon={<FaSignal />} label="Online Class" value="08" bg="bg-white" />
          <StatRow icon={<MdOutlineOndemandVideo />} label="Lessons" value="18x" bg="bg-[#fcfcfc]" />
          <StatRow icon={<FaQuestionCircle />} label="Quizzes" value="0" bg="bg-white" />
          <StatRow icon={<FaPercent />} label="Pass percentages" value="80" bg="bg-[#fcfcfc]" />
          <StatRow icon={<FaCertificate />} label="Certificate" value="Yes" bg="bg-white" />
          <StatRow icon={<FaGlobe />} label="Language" value="English" bg="bg-[#fcfcfc]" />
        </div>
      </div>

      {/* 2. Secure Payment & Social Share Card */}
      <div className="bg-[#fcfcfc] p-6 rounded-sm border border-gray-100 shadow-sm">
        {/* Payment Section */}
       {/* Secure Payment Section */}
<div className="mb-6">
  <h4 className="font-bold text-[#1e293b] mb-4 text-lg border-b border-gray-100 pb-2">
    Secure Payment:
  </h4>
  
  {/* Payment Icons Container */}
  <div className="flex flex-wrap gap-2 items-center opacity-80">
    <div className="border border-gray-100 p-1 rounded bg-white shadow-sm">
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 w-auto" />
    </div>
    <div className="border border-gray-100 p-1 rounded bg-white shadow-sm">
      {/* <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 w-auto" /> */}
    </div>
    <div className="border border-gray-100 p-1 rounded bg-white shadow-sm">
      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="MasterCard" className="h-4 w-auto" />
    </div>
    <div className="border border-gray-100 p-1 rounded bg-white shadow-sm">
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="Discover" className="h-4 w-auto" />
    </div>
    <div className="border border-gray-100 p-1 rounded bg-white shadow-sm">
      <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Amex" className="h-4 w-auto" />
    </div>
  </div>
</div>

        {/* Social Section */}
        <div className="mb-8">
          <h4 className="font-bold text-[#1e293b] mb-4 text-lg border-b border-gray-200 pb-2">Share This Course:</h4>
          <div className="flex gap-2">
            <SocialBox color="bg-[#55acee]" icon={<FaTwitter size={14} />} />
            <SocialBox color="bg-[#4151a3]" icon={<FaVimeoV size={14} />} />
            <SocialBox color="bg-[#ffb400]" icon={<FaRss size={14} />} />
          </div>
        </div>

        {/* Green Action Button */}
        <button className="w-full bg-[#26d07c] hover:bg-[#21b96e] text-white font-bold py-4 rounded-md uppercase tracking-wider text-sm transition-all duration-300 transform active:scale-95">
          Enrolled Now
        </button>
      </div>
    </div>
  );
};

// --- Helper Components (No changes needed here, they are already clean) ---

const StatRow = ({ icon, label, value, bg }) => (
  <div className={`flex justify-between items-center px-4 md:px-6 py-[14px] ${bg} border-b border-gray-50 last:border-0`}>
    <div className="flex items-center gap-3 text-gray-400">
      <span className="text-[16px] shrink-0">{icon}</span>
      <span className="text-gray-600 font-medium text-sm md:text-base">{label}</span>
    </div>
    <span className="text-gray-500 text-sm md:text-base">{value}</span>
  </div>
);

const SocialBox = ({ color, icon }) => (
  <a href="#" className={`${color} text-white w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-sm`}>
    {icon}
  </a>
);

export default SidebarEdukon;