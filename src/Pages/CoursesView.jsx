import React from 'react'
import ViewHeroSection from '../Components/CourseView/ViewHero'
import CourseVideoSection from '../Components/CourseView/VideoSection'
import CourseRequirementsBar from '../Components/CourseView/VideoSection'
import VideoSection from '../Components/CourseView/VideoSection'
import CourseAboutInstructor from '../Components/CourseView/IntoSection'
import CourseRequirementsSidebar from '../Components/CourseView/CourseRequirementsSidebar'

const CoursesView = () => {
  return (
    <div className="bg-[#fdf8f0] min-h-screen pb-20">
      {/* 1. Hero Section */}
      <ViewHeroSection title="Themeforest Standard" 
  homeText="Home" 
  homeLink="/" 
  currentPage="Course View"/>

      {/* 2. Main Layout Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 mt-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* LEFT SIDE: Content Bar (68%) */}
          <div className="w-full lg:w-[68%] space-y-8">
            
            <div className=" p-4  ">


{/* <CourseVideoSection/> */}
{/* <CourseRequirementsBar/> */}
<VideoSection/>
<CourseAboutInstructor/>


              
            </div>
            
            
          </div>

          {/* RIGHT SIDE: Sidebar (32%) */}
          <aside className="w-full lg:w-[32%] ">
             {/* Sidebar Components yahan aayenge */}
             <div className="space-y-6">
               <CourseRequirementsSidebar/>
             </div>
          </aside>

        </div>
      </div>
    </div>
  )
}

export default CoursesView