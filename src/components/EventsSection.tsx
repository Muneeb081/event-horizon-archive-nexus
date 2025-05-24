
import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const EventsSection = () => {
  const events = [
    {
      title: "European Cultural Summit",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Vienna Convention Center",
      attendees: 350,
      type: "Summit"
    },
    {
      title: "Heritage Gem Exhibition",
      date: "April 22, 2024",
      time: "10:00 AM - 8:00 PM",
      location: "European Heritage Hall",
      attendees: 600,
      type: "Exhibition"
    },
    {
      title: "Cultural Leaders Network",
      date: "May 10, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Grand Cultural Center",
      attendees: 200,
      type: "Networking"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gray-100/50 to-transparent rounded-full transform translate-x-48 -translate-y-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Upcoming Cultural Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected with our latest cultural events, heritage exhibitions, and community gatherings designed to foster European cultural growth and collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-xl border border-gray-200 p-6 hover:shadow-2xl hover:scale-105 transition-all duration-500 group"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 text-sm font-medium rounded-full">
                  {event.type}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                {event.title}
              </h3>

              <div className="space-y-3 text-gray-600">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gray-600" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-700" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-gray-500" />
                  <span>{event.attendees} Expected Attendees</span>
                </div>
              </div>

              <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 hover:from-gray-600 hover:to-gray-800">
                Register Now
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 border-2 border-gray-400 text-gray-700 font-semibold rounded-full hover:bg-gray-50 hover:border-gray-500 transition-all duration-300 hover:shadow-lg">
            View Full Calendar
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
