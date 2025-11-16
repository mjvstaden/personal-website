import { useEffect, useRef, useState } from 'react';

const techStack = [
  { name: 'C#', category: 'backend' },
  { name: '.NET', category: 'backend' },
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Azure', category: 'cloud' },
  { name: 'SQL', category: 'database' },
  { name: 'Docker', category: 'devops' },
  { name: 'Node.js', category: 'backend' },
];

export default function TechStack() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gradient">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {techStack.map((tech, index) => (
            <div
              key={tech.name}
              className={`
                bg-background-secondary border border-border-primary rounded-lg p-4 sm:p-6
                hover:border-accent-primary hover:glow-sm
                transition-all duration-300 cursor-pointer
                flex items-center justify-center
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <span className="text-base sm:text-lg font-semibold text-text-primary text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
