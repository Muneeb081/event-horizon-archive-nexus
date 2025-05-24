
import React from 'react';
import { Mail, Phone, MapPin, Calendar, Archive, Users, Gem } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full transform -translate-x-48 -translate-y-48"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Event Horizon
            </h3>
            <p className="text-gray-300 mb-6">
              Preserving history, showcasing leadership, and connecting communities through comprehensive event management.
            </p>
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
              <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', icon: Archive },
                { name: 'About Us', icon: Users },
                { name: 'Event Calendar', icon: Calendar },
                { name: 'Gem Stones', icon: Gem }
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 flex items-center space-x-2">
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-indigo-400 transition-colors duration-300">Event Management</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors duration-300">Historical Archives</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors duration-300">Leadership Development</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors duration-300">Gemstone Authentication</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-indigo-400" />
                <span className="text-gray-300">info@eventhorizon.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">123 Professional Plaza</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Event Horizon Archive Nexus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
