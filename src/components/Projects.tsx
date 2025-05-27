import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo?: string;
}

const projectsData: Project[] = [
  {
    title: "Social Media Analytics and Its Impact on User Engagement",
    description: "Used analytics to study user engagement and behavior, applying sentiment analysis and predictive tools for insight-driven decisions.",
    image: "https://images.pexels.com/photos/8088489/pexels-photo-8088489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/praveenkakashi2005/SMA-Main-project1",
    demo: "https://example.com"
  },
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    github: "https://github.com/praveenkakashi2005/FSD_project",
    demo: "https://example.com"
  },
  {
    title: "Smart Object Detection System",
    description: "his project implements a deep learning-based object detection system that accurately identifies and classifies multiple objects within images or video streams in real time.",
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Python","TensorFlow ", " PyTorch ", "OpenCV", "YOLO ", "Faster R-CNN"],
    github: "https://github.com/praveenkakashi2005/dl-object-detection"
  },
  {
    title: "Natural Language Processing Chatbot",
    description: "An intelligent chatbot that uses NLP techniques to understand and respond to user queries in a conversational manner.",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Python", "NLTK", "SpaCy", "Flask", "Machine Learning"],
    github: "https://github.com/yourusername/nlp-chatbot"
  }
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
            (entry.target as HTMLElement).style.animationDelay = `${index * 0.1}s`;
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  const handleCardClick = () => {
    window.open(project.github, '_blank');
  };

  return (
    <div 
      ref={cardRef}
      onClick={handleCardClick}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden opacity-0 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-blue-600 dark:bg-blue-500 p-2 rounded-full shadow-lg">
          <Github className="w-5 h-5 text-white" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white flex items-center">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span 
              key={tag} 
              className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors"
          >
            <Github size={18} />
            <span>View Source</span>
          </a>
          
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors"
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="projects" 
      ref={projectsRef}
      className="py-20 bg-gray-50 dark:bg-gray-800 opacity-0"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work and personal projects. Click on any project to view its source code on GitHub.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
