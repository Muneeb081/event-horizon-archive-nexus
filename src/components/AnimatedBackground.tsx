
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full animate-float blur-xl"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-blue-500/15 to-cyan-500/15 rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full animate-float blur-xl" style={{ animationDelay: '4s' }}></div>
      <div className="absolute bottom-20 right-10 w-36 h-36 bg-gradient-to-br from-purple-600/25 to-pink-500/25 rounded-full animate-float blur-xl" style={{ animationDelay: '1s' }}></div>
      
      {/* Animated waves */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-wave"></div>
        <div className="absolute top-1/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-wave" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-wave" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Pulsing orbs */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-400 rounded-full animate-pulse-glow"></div>
      <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-blue-400 rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-3/4 w-5 h-5 bg-cyan-400 rounded-full animate-pulse-glow" style={{ animationDelay: '3s' }}></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
