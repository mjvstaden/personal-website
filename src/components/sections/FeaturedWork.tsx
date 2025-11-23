import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  comingSoon?: boolean;
}

const projects: Project[] = [
  {
    title: 'Personal Portfolio Website',
    description: 'Built to showcase my React and TypeScript skills with fully responsive design, user-friendly interface, and modern web best practices. Hosted on Vercel with Web3Forms integration for seamless contact form handling.',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    link: 'https://mj-codes.com',
    github: 'https://github.com/mjvstaden/personal-website',
  },
  {
    title: 'True North Wealth Analytics',
    description: 'Should I buy or rent? I asked myself this question constantly, but every calculator I found gave different answers. So I built my own. I distilled insights from my favorite finance gurus into a tool that gives me clarity on the 20-40 year impact of financial decisions. I built it because I use it.',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    link: 'https://wealth-tracker-olive.vercel.app',
  },
  {
    title: 'Coming Soon',
    description: 'Another amazing project on the horizon. Building something impactful and user-focused.',
    technologies: ['C#', '.NET', 'SQL'],
    comingSoon: true,
  },
];

export default function FeaturedWork() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
            Featured Work
          </h2>
          <p className="text-text-secondary text-lg">
            Turning ideas into reality, one project at a time
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title + index}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors font-semibold"
          >
            View All Projects
            <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, isVisible }: { project: Project; index: number; isVisible: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`
        relative group
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        transition-all duration-500
      `}
      style={{
        transitionDelay: `${index * 150}ms`,
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="glass rounded-lg p-6 h-full border border-border-primary hover:border-accent-primary transition-all duration-300 hover:glow-sm">
        {project.comingSoon && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-accent-primary/20 border border-accent-primary rounded-full text-xs text-accent-primary font-semibold">
            Coming Soon
          </div>
        )}

        <h3 className="text-xl font-bold text-text-primary mb-3">
          {project.title}
        </h3>

        <p className="text-text-secondary mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-accent-primary/10 border border-accent-primary/30 rounded text-xs text-accent-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        {!project.comingSoon && (
          <div className="flex gap-3 mt-auto">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent-primary hover:text-accent-secondary transition-colors font-semibold"
              >
                View Live →
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary hover:text-text-primary transition-colors font-semibold"
              >
                GitHub →
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
