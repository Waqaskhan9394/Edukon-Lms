import React from 'react'
import ViewHeroSection from '../Components/CourseView/ViewHero'
import EdukonBottomSections from '../Components/SearchNone/SearchNoneSectionOne'

const SearchNone = () => {
  return (
    <>
    <ViewHeroSection
       title="Results Not found for: Business" 
        homeText="Home" 
        homeLink="/" 
        currentPage="Search None"
    />
    <EdukonBottomSections/>
    </>
  )
}

export default SearchNone