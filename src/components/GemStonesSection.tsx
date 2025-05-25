
import React from 'react';
import { Gem, Star, Shield, Sparkles, Crown, Diamond } from 'lucide-react';

const GemStonesSection = () => {
  const gemstones = [
    {
      name: "Royal Blue Sapphire",
      origin: "Kashmir, India",
      rarity: "Exceptional",
      price: "$15,000 - $50,000 per carat",
      description: "Kashmir sapphires are renowned for their velvety blue color and exceptional clarity.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      icon: Gem,
      color: "from-blue-500 to-blue-700"
    },
    {
      name: "Colombian Emerald",
      origin: "Muzo, Colombia", 
      rarity: "Rare",
      price: "$8,000 - $25,000 per carat",
      description: "Colombian emeralds are prized for their vivid green color and exceptional transparency.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
      icon: Star,
      color: "from-emerald-500 to-emerald-700"
    },
    {
      name: "Pink Diamond",
      origin: "Argyle Mine, Australia",
      rarity: "Ultra Rare",
      price: "$100,000 - $1,000,000 per carat",
      description: "Argyle pink diamonds are among the rarest and most valuable gemstones in the world.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
      icon: Diamond,
      color: "from-pink-400 to-pink-600"
    },
    {
      name: "Imperial Topaz",
      origin: "Ouro Preto, Brazil",
      rarity: "Premium",
      price: "$2,000 - $8,000 per carat",
      description: "Imperial topaz displays a beautiful golden to orange-pink color unique to Brazilian mines.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      icon: Crown,
      color: "from-yellow-400 to-yellow-600"
    },
    {
      name: "Padparadscha Sapphire",
      origin: "Sri Lanka",
      rarity: "Exceptional",
      price: "$10,000 - $30,000 per carat",
      description: "These rare sapphires display a delicate peachy-pink color reminiscent of a tropical sunset.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
      icon: Sparkles,
      color: "from-orange-400 to-pink-500"
    },
    {
      name: "Paraiba Tourmaline",
      origin: "Paraiba, Brazil",
      rarity: "Ultra Rare",
      price: "$15,000 - $60,000 per carat",
      description: "Known for their electric blue to green colors caused by copper and manganese traces.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      icon: Shield,
      color: "from-cyan-400 to-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800 relative overflow-hidden transition-all duration-500">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-100/30 dark:from-yellow-900/20 to-transparent rounded-full transform -translate-x-48 translate-y-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6 transition-colors duration-500">
            Precious Gem Stones Collection
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-500">
            Discover our curated collection of exceptional gemstones, each with unique properties 
            and origins that showcase nature's extraordinary artistry and geological wonders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gemstones.map((gem, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-700 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-600 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={gem.image}
                  alt={gem.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${gem.color} rounded-full flex items-center justify-center shadow-lg`}>
                  <gem.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  {gem.name}
                </h3>

                <div className="space-y-2 mb-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-medium text-gray-700 dark:text-gray-200">Origin:</span> {gem.origin}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-medium text-gray-700 dark:text-gray-200">Rarity:</span> {gem.rarity}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-medium text-gray-700 dark:text-gray-200">Price Range:</span> {gem.price}
                  </p>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {gem.description}
                </p>

                <button className="w-full px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GemStonesSection;
