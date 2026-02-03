import { useEffect } from 'react';

export function useConsoleMessage() {
  useEffect(() => {
    console.log(
      '%cHello, developer.',
      'color: #c9a962; font-size: 18px; font-weight: 600;'
    );

    console.log(
      '%cBuilt with React, TypeScript, Vite, and Tailwind CSS.',
      'color: #cbd5e1; font-size: 12px;'
    );

    console.log(
      '%cmjvanstaden01@gmail.com | github.com/mjvstaden',
      'color: #64748b; font-size: 12px;'
    );
  }, []);
}
