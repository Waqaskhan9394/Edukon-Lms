import React from 'react'
import ViewHeroSection from '../Components/CourseView/ViewHero'
import BlogStyleSection from '../Components/BlogStyle2/PostBlogStyle'
import CoursePagination from '../Components/Courses/CoursePagination'
import BlogSidebar from '../Components/BlogStyle2/BlogStyleSideBar'
import BlogSidebarTwo from '../Components/BlogStyle2/BlogStyleSidebarTwo'
import BlogSidebarThree from '../Components/BlogStyle2/BlogStyleSideBarThree'

const BlogStyle2 = () => {
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
                
                <BlogStyleSection/>
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

export default BlogStyle2