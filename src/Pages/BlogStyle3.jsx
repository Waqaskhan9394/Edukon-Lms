import React from 'react'
import ViewHeroSection from '../Components/CourseView/ViewHero'
import BlogStyle3LeftOne from '../Components/BlogStyle3/BlogStyle3LeftOne'
import BlogStyle3LeftTwo from '../Components/BlogStyle3/BlogStyleTwo'
import BlogStyle3LeftThree from '../Components/BlogStyle3/BlogStyle3LeftThree'
import BlogStyle3LeftFour from '../Components/BlogStyle3/BlogStyle3LeftFour.jsx'
import BlogSidebar from '../Components/BlogStyle2/BlogStyleSideBar.jsx'
import BlogSidebarTwo from '../Components/BlogStyle2/BlogStyleSidebarTwo.jsx'
import BlogSidebarThree from '../Components/BlogStyle2/BlogStyleSideBarThree.jsx'
import CoursePagination from '../Components/Courses/CoursePagination.jsx'


const BlogStyle3 = () => {
  return (
    <>
      <ViewHeroSection
        title="Our Blog Classic Posts" 
        homeText="Home" 
        homeLink="/" 
        currentPage="Blog classic"
      />

      <div className="bg-[#FFF9F1] py-16">
        <div className="container mx-auto px-4 lg:px-20">
         
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
            
            {/* --- LEFT SIDE: 70%  */}
            <div className="lg:col-span-7">
              <div className="space-y-10">
                
                <BlogStyle3LeftOne/>
                <BlogStyle3LeftTwo/>
               <BlogStyle3LeftThree/>
               <BlogStyle3LeftFour/>
               <CoursePagination/>

                
              </div>
            </div>

            {/* --- RIGHT SIDE: */}
            <div className="lg:col-span-3">
              <div className=" space-y-8">
               
               <BlogSidebar/>
               <BlogSidebarTwo/>
               <BlogSidebarThree/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default BlogStyle3