import { useEffect, useRef } from 'react';
import { Briefcase, Plug, MessageSquare, CheckCircle, ExternalLink, ArrowRight, Layers, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Freelance = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.freelance-header', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 88%', toggleActions: 'play none none none' },
        immediateRender: false, opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
      });
      gsap.from('.freelance-main-card', {
        scrollTrigger: { trigger: '.freelance-main-card', start: 'top 92%', toggleActions: 'play none none none' },
        immediateRender: false, opacity: 0, y: 50, duration: 0.8, ease: 'power3.out',
      });
      gsap.from('.value-card', {
        scrollTrigger: { trigger: '.value-grid', start: 'top 95%', toggleActions: 'play none none none' },
        immediateRender: false, opacity: 0, y: 30, stagger: 0.1, duration: 0.6, ease: 'power3.out',
      });
      gsap.from('.featured-build', {
        scrollTrigger: { trigger: '.featured-build', start: 'top 95%', toggleActions: 'play none none none' },
        immediateRender: false, opacity: 0, y: 40, duration: 0.7, ease: 'power3.out',
      });
      gsap.from('.bottom-cta', {
        scrollTrigger: { trigger: '.bottom-cta', start: 'top 95%', toggleActions: 'play none none none' },
        immediateRender: false, opacity: 0, y: 30, duration: 0.6, ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const valueCards = [
    {
      icon: Layers,
      title: 'Full-stack delivery',
      description: 'Frontend UX, backend APIs, database design, and the deployment pipeline — one engineer, coherent architecture.',
    },
    {
      icon: Plug,
      title: 'Integrations that hold up',
      description: 'OAuth, REST APIs, webhooks, and async job queues built with rate limiting, retries, circuit breakers, and observability.',
    },
    {
      icon: MessageSquare,
      title: 'Direct collaboration',
      description: 'Written updates, tight feedback loops, decisions documented — you always know what shipped and why.',
    },
    {
      icon: CheckCircle,
      title: 'Production-ready code',
      description: 'Error handling, security basics, maintainability — code you can extend without a rewrite six months later.',
    },
  ];

  const siteGripHighlights = [
    'Multi-tenant SaaS with workspace isolation, team invites, and weight-based quota distribution per billing tier.',
    'Async job queue with circuit breaker (Google → Bing failover), exponential backoff, and dead-letter queue.',
    'Subscription billing via Razorpay (Starter, Growth, Agency) with add-on quota packs and real-time usage tracking.',
    'Admin panel with full user management, project pool control, billing oversight, and system configuration.',
    'OAuth load distributed across 5 GCP projects via consistent hashing to multiply daily API quota capacity.',
  ];

  return (
    <section
      ref={sectionRef}
      id="freelance"
      className="w-full py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 animated-grid opacity-20" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Header */}
        <div className="freelance-header text-center mb-12">
          <span className="section-tag mb-4">freelance · product engineering</span>
          <h2 className="text-headline mt-4 mb-6">
            Available for <span className="gradient-text">Freelance</span>
          </h2>
          <p className="text-body text-[#94a3b8] max-w-3xl mx-auto">
            I take on a small number of projects where the outcome matters — SaaS products, integration-heavy
            backends, and dashboards that have to work under real load with real users.
          </p>
        </div>

        {/* Main Card */}
        <div className="freelance-main-card glass rounded-3xl p-6 sm:p-8 lg:p-10 border border-[rgba(99,102,241,0.1)] mb-8">
          <div className="grid xl:grid-cols-2 gap-8 xl:gap-12 2xl:gap-16">

            {/* Left */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">
                Selective freelance & contract work
              </h3>

              <div className="space-y-4 text-[#94a3b8] text-[15px] leading-relaxed">
                <p>
                  I work best when the problem sits between product thinking and systems engineering — not
                  just pages, but flows that need to survive tomorrow. My strongest engagements: MVPs taken
                  to production, new modules on existing SaaS apps, or API + admin UI for businesses that
                  have outgrown spreadsheets.
                </p>

                <p>
                  <span className="text-white font-medium">Proof in production:</span> I built{' '}
                  <a
                    href="https://www.sitegrip.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f59e0b] font-semibold hover:underline"
                  >
                    SiteGrip
                  </a>{' '}
                  end-to-end — multi-tenant architecture, subscription billing, async job queues with
                  circuit breakers, OAuth across 5 GCP projects, and a real-time operator dashboard.
                  That depth is what I bring to client work.
                </p>

                <p className="text-sm">
                  I handle full scope: scoping, architecture decisions, implementation, deployment, and
                  handoff with documentation. No offshore handoffs, no halfway implementations.
                </p>
              </div>

              {/* What I build */}
              <div className="mt-6 p-5 rounded-2xl bg-[rgba(99,102,241,0.05)] border border-[rgba(99,102,241,0.1)]">
                <p className="text-xs font-mono text-[#64748b] uppercase tracking-wider mb-3">What I build</p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Multi-tenant SaaS',
                    'Real-time dashboards',
                    'API integrations',
                    'Admin & operator panels',
                    'Payment systems',
                    'Job queue systems',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-[#94a3b8]">
                      <Zap size={12} className="text-[#6366f1] shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <a href="#contact" className="btn-primary group">
                  <Briefcase size={18} />
                  <span>Discuss your project</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <span className="flex items-center gap-2 text-sm text-[#22c55e]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  Accepting new clients
                </span>
              </div>
            </div>

            {/* Right: Value Cards */}
            <div className="value-grid grid sm:grid-cols-2 gap-4">
              {valueCards.map((card, i) => (
                <div
                  key={i}
                  className="value-card p-5 rounded-2xl bg-[rgba(22,22,34,0.5)] border border-[rgba(99,102,241,0.1)] hover:border-[rgba(99,102,241,0.3)] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#06b6d4] flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    <card.icon size={20} />
                  </div>
                  <h4 className="text-white font-semibold mb-2 text-[15px]">{card.title}</h4>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SiteGrip Featured Strip */}
        <div className="featured-build rounded-2xl p-6 lg:p-8 border overflow-hidden relative"
          style={{ background: 'rgba(14,14,22,0.95)', borderColor: 'rgba(245,158,11,0.2)' }}>
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#f97316]" />

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-[#f59e0b] uppercase tracking-wider">Featured build</span>
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[rgba(245,158,11,0.1)] border border-[rgba(245,158,11,0.2)] text-xs text-[#f59e0b]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f59e0b] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#f59e0b]" />
              </span>
              Live at sitegrip.com
            </span>
          </div>

          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
            SiteGrip — Search Indexing & AI Visibility Platform
          </h3>

          <p className="text-[#94a3b8] text-[15px] leading-relaxed mb-6 max-w-4xl">
            A production SaaS that automates URL indexing across Google, Bing, and AI search engines
            (ChatGPT, Claude, Perplexity, Gemini). Cuts indexing time from days to hours. Built with the
            patterns I bring to every client project: the API surface and the user surface designed as one system.
          </p>

          <ul className="space-y-2.5 mb-6">
            {siteGripHighlights.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[#94a3b8]">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#f59e0b] shrink-0" />
                {bullet}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mb-5">
            {['React', 'TypeScript', 'Node.js', 'Firebase', 'Firestore', 'Socket.io', 'GCP', 'App Engine', 'Cloud Build', 'Razorpay', 'OAuth 2.0'].map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-xs font-mono rounded-lg border text-[#94a3b8]"
                style={{ background: 'rgba(245,158,11,0.06)', borderColor: 'rgba(245,158,11,0.18)' }}
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href="https://www.sitegrip.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#f59e0b] hover:text-[#fbbf24] transition-colors font-medium"
          >
            Visit sitegrip.com
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Bottom CTA */}
        <div className="bottom-cta text-center mt-12">
          <p className="text-[#94a3b8] mb-6 max-w-2xl mx-auto text-[15px] leading-relaxed">
            Have a roadmap item that needs an engineer who owns the outcome, not just the tickets?
            Tell me the problem, the constraints, and the definition of done — I'll reply with a
            clear scope and how I'd phase it.
          </p>
          <a
            href="mailto:bbharanidharan43@gmail.com"
            className="btn-secondary group"
          >
            <span>Start a conversation</span>
            <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Freelance;
