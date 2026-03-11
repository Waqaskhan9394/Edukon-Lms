import React from 'react';

const ContactForm = () => {
  return (
    <div className="w-full bg-white py-20 px-4 font-['Roboto',sans-serif]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[#ff6b2c] font-bold uppercase tracking-[3px] text-sm">
            Get In Touch With Contact Us
          </span>
          <h2 className="text-[30px] md:text-[45px] font-extrabold text-[#07294d] mt-3 leading-tight max-w-3xl mx-auto">
            Fill The Form Below So We Can Get To Know You And Your Needs Better.
          </h2>
        </div>

        {/* Form Container */}
        <div className="max-w-5xl mx-auto">
          <form className="space-y-6">
            
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Your Name *" 
                className="w-full h-[60px] px-6 rounded-md border border-[#ececec] outline-none bg-white text-gray-600 focus:border-[#ff6b2c] transition-all"
                required
              />
              <input 
                type="email" 
                placeholder="Your Email *" 
                className="w-full h-[60px] px-6 rounded-md border border-[#ececec] outline-none bg-white text-gray-600 focus:border-[#ff6b2c] transition-all"
                required
              />
            </div>

            {/* Row 2: Mobile Number and Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Mobile Number *" 
                className="w-full h-[60px] px-6 rounded-md border border-[#ececec] outline-none bg-white text-gray-600 focus:border-[#ff6b2c] transition-all"
                required
              />
              <input 
                type="text" 
                placeholder="Your Subject *" 
                className="w-full h-[60px] px-6 rounded-md border border-[#ececec] outline-none bg-white text-gray-600 focus:border-[#ff6b2c] transition-all"
                required
              />
            </div>

            {/* Row 3: Message Textarea */}
            <div>
              <textarea 
                placeholder="Your Message" 
                rows="8"
                className="w-full px-6 py-4 rounded-md border border-[#ececec] outline-none bg-white text-gray-600 focus:border-[#ff6b2c] transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button 
                type="submit" 
                className="bg-[#ff6b2c] text-white px-10 py-4 rounded-md font-bold text-[16px] uppercase tracking-wide hover:bg-[#07294d] transition-all duration-300 shadow-lg shadow-orange-200"
              >
                Send our Message
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactForm;