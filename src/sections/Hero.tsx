import { useEffect, useState, useRef, Suspense, lazy } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Briefcase } from 'lucide-react';
import gsap from 'gsap';

const HeroScene = lazy(() => import('../components/HeroScene'));

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  const roles = [
    'SaaS Product Builder',
    'Full Stack Engineer',
    'API & Integration Expert',
    'System Architect',
    'React & Node.js Dev',
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 45 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2200);
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-badge', { opacity: 0, y: 24, duration: 0.7, delay: 0.2 })
        .from('.hero-greeting', { opacity: 0, y: 24, duration: 0.7 }, '-=0.4')
        .from('.hero-name', { opacity: 0, y: 40, duration: 0.9 }, '-=0.4')
        .from('.hero-role', { opacity: 0, y: 20, duration: 0.7 }, '-=0.5')
        .from('.hero-description', { opacity: 0, y: 20, duration: 0.7 }, '-=0.4')
        .from('.hero-stats', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
        .from('.hero-cta', { opacity: 0, y: 20, duration: 0.7 }, '-=0.4')
        .from('.hero-socials', { opacity: 0, y: 20, duration: 0.7 }, '-=0.4')
        .from('.hero-3d', { opacity: 0, scale: 0.85, duration: 1.2, ease: 'power2.out' }, '-=1.0')
        .from('.hero-scroll', { opacity: 0, duration: 0.7 }, '-=0.3');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePos({ x: x * 18, y: y * 18 });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[900px] h-[900px] rounded-full opacity-25 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.45) 0%, transparent 70%)',
            top: '-5%',
            left: '-5%',
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
            transition: 'transform 0.35s ease-out',
          }}
        />
        <div
          className="absolute w-[700px] h-[700px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)',
            bottom: '0%',
            right: '0%',
            transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)`,
            transition: 'transform 0.35s ease-out',
          }}
        />
        <div className="animated-grid opacity-40" />

        {/* Floating code chips */}
        <div className="absolute top-28 left-8 glass-strong px-4 py-2 rounded-lg text-xs font-mono text-[#64748b] float hidden xl:block">
          await indexUrl('sitegrip.com')
        </div>
        <div className="absolute bottom-36 left-16 glass-strong px-4 py-2 rounded-lg text-xs font-mono text-[#64748b] float hidden xl:block" style={{ animationDelay: '1.2s' }}>
          job.status = 'success' ✓
        </div>
        <div className="absolute top-48 right-16 glass-strong px-4 py-2 rounded-lg text-xs font-mono text-[#64748b] float hidden xl:block" style={{ animationDelay: '2.4s' }}>
          quota.remaining -= 1
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 pt-16 md:pt-20">
        <div className="grid lg:grid-cols-5 gap-8 xl:gap-12 items-center max-w-[1400px] mx-auto">

          {/* Left: Text Content */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Availability Badge */}
            <div className="hero-badge inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass mb-7">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-sm font-medium text-[#22c55e]">Open to freelance projects</span>
            </div>

            {/* Greeting */}
            <p className="hero-greeting font-mono text-base text-[#94a3b8] mb-3">
              Hey, I'm
            </p>

            {/* Name */}
            <h1 className="hero-name text-display mb-5">
              <span className="text-white">Baranidharan</span>
              <span className="gradient-text"> B</span>
            </h1>

            {/* Role Typing */}
            <div className="hero-role mb-6">
              <span className="font-mono text-xl md:text-2xl text-[#22d3ee]">
                {displayText}
                <span className="inline-block w-0.5 h-[1.1em] bg-[#06b6d4] ml-1 align-middle animate-pulse" />
              </span>
            </div>

            {/* Description */}
            <p className="hero-description text-body text-[#94a3b8] max-w-xl mb-8 leading-relaxed">
              I design and ship <span className="text-white font-medium">production-grade web products</span> —
              multi-tenant SaaS, real-time dashboards, third-party API integrations, and async job systems.{' '}
              <span className="text-[#818cf8] font-medium">Founder of SiteGrip</span>, a live search indexing
              platform with paying users.
            </p>

            {/* Stats Row */}
            <div className="hero-stats flex flex-wrap gap-6 mb-8 justify-center lg:justify-start">
              {[
                { value: '2+', label: 'Years Exp' },
                { value: '1', label: 'Live SaaS' },
                { value: '20+', label: 'Projects Built' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start">
                  <span className="text-2xl font-bold gradient-text">{stat.value}</span>
                  <span className="text-xs text-[#64748b] font-mono mt-0.5">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="hero-cta flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary group"
                data-cursor-hover
              >
                <Briefcase size={18} />
                <span>Hire Me</span>
                <ArrowDown size={15} className="rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-secondary"
                data-cursor-hover
              >
                <span>See My Work</span>
              </button>
            </div>

            {/* Socials */}
            <div className="hero-socials flex items-center gap-3">
              {[
                { icon: Github, href: 'https://github.com/Baranidharan911', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/baranidharan-b-3a3186247/', label: 'LinkedIn' },
                { icon: Mail, href: '#contact', label: 'Email' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-[#6366f1] transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                  data-cursor-hover
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: 3D Scene */}
          <div className="hero-3d lg:col-span-2 h-[380px] lg:h-[520px] hidden lg:block">
            <Suspense fallback={null}>
              <HeroScene />
            </Suspense>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] tracking-[0.25em] text-[#64748b] uppercase">Scroll</span>
        <div className="w-5 h-9 rounded-full border border-[#64748b] flex justify-center pt-1.5">
          <div className="w-1 h-1.5 bg-[#6366f1] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
