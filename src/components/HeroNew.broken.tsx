import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code } from 'lucide-react';
import CustomCursor from './CustomCursor';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get the target element's position
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000; // 1 second
      let start: number | null = null;
      
      // Add rotation class to body
      document.body.classList.add('rotating');
      
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        // Ease in-out function for smooth acceleration/deceleration
        const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        const percent = Math.min(progress / duration, 1);
        const easedPercent = easeInOutQuad(percent);
        
        // Smooth scrolling
        window.scrollTo(0, startPosition + distance * easedPercent);
        
        if (progress < duration) {
          window.requestAnimationFrame(step);
        } else {
          // Remove rotation class after scroll completes
          setTimeout(() => {
            document.body.classList.remove('rotating');
          }, 200);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative"
    >
      <CustomCursor />
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30 dark:from-black/30 dark:to-black/60 -z-10" />
      
      <div className="container px-6 py-8 md:py-16">
        <motion.div
          initial={{ opacity: 0, rotateX: 90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 origin-center"
        >
          {/* Profile Picture */}
          <motion.div
            initial={{ rotateY: 180, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
          >
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>

          {/* Introduction Text */}
          <div className="text-center md:text-left">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Yogapraveen R
              </h1>
              <motion.p 
                className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-2"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Full Stack Developer
              </motion.p>
              <motion.p 
                className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                I build intelligent solutions and beautiful digital experiences
              </motion.p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  View My Work
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium rounded-lg transition-colors"
                >
                  Contact Me
                </motion.a>
              </div>
              
              <div className="flex justify-center md:justify-start space-x-4">
                {[
                  { icon: <Github className="w-5 h-5" />, href: 'https://github.com/yourusername', label: 'GitHub' },
                  { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
                  { icon: <Mail className="w-5 h-5" />, href: 'mailto:your.email@example.com', label: 'Email' },
                  { icon: <Code className="w-5 h-5" />, href: 'https://leetcode.com/yourusername', label: 'LeetCode' }
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ y: -2 }}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all"
                    aria-label={item.label}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ rotateX: 90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection('about')}
          className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
          aria-label="Scroll to next section"
        >
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </motion.div>
        );
      default:
        return (
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="section-container flex items-center justify-center"
          >
            <h2 className="text-3xl font-bold text-white">
              {sections.find(s => s.id === currentSection)?.label} Section
            </h2>
          </motion.div>
        );
    }
  };

  return (
    <section 
      id="home" 
      className="h-screen w-full relative overflow-hidden"
    >
      <CustomCursor />
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30 dark:from-black/30 dark:to-black/60 -z-10" />
      
      {/* Main Content */}
      <AnimatePresence mode="wait">
        <div className={`h-full w-full ${isRotating ? 'rotating' : ''}`}>
          {renderSection()}
        </div>
      </AnimatePresence>
      
      {/* Floating Navigation Buttons */}
      <div className="fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 sm:gap-4 z-50">
        {sections.map((section) => (
          <motion.button
            key={section.id}
            onClick={handleButtonClick(section.id)}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
            disabled={isRotating}
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xl sm:text-2xl shadow-lg transition-all duration-300 group ${
              currentSection === section.id 
                ? 'bg-blue-600/80 text-white' 
                : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-blue-600/50'
            }`}
            aria-label={`Show ${section.label}`}
            title={section.label}
          >
            <span className="group-hover:scale-110 transition-transform">
              {section.icon}
            </span>
            <span className="absolute right-full mr-2 sm:mr-3 px-2 sm:px-3 py-1 bg-blue-600 text-white text-xs sm:text-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {section.label}
            </span>
          </motion.button>
        ))}
      </div>
      
      <div className="container px-6 py-8 md:py-16">
        <motion.div
          initial={{ opacity: 0, rotateX: 90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 origin-center"
        >
          {/* Profile Picture */}
          <motion.div
            initial={{ rotateY: 180, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
          >
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1"
              whileHover={{ 
                rotateY: 360,
                transition: { 
                  repeat: Infinity, 
                  duration: 4, 
                  ease: "linear",
                  repeatType: "loop"
                } 
              }}
            >
              <img
                src="/images/img1.jpeg"
                alt="Yogapraveen R"
                className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800 pointer-events-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = 'https://via.placeholder.com/320';
                }}
              />
            </motion.div>
          </motion.div>
          
          {/* Content */}
          <div className="text-center md:text-left mt-6 md:mt-0">
            <motion.div 
              initial={{ rotateX: 90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full mb-4 md:mb-6"
            >
              AI/ML & Full Stack Developer
            </motion.div>
            
            <motion.h1 
              initial={{ rotateX: 90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white"
            >
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Yogapraveen R</span>
            </motion.h1>
            
            <motion.p 
              initial={{ rotateX: 90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-100 mb-6 md:mb-8 max-w-2xl"
            >
              I build intelligent solutions and beautiful digital experiences
            </motion.p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleButtonClick('projects')}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                View My Work
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium rounded-lg transition-colors"
              >
                Contact Me
              </motion.a>
            </div>
            
            <div className="flex justify-center md:justify-start space-x-4">
              {[
                { icon: <Github className="w-5 h-5" />, href: 'https://github.com/YogapraveenRavikumar2026', label: 'GitHub' },
                { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/yogapraveen-ravikumar-33507a2bb/', label: 'LinkedIn' },
                { icon: <Mail className="w-5 h-5" />, href: 'mailto:yogagkn@gmail.com', label: 'Email' },
                { icon: <Code className="w-5 h-5" />, href: 'https://leetcode.com/u/praveen532005/', label: 'LeetCode' }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -2 }}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all"
                  aria-label={item.label}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ rotateX: 90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={handleButtonClick('about')}
          className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
          aria-label="Rotate to next section"
        >
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
