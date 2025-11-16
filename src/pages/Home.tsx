import { useTypewriter } from '../hooks/useTypewriter';
import { useConsoleMessage } from '../hooks/useConsoleMessage';
import ParticleNetwork from '../components/effects/ParticleNetwork';
import StatsCounter from '../components/sections/StatsCounter';
import TechStack from '../components/sections/TechStack';
import FeaturedWork from '../components/sections/FeaturedWork';
import Philosophy from '../components/sections/Philosophy';
import FinalCTA from '../components/sections/FinalCTA';

export default function Home() {
  const { displayText, isComplete } = useTypewriter(
    'Full-stack software engineer from Cape Town',
    50,
    800
  );

  // Display console message easter egg
  useConsoleMessage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Particle Network Background */}
        <ParticleNetwork />

        {/* Animated background glow orbs */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[500px] h-[500px] bg-accent-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute w-[300px] h-[300px] bg-accent-tertiary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            Hello, I'm <span className="text-gradient">MJ</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-text-secondary mb-6 max-w-2xl mx-auto min-h-[2rem]">
            {displayText}
            {!isComplete && <span className="animate-pulse">|</span>}
          </p>
          <p className="text-base sm:text-lg text-text-tertiary mb-12 max-w-3xl mx-auto italic opacity-0 animate-[fadeIn_1s_ease-out_2.5s_forwards]">
            Turning imagination into impact through hard work and user-focused solutions
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-[fadeIn_1s_ease-out_3s_forwards]">
            <a
              href="/projects"
              className="px-6 py-3 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary text-text-primary font-semibold rounded-lg hover:glow-md hover:-translate-y-1 transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border border-accent-primary text-accent-primary font-semibold rounded-lg hover:bg-accent-primary hover:text-text-primary hover:glow-sm transition-all duration-300"
            >
              Get in Touch
            </a>
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
