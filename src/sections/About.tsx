import { useEffect, useRef } from 'react';
import { Code2, Database, TestTube, Zap, Users, Target } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header animation
      gsap.from('.about-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Content animation
      gsap.from('.about-content', {
        scrollTrigger: {
          trigger: '.about-content',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Code window animation
      gsap.from('.code-window', {
        scrollTrigger: {
          trigger: '.code-window',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Highlights animation
      gsap.from('.highlight-card', {
        scrollTrigger: {
          trigger: '.highlights-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const highlights = [
    { icon: Code2, text: 'Full Stack Development', desc: 'End-to-end solutions' },
    { icon: Database, text: 'ERP & API Integration', desc: 'Seamless connectivity' },
    { icon: TestTube, text: 'Automated Testing', desc: 'Quality assurance' },
    { icon: Zap, text: 'Performance Optimization', desc: 'Lightning fast apps' },
    { icon: Users, text: 'Team Leadership', desc: 'Mentoring & guidance' },
    { icon: Target, text: 'Problem Solving', desc: 'Complex challenges' },
  ];

  const codeLines = [
    { num: 1, content: [{ text: 'const', color: 'text-[#c084fc]' }, { text: ' developer', color: 'text-[#60a5fa]' }, { text: ' = {', color: 'text-white' }] },
    { num: 2, content: [{ text: "  name: '", color: 'text-white' }, { text: 'Baranidharan B', color: 'text-[#4ade80]' }, { text: "',", color: 'text-white' }] },
    { num: 3, content: [{ text: "  role: '", color: 'text-white' }, { text: 'Full Stack Developer', color: 'text-[#4ade80]' }, { text: "',", color: 'text-white' }] },
    { num: 4, content: [{ text: "  location: '", color: 'text-white' }, { text: 'Coimbatore, India', color: 'text-[#4ade80]' }, { text: "',", color: 'text-white' }] },
    { num: 5, content: [{ text: '  experience: ', color: 'text-white' }, { text: '2', color: 'text-[#f472b6]' }, { text: ', ', color: 'text-white' }, { text: '// years', color: 'text-[#64748b]' }] },
    { num: 6, content: [{ text: '  expertise: [', color: 'text-white' }] },
    { num: 7, content: [{ text: "    '", color: 'text-white' }, { text: 'React.js', color: 'text-[#4ade80]' }, { text: "', '", color: 'text-white' }, { text: 'Node.js', color: 'text-[#4ade80]' }, { text: "', '", color: 'text-white' }, { text: 'GraphQL', color: 'text-[#4ade80]' }, { text: "',", color: 'text-white' }] },
    { num: 8, content: [{ text: "    '", color: 'text-white' }, { text: 'TypeScript', color: 'text-[#4ade80]' }, { text: "', '", color: 'text-white' }, { text: 'PostgreSQL', color: 'text-[#4ade80]' }, { text: "', '", color: 'text-white' }, { text: 'ERPNext', color: 'text-[#4ade80]' }, { text: "'", color: 'text-white' }] },
    { num: 9, content: [{ text: '  ],', color: 'text-white' }] },
    { num: 10, content: [{ text: '  currentlyAt: ', color: 'text-white' }, { text: "'Elbrit Life Sciences'", color: 'text-[#4ade80]' }, { text: ',', color: 'text-white' }] },
    { num: 11, content: [{ text: '  building: ', color: 'text-white' }, { text: "'Enterprise Solutions'", color: 'text-[#4ade80]' }, { text: ',', color: 'text-white' }] },
    { num: 12, content: [{ text: '  passion: () => ', color: 'text-white' }, { text: "'Creating impactful tech'", color: 'text-[#4ade80]' }, { text: ',', color: 'text-white' }] },
    { num: 13, content: [{ text: '  hireable: ', color: 'text-white' }, { text: 'true', color: 'text-[#f472b6]' }] },
    { num: 14, content: [{ text: '};', color: 'text-white' }] },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[rgba(99,102,241,0.03)] to-transparent pointer-events-none" />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Section Header */}
        <div className="about-header text-center mb-16">
          <span className="section-tag mb-4">about</span>
          <h2 className="text-headline mt-4 mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-body text-[#94a3b8] max-w-2xl mx-auto">
            Passionate developer crafting scalable solutions with modern technologies
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid xl:grid-cols-2 gap-12 xl:gap-16 2xl:gap-24 items-center mb-20">
          {/* Left: Text Content */}
          <div className="about-content space-y-6">
            <p className="text-lg text-[#94a3b8] leading-relaxed">
              I'm a <span className="text-white font-semibold">Full Stack Developer</span> with hands-on experience 
              building production-grade enterprise systems. Currently at{' '}
              <span className="text-[#6366f1] font-semibold">Elbrit Life Sciences</span>, I architected 
              &quot;Elbrit One&quot; - a unified platform integrating Sales, HR, and Inventory modules with 
              real-time GraphQL APIs.
            </p>
            
            <p className="text-lg text-[#94a3b8] leading-relaxed">
              My expertise spans the entire development lifecycle, from designing scalable backends 
              with Node.js to crafting responsive frontends with React. I'm passionate about writing 
              clean, maintainable code and implementing automated testing with Playwright.
            </p>

            <p className="text-lg text-[#94a3b8] leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or mentoring aspiring developers. I believe in continuous learning and staying 
              ahead of the technology curve.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              {[
                { value: '2+', label: 'Years Experience' },
                { value: '10+', label: 'Projects Delivered' },
                { value: '100%', label: 'Commitment' },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-[#64748b]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Code Window */}
          <div className="code-window">
            <div className="glass rounded-2xl overflow-hidden border border-[rgba(99,102,241,0.15)]">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-6 py-4 border-b border-[rgba(99,102,241,0.1)] bg-[rgba(22,22,34,0.8)]">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
                  <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                  <span className="w-3 h-3 rounded-full bg-[#22c55e]" />
                </div>
                <span className="ml-4 text-xs text-[#64748b] font-mono">developer.js</span>
              </div>
              
              {/* Code Content */}
              <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-x-auto">
                <div className="leading-relaxed min-w-[300px]">
                  {codeLines.map((line) => (
                    <div key={line.num} className="flex">
                      <span className="text-[#64748b] w-6 sm:w-8 shrink-0 select-none text-right pr-3">
                        {line.num}
                      </span>
                      <span>
                        {line.content.map((part, idx) => (
                          <span key={idx} className={part.color}>
                            {part.text}
                          </span>
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
          {highlights.map((item, index) => (
            <div
              key={index}
              className="highlight-card group p-6 rounded-2xl glass hover:border-[rgba(99,102,241,0.3)] transition-all duration-300 hover:-translate-y-1"
              style={{ opacity: 1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#06b6d4] flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon size={22} />
              </div>
              <h3 className="text-white font-semibold mb-1">{item.text}</h3>
              <p className="text-sm text-[#64748b]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
