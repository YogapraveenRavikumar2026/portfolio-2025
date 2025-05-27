import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'languages' | 'frameworks' | 'tools';
}

const skillsData: Skill[] = [
  { name: 'Python', level: 90, category: 'languages' },
  { name: 'Java', level: 85, category: 'languages' },
  { name: 'JavaScript', level: 85, category: 'languages' },
  { name: 'TypeScript', level: 80, category: 'languages' },
  { name: 'React.js', level: 85, category: 'frameworks' },
  { name: 'Node.js', level: 80, category: 'frameworks' },
  { name: 'MongoDB', level: 75, category: 'frameworks' },
  { name: 'Express.js', level: 75, category: 'frameworks' },
  { name: 'OpenCV', level: 70, category: 'tools' },
  { name: 'TensorFlow', level: 65, category: 'tools' },
  { name: 'PyTorch', level: 60, category: 'tools' },
  { name: 'Git', level: 85, category: 'tools' },
];

const SkillBar: React.FC<{ skill: Skill; delay: number }> = ({ skill, delay }) => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!barRef.current) return;
    
    const element = barRef.current;
    
    // Initially set width to 0
    element.style.width = '0%';
    
    // Trigger animation after a delay
    const timeoutId = setTimeout(() => {
      element.style.width = `${skill.level}%`;
    }, 100 + delay * 100);
    
    return () => clearTimeout(timeoutId);
  }, [skill.level, delay]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
        <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          ref={barRef}
          className="h-2.5 rounded-full transition-all duration-1000 ease-out bg-blue-600 dark:bg-blue-500"
          style={{ width: '0%' }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const languages = skillsData.filter(skill => skill.category === 'languages');
  const frameworks = skillsData.filter(skill => skill.category === 'frameworks');
  const tools = skillsData.filter(skill => skill.category === 'tools');

  return (
    <section 
      id="skills" 
      ref={skillsRef}
      className="py-20 bg-white dark:bg-gray-900 opacity-0"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the technologies I've been working with recently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
              Languages
            </h3>
            <div className="space-y-4">
              {languages.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index} />
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
              Frameworks & Libraries
            </h3>
            <div className="space-y-4">
              {frameworks.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index + languages.length} />
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
              Tools & Technologies
            </h3>
            <div className="space-y-4">
              {tools.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index + languages.length + frameworks.length} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;