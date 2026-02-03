import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface Value {
  number: string;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    number: '01',
    title: 'Imagination is the Blueprint',
    description: 'Anything we can imagine, we can build. The only real limits are the ones we place on ourselves.',
  },
  {
    number: '02',
    title: 'Hard Work Beats Talent',
    description: 'Great software requires dedication and persistence. Consistent effort over quick wins.',
  },
  {
    number: '03',
    title: 'Purpose-Driven Development',
    description: 'If it doesn\'t solve real problems or add genuine value, it\'s not worth building.',
  },
  {
    number: '04',
    title: 'User Experience Matters',
    description: 'Every detail counts - from performance to design to how intuitive it feels.',
  },
];


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
                bg-background-secondary border border-border-primary rounded-lg p-6
                hover:border-accent-primary hover:glow-sm transition-all duration-200
                ${isVisible ? 'opacity-100' : 'opacity-0'}
              `}
              style={{
                transitionDelay: `${index * 75}ms`,
              }}
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl font-light text-accent-primary opacity-60">
                  {value.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-text-primary">
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
