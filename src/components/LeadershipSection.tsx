
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const LeadershipSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const leaders = [
    {
      image: "http://www.eurovision2000.org/wp-content/uploads/2015/08/pp1.jpg",
      description: "Syed Yousaf Raza Gillani, Prime Minister of Pakistan."
    },
    {
      image: "https://postimg.cc/D8HzS1Z0",
      description: "H.E Richard G. Olson, Ambassador of the United States of America."
    },
    {
      image: "https://postimg.cc/KRRzc0mC",
      description: "His Excellency, Alfredo Leoni, Ambassador of Brazil."
    },
    {
      image: "http://www.eurovision2000.org/wp-content/uploads/2015/08/governor.jpg",
      description: "S.M Muneer Patron-in-Chief, Iftikhar Ali Malik Chairman UBG - Mian Muhammad Adress President FPCCI - Governor KPK."
    },
    {
      image: "http://www.eurovision2000.org/wp-content/uploads/2015/08/DSC04721.jpg",
      description: "S.M Muneer, Patron-in-Chief UBG - Chief Executive, Trade Development Authority of Pakistan."
    },
    {
      image: "http://www.eurovision2000.org/wp-content/uploads/2015/08/DSC04571.jpg",
      description: "Mian Muhammad Idress, President, The Federation of Pakistan Chambers of Commerce & Industry."
    },
    {
      image: "http://www.eurovision2000.org/wp-content/uploads/2018/07/18-1-1.jpg",
      description: "His Excellency Joao Paulo Sabido Costa, Ambassador of Portugal."
    },
    {
      image: "http://www.eurovision2000.org/wp-content/uploads/2018/07/9.jpg",
      description: "H.E Barrister Syed Ali Zafar, Caretaker Federal Minister for Information, Broadcasting, Parliamentary Affairs, Law & Justice."
    },
    {
      image: "http://www.eurovision2000.org/wp-content/uploads/2018/07/36524143_2128860224066145_6711410927175991296_n.jpg",
      description: "Distinguished Leadership"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % leaders.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [leaders.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % leaders.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + leaders.length) % leaders.length);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gray-200/50 to-transparent dark:from-gray-700/50 rounded-full transform -translate-x-48 translate-y-48 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            European Leadership Excellence
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the distinguished leaders who guide our organization towards continued cultural preservation and innovation across Europe.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="relative h-96 md:h-[500px]">
              <img 
                src={leaders[currentSlide].image}
                alt="Leadership"
                className="w-full h-full object-cover object-center transition-all duration-1000 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Description */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-white text-lg md:text-xl font-medium leading-relaxed">
                  {leaders[currentSlide].description}
                </p>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {leaders.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
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

export default LeadershipSection;
