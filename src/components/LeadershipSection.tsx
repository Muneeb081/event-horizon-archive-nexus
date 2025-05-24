
import React from 'react';

const LeadershipSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-100/50 to-transparent rounded-full transform -translate-x-48 translate-y-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Leadership Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the distinguished leaders who guide our organization towards continued success and innovation.
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-xl border border-indigo-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="w-48 h-48 mx-auto lg:mx-0 mb-6 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-44 h-44 bg-white rounded-full flex items-center justify-center">
                  <div className="text-6xl font-bold text-indigo-600">CS</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Chairman FPCCI S C</h3>
              <p className="text-indigo-600 font-semibold mb-4">Chief Executive Officer</p>
              <div className="flex justify-center lg:justify-start space-x-4">
                <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Leadership Philosophy</h4>
                <p className="text-gray-600">
                  "Leading with vision, integrity, and a commitment to excellence. Our organization 
                  thrives on collaborative leadership and innovative approaches to community development."
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Achievements</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <span>Transformed organizational efficiency by 40%</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Expanded community outreach programs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Established strategic international partnerships</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
