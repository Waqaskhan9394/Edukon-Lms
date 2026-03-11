import React from 'react'
import ViewHeroSection from '../Components/CourseView/ViewHero'
import RegisterPage from '../Components/SignUp/SignUpForm'

const SignUp = () => {
  return (
    <>
    <ViewHeroSection
    
      title="Register Now" 
  homeText="Home" 
  homeLink="/" 
  currentPage="Sign Up"
  
  />
  <RegisterPage/>
    
    </>
  )
}

export default SignUp