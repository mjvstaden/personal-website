import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface Value {
  icon: string;
  title: string;
  description: string;
  color: 'primary' | 'secondary' | 'tertiary';
}

const values: Value[] = [
  {
    icon: '💡',
    title: 'Imagination is the Blueprint',
    description: 'Anything we can imagine, we can build. The only real limits are the ones we place on ourselves.',
    color: 'primary',
  },
  {
    icon: '💪',
    title: 'Hard Work Beats Talent',
    description: 'Great software requires dedication and persistence. Consistent effort over quick wins.',
    color: 'secondary',
  },
  {
    icon: '🎯',
    title: 'Purpose-Driven Development',
    description: 'If it doesn\'t solve real problems or add genuine value, it\'s not worth building.',
    color: 'tertiary',
  },
  {
    icon: '✨',
    title: 'Experience Matters',
    description: 'Every detail counts - from performance to design to how intuitive it feels.',
    color: 'primary',
  },
];

const colorClasses = {
  primary: 'border-accent-primary hover:border-accent-primary',
  secondary: 'border-accent-secondary hover:border-accent-secondary',
  tertiary: 'border-accent-tertiary hover:border-accent-tertiary',
};

export default function Philosophy() {
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
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 bg-background-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
            My Philosophy
          </h2>
          <p className="text-text-secondary text-lg">
            The principles that drive everything I build
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`
                bg-background-secondary border rounded-lg p-6
                hover:glow-sm transition-all duration-300
                ${colorClasses[value.color]}
                ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
              `}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`
                    text-5xl animate-pulse
                    ${isVisible ? 'animate-bounce' : ''}
                  `}
                  style={{
                    animationDuration: '2s',
                    animationDelay: `${index * 200}ms`,
                    animationIterationCount: isVisible ? '1' : 'infinite',
                  }}
                >
                  {value.icon}
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-semibold mb-3 ${
                    value.color === 'primary' ? 'text-accent-primary' :
                    value.color === 'secondary' ? 'text-accent-secondary' :
                    'text-accent-tertiary'
                  }`}>
                    {value.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors font-semibold"
          >
            Learn more about me
            <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
