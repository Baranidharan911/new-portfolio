import { useEffect, useRef } from 'react';
import { Layout, Server, Database, Cloud, TestTube, CreditCard } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skills-header', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 88%', toggleActions: 'play none none none' },
        opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
      });
      gsap.from('.skill-category', {
        scrollTrigger: { trigger: '.skills-grid', start: 'top 92%', toggleActions: 'play none none none' },
        opacity: 0, y: 50, stagger: 0.1, duration: 0.7, ease: 'power3.out',
      });
      gsap.from('.tech-item', {
        scrollTrigger: { trigger: '.tech-stack', start: 'top 95%', toggleActions: 'play none none none' },
        opacity: 0, y: 8, duration: 0.5, ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      icon: Layout,
      title: 'Frontend',
      description: 'Responsive, interactive UIs with modern frameworks and real-time capabilities',
      technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5 / CSS3'],
      color: 'from-[#6366f1] to-[#8b5cf6]',
    },
    {
      icon: Server,
      title: 'Backend',
      description: 'Scalable APIs, async job queues, WebSocket servers and server-side logic',
      technologies: ['Node.js', 'Express.js', 'GraphQL', 'REST APIs', 'Socket.io'],
      color: 'from-[#06b6d4] to-[#6366f1]',
    },
    {
      icon: Database,
      title: 'Databases',
      description: 'Efficient schema design, query optimization and real-time data sync',
      technologies: ['PostgreSQL', 'MongoDB', 'Firebase / Firestore', 'Redis', 'Neon'],
      color: 'from-[#8b5cf6] to-[#ec4899]',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Cloud deployment, CI/CD automation and infrastructure management',
      technologies: ['GCP', 'App Engine', 'Cloud Build', 'Netlify / Vercel', 'CI/CD'],
      color: 'from-[#22c55e] to-[#06b6d4]',
    },
    {
      icon: TestTube,
      title: 'Testing & QA',
      description: 'End-to-end and automated testing to catch regressions before they reach users',
      technologies: ['Playwright', 'Cypress', 'Automated UI Testing', 'ERPNext QA'],
      color: 'from-[#f59e0b] to-[#ef4444]',
    },
    {
      icon: CreditCard,
      title: 'SaaS & Payments',
      description: 'Billing, multi-tenancy, OAuth integrations and production-grade SaaS patterns',
      technologies: ['Razorpay', 'OAuth 2.0', 'Multi-tenancy', 'Job Queues', 'Webhooks'],
      color: 'from-[#f59e0b] to-[#8b5cf6]',
    },
  ];

  const techStack = [
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'GraphQL', category: 'API' },
    { name: 'Socket.io', category: 'Realtime' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Firebase', category: 'Backend' },
    { name: 'GCP', category: 'Cloud' },
    { name: 'App Engine', category: 'Cloud' },
    { name: 'Razorpay', category: 'Payments' },
    { name: 'Playwright', category: 'Testing' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'Tailwind', category: 'Frontend' },
    { name: 'ERPNext', category: 'ERP' },
    { name: 'CI/CD', category: 'DevOps' },
    { name: 'OAuth 2.0', category: 'Auth' },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="w-full py-24 lg:py-32 bg-[#12121a] relative overflow-hidden"
    >
      <div className="absolute inset-0 animated-grid opacity-30" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="skills-header text-center mb-16">
          <span className="section-tag mb-4">skills</span>
          <h2 className="text-headline mt-4 mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-body text-[#94a3b8] max-w-2xl mx-auto">
            Battle-tested technologies across the full stack — from browser to cloud.
          </p>
        </div>

        <div className="skills-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((skill, i) => (
            <div
              key={i}
              className="skill-category group relative p-6 rounded-2xl glass border border-[rgba(99,102,241,0.1)] hover:border-[rgba(99,102,241,0.3)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-8 transition-opacity duration-500`} />

              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white pt-2">{skill.title}</h3>
              </div>

              <p className="text-sm text-[#94a3b8] mb-4 leading-relaxed">{skill.description}</p>

              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-[rgba(99,102,241,0.08)] text-[#94a3b8] border border-[rgba(99,102,241,0.1)] hover:bg-[rgba(99,102,241,0.15)] hover:text-white transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Cloud */}
        <div className="tech-stack text-center">
          <h3 className="text-title mb-8">Full Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="tech-item group px-4 py-2 rounded-lg glass border border-[rgba(99,102,241,0.1)] hover:border-[#6366f1] hover:bg-[rgba(99,102,241,0.1)] transition-all duration-300 cursor-default"
              >
                <span className="text-sm font-medium text-[#94a3b8] group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
