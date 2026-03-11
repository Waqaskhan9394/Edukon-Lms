import React from 'react'
import HeroSection from '../Components/HomeTwo/HeroSection'
import AboutSection from '../Components/HomeTwo/AboutFeedback'
import FeaturedCourses from '../Components/HomeTwo/FeaturedCourses'
import PopularCategory from '../Components/HomeTwo/PopularCategory'
import CommunityFeedback from '../Components/HomeOne/StudentCommunity'
import Instructors from '../Components/HomeOne/InstructorsSection'
import ManagementSection from '../Components/HomeTwo/SkillsSection'
import AchievementGoul from '../Components/HomeTwo/AchieveGoulSection'
import BlogPostSection from '../Components/HomeOne/Post'


const HomeTwo = () => {
  return (
    <>
    <HeroSection/>
    <AboutSection/>
   <FeaturedCourses/>
   <PopularCategory/>
   <CommunityFeedback/>
   <Instructors/>
   <ManagementSection/>
   <AchievementGoul/>
   <BlogPostSection/>
    </>
  )
}

export default HomeTwo