import React from 'react';

// Management Images Import
import Manage1 from '../../assets/Image/Management1.jpg';
import Manage2 from '../../assets/Image/Management2.jpg';
import Manage3 from '../../assets/Image/Management3.jpg';
import Manage4 from '../../assets/Image/Management4.jpg';

const ManagementSection = () => {
  const managementFeatures = [
    { id: 1, img: Manage1, title: "Skilled Instructors", desc: "You pick the schedule." },
    { id: 2, img: Manage2, title: "Get Certificate", desc: "You pick the schedule." },
    { id: 3, img: Manage3, title: "Online Classes", desc: "You pick the schedule." },
    { id: 4, img: Manage4, title: "Educator Helps", desc: "You pick the schedule." },
  ];

  return (
    <section className="w-full flex flex-col lg:flex-row min-h-[500px] overflow-hidden">
      
      {/* LEFT SIDE: Green Section (Thoda chota width screenshot ke hisab se) */}
      <div className="w-full lg:w-[50%] bg-[#26C976] flex items-center justify-center p-10 lg:p-20">
        <div className="max-w-[480px]">
          <h2 className="text-white text-[35px] md:text-[45px] font-[900] leading-[1.2] mb-8">
            Build Your Project Management Skills Online Anytime
          </h2>
          <button className="bg-white text-[#26C976] font-bold py-3 px-8 rounded-[4px] text-[16px] shadow-sm hover:shadow-lg transition-all">
            Sign Up Now
          </button>
        </div>
      </div>

      {/* RIGHT SIDE: Black Section (Exact 50% split) */}
      <div className="w-full lg:w-[50%] bg-[#0B0B0B] relative flex items-center p-6 lg:p-0">
        
        {/* Floating Cards - 100% Center Alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[700px] lg:absolute lg:left-0 lg:-translate-x-1/6 z-30">
          {managementFeatures.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-5 rounded-[4px] flex items-center gap-4 shadow-[0_5px_15px_rgba(0,0,0,0.08)]"
            >
              {/* Image Circle (Smaller & Tight) */}
              <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex-shrink-0 bg-[#f8f8f8]">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Text Area */}
              <div className="flex-1">
                <h3 className="text-[#1A2132] font-extrabold text-[18px] leading-tight">
                  {item.title}
                </h3>
                <p className="text-[#777777] text-[13px] mt-1 font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default ManagementSection;