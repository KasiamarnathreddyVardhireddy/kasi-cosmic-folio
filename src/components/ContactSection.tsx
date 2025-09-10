import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo(formRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    const socialItems = socialsRef.current?.children;
    if (socialItems) {
      gsap.fromTo(Array.from(socialItems),
        { opacity: 0, scale: 0, rotate: 180 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: socialsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xvgblzrv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Portfolio Contact from ${formData.name}`
        }),
      });

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        alert('Message sent successfully! I\'ll get back to you soon.');
      } else {
        throw new Error('Service temporarily unavailable');
      }
    } catch (error) {
      // Direct email sending without external service
      alert('Sending your message now...');
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      const mailtoLink = `mailto:vkasiamarnathreddykasi@gmail.com?subject=${subject}&body=${body}`;
      window.open(mailtoLink, '_blank');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      href: 'https://github.com/KasiamarnathreddyVardhireddy',
      color: 'hover:text-neon-blue'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kasiamarnathreddy-vardhireddy-99a877251',
      color: 'hover:text-neon-cyan'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      href: 'mailto:vkasiamarnathreddykasi@gmail.com',
      color: 'hover:text-neon-violet'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      href: 'tel:+919182175363',
      color: 'hover:text-neon-pink'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-br from-background to-muted/5"
      id="contact"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient text-center mb-12">
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="space-y-6">
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 space-y-6 hover:glow-blue transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gradient mb-6">Send Message</h3>
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="glass border-foreground/20 focus:border-neon-blue focus:glow-blue transition-all duration-300"
                />
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="glass border-foreground/20 focus:border-neon-blue focus:glow-blue transition-all duration-300"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="glass border-foreground/20 focus:border-neon-blue focus:glow-blue transition-all duration-300 resize-none"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-primary hover:bg-gradient-secondary text-white glow-blue hover:glow-intense transition-all duration-300 transform hover:scale-105 py-3"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* Professional Info Card */}
            <div className="glass rounded-2xl p-6 hover:glow-violet transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gradient">Email Me</h4>
                  <p className="text-sm text-muted-foreground">Get in touch directly</p>
                </div>
              </div>
              <p className="text-foreground font-medium">vkasiamarnathreddykasi@gmail.com</p>
            </div>

            {/* Phone Contact Card */}
            <div className="glass rounded-2xl p-6 hover:glow-cyan transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gradient">Call Me</h4>
                  <p className="text-sm text-muted-foreground">Available for calls</p>
                </div>
              </div>
              <p className="text-foreground font-medium">+91 9182175363</p>
            </div>

            {/* LinkedIn Card */}
            <div className="glass rounded-2xl p-6 hover:glow-pink transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-neon-cyan/20 rounded-full flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-neon-cyan" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gradient">LinkedIn</h4>
                  <p className="text-sm text-muted-foreground">Professional network</p>
                </div>
              </div>
              <a 
                href="https://www.linkedin.com/in/kasiamarnathreddy-vardhireddy-99a877251" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-neon-cyan hover:text-neon-blue transition-colors font-medium"
              >
                Connect on LinkedIn
              </a>
            </div>

            {/* GitHub Card */}
            <div className="glass rounded-2xl p-6 hover:glow-blue transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center">
                  <Github className="w-6 h-6 text-neon-blue" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gradient">GitHub</h4>
                  <p className="text-sm text-muted-foreground">View my projects</p>
                </div>
              </div>
              <a 
                href="https://github.com/KasiamarnathreddyVardhireddy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-neon-blue hover:text-neon-violet transition-colors font-medium"
              >
                Browse Code Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;