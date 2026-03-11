import React from 'react'
import ViewHeroSection from '../Components/CourseView/ViewHero'
import AboutSectionThumb from '../Components/About/Aboutthumb'
import CommunityFeedback from '../Components/HomeOne/StudentCommunity'
import Instructors from '../Components/HomeOne/InstructorsSection'
import ManagementSection from '../Components/HomeTwo/SkillsSection'
import AchievementGoul from '../Components/HomeTwo/AchieveGoulSection'
import BlogPostSection from '../Components/HomeOne/Post'

const About = () => {
  return (
    <>
    <ViewHeroSection
      title="About Our Edukon" 
        homeText="Home" 
        homeLink="/" 
        currentPage="About"/>

        <AboutSectionThumb/>
        <CommunityFeedback/>
        <Instructors/>
        <ManagementSection/>
        <AchievementGoul/>
        <BlogPostSection/>
    </>
    
  )
}

export default About