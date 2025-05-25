
import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Chairman FPCCI S C', href: '#leadership' },
    { name: 'Event Calendar', href: '#events' },
    { name: 'Gem Stones', href: '#gemstones' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gray-800/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-600 dark:border-gray-700' 
        : 'bg-gray-700/90 dark:bg-gray-800/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              EURO VISION 2000
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-200 hover:text-white px-4 py-2 text-sm font-medium transition-all duration-300 relative group cursor-pointer"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-300 to-gray-100 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              <ThemeToggle />
              <button className="text-gray-200 hover:text-white p-2 rounded-full hover:bg-gray-600 dark:hover:bg-gray-700 transition-all duration-300">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-200 hover:text-white p-2 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-gray-800/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 shadow-lg animate-fade-in border border-gray-600 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-200 hover:text-white block px-4 py-3 text-base font-medium transition-colors duration-300 rounded-lg hover:bg-gray-600 dark:hover:bg-gray-700 w-full text-left"
                >
                  {item.name}
                </button>
              ))}
              <button className="text-gray-200 hover:text-white flex items-center px-4 py-3 text-base font-medium w-full text-left rounded-lg hover:bg-gray-600 dark:hover:bg-gray-700 transition-colors duration-300">
                <Search size={20} className="mr-3" />
                Search
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
