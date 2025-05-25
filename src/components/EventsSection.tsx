
import React from 'react';
import { Calendar, Clock, MapPin, Users, Bell, Star } from 'lucide-react';

const EventsSection = () => {
  const announcements = [
    {
      title: "New Cultural Heritage Initiative",
      date: "March 15, 2024",
      description: "Announcing the launch of our comprehensive European cultural heritage preservation program."
    },
    {
      title: "Partnership with International Museums",
      date: "March 10, 2024", 
      description: "Proud to announce strategic partnerships with leading museums across Europe for cultural exchange."
    },
    {
      title: "Annual Awards Ceremony",
      date: "February 28, 2024",
      description: "Celebrating outstanding contributions to European cultural preservation and heritage documentation."
    }
  ];

  const upcomingEvents = [
    {
      title: "European Cultural Summit",
      date: "April 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Vienna Convention Center",
      attendees: 350,
      type: "Summit"
    },
    {
      title: "Heritage Documentation Workshop",
      date: "May 22, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "European Heritage Hall",
      attendees: 150,
      type: "Workshop"
    },
    {
      title: "Cultural Leaders Network",
      date: "June 10, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Grand Cultural Center",
      attendees: 200,
      type: "Networking"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden transition-all duration-500">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gray-100/50 dark:from-gray-700/30 to-transparent rounded-full transform translate-x-48 -translate-y-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6 transition-colors duration-500">
            Events & Announcements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-500">
            Stay updated with our latest announcements and upcoming cultural events.
          </p>
        </div>

        {/* Announcements Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Bell className="w-8 h-8 text-gray-600 dark:text-gray-400 mr-3" />
            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Announcements</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {announcements.map((announcement, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-200 to-blue-300 dark:from-blue-600 dark:to-blue-700 text-blue-800 dark:text-blue-100 text-sm font-medium rounded-full">
                    Announcement
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {announcement.title}
                </h4>

                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-300">{announcement.date}</span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{announcement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <Star className="w-8 h-8 text-gray-600 dark:text-gray-400 mr-3" />
            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Upcoming Events</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-200 to-green-300 dark:from-green-600 dark:to-green-700 text-green-800 dark:text-green-100 text-sm font-medium rounded-full">
                    {event.type}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                  {event.title}
                </h4>

                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    <span>{event.attendees} Expected Attendees</span>
                  </div>
                </div>

                <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
