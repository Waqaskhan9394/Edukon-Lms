import React from 'react'
import HomeSevenHero from '../Components/HomeSeven/HomeSevenHero'
import CourseGrid from '../Components/HomeFour/HomeFourCourseSection'
import HomeSevenCourses from '../Components/HomeSeven/HomeSevenCourses'
import HomeSevenOffer from '../Components/HomeSeven/HomeSevenOffer'
import HomeSevenInstructor from '../Components/HomeSeven/HomeSevenInstructor'

import HomeThreeBlog from '../Components/HomeThree/HomeThreeUpCommenge'
import HomeSevenNews from '../Components/HomeSeven/HomeSectionNewsLetter'

const HomeSeven = () => {
  return (
   <>
   <HomeSevenHero/>
   <CourseGrid/>
   <HomeSevenCourses/>
   <HomeSevenOffer/>
   <HomeSevenInstructor/>
   <HomeThreeBlog/>
   <HomeSevenNews/>
   
   </>
  )
}

export default HomeSeven