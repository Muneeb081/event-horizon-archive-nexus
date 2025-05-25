
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={`absolute inset-0 w-6 h-6 text-gray-600 dark:text-gray-400 transition-all duration-300 ${
            theme === 'light' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
          }`} 
        />
        <Moon 
          className={`absolute inset-0 w-6 h-6 text-gray-600 dark:text-gray-400 transition-all duration-300 ${
            theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
          }`} 
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
