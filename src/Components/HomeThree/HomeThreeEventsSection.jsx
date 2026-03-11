import React from 'react';
import { FaRegClock, FaMapMarkerAlt } from 'react-icons/fa';

// Image Import
import eventMainImg from '../../assets/Image/HomeThreeEvents.jpg';

const UpcomingEvents = () => {
  const eventList = [
    {
      id: 1,
      date: "13",
      month: "Nov 2021",
      title: "Convocation and Celebration 2021",
      time: "08:30 am",
      location: "National Auditorium, Dhaka",
    },
    {
      id: 2,
      date: "15",
      month: "Nov 2021",
      title: "Convocation and Celebration 2021",
      time: "08:30 am",
      location: "National Auditorium, Dhaka",
    },
    {
      id: 3,
      date: "18",
      month: "Nov 2021",
      title: "Convocation and Celebration 2021",
      time: "08:30 am",
      location: "National Auditorium, Dhaka",
    },
    {
      id: 4,
      date: "25",
      month: "Nov 2021",
      title: "Convocation and Celebration 2021",
      time: "08:30 am",
      location: "National Auditorium, Dhaka",
    }
  ];

  return (
    <section className="py-24 bg-white font-['Roboto',sans-serif]">
      <div className="container mx-auto px-4">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-16">
          <span className="text-[#ff6b2c] font-bold uppercase tracking-[3px] text-sm">Don't Miss the Day</span>
          <h2 className="text-[#07294d] text-3xl md:text-5xl font-[900] mt-3 mb-6">Upcoming Events</h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* --- Left Side:*/}
          <div className="lg:w-1/2 group">
            <div className="relative overflow-hidden rounded-md mb-8">
              <img 
                src={eventMainImg} 
                alt="Main Event" 
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            {/* Big Event Detail */}
            <div className="flex gap-6 items-start p-2">
              <div className="bg-white border-2 border-[#ff6b2c] rounded-md p-4 text-center min-w-[100px]">
                <span className="block text-3xl font-black text-[#07294d]">13</span>
                <span className="text-gray-500 text-sm font-bold uppercase">Nov 2021</span>
              </div>
              <div>
                <h3 className="text-2xl font-[900] text-[#07294d] hover:text-[#ff6b2c] cursor-pointer transition-colors mb-3">
                  The Way of Higher Education & Its Difficulties
                </h3>
                <div className="flex flex-wrap gap-5 text-gray-500 text-sm">
                  <span className="flex items-center gap-2"><FaRegClock className="text-[#ff6b2c]" /> 08:30 am</span>
                  <span className="flex items-center gap-2"><FaMapMarkerAlt className="text-[#ff6b2c]" /> National Auditorium, Dhaka</span>
                </div>
              </div>
            </div>
          </div>

          {/* --- Right Side:  */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            {eventList.map((event) => (
              <div 
                key={event.id} 
                className="flex gap-6 items-center p-4 border border-transparent  rounded-md transition-all duration-300 group"
              >
                {/* Date Box */}
                <div className="border-2 border-[#ff6b2c] group-hover:border-[#ff6b2c] rounded-md p-3 text-center min-w-[90px] transition-colors">
                  <span className="block text-2xl font-black text-[#07294d]">{event.date}</span>
                  <span className="text-gray-400 text-[11px] font-bold uppercase">{event.month}</span>
                </div>
                
                {/* Text Content */}
                <div>
                  <h4 className="text-lg font-bold text-[#07294d] group-hover:text-[#ff6b2c] transition-colors mb-2">
                    {event.title}
                  </h4>
                  <div className="flex flex-wrap gap-4 text-gray-500 text-[13px]">
                    <span className="flex items-center gap-1.5"><FaRegClock className="text-[#ff6b2c]" /> {event.time}</span>
                    <span className="flex items-center gap-1.5"><FaMapMarkerAlt className="text-[#ff6b2c]" /> {event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;