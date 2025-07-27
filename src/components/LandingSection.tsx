import React, { useEffect, useRef } from 'react';

const LandingSection: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    document.addEventListener('mousemove', moveCursor);
    // Hide cursor on touch devices
    const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (cursor && isTouchDevice()) {
      cursor.style.display = 'none';
    }
    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', zIndex: 100 }}>
      <video
        className="bg-video"
        src="/Backgroundtheme.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: 1,
          pointerEvents: 'none',
          background: '#181a20',
        }}
      />
      <div
        className="overlay"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(20, 22, 30, 0.55)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      <div
        className="center-content"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 3,
          textAlign: 'center',
          width: '90vw',
          maxWidth: 700,
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 700,
            letterSpacing: 2,
            marginBottom: '1rem',
            color: '#fff',
            textShadow: '0 0 24px #00f0ff, 0 0 8px #232946',
          }}
        >
          Hi, I'm Yogapraveen
        </h1>
        <p
          style={{
            fontSize: '1.4rem',
            fontWeight: 400,
            color: '#b0b8d1',
            textShadow: '0 0 12px #232946',
            marginBottom: '2.5rem',
          }}
        >
          AI/ML Enthusiast & Full Stack Developer passionate about building modern, intelligent web experiences.
        </p>
        <button
          onClick={handleScrollToProjects}
          style={{
            padding: '0.85rem 2.2rem',
            fontSize: '1.1rem',
            fontWeight: 600,
            borderRadius: '999px',
            border: 'none',
            background: 'linear-gradient(90deg, #00f0ff 0%, #232946 100%)',
            color: '#fff',
            boxShadow: '0 0 16px 2px #00f0ff99',
            cursor: 'pointer',
            outline: 'none',
            transition: 'background 0.2s, box-shadow 0.2s',
            textShadow: '0 0 8px #232946',
          }}
          onMouseOver={e => (e.currentTarget.style.background = 'linear-gradient(90deg, #232946 0%, #00f0ff 100%)')}
          onMouseOut={e => (e.currentTarget.style.background = 'linear-gradient(90deg, #00f0ff 0%, #232946 100%)')}
        >
          View Projects
        </button>
      </div>
      <div
        ref={cursorRef}
        className="glow-cursor"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 60,
          height: 60,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10,
          background: 'radial-gradient(circle, #00f0ff 0%, #232946 80%, transparent 100%)',
          boxShadow: '0 0 40px 10px #00f0ff99, 0 0 0 0 #232946',
          mixBlendMode: 'lighten',
          opacity: 0.7,
          transition: 'background 0.2s',
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      />
      <style>{`
        @media (max-width: 600px) {
          .center-content h1 { font-size: 2rem !important; }
          .center-content p { font-size: 1rem !important; }
          .glow-cursor { width: 36px !important; height: 36px !important; }
        }
      `}</style>
    </div>
  );
};

export default LandingSection; 