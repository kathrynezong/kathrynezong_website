import React, { useState, useEffect } from 'react';

export default function Header() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const fullText = "Hi, I'm Kathryne! Welcome to my website! 👋";
  const typingSpeed = 100; // milliseconds per character
  const pauseTime = 2000; // pause before restarting

  useEffect(() => {
    if (isTyping) {
      if (currentIndex < fullText.length) {
        const timer = setTimeout(() => {
          setDisplayText(prev => prev + fullText[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, typingSpeed);
        return () => clearTimeout(timer);
      } else {
        // Finished typing, wait then start over
        const timer = setTimeout(() => {
          setIsTyping(false);
          setDisplayText('');
          setCurrentIndex(0);
        }, pauseTime);
        return () => clearTimeout(timer);
      }
    } else {
      // Start typing again after a brief pause
      const timer = setTimeout(() => {
        setIsTyping(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isTyping, fullText]);

  return (
    <header style={{ 
      backgroundColor: '#1a1a1a', 
      color: 'white', 
      padding: '2rem', 
      textAlign: 'center',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000
    }}>
      <h1 style={{ margin: 0, fontSize: '2rem', marginBottom: '0.5rem' }}>
        Kathryne Zong
      </h1>
      <div style={{ 
        minHeight: '2rem', 
        fontSize: '1.2rem', 
        color: '#646cff',
        fontFamily: 'monospace',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {displayText}
        {isTyping && currentIndex < fullText.length && (
          <span style={{ 
            animation: 'blink 1s infinite',
            marginLeft: '2px'
          }}>
            |
          </span>
        )}
      </div>
      <p style={{ margin: '0.5rem 0 0 0', fontSize: '1.2rem', opacity: 0.8 }}>
        Computer Engineering Student
      </p>
      
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </header>
  );
}