export default function About() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">About Me</h1>
          <p className="text-xl text-text-secondary max-w-3xl">
            Results-driven software engineer based in Cape Town, specializing in full-stack web development and microservices architecture.
          </p>
        </div>

        {/* Philosophy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-text-primary">My Philosophy</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-background-secondary border border-accent-primary rounded-lg p-6 hover:glow-sm transition-all">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-accent-primary mb-3">Imagination is the Blueprint</h3>
              <p className="text-text-secondary leading-relaxed">
                I believe that anything we can imagine, we can build. The only real limits are the ones we place on ourselves. Every great solution starts with a vision of what's possible.
              </p>
            </div>

            <div className="bg-background-secondary border border-accent-secondary rounded-lg p-6 hover:glow-sm transition-all">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-semibold text-accent-secondary mb-3">Hard Work Beats Talent</h3>
              <p className="text-text-secondary leading-relaxed">
                Great software isn't built overnight. It takes dedication, persistence, and a willingness to push through challenges. I'm committed to putting in the work to turn ideas into reality.
              </p>
            </div>

            <div className="bg-background-secondary border border-accent-tertiary rounded-lg p-6 hover:glow-sm transition-all">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-accent-tertiary mb-3">Purpose-Driven Development</h3>
              <p className="text-text-secondary leading-relaxed">
                My motivation to build something is directly tied to how useful it will be to the user. If it doesn't solve a real problem or add genuine value, it's not worth building.
              </p>
            </div>

            <div className="bg-background-secondary border border-accent-primary rounded-lg p-6 hover:glow-sm transition-all">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-accent-primary mb-3">Experience Matters</h3>
              <p className="text-text-secondary leading-relaxed">
                I want to create an amazing experience for anyone interacting with the software I build. Every detail counts, from performance to interface design to how intuitive it feels.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-text-primary">Who I Am</h2>
          <div className="bg-background-secondary border border-border-primary rounded-lg p-8">
            <p className="text-text-secondary leading-relaxed mb-4">
              I design and build scalable applications using C#, .NET, and ASP.NET, with a strong focus on CLEAN architecture and cloud-based solutions. I thrive in creating efficient, well-structured systems, streamlining development workflows, and improving application reliability.
            </p>
            <p className="text-text-secondary leading-relaxed">
              As a technical decision-maker, I bridge the gap between business requirements and technical solutions, ensuring seamless execution and innovation. Beyond coding, I bring strong problem-solving skills, clear communication, and a collaborative mindset, thriving in fast-paced environments where I can continuously grow and contribute to impactful projects.
            </p>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-text-primary">Experience</h2>

          {/* Finstock */}
          <div className="mb-12 relative pl-8 border-l-2 border-accent-primary">
            <div className="absolute w-4 h-4 bg-accent-primary rounded-full -left-[9px] top-1"></div>
            <div className="mb-2">
              <h3 className="text-2xl font-semibold text-accent-primary">Lead Software Engineer</h3>
              <p className="text-text-tertiary">Finstock • August 2024 - Present • Somerset West</p>
            </div>
            <ul className="mt-4 space-y-2 text-text-secondary">
              <li className="flex gap-2">
                <span className="text-accent-tertiary mt-1">▹</span>
                <span>Developed web platform from R0 to R150K MRR</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent-tertiary mt-1">▹</span>
                <span>Act as technical decision-maker, guiding architectural and development choices</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent-tertiary mt-1">▹</span>
                <span>Designed and built microservices following CLEAN architecture principles with scalable database models for multi-tenant operations</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent-tertiary mt-1">▹</span>
                <span>Achieved 62% reduction in cloud infrastructure costs through process optimization</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent-tertiary mt-1">▹</span>
                <span>Built and maintained CI/CD pipelines</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent-tertiary mt-1">▹</span>
                <span>Implemented logging, monitoring, and analytics systems improving system reliability</span>
              </li>
            </ul>
          </div>

          {/* Chipin */}
          <div className="mb-12 relative pl-8 border-l-2 border-accent-primary">
            <div className="absolute w-4 h-4 bg-accent-primary rounded-full -left-[9px] top-1"></div>
            <div className="mb-2">
              <h3 className="text-2xl font-semibold text-accent-primary">Technical Consultant</h3>
              <p className="text-text-tertiary">Chipin (Part Time) • May 2025 - Present • Remote</p>
            </div>
            <ul className="mt-4 space-y-2 text-text-secondary">
              <li className="flex gap-2">
                <span className="text-accent-tertiary mt-1">▹</span>
                <span>Analyze development requirements, provide technical estimates and architectural guidance</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent-tertiary mt-1">▹</span>
                <span>Reduced Azure infrastructure costs by 70% through resource optimization</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent-tertiary mt-1">▹</span>
                <span>Execute end-to-end development projects spanning backend APIs, frontend applications, and cloud infrastructure</span>
              </li>
            </ul>
          </div>

          {/* Estuary Solutions */}
          <div className="mb-12 relative pl-8 border-l-2 border-accent-primary">
            <div className="absolute w-4 h-4 bg-accent-primary rounded-full -left-[9px] top-1"></div>
            <div className="mb-2">
              <h3 className="text-2xl font-semibold text-accent-primary">Software Engineer</h3>
              <p className="text-text-tertiary">Estuary Solutions • July 2023 - August 2024 • Stellenbosch</p>
            </div>
            <ul className="mt-4 space-y-2 text-text-secondary">
              <li className="flex gap-2">
                <span className="text-accent-tertiary mt-1">▹</span>
                <span>Developed and maintained trading systems using C# and .NET/.NET Core</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent-tertiary mt-1">▹</span>
                <span>Worked with FIX protocol to facilitate trades on the Johannesburg Stock Exchange</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent-tertiary mt-1">▹</span>
                <span>Successfully reduced application CPU usage by 90% through performance profiling</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent-tertiary mt-1">▹</span>
                <span>Collaborated to build low latency and highly scalable code for trading systems</span>
              </li>
            </ul>
          </div>

          {/* VASTech */}
          <div className="relative pl-8 border-l-2 border-accent-primary">
            <div className="absolute w-4 h-4 bg-accent-primary rounded-full -left-[9px] top-1"></div>
            <div className="mb-2">
              <h3 className="text-2xl font-semibold text-accent-primary">Intern Software Developer</h3>
              <p className="text-text-tertiary">VASTech • January 2023 - June 2023 • Stellenbosch</p>
            </div>
            <ul className="mt-4 space-y-2 text-text-secondary">
              <li className="flex gap-2">
                <span className="text-accent-tertiary mt-1">▹</span>
                <span>Developed web-based network and dependency management tool using Vue.js, Node.js, and SQL</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent-tertiary mt-1">▹</span>
                <span>Gained operations experience with server deployment, maintenance, and monitoring</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Skills Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-text-primary">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Backend */}
            <div className="bg-background-secondary border border-border-primary rounded-lg p-6 hover:border-accent-primary transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-accent-primary">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent-primary/20 text-accent-primary border border-accent-primary rounded-md text-sm">C#</span>
                <span className="px-3 py-1 bg-accent-primary/20 text-accent-primary border border-accent-primary rounded-md text-sm">.NET</span>
                <span className="px-3 py-1 bg-accent-primary/20 text-accent-primary border border-accent-primary rounded-md text-sm">.NET Core</span>
                <span className="px-3 py-1 bg-accent-primary/20 text-accent-primary border border-accent-primary rounded-md text-sm">ASP.NET</span>
                <span className="px-3 py-1 bg-accent-primary/20 text-accent-primary border border-accent-primary rounded-md text-sm">Node.js</span>
              </div>
            </div>

            {/* Frontend */}
            <div className="bg-background-secondary border border-border-primary rounded-lg p-6 hover:border-accent-primary transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-accent-primary">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent-tertiary/20 text-accent-tertiary border border-accent-tertiary rounded-md text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-accent-tertiary/20 text-accent-tertiary border border-accent-tertiary rounded-md text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-accent-tertiary/20 text-accent-tertiary border border-accent-tertiary rounded-md text-sm">Vue.js</span>
                <span className="px-3 py-1 bg-accent-tertiary/20 text-accent-tertiary border border-accent-tertiary rounded-md text-sm">React</span>
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="bg-background-secondary border border-border-primary rounded-lg p-6 hover:border-accent-primary transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-accent-primary">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent-secondary/20 text-accent-secondary border border-accent-secondary rounded-md text-sm">Azure</span>
                <span className="px-3 py-1 bg-accent-secondary/20 text-accent-secondary border border-accent-secondary rounded-md text-sm">Azure DevOps</span>
                <span className="px-3 py-1 bg-accent-secondary/20 text-accent-secondary border border-accent-secondary rounded-md text-sm">Docker</span>
                <span className="px-3 py-1 bg-accent-secondary/20 text-accent-secondary border border-accent-secondary rounded-md text-sm">CI/CD</span>
              </div>
            </div>

            {/* Database */}
            <div className="bg-background-secondary border border-border-primary rounded-lg p-6 hover:border-accent-primary transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-accent-primary">Database</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent-primary/20 text-accent-primary border border-accent-primary rounded-md text-sm">SQL</span>
                <span className="px-3 py-1 bg-accent-primary/20 text-accent-primary border border-accent-primary rounded-md text-sm">Database Design</span>
                <span className="px-3 py-1 bg-accent-primary/20 text-accent-primary border border-accent-primary rounded-md text-sm">Multi-tenant</span>
              </div>
            </div>

            {/* Architecture */}
            <div className="bg-background-secondary border border-border-primary rounded-lg p-6 hover:border-accent-primary transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-accent-primary">Architecture</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent-tertiary/20 text-accent-tertiary border border-accent-tertiary rounded-md text-sm">CLEAN Architecture</span>
                <span className="px-3 py-1 bg-accent-tertiary/20 text-accent-tertiary border border-accent-tertiary rounded-md text-sm">Microservices</span>
                <span className="px-3 py-1 bg-accent-tertiary/20 text-accent-tertiary border border-accent-tertiary rounded-md text-sm">RESTful APIs</span>
              </div>
            </div>

            {/* Tools */}
            <div className="bg-background-secondary border border-border-primary rounded-lg p-6 hover:border-accent-primary transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-accent-primary">Tools & Methods</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent-secondary/20 text-accent-secondary border border-accent-secondary rounded-md text-sm">Git</span>
                <span className="px-3 py-1 bg-accent-secondary/20 text-accent-secondary border border-accent-secondary rounded-md text-sm">SCRUM</span>
                <span className="px-3 py-1 bg-accent-secondary/20 text-accent-secondary border border-accent-secondary rounded-md text-sm">Agile</span>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-text-primary">Education</h2>
          <div className="space-y-6">
            <div className="bg-background-secondary border border-border-primary rounded-lg p-6">
              <h3 className="text-xl font-semibold text-accent-primary mb-2">B.Sc in Computer Science</h3>
              <p className="text-text-secondary mb-2">University of Stellenbosch • Stellenbosch, South Africa</p>
              <p className="text-text-tertiary">Second major in Operations Research</p>
            </div>
          </div>
        </section>

        {/* Interests */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-text-primary">Beyond Code</h2>
          <div className="bg-background-secondary border border-border-primary rounded-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">🏔️</div>
                <p className="text-text-secondary">Hiking & Camping</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">💪</div>
                <p className="text-text-secondary">Fitness</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">📈</div>
                <p className="text-text-secondary">Investing</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🚵</div>
                <p className="text-text-secondary">Mountain Biking</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
