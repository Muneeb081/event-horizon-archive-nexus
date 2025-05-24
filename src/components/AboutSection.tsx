
import React from 'react';
import { Target, Award, Globe } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-100/50 to-transparent rounded-full transform translate-x-48 -translate-y-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Our Organization
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to preserving institutional memory and fostering professional excellence 
            through comprehensive event documentation and leadership development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-indigo-100 rounded-full">
                <Target className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To create a comprehensive digital archive that preserves the rich history of our 
                  organization while providing modern tools for event management and community engagement.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-purple-100 rounded-full">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Excellence</h3>
                <p className="text-gray-600">
                  Committed to maintaining the highest standards in professional development, 
                  institutional governance, and community service initiatives.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Impact</h3>
                <p className="text-gray-600">
                  Building bridges across communities and fostering international cooperation 
                  through strategic partnerships and collaborative initiatives.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20">
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">25+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                <div className="text-gray-600">Events Documented</div>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                <div className="text-gray-600">Community Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
