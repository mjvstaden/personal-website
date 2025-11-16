import { useEffect } from 'react';

export function useConsoleMessage() {
  useEffect(() => {
    // ASCII Art
    console.log('%c', 'font-size: 1px; padding: 100px 150px; background: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Ctext y=\'.9em\' font-size=\'90\'%3E👋%3C/text%3E%3C/svg%3E") no-repeat;');

    // Greeting
    console.log(
      '%c👋 Hey there, curious developer!',
      'color: #0ea5e9; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(14, 165, 233, 0.3);'
    );

    console.log(
      '%cWelcome to my portfolio!',
      'color: #14b8a6; font-size: 16px; font-weight: bold;'
    );

    console.log(
      '%cI see you\'re checking out the code. I like your style! 🚀',
      'color: #cbd5e1; font-size: 14px;'
    );

    console.log(
      '%c\nBuilt with: React + TypeScript + Vite + Tailwind CSS',
      'color: #64748b; font-size: 12px; font-style: italic;'
    );

    console.log(
      '%c\nInterested in working together? Let\'s build something amazing!',
      'color: #0ea5e9; font-size: 14px; font-weight: bold;'
    );

    console.log(
      '%c📧 mjvanstaden01@gmail.com',
      'color: #14b8a6; font-size: 14px;'
    );

    console.log(
      '%c🔗 https://github.com/mjvstaden',
      'color: #14b8a6; font-size: 14px;'
    );

    console.log(
      '%c\n💡 Tip: Try the Konami Code (↑ ↑ ↓ ↓ ← → ← → B A) for a surprise! 🎮',
      'color: #f59e0b; font-size: 12px; font-style: italic;'
    );
  }, []);
}
