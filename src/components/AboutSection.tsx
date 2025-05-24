
import React, { useEffect, useRef, useState } from 'react';
import { Target, Award, Globe } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            About Our Organization
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Dedicated to preserving institutional memory and fostering professional excellence 
            through comprehensive event documentation and leadership development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            {[
              { icon: Target, title: "Our Mission", desc: "To create a comprehensive digital archive that preserves the rich history of our organization while providing modern tools for event management and community engagement.", color: "purple" },
              { icon: Award, title: "Excellence", desc: "Committed to maintaining the highest standards in professional development, institutional governance, and community service initiatives.", color: "blue" },
              { icon: Globe, title: "Global Impact", desc: "Building bridges across communities and fostering international cooperation through strategic partnerships and collaborative initiatives.", color: "cyan" }
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-start space-x-6 transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`p-4 bg-gradient-to-br from-${item.color}-500/20 to-${item.color}-600/20 rounded-2xl animate-pulse-glow`}>
                  <item.icon className={`w-8 h-8 text-${item.color}-400`} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={`transition-all duration-1000 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <div className="interactive-card glass-effect p-12 rounded-3xl shadow-2xl border border-white/10">
              <div className="space-y-8">
                {[
                  { value: "25+", label: "Years of Excellence", color: "purple" },
                  { value: "500+", label: "Events Documented", color: "blue" },
                  { value: "1000+", label: "Community Members", color: "cyan" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-4xl font-bold bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 bg-clip-text text-transparent mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-slate-300">{stat.label}</div>
                    {index < 2 && <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-6"></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
