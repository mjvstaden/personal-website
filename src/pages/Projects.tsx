import { useRef, useState } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  link?: string;
  github?: string;
  comingSoon?: boolean;
}

const projects: Project[] = [
  {
    title: 'Personal Portfolio Website',
    description: 'Modern portfolio showcasing skills with interactive particle effects, typewriter animations, and responsive design built with React and TypeScript.',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    category: 'Web Development',
    link: 'https://mj-codes.com',
    github: 'https://github.com/mjvstaden/personal-website',
  },
  {
    title: 'Coming Soon',
    description: '',
    technologies: ['TBD'],
    category: 'TBD',
    comingSoon: true,
  },
  {
    title: 'Coming Soon',
    description: '',
    technologies: ['TBD'],
    category: 'TBD',
    comingSoon: true,
  },
];

const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gradient">
            My Projects
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl">
            A collection of projects I've built, from web applications to system architecture solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300
                  ${selectedCategory === category
                    ? 'bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary text-text-primary glow-sm'
                    : 'bg-background-secondary border border-border-primary text-text-secondary hover:border-accent-primary hover:text-accent-primary'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title + index} project={project} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-secondary text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
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
      className="relative group opacity-100 translate-y-0 transition-all duration-500"
      style={{
        transitionDelay: `${index * 100}ms`,
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="glass rounded-lg p-4 sm:p-6 h-full border border-border-primary hover:border-accent-primary transition-all duration-300 hover:glow-sm flex flex-col">
        {project.comingSoon && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-accent-primary/20 border border-accent-primary rounded-full text-xs text-accent-primary font-semibold">
            Coming Soon
          </div>
        )}

        <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-3">
          {project.title}
        </h3>

        <p className="text-sm sm:text-base text-text-secondary mb-4 leading-relaxed flex-grow">
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
