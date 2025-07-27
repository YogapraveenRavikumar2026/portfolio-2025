import React, { useEffect, useRef } from 'react';
import { SiPython, SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTensorflow, SiPytorch, SiGit, SiMysql, SiVercel, SiHtml5, SiCss3, SiPostman } from 'react-icons/si';
import { Coffee, Code } from 'lucide-react';

interface Skill {
  name: string;
  icon?: JSX.Element;
  note?: string;
}

const languages: Skill[] = [
  { name: 'Java', icon: <Coffee size={28} color="#007396" /> },
  { name: 'Python', icon: <SiPython size={28} color="#3776AB" /> },
  { name: 'JavaScript', icon: <SiJavascript size={28} color="#F7DF1E" /> },
];

const frameworks: Skill[] = [
  { name: 'React.js', icon: <SiReact size={28} color="#61DAFB" />, note: '(basic projects)' },
  { name: 'Node.js', icon: <SiNodedotjs size={28} color="#339933" /> },
  { name: 'Express.js', icon: <SiExpress size={28} color="#000000" /> },
];

const databases: Skill[] = [
  { name: 'MongoDB', icon: <SiMongodb size={28} color="#47A248" />, note: '(beginner level)' },
  { name: 'MySQL', icon: <SiMysql size={28} color="#4479A1" /> },
];

const tools: Skill[] = [
  { name: 'Git', icon: <SiGit size={28} color="#F05032" /> },
  { name: 'Postman', icon: <SiPostman size={28} color="#FF6C37" /> },
  { name: 'VS Code', icon: <SiVercel size={28} color="#007ACC" /> },
  { name: 'OpenCV', icon: <Code size={28} color="#5C3EE8" />, note: '(basic)' },
  { name: 'TensorFlow', icon: <SiTensorflow size={28} color="#FF6F00" />, note: '(familiar)' },
  { name: 'PyTorch', icon: <SiPytorch size={28} color="#EE4C2C" />, note: '(familiar)' },
];

const others: Skill[] = [
  { name: 'HTML5', icon: <SiHtml5 size={28} color="#E34F26" /> },
  { name: 'CSS3', icon: <SiCss3 size={28} color="#1572B6" /> },
  { name: 'REST API', icon: <Code size={28} color="#4B5563" /> },
  { name: 'LeetCode (DSA problem-solving in Java)' },
];

const SkillList: React.FC<{ title: string; skills: Skill[] }> = ({ title, skills }) => (
  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
      {title}
    </h3>
    <div className="space-y-4">
      {skills.map((skill) => (
        <div key={skill.name} className="flex items-center space-x-3 mb-1">
          {skill.icon && <span>{skill.icon}</span>}
          <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
          {skill.note && <span className="text-xs text-gray-500 ml-2">{skill.note}</span>}
        </div>
      ))}
    </div>
  </div>
);

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <SkillList title="Languages" skills={languages} />
          <SkillList title="Frameworks & Libraries" skills={frameworks} />
          <SkillList title="Databases" skills={databases} />
          <SkillList title="Tools & Technologies" skills={tools} />
          <SkillList title="Others" skills={others} />
        </div>
      </div>
    </section>
  );
};

export default Skills;