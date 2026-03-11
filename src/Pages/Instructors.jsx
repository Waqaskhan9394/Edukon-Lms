import React from 'react'
import ViewHeroSection from '../Components/CourseView/ViewHero'
import TeachOnEdukon from '../Components/Instructors/CategorySection'
import CommunityFeedback from '../Components/HomeOne/StudentCommunity'
import AchievementSection from '../Components/HomeOne/AchieveGoul'


const BestInstructors = () => {
  return (
   <>
   <ViewHeroSection
   title="All Best Instructors" 
        homeText="Home" 
        homeLink="/" 
        currentPage="instructor"
   />
   <TeachOnEdukon/>
   <CommunityFeedback/>
   <AchievementSection/>
   </>
  )
}

export default BestInstructors