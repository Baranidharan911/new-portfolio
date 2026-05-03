import { useEffect, useRef, useState } from 'react';
import { Cpu, ShoppingCart, Building2, Github, ExternalLink, ArrowUpRight, Zap, Shield, Users, Globe } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GITHUB_PROFILE = 'https://github.com/Baranidharan911';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.projects-header', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 88%', toggleActions: 'play none none none' },
        opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
      });

      gsap.from('.sitegrip-card', {
        scrollTrigger: { trigger: '.sitegrip-card', start: 'top 92%', toggleActions: 'play none none none' },
        opacity: 0, y: 50, duration: 0.9, ease: 'power3.out',
      });

      gsap.from('.project-card-wrapper', {
        scrollTrigger: { trigger: '.projects-sub-grid', start: 'top 95%', toggleActions: 'play none none none' },
        opacity: 0, y: 50, stagger: 0.12, duration: 0.8, ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const siteGripFeatures = [
    { icon: Zap, text: 'Async job queue with circuit breaker, exponential backoff & dead-letter queue' },
    { icon: Shield, text: 'SHA-256 idempotency prevents duplicate submissions within 24h windows' },
    { icon: Users, text: 'Multi-tenant workspaces with weight-based quota distribution across billing tiers' },
    { icon: Globe, text: 'OAuth load split across 5 GCP projects via consistent hashing to multiply API quota' },
  ];

  const siteGripTech = [
    'React', 'TypeScript', 'Node.js', 'Firebase', 'Firestore',
    'Socket.io', 'GCP', 'App Engine', 'Cloud Build', 'Razorpay', 'OAuth 2.0',
  ];

  const internshipProjects: Array<{
    icon: React.ComponentType<{ size: number }>;
    title: string;
    subtitle: string;
    description: string;
    tech: string[];
    features: string[];
    highlight: string;
    color: string;
    gradient: string;
  }> = [
    {
      icon: Cpu,
      title: 'IoT Device Management',
      subtitle: 'Industrial IoT Solution',
      description: 'Real-time monitoring platform for IoT-enabled RO water filters using MQTT protocol. Features live dashboards, device tracking, alert systems and predictive maintenance.',
      tech: ['React', 'Node.js', 'MQTT', 'Firebase', 'Chart.js', 'Socket.io'],
      features: ['Real-time Monitoring', 'Device Management', 'Alert System', 'Analytics'],
      highlight: 'MQTT + Socket.io real-time pipeline',
      color: '#6366f1',
      gradient: 'from-[#6366f1] to-[#8b5cf6]',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Platform',
      subtitle: 'Full-Stack Marketplace',
      description: 'Full-featured marketplace with authentication, Stripe payments, order management, real-time inventory and multi-vendor support.',
      tech: ['React', 'Firebase', 'Stripe', 'Redux', 'Tailwind CSS', 'Node.js'],
      features: ['Stripe Payments', 'Real-time Inventory', 'Multi-vendor', 'Admin Panel'],
      highlight: 'Stripe + Firebase real-time sync',
      color: '#06b6d4',
      gradient: 'from-[#06b6d4] to-[#6366f1]',
    },
    {
      icon: Building2,
      title: 'Hostel Management ERP',
      subtitle: 'Educational Institution ERP',
      description: 'Full ERP system for hostel administration — room allocation, fee management, student portal and comprehensive reporting. Improved operational efficiency by 30%.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Material-UI'],
      features: ['Room Allocation', 'Fee Management', 'Student Portal', 'Reports'],
      highlight: 'MERN stack, +30% efficiency',
      color: '#22c55e',
      gradient: 'from-[#22c55e] to-[#06b6d4]',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="w-full py-24 lg:py-32 bg-[#12121a] relative overflow-hidden"
    >
      <div className="absolute inset-0 animated-grid opacity-20" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Header */}
        <div className="projects-header text-center mb-14">
          <span className="section-tag mb-4">projects</span>
          <h2 className="text-headline mt-4 mb-5">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-body text-[#94a3b8] max-w-2xl mx-auto">
            From a live SaaS platform to internship projects — real code, real problems, real outcomes.
          </p>
        </div>

        {/* SiteGrip Hero Card */}
        <SiteGripCard features={siteGripFeatures} tech={siteGripTech} />

        {/* Internship Projects Grid */}
        <div className="mt-8">
          <p className="text-xs font-mono text-[#64748b] uppercase tracking-widest mb-6 text-center">
            Internship Projects — Protowiz Pvt Ltd
          </p>
          <div className="projects-sub-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internshipProjects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-14">
          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary group"
          >
            <Github size={18} />
            <span>View All 20+ Projects on GitHub</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

/* ── SiteGrip Hero Card ── */
interface SiteGripFeature {
  icon: React.ComponentType<{ size: number }>;
  text: string;
}

const SiteGripCard = ({ features, tech }: { features: SiteGripFeature[]; tech: string[] }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="sitegrip-card relative rounded-3xl overflow-hidden border transition-all duration-500"
      style={{
        background: 'rgba(16,16,28,0.9)',
        borderColor: hovered ? 'rgba(245,158,11,0.45)' : 'rgba(245,158,11,0.18)',
        boxShadow: hovered ? '0 0 60px rgba(245,158,11,0.12), 0 30px 60px rgba(0,0,0,0.4)' : '0 20px 50px rgba(0,0,0,0.3)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top gradient bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#f97316]" />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none"
        style={{
          opacity: hovered ? 1 : 0,
          background: 'radial-gradient(ellipse at 30% 40%, rgba(245,158,11,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="p-7 sm:p-9 lg:p-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">

          {/* Left */}
          <div>
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[rgba(245,158,11,0.12)] text-[#f59e0b] border border-[rgba(245,158,11,0.2)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f59e0b] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f59e0b]" />
                </span>
                Live SaaS Product
              </span>
              <span className="px-3 py-1.5 rounded-full text-xs font-mono bg-[rgba(99,102,241,0.1)] text-[#818cf8] border border-[rgba(99,102,241,0.2)]">
                Built Solo — Design to Deployment
              </span>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">SiteGrip</h3>
            <p className="text-[#f59e0b] font-mono text-sm mb-5">
              AI-Powered Search Indexing & Visibility Platform
            </p>

            <p className="text-[#94a3b8] text-[15px] leading-relaxed mb-7">
              A production multi-tenant SaaS that cuts URL indexing time from <span className="text-white font-medium">days to hours</span>.
              Handles Google Indexing API, Bing IndexNow, Google Search Console OAuth, subscription billing with
              Razorpay, and AI search engine submission — all with a real-time operator dashboard.
            </p>

            {/* Architecture bullets */}
            <div className="space-y-4 mb-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[rgba(245,158,11,0.12)] flex items-center justify-center shrink-0 mt-0.5">
                    <f.icon size={15} className="text-[#f59e0b]" />
                  </div>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.sitegrip.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-black transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #f59e0b, #f97316)' }}
              >
                <ExternalLink size={15} />
                Visit SiteGrip
              </a>
              <a
                href={GITHUB_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium glass text-[#94a3b8] hover:text-white hover:border-[rgba(245,158,11,0.4)] transition-all duration-300"
              >
                <Github size={15} />
                GitHub (Private)
              </a>
            </div>
          </div>

          {/* Right: Stats + Tech */}
          <div className="flex flex-col gap-6">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Billing Tiers', value: '3', sub: 'Starter · Growth · Agency' },
                { label: 'Architecture', value: '5', sub: 'GCP OAuth projects' },
                { label: 'Retry Logic', value: '3×', sub: 'Exponential backoff' },
                { label: 'Search Engines', value: '4', sub: 'Google · Bing · AI engines' },
              ].map((s, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl border transition-all duration-300"
                  style={{
                    background: 'rgba(22,22,34,0.6)',
                    borderColor: 'rgba(245,158,11,0.12)',
                  }}
                >
                  <div className="text-2xl font-bold text-[#f59e0b] mb-1">{s.value}</div>
                  <div className="text-sm font-semibold text-white mb-1">{s.label}</div>
                  <div className="text-xs text-[#64748b] font-mono">{s.sub}</div>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="p-6 rounded-2xl border" style={{ background: 'rgba(22,22,34,0.6)', borderColor: 'rgba(245,158,11,0.12)' }}>
              <p className="text-xs font-mono text-[#64748b] uppercase tracking-wider mb-4">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs font-mono rounded-lg border text-[#94a3b8] transition-colors duration-300"
                    style={{ background: 'rgba(245,158,11,0.06)', borderColor: 'rgba(245,158,11,0.15)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Key capabilities */}
            <div className="p-5 rounded-2xl border" style={{ background: 'rgba(22,22,34,0.6)', borderColor: 'rgba(245,158,11,0.12)' }}>
              <p className="text-xs font-mono text-[#64748b] uppercase tracking-wider mb-3">Key Capabilities</p>
              <div className="space-y-2">
                {[
                  'Append-only quota ledger for full audit history',
                  'Dual-layer caching (in-memory + localStorage fallback)',
                  'CI/CD via Cloud Build → App Engine auto-scaling',
                  'Real-time quota updates via Socket.io',
                  'Free public tools: PageSpeed, sitemap gen, broken links',
                ].map((cap, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#94a3b8]">
                    <span className="text-[#f59e0b] mt-0.5 shrink-0">›</span>
                    {cap}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Internship Project Card ── */
interface InternshipProject {
  icon: React.ComponentType<{ size: number }>;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  features: string[];
  highlight: string;
  color: string;
  gradient: string;
}

const ProjectCard = ({ project }: { project: InternshipProject }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setTransform({
      rotateX: (y - rect.height / 2) / 18,
      rotateY: (rect.width / 2 - x) / 18,
    });
  };

  return (
    <div className="project-card-wrapper" style={{ perspective: '1000px' }}>
      <div
        ref={cardRef}
        className="group relative h-full rounded-2xl overflow-hidden transition-all duration-300"
        style={{
          transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) ${isHovered ? 'scale(1.02)' : 'scale(1)'}`,
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setTransform({ rotateX: 0, rotateY: 0 }); setIsHovered(false); }}
      >
        <div className="absolute inset-0 glass border border-[rgba(99,102,241,0.1)] group-hover:border-[rgba(99,102,241,0.3)] transition-colors duration-500" />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(600px circle at ${50 + transform.rotateY * 2}% ${50 + transform.rotateX * 2}%, ${project.color}12, transparent 40%)` }}
        />

        <div className="relative p-6 flex flex-col h-full">
          {/* Header */}
          <div className={`relative h-40 rounded-xl bg-gradient-to-r ${project.gradient} mb-5 overflow-hidden`}>
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(255,255,255,0.08)_50%,transparent_60%)] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-lg flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <project.icon size={30} />
              </div>
            </div>
            <div className="absolute bottom-3 left-3">
              <span className="px-2 py-1 rounded-md bg-black/30 backdrop-blur-sm text-xs text-white/80 font-mono">
                {project.highlight}
              </span>
            </div>
          </div>

          <div className="flex-1">
            <span className="text-xs font-mono text-[#64748b] uppercase tracking-wider">{project.subtitle}</span>
            <h3 className="text-lg font-bold text-white mt-1 mb-2">{project.title}</h3>
            <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.features.map((f, i) => (
                <span key={i} className="px-2 py-1 text-xs rounded-md bg-[rgba(99,102,241,0.07)] text-[#94a3b8]">{f}</span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[rgba(99,102,241,0.08)]">
            <div className="flex flex-wrap gap-x-2 gap-y-1 mb-4">
              {project.tech.slice(0, 5).map((t, i) => (
                <span key={i} className="text-xs text-[#64748b] font-mono">
                  {t}{i < Math.min(project.tech.length, 5) - 1 ? '·' : ''}
                </span>
              ))}
            </div>
            <a
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl glass text-[#94a3b8] hover:text-white hover:border-[#6366f1] text-sm font-medium transition-all duration-300"
            >
              <Github size={15} />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
