import React from 'react';

// Images Import
import img07 from '../../assets/Image/07.png'; 
import img08_1 from '../../assets/Image/08.png'; 
import img08_2 from '../../assets/Image/09.png'; 
import img08_3 from '../../assets/Image/08.png'; 

// Background Images
import bgPatternLeft from '../../assets/Image/HomeSixfBg.png';  
import bgPatternRight from '../../assets/Image/HomeSixfBg1.png'; 

const HomeSixFeatureSection = () => {
  const features = [
    {
      id: 1,
      title: "Learner Drivers",
      desc: "Dramatic myocardinate high quality through transparents.",
      image: img07, 
    },
    {
      id: 2,
      title: "Get Driving License",
      desc: "Dramatic myocardinate high quality through transparents.",
      image: img08_1,
    },
    {
      id: 3,
      title: "Comfort Vehicles",
      desc: "Dramatic myocardinate high quality through transparents.",
      image: img08_2,
    },
    {
      id: 4,
      title: "Unlimited Car Support",
      desc: "Dramatic myocardinate high quality through transparents.",
      image: img08_3,
    },
  ];

  return (
    <section className="py-24 bg-[#f8f9fa] relative overflow-hidden font-sans">
      
      {/* --- BACKGROUND LAYER --- */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat"
        style={{ 
         
          backgroundImage: `url(${bgPatternRight}), url(${bgPatternLeft})`,
         
          backgroundPosition: 'left center, right center', 
          backgroundSize: 'contain, contain', 
        
        }}
      ></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT SIDE:  */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item) => (
              <div 
                key={item.id} 
                className="bg-white p-10  shadow-sm transition-all duration-500 text-center border border-gray-100 group overflow-hidden"
              >
                <div className="mb-6 h-[80px] flex justify-center items-center transition-transform duration-500 ">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="h-full w-auto object-contain"
                  />
                </div>
                
                <h3 className="text-[#07294d] text-[22px] font-[1000] mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
                  {item.desc}
                </p>
                <a href="#" className="text-[#07294d] font-black text-[14px] uppercase tracking-wider hover:text-blue-600 transition-colors">
                  View More
                </a>
              </div>
            ))}
          </div>

        {/* RIGHT SIDE: REGISTRATION FORM  */}
<div className="w-full lg:w-1/3">
  <div className="bg-[#ffdc12] p-8 md:p-10 rounded-xl shadow-lg relative overflow-hidden h-full">
    
    
    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

    <h2 className="text-[#07294d] text-[28px] font-bold mb-8 leading-tight relative z-10">
      Find Your Course
    </h2>
    
    <form className="space-y-4 relative z-10">
      
      <div className="relative">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="w-full px-5 py-4 rounded-md border-none focus:ring-2 focus:ring-[#07294d] outline-none text-[15px] placeholder-gray-400"
        />
      </div>

      <div className="relative">
        <input 
          type="email" 
          placeholder="Your Email" 
          className="w-full px-5 py-4 rounded-md border-none focus:ring-2 focus:ring-[#07294d] outline-none text-[15px] placeholder-gray-400"
        />
      </div>

      <div className="relative">
        <input 
          type="text" 
          placeholder="Your Phone" 
          className="w-full px-5 py-4 rounded-md border-none focus:ring-2 focus:ring-[#07294d] outline-none text-[15px] placeholder-gray-400"
        />
      </div>
      
      
      <div className="relative">
        <select className="w-full px-5 py-4 rounded-md border-none focus:ring-2 focus:ring-[#07294d] outline-none text-gray-500 text-[15px] bg-white appearance-none cursor-pointer">
          <option value="" disabled selected>Select Level</option>
          <option>Beginner</option>
          <option>Intermediate</option>
        </select>

        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="Step 19"></path></svg>
        </div>
      </div>

      <div className="relative">
        <select className="w-full px-5 py-4 rounded-md border-none focus:ring-2 focus:ring-[#07294d] outline-none text-gray-500 text-[15px] bg-white appearance-none cursor-pointer">
          <option value="" disabled selected>Select Category</option>
          <option>Car</option>
          <option>Truck</option>
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </div>
      </div>

      
      <div className="grid grid-cols-2 gap-4">
        <input 
          type="date" 
          className="w-full px-4 py-4 rounded-md border-none text-gray-400 text-[14px] focus:ring-2 focus:ring-[#07294d]" 
        />
        <input 
          type="time" 
          className="w-full px-4 py-4 rounded-md border-none text-gray-400 text-[14px] focus:ring-2 focus:ring-[#07294d]" 
        />
      </div>


      <button 
        type="submit" 
        className="w-full bg-[#1a1a1a] text-white font-bold py-5 rounded-md uppercase tracking-widest text-[14px] hover:bg-[#07294d] transition-all duration-300 shadow-md mt-4"
      >
        Register Now
      </button>
    </form>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default HomeSixFeatureSection;