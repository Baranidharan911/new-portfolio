import { useEffect, useRef } from 'react';
import { Trophy, Award, GraduationCap, Languages, Medal, Star, ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.achievements-header', {
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

      // Cards animation
      gsap.from('.achievement-card', {
        scrollTrigger: {
          trigger: '.achievements-grid',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power3.out',
      });

      // Stats animation
      gsap.from('.stat-item', {
        scrollTrigger: {
          trigger: '.stats-row',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const achievements = [
    {
      icon: Trophy,
      title: '5th Prize - APPINNOVATHON',
      organization: 'INTERACT SCISSDISC',
      date: '2024',
      description: 'Secured 5th place at the prestigious APPINNOVATHON hackathon, competing against 50+ teams with an innovative IoT solution.',
      color: '#f59e0b',
      gradient: 'from-[#f59e0b] to-[#ef4444]',
      link: '#',
    },
    {
      icon: Award,
      title: 'TCS iON NQT Certification',
      organization: 'Tata Consultancy Services',
      date: '2024',
      description: 'Scored 72.49% in the TCS National Qualifier Test, demonstrating strong aptitude and technical capabilities.',
      color: '#6366f1',
      gradient: 'from-[#6366f1] to-[#8b5cf6]',
      link: '#',
    },
    {
      icon: GraduationCap,
      title: 'Data Visualization',
      organization: 'Coursera & University of California',
      date: '2023',
      description: 'Completed comprehensive certification in Data Visualization, mastering tools and techniques for effective data communication.',
      color: '#06b6d4',
      gradient: 'from-[#06b6d4] to-[#6366f1]',
      link: '#',
    },
    {
      icon: Languages,
      title: 'Business English Certification',
      organization: 'Cambridge University',
      date: '2023',
      description: 'Achieved A2 Level Certification in Business English, enhancing professional communication skills for global collaboration.',
      color: '#22c55e',
      gradient: 'from-[#22c55e] to-[#06b6d4]',
      link: '#',
    },
  ];

  const stats = [
    { value: '4+', label: 'Certifications', icon: Medal },
    { value: '1', label: 'Hackathon Win', icon: Trophy },
    { value: '100%', label: 'Commitment', icon: Star },
  ];

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className="w-full py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[rgba(99,102,241,0.03)] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[rgba(6,182,212,0.03)] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="achievements-header text-center mb-16">
          <span className="section-tag mb-4">achievements</span>
          <h2 className="text-headline mt-4 mb-6">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-body text-[#94a3b8] max-w-2xl mx-auto">
            Recognition and certifications that validate my skills and commitment to excellence
          </p>
        </div>

        {/* Stats Row */}
        <div className="stats-row flex flex-wrap justify-center gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item flex items-center gap-4 px-6 py-4 rounded-2xl glass"
              style={{ opacity: 1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#06b6d4] flex items-center justify-center text-white">
                <stat.icon size={22} />
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-[#64748b]">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="achievements-grid grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="achievement-card group relative p-6 rounded-2xl glass border border-[rgba(99,102,241,0.1)] hover:border-[rgba(99,102,241,0.3)] transition-all duration-500 hover:-translate-y-1"
              style={{ opacity: 1 }}
            >
              {/* Hover Gradient */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                style={{ background: `linear-gradient(135deg, ${achievement.color}, transparent)` }}
              />

              <div className="relative flex gap-5">
                {/* Icon */}
                <div 
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${achievement.gradient} flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  <achievement.icon size={26} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:gradient-text transition-all duration-300">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-[#64748b]">{achievement.organization}</p>
                    </div>
                    <span className="text-xs font-mono text-[#64748b] shrink-0">
                      {achievement.date}
                    </span>
                  </div>
                  
                  <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">
                    {achievement.description}
                  </p>

                  {/* Link */}
                  <a
                    href={achievement.link}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#6366f1] hover:text-[#818cf8] transition-colors"
                  >
                    View Credential
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-[#64748b] text-sm">
            Always learning, always growing. Currently pursuing more certifications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
