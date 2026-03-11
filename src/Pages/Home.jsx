import React from 'react'
import HeroSection from '../Components/HomeOne/HeroSection.jsx'
import PartnerScrollingBar from '../Components/HomeOne/ScroolingBar.jsx'
import PopularCategory from '../Components/HomeOne/PopularCategory.jsx'
import FeaturedCourses from '../Components/HomeOne/FeaturedCourses.jsx'
import AboutSection from '../Components/HomeOne/AboutSkill.jsx'
import Instructors from '../Components/HomeOne/InstructorsSection.jsx'
import CommunityFeedback from '../Components/HomeOne/StudentCommunity.jsx'
import BlogPostSection from '../Components/HomeOne/Post.jsx'
import Achievements from '../Components/HomeOne/AchieveGoul.jsx'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <PartnerScrollingBar/>
    <PopularCategory/>
    <FeaturedCourses/>
    <AboutSection/>
    <Instructors/>
    <CommunityFeedback/>
    <BlogPostSection/>
    <Achievements/>
    </>
  )
}

export default Home