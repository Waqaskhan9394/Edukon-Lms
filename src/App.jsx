import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

// Pages
import Home from './Pages/Home';
import HomeTwo from './Pages/HomeTwo';
import HomeThree from './Pages/HomeThree';
import HomeFour from './Pages/HomeFour';
import HomeFive from './Pages/HomeFive';
import HomeSix from './Pages/HomeSix';
import HomeSeven from './Pages/HomeSeven';
import Courses from './Pages/Courses';
import CoursesDetails from './Pages/CoursesDetails';
import CoursesView from './Pages/CoursesView';
import BlogGrid from './Pages/BlogGrid';
import BlogStyle2 from './Pages/BlogStyle2';
import BlogStyle3 from './Pages/BlogStyle3';
import BlogSingle from './Pages/BlogSingle';
import About from './Pages/About';
import Team from './Pages/Team';
import BestInstructors from './Pages/Instructors';
import SearchNone from './Pages/SearchNone';
import SearchPage from './Pages/SearchPage';
import ErrorPage from './Pages/404';
import ShopPage from './Pages/ShopPage';
import ShopDetailsPages from './Pages/ShopDetailsPage';
import ShopCartPage from './Pages/ShopCartPage';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

const App = () => {
  return (
    <Router>
      {/* Navbar  */}
      <Navbar />

      <Routes>
      
       
        
        {/* Other Home Variations */}
        <Route path="/" element={<Home />} />
        <Route path="/home-two" element={<HomeTwo />} />
        <Route path="/home-three" element={<HomeThree />} />
        <Route path="/home-four" element={<HomeFour />} />
        <Route path="/home-five" element={<HomeFive />} />
        <Route path="/home-six" element={<HomeSix />} />
         <Route path="/home-seven" element={<HomeSeven />} />

        {/* Inner Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course-details" element={<CoursesDetails />} />
        <Route path="/course-view" element={<CoursesView />} />
        <Route path="/blog" element={<BlogGrid />} />
        <Route path="/blog-2" element={<BlogStyle2 />} />
        <Route path="/blog-3" element={<BlogStyle3 />} />
        <Route path="/blog-single" element={<BlogSingle />} />
        <Route path="/team" element={<Team />} />
        <Route path="/instructors" element={<BestInstructors />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Shop & Auth */}
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop-details" element={<ShopDetailsPages />} />
        <Route path="/cart" element={<ShopCartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Search & 404 */}
        <Route path="/search" element={<SearchPage />} />
        <Route path="/no-result" element={<SearchNone />} />
        <Route path="*" element={<ErrorPage />} /> 
      </Routes>

      {/* Footer hamesha bottom par rahega */}
      <Footer />
    </Router>
  );
};

export default App;