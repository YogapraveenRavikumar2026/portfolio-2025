import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Code } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center pt-20 opacity-0"
    >
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight whitespace-nowrap">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Yogapraveen Ravikumar</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-gray-200">
            Artificial Intelligence and Machine Learning  student
          </h2>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            Turning ideas into intelligent solutions using AI, Full Stack Development, and Computer Vision.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <a 
              href="#contact"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </a>
            <a 
              href="#projects"
              className="px-6 py-3 border border-gray-400 hover:border-white text-white font-medium rounded-lg transition-colors hover:bg-white hover:text-gray-900 flex items-center"
            >
              <Code className="w-5 h-5 mr-2" />
              View My Work
            </a>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/praveenkakashi2005" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:yogagkn@gmail.com"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="relative">
            <div className={`absolute inset-0 rounded-full ${theme === 'dark' ? 'bg-blue-600' : 'bg-blue-200'} blur-3xl opacity-20 transform -rotate-6`}></div>
            <img 
              src="/images/img1.jpeg"
              alt="Profile" 
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl"
            />
          </div>
          </div>
      </div>
    </section>
  );
};

export default Hero;