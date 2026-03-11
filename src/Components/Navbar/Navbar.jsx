import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import EnvatoLogo from '../../assets/Image/EnvatoLogo.svg';
import EdukonLogo from '../../assets/Image/01.png';
import { 
  FaPhoneAlt, FaMapMarkerAlt, FaFacebookMessenger, FaTwitter, 
  FaVimeoV, FaSkype, FaRss, FaBars, FaTimes, FaPlus, FaMinus, FaInfoCircle 
} from 'react-icons/fa';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) setIsSticky(true);
      else setIsSticky(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { 
      title: "Home", 
      links: [
        { name: "Home One", path: "/" },
        { name: "Home Two", path: "/home-two" },
        { name: "Home Three", path: "/home-three" },
        { name: "Home Four", path: "/home-four" },
        { name: "Home Five", path: "/home-five" },
        { name: "Home Six", path: "/home-six" },
        { name: "Home Seven", path: "/home-seven" }
      ] 
    },
    { 
      title: "Courses", 
      links: [
        { name: "Course", path: "/courses" },
        { name: "Course Details", path: "/course-details" },
        { name: "Course View", path: "/course-view" }
      ] 
    },
    { 
      title: "Blog", 
      links: [
        { name: "Blog Grid", path: "/blog" },
        { name: "Blog Style2", path: "/blog-2" },
        { name: "Blog Style3", path: "/blog-3" },
        { name: "Blog Single", path: "/blog-single" }
      ] 
    },
    { 
      title: "Pages", 
      links: [
        { name: "About", path: "/about" },
        { name: "Team", path: "/team" },
        { name: "Instructor", path: "/instructors" },
        { name: "Shop Page", path: "/shop" },
        { name: "Shop Details Page", path: "/shop-details" },
        { name: "Shop Cart Page", path: "/cart" },
        { name: "Search Page", path: "/search" },
        { name: "Search None", path: "/no-result" },
        { name: "404", path: "/404" }
      ] 
    },
    { title: "Contact", path: "/contact", links: [] }
  ];

  const getDrawerTop = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      const envatoHeight = 54;
      const mainNavHeight = isSticky ? 60 : 50;
      const infoHeight = isInfoOpen ? 135 : 0;
      return `${envatoHeight + mainNavHeight + infoHeight}px`;
    }
    return "0px";
  };

  return (
    <header className="w-full font-['Roboto',sans-serif] absolute top-0 left-0 z-[9999]">
      <style>
        {`
          @keyframes slideDown {
            from { transform: translateY(-100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .animate-slide-down {
            animation: slideDown 0.8s ease-out forwards;
          }
        `}
      </style>

      {/* 1. TOP ENVATO BAR */}
      <div className="fixed top-0 left-0 w-full z-[9999] bg-[#262626] h-[54px] flex items-center px-4">
        <div className="container mx-auto flex justify-between items-center">
          <img src={EnvatoLogo} alt="Envato" className="h-[18px]" />
          <button className="bg-[#82b440] text-white text-[12px] px-4 py-1.5 rounded-[4px] font-bold">Buy now</button>
        </div>
      </div>

      <div className="pt-[54px]">
        {/* 2. MID BAR / INFO BAR */}
        <div className={`transition-all duration-500 overflow-hidden 
          lg:bg-white/10 lg:backdrop-blur-md lg:border-b lg:border-white/20 lg:block lg:max-h-[60px] lg:opacity-100 lg:relative
          bg-[#f16126]/80 backdrop-blur-md ${isSticky ? 'fixed w-full z-[8000] left-0 shadow-lg' : 'relative'}
          ${isInfoOpen ? 'max-h-[500px] py-6 lg:py-0 opacity-100' : 'max-h-0 opacity-0 lg:max-h-[60px] lg:opacity-100'}`}
          style={{ top: (isSticky && typeof window !== 'undefined' && window.innerWidth < 1024) ? '54px' : 'auto' }}
        >
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4 lg:h-[60px]">
            <div className="flex flex-col lg:flex-row items-center text-white lg:text-[#222] gap-3 text-[13px] lg:text-[14px]">
              <div className="flex items-center gap-2 lg:px-8 lg:border-r lg:border-black/10 h-full">
                <FaPhoneAlt size={12} className="rotate-90 text-white lg:text-[#f16126]" />
                <span className="font-medium">+800-123-4567 6587</span>
              </div>
              <div className="flex items-center gap-2 lg:px-8">
                <FaMapMarkerAlt size={14} className="text-white lg:text-[#f16126]" />
                <span className="font-medium">Beverley, New York 224 USA</span>
              </div>
            </div>

            <div className="mt-4 lg:mt-0 flex items-center text-white lg:text-[#222]">
              <span className="hidden lg:inline mr-4 text-[14px]">Find us on :</span>
              <div className="flex gap-4 lg:gap-0 lg:border-l lg:border-black/10">
                {[<FaFacebookMessenger />, <FaTwitter />, <FaVimeoV />, <FaSkype />, <FaRss />].map((icon, i) => (
                  <div key={i} className="lg:w-[50px] lg:h-[60px] flex items-center justify-center lg:border-r lg:border-black/10 lg:text-[#f16126] cursor-pointer hover:bg-white/20 transition-all duration-300 group">
                    <div className="transition-transform duration-300 group-hover:-translate-y-2">
                      {icon}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. MAIN NAVBAR */}
        <nav className={`z-[9000] border-b border-white/20 w-full transition-all duration-500
          ${isSticky 
            ? 'fixed top-[54px] bg-white shadow-md animate-slide-down bg-white/20 backdrop-blur-lg' 
            : 'relative bg-white/20 backdrop-blur-lg'}`}
          style={{ marginTop: (isSticky && isInfoOpen && typeof window !== 'undefined' && window.innerWidth < 1024) ? '135px' : '0px' }}
        >
          <div className="container mx-auto px-4 lg:px-6 flex justify-between items-center h-[50px] lg:h-[90px]">
            <Link to="/" className="flex items-center gap-2">
              <img src={EdukonLogo} alt="Logo" className="h-[35px] lg:h-[45px]" />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-8 text-[14px] font-bold text-[#222] ">
              {menuItems.map(item => (
                <li key={item.title} className="group relative py-8 cursor-pointer hover:text-[#f16126] transition-all uppercase flex items-center gap-1">
                  {item.links.length === 0 ? (
                    <NavLink to={item.path} className={({ isActive }) => isActive ? "text-[#f16126]" : ""}>
                      {item.title}
                    </NavLink>
                  ) : (
                    <>
                      {item.title}
                      <div className="relative w-3 h-3 flex items-center justify-center ml-1">
                        <FaPlus size={10} className="absolute text-gray-500 group-hover:opacity-0 transition-opacity duration-300" />
                        <FaMinus size={10} className="absolute text-[#f16126] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <ul className="absolute top-full left-0 w-48 bg-white shadow-xl  py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 translate-y-4 group-hover:translate-y-0 ">
                        {item.links.map(link => (
                          <li key={link.name}>
                            <NavLink 
                              to={link.path} 
                              className={({ isActive }) => `px-4 py-2 text-[14px] block normal-case font-medium transition-all ${isActive ? "bg-[#f16126] text-white" : "text-gray-700 hover:bg-[#f16126] hover:text-white  border border-gray-300"}`}
                            >
                              {link.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <Link to="/login" className="hidden lg:block font-bold text-[#222] hover:text-[#f16126]">LOG IN</Link>
              <Link to="/signup" className="hidden lg:block bg-[#f16126] text-white font-bold px-7 py-3 rounded-[4px] shadow-md hover:scale-105 transition-transform">SIGN UP</Link>
              
              <div className="flex lg:hidden items-center gap-2">
                <button onClick={() => setIsMainMenuOpen(!isMainMenuOpen)} className="text-[#f16126] text-2xl">
                  {isMainMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
                <button onClick={() => setIsInfoOpen(!isInfoOpen)} className="bg-[#f16126] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-sm">
                  <FaInfoCircle />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* MOBILE */}
      <div 
        className={`lg:hidden fixed left-0 w-full bg-[#f16126]/90 backdrop-blur-xl z-[8500] transition-all duration-300 overflow-hidden
          ${isMainMenuOpen ? 'max-h-screen border-t border-white/20 shadow-2xl' : 'max-h-0'}`} 
        style={{ top: getDrawerTop() }}
      >
        <ul className="flex flex-col text-white">
          {menuItems.map((item, index) => (
            <li key={index} className="border-b border-white/20">
              <NavLink 
                to={item.links.length === 0 ? item.path : "#"} 
                className={({ isActive }) => `flex justify-between items-center px-6 py-4 font-bold text-[15px] uppercase w-full ${isActive && item.links.length === 0 ? "bg-white text-[#f16126]" : "active:bg-orange-600"}`}
                onClick={() => { if(item.links.length === 0) setIsMainMenuOpen(false); }}
              >
                <span>{item.title}</span>
                {item.links.length > 0 && <FaPlus size={12} className="text-white/80" />}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;