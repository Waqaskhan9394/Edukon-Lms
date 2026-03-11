import React from 'react'
import ViewHeroSection from '../Components/CourseView/ViewHero'

import BlogSidebar from '../Components/BlogStyle2/BlogStyleSideBar'
import BlogSidebarTwo from '../Components/BlogStyle2/BlogStyleSidebarTwo'
import ShopDetailsContent from '../Components/ShopDetailsPage/ShopDetailsOne'
import ShopDetailsContentTwo from '../Components/ShopDetailsPage/ShopDetailsTwo'

const ShopDetailsPages = () => {
  return (
    <>
      <ViewHeroSection
        title="Our Shop Pages"
        homeText="Home"
        homeLink="/"
        currentPage="Shop"
      />

      {/* Main Layout Container */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          
        
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* --- LEFT SECTION: MAIN CONTENT (Cards) --- 
              
            */}
            <div className="w-full lg:w-[70%] order-1 lg:order-1">
             
             <ShopDetailsContent/>
             <ShopDetailsContentTwo/>
            </div>

            {/* --- RIGHT SECTION: SIDEBAR --- 
               
            */}
            <div className="w-full lg:w-[30%] order-2 lg:order-2 space-y-8">
              <BlogSidebar/>
              <BlogSidebarTwo/>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default ShopDetailsPages;