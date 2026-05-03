import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ContactProps {
  onShowToast?: (message: string) => void;
}

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string | undefined;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string | undefined;

const Contact = ({ onShowToast }: ContactProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef    = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting]  = useState(false);
  const [isSubmitted,  setIsSubmitted]   = useState(false);
  const [errorMsg,     setErrorMsg]      = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-header', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 88%', toggleActions: 'play none none none' },
        opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
      });
      gsap.from('.contact-content', {
        scrollTrigger: { trigger: '.contact-content', start: 'top 92%', toggleActions: 'play none none none' },
        opacity: 0, y: 50, duration: 0.8, stagger: 0.2, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setErrorMsg('');
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    // If EmailJS is not configured, open mailto as fallback
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      const body = `Hi Baranidharan,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\n${formData.message}`;
      window.open(
        `mailto:bbharanidharan43@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`,
        '_blank'
      );
      setIsSubmitting(false);
      setIsSubmitted(true);
      onShowToast?.('Opening your email client...');
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name:    formData.name,
          email:   formData.email,
          title:   formData.subject,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
      onShowToast?.("Message sent! I'll get back to you soon.");
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 4000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setErrorMsg('Failed to send. Please email me directly at bbharanidharan43@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bbharanidharan43@gmail.com',
      href: 'mailto:bbharanidharan43@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9092404522',
      href: 'tel:+919092404522',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Coimbatore, India',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Github,   href: 'https://github.com/Baranidharan911',      label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/baranidharan-b-3a3186247/',  label: 'LinkedIn' },
  ];

  const subjectOptions = [
    { value: 'freelance',    label: 'Freelance Project' },
    { value: 'saas',         label: 'SaaS / Product Build' },
    { value: 'integration',  label: 'API / Integration Work' },
    { value: 'job',          label: 'Full-time Opportunity' },
    { value: 'sitegrip',     label: 'About SiteGrip' },
    { value: 'other',        label: 'Other' },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="w-full py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 animated-grid opacity-20" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Header */}
        <div className="contact-header text-center mb-16">
          <span className="section-tag mb-4">contact</span>
          <h2 className="text-headline mt-4 mb-6">
            Let's Build <span className="gradient-text">Together</span>
          </h2>
          <p className="text-body text-[#94a3b8] max-w-2xl mx-auto">
            Have a project, a product idea, or want to discuss an opportunity?
            Send me a message and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="contact-content grid lg:grid-cols-2 gap-12">

          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-title mb-4">Get in Touch</h3>
              <p className="text-[#94a3b8] leading-relaxed">
                I work with founders, product teams, and agencies who need an engineer
                that owns the outcome end-to-end. Tell me what you're building and I'll
                tell you if I can help.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-3">
              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="group flex items-center gap-4 p-4 rounded-xl glass hover:border-[rgba(99,102,241,0.3)] transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#06b6d4] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-[#64748b] uppercase tracking-wider">{item.label}</p>
                    <p className="text-white font-medium text-sm">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Response time note */}
            <div className="p-4 rounded-xl bg-[rgba(99,102,241,0.06)] border border-[rgba(99,102,241,0.12)]">
              <div className="flex items-center gap-2 mb-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-sm font-medium text-white">Available for projects</span>
              </div>
              <p className="text-xs text-[#64748b] pl-4">Typically reply within 24 hours</p>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-[#64748b] mb-3">Also find me on</p>
              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl glass flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-[#6366f1] hover:scale-110 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="p-7 sm:p-8 rounded-3xl glass border border-[rgba(99,102,241,0.1)]"
            >
              {/* Name + Email row */}
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs font-medium text-[#94a3b8] mb-2 uppercase tracking-wider">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#94a3b8] mb-2 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="you@company.com"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mb-5">
                <label className="block text-xs font-medium text-[#94a3b8] mb-2 uppercase tracking-wider">
                  What's this about? *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input appearance-none cursor-pointer"
                  disabled={isSubmitting}
                >
                  <option value="">Select a topic...</option>
                  {subjectOptions.map(opt => (
                    <option key={opt.value} value={opt.label}>{opt.label}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="mb-5">
                <label className="block text-xs font-medium text-[#94a3b8] mb-2 uppercase tracking-wider">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="form-input resize-none"
                  placeholder="Describe your project, timeline, and what you're looking to build..."
                  disabled={isSubmitting}
                />
              </div>

              {/* Error message */}
              {errorMsg && (
                <div className="mb-4 flex items-start gap-2 p-3 rounded-xl bg-[rgba(239,68,68,0.08)] border border-[rgba(239,68,68,0.2)] text-sm text-[#ef4444]">
                  <AlertCircle size={16} className="shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full btn-primary justify-center transition-all duration-300 ${
                  isSubmitted
                    ? 'bg-green-500 border-green-500 hover:bg-green-500'
                    : ''
                }`}
                style={isSubmitted ? { background: '#22c55e' } : {}}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle size={18} />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <p className="text-xs text-[#64748b] text-center mt-4">
                Or email directly:{' '}
                <a href="mailto:bbharanidharan43@gmail.com" className="text-[#6366f1] hover:underline">
                  bbharanidharan43@gmail.com
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
