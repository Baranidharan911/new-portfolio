import { useEffect, useRef } from 'react';
import { Briefcase, Plug, MessageSquare, CheckCircle, ExternalLink, ArrowRight } from 'lucide-react';
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

      gsap.from('.freelance-main-card', {
        scrollTrigger: {
          trigger: '.freelance-main-card',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.value-card', {
        scrollTrigger: {
          trigger: '.value-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
      });

      gsap.from('.featured-build', {
        scrollTrigger: {
          trigger: '.featured-build',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: 'power3.out',
      });

      gsap.from('.bottom-cta', {
        scrollTrigger: {
          trigger: '.bottom-cta',
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const valueCards = [
    {
      icon: Briefcase,
      title: 'Full-stack delivery',
      description: 'End-to-end web apps with coherent architecture—frontend UX, backend APIs, and the glue that keeps them reliable.',
    },
    {
      icon: Plug,
      title: 'Integrations that don\'t fall over',
      description: 'OAuth, REST APIs, webhooks, background work—built with rate limits, retries, and observability in mind.',
    },
    {
      icon: MessageSquare,
      title: 'Fast, direct collaboration',
      description: 'Written updates, tight feedback loops, and decisions documented so stakeholders aren\'t guessing what shipped.',
    },
    {
      icon: CheckCircle,
      title: 'Production mindset',
      description: 'Error handling, security basics, and maintainability—shipping features you can extend without a rewrite.',
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

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Section Header */}
        <div className="freelance-header text-center mb-12">
          <span className="section-tag mb-4">freelance · product engineering</span>
          <h2 className="text-headline mt-4 mb-6">
            Freelance <span className="gradient-text">Work</span>
          </h2>
          <p className="text-body text-[#94a3b8] max-w-3xl mx-auto">
            I help teams ship production web products—clear scope, direct communication, and code that's meant to stay online under real API limits and real users.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="freelance-main-card glass rounded-3xl p-6 sm:p-8 lg:p-10 border border-[rgba(99,102,241,0.1)] mb-8">
          <div className="grid xl:grid-cols-2 gap-8 xl:gap-12 2xl:gap-16">
            {/* Left Column - Available for selective projects */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">
                Select freelance & contract work
              </h3>
              
              <div className="space-y-4 text-[#94a3b8] text-[15px] leading-relaxed">
                <p>
                  I take on a small number of projects where the outcome matters: customer-facing SaaS, dashboard-heavy products, and integration-heavy backends (auth, third-party APIs, queues, and operational UX). I'm strongest when the work sits between product design and systems thinking—not just pages, but flows that have to work tomorrow.
                </p>
                
                <p>
                  <span className="text-white font-medium">Proof in production:</span> I'm the builder behind <span className="text-white font-medium">SiteGrip</span>, an AI visibility and programmatic indexing platform used to push URLs through Google Search Console–aligned pipelines, Bing, scheduling, and quota-aware job dispatch—with a full operator dashboard for submissions, activity, and health signals. That's the level of depth I bring to client work: end-to-end ownership from API behavior to the UI that makes it understandable.
                </p>
                
                <p className="text-sm">
                  Typical engagements: MVP → production hardening, new module on an existing app, or API + admin UI for a business that has outgrown spreadsheets and manual workflows.
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <a 
                  href="#contact" 
                  className="btn-primary group"
                >
                  <Briefcase size={18} />
                  <span>Discuss your project</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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

            {/* Right Column - 4 Value Cards */}
            <div className="value-grid grid sm:grid-cols-2 gap-4">
              {valueCards.map((card, index) => (
                <div
                  key={index}
                  className="value-card p-5 rounded-2xl bg-[rgba(22,22,34,0.5)] border border-[rgba(99,102,241,0.1)] hover:border-[rgba(99,102,241,0.3)] transition-all duration-300 group"
                  style={{ opacity: 1 }}
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

        {/* Featured Build Strip */}
        <div className="featured-build glass rounded-2xl p-6 lg:p-8 border border-[rgba(99,102,241,0.15)]">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-[#6366f1] uppercase tracking-wider">Featured product</span>
          </div>
          
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
            SiteGrip — indexing & AI visibility infrastructure
          </h3>
          
          <p className="text-[#94a3b8] text-[15px] leading-relaxed mb-6 max-w-4xl">
            SiteGrip automates URL indexing across search engines and AI discovery workflows, replacing fragile manual submission with scheduled, queued, policy-aware dispatch and real-time operational UI. It's representative of how I work: treat the API surface and the user surface as one system, not two separate projects.
          </p>

          {/* Bullets */}
          <ul className="space-y-2 mb-6">
            {[
              'Dual-lane indexing (e.g. Google + Bing) with quota- and policy-aware submission logic.',
              'Operator-grade dashboard: submissions, queues, activity, and clarity under load—not a demo UI.',
              'Auth + multi-tenant patterns, secure routes, and production deployment considerations baked in.',
            ].map((bullet, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-[#94a3b8]">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#6366f1] shrink-0" />
                {bullet}
              </li>
            ))}
          </ul>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {['React', 'Vite', 'Tailwind', 'Node.js', 'TypeScript', 'Firebase', 'Firestore', 'REST', 'WebSockets'].map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1.5 text-xs font-mono rounded-lg bg-[rgba(99,102,241,0.1)] text-[#818cf8] border border-[rgba(99,102,241,0.15)]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Micro CTA */}
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-sm text-[#6366f1] hover:text-[#818cf8] transition-colors"
          >
            Ask me about architecture & tradeoffs on this build
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Bottom CTA */}
        <div className="bottom-cta text-center mt-12">
          <p className="text-[#94a3b8] mb-6 max-w-2xl mx-auto">
            Have a roadmap item that needs a senior IC mindset—not just extra hands?<br />
            Tell me the problem, the constraints (timeline, APIs, compliance), and the definition of done. I'll reply with a clear scope and how I'd phase it.
          </p>
          <a 
            href="mailto:bbharanidharan43@gmail.com" 
            className="btn-secondary group"
          >
            <span>Start a conversation</span>
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Freelance;
