import React from 'react'
import ViewHeroSection from '../Components/CourseView/ViewHero'

import BlogSidebar from '../Components/BlogStyle2/BlogStyleSideBar.jsx'
import BlogSidebarTwo from '../Components/BlogStyle2/BlogStyleSidebarTwo.jsx'
import BlogSidebarThree from '../Components/BlogStyle2/BlogStyleSideBarThree.jsx'
import InstructorCard from '../Components/CoursesDetails/InstructorCard.jsx'
import LeaveCommentForm from '../Components/CoursesDetails/LeaveComment.jsx'

import BlogSMainContent from '../Components/BlogSingle/BlogSingleOne.jsx'
import BlogSinglePage from '../Components/BlogSingle/BlogSingleOne.jsx'
import BlogSinglePageTwo from '../Components/BlogSingle/BlogSingleTwo.jsx'



const BlogSingle = () => {
  return (
    <>
      <ViewHeroSection
        title="Interactively Morph High Standards Anding" 
        homeText="Home" 
        homeLink="/" 
        currentPage="Blog Detais"
      />

      <div className="bg-[#FFF9F1] py-16">
        <div className="container mx-auto px-4 lg:px-20">
         
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
            
            {/* --- LEFT SIDE: 70%  */}
            <div className="lg:col-span-7">
              <div className="">

{/* <BlogSMainContent/> */}

<BlogSinglePage/>
<BlogSinglePageTwo/>

                
               <InstructorCard/>
               <LeaveCommentForm/>

                
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

export default BlogSingle