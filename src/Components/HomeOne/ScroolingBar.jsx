import React from 'react';

// Images Import (Make sure paths are correct according to your folder structure)
import img1 from '../../assets/Image/011.png';
import img2 from '../../assets/Image/022.png';
import img3 from '../../assets/Image/03.png';
import img4 from '../../assets/Image/04.png';
import img5 from '../../assets/Image/05.png';
import img6 from '../../assets/Image/06.png';

const PartnerScrollingBar = () => {
  const partners = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="bg-[#FFF9F1] py-16 overflow-hidden border-t border-orange-50">
      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: scroll 50s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="container mx-auto px-4">
        <div className="relative flex overflow-hidden">
          {/* Main Scrolling Wrapper */}
          <div className="animate-marquee flex items-center">
            {/* Logos ko double/triple kiya hai taaki loop smooth aur infinite rahe */}
            {[...partners, ...partners, ...partners].map((logo, index) => (
              <div key={index} className="mx-8 md:mx-16 lg:mx-20 flex-shrink-0">
                <img 
                  src={logo} 
                  alt={`partner-${index}`} 
                  className="h-8 md:h-10 lg:h-12 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer object-contain" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerScrollingBar;