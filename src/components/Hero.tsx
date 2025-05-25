
import React, { useState, useEffect } from 'react';
import { Calendar, Archive, Users, Eye, Globe, Award } from 'lucide-react';

const Hero = () => {
  const [currentPakistanSlide, setCurrentPakistanSlide] = useState(0);
  const [currentHotelSlide, setCurrentHotelSlide] = useState(0);

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-100">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-gray-200/30 to-gray-300/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-gray-300/25 to-gray-400/25 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-gradient-to-br from-gray-100/35 to-gray-250/35 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/20 to-transparent animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="animate-fade-in">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 tracking-tight">
              EURO VISION
              <span className="block text-2xl md:text-3xl bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent mt-2 font-semibold">
                2000
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Preserving European cultural heritage through comprehensive event documentation, 
            leadership showcase, and community engagement initiatives since 2000.
          </p>

          {/* Pakistan Pavilion Slider */}
          <div className="mb-16 bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">PAKISTAN PAVILION</h2>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img 
                src={pakistanPavilionImages[currentPakistanSlide].url}
                alt="Pakistan Pavilion"
                className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-lg font-medium">
                  {pakistanPavilionImages[currentPakistanSlide].description}
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
              {pakistanPavilionImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPakistanSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPakistanSlide ? 'bg-gray-700' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Hotel Show Slider */}
          <div className="mb-16 bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">HOTEL SHOW & EXHIBITOR</h2>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img 
                src={hotelShowImages[currentHotelSlide].url}
                alt="Hotel Show"
                className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold">
                  {hotelShowImages[currentHotelSlide].heading}
                </h3>
              </div>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
              {hotelShowImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentHotelSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentHotelSlide ? 'bg-gray-700' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
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
                className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 border border-gray-200/50 group"
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50">
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
