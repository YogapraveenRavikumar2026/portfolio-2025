import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    // Add hover state for interactive elements
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], [data-cursor-hover]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-50 cursor-rotate"
      style={{
        left: 0,
        top: 0,
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
      }}
    >
      <motion.div
        className="relative"
        style={{
          transform: 'rotate(var(--scroll-rotation, 0deg))',
          transformOrigin: 'center',
          transition: 'transform 0.1s linear'
        }}
        animate={{
          x: -8, // Center the dot relative to cursor
          y: -8, // Center the dot relative to cursor
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0.7 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 300,
          mass: 0.5
        }}
      >
        <div className={`w-4 h-4 rounded-full ${
          isHovered 
            ? 'bg-blue-600 dark:bg-blue-400 mix-blend-normal' 
            : 'bg-blue-800 dark:bg-blue-600 mix-blend-difference'
        }`}></div>
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;
