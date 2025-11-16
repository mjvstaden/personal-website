import { useEffect, useRef, useState } from 'react';

interface Stat {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

const stats: Stat[] = [
  { value: 8, label: 'Years Coding', suffix: '' },
  { value: 2847, label: 'Coffees Consumed', suffix: '+' },
  { value: 4, label: 'Companies Worked With', suffix: '+' },
  { value: 42, label: 'Rubber Ducks Consulted', suffix: '+' },
];

export default function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(currentStep * increment, stat.value);

        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.round(newValue);
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isVisible]);

  return (
    <section id="stats-section" ref={sectionRef} className="py-6 sm:py-16 md:py-20 px-4 sm:px-6 bg-background-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient">
            By the Numbers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                text-center p-6 rounded-lg border border-border-primary
                hover:border-accent-primary hover:glow-sm transition-all duration-300
                ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
              `}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
                {stat.prefix}
                {counts[index]}
                {stat.suffix}
              </div>
              <div className="text-sm sm:text-base text-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
