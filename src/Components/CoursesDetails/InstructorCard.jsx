import React from 'react';
import  AuthorImg from '../../assets/Image/authorcardbg.jpg'
import  AuthorImg1 from '../../assets/Image/Author13.jpg'
import  AuthorImg2 from '../../assets/Image/Author14.jpg'
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaPinterestP,
  FaStar 
} from 'react-icons/fa';
const comments = [
    {
      id: 1,
      name: "Linsa Faith",
      date: "Jun 5, 2022 at 12:41 pm",
      image: AuthorImg1,
      text: "The inner sanctuary, I throw myself down among the tall grass bye the trckli stream and, as I lie close to the earth."
    },
    {
      id: 2,
      name: "Mahdi Mahmud",
      date: "Jun 5, 2022 at 12:41 pm",
      image: AuthorImg2,
      text: "The inner sanctuary, I throw myself down among the tall grass bye the trckli stream and, as I lie close to the earth."
    }
  ];

const InstructorCard = () => {
  return (
    <div className="max-w-3xl bg-white p-6  mt-6 ">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        
        {/* Author Image */}
        <div className="w-40 h-40 shrink-0">
          <img 
            src={AuthorImg} 
            alt="Rajib Raj" 
            className="w-full h-full rounded-full object-cover border-4 border-white shadow-md"
          />
        </div>

        {/* Author Details */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-[#1e293b]">Rajib Raj</h3>
          <p className="text-gray-500 text-sm mb-3">Assistant Teacher</p>
          
          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            I'm an Afro-Latina digital artist originally from Long Island, NY. I love 
            to paint design and photo manipulate in Adobe Photoshop while 
            helping others learn too. Follow me on Instagram or tweet me.
          </p>

          {/* Simple Social Icons */}
          <div className="flex gap-2 justify-center md:justify-start">
            <a href="#" className="p-2 bg-[#3b5998] text-white rounded-full hover:opacity-80 transition"><FaFacebookF size={14} /></a>
            <a href="#" className="p-2 bg-[#1da1f2] text-white rounded-full hover:opacity-80 transition"><FaTwitter size={14} /></a>
            <a href="#" className="p-2 bg-[#0077b5] text-white rounded-full hover:opacity-80 transition"><FaLinkedinIn size={14} /></a>
            <a href="#" className="p-2 bg-[#e4405f] text-white rounded-full hover:opacity-80 transition"><FaInstagram size={14} /></a>
            <a href="#" className="p-2 bg-[#bd081c] text-white rounded-full hover:opacity-80 transition"><FaPinterestP size={14} /></a>
          </div>
        </div>

      </div>

      {/* Comment Header */}
     <div className="px-6 py-5 border-b border-gray-100">
        <h3 className="text-xl font-bold text-[#1e293b]">02 Comment</h3>
      </div>

      {/* Comments List */}
      <div className="divide-y divide-gray-100">
        {comments.map((comment) => (
          <div key={comment.id} className="p-6 flex flex-col sm:flex-row gap-5 items-start">
            {/* User Avatar */}
            <div className="shrink-0">
              <img 
                src={comment.image} 
                alt={comment.name} 
                className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
              />
            </div>

            {/* Comment Body */}
            <div className="flex-1 w-full">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h4 className="font-bold text-[#1e293b] text-lg hover:text-orange-500 cursor-pointer transition-colors">
                    {comment.name}
                  </h4>
                  <span className="text-[13px] text-gray-400 font-medium">
                    {comment.date}
                  </span>
                </div>
                
                {/* 5 Star Rating */}
                <div className="flex gap-0.5 text-[#f97316]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>
              </div>

              {/* Text Content */}
              <p className="mt-3 text-gray-600 leading-relaxed text-[15px]">
                {comment.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorCard;