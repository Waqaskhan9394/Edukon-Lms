import React from 'react';
import AdvancedHeroSection from '../Components/CoursesDetails/CoursesDetailsHero';

import CourseLeftContent from '../Components/Courses/MainContentOne';
import CourseContent from '../Components/CoursesDetails/CourseContent';
import InstructorCard from '../Components/CoursesDetails/InstructorCard';
import LeaveCommentForm from '../Components/CoursesDetails/LeaveComment';

import EdukonCoursePage from '../Components/CoursesDetails/CourseSideDetail';
import EdukonLayout from '../Components/CoursesDetails/CourseSideDetail';
import SidebarEdukon from '../Components/CoursesDetails/CourseSideDetail';
import CourseCategories from '../Components/CoursesDetails/CourseDertailsCategory';



const CoursesDetails = () => {
  return (
    <div className="bg-[#f5efe6]  min-h-screen">
      {/* 1. Hero Section  */}
      <AdvancedHeroSection />

      {/* 2. Content Section  */}
      <div className="container mx-auto px-4 md:px-10 lg:px-20 py-16">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* LEFT SIDE:  
           */}
          <div className="w-full lg:w-[70%] ">
            <CourseLeftContent/>
            <CourseContent/>
            <InstructorCard/>
            <LeaveCommentForm/>
          </div>

          {/* RIGHT SIDE:
              */}
          <aside className="w-full lg:w-[30%]  ">
             <SidebarEdukon/>
             <CourseCategories/>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default CoursesDetails;