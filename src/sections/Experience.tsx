import { useEffect, useRef } from 'react';
import { Building, Calendar, ArrowUpRight, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.experience-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Timeline items animation
      gsap.from('.timeline-item', {
        scrollTrigger: {
          trigger: '.timeline-container',
          start: 'top 92%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        x: -50,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Timeline line animation
      gsap.from('.timeline-line-progress', {
        scrollTrigger: {
          trigger: '.timeline-container',
          start: 'top 85%',
          end: 'bottom 80%',
          scrub: 1,
        },
        scaleY: 0,
        transformOrigin: 'top',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      title: 'Full Stack Data Developer',
      company: 'Elbrit Life Sciences Pvt. Ltd.',
      location: 'Coimbatore, India',
      date: 'Jan 2025 - Present',
      type: 'Full-time',
      achievements: [
        {
          text: 'Architected "Elbrit One", a unified enterprise platform integrating Sales, HR, and Inventory modules for real-time production use.',
          highlight: ['Architected "Elbrit One"'],
        },
        {
          text: 'Developed GraphQL-based integrations with ERPNext to synchronize complex datasets, including stock ledgers and sales hierarchies.',
          highlight: ['Developed GraphQL-based integrations'],
        },
        {
          text: 'Designed fault-tolerant data pipelines to eliminate stale analytics and prevent partial updates across distributed systems.',
          highlight: ['Designed fault-tolerant data pipelines'],
        },
        {
          text: 'Resolved critical system issues by analyzing logs and implementing controlled retries and payload validation for failing APIs.',
          highlight: ['Resolved critical system issues'],
        },
        {
          text: 'Automated deployment workflows using GitHub and Netlify, establishing CI/CD pipelines with strict environment consistency and build checks.',
          highlight: ['Automated deployment workflows'],
        },
        {
          text: 'Enhanced release reliability by implementing Playwright-based automated tests for core UI flows and backend data entry.',
          highlight: ['Enhanced release reliability'],
        },
      ],
      technologies: ['React', 'Node.js', 'GraphQL', 'ERPNext', 'PostgreSQL', 'Playwright', 'GitHub', 'Netlify'],
      color: '#6366f1',
    },
    {
      title: 'Software Developer Intern',
      company: 'Protowiz Private Limited',
      location: 'Coimbatore, India',
      date: 'Mar 2024 - Aug 2024',
      type: 'Internship',
      achievements: [
        {
          text: 'Built full-stack web applications using React.js, Node.js, and Firebase, enabling real-time data synchronization.',
          highlight: ['Built full-stack web applications'],
        },
        {
          text: 'Optimized backend responsiveness by 60% through refined database queries and improved API handling.',
          highlight: ['Optimized backend responsiveness by 60%'],
        },
        {
          text: 'Executed production debugging and validated fixes through controlled deployments to ensure application stability.',
          highlight: ['Executed production debugging'],
        },
      ],
      technologies: ['React', 'Firebase', 'Node.js', 'MongoDB', 'Express', 'Git'],
      color: '#06b6d4',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="w-full py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[rgba(99,102,241,0.03)] to-transparent pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Section Header */}
        <div className="experience-header text-center mb-16">
          <span className="section-tag mb-4">experience</span>
          <h2 className="text-headline mt-4 mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-body text-[#94a3b8] max-w-2xl mx-auto">
            My professional journey and the impact I've made at each organization
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline-container relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-[rgba(99,102,241,0.1)]">
            <div className="timeline-line-progress absolute inset-0 bg-gradient-to-b from-[#6366f1] to-[#06b6d4]" />
          </div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="timeline-item relative pl-8 md:pl-20"
                style={{ opacity: 1 }}
              >
                {/* Timeline Dot */}
                <div 
                  className="absolute left-[-5px] md:left-[27px] top-2 w-3 h-3 rounded-full border-2 transition-all duration-300"
                  style={{ 
                    backgroundColor: '#0a0a0f',
                    borderColor: exp.color,
                    boxShadow: `0 0 20px ${exp.color}80`
                  }}
                />

                {/* Content Card */}
                <div className="group relative p-6 md:p-8 rounded-2xl glass border border-[rgba(99,102,241,0.1)] hover:border-[rgba(99,102,241,0.3)] transition-all duration-500 hover:-translate-y-1">
                  {/* Glow Effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ background: `linear-gradient(135deg, ${exp.color} 0%, transparent 100%)` }}
                  />

                  <div className="relative">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                            {exp.title}
                          </h3>
                          <ArrowUpRight 
                            size={20} 
                            className="text-[#64748b] group-hover:text-[#6366f1] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
                          />
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-[#94a3b8] text-sm">
                          <span className="flex items-center gap-1.5">
                            <Building size={14} className="text-[#6366f1]" />
                            {exp.company}
                          </span>
                          <span className="text-[#64748b]">•</span>
                          <span className="flex items-center gap-1.5">
                            <MapPin size={14} className="text-[#64748b]" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-start lg:items-end gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[rgba(99,102,241,0.1)] text-[#818cf8] border border-[rgba(99,102,241,0.2)]">
                          <Calendar size={12} />
                          {exp.date}
                        </span>
                        <span className="text-xs text-[#64748b] font-mono">{exp.type}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li 
                          key={achIndex}
                          className="flex items-start gap-3 text-[#94a3b8] text-sm md:text-[15px] leading-relaxed"
                        >
                          <span 
                            className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: exp.color }}
                          />
                          <span>
                            {achievement.highlight ? (
                              <>
                                <span className="text-white font-semibold">{achievement.highlight[0]}</span>
                                {achievement.text.replace(achievement.highlight[0], '')}
                              </>
                            ) : (
                              achievement.text
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-[rgba(99,102,241,0.1)]">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 text-xs font-mono rounded-lg bg-[rgba(99,102,241,0.08)] text-[#94a3b8] border border-[rgba(99,102,241,0.1)] hover:bg-[rgba(99,102,241,0.15)] hover:text-white transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
