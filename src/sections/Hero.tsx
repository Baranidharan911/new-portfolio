import { useEffect, useState, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import gsap from 'gsap';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const roles = [
    'Full Stack Developer',
    'React & Node.js Expert',
    'GraphQL Developer',
    'ERP Integration Specialist',
    'System Architect',
  ];

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText((prev) =>
          isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-badge', { opacity: 0, y: 30, duration: 0.8, delay: 0.2 })
        .from('.hero-greeting', { opacity: 0, y: 30, duration: 0.8 }, '-=0.5')
        .from('.hero-name', { opacity: 0, y: 50, duration: 1 }, '-=0.5')
        .from('.hero-role', { opacity: 0, y: 30, duration: 0.8 }, '-=0.6')
        .from('.hero-description', { opacity: 0, y: 30, duration: 0.8 }, '-=0.5')
        .from('.hero-cta', { opacity: 0, y: 30, duration: 0.8 }, '-=0.5')
        .from('.hero-socials', { opacity: 0, y: 30, duration: 0.8 }, '-=0.5')
        .from('.hero-scroll', { opacity: 0, duration: 0.8 }, '-=0.3');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Mouse parallax effect for background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePos({ x: x * 20, y: y * 20 });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-30 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)',
            top: '10%',
            left: '10%',
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)',
            bottom: '10%',
            right: '10%',
            transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        
        {/* Grid Pattern */}
        <div className="animated-grid opacity-50" />
        
        {/* Floating Code Snippets */}
        <div className="absolute top-20 left-10 glass-strong px-4 py-2 rounded-lg text-xs font-mono text-[#64748b] float hidden lg:block">
          const developer = {'{...}'}
        </div>
        <div className="absolute bottom-32 left-20 glass-strong px-4 py-2 rounded-lg text-xs font-mono text-[#64748b] float hidden lg:block" style={{ animationDelay: '1s' }}>
          import {'{ Expert }'} from 'experience'
        </div>
        <div className="absolute top-40 right-20 glass-strong px-4 py-2 rounded-lg text-xs font-mono text-[#64748b] float hidden lg:block" style={{ animationDelay: '2s' }}>
          npm run build-success
        </div>
      </div>

      {/* Main Content */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 xl:px-12 w-full pt-20 md:pt-24"
      >
        {/* Availability Badge */}
        <div className="hero-badge inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass mb-8 mt-4">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-[#22c55e]">Available for opportunities</span>
        </div>

        {/* Greeting */}
        <p className="hero-greeting font-mono text-lg text-[#94a3b8] mb-4">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="hero-name text-display mb-6">
          <span className="text-white">Baranidharan</span>
          <span className="gradient-text"> B</span>
        </h1>

        {/* Role with Typing Effect */}
        <div className="hero-role mb-8">
          <span className="font-mono text-xl md:text-2xl text-[#22d3ee] min-h-[2rem]">
            {displayText}
            <span className="inline-block w-0.5 h-[1.2em] bg-[#06b6d4] ml-1 align-middle animate-pulse"></span>
          </span>
        </div>

        {/* Description */}
        <p className="hero-description text-body sm:text-lg lg:text-xl text-[#94a3b8] max-w-3xl xl:max-w-4xl mx-auto mb-10 leading-relaxed px-4">
          A passionate <span className="text-white font-medium">Full Stack Developer</span> with expertise in 
          building enterprise-grade applications. I specialize in React, Node.js, GraphQL, and ERP integrations 
          that drive business growth and operational efficiency.
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-primary group"
            data-cursor-hover
          >
            <Mail size={18} />
            <span>Get In Touch</span>
            <ArrowDown size={16} className="rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="btn-secondary"
            data-cursor-hover
          >
            <FileText size={18} />
            <span>View Projects</span>
          </button>
        </div>

        {/* Social Links */}
        <div className="hero-socials flex items-center justify-center gap-4">
          {[
            { icon: Github, href: '#', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Mail, href: '#contact', label: 'Email' },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="w-12 h-12 rounded-xl glass flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-[#6366f1] transition-all duration-300 hover:scale-110"
              aria-label={social.label}
              data-cursor-hover
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="font-mono text-xs tracking-[0.2em] text-[#64748b]">SCROLL</span>
        <div className="w-6 h-10 rounded-full border-2 border-[#64748b] flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#6366f1] rounded-full animate-bounce"></div>
        </div>
      </div>

      {/* Side Stats - Desktop Only */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block mt-10">
        <div className="flex flex-col gap-6 text-right">
          {[
            { value: '2+', label: 'Years Exp' },
            { value: '10+', label: 'Projects' },
            { value: '5+', label: 'Tech Stacks' },
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className="text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-[#64748b] font-mono">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
