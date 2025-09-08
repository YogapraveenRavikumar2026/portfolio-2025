import React, { useState } from 'react';
import { SiPython, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTensorflow, SiPytorch, SiGit, SiMysql, SiHtml5, SiCss3, SiPostman, SiSpring, SiOpencv, SiPandas, SiNumpy, SiScikitlearn, SiPostgresql, SiJava } from 'react-icons/si';
import { Code } from 'lucide-react';

interface Skill {
  id: string;
  name: string;
  icon: JSX.Element;
  description: string;
  category: string;
  level?: string;
}

const skillsData: Skill[] = [
  {
    id: 'python',
    name: 'Python',
    icon: <SiPython size={40} className="text-[#3776AB]" />,
    description: 'Proficient in Python with experience in web development, data analysis, and automation. Familiar with Python frameworks like Flask and FastAPI.',
    category: 'languages',
    level: 'Advanced'
  },
  {
    id: 'java',
    name: 'Java',
    icon: <SiJava size={40} className="text-[#007396]" />,
    description: 'Strong knowledge of Java programming language, including object-oriented programming, data structures, and algorithms.',
    category: 'languages',
    level: 'Intermediate'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: <SiJavascript size={40} className="text-[#F7DF1E]" />,
    description: 'Experienced in modern JavaScript (ES6+) for both frontend and backend development.',
    category: 'languages',
    level: 'Advanced'
  },
  {
    id: 'react',
    name: 'React',
    icon: <SiReact size={40} className="text-[#61DAFB]" />,
    description: 'Proficient in building responsive and interactive user interfaces using React.js and its ecosystem (Hooks, Context API, React Router).',
    category: 'frontend',
    level: 'Advanced'
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    icon: <SiNodedotjs size={40} className="text-[#339933]" />,
    description: 'Experience in building scalable server-side applications using Node.js and Express.js.',
    category: 'backend',
    level: 'Intermediate'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    icon: <SiMongodb size={40} className="text-[#47A248]" />,
    description: 'Experience with MongoDB for NoSQL database management, including schema design and query optimization.',
    category: 'database',
    level: 'Intermediate'
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    icon: <SiTensorflow size={40} className="text-[#FF6F00]" />,
    description: 'Experience with TensorFlow for building and training deep learning models.',
    category: 'ml',
    level: 'Intermediate'
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    icon: <SiPytorch size={40} className="text-[#EE4C2C]" />,
    description: 'Experience with PyTorch for deep learning and neural network development.',
    category: 'ml',
    level: 'Intermediate'
  },
  {
    id: 'git',
    name: 'Git',
    icon: <SiGit size={40} className="text-[#F05032]" />,
    description: 'Proficient in version control using Git and GitHub for collaborative development.',
    category: 'tools',
    level: 'Advanced'
  },
  {
    id: 'mysql',
    name: 'MySQL',
    icon: <SiMysql size={40} className="text-[#4479A1]" />,
    description: 'Experience with MySQL for relational database management and SQL queries.',
    category: 'database',
    level: 'Intermediate'
  },
  {
    id: 'html5',
    name: 'HTML5',
    icon: <SiHtml5 size={40} className="text-[#E34F26]" />,
    description: 'Proficient in writing semantic HTML5 markup for web applications.',
    category: 'frontend',
    level: 'Advanced'
  },
  {
    id: 'css3',
    name: 'CSS3',
    icon: <SiCss3 size={40} className="text-[#1572B6]" />,
    description: 'Skilled in CSS3 for styling and creating responsive layouts with Flexbox and Grid.',
    category: 'frontend',
    level: 'Advanced'
  }
];

const SkillsShowcase: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'languages', name: 'Languages' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Database' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'tools', name: 'Tools' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            My Skills
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
            Click on any skill to learn more about my experience
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              onClick={() => setSelectedSkill(skill)}
              className="group relative flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:scale-105 border border-gray-200 dark:border-gray-700"
            >
              <div className="mb-3">
                {skill.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white text-center">
                {skill.name}
              </h3>
              {skill.level && (
                <div className="mt-2 text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  {skill.level}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Skill Detail Modal */}
        {selectedSkill && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedSkill(null)}>
            <div 
              className="bg-white dark:bg-gray-800 rounded-xl max-w-md w-full p-6 shadow-2xl transform transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {selectedSkill.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedSkill.name}
                    </h3>
                    {selectedSkill.level && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {selectedSkill.level}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-white"
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 dark:text-gray-300">
                  {selectedSkill.description}
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedSkill(null)}
                  className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsShowcase;
