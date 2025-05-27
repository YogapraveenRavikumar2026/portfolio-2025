import React, { useEffect, useRef } from 'react';
import { BookOpen, Award } from 'lucide-react';

const Education: React.FC = () => {
  const educationRef = useRef<HTMLDivElement>(null);

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

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => {
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="education" 
      ref={educationRef}
      className="py-20 bg-white dark:bg-gray-900 opacity-0"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="md:w-1/3 bg-blue-600 dark:bg-blue-700 text-white p-6 flex flex-col items-center justify-center">
              <BookOpen size={48} className="mb-4" />
              <h3 className="text-xl font-bold text-center">Bachelor of Engineering</h3>
              <p className="text-blue-100 text-center mt-2">2024 - Present</p>
            </div>
            
            <div className="md:w-2/3 p-6">
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Computer Science & Engineering
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Pursuing a comprehensive engineering program focused on computer science fundamentals, 
                software development, and specialized tracks in AI and machine learning.
              </p>
              
              <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                <Award size={18} className="mr-2 text-blue-600 dark:text-blue-400" />
                Relevant Coursework:
              </h5>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 ml-6">
                <li>Data Structures and Algorithms</li>
                <li>Machine Learning & Artificial Intelligence</li>
                <li>Web Development & Software Engineering</li>
                <li>Computer Vision & Image Processing</li>
                <li>Database Systems & Cloud Computing</li>
              </ul>
              
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                  <Award size={18} className="mr-2 text-blue-600 dark:text-blue-400" />
                  Achievements:
                </h5>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 ml-6">
                  <li>1st Place at Project Olympiad-VOLANT’24. </li>
                  <li>1st Place at ML Fusion-SPARK'24.</li>
                  <li>Organizer for Neural Nexus-THREADS’25.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
              Additional Certifications
            </h3>
            
            <div className="space-y-6 mt-4">
              <div className="flex items-start">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                  <Award size={20} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">Machine Learning Specialization</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Coursera - 2023</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                  <Award size={20} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">Full Stack Web Development</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Udemy - 2022</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                  <Award size={20} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">Computer Vision with OpenCV</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">edX - 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;