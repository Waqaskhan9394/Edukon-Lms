import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

import book1 from '../../assets/Image/Book1.jpg';
import book2 from '../../assets/Image/Book2.jpg';
import book3 from '../../assets/Image/Book3.jpg';
import book4 from '../../assets/Image/Book4.jpg';

const HomeFiveBookSection = () => {
  const books = [
    {
      id: 1,
      title: "Essential of English Language",
      type: "Handcover",
      oldPrice: "$199.00",
      newPrice: "$150.00",
      rating: 5,
      image: book1,
    },
    {
      id: 2,
      title: "A to Z Rules of English Spoken",
      type: "Handcover",
      oldPrice: "$199.00",
      newPrice: "$150.00",
      rating: 4,
      image: book2,
    },
    {
      id: 3,
      title: "How to Speak English Continuously",
      type: "Handcover",
      oldPrice: "$199.00",
      newPrice: "$150.00",
      rating: 5,
      image: book3,
    },
    {
      id: 4,
      title: "A to Z Rules of English Spoken",
      type: "Handcover",
      oldPrice: "$199.00",
      newPrice: "$150.00",
      rating: 4,
      image: book4,
    },
  ];

  return (
    <section className="py-24 bg-[#ffdc12] font-sans">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-14">
          <span className="text-[#07294d] font-bold text-[14px] md:text-[15px] uppercase tracking-[3px] block mb-3">
            LEARN EASILY THE BRIGHT THING
          </span>
          <h2 className="text-[#07294d] text-[30px] md:text-[45px] font-[400] tracking-tight leading-tight">
            My Book & Publications
          </h2>
        </div>

        {/* --- BOOKS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <div 
              key={book.id} 
              className="group bg-white rounded-md overflow-hidden shadow-sm transition-all duration-300"
            >
              {/* --- IMAGE CONTAINER  */}
              <div className="relative h-[320px] overflow-hidden bg-white">
                <img 
                  src={book.image} 
                  alt={book.title} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>

              {/* --- DETAILS SECTION --- */}
              <div className="p-6">
                <h3 className="text-[#07294d] text-[19px] font-[900] leading-tight mb-2 min-h-[50px]">
                  {book.title}
                </h3>
                <p className="text-gray-400 font-semibold text-[14px] mb-3">
                  {book.type}
                </p>

                {/* Ratings */}
                <div className="flex items-center text-[#ffdc12] text-sm mb-4">
                  {[...Array(5)].map((_, i) => (
                    i < book.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                  ))}
                </div>

                {/* Pricing */}
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                  <span className="text-gray-300 line-through font-bold text-[15px]">
                    {book.oldPrice}
                  </span>
                  <span className="text-[#07294d] font-[1000] text-[18px]">
                    {book.newPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeFiveBookSection;