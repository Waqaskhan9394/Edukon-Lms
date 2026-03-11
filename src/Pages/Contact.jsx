import React from 'react'
import ViewHeroSection from '../Components/CourseView/ViewHero'
import ContactSection from '../Components/Contact/ContactMap'
import ContactForm from '../Components/Contact/ContactForm'

const Contact = () => {
  return (
   <>
   <ViewHeroSection
    title="Get In Touch With Us"
        homeText="Home"
        homeLink="/"
        currentPage="Contact Us"
        />
        <ContactSection/>
        <ContactForm/>
   
   </>
  )
}

export default Contact