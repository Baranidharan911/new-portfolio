import { useEffect, useRef } from 'react';
import { Briefcase, Clock, Users, CheckCircle, ExternalLink, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Freelance = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.freelance-header', {
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

      gsap.from('.freelance-intro', {
        scrollTrigger: {
          trigger: '.freelance-intro',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.freelance-card', {
        scrollTrigger: {
          trigger: '.freelance-grid',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.7,
        ease: 'power3.out',
      });

      gsap.from('.service-item', {
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        x: -30,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const freelanceProjects = [
    {
      title: 'E-Commerce Platform Development',
      client: 'Local Retail Business',
      duration: '3 weeks',
      description: 'Built a full-featured e-commerce platform with product management, shopping cart, and secure payment integration using Stripe.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      status: 'Completed',
      highlights: ['Payment integration', 'Admin dashboard', 'Inventory management'],
    },
    {
      title: 'ERP Integration Solution',
      client: 'Small Manufacturing Company',
      duration: '2 weeks',
      description: 'Developed custom modules to integrate existing ERP systems with modern web applications for better data flow.',
      technologies: ['Node.js', 'GraphQL', 'PostgreSQL'],
      status: 'Completed',
      highlights: ['Data synchronization', 'API development', 'Reporting module'],
    },
    {
      title: 'Web Application UI/UX Redesign',
      client: 'Tech Startup',
      duration: '1 week',
      description: 'Redesigned and implemented modern, responsive UI components improving user engagement by 40%.',
      technologies: ['React', 'Tailwind CSS', 'Figma'],
      status: 'Completed',
      highlights: ['Responsive design', 'Component library', 'Performance optimization'],
    },
  ];

  const services = [
    {
      icon: Briefcase,
      title: 'Full Stack Development',
      description: 'End-to-end web application development with modern technologies',
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Fast delivery without compromising on quality',
    },
    {
      icon: Users,
      title: 'Direct Communication',
      description: 'Clear and transparent communication throughout the project',
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Thorough testing and code review for robust solutions',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="freelance"
      className="w-full py-24 lg:py-32 bg-[#12121a] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 animated-grid opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="freelance-header text-center mb-16">
          <span className="section-tag mb-4">freelance</span>
          <h2 className="text-headline mt-4 mb-6">
            Freelance <span className="gradient-text">Work</span>
          </h2>
          <p className="text-body text-[#94a3b8] max-w-2xl mx-auto">
            Taking on select freelance projects to help businesses bring their ideas to life
          </p>
        </div>

        {/* Introduction */}
        <div className="freelance-intro glass rounded-2xl p-8 mb-16 border border-[rgba(99,102,241,0.1)]">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-4">Available for Freelance Projects</h3>
              <p className="text-[#94a3b8] leading-relaxed mb-6">
                I take on selective freelance projects that align with my expertise. Whether you need 
                a full-stack web application, API integration, or frontend development, I deliver 
                high-quality solutions with quick turnaround times.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="btn-primary text-sm py-2.5 px-5">
                  <Briefcase size={16} />
                  <span>Discuss Your Project</span>
                </a>
                <span className="flex items-center gap-2 text-sm text-[#22c55e]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Accepting new clients
                </span>
              </div>
            </div>
            
            {/* Services */}
            <div className="services-grid grid grid-cols-2 gap-4 lg:w-1/2">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="service-item p-4 rounded-xl glass border border-[rgba(99,102,241,0.1)] hover:border-[rgba(99,102,241,0.3)] transition-all duration-300"
                  style={{ opacity: 1 }}
                >
                  <service.icon size={20} className="text-[#6366f1] mb-2" />
                  <h4 className="text-sm font-medium text-white mb-1">{service.title}</h4>
                  <p className="text-xs text-[#64748b]">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Freelance Projects */}
        <div className="freelance-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freelanceProjects.map((project, index) => (
            <div
              key={index}
              className="freelance-card group p-6 rounded-2xl glass border border-[rgba(99,102,241,0.1)] hover:border-[rgba(99,102,241,0.3)] transition-all duration-500 hover:-translate-y-2"
              style={{ opacity: 1 }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs text-[#64748b] font-mono">{project.client}</span>
                  <h3 className="text-lg font-semibold text-white mt-1 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                </div>
                <span className="flex items-center gap-1 text-xs text-[#22c55e] bg-[rgba(34,197,94,0.1)] px-2 py-1 rounded-full">
                  <CheckCircle size={12} />
                  {project.status}
                </span>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-2 text-sm text-[#94a3b8] mb-4">
                <Clock size={14} />
                <span>{project.duration}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-1 text-xs text-[#818cf8]"
                  >
                    <Star size={10} />
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[rgba(99,102,241,0.1)]">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs rounded-md bg-[rgba(99,102,241,0.08)] text-[#94a3b8]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-[#64748b] mb-6">
            Have a project in mind? Let's discuss how I can help bring your vision to life.
          </p>
          <a href="#contact" className="btn-secondary group">
            <span>Start a Conversation</span>
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Freelance;
