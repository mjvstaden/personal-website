import { GraduationCap, Award, Mountain, Dumbbell, TrendingUp, Bike } from 'lucide-react';
import SectionNav from '../components/ui/SectionNav';

const aboutSections = [
  { id: 'about-intro', label: 'About Me' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Technical Skills' },
  { id: 'education', label: 'Education' },
  { id: 'beyond-code', label: 'Beyond Code' },
];

export default function About() {
  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 px-8 sm:px-6">
      <SectionNav sections={aboutSections} />
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div id="about-intro" className="mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gradient">About Me</h1>
          <div className="bg-background-secondary border border-border-primary rounded-lg p-4 sm:p-6 md:p-8 max-w-4xl">
            <p className="text-base sm:text-lg text-text-secondary leading-loose">
              I'm a software engineer from Cape Town who genuinely enjoys the puzzle of turning messy business problems into clean, working software.
            </p>
            <p className="text-base sm:text-lg text-text-secondary leading-loose mt-4">
              I've spent the last few years building everything from trading systems to e-commerce platforms — learning that good architecture and consistent effort go a long way.
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
                <span>Built the company's core web platform from the ground up as the sole developer, later scaling the team as the product and customer base grew</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-tertiary leading-relaxed">▹</span>
                <span>Delivered a production system used daily by teams within major South African retailers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-tertiary leading-relaxed">▹</span>
                <span>Led technical architecture and technology selection with a focus on long-term scalability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-tertiary leading-relaxed">▹</span>
                <span>Developed a full-stack solution using C#, .NET, ASP.NET, and modern frontend technologies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-tertiary leading-relaxed">▹</span>
                <span>Designed microservices using Clean Architecture and multi-tenant data models</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-tertiary leading-relaxed">▹</span>
                <span>Optimised cloud infrastructure and operational processes, reducing costs by ~50%</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-tertiary leading-relaxed">▹</span>
                <span>Enabled white-labeling to support expansion into the European market</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-tertiary leading-relaxed">▹</span>
                <span>Implemented CI/CD pipelines, automated testing, and deployment workflows</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-tertiary leading-relaxed">▹</span>
                <span>Established logging, monitoring, and analytics to improve reliability and observability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-tertiary leading-relaxed">▹</span>
                <span>Mentored junior developers through code reviews and architectural guidance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-tertiary leading-relaxed">▹</span>
                <span>Contributed strategic technical input to product and roadmap planning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-tertiary leading-relaxed">▹</span>
                <span>Developing an LLM-powered natural language–to–SQL capability that allows customers to chat with their data</span>
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
        <section id="skills" className="mb-12 sm:mb-16">
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
        <section id="education" className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-text-primary">Education</h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-background-secondary border border-border-primary rounded-lg p-4 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex w-12 h-12 items-center justify-center rounded-full bg-accent-primary/10 border border-accent-primary/30 flex-shrink-0 mt-1">
                  <GraduationCap className="w-6 h-6 text-accent-primary" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-accent-primary mb-2">B.Sc in Computer Science</h3>
                  <p className="text-sm sm:text-base text-text-secondary mb-2">University of Stellenbosch • Stellenbosch, South Africa</p>
                  <p className="text-sm sm:text-base text-text-tertiary">Second major in Operations Research</p>
                </div>
              </div>
            </div>
            <div className="bg-background-secondary border border-border-primary rounded-lg p-4 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex w-12 h-12 items-center justify-center rounded-full bg-accent-primary/10 border border-accent-primary/30 flex-shrink-0 mt-1">
                  <Award className="w-6 h-6 text-accent-primary" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-accent-primary mb-2">National Senior Certificate</h3>
                  <p className="text-sm sm:text-base text-text-secondary mb-2">Afrikaanse Hoer Seunskool • Pretoria, South Africa</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beyond Code */}
        <section id="beyond-code" className="pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-text-primary">Beyond Code</h2>
          <p className="text-text-secondary mb-8 sm:mb-10 max-w-2xl">
            The best software comes from well-rounded people. Here's what keeps me balanced and inspired outside of work.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            <div className="group bg-background-secondary border border-border-primary rounded-lg p-6 sm:p-8 hover:border-accent-primary hover:glow-sm transition-all duration-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-accent-primary/10 border border-accent-primary/30 group-hover:bg-accent-primary/20 transition-colors">
                  <Mountain className="w-5 h-5 text-accent-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary">Hiking & Camping</h3>
              </div>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Nothing resets the mind like a trail through the mountains. I try to get out into nature as often as I can — it's where I do my clearest thinking.
              </p>
            </div>

            <div className="group bg-background-secondary border border-border-primary rounded-lg p-6 sm:p-8 hover:border-accent-primary hover:glow-sm transition-all duration-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-accent-primary/10 border border-accent-primary/30 group-hover:bg-accent-primary/20 transition-colors">
                  <Dumbbell className="w-5 h-5 text-accent-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary">Fitness</h3>
              </div>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Discipline in the gym translates to discipline everywhere else. Consistent effort, progressive overload — the same principles apply to code.
              </p>
            </div>

            <div className="group bg-background-secondary border border-border-primary rounded-lg p-6 sm:p-8 hover:border-accent-primary hover:glow-sm transition-all duration-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-accent-primary/10 border border-accent-primary/30 group-hover:bg-accent-primary/20 transition-colors">
                  <TrendingUp className="w-5 h-5 text-accent-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary">Investing</h3>
              </div>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                I'm fascinated by compound growth and long-term thinking. Understanding markets helps me think about value, risk, and building things that last.
              </p>
            </div>

            <div className="group bg-background-secondary border border-border-primary rounded-lg p-6 sm:p-8 hover:border-accent-primary hover:glow-sm transition-all duration-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-accent-primary/10 border border-accent-primary/30 group-hover:bg-accent-primary/20 transition-colors">
                  <Bike className="w-5 h-5 text-accent-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary">Mountain Biking</h3>
              </div>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Cape Town's trails are world-class. There's something about committing to a line down a mountain that keeps things in perspective.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
