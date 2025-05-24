
import React from 'react';
import { Gem, Star, Shield, Sparkles } from 'lucide-react';

const GemStonesSection = () => {
  const gemstones = [
    {
      name: "Royal Sapphire",
      origin: "Kashmir",
      rarity: "Exceptional",
      icon: Gem,
      color: "from-blue-500 to-blue-700"
    },
    {
      name: "Imperial Emerald",
      origin: "Colombia",
      rarity: "Rare",
      icon: Star,
      color: "from-emerald-500 to-emerald-700"
    },
    {
      name: "Pink Diamond",
      origin: "Australia",
      rarity: "Ultra Rare",
      icon: Shield,
      color: "from-pink-400 to-pink-600"
    },
    {
      name: "Golden Topaz",
      origin: "Brazil",
      rarity: "Premium",
      icon: Sparkles,
      color: "from-yellow-400 to-yellow-600"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-100/30 to-transparent rounded-full transform -translate-x-48 translate-y-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Precious Gem Stones
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our curated collection of exceptional gemstones, each with unique properties 
            and origins that showcase nature's extraordinary artistry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {gemstones.map((gem, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl hover:scale-105 transition-all duration-500"
            >
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${gem.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <gem.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                {gem.name}
              </h3>

              <div className="space-y-2 text-center">
                <p className="text-gray-600">
                  <span className="font-medium">Origin:</span> {gem.origin}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Rarity:</span> {gem.rarity}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <button className="w-full px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-indigo-100">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Gemstone Authentication Services
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our certified gemologists provide professional authentication, appraisal, 
              and certification services for precious stones and jewelry collections.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GemStonesSection;
