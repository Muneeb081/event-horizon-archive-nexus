
import React, { useState, useEffect } from 'react';
import { Calendar, Archive, Users, Eye, Globe, Award } from 'lucide-react';

const Hero = () => {
  const [currentPakistanSlide, setCurrentPakistanSlide] = useState(0);
  const [currentHotelSlide, setCurrentHotelSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const pakistanPavilionImages = [
    {
      url: "http://www.eurovision2000.org/wp-content/uploads/2015/07/Pan1-2.jpg",
      description: "PAKISTAN PAVILION - Showcasing Pakistani culture and heritage at international exhibitions"
    },
    {
      url: "http://www.eurovision2000.org/wp-content/uploads/2015/07/1558532_378202995691113_9057766392115673844_n.jpg",
      description: "Pakistan Pavilion Exhibition Display"
    },
    {
      url: "http://www.eurovision2000.org/wp-content/uploads/2015/07/10483858_378203062357773_4360643402593847385_n.jpg",
      description: "Pakistan Pavilion Interactive Section"
    },
    {
      url: "http://www.eurovision2000.org/wp-content/uploads/2015/07/P2.jpg",
      description: "Pakistan Pavilion Cultural Showcase"
    },
    {
      url: "http://www.eurovision2000.org/wp-content/uploads/2015/07/P1-1.jpg",
      description: "Pakistan Pavilion Main Entrance"
    },
    {
      url: "http://www.eurovision2000.org/wp-content/uploads/2015/07/P3-3.jpg",
      description: "Pakistan Pavilion Exhibition Hall"
    },
    {
      url: "http://www.eurovision2000.org/wp-content/uploads/2015/07/Pic-of-Pakistan-Booth.jpg",
      description: "Pakistan Booth Overview"
    }
  ];

  const hotelShowImages = [
    {
      url: "http://www.eurovision2000.org/wp-content/uploads/2018/10/logo.png",
      heading: "Hotel Show"
    },
    {
      url: "http://www.eurovision2000.org/wp-content/uploads/2018/10/IMG-20180412-WA0015.jpg",
      heading: "Exhibitor Hotel Show"
    },
    {
      url: "http://www.eurovision2000.org/wp-content/uploads/2018/10/IMG-20180412-WA0019.jpg",
      heading: "Exhibitor Hotel Show"
    },
    {
      url: "http://www.eurovision2000.org/wp-content/uploads/2018/10/IMG-20180412-WA0058-1.jpg",
      heading: "Exhibitor Hotel Show"
    },
    {
      url: "http://www.eurovision2000.org/wp-content/uploads/2018/10/IMG-20180411-WA0023.jpg",
      heading: "Exhibitor Hotel Show"
    },
    {
      url: "http://www.eurovision2000.org/wp-content/uploads/2018/10/IMG-20180412-WA0026.jpg",
      heading: "Exhibitor Hotel Show"
    },
    {
      url: "http://www.eurovision2000.org/wp-content/uploads/2015/07/22528237_10154895551787478_347286391236017277_n.jpg",
      heading: "High Point Market Week Fall North Carolina 16 - 20 October 2021 USA"
    },
    {
      url: "http://www.eurovision2000.org/wp-content/uploads/2015/08/JaNY-logo.png",
      heading: "JA New York Show 24 - 26 October 2021"
    }
  ];

  useEffect(() => {
    const pakistanInterval = setInterval(() => {
      setCurrentPakistanSlide((prev) => (prev + 1) % pakistanPavilionImages.length);
    }, 4000);

    const hotelInterval = setInterval(() => {
      setCurrentHotelSlide((prev) => (prev + 1) % hotelShowImages.length);
    }, 5000);

    return () => {
      clearInterval(pakistanInterval);
      clearInterval(hotelInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-purple-300/20 dark:from-blue-600/10 dark:to-purple-700/10 rounded-full animate-pulse blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-gradient-to-br from-green-200/25 to-blue-300/25 dark:from-green-600/15 dark:to-blue-700/15 rounded-full animate-pulse delay-1000 blur-xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-br from-purple-200/30 to-pink-300/30 dark:from-purple-600/20 dark:to-pink-700/20 rounded-full animate-pulse delay-2000 blur-xl"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 dark:via-gray-800/5 to-transparent animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4 tracking-tight">
              EURO VISION
              <span className="block text-xl md:text-2xl bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-500 bg-clip-text text-transparent mt-2 font-semibold">
                2000
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-500 mx-auto rounded-full animate-pulse"></div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Preserving European cultural heritage through comprehensive event documentation, 
            leadership showcase, and community engagement initiatives since 2000.
          </p>

          {/* Pakistan Pavilion Slider */}
          <div className="mb-16 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50 transform hover:scale-[1.02] transition-all duration-500">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">PAKISTAN PAVILION</h2>
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden group">
              <img 
                src={pakistanPavilionImages[currentPakistanSlide].url}
                alt="Pakistan Pavilion"
                className="w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6">
                <p className="text-white text-sm md:text-lg font-medium">
                  {pakistanPavilionImages[currentPakistanSlide].description}
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
              {pakistanPavilionImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPakistanSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentPakistanSlide ? 'bg-gray-700 dark:bg-gray-300' : 'bg-gray-400 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Hotel Show Slider */}
          <div className="mb-16 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50 transform hover:scale-[1.02] transition-all duration-500">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">HOTEL SHOW & EXHIBITOR</h2>
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden group">
              <img 
                src={hotelShowImages[currentHotelSlide].url}
                alt="Hotel Show"
                className="w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6">
                <h3 className="text-white text-lg md:text-xl font-semibold">
                  {hotelShowImages[currentHotelSlide].heading}
                </h3>
              </div>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
              {hotelShowImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentHotelSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentHotelSlide ? 'bg-gray-700 dark:bg-gray-300' : 'bg-gray-400 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Enhanced feature cards */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-20">
            {[
              { 
                icon: Calendar, 
                title: "Cultural Events", 
                desc: "Comprehensive European cultural event planning and documentation",
                color: "from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600"
              },
              { 
                icon: Archive, 
                title: "Heritage Archives", 
                desc: "Detailed preservation of European cultural heritage and traditions",
                color: "from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600"
              },
              { 
                icon: Users, 
                title: "Leadership Network", 
                desc: "Connecting European cultural leaders and governance networks",
                color: "from-green-500 to-green-700 dark:from-green-400 dark:to-green-600"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                  <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Enhanced statistics section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16 md:mt-20 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200/50 dark:border-gray-700/50">
            {[
              { icon: Eye, number: "25K+", label: "Events Documented" },
              { icon: Globe, number: "15", label: "Countries Connected" },
              { icon: Award, number: "500+", label: "Cultural Leaders" },
              { icon: Archive, number: "24", label: "Years of Heritage" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-gray-600 dark:text-gray-400 mx-auto mb-3 group-hover:scale-110 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-all duration-300" />
                <div className="text-xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-1 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
