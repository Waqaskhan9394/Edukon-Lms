import React from 'react'
import CourseHeroSection from '../Components/Courses/CoursesHeroSection'
import CourseFilterBar from '../Components/Courses/GroupSelectSection'
import FeaturedCourses from '../Components/HomeOne/FeaturedCourses'
import CoursePagination from '../Components/Courses/CoursePagination'

const Courses = () => {
  return (
    <>
    <CourseHeroSection/>
    <CourseFilterBar/>
    <FeaturedCourses/>
    <CoursePagination/>
    </>
  )
}

export default Courses