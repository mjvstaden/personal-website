import { useState, useEffect } from 'react';

export function useTypewriter(text: string, speed: number = 50, delay: number = 500) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    // Initial delay before starting
    const startTimeout = setTimeout(() => {
      let currentIndex = 0;

      const type = () => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
          timeout = setTimeout(type, speed);
        } else {
          setIsComplete(true);
        }
      };

      type();
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeout);
    };
  }, [text, speed, delay]);

  return { displayText, isComplete };
}
