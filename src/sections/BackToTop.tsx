import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`fixed bottom-8 right-8 w-14 h-14 rounded-2xl flex items-center justify-center text-white cursor-pointer z-[999] transition-all duration-500 ${
        isVisible ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-5'
      }`}
      style={{
        background: isHovered 
          ? 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)' 
          : 'rgba(22, 22, 34, 0.9)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(99, 102, 241, 0.2)',
        boxShadow: isHovered 
          ? '0 15px 40px rgba(99, 102, 241, 0.4)' 
          : '0 10px 30px rgba(0, 0, 0, 0.3)',
      }}
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title="Back to Top"
      aria-label="Back to Top"
    >
      <ArrowUp 
        size={22} 
        className={`transition-transform duration-300 ${isHovered ? '-translate-y-1' : ''}`}
      />
    </button>
  );
};

export default BackToTop;
