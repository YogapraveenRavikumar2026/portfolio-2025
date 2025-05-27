import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        scrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md backdrop-blur-md bg-opacity-90 dark:bg-opacity-90' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="text-xl font-bold dark:text-white text-gray-900">
          <a href="#" onClick={() => scrollToSection('hero')} className="focus:outline-none">
            <span className="text-blue-600 dark:text-blue-400">Portfolio</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a onClick={() => scrollToSection('about')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">About</a>
          <a onClick={() => scrollToSection('skills')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">Skills</a>
          <a onClick={() => scrollToSection('projects')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">Projects</a>
          <a onClick={() => scrollToSection('education')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">Education</a>
          <a onClick={() => scrollToSection('contact')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">Contact</a>
          
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun className="text-yellow-400" size={20} /> : <Moon className="text-gray-700" size={20} />}
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleTheme} 
            className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun className="text-yellow-400" size={20} /> : <Moon className="text-gray-700" size={20} />}
          </button>
          
          <button 
            onClick={toggleMenu} 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? 
              <X className="text-gray-700 dark:text-white" size={24} /> : 
              <Menu className="text-gray-700 dark:text-white" size={24} />
            }
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-50 z-40 backdrop-blur-sm">
          <div className="h-full w-2/3 max-w-sm bg-white dark:bg-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out flex flex-col">
            <div className="p-6 flex flex-col space-y-6">
              <a onClick={() => scrollToSection('about')} className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">About</a>
              <a onClick={() => scrollToSection('skills')} className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">Skills</a>
              <a onClick={() => scrollToSection('projects')} className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">Projects</a>
              <a onClick={() => scrollToSection('education')} className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">Education</a>
              <a onClick={() => scrollToSection('contact')} className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">Contact</a>
            </div>
          </div>
          <div className="h-full w-1/3 ml-auto" onClick={toggleMenu}></div>
        </div>
      )}
    </header>
  );
};

export default Header;