import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP } from 'react-icons/fa';
// Aapki local image import
import authorImg from '../../assets/Image/viewauthor.jpg'; 

const CourseAboutInstructor = () => {
  return (
    <div className="w-full space-y-10 font-sans mt-10">
      
      {/* 1. Introduction Section */}
      <section>
        <h3 className="text-[22px] font-bold text-[#1A2132] mb-4">Introduction</h3>
        <p className="text-gray-600 leading-[1.7] text-[15px]">
          This is an excellent course. The content seems very thorough and comprehensive. 
          I like the way all the concepts and configurations are clearly demonstrated in GNS3. 
          There are also a lot of troubleshooting examples and real world applications. 
          I especially enjoyed the practical simlets.
        </p>
      </section>

      {/* 2. Author / Instructor Card */}
      <section className="  flex flex-col md:flex-row gap-6 items-start">
        
        {/* Author Image - Now using local viewauthor.jpg */}
        <div className="shrink-0">
          <img 
            src={authorImg} 
            alt="Rajib Raj" 
            className="w-[120px] h-[120px] rounded-full object-cover border-4 border-gray-50 shadow-md"
          />
        </div>

        {/* Author Details */}
        <div className="flex-1">
          <h4 className="text-[20px] font-bold text-[#1A2132]">Rajib Raj</h4>
          <p className="text-[#ff5a2c] text-[14px] font-medium mb-3">Assistant Teacher</p>
          
          <p className="text-gray-600 text-[14.5px] leading-relaxed mb-6">
            I'm an Afro-Latina digital artist originally from Long Island, NY. I love to 
            paint design and photo manipulate in Adobe Photoshop while helping others 
            learn too. Follow me on Instagram or tweet me.
          </p>

          {/* Social Icons with exact brand colors */}
          <div className="flex flex-wrap gap-2">
            <SocialIcon color="bg-[#3b5998]" icon={<FaFacebookF size={14} />} />
            <SocialIcon color="bg-[#55acee]" icon={<FaTwitter size={14} />} />
            <SocialIcon color="bg-[#0077b5]" icon={<FaLinkedinIn size={14} />} />
            <SocialIcon color="bg-[#e4405f]" icon={<FaInstagram size={14} />} />
            <SocialIcon color="bg-[#bd081c]" icon={<FaPinterestP size={14} />} />
          </div>
        </div>
      </section>
    </div>
  );
};

const SocialIcon = ({ color, icon }) => (
  <a 
    href="#" 
    className={`${color} text-white w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-sm`}
  >
    {icon}
  </a>
);

export default CourseAboutInstructor;