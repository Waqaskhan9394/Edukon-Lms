import React from 'react'
import ViewHeroSection from '../Components/CourseView/ViewHero'
import BlogLayoutWithSidebar from '../Components/SearchPage/SearchPageSection'
import EdukonBlogFullLayout from '../Components/SearchPage/SearchPageSection'

const SearchPage = () => {
  return (
    <>
    <ViewHeroSection
      title="4 Results found for: Business" 
        homeText="Home" 
        homeLink="/" 
        currentPage="Search Result"
    />
    <EdukonBlogFullLayout/>
    </>
  )
}

export default SearchPage