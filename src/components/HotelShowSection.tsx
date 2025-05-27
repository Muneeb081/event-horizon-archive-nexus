
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HotelShowSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const hotelShowImages = [
    {
      title: "HOTEL SHOW & EXHIBITOR",
      subtitle: "International Hotel & Hospitality Exhibition",
      description: "Premier showcase of hospitality industry innovations",
      gradient: "from-blue-600 to-purple-700"
    },
    {
      title: "LUXURY ACCOMMODATIONS",
      subtitle: "Premium Hotel Services",
      description: "Experience world-class hospitality standards",
      gradient: "from-emerald-600 to-teal-700"
    },
    {
      title: "CONFERENCE FACILITIES",
      subtitle: "Modern Meeting Spaces",
      description: "State-of-the-art conference and event venues",
      gradient: "from-orange-600 to-red-700"
    },
    {
      title: "CULINARY EXCELLENCE",
      subtitle: "Fine Dining Experience",
      description: "International cuisine and gourmet specialties",
      gradient: "from-purple-600 to-pink-700"
    },
    {
      title: "BUSINESS SERVICES",
      subtitle: "Executive Solutions",
      description: "Complete business support and concierge services",
      gradient: "from-indigo-600 to-blue-700"
    },
    {
      title: "WELLNESS & SPA",
      subtitle: "Relaxation & Recreation",
      description: "Premium wellness facilities and spa services",
      gradient: "from-green-600 to-emerald-700"
    },
    {
      title: "EXHIBITION SPACES",
      subtitle: "Trade Fair Venues",
      description: "Comprehensive exhibition and display facilities",
      gradient: "from-yellow-600 to-orange-700"
    },
    {
      title: "NETWORKING EVENTS",
      subtitle: "Industry Connections",
      description: "Professional networking and partnership opportunities",
      gradient: "from-rose-600 to-pink-700"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % hotelShowImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + hotelShowImages.length) % hotelShowImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6 transition-colors duration-500">
            HOTEL SHOW & EXHIBITOR
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-500">
            Discover premium hospitality services and exhibition opportunities that showcase the finest in hotel industry excellence.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="relative h-96 md:h-[500px] bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
            {/* Slides */}
            <div 
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {hotelShowImages.map((slide, index) => (
                <div
                  key={index}
                  className={`min-w-full h-full bg-gradient-to-br ${slide.gradient} flex items-center justify-center relative`}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="text-center text-white z-10 px-8">
                    <h3 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                      {slide.title}
                    </h3>
                    <p className="text-xl md:text-2xl mb-4 drop-shadow-md">
                      {slide.subtitle}
                    </p>
                    <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto drop-shadow-md">
                      {slide.description}
                    </p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                  <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 z-20"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 z-20"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
              {hotelShowImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Slide Counter */}
          <div className="flex justify-center mt-6">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {currentSlide + 1} / {hotelShowImages.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelShowSection;
