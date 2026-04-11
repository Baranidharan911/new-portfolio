import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, CheckCircle, Loader2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ContactProps {
  onShowToast?: (message: string) => void;
}

const Contact = ({ onShowToast }: ContactProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.contact-header', {
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

      // Content animation
      gsap.from('.contact-content', {
        scrollTrigger: {
          trigger: '.contact-content',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    onShowToast?.('Message sent successfully! I\'ll get back to you soon.');
    
    // Reset form after delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
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
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="w-full py-24 lg:py-32 bg-[#12121a] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 animated-grid opacity-20" />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Section Header */}
        <div className="contact-header text-center mb-16">
          <span className="section-tag mb-4">contact</span>
          <h2 className="text-headline mt-4 mb-6">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-body text-[#94a3b8] max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you. Send me a message!
          </p>
        </div>

        {/* Contact Content */}
        <div className="contact-content grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-title mb-6">Get in Touch</h3>
              <p className="text-[#94a3b8] mb-8 leading-relaxed">
                Whether you're looking for a developer to join your team, 
                need help with a project, or just want to connect, 
                feel free to reach out. I'm always open to discussing 
                new opportunities and ideas.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group flex items-center gap-4 p-4 rounded-xl glass hover:border-[rgba(99,102,241,0.3)] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#06b6d4] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-[#64748b] uppercase tracking-wider">{item.label}</p>
                    <p className="text-white font-medium group-hover:gradient-text transition-all duration-300">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-[#64748b] mb-4">Follow me on</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
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
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl glass border border-[rgba(99,102,241,0.1)]">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-[#94a3b8] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-[#94a3b8] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#94a3b8] mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input appearance-none cursor-pointer"
                >
                  <option value="">Select a subject</option>
                  <option value="job">Job Opportunity</option>
                  <option value="project">Project Collaboration</option>
                  <option value="freelance">Freelance Work</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#94a3b8] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="form-input resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full btn-primary justify-center ${isSubmitted ? 'bg-green-500' : ''}`}
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
