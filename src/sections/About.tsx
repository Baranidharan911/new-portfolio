import { useEffect, useRef } from 'react';
import { Code2, Database, Layers, Zap, Globe, Shield } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-header', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 88%', toggleActions: 'play none none none' },
        opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
      });
      gsap.from('.about-content', {
        scrollTrigger: { trigger: '.about-content', start: 'top 92%', toggleActions: 'play none none none' },
        opacity: 0, y: 50, duration: 0.8, ease: 'power3.out',
      });
      gsap.from('.code-window', {
        scrollTrigger: { trigger: '.code-window', start: 'top 92%', toggleActions: 'play none none none' },
        opacity: 0, x: 50, duration: 0.8, ease: 'power3.out',
      });
      gsap.from('.highlight-card', {
        scrollTrigger: { trigger: '.highlights-grid', start: 'top 95%', toggleActions: 'play none none none' },
        opacity: 0, y: 30, stagger: 0.1, duration: 0.6, ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const highlights = [
    { icon: Code2, text: 'Full Stack Engineering', desc: 'End-to-end ownership' },
    { icon: Layers, text: 'SaaS Architecture', desc: 'Multi-tenant systems' },
    { icon: Database, text: 'ERP & API Integration', desc: 'GraphQL, REST, webhooks' },
    { icon: Zap, text: 'Real-time Systems', desc: 'Socket.io & async queues' },
    { icon: Shield, text: 'Production Mindset', desc: 'Security & reliability' },
    { icon: Globe, text: 'Cloud Deployment', desc: 'GCP & CI/CD pipelines' },
  ];

  const codeLines = [
    { num: 1, content: [{ text: 'const', color: 'text-[#c084fc]' }, { text: ' developer', color: 'text-[#60a5fa]' }, { text: ' = {', color: 'text-white' }] },
    { num: 2, content: [{ text: "  name:", color: 'text-[#94a3b8]' }, { text: " 'Baranidharan B'", color: 'text-[#4ade80]' }, { text: ',', color: 'text-white' }] },
    { num: 3, content: [{ text: "  role:", color: 'text-[#94a3b8]' }, { text: " 'Full Stack Engineer'", color: 'text-[#4ade80]' }, { text: ',', color: 'text-white' }] },
    { num: 4, content: [{ text: "  location:", color: 'text-[#94a3b8]' }, { text: " 'Coimbatore, India'", color: 'text-[#4ade80]' }, { text: ',', color: 'text-white' }] },
    { num: 5, content: [{ text: '  experience:', color: 'text-[#94a3b8]' }, { text: ' 2', color: 'text-[#f472b6]' }, { text: ', ', color: 'text-white' }, { text: '// years', color: 'text-[#64748b]' }] },
    { num: 6, content: [{ text: '  saasProduct:', color: 'text-[#94a3b8]' }, { text: " 'SiteGrip'", color: 'text-[#fbbf24]' }, { text: ', ', color: 'text-white' }, { text: '// live ↗', color: 'text-[#64748b]' }] },
    { num: 7, content: [{ text: '  expertise:', color: 'text-[#94a3b8]' }, { text: ' [', color: 'text-white' }] },
    { num: 8, content: [{ text: "    'React'", color: 'text-[#4ade80]' }, { text: ", 'Node.js'", color: 'text-[#4ade80]' }, { text: ", 'GraphQL'", color: 'text-[#4ade80]' }, { text: ',', color: 'text-white' }] },
    { num: 9, content: [{ text: "    'TypeScript'", color: 'text-[#4ade80]' }, { text: ", 'Firebase'", color: 'text-[#4ade80]' }, { text: ", 'GCP'", color: 'text-[#4ade80]' }, { text: ',', color: 'text-white' }] },
    { num: 10, content: [{ text: "    'Socket.io'", color: 'text-[#4ade80]' }, { text: ", 'PostgreSQL'", color: 'text-[#4ade80]' }] },
    { num: 11, content: [{ text: '  ],', color: 'text-white' }] },
    { num: 12, content: [{ text: '  currentlyAt:', color: 'text-[#94a3b8]' }, { text: " 'Elbrit Life Sciences'", color: 'text-[#4ade80]' }, { text: ',', color: 'text-white' }] },
    { num: 13, content: [{ text: '  building:', color: 'text-[#94a3b8]' }, { text: " 'SiteGrip (AI indexing SaaS)'", color: 'text-[#fbbf24]' }, { text: ',', color: 'text-white' }] },
    { num: 14, content: [{ text: '  freelancing:', color: 'text-[#94a3b8]' }, { text: ' true', color: 'text-[#f472b6]' }, { text: ',', color: 'text-white' }] },
    { num: 15, content: [{ text: '};', color: 'text-white' }] },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[rgba(99,102,241,0.03)] to-transparent pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="about-header text-center mb-16">
          <span className="section-tag mb-4">about</span>
          <h2 className="text-headline mt-4 mb-6">
            Who I <span className="gradient-text">Am</span>
          </h2>
          <p className="text-body text-[#94a3b8] max-w-2xl mx-auto">
            A full stack engineer who ships products end-to-end — not just features
          </p>
        </div>

        <div className="grid xl:grid-cols-2 gap-12 xl:gap-16 2xl:gap-24 items-center mb-20">
          {/* Left: Text */}
          <div className="about-content space-y-6">
            <p className="text-lg text-[#94a3b8] leading-relaxed">
              I'm a <span className="text-white font-semibold">Full Stack Engineer</span> with two years of
              production experience across enterprise platforms and SaaS products. I built{' '}
              <a href="https://www.sitegrip.com" target="_blank" rel="noopener noreferrer"
                className="text-[#f59e0b] font-semibold hover:underline">SiteGrip</a>{' '}
              from scratch — a live multi-tenant SaaS platform handling real-time URL indexing across Google,
              Bing, and AI search engines, with subscription billing and a full operator dashboard.
            </p>

            <p className="text-lg text-[#94a3b8] leading-relaxed">
              At <span className="text-[#6366f1] font-semibold">Elbrit Life Sciences</span>, I architected{' '}
              <span className="text-white font-medium">Elbrit One</span> — a unified enterprise platform
              integrating Sales, HR, and Inventory via real-time GraphQL APIs and ERPNext. I own the
              CI/CD pipelines, automated test suites with Playwright, and the data pipeline architecture.
            </p>

            <p className="text-lg text-[#94a3b8] leading-relaxed">
              I care about the gap between "it works on my machine" and "it works in production under real
              load with real users." Every system I build has error handling, retry logic, observability,
              and code structured so the next person can extend it without a rewrite.
            </p>

            <div className="flex flex-wrap gap-8 pt-4">
              {[
                { value: '2+', label: 'Years in Production' },
                { value: '1', label: 'Live SaaS Built' },
                { value: '20+', label: 'Projects Shipped' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-[#64748b]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Code Window */}
          <div className="code-window">
            <div className="glass rounded-2xl overflow-hidden border border-[rgba(99,102,241,0.15)]">
              <div className="flex items-center gap-2 px-6 py-4 border-b border-[rgba(99,102,241,0.1)] bg-[rgba(22,22,34,0.8)]">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
                  <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                  <span className="w-3 h-3 rounded-full bg-[#22c55e]" />
                </div>
                <span className="ml-4 text-xs text-[#64748b] font-mono">developer.ts</span>
              </div>
              <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-x-auto">
                <div className="leading-relaxed min-w-[300px]">
                  {codeLines.map((line) => (
                    <div key={line.num} className="flex">
                      <span className="text-[#64748b] w-6 sm:w-8 shrink-0 select-none text-right pr-3">
                        {line.num}
                      </span>
                      <span>
                        {line.content.map((part, idx) => (
                          <span key={idx} className={part.color}>{part.text}</span>
                        ))}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="highlights-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="highlight-card group p-6 rounded-2xl glass hover:border-[rgba(99,102,241,0.3)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#06b6d4] flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon size={22} />
              </div>
              <h3 className="text-white font-semibold mb-1 text-sm">{item.text}</h3>
              <p className="text-xs text-[#64748b]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
