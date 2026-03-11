import React, { useEffect, useRef } from 'react';

const VideoSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Browsers ki policy hai ke video 'muted' honi chahiye tabhi autoplay hoga
      videoRef.current.muted = true; 
      
      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Autoplay started!");
          })
          .catch(error => {
            console.log("Autoplay blocked by browser. User interaction needed.");
          });
      }
    }
  }, []);

  return (
    <div className="w-full font-sans">
      <h2 className="text-[24px] md:text-[32px] font-bold text-[#1A2132] mb-6 leading-tight">
        Themeforest Standard Website Design
      </h2>

      <div className="relative w-full rounded-sm overflow-hidden bg-black shadow-lg aspect-video">
        <video 
          ref={videoRef}
          controls 
          autoPlay 
          muted 
          playsInline 
          className="w-full h-full object-cover"
          preload="auto"
        >
          <source 
            src="https://demos.codexcoder.com/anthem/wp-content/uploads/2017/07/Ghum-by-Habib-Wahid-Ft.-Mithila.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="mt-8"></div>
    </div>
  );
};

export default VideoSection;