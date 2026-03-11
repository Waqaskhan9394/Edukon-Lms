import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiGlobe } from 'react-icons/fi';

const ContactSection = () => {
  const contactDetails = [
    {
      id: 1,
      title: "Office Address",
      desc: "1201 park street, Fifth Avenue",
      icon: <FiMapPin className="text-[#2eb872] text-2xl" />,
    },
    {
      id: 2,
      title: "Phone number",
      desc: "+22698 745 632,02 982 745",
      icon: <FiPhone className="text-[#32c5d2] text-2xl" />,
    },
    {
      id: 3,
      title: "Send email",
      desc: "adminedukon@gmil.com",
      icon: <FiMail className="text-[#ffb606] text-2xl" />,
    },
    {
      id: 4,
      title: "Our website",
      desc: "www.edukon.com",
      icon: <FiGlobe className="text-[#ff6b2c] text-2xl" />,
    },
  ];

  return (
    <div className="w-full bg-[#fdfaf3] py-20 px-4 font-['Roboto',sans-serif]">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Text */}
        <div className="text-center mb-12">
          <span className="text-[#ff6b2c] font-bold uppercase tracking-widest text-sm">
            Get In Touch With Us
          </span>
          <h2 className="text-[32px] md:text-[42px] font-extrabold text-[#07294d] mt-2">
            We're Always Eager To Hear From You!
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Side: Google Map (Col-span 2 for desktop) */}
          <div className="lg:col-span-2 h-[450px] rounded-sm overflow-hidden border border-gray-100 shadow-sm bg-white p-2">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.227736345805!2d90.38676737526365!3d23.739256978678283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8eb86828973%3A0x6b49911e3b5e4f4a!2sCodexCoder!5e0!3m2!1sen!2sbd!4v1708512345678!5m2!1sen!2sbd"
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Right Side: Contact Info Cards */}
          <div className="flex flex-col gap-5">
            {contactDetails.map((item) => (
              <div 
                key={item.id} 
                className="bg-white p-6 rounded-sm shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-gray-50 flex items-center gap-5 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon Container */}
                <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                
                {/* Text Content */}
                <div>
                  <h4 className="text-[#07294d] font-bold text-[18px]">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-[15px] mt-1 font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactSection;