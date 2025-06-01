
import React from 'react';
import { X, Gem } from 'lucide-react';

interface GemstoneModalProps {
  gemstone: {
    id: string;
    name: string;
    image: string;
    price: string;
    category: string;
    description?: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const GemstoneModal = ({ gemstone, isOpen, onClose }: GemstoneModalProps) => {
  if (!isOpen || !gemstone) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform animate-scale-in border border-gray-200/50 dark:border-gray-700/50">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
          >
            <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>
          
          <img
            src={gemstone.image}
            alt={gemstone.name}
            className="w-full h-64 md:h-80 object-cover rounded-t-3xl"
          />
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-t-3xl">
            <div className="flex items-center space-x-2 mb-2">
              <Gem className="w-6 h-6 text-purple-400" />
              <span className="text-purple-300 font-medium text-sm uppercase tracking-wide">
                {gemstone.category}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {gemstone.name}
            </h2>
            <p className="text-xl font-semibold text-purple-300">
              {gemstone.price}
            </p>
          </div>
        </div>
        
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Category</h3>
              <p className="text-purple-600 dark:text-purple-400 font-medium">{gemstone.category}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Price</h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold text-xl">{gemstone.price}</p>
            </div>
          </div>
          
          {gemstone.description && (
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center space-x-2">
                <Gem className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span>Description</span>
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {gemstone.description}
              </p>
            </div>
          )}
          
          <div className="mt-8 flex justify-center">
            <button
              onClick={onClose}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GemstoneModal;
