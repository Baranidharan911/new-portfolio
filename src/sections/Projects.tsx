import { useEffect, useRef, useState } from 'react';
import { Cpu, ShoppingCart, Building2, ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.projects-header', {
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

      // Project cards animation
      gsap.from('.project-card-wrapper', {
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects: Array<{
    icon: React.ComponentType<{ size: number }>;
    title: string;
    subtitle: string;
    description: string;
    longDescription: string;
    tech: string[];
    features: string[];
    stats: Record<string, string>;
    color: string;
    gradient: string;
    links: { demo: string; github: string };
  }> = [
    {
      icon: Cpu,
      title: 'IoT Device Management Platform',
      subtitle: 'Industrial IoT Solution',
      description: 'A comprehensive monitoring platform for IoT-enabled RO water filters using MQTT protocol. Features real-time dashboards, device tracking, alert systems, and predictive maintenance capabilities.',
      longDescription: 'Built an enterprise-grade IoT platform that manages thousands of connected devices, processes millions of data points daily, and provides actionable insights through advanced analytics.',
      tech: ['React', 'Node.js', 'MQTT', 'Firebase', 'Chart.js', 'Socket.io'],
      features: ['Real-time Monitoring', 'Device Management', 'Alert System', 'Analytics Dashboard'],
      stats: { users: '500+', devices: '1000+', uptime: '99.9%' },
      color: '#6366f1',
      gradient: 'from-[#6366f1] to-[#8b5cf6]',
      links: { demo: '#', github: '#' },
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Platform',
      subtitle: 'Full-Stack Marketplace',
      description: 'Full-featured e-commerce solution with authentication, payment integration, order management, and real-time inventory tracking. Supports multiple vendors and advanced analytics.',
      longDescription: 'Developed a scalable marketplace platform handling thousands of transactions with integrated payment gateways, inventory management, and comprehensive admin dashboards.',
      tech: ['React', 'Firebase', 'Stripe', 'Redux', 'Tailwind CSS', 'Node.js'],
      features: ['Payment Integration', 'Real-time Inventory', 'Multi-vendor Support', 'Admin Dashboard'],
      stats: { orders: '10K+', vendors: '50+', conversion: '4.5%' },
      color: '#06b6d4',
      gradient: 'from-[#06b6d4] to-[#6366f1]',
      links: { demo: '#', github: '#' },
    },
    {
      icon: Building2,
      title: 'Hostel Management System',
      subtitle: 'Educational Institution ERP',
      description: 'Real-time admin dashboard improving operational efficiency by 30%. Includes room allocation, fee management, student tracking, and comprehensive reporting modules.',
      longDescription: 'Architected a complete hostel management solution that streamlined operations, reduced manual work, and improved student satisfaction through digital transformation.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Material-UI'],
      features: ['Room Allocation', 'Fee Management', 'Student Portal', 'Reports & Analytics'],
      stats: { students: '2000+', efficiency: '+30%', satisfaction: '95%' },
      color: '#22c55e',
      gradient: 'from-[#22c55e] to-[#06b6d4]',
      links: { demo: '#', github: '#' },
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="w-full py-24 lg:py-32 bg-[#12121a] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 animated-grid opacity-20" />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Section Header */}
        <div className="projects-header text-center mb-16">
          <span className="section-tag mb-4">projects</span>
          <h2 className="text-headline mt-4 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-body text-[#94a3b8] max-w-2xl mx-auto">
            Some of my recent work that showcases my skills and experience in building 
            production-ready applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 xl:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <button className="btn-secondary group">
            <span>View All Projects</span>
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Individual Project Card Component with 3D Tilt
interface ProjectCardProps {
  project: {
    icon: React.ComponentType<{ size: number }>;
    title: string;
    subtitle: string;
    description: string;
    longDescription: string;
    tech: string[];
    features: string[];
    stats: { [key: string]: string };
    color: string;
    gradient: string;
    links: { demo: string; github: string };
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    setTransform({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  };

  return (
    <div className="project-card-wrapper" style={{ perspective: '1000px' }}>
      <div
        ref={cardRef}
        className="group relative h-full rounded-3xl overflow-hidden transition-all duration-300"
        style={{
          transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) ${isHovered ? 'scale(1.02)' : 'scale(1)'}`,
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Card Background */}
        <div className="absolute inset-0 glass border border-[rgba(99,102,241,0.1)] group-hover:border-[rgba(99,102,241,0.3)] transition-colors duration-500" />
        
        {/* Gradient Glow */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${50 + transform.rotateY * 2}% ${50 + transform.rotateX * 2}%, ${project.color}15, transparent 40%)`
          }}
        />

        {/* Content */}
        <div className="relative p-6 flex flex-col h-full">
          {/* Header Image Area */}
          <div className={`relative h-48 rounded-2xl bg-gradient-to-r ${project.gradient} mb-6 overflow-hidden`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(255,255,255,0.1)_50%,transparent_60%)] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </div>
            
            {/* Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-lg flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <project.icon size={36} />
              </div>
            </div>

            {/* Stats Badge */}
            <div className="absolute bottom-4 left-4 flex gap-2">
              {Object.entries(project.stats).slice(0, 2).map(([key, value], idx) => (
                <span 
                  key={idx}
                  className="px-2 py-1 rounded-lg bg-black/30 backdrop-blur-sm text-xs text-white font-mono"
                >
                  {value} {key}
                </span>
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <span className="text-xs font-mono text-[#64748b] uppercase tracking-wider">
              {project.subtitle}
            </span>
            <h3 className="text-xl font-bold text-white mt-1 mb-3 group-hover:gradient-text transition-all duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.features.slice(0, 3).map((feature, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs rounded-md bg-[rgba(99,102,241,0.08)] text-[#94a3b8]"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-[rgba(99,102,241,0.1)]">
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.slice(0, 4).map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs text-[#64748b] font-mono"
                >
                  {tech}{idx < Math.min(project.tech.length, 4) - 1 ? ',' : ''}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <a
                href={project.links.demo}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#06b6d4] text-white text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
              <a
                href={project.links.github}
                className="w-10 h-10 flex items-center justify-center rounded-xl glass text-[#94a3b8] hover:text-white hover:border-[#6366f1] transition-all"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
