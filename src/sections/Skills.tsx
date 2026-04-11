import { useEffect, useRef } from 'react';
import { 
  Layout, Server, Database, Cloud, TestTube, BarChart3
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.skills-header', {
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

      // Category cards animation
      gsap.from('.skill-category', {
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power3.out',
      });

      // Tech stack animation
      gsap.from('.tech-item', {
        scrollTrigger: {
          trigger: '.tech-stack',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        scale: 0.8,
        stagger: 0.05,
        duration: 0.5,
        ease: 'back.out(1.7)',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      icon: Layout,
      title: 'Frontend Development',
      description: 'Building responsive, interactive user interfaces with modern frameworks',
      technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3'],
      color: 'from-[#6366f1] to-[#8b5cf6]',
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Creating robust APIs and server-side logic for scalable applications',
      technologies: ['Node.js', 'Express.js', 'FastAPI', 'GraphQL', 'REST APIs'],
      color: 'from-[#06b6d4] to-[#6366f1]',
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Designing efficient database schemas and optimizing queries',
      technologies: ['PostgreSQL', 'MongoDB', 'Firebase', 'Redis', 'Neon'],
      color: 'from-[#8b5cf6] to-[#ec4899]',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Deploying and managing applications in cloud environments',
      technologies: ['Git/GitHub', 'CI/CD', 'Netlify', 'Vercel'],
      color: 'from-[#22c55e] to-[#06b6d4]',
    },
    {
      icon: TestTube,
      title: 'Testing & QA',
      description: 'Ensuring code quality through comprehensive testing strategies',
      technologies: ['Playwright', 'Cypress', 'Automated UI Testing'],
      color: 'from-[#f59e0b] to-[#ef4444]',
    },
    {
      icon: BarChart3,
      title: 'Data & Analytics',
      description: 'Transforming data into actionable insights and visualizations',
      technologies: ['Power BI', 'Data Visualization', 'SQL Analytics'],
      color: 'from-[#ec4899] to-[#8b5cf6]',
    },
  ];

  const techStack = [
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'GraphQL', category: 'API' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Git', category: 'DevOps' },
    { name: 'CI/CD', category: 'DevOps' },
    { name: 'Firebase', category: 'Backend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'Tailwind', category: 'Frontend' },
    { name: 'Playwright', category: 'Testing' },
    { name: 'Redis', category: 'Database' },
    { name: 'Express', category: 'Backend' },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="w-full py-24 lg:py-32 bg-[#12121a] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 animated-grid opacity-30" />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Section Header */}
        <div className="skills-header text-center mb-16">
          <span className="section-tag mb-4">skills</span>
          <h2 className="text-headline mt-4 mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-body text-[#94a3b8] max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life. 
            Constantly learning and adapting to new technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 gap-6 mb-20">
          {skillCategories.map((skill, index) => (
            <div
              key={index}
              className="skill-category group relative p-6 rounded-2xl glass border border-[rgba(99,102,241,0.1)] hover:border-[rgba(99,102,241,0.3)] transition-all duration-500 hover:-translate-y-2"
              style={{ opacity: 1 }}
            >
              {/* Gradient Border on Hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">{skill.title}</h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[#94a3b8] mb-4 leading-relaxed">
                {skill.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
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
          <h3 className="text-title mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="tech-item group px-4 py-2 rounded-lg glass border border-[rgba(99,102,241,0.1)] hover:border-[#6366f1] hover:bg-[rgba(99,102,241,0.1)] transition-all duration-300 cursor-default"
                style={{ opacity: 1 }}
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
