import React, { useEffect, useRef } from 'react';
import { Code, Brain, Eye } from 'lucide-react';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={aboutRef}
      className="py-20 bg-gray-50 dark:bg-gray-800 opacity-0"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed">
            I'm a passionate software engineering student with a deep interest in solving complex problems through technology. 
            My journey in tech began with simple programming projects but quickly evolved into a dedication to mastering 
            multiple programming paradigms and creating impactful applications.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed">
            Currently pursuing a Bachelor's degree in Engineering, I focus on combining theoretical knowledge with practical 
            implementation. I enjoy collaborating on team projects and constantly seek opportunities to learn and grow in this 
            ever-evolving field.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <Brain className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-900 dark:text-white">AI & Machine Learning</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Developing intelligent systems that can learn from data and make predictions or decisions.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-900 dark:text-white">Full Stack Development</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Building complete web applications with both front-end interfaces and back-end functionality.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <Eye className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-900 dark:text-white">Computer Vision</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Creating systems that can interpret and understand the visual world through digital images and videos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;