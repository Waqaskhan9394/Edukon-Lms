import React from 'react'
import HomeFiveHeroSection from '../Components/HomeFive/HoveFiveHero'
import HomeFiveAboutSection from '../Components/HomeFive/HomeFiveAbout'
import CourseSlider from '../Components/HomeThree/HomeThreeLincon'
import HomeFourRegister from '../Components/HomeFour/HomeFourRegister'
import HomeFiveLearningSection from '../Components/HomeFive/HomeFiveLearning'
import HomeFiveTestimonialSlider from '../Components/HomeFive/HomeFiveTestimonials'
import HomeFiveBookSection from '../Components/HomeFive/HomeFiveBookSection'

const HomeFive = () => {
  return (
   <>
   <HomeFiveHeroSection/>
   <HomeFiveAboutSection/>
   <CourseSlider/>
   <HomeFourRegister/>
   <HomeFiveLearningSection/>
   <HomeFiveTestimonialSlider/>
   <HomeFiveBookSection/>
   </>
  )
}

export default HomeFive