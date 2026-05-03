import { useState, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);
import ParticleBackground from './sections/ParticleBackground';
import Loader from './sections/Loader';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Freelance from './sections/Freelance';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import BackToTop from './sections/BackToTop';
import Toast from './sections/Toast';
import CustomCursor from './sections/CustomCursor';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [toast, setToast] = useState<{ show: boolean; message: string }>({ show: false, message: '' });

  useEffect(() => {
    // Recalculate all ScrollTrigger positions once DOM is ready
    // so any section already in view (or scrolled past) resolves correctly
    const earlyRefresh = setTimeout(() => ScrollTrigger.refresh(), 100);

    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => ScrollTrigger.refresh(), 200);
    }, 2500);

    // Scroll progress
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      clearTimeout(earlyRefresh);
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const showToast = (message: string) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#f1f5f9] overflow-x-hidden">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      {/* Loader */}
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Background Particles */}
      <ParticleBackground />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Freelance />
        <Achievements />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top */}
      <BackToTop />

      {/* Toast Notification */}
      <Toast show={toast.show} message={toast.message} />
    </div>
  );
}

export default App;
