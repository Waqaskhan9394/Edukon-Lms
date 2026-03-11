import React from 'react';

const LeaveCommentForm = () => {
  return (
    <div className="max-w-[800px] bg-white rounded-md border border-gray-100 shadow-sm overflow-hidden mt-8">
      {/* Header */}
      <div className="px-8 py-6 border-b border-gray-50">
        <h3 className="text-xl font-bold text-[#1e293b]">Leave a Comment</h3>
      </div>

      {/* Form Content */}
      <div className="p-8">
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Input */}
            <input 
              type="text" 
              placeholder="Your Name *" 
              className="w-full bg-[#f8f9fa] border-none px-4 py-4 rounded focus:ring-1 focus:ring-orange-400 outline-none text-gray-600 placeholder:text-gray-400 text-sm"
              required
            />
            {/* Email Input */}
            <input 
              type="email" 
              placeholder="Your email *" 
              className="w-full bg-[#f8f9fa] border-none px-4 py-4 rounded focus:ring-1 focus:ring-orange-400 outline-none text-gray-600 placeholder:text-gray-400 text-sm"
              required
            />
          </div>

          {/* Subject Input */}
          <input 
            type="text" 
            placeholder="Write a Subject" 
            className="w-full bg-[#f8f9fa] border-none px-4 py-4 rounded focus:ring-1 focus:ring-orange-400 outline-none text-gray-600 placeholder:text-gray-400 text-sm"
          />

          {/* Message Textarea */}
          <textarea 
            placeholder="Your Message" 
            rows="8"
            className="w-full bg-[#f8f9fa] border-none px-4 py-4 rounded focus:ring-1 focus:ring-orange-400 outline-none text-gray-600 placeholder:text-gray-400 text-sm resize-none"
          ></textarea>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="bg-[#ff5a2c] text-white font-bold px-8 py-4 rounded-md uppercase tracking-wide hover:bg-[#e44d23] transition-colors duration-300 text-sm mt-2"
          >
            Send Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeaveCommentForm;