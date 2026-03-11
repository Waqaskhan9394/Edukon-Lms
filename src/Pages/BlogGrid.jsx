import React from 'react'

import ViewHeroSection from '../Components/CourseView/ViewHero'
import BlogFeaturedCourses from '../Components/BlogGrid/BlogFeatursCourses'
import CoursePagination from '../Components/Courses/CoursePagination'

const BlogGrid = () => {
  return (
    <>
   
   <ViewHeroSection title="Our Blog Posts" 
  homeText="Home" 
  homeLink="/" 
  currentPage="Blog"
  />

  <BlogFeaturedCourses/>
  <CoursePagination/>
    </>
   
  )
}

export default BlogGrid