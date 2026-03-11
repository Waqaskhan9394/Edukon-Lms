import React from 'react'
import ViewHeroSection from '../Components/CourseView/ViewHero'
import LoginPage from '../Components/LoginPage/LoginForm'

const Login = () => {
  return (
    <>
  
    <ViewHeroSection
    
      title="Login Page" 
  homeText="Home" 
  homeLink="/" 
  currentPage="Login"/>
  <LoginPage/>
    </>
  )
}

export default Login