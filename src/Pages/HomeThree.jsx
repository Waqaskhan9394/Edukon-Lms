import React from 'react'

import HomeTwoHeroSection from '../Components/HomeThree/HomeThreeHero'
import HomeThreeHeroSection from '../Components/HomeThree/HomeThreeHero'
import FeatureSection from '../Components/HomeThree/HomeThreeFeaturs'
import CourseSlider from '../Components/HomeThree/HomeThreeLincon'
import AchievementThree from '../Components/HomeThree/HomeThreeAchive'
import UpcomingEvents from '../Components/HomeThree/HomeThreeEventsSection'
import WorkshopSection from '../Components/HomeThree/HomeThreeWorkShop'
import HomeThreeBlog from '../Components/HomeThree/HomeThreeUpCommenge'
import TestimonialSlider from '../Components/HomeThree/HomeThreeClintes'
import Newsletter from '../Components/HomeThree/HomeThreeNewsLetter'

const HomeThree = () => {
  return (
    <>
    <HomeThreeHeroSection/>
    <FeatureSection/>
    <CourseSlider/>
    <AchievementThree/>
    <UpcomingEvents/>
    <WorkshopSection/>
    <HomeThreeBlog/>
    <TestimonialSlider/>
    <Newsletter/>
    
    </>
  )
}

export default HomeThree