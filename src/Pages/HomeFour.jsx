import React from 'react'
import HomeFourHero from '../Components/HomeFour/HomeFourHeroSection'
import CourseCategories from '../Components/HomeFour/HomeFourcategory'
import CourseGrid from '../Components/HomeFour/HomeFourCourseSection'
import HomeFourRegister from '../Components/HomeFour/HomeFourRegister'
import WorldMapSection from '../Components/HomeFour/HomeFourClinent'
import HomeFourInstructor from '../Components/HomeFour/HomeFourInstructor'
import HomeFourAppDownload from '../Components/HomeFour/HomeFourStore'
import PartnerScrollingBar from '../Components/HomeOne/ScroolingBar'

const HomeFour = () => {
  return (
    <>
     <HomeFourHero/>
     <CourseCategories/>
     <CourseGrid/>
     <HomeFourRegister/>
    
    <WorldMapSection/>
    <HomeFourInstructor/>
    <HomeFourAppDownload/>
    <PartnerScrollingBar/>
    </>
  )
}

export default HomeFour