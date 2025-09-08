import React, { useState, useEffect, useRef } from 'react';
import { 
  SiPython, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiTensorflow, SiPytorch, 
  SiGit, SiMysql, SiHtml5, SiCss3, SiExpress, SiSpring, SiNumpy, SiPandas, 
  SiScikitlearn, SiOpencv, SiPostgresql 
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';

interface Skill {
  id: string;
  name: string;
  icon: JSX.Element;
  description: string;
  category: string;
  level?: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

const skillsData: Omit<Skill, 'x' | 'y' | 'vx' | 'vy' | 'size'>[] = [
  // Programming Languages
  {
    id: 'python',
    name: 'Python',
    icon: <SiPython className="w-full h-full" />,
    description: 'Proficient in Python with experience in web development, data analysis, and machine learning. Familiar with various Python frameworks and libraries.',
    category: 'languages',
    level: 'Advanced'
  },
  {
    id: 'java',
    name: 'Java',
    icon: <div className="text-[#007396] w-full h-full flex items-center justify-center"><FaJava className="w-3/4 h-3/4" /></div>,
    description: 'Strong knowledge of Java programming language, including object-oriented programming, data structures, and algorithms.',
    category: 'languages',
    level: 'Intermediate'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: <SiJavascript className="w-full h-full text-yellow-400" />,
    description: 'Experienced in modern JavaScript (ES6+) for both frontend and backend development.',
    category: 'languages',
    level: 'Advanced'
  },

  // Backend
  {
    id: 'nodejs',
    name: 'Node.js',
    icon: <SiNodedotjs className="w-full h-full text-green-600" />,
    description: 'Experience in building scalable server-side applications using Node.js runtime environment.',
    category: 'backend',
    level: 'Intermediate'
  },
  {
    id: 'express',
    name: 'Express.js',
    icon: <SiExpress className="w-full h-full text-gray-800 dark:text-white" />,
    description: 'Proficient in building web applications and RESTful APIs using Express.js framework.',
    category: 'backend',
    level: 'Intermediate'
  },
  {
    id: 'spring',
    name: 'Spring Boot',
    icon: <SiSpring className="w-full h-full text-green-500" />,
    description: 'Experience with Spring Boot for building enterprise-grade Java applications.',
    category: 'backend',
    level: 'Intermediate'
  },

  // Libraries & Frameworks
  {
    id: 'numpy',
    name: 'NumPy',
    icon: <SiNumpy className="w-full h-full text-blue-600" />,
    description: 'Proficient in numerical computing with NumPy for efficient array operations and mathematical functions.',
    category: 'ml',
    level: 'Advanced'
  },
  {
    id: 'pandas',
    name: 'Pandas',
    icon: <SiPandas className="w-full h-full text-blue-700" />,
    description: 'Skilled in data manipulation and analysis using Pandas for working with structured data.',
    category: 'ml',
    level: 'Advanced'
  },
  {
    id: 'matplotlib',
    name: 'Matplotlib',
    icon: <div className="w-full h-full flex items-center justify-center text-blue-500">
            <span className="text-lg font-bold">Mpl</span>
          </div>,
    description: 'Experience in creating static, animated, and interactive visualizations with Matplotlib.',
    category: 'ml',
    level: 'Intermediate'
  },
  {
    id: 'seaborn',
    name: 'Seaborn',
    icon: <div className="w-full h-full flex items-center justify-center text-pink-600">
            <span className="text-lg font-bold">Sns</span>
          </div>,
    description: 'Skilled in statistical data visualization using Seaborn for creating informative and attractive statistical graphics.',
    category: 'ml',
    level: 'Intermediate'
  },
  {
    id: 'scikit-learn',
    name: 'Scikit-learn',
    icon: <SiScikitlearn className="w-full h-full text-orange-500" />,
    description: 'Proficient in machine learning with Scikit-learn for various supervised and unsupervised learning algorithms.',
    category: 'ml',
    level: 'Advanced'
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    icon: <SiTensorflow className="w-full h-full text-orange-500" />,
    description: 'Experience with TensorFlow for building and training deep learning models.',
    category: 'ml',
    level: 'Intermediate'
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    icon: <SiPytorch className="w-full h-full text-red-500" />,
    description: 'Experience with PyTorch for deep learning and neural network development.',
    category: 'ml',
    level: 'Intermediate'
  },
  {
    id: 'opencv',
    name: 'OpenCV',
    icon: <SiOpencv className="w-full h-full text-blue-500" />,
    description: 'Proficient in computer vision tasks using OpenCV for image and video processing.',
    category: 'ml',
    level: 'Intermediate'
  },

  // Frontend
  {
    id: 'react',
    name: 'React.js',
    icon: <SiReact className="w-full h-full text-blue-500" />,
    description: 'Proficient in building responsive and interactive user interfaces using React.js and its ecosystem.',
    category: 'frontend',
    level: 'Advanced'
  },
  {
    id: 'html',
    name: 'HTML',
    icon: <SiHtml5 className="w-full h-full text-orange-500" />,
    description: 'Expert in writing semantic HTML5 markup for web applications.',
    category: 'frontend',
    level: 'Advanced'
  },
  {
    id: 'css',
    name: 'CSS',
    icon: <SiCss3 className="w-full h-full text-blue-500" />,
    description: 'Skilled in CSS3 for styling and creating responsive layouts with modern techniques.',
    category: 'frontend',
    level: 'Advanced'
  },

  // Databases
  {
    id: 'mongodb',
    name: 'MongoDB',
    icon: <SiMongodb className="w-full h-full text-green-600" />,
    description: 'Experience with MongoDB for NoSQL database management, including schema design and query optimization.',
    category: 'database',
    level: 'Intermediate'
  },
  {
    id: 'mysql',
    name: 'MySQL',
    icon: <SiMysql className="w-full h-full text-blue-600" />,
    description: 'Proficient in MySQL for relational database management and complex SQL queries.',
    category: 'database',
    level: 'Intermediate'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    icon: <SiPostgresql className="w-full h-full text-blue-700" />,
    description: 'Experience with PostgreSQL for advanced relational database features and performance optimization.',
    category: 'database',
    level: 'Intermediate'
  },

  // Concepts & Tools
  {
    id: 'git',
    name: 'Git & GitHub',
    icon: <SiGit className="w-full h-full text-orange-600" />,
    description: 'Proficient in version control using Git and GitHub for collaborative development and code management.',
    category: 'tools',
    level: 'Advanced'
  },
  {
    id: 'ml',
    name: 'Machine Learning',
    icon: <div className="w-full h-full flex items-center justify-center text-purple-500">
            <span className="text-lg font-bold">ML</span>
          </div>,
    description: 'Strong foundation in machine learning concepts, algorithms, and model evaluation techniques.',
    category: 'concepts',
    level: 'Advanced'
  },
  {
    id: 'dl',
    name: 'Deep Learning',
    icon: <div className="w-full h-full flex items-center justify-center text-blue-500">
            <span className="text-lg font-bold">DL</span>
          </div>,
    description: 'Experience with deep learning architectures including CNNs, RNNs, and Transformers.',
    category: 'concepts',
    level: 'Intermediate'
  },
  {
    id: 'cv',
    name: 'Computer Vision',
    icon: <div className="w-full h-full flex items-center justify-center text-green-500">
            <span className="text-lg font-bold">CV</span>
          </div>,
    description: 'Experience with computer vision tasks including image classification, object detection, and image processing.',
    category: 'concepts',
    level: 'Intermediate'
  },
  {
    id: 'nlp',
    name: 'NLP',
    icon: <div className="w-full h-full flex items-center justify-center text-pink-500">
            <span className="text-lg font-bold">NLP</span>
          </div>,
    description: 'Experience with Natural Language Processing techniques and libraries for text analysis and processing.',
    category: 'concepts',
    level: 'Intermediate'
  },
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    icon: <div className="w-full h-full flex items-center justify-center text-yellow-500">
            <span className="text-xs text-center">DSA</span>
          </div>,
    description: 'Strong understanding of fundamental data structures and algorithms, with problem-solving skills.',
    category: 'concepts',
    level: 'Advanced'
  },
  {
    id: 'oop',
    name: 'OOP',
    icon: <div className="w-full h-full flex items-center justify-center text-red-500">
            <span className="text-lg font-bold">OOP</span>
          </div>,
    description: 'Proficient in Object-Oriented Programming principles and design patterns.',
    category: 'concepts',
    level: 'Advanced'
  }
];

const FloatingSkills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  // Initialize skills with random positions and velocities
  useEffect(() => {
    const updateContainerSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    // Set initial size and add resize listener
    updateContainerSize();
    window.addEventListener('resize', updateContainerSize);

    // Initialize skills with random positions and velocities
    const initialSkills = skillsData.map(skill => ({
      ...skill,
      x: Math.random() * (window.innerWidth * 0.8) + (window.innerWidth * 0.1),
      y: Math.random() * (window.innerHeight * 0.8) + (window.innerHeight * 0.1),
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: 40 + Math.random() * 20, // Random size between 40 and 60
    }));

    setSkills(initialSkills);

    return () => {
      window.removeEventListener('resize', updateContainerSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Animation loop
  useEffect(() => {
    if (skills.length === 0 || !containerRef.current) return;

    const animate = () => {
      setSkills(prevSkills => {
        return prevSkills.map(skill => {
          // Update position
          let newX = skill.x + skill.vx;
          let newY = skill.y + skill.vy;
          let newVx = skill.vx;
          let newVy = skill.vy;

          // Bounce off walls
          const radius = skill.size / 2;
          if (newX - radius < 0 || newX + radius > containerSize.width) {
            newVx = -newVx * 0.9; // Dampen the velocity slightly
            newX = newX - radius < 0 ? radius : containerSize.width - radius;
          }
          if (newY - radius < 0 || newY + radius > containerSize.height) {
            newVy = -newVy * 0.9; // Dampen the velocity slightly
            newY = newY - radius < 0 ? radius : containerSize.height - radius;
          }

          // Add some random movement
          newVx += (Math.random() - 0.5) * 0.2;
          newVy += (Math.random() - 0.5) * 0.2;

          // Limit speed
          const speed = Math.sqrt(newVx * newVx + newVy * newVy);
          const maxSpeed = 2;
          if (speed > maxSpeed) {
            newVx = (newVx / speed) * maxSpeed;
            newVy = (newVy / speed) * maxSpeed;
          }

          return {
            ...skill,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
          };
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [skills.length, containerSize]);

  // Handle mouse movement for interaction
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    setSkills(prevSkills => {
      return prevSkills.map(skill => {
        // Calculate distance to mouse
        const dx = skill.x - mouseX;
        const dy = skill.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // If mouse is close, push the skill away
        const repulsionRadius = 100;
        if (distance < repulsionRadius) {
          const force = (repulsionRadius - distance) / repulsionRadius;
          const angle = Math.atan2(dy, dx);
          const fx = Math.cos(angle) * force * 5;
          const fy = Math.sin(angle) * force * 5;
          
          return {
            ...skill,
            vx: skill.vx + fx,
            vy: skill.vy + fy,
          };
        }
        
        return skill;
      });
    });
  };

  // Get color based on category
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'languages': return 'text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300';
      case 'frontend': return 'text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300';
      case 'backend': return 'text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300';
      case 'database': return 'text-yellow-500 hover:text-yellow-600 dark:text-yellow-400 dark:hover:text-yellow-300';
      case 'ml': return 'text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300';
      case 'concepts': return 'text-pink-500 hover:text-pink-600 dark:text-pink-400 dark:hover:text-pink-300';
      case 'tools': return 'text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300';
      default: return 'text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300';
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">My Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Click on any skill to learn more about my experience with it.
          </p>
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setActiveCategory('languages')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'languages'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-blue-700 hover:bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700'
              }`}
            >
              Languages
            </button>
            <button
              onClick={() => setActiveCategory('frontend')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'frontend'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-green-700 hover:bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700'
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveCategory('backend')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'backend'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-purple-700 hover:bg-purple-50 dark:bg-gray-800 dark:text-purple-400 dark:hover:bg-gray-700'
              }`}
            >
              Backend
            </button>
            <button
              onClick={() => setActiveCategory('database')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'database'
                  ? 'bg-yellow-600 text-white'
                  : 'bg-white text-yellow-700 hover:bg-yellow-50 dark:bg-gray-800 dark:text-yellow-400 dark:hover:bg-gray-700'
              }`}
            >
              Database
            </button>
            <button
              onClick={() => setActiveCategory('ml')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'ml'
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-red-700 hover:bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700'
              }`}
            >
              ML/AI
            </button>
          </div>
        </div>
      </div>

      <div className="relative h-[50vh] md:h-[60vh] w-full">
        <div 
          ref={containerRef}
          className="absolute inset-0 overflow-hidden rounded-xl bg-white/30 dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-gray-700 mx-4 md:mx-0"
          onMouseMove={handleMouseMove}
        >
          {skills.map((skill) => {
            // Only render skills that match the active category (or all if 'all' is selected)
            if (activeCategory !== 'all' && skill.category !== activeCategory) return null;
            
            return (
              <div
                key={skill.id}
                onClick={() => setSelectedSkill(skill)}
                className={`absolute cursor-pointer transition-all duration-300 hover:scale-125 hover:z-10 ${getCategoryColor(skill.category)}`}
                style={{
                  left: `${skill.x - skill.size / 2}px`,
                  top: `${skill.y - skill.size / 2}px`,
                  width: `${skill.size}px`,
                  height: `${skill.size}px`,
                  filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
                  opacity: activeCategory === 'all' || skill.category === activeCategory ? 1 : 0,
                  transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
                }}
                title={skill.name}
              >
                <div className="w-full h-full flex items-center justify-center hover:animate-pulse">
                  {skill.icon}
                </div>
              </div>
            );
          })}
          
          {/* Empty state */}
          {skills.length > 0 && activeCategory !== 'all' && 
           !skills.some(skill => skill.category === activeCategory) && (
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No skills found in this category
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Skill Detail Modal */}
      {selectedSkill && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedSkill(null)}
        >
          <div 
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-xl ${getCategoryColor(selectedSkill.category).replace('text-', 'bg-').replace('-500', '-100')} dark:bg-opacity-20`} style={{ width: '60px', height: '60px' }}>
                  {React.cloneElement(selectedSkill.icon, { className: 'w-full h-full' })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedSkill.name}
                  </h3>
                  <div className="flex items-center mt-1">
                    <span className={`inline-block w-2 h-2 rounded-full mr-2 ${getCategoryColor(selectedSkill.category)}`}></span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                      {selectedSkill.category}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedSkill(null)}
                className="text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-white p-1 -m-1"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="mt-4">
              <p className="text-gray-600 dark:text-gray-300">
                {selectedSkill.description}
              </p>
              
              {selectedSkill.level && (
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-1">
                    <span>Proficiency</span>
                    <span>{selectedSkill.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div 
                      className={`h-2.5 rounded-full ${getCategoryColor(selectedSkill.category)}`}
                      style={{ 
                        width: selectedSkill.level === 'Advanced' ? '90%' : 
                               selectedSkill.level === 'Intermediate' ? '70%' : '50%' 
                      }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedSkill(null)}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingSkills;
