
import React from 'react';

const LeadershipSection = () => {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={leader.image}
                  alt="Leadership"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{leader.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
