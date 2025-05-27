
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HotelShowSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const hotelShowImages = [
    {
      image: "http://www.eurovision2000.org/wp-content/uploads/2015/08/pp1.jpg",
      title: "HOTEL SHOW & EXHIBITOR",
      subtitle: "International Hotel & Hospitality Exhibition",
      description: "Premier showcase of hospitality industry innovations"
    },
    {
      image: "http://www.eurovision2000.org/wp-content/uploads/2015/08/us2.jpg",
      title: "LUXURY ACCOMMODATIONS",
      subtitle: "Premium Hotel Services",
      description: "Experience world-class hospitality standards"
    },
    {
      image: "http://www.eurovision2000.org/wp-content/uploads/2015/08/5x7.jpg",
      title: "CONFERENCE FACILITIES",
      subtitle: "Modern Meeting Spaces",
      description: "State-of-the-art conference and event venues"
    },
    {
      image: "http://www.eurovision2000.org/wp-content/uploads/2015/08/governor.jpg",
      title: "CULINARY EXCELLENCE",
      subtitle: "Fine Dining Experience",
      description: "International cuisine and gourmet specialties"
    },
    {
      image: "http://www.eurovision2000.org/wp-content/uploads/2015/08/DSC04721.jpg",
      title: "BUSINESS SERVICES",
      subtitle: "Executive Solutions",
      description: "Complete business support and concierge services"
    },
    {
      image: "http://www.eurovision2000.org/wp-content/uploads/2015/08/DSC04571.jpg",
      title: "WELLNESS & SPA",
      subtitle: "Relaxation & Recreation",
      description: "Premium wellness facilities and spa services"
    },
    {
      image: "http://www.eurovision2000.org/wp-content/uploads/2018/07/18-1-1.jpg",
      title: "EXHIBITION SPACES",
      subtitle: "Trade Fair Venues",
      description: "Comprehensive exhibition and display facilities"
    },
    {
      image: "http://www.eurovision2000.org/wp-content/uploads/2018/07/9.jpg",
      title: "NETWORKING EVENTS",
      subtitle: "Industry Connections",
      description: "Professional networking and partnership opportunities"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % hotelShowImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [hotelShowImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % hotelShowImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + hotelShowImages.length) % hotelShowImages.length);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden transition-all duration-500">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gray-200/50 to-transparent dark:from-gray-700/50 rounded-full transform -translate-x-48 translate-y-48 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-blue-200/30 to-transparent dark:from-blue-700/20 rounded-full transform translate-x-36 -translate-y-36 animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6 transform hover:scale-105 transition-transform duration-300">
            HOTEL SHOW & EXHIBITOR
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in delay-300">
            Discover premium hospitality services and exhibition opportunities that showcase the finest in hotel industry excellence.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transform hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50">
            <div className="relative h-96 md:h-[500px] group">
              <img 
                src={hotelShowImages[currentSlide].image}
                alt="Hotel Show & Exhibitor"
                className="w-full h-full object-cover object-center transition-all duration-1000 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300"></div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">
                  {hotelShowImages[currentSlide].title}
                </h3>
                <p className="text-white text-lg md:text-xl mb-2 drop-shadow-md opacity-90">
                  {hotelShowImages[currentSlide].subtitle}
                </p>
                <p className="text-white text-base md:text-lg font-medium leading-relaxed drop-shadow-md opacity-80">
                  {hotelShowImages[currentSlide].description}
                </p>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {hotelShowImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 transform ${
                  index === currentSlide 
                    ? 'bg-gray-700 dark:bg-gray-300 scale-110' 
                    : 'bg-gray-400 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelShowSection;
