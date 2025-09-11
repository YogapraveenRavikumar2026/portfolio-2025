import React, { useState } from 'react';
import './Chatbot.css';

// SVG Chatbot Icon
const ChatbotIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22H20V20H12C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12V13.43C20 14.16 19.57 14.82 18.9 15.1C18.32 15.34 17.68 15.34 17.1 15.1C15.79 14.57 15 13.32 15 12V8C15 7.45 15.45 7 16 7C16.55 7 17 7.45 17 8V12C17 12.55 17.45 13 18 13C18.55 13 19 12.55 19 12V12C19 8.13 15.87 5 12 5C8.13 5 5 8.13 5 12C5 15.17 7.38 17.76 10.39 18.43C10.14 18.78 10 19.2 10 19.64C10 20.2 10.2 20.71 10.52 21.1C5.83 20.6 2 16.7 2 12C2 6.48 6.48 2 12 2Z" 
      fill="currentColor"
    />
    <path 
      d="M22 16H18C17.45 16 17 15.55 17 15V12C17 11.45 17.45 11 18 11H22C22.55 11 23 11.45 23 12V15C23 15.55 22.55 16 22 16ZM19 14H21V13H19V14Z" 
      fill="currentColor"
    />
  </svg>
);

const faqData = [
  {
    question: '👋 What is your name?',
    answer: 'My name is Yogapraveen Ravikumar. I\'m a passionate developer and tech enthusiast!'
  },
  {
    question: '💻 What are your main skills?',
    answer: `I specialize in Full Stack Development with expertise in:
    • Frontend: React, TypeScript, JavaScript, HTML5, CSS3
    • Backend: Node.js, Python, Express
    • Databases: MongoDB, PostgreSQL
    • Machine Learning: TensorFlow, PyTorch
    • DevOps: Docker, AWS, CI/CD`
  },
  {
    question: '📧 How can I contact you?',
    answer: 'Feel free to reach out through the Contact section of this website or connect with me on LinkedIn. I\'d love to hear from you!'
  },
  {
    question: '📄 Can I see your resume?',
    answer: 'Absolutely! You can find my resume in the Resume section of this website. It includes my work experience, education, skills, and projects.'
  },
  {
    question: '🎓 What is your education background?',
    answer: 'I have a strong academic background in Computer Science with a focus on software development and machine learning. Check out the Education section for more details!'
  },
  {
    question: '🚀 What projects have you worked on?',
    answer: 'I\'ve worked on various projects ranging from web applications to machine learning models. You can explore my Projects section to see some of my recent work and contributions.'
  },
  {
    question: '🔧 What technologies are you currently learning?',
    answer: 'I\'m always expanding my skill set! Currently, I\'m diving deeper into cloud technologies, advanced React patterns, and exploring new ML frameworks.'
  },
  {
    question: '💼 What kind of work opportunities are you looking for?',
    answer: 'I\'m open to exciting opportunities in software development, particularly in full-stack development and machine learning roles. Feel free to reach out if you think I\'d be a good fit for your team!'
  }
];

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = faqData.filter(item => 
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={() => setOpen(!open)}>
        <ChatbotIcon />
        {open ? ' Close Chat' : ' Need Help?'}
      </button>
      {open && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <div className="chatbot-title">
              <ChatbotIcon />
              <h3>How can I help you?</h3>
            </div>
            <button 
              className="chatbot-close" 
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
            >
              ×
            </button>
          </div>
          
          <div className="chatbot-search">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="chatbot-content">
            {filteredFaqs.length > 0 ? (
              <ul>
                {filteredFaqs.map((item, idx) => (
                  <li key={idx}>
                    <button 
                      className={`chatbot-question ${selected === idx ? 'active' : ''}`} 
                      onClick={() => setSelected(selected === idx ? null : idx)}
                    >
                      {item.question}
                    </button>
                    {selected === idx && (
                      <div className="chatbot-answer">
                        {item.answer.split('\n').map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="chatbot-no-results">
                No results found. Try a different search term.
              </div>
            )}
          </div>
          
          <div className="chatbot-footer">
            <p>Can't find what you're looking for? Reach out through the contact form!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
