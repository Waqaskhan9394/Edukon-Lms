import React from 'react'
import ViewHeroSection from '../Components/CourseView/ViewHero'
import ShoppingCart from '../Components/ShopCartPage/ShopCartOne'
import CartFormSection from '../Components/ShopCartPage/CartForm'

const ShopCartPage = () => {
  return (
    <>
    
    <ViewHeroSection
     title="Shop Cart"
        homeText="Home"
        homeLink="/"
        currentPage="Cart Page"
        />
        <ShoppingCart/>
        <CartFormSection/>
    
    </>
    
  )
}

export default ShopCartPage