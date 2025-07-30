import { useState, useEffect, useRef } from 'react';

export const useTypewriter = (words, speed = 100, deleteSpeed = 50, pauseTime = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef();

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const type = () => {
      if (isDeleting) {
        setDisplayText(prev => prev.slice(0, -1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentWordIndex(prev => (prev + 1) % words.length);
        }
      } else {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
        if (displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
      }
      
      timeoutRef.current = setTimeout(type, isDeleting ? deleteSpeed : speed);
    };

    timeoutRef.current = setTimeout(type, speed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [words, speed, deleteSpeed, pauseTime, displayText, currentWordIndex, isDeleting]);

  return displayText;
};
