import React from 'react';
// Images ko exact paths par rakhein
import CourseImg1 from '../../assets/Image/01.jpg';
import CourseImg2 from '../../assets/Image/02.jpg';
import CourseImg3 from '../../assets/Image/03.jpg';
import CourseImg4 from '../../assets/Image/04.jpg';
import CourseImg5 from '../../assets/Image/05.jpg';
import CourseImg6 from '../../assets/Image/06.jpg';
import AuthorImg from '../../assets/Image/Author1.jpg';

const FeaturedCourses = () => {
  const courses = [
    { id: 1, image: CourseImg1, price: "$30", tag: "Adobe XD", tagColor: "bg-[#FF6B2C]", title: "Fundamentals of Adobe XD Theory Learn New", lessons: "18x Lesson", type: "Online Class", authorName: "William Smith", reviews: "03 reviews" },
    { id: 2, image: CourseImg2, price: "$30", tag: "Adobe XD", tagColor: "bg-[#26C976]", title: "Certified Graphic Design with Free Project Course", lessons: "18x Lesson", type: "Online Class", authorName: "Umme Nishat", reviews: "03 reviews" },
    { id: 3, image: CourseImg3, price: "$30", tag: "Adobe XD", tagColor: "bg-[#FFB128]", title: "Theory Learn New Student And...", lessons: "18x Lesson", type: "Online Class", authorName: "Robot Smith", reviews: "03 reviews" },
    { id: 4, image: CourseImg4, price: "$30", tag: "Adobe XD", tagColor: "bg-[#A162F7]", title: "Computer Fundamentals Basic Startup Ultricies...", lessons: "18x Lesson", type: "Online Class", authorName: "Zinat Zaara", reviews: "03 reviews" },
    { id: 5, image: CourseImg5, price: "$30", tag: "Adobe XD", tagColor: "bg-[#2196F3]", title: "Boozy Halloween Drinks for the Grown Eleifend...", lessons: "18x Lesson", type: "Online Class", authorName: "Robot Smith", reviews: "03 reviews" },
    { id: 6, image: CourseImg6, price: "$30", tag: "Adobe XD", tagColor: "bg-[#FF6B2C]", title: "Student Want to Learn About Science And Arts", lessons: "18x Lesson", type: "Online Class", authorName: "William Smith", reviews: "03 reviews" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-24">
        
        {/* Header Section */}
        <div className="text-center mb-14">
          <span className="text-[#FF6B2C] font-bold tracking-[3px] uppercase text-[14px] mb-2 block">
            Featured Courses
          </span>
          <h2 className="text-[34px] md:text-[44px] font-[800] text-[#1A2132] tracking-tight">
            Pick A Course To Get Started
          </h2>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-md border border-[#f0f0f0] flex flex-col sm:flex-row p-[18px] gap-[20px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 group">
              
              {/* Image Side */}
              <div className="relative flex-shrink-0 w-full sm:w-[200px] h-[165px] rounded-md overflow-hidden">
                <img 
                  src={course.image} 
                  alt="course" 
                  className="w-full h-full object-cover  bg-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-3 left-3 bg-[#FF6B2C] text-white font-bold py-1 px-3 rounded text-[14px]">
                  {course.price}
                </div>
              </div>

              {/* Content Side */}
              <div className="flex flex-col justify-between py-1 flex-1">
                
                <div className="flex items-center justify-between mb-2">
                  <span className={`${course.tagColor} text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider`}>
                    {course.tag}
                  </span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#FFB128] text-[12px]">★</span>
                    ))}
                    <span className="text-[#777777] text-[12px] ml-1 font-medium">{course.reviews}</span>
                  </div>
                </div>

                <h3 className="text-[19px] font-bold text-[#1A2132] leading-[1.3] mb-3 group-hover:text-[#FF6B2C] transition-colors cursor-pointer">
                  {course.title}
                </h3>

                {/* Lesson Info */}
                <div className="flex items-center gap-5 text-[#777777] text-[13px] border-b border-[#f3f3f3] pb-4 mb-4">
                  <div className="flex items-center gap-1.5 font-medium">
                    <span className="text-[#FF6B2C] text-[15px]">🎬</span> 
                    {course.lessons}
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <span className="text-[#FF6B2C] text-[15px]">📊</span> 
                    {course.type}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={AuthorImg} alt="author" className="w-7 h-7 rounded-full object-cover" />
                    <span className="text-[#1A2132] font-semibold text-[14px]">{course.authorName}</span>
                  </div>
                  <a href="#" className="text-[#1A2132] font-bold text-[14px] flex items-center gap-1 hover:text-[#FF6B2C] transition-colors">
                    Read More 
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="14" width="14" className="ml-1 text-[#FF6B2C]">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;