
import React, { useState, useEffect } from 'react';
import { Gem } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface Gemstone {
  id: string;
  name: string;
  image: string;
  price: string;
  category: string;
  description?: string;
}

const GemStonesSection = () => {
  const [gemstones, setGemstones] = useState<Gemstone[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGemstones = async () => {
      try {
        const { data } = await supabase
          .from('gemstones')
          .select('*')
          .order('created_at', { ascending: false });

        setGemstones(data || []);
      } catch (error) {
        console.error('Error fetching gemstones:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGemstones();

    // Listen for real-time updates
    const channel = supabase
      .channel('gemstones-changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'gemstones' },
        () => fetchGemstones()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 dark:border-white mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Loading gemstones collection...</p>
          </div>
        </div>
      </section>
    );
  }

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

        {gemstones.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gemstones.map((gem) => (
              <div
                key={gem.id}
                className="group bg-white dark:bg-gray-700 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-600 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={gem.image}
                    alt={gem.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop';
                    }}
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                    <Gem className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                    {gem.name}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-medium text-gray-700 dark:text-gray-200">Category:</span> {gem.category}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-medium text-gray-700 dark:text-gray-200">Price:</span> {gem.price}
                    </p>
                  </div>

                  {gem.description && (
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {gem.description}
                    </p>
                  )}

                  <button className="w-full px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Gem className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 text-lg">No gemstones available in the collection at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GemStonesSection;
