import React, { useState } from 'react';
// FontAwesome icons use kiye hain
import { FaPlayCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const CourseContent = () => {
  const [openSection, setOpenSection] = useState(1);

  const sections = [
    {
      id: 1,
      title: "1. Introduction",
      lessons: "5 lessons",
      duration: "17:37",
      content: [
        { title: "1.1 Welcome to the course", time: "02:30 minutes" },
        { title: "1.2 How to set up your photoshop workspace", time: "08:33 minutes" },
        { title: "1.3 Essential Photoshop Tools", time: "03:38 minutes" },
        { title: "1.4 Finding inspiration", time: "02:30 minutes" },
        { title: "1.5 Choosing Your Format", time: "03:48 minutes" },
      ]
    },
    {
      id: 2,
      title: "2. How to Create Mixed Media Art in Adobe Photoshop",
      lessons: "5 lessons",
      duration: "52:15",
      content: [
       { title: "2.1 Using Adjustment Layers", time: "06:20 minutes" },
        { title: "2.2 Building the composition", time: "07:33 minutes" },
        { title: "2.3 Photoshop Lighting effects", time: "06:30 minutes" },
        { title: "2.4 Digital Painting using photoshop brushes", time: "08:34 minutes" },
        { title: "2.5 Finalizing the details", time: "10:30 minutes" }
      ]
    }
  ];

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="max-w-3xl mt-10 px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 font-sans">Course Content</h2>
      
      <div className="space-y-4">
        {sections.map((section) => (
          <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            
            {/* Header Bar - Green Color exactly like Edukon */}
            <div 
              onClick={() => toggleSection(section.id)}
              className="bg-[#26D07C] text-white p-4 flex justify-between items-center cursor-pointer hover:bg-[#22bc70] transition-all"
            >
              <span className="font-bold text-base md:text-lg">{section.title}</span>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium hidden sm:inline">
                  {section.lessons}, {section.duration}
                </span>
                {openSection === section.id ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </div>

            {/* Dropdown Lessons List */}
            {openSection === section.id && (
              <div className="bg-white divide-y divide-gray-100">
                {section.content.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-center p-4  group cursor-pointer"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <span className="text-gray-700 font-medium text-sm md:text-base">
                        {item.title}
                      </span>
                      <span className="text-gray-400 text-xs italic">
                        {item.time}
                      </span>
                    </div>
                    {/* Play Icon from FontAwesome */}
                    <FaPlayCircle 
                      className="text-gray-300  text-xl transition-colors" 
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseContent;