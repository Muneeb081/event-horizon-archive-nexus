
import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const EventsSection = () => {
  const events = [
    {
      title: "Annual Leadership Summit",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Convention Center",
      attendees: 250,
      type: "Conference"
    },
    {
      title: "Gem Stones Exhibition",
      date: "April 22, 2024",
      time: "10:00 AM - 8:00 PM",
      location: "Exhibition Hall",
      attendees: 500,
      type: "Exhibition"
    },
    {
      title: "Community Networking Event",
      date: "May 10, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Grand Ballroom",
      attendees: 150,
      type: "Networking"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-100/30 to-transparent rounded-full transform translate-x-48 -translate-y-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected with our latest events, exhibitions, and community gatherings designed to foster growth and collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-medium rounded-full">
                  {event.type}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {event.title}
              </h3>

              <div className="space-y-3 text-gray-600">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-indigo-500" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-purple-500" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-green-500" />
                  <span>{event.attendees} Expected Attendees</span>
                </div>
              </div>

              <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Register Now
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 border-2 border-indigo-300 text-indigo-600 font-semibold rounded-full hover:bg-indigo-50 hover:border-indigo-400 transition-all duration-300">
            View Full Calendar
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
