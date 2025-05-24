
import React from 'react';
import { Calendar, Archive, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0">
          {/* Floating shapes */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Event Horizon
            <span className="block text-3xl md:text-4xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mt-2">
              Archive Nexus
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Preserving history, showcasing leadership, and connecting communities through 
            comprehensive event management and historical documentation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Explore Events
            </button>
            <button className="px-8 py-4 border-2 border-indigo-300 text-indigo-600 font-semibold rounded-full hover:bg-indigo-50 hover:border-indigo-400 transition-all duration-300">
              View Archives
            </button>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              { icon: Calendar, title: "Event Management", desc: "Comprehensive event planning and tracking" },
              { icon: Archive, title: "Historical Records", desc: "Detailed archives of past events and achievements" },
              { icon: Users, title: "Leadership Profiles", desc: "Showcasing organizational leadership and governance" }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-white/20"
              >
                <feature.icon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
