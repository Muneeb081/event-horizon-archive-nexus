import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
      url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f8f9fa'/%3E%3Ctext x='200' y='100' text-anchor='middle' font-family='Arial, sans-serif' font-size='32' font-weight='bold' fill='%23212529'%3EHotel Show%3C/text%3E%3Ctext x='200' y='140' text-anchor='middle' font-family='Arial, sans-serif' font-size='16' fill='%236c757d'%3EInternational Exhibition%3C/text%3E%3Cpath d='M150 170 L250 170 L250 220 L150 220 Z' fill='none' stroke='%23007bff' stroke-width='2'/%3E%3Cpath d='M150 195 L170 195 L170 220 L150 220 Z' fill='%23007bff'/%3E%3Cpath d='M180 195 L200 195 L200 220 L180 220 Z' fill='%23007bff'/%3E%3Cpath d='M210 195 L230 195 L230 220 L210 220 Z' fill='%23007bff'/%3E%3Cpath d='M240 195 L250 195 L250 220 L240 220 Z' fill='%23007bff'/%3E%3C/svg%3E",
      title: "HOTEL SHOW",
      subtitle: "International Exhibition",
      description: "Premier showcase of hospitality industry innovations"
    },
    {
      url: "http://www.eurovision2000.org/wp-content/uploads/2018/10/IMG-20180412-WA0015.jpg",
      title: "EXHIBITOR HOTEL SHOW",
      subtitle: "Industry Exhibition",
      description: "Professional exhibitors showcasing hospitality solutions"
    },
    {
      url: "http://www.eurovision2000.org/wp-content/uploads/2018/10/IMG-20180412-WA0019.jpg",
      title: "EXHIBITOR HOTEL SHOW",
      subtitle: "Trade Fair Display",
      description: "Comprehensive exhibition of hotel industry products"
    },
    {
      url: "http://www.eurovision2000.org/wp-content/uploads/2018/10/IMG-20180412-WA0058-1.jpg",
      title: "EXHIBITOR HOTEL SHOW",
      subtitle: "Professional Showcase",
      description: "Latest trends and innovations in hospitality"
    },
    {
      url: "http://www.eurovision2000.org/wp-content/uploads/2018/10/IMG-20180411-WA0023.jpg",
      title: "EXHIBITOR HOTEL SHOW",
      subtitle: "Business Networking",
      description: "Connecting industry professionals and suppliers"
    },
    {
      url: "http://www.eurovision2000.org/wp-content/uploads/2018/10/IMG-20180412-WA0026.jpg",
      title: "EXHIBITOR HOTEL SHOW",
      subtitle: "Market Solutions",
      description: "Innovative solutions for the hospitality sector"
    },
    {
      url: "http://www.eurovision2000.org/wp-content/uploads/2015/07/22528237_10154895551787478_347286391236017277_n.jpg",
      title: "HIGH POINT MARKET WEEK",
      subtitle: "Fall North Carolina 16 - 20 October 2021 USA",
      description: "Premier furniture and home furnishings market"
    },
    {
      url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f8f9fa'/%3E%3Ctext x='200' y='90' text-anchor='middle' font-family='Arial, sans-serif' font-size='24' font-weight='bold' fill='%23212529'%3EJA NEW YORK%3C/text%3E%3Ctext x='200' y='120' text-anchor='middle' font-family='Arial, sans-serif' font-size='16' fill='%236c757d'%3EFashion Trade Show%3C/text%3E%3Ctext x='200' y='160' text-anchor='middle' font-family='Arial, sans-serif' font-size='14' fill='%23495057'%3E24 - 26 October 2021%3C/text%3E%3Cpath d='M120 180 L280 180 L280 220 L120 220 Z' fill='none' stroke='%2328a745' stroke-width='2'/%3E%3Cpath d='M150 190 L170 210 L270 190' fill='none' stroke='%2328a745' stroke-width='2'/%3E%3C/svg%3E",
      title: "JA NEW YORK SHOW",
      subtitle: "24 - 26 October 2021",
      description: "International fashion and jewelry trade exhibition"
    }
  ];

  const nextPakistanSlide = () => {
    setCurrentPakistanSlide((prev) => (prev + 1) % pakistanPavilionImages.length);
  };

  const prevPakistanSlide = () => {
    setCurrentPakistanSlide((prev) => (prev - 1 + pakistanPavilionImages.length) % pakistanPavilionImages.length);
  };

  const nextHotelSlide = () => {
    setCurrentHotelSlide((prev) => (prev + 1) % hotelShowImages.length);
  };

  const prevHotelSlide = () => {
    setCurrentHotelSlide((prev) => (prev - 1 + hotelShowImages.length) % hotelShowImages.length);
  };

  useEffect(() => {
    const pakistanInterval = setInterval(() => {
      nextPakistanSlide();
    }, 4000);

    const hotelInterval = setInterval(() => {
      nextHotelSlide();
    }, 5000);

    return () => {
      clearInterval(pakistanInterval);
      clearInterval(hotelInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-700">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-purple-300/30 dark:from-blue-600/20 dark:to-purple-700/20 rounded-full animate-pulse blur-3xl transform hover:scale-110 transition-transform duration-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-gradient-to-br from-green-200/35 to-blue-300/35 dark:from-green-600/25 dark:to-blue-700/25 rounded-full animate-pulse delay-1000 blur-2xl transform hover:scale-105 transition-transform duration-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-br from-purple-200/40 to-pink-300/40 dark:from-purple-600/30 dark:to-pink-700/30 rounded-full animate-pulse delay-2000 blur-3xl transform hover:scale-110 transition-transform duration-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-gray-800/10 to-transparent animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8 transform hover:scale-105 transition-transform duration-500">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3 tracking-tight animate-fade-in">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 bg-clip-text text-transparent">
                EURO VISION
              </span>
              <span className="block text-lg md:text-xl bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-500 bg-clip-text text-transparent mt-2 font-semibold animate-fade-in delay-300">
                2000
              </span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 mx-auto rounded-full animate-pulse shadow-lg"></div>
          </div>
          
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in delay-500 transform hover:scale-105 transition-transform duration-300">
            Preserving European cultural heritage through comprehensive event documentation, 
            leadership showcase, and community engagement initiatives since 2000.
          </p>

          {/* Enhanced Pakistan Pavilion Slider */}
          <div className="mb-16 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 transform hover:scale-[1.02] transition-all duration-700 hover:shadow-3xl animate-fade-in delay-700">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 transform hover:scale-105 transition-transform duration-300">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
                PAKISTAN PAVILION
              </span>
            </h2>
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden group shadow-xl">
              <div className="relative w-full h-full">
                <img 
                  src={pakistanPavilionImages[currentPakistanSlide].url}
                  alt="Pakistan Pavilion"
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out transform group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevPakistanSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <button
                onClick={nextPakistanSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-sm md:text-lg font-medium leading-relaxed shadow-lg">
                  {pakistanPavilionImages[currentPakistanSlide].description}
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
              {pakistanPavilionImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPakistanSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 transform shadow-md ${
                    index === currentPakistanSlide 
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 scale-110 shadow-lg' 
                      : 'bg-gray-400 dark:bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Enhanced Hotel Show Slider */}
          <div className="mb-12 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 transform hover:scale-[1.02] transition-all duration-700 hover:shadow-3xl animate-fade-in delay-1000">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 transform hover:scale-105 transition-transform duration-300">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                HOTEL SHOW & EXHIBITOR
              </span>
            </h2>
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden group shadow-xl">
              <div className="relative w-full h-full">
                <img 
                  src={hotelShowImages[currentHotelSlide].url}
                  alt="Hotel Show"
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out transform group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevHotelSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <button
                onClick={nextHotelSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white text-lg md:text-xl font-bold shadow-lg mb-2">
                  {hotelShowImages[currentHotelSlide].title}
                </h3>
                <p className="text-white text-base md:text-lg mb-1 shadow-md opacity-90">
                  {hotelShowImages[currentHotelSlide].subtitle}
                </p>
                <p className="text-white text-sm md:text-base font-medium leading-relaxed shadow-md opacity-80">
                  {hotelShowImages[currentHotelSlide].description}
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
              {hotelShowImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentHotelSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 transform shadow-md ${
                    index === currentHotelSlide 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 scale-110 shadow-lg' 
                      : 'bg-gray-400 dark:bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
