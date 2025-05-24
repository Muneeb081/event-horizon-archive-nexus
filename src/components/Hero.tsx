
import React, { useEffect, useState } from 'react';
import { Calendar, Archive, Users, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            Event Horizon
            <span className="block text-4xl md:text-5xl gradient-text mt-4">
              Archive Nexus
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Preserving history, showcasing leadership, and connecting communities through 
            comprehensive event management and historical documentation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-glow-pulse">
              <span className="relative z-10">Explore Events</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="group px-8 py-4 glass-effect text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 border border-white/20">
              View Archives
            </button>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              { icon: Calendar, title: "Event Management", desc: "Comprehensive event planning and tracking", delay: "0s" },
              { icon: Archive, title: "Historical Records", desc: "Detailed archives of past events and achievements", delay: "0.2s" },
              { icon: Users, title: "Leadership Profiles", desc: "Showcasing organizational leadership and governance", delay: "0.4s" }
            ].map((feature, index) => (
              <div
                key={index}
                className="interactive-card glass-effect p-8 rounded-3xl shadow-2xl border border-white/10 animate-scale-in"
                style={{ animationDelay: feature.delay }}
              >
                <div className="relative">
                  <feature.icon className="w-16 h-16 text-purple-400 mx-auto mb-6 animate-pulse-glow" />
                  <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer hover:text-purple-400 transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
