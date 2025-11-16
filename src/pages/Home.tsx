export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[500px] h-[500px] bg-accent-primary/10 rounded-full blur-3xl animate-pulse" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6">
            Hello, I'm <span className="text-gradient">MJ</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary mb-6 max-w-2xl mx-auto">
            Full-stack software engineer from Cape Town
          </p>
          <p className="text-lg text-text-tertiary mb-12 max-w-3xl mx-auto italic">
            Turning imagination into impact through hard work and user-focused solutions
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary text-text-primary font-semibold rounded-lg hover:glow-sm transition-all hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-accent-primary text-accent-primary font-semibold rounded-lg hover:bg-accent-primary hover:text-text-primary transition-all hover:glow-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
