import { Link } from 'react-router-dom';
import { useTypewriter } from '../hooks/useTypewriter';
import { useConsoleMessage } from '../hooks/useConsoleMessage';
import StatsCounter from '../components/sections/StatsCounter';
import TechStack from '../components/sections/TechStack';
import FeaturedWork from '../components/sections/FeaturedWork';
import Philosophy from '../components/sections/Philosophy';
import FinalCTA from '../components/sections/FinalCTA';
import SectionNav from '../components/ui/SectionNav';

const homeSections = [
  { id: 'hero', label: 'Hello' },
  { id: 'stats-section', label: 'By the Numbers' },
  { id: 'tech-stack', label: 'Tech Stack' },
  { id: 'featured-work', label: 'Featured Work' },
  { id: 'philosophy', label: 'My Philosophy' },
  { id: 'cta', label: 'Let\'s Connect' },
];

export default function Home() {
  const { displayText, isComplete } = useTypewriter(
    'A full-stack software engineer from Cape Town',
    50,
    800
  );

  // Display console message easter egg
  useConsoleMessage();

  return (
    <div className="min-h-screen">
      <SectionNav sections={homeSections} />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[calc(100vh-12rem)] sm:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Tech grid background */}
        <div className="absolute inset-0 tech-grid opacity-60" />

        {/* Subtle gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-tertiary/5 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards] -mt-32 sm:-mt-24">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6">
            Hello, I'm <span className="text-gradient">MJ</span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-text-secondary mb-4 sm:mb-6 max-w-2xl mx-auto min-h-[2rem]">
            {displayText}
            {!isComplete && <span className="opacity-70">|</span>}
          </p>
          <p className="text-sm sm:text-lg text-text-tertiary mb-8 sm:mb-12 max-w-3xl mx-auto italic opacity-0 animate-[fadeIn_1s_ease-out_2.5s_forwards]">
            Turning imagination into impact through hard work and purpose-driven code
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/projects"
              className="px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary text-background-primary font-semibold rounded-lg hover:glow-md transition-all duration-200 text-sm sm:text-base"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2.5 sm:px-6 sm:py-3 border border-accent-primary text-accent-primary font-semibold rounded-lg hover:bg-accent-primary hover:text-background-primary transition-all duration-200 text-sm sm:text-base"
            >
              Get in Touch
            </Link>
          </div>

          {/* Scroll Down Indicator */}
          <div className="mt-6 sm:mt-8 flex justify-center">
            <button
              onClick={() => {
                document.getElementById('stats-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex flex-col items-center gap-2 text-text-tertiary hover:text-accent-primary transition-colors duration-200 cursor-pointer group"
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <StatsCounter />

      {/* Tech Stack Section */}
      <TechStack />

      {/* Featured Work Section */}
      <FeaturedWork />

      {/* Philosophy Section */}
      <Philosophy />

      {/* Final CTA Section */}
      <FinalCTA />
    </div>
  );
}
