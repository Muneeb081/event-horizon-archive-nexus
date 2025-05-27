
import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, Bell, Star } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface Announcement {
  id: string;
  title: string;
  date: string;
  description: string;
}

interface Event {
  id: string;
  name: string;
  date: string;
  time: string;
  description: string;
}

const EventsSection = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch announcements
        const { data: announcementsData } = await supabase
          .from('announcements')
          .select('*')
          .order('date', { ascending: false })
          .limit(3);

        // Fetch events
        const { data: eventsData } = await supabase
          .from('events')
          .select('*')
          .order('date', { ascending: false })
          .limit(3);

        setAnnouncements(announcementsData || []);
        setEvents(eventsData || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Listen for real-time updates
    const announcementsChannel = supabase
      .channel('announcements-changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'announcements' },
        () => fetchData()
      )
      .subscribe();

    const eventsChannel = supabase
      .channel('events-changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'events' },
        () => fetchData()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(announcementsChannel);
      supabase.removeChannel(eventsChannel);
    };
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 dark:border-white mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Loading events and announcements...</p>
          </div>
        </div>
      </section>
    );
  }

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
          
          {announcements.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
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
                    <span className="text-gray-600 dark:text-gray-300">{new Date(announcement.date).toLocaleDateString()}</span>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{announcement.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">No announcements available at the moment.</p>
            </div>
          )}
        </div>

        {/* Upcoming Events Section */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <Star className="w-8 h-8 text-gray-600 dark:text-gray-400 mr-3" />
            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Upcoming Events</h3>
          </div>
          
          {events.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                >
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-200 to-green-300 dark:from-green-600 dark:to-green-700 text-green-800 dark:text-green-100 text-sm font-medium rounded-full">
                      Event
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                    {event.name}
                  </h4>

                  <div className="space-y-3 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">{event.description}</p>

                  <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Register Now
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">No upcoming events scheduled at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
