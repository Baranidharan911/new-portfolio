import { Github, Linkedin, Twitter, Mail, ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:baranidharan@example.com', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="w-full py-16 relative overflow-hidden">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6366f1] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#hero" className="inline-block text-2xl font-bold mb-4">
              <span className="gradient-text">barani</span>
              <span className="text-white">dharan</span>
              <span className="text-[#6366f1]">.dev</span>
            </a>
            <p className="text-[#94a3b8] mb-6 max-w-md leading-relaxed">
              Full Stack Developer passionate about building scalable applications 
              and creating impactful digital experiences. Let's build something amazing together.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-[#6366f1] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#94a3b8] hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-[#94a3b8]">
              <li>
                <a href="mailto:bbharanidharan43@gmail.com" className="hover:text-white transition-colors">
                  bbharanidharan43@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919092404522" className="hover:text-white transition-colors">
                  +91 9092404522
                </a>
              </li>
              <li>Coimbatore, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[rgba(99,102,241,0.1)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#64748b] flex items-center gap-1">
            © {currentYear} Baranidharan B. Made with 
            <Heart size={14} className="text-red-500 fill-red-500" /> 
            and lots of ☕
          </p>
          
          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-[#64748b] hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <div className="w-8 h-8 rounded-lg glass flex items-center justify-center group-hover:border-[#6366f1] transition-colors">
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
