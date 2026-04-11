import { useEffect, useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'freelance', label: 'Freelance' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMobileMenuOpen) {
        gsap.to(mobileMenuRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
          display: 'block',
        });
        document.body.style.overflow = 'hidden';
      } else {
        gsap.to(mobileMenuRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.2,
          ease: 'power2.in',
          onComplete: () => {
            if (mobileMenuRef.current) {
              mobileMenuRef.current.style.display = 'none';
            }
          },
        });
        document.body.style.overflow = '';
      }
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 glass-strong'
            : 'py-4 md:py-6 bg-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold group"
            data-cursor-hover
          >
            <span className="gradient-text">barani</span>
            <span className="text-white">dharan</span>
            <span className="text-[#6366f1]">.dev</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-white'
                    : 'text-[#94a3b8] hover:text-white'
                }`}
                data-cursor-hover
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#6366f1]" />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden xl:flex btn-primary text-sm py-2.5 px-5"
            data-cursor-hover
          >
            Hire Me
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden w-11 h-11 md:w-10 md:h-10 rounded-xl glass flex items-center justify-center text-white active:scale-95 transition-transform"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 z-40 glass-strong xl:hidden hidden"
        style={{ opacity: 0, y: -20 }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-4 md:gap-6 pt-16 px-6">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-xl md:text-2xl font-semibold transition-colors duration-300 py-2 ${
                activeSection === item.id
                  ? 'gradient-text'
                  : 'text-[#94a3b8] hover:text-white'
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-primary mt-6 md:mt-8"
          >
            Hire Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
