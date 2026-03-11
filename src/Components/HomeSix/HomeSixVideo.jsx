import React, { useState } from 'react';
import videoBg from '../../assets/Image/HomeSixVediobg.jpg';

const HomeSixVideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative w-full h-[300px] sm:h-[500px] md:h-[700px] overflow-hidden">
     
      {showVideo && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4">
          <button 
            onClick={() => setShowVideo(false)}
            className="absolute top-10 right-10 text-white text-4xl hover:text-[#ffdc12]"
          >
            &times;
          </button>
          <div className="w-full max-w-4xl aspect-video">
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/jP649ZHA8Tg?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${videoBg})` }}
      >
        {/* <div className="absolute inset-0 bg-black/60"></div> */}
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 z-10">
        <h2 className="text-white text-[18px] md:text-[26px] font-bold uppercase mb-8">
          It's High Time to Start Driving Career
        </h2>

        {/* Play Button*/}
        <div 
          className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all"
          onClick={() => setShowVideo(true)}
        >
          <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
          <svg className="w-9 h-9 text-[#ffdc12] fill-current ml-1" viewBox="0 0 24 24">
            <path d="M7 6v12l10-6z" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HomeSixVideoSection;