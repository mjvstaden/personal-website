export default function About() {
  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gradient">About Me</h1>
          <div className="bg-background-secondary border border-border-primary rounded-lg p-4 sm:p-6 md:p-8 max-w-4xl">
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-4">
              I'm a full-stack software engineer from Cape Town who builds scalable web applications and microservices. I believe in clean architecture, purpose-driven development, and the power of hard work over talent.
            </p>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              As a technical decision-maker, I turn business requirements into reliable solutions. Whether it's reducing infrastructure costs by 60%, scaling a platform from zero to six-figure revenue, or optimizing performance by 90% — I focus on measurable impact that matters.
            </p>
          </div>
        </div>

        {/* Experience Timeline */}
        <section id="experience" className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-text-primary">Experience</h2>

          {/* Finstock */}
          <div className="mb-8 sm:mb-12 relative pl-6 sm:pl-8 border-l-2 border-accent-primary">
            <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-accent-primary rounded-full -left-[7px] sm:-left-[9px] top-1"></div>
            <div className="mb-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-accent-primary">Lead Software Engineer</h3>
              <p className="text-xs sm:text-sm md:text-base text-text-tertiary">Finstock • August 2024 - Present • Somerset West</p>
            </div>
            <ul className="mt-3 sm:mt-4 space-y-2 text-sm sm:text-base text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-accent-tertiary leading-relaxed">▹</span>
                <span>Designed and developed our web platform from scratch, growing it into a core tool used daily by users to manage and place orders within major South African retailers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-tertiary leading-relaxed">▹</span>
                <span>Acted as the technical decision-maker, guiding architectural and development choices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-tertiary leading-relaxed">▹</span>
                <span>Developed and scaled a full-stack web application using C#, .NET, ASP.NET, and modern frontend technologies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-tertiary leading-relaxed">▹</span>
                <span>Translated business and user requirements into well-defined technical specifications and development roadmaps</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-tertiary leading-relaxed">▹</span>
                <span>Designed and built microservices following CLEAN architecture principles with scalable database models for multi-tenant operations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-tertiary leading-relaxed">▹</span>
                <span>Achieved 50% reduction in cloud infrastructure costs through process optimisation and efficiency improvements that allowed for the adoption of lower-cost pricing models</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-tertiary leading-relaxed">▹</span>
                <span>Built and maintained our CI/CD pipelines</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-tertiary leading-relaxed">▹</span>
                <span>Implemented logging, monitoring, and analytics systems improving system reliability and enabling data-driven product decisions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-tertiary leading-relaxed">▹</span>
                <span>Provided strategic technical input on product roadmap and feature prioritisation based on feasibility analysis and user feedback</span>
              </li>
            </ul>
          </div>

          {/* Chipin */}
          <div className="mb-8 sm:mb-12 relative pl-6 sm:pl-8 border-l-2 border-accent-primary">
            <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-accent-primary rounded-full -left-[7px] sm:-left-[9px] top-1"></div>
            <div className="mb-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-accent-primary">Technical Consultant</h3>
              <p className="text-xs sm:text-sm md:text-base text-text-tertiary">Chipin - Fintech (Part Time) • May 2025 - Present • Remote</p>
              <p className="text-xs sm:text-sm text-text-tertiary mt-1">Group payment application</p>
            </div>
            <ul className="mt-3 sm:mt-4 space-y-2 text-sm sm:text-base text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-accent-tertiary leading-relaxed">▹</span>
                <span>Analyze development requirements, provide technical estimates and architectural guidance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-tertiary leading-relaxed">▹</span>
                <span>Reduced Azure infrastructure costs by 60% through resource optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-tertiary leading-relaxed">▹</span>
                <span>Execute end-to-end development projects spanning backend APIs, frontend applications, and cloud infrastructure</span>
              </li>
            </ul>
          </div>

          {/* Estuary Solutions */}
          <div className="mb-8 sm:mb-12 relative pl-6 sm:pl-8 border-l-2 border-accent-primary">
            <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-accent-primary rounded-full -left-[7px] sm:-left-[9px] top-1"></div>
            <div className="mb-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-accent-primary">Software Engineer</h3>
              <p className="text-xs sm:text-sm md:text-base text-text-tertiary">Estuary Solutions • July 2023 - August 2024 • Stellenbosch</p>
            </div>
            <ul className="mt-3 sm:mt-4 space-y-2 text-sm sm:text-base text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-accent-tertiary leading-relaxed">▹</span>
                <span>Developed and maintained trading systems using C# and .NET/.NET Core</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-tertiary leading-relaxed">▹</span>
                <span>Worked with FIX protocol to facilitate trades on the Johannesburg Stock Exchange</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-tertiary leading-relaxed">▹</span>
                <span>Successfully reduced application CPU usage by 90% through performance profiling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-tertiary leading-relaxed">▹</span>
                <span>Collaborated to build low latency and highly scalable code for trading systems</span>
              </li>
            </ul>
          </div>

          {/* VASTech */}
          <div className="relative pl-6 sm:pl-8 border-l-2 border-accent-primary">
            <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-accent-primary rounded-full -left-[7px] sm:-left-[9px] top-1"></div>
            <div className="mb-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-accent-primary">Intern Software Developer</h3>
              <p className="text-xs sm:text-sm md:text-base text-text-tertiary">VASTech • January 2023 - June 2023 • Stellenbosch</p>
            </div>
            <ul className="mt-3 sm:mt-4 space-y-2 text-sm sm:text-base text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-accent-tertiary leading-relaxed">▹</span>
                <span>Developed web-based network and dependency management tool using Vue.js, Node.js, and SQL</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-tertiary leading-relaxed">▹</span>
                <span>Gained operations experience with server deployment, maintenance, and monitoring</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Skills Grid */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-text-primary">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Backend */}
            <div className="bg-background-secondary border border-border-primary rounded-lg p-4 sm:p-6 hover:border-accent-primary transition-colors">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-accent-primary">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent-primary/20 text-accent-primary border border-accent-primary rounded-md text-sm">C#</span>
                <span className="px-3 py-1 bg-accent-primary/20 text-accent-primary border border-accent-primary rounded-md text-sm">.NET</span>
                <span className="px-3 py-1 bg-accent-primary/20 text-accent-primary border border-accent-primary rounded-md text-sm">.NET Core</span>
                <span className="px-3 py-1 bg-accent-primary/20 text-accent-primary border border-accent-primary rounded-md text-sm">ASP.NET</span>
                <span className="px-3 py-1 bg-accent-primary/20 text-accent-primary border border-accent-primary rounded-md text-sm">Node.js</span>
              </div>
            </div>

            {/* Frontend */}
            <div className="bg-background-secondary border border-border-primary rounded-lg p-4 sm:p-6 hover:border-accent-primary transition-colors">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-accent-primary">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent-tertiary/20 text-accent-tertiary border border-accent-tertiary rounded-md text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-accent-tertiary/20 text-accent-tertiary border border-accent-tertiary rounded-md text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-accent-tertiary/20 text-accent-tertiary border border-accent-tertiary rounded-md text-sm">Vue.js</span>
                <span className="px-3 py-1 bg-accent-tertiary/20 text-accent-tertiary border border-accent-tertiary rounded-md text-sm">React</span>
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="bg-background-secondary border border-border-primary rounded-lg p-4 sm:p-6 hover:border-accent-primary transition-colors">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-accent-primary">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent-secondary/20 text-accent-secondary border border-accent-secondary rounded-md text-sm">Azure</span>
                <span className="px-3 py-1 bg-accent-secondary/20 text-accent-secondary border border-accent-secondary rounded-md text-sm">Azure DevOps</span>
                <span className="px-3 py-1 bg-accent-secondary/20 text-accent-secondary border border-accent-secondary rounded-md text-sm">Docker</span>
                <span className="px-3 py-1 bg-accent-secondary/20 text-accent-secondary border border-accent-secondary rounded-md text-sm">CI/CD</span>
              </div>
            </div>

            {/* Database */}
            <div className="bg-background-secondary border border-border-primary rounded-lg p-4 sm:p-6 hover:border-accent-primary transition-colors">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-accent-primary">Database</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent-primary/20 text-accent-primary border border-accent-primary rounded-md text-sm">SQL</span>
                <span className="px-3 py-1 bg-accent-primary/20 text-accent-primary border border-accent-primary rounded-md text-sm">Database Design</span>
                <span className="px-3 py-1 bg-accent-primary/20 text-accent-primary border border-accent-primary rounded-md text-sm">Multi-tenant</span>
              </div>
            </div>

            {/* Architecture */}
            <div className="bg-background-secondary border border-border-primary rounded-lg p-4 sm:p-6 hover:border-accent-primary transition-colors">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-accent-primary">Architecture</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent-tertiary/20 text-accent-tertiary border border-accent-tertiary rounded-md text-sm">CLEAN Architecture</span>
                <span className="px-3 py-1 bg-accent-tertiary/20 text-accent-tertiary border border-accent-tertiary rounded-md text-sm">Microservices</span>
                <span className="px-3 py-1 bg-accent-tertiary/20 text-accent-tertiary border border-accent-tertiary rounded-md text-sm">RESTful APIs</span>
              </div>
            </div>

            {/* Tools */}
            <div className="bg-background-secondary border border-border-primary rounded-lg p-4 sm:p-6 hover:border-accent-primary transition-colors">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-accent-primary">Tools & Methods</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent-secondary/20 text-accent-secondary border border-accent-secondary rounded-md text-sm">Git</span>
                <span className="px-3 py-1 bg-accent-secondary/20 text-accent-secondary border border-accent-secondary rounded-md text-sm">SCRUM</span>
                <span className="px-3 py-1 bg-accent-secondary/20 text-accent-secondary border border-accent-secondary rounded-md text-sm">Agile</span>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-text-primary">Education</h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-background-secondary border border-border-primary rounded-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-accent-primary mb-2">B.Sc in Computer Science</h3>
              <p className="text-sm sm:text-base text-text-secondary mb-2">University of Stellenbosch • Stellenbosch, South Africa</p>
              <p className="text-sm sm:text-base text-text-tertiary">Second major in Operations Research</p>
            </div>
          </div>
        </section>

        {/* Interests */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-text-primary">Beyond Code</h2>
          <div className="bg-background-secondary border border-border-primary rounded-lg p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl mb-2">🏔️</div>
                <p className="text-sm sm:text-base text-text-secondary">Hiking & Camping</p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl mb-2">💪</div>
                <p className="text-sm sm:text-base text-text-secondary">Fitness</p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl mb-2">📈</div>
                <p className="text-sm sm:text-base text-text-secondary">Investing</p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl mb-2">🚵</div>
                <p className="text-sm sm:text-base text-text-secondary">Mountain Biking</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
