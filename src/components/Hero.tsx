
import React from 'react';
import { Calendar, Archive, Users, Eye, Globe, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-gray-300/20 to-gray-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-gray-400/15 to-gray-500/15 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-gradient-to-br from-gray-200/25 to-gray-350/25 rounded-full animate-pulse delay-2000"></div>
        
        {/* Moving gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/30 to-transparent animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="animate-fade-in">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-4 tracking-tight">
              EURO VISION
              <span className="block text-4xl md:text-5xl bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent mt-2 font-semibold">
                2000
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Preserving European cultural heritage through comprehensive event documentation, 
            leadership showcase, and community engagement initiatives since 2000.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <button className="px-10 py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-gray-600 hover:to-gray-800">
              Explore Heritage
            </button>
            <button className="px-10 py-4 border-2 border-gray-400 text-gray-700 font-semibold rounded-full hover:bg-gray-50 hover:border-gray-500 transition-all duration-300 hover:shadow-lg">
              View Archives
            </button>
          </div>

          {/* Enhanced feature cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-24">
            {[
              { 
                icon: Calendar, 
                title: "Cultural Events", 
                desc: "Comprehensive European cultural event planning and documentation",
                color: "from-gray-500 to-gray-700"
              },
              { 
                icon: Archive, 
                title: "Heritage Archives", 
                desc: "Detailed preservation of European cultural heritage and traditions",
                color: "from-gray-600 to-gray-800"
              },
              { 
                icon: Users, 
                title: "Leadership Network", 
                desc: "Connecting European cultural leaders and governance networks",
                color: "from-gray-500 to-gray-700"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 border border-gray-200/50 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Statistics section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50">
            {[
              { icon: Eye, number: "25K+", label: "Events Documented" },
              { icon: Globe, number: "15", label: "Countries Connected" },
              { icon: Award, number: "500+", label: "Cultural Leaders" },
              { icon: Archive, number: "24", label: "Years of Heritage" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <stat.icon className="w-8 h-8 text-gray-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
