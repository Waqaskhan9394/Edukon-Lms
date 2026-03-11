import React from 'react';
import { AiFillStar, AiOutlineBook, AiOutlineTeam } from 'react-icons/ai';

// Instructor Images (1 to 8)
import inst1 from '../../assets/Image/Instructors1.jpg';
import inst2 from '../../assets/Image/Instructors2.jpg';
import inst3 from '../../assets/Image/Instructors3.jpg';
import inst4 from '../../assets/Image/Instructors4.jpg';
import inst5 from '../../assets/Image/Instructors5.jpg';
import inst6 from '../../assets/Image/Instructors6.jpg';
import inst7 from '../../assets/Image/Instructors7.jpg';
import inst8 from '../../assets/Image/Instructors8.jpg';

const TeamsInstructors = () => {
  const team = [
    { id: 1, name: "Emilee Logan", deg: "Master of Education Degree", img: inst1, courses: "08 courses", students: "30 students" },
    { id: 2, name: "Donald Logan", deg: "Master of Education Degree", img: inst2, courses: "08 courses", students: "30 students" },
    { id: 3, name: "Oliver Porter", deg: "Master of Education Degree", img: inst3, courses: "08 courses", students: "30 students" },
    { id: 4, name: "Nahla Jones", deg: "Master of Education Degree", img: inst4, courses: "08 courses", students: "30 students" },
    { id: 5, name: "Stephen Smith", deg: "Assistant Professor", img: inst5, courses: "10 courses", students: "45 students" },
    { id: 6, name: "Lora Croft", deg: "UI/UX Designer", img: inst6, courses: "12 courses", students: "60 students" },
    { id: 7, name: "John Doe", deg: "Software Engineer", img: inst7, courses: "05 courses", students: "25 students" },
    { id: 8, name: "Mila Kunis", deg: "Content Creator", img: inst8, courses: "09 courses", students: "40 students" },
  ];

  return (
    <section className="py-24 bg-[#FFF9F1] font-['Roboto',sans-serif]">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <span className="text-[#FF6B2C] font-bold tracking-[3px] uppercase text-[15px] block mb-2">
            WORLD-CLASS INSTRUCTORS
          </span>
          <h2 className="text-[34px] md:text-[46px] font-[800] text-[#1A2132] leading-tight">
            Classes Taught By Real Creators
          </h2>
        </div>

        {/* --- INSTRUCTORS GRID --- */}
        {/* Grid is set to 4 columns on large screens to accommodate 8 cards nicely */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((person) => (
            <div 
              key={person.id} 
              className="bg-white rounded-[10px] p-5 text-center shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 group border border-gray-50 transform hover:-translate-y-3 cursor-pointer"
            >
              
              {/* Circular Image Container */}
              <div className="relative mx-auto mb-6 w-32 h-32 rounded-full overflow-hidden border-4 border-[#FFF9F1]">
                <img 
                  src={person.img} 
                  alt={person.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>

              {/* Name & Degree */}
              <h3 className="text-[20px] font-[800] text-[#1A2132] mb-1 group-hover:text-[#FF6B2C] transition-colors">
                {person.name}
              </h3>
              <p className="text-[#777777] text-[13px] mb-2 font-medium uppercase tracking-tight">
                {person.deg}
              </p>

              {/* Star Rating */}
              <div className="flex justify-center gap-1 text-[#FF6B2C] text-[13px] mb-4">
                {[...Array(5)].map((_, i) => <AiFillStar key={i} />)}
              </div>

              {/* Footer Info (Courses & Students) */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-[#555555] text-[13px] font-semibold">
                <div className="flex items-center gap-2">
                  <AiOutlineBook className="text-[#777777] text-[16px]" />
                  <span>{person.courses}</span>
                </div>
                <div className="flex items-center gap-2">
                  <AiOutlineTeam className="text-[#777777] text-[16px]" />
                  <span>{person.students}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- BOTTOM TEXT --- */}
        <div className="text-center mt-16">
          <p className="text-[#555555] text-[16px]">
            Want to help people learn, grow and achieve more in life? 
            <span className="text-[#FF6B2C] font-bold ml-2 hover:underline cursor-pointer">
              Become an instructor
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default TeamsInstructors;