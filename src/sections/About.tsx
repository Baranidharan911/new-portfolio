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

  const codeContent = `const developer = {
  name: 'Baranidharan B',
  role: 'Full Stack Developer',
  location: 'Coimbatore, India',
  experience: 2, // years
  expertise: [
    'React.js', 'Node.js', 'GraphQL',
    'TypeScript', 'PostgreSQL', 'ERPNext'
  ],
  currentlyAt: 'Elbrit Life Sciences',
  building: 'Enterprise Solutions',
  passion: () => 'Creating impactful tech',
  hireable: true
};`;

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[rgba(99,102,241,0.03)] to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
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
              <div className="p-6 font-mono text-sm overflow-x-auto">
                <pre className="leading-relaxed">
                  {codeContent.split('\n').map((line, index) => (
                    <div key={index} className="flex">
                      <span className="text-[#64748b] w-8 shrink-0 select-none">{index + 1}</span>
                      <span dangerouslySetInnerHTML={{ 
                        __html: line
                          .replace(/const|let|var/g, '<span class="text-[#c084fc]">$&</span>')
                          .replace(/'[^']*'/g, '<span class="text-[#4ade80]">$&</span>')
                          .replace(/"[^"]*"/g, '<span class="text-[#4ade80]">$&</span>')
                          .replace(/true|false/g, '<span class="text-[#f472b6]">$&</span>')
                          .replace(/\/\/.*$/gm, '<span class="text-[#64748b]">$&</span>')
                          .replace(/\b(\d+)\b/g, '<span class="text-[#f472b6]">$&</span>')
                          .replace(/[{}\[\]]/g, '<span class="text-[#fbbf24]">$&</span>')
                          .replace(/:/g, '<span class="text-[#60a5fa]">:</span>')
                          .replace(/,/g, '<span class="text-[#64748b]">,</span>')
                      }} />
                    </div>
                  ))}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="highlights-grid grid grid-cols-2 md:grid-cols-3 gap-4">
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
