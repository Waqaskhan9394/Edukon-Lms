import React, { useState } from 'react';
import { FaChevronDown, FaRegCheckSquare, FaPlayCircle } from 'react-icons/fa';

const CourseRequirementsSidebar = () => {
  const [openSection, setOpenSection] = useState(1);

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  // Ab yahan total 8 sections hain
  const sections = [
    { 
      id: 1, 
      title: "Section 1: Introduction", 
      videos: 4, time: "26:00 Min",
      lessons: [
        { title: "1.1 Introduction", time: "6:00 Min", active: true },
        { title: "1.2 What is Website Design", time: "8:00 Min", active: true },
        { title: "1.3 Design Tools", time: "6:00 Min", active: false },
        { title: "1.4 Setting up Workspace", time: "6:00 Min", active: false },
      ]
    },
    { 
      id: 2, 
      title: "Section 2: How to Start?", 
      videos: 3, time: "15:00 Min",
      lessons: [
        { title: "2.1 Planning your Project", time: "5:00 Min", active: false },
        { title: "2.2 Wireframing Basics", time: "5:00 Min", active: false },
        { title: "2.3 Research & Inspo", time: "5:00 Min", active: false },
      ]
    },
    { 
      id: 3, 
      title: "Section 3: Design Principles", 
      videos: 2, time: "12:00 Min",
      lessons: [
        { title: "3.1 Typography", time: "6:00 Min", active: false },
        { title: "3.2 Color Theory", time: "6:00 Min", active: false },
      ]
    },
    { 
      id: 4, 
      title: "Section 4: Advanced Tools", 
      videos: 2, time: "10:00 Min",
      lessons: [
        { title: "4.1 Plugins for Speed", time: "5:00 Min", active: false },
        { title: "4.2 Auto Layout", time: "5:00 Min", active: false },
      ]
    },
    { 
      id: 5, 
      title: "Section 5: UI Components", 
      videos: 2, time: "20:00 Min",
      lessons: [
        { title: "5.1 Creating Buttons", time: "10:00 Min", active: false },
        { title: "5.2 Navigation Bars", time: "10:00 Min", active: false },
      ]
    },
    { 
      id: 6, 
      title: "Section 6: Prototyping", 
      videos: 2, time: "15:00 Min",
      lessons: [
        { title: "6.1 Basic Interactions", time: "7:00 Min", active: false },
        { title: "6.2 Smart Animate", time: "8:00 Min", active: false },
      ]
    },
    { 
      id: 7, 
      title: "Section 7: Case Studies", 
      videos: 2, time: "30:00 Min",
      lessons: [
        { title: "7.1 E-commerce Project", time: "15:00 Min", active: false },
        { title: "7.2 Portfolio Design", time: "15:00 Min", active: false },
      ]
    },
    { 
      id: 8, 
      title: "Section 8: Final Thoughts", 
      videos: 2, time: "10:00 Min",
      lessons: [
        { title: "8.1 Review & Summary", time: "5:00 Min", active: false },
        { title: "8.2 Next Steps", time: "5:00 Min", active: false },
      ]
    }
  ];

  return (
    <div className="w-full font-sans max-w-[400px] mx-auto p-4">
      <h3 className="text-[22px] font-bold text-[#1A2132] mb-6">
        Course Requirements
      </h3>

      <div className="space-y-1">
        {sections.map((section) => (
          <div 
            key={section.id} 
            className="border border-gray-200 rounded-sm overflow-hidden bg-white shadow-sm relative"
          >
            {/* Orange Vertical Indicator */}
            {openSection === section.id && (
              <div className="absolute right-0 top-0 w-[4px] h-full bg-[#ff5a2c]"></div>
            )}

            {/* Accordion Header */}
            <div 
              onClick={() => toggleSection(section.id)}
              className="flex justify-between items-center p-5 cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div className="flex flex-col">
                <span className="font-bold text-[#1A2132] text-[17px]">
                  {section.title}
                </span>
                <span className="text-[13px] text-gray-500 font-medium mt-1">
                  Videos: {section.videos} | {section.time}
                </span>
              </div>
              <FaChevronDown 
                className={`text-gray-400 text-sm transition-transform duration-300 ${openSection === section.id ? 'rotate-180' : ''}`} 
              />
            </div>

            {/* Lessons List - Ab ye har 8 divs ke liye kaam karega */}
            {openSection === section.id && section.lessons && (
              <div className="border-t border-gray-100 bg-white">
                {section.lessons.map((lesson, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-4 px-6 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <FaRegCheckSquare 
                        className={`mt-1 text-[16px] ${lesson.active ? 'text-[#ff5a2c]' : 'text-gray-300'}`} 
                      />
                      <div className="flex flex-col">
                        <span className="font-bold text-[#1A2132] text-[15px]">
                          {lesson.title}
                        </span>
                        <div className="flex items-center gap-1.5 text-gray-400 text-[13px] mt-1">
                          <FaPlayCircle className="text-gray-300" />
                          <span>{lesson.time}</span>
                        </div>
                      </div>
                    </div>
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

export default CourseRequirementsSidebar;