import { Github, Linkedin, Mail, ArrowUp, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github,   href: 'https://github.com/Baranidharan911',     label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/baranidharan-b-3a3186247/', label: 'LinkedIn' },
    { icon: Mail,     href: 'mailto:bbharanidharan43@gmail.com',       label: 'Email' },
  ];

  const quickLinks = [
    { label: 'About',        href: '#about' },
    { label: 'Skills',       href: '#skills' },
    { label: 'Experience',   href: '#experience' },
    { label: 'Projects',     href: '#projects' },
    { label: 'Freelance',    href: '#freelance' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact',      href: '#contact' },
  ];

  return (
    <footer className="w-full py-14 relative overflow-hidden bg-[#12121a]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6366f1] to-transparent" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <button
              onClick={scrollToTop}
              className="inline-block text-2xl font-bold mb-4"
            >
              <span className="gradient-text">barani</span>
              <span className="text-white">dharan</span>
              <span className="text-[#6366f1]">.dev</span>
            </button>
            <p className="text-[#94a3b8] mb-5 max-w-sm leading-relaxed text-sm">
              Full Stack Engineer & SaaS builder. I design and ship production-grade
              web products end-to-end — from multi-tenant architecture to real-time
              dashboards. Open to freelance work.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-[#6366f1] transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-[#94a3b8] hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + SiteGrip */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-[#94a3b8] text-sm mb-6">
              <li>
                <a href="mailto:bbharanidharan43@gmail.com" className="hover:text-white transition-colors break-all">
                  bbharanidharan43@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919092404522" className="hover:text-white transition-colors">
                  +91 9092404522
                </a>
              </li>
              <li className="text-[#64748b]">Coimbatore, India</li>
            </ul>

            <a
              href="https://www.sitegrip.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#f59e0b] hover:text-[#fbbf24] transition-colors font-medium"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f59e0b] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#f59e0b]" />
              </span>
              SiteGrip — live at sitegrip.com
              <ExternalLink size={11} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[rgba(99,102,241,0.1)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#64748b] flex items-center gap-1">
            © {currentYear} Baranidharan B · Built with
            <Heart size={12} className="text-red-500 fill-red-500 mx-0.5" />
            and lots of ☕
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs text-[#64748b] hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-lg glass flex items-center justify-center group-hover:border-[#6366f1] transition-colors">
              <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
