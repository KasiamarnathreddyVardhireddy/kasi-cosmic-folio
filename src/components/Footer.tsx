import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    gsap.fromTo(footer,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footer,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Floating particles animation
    const particles = particlesRef.current?.children;
    if (particles) {
      Array.from(particles).forEach((particle, index) => {
        gsap.to(particle, {
          y: -20 - (index * 5),
          duration: 3 + (index * 0.5),
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          delay: index * 0.2
        });
      });
    }
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/KasiamarnathreddyVardhireddy',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/kasiamarnathreddy-vardhireddy-99a877251',
      label: 'LinkedIn'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:vkasiamarnathreddykasi@gmail.com',
      label: 'Email'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      href: 'tel:+919182175363',
      label: 'Phone'
    }
  ];

  return (
    <footer 
      ref={footerRef}
      className="relative py-12 px-4 bg-gradient-to-t from-muted/10 to-background border-t border-foreground/10"
    >
      {/* Floating Particles Background */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-blue rounded-full opacity-50" />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-neon-violet rounded-full opacity-40" />
        <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-neon-cyan rounded-full opacity-30" />
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-neon-pink rounded-full opacity-50" />
        <div className="absolute bottom-1/4 left-1/6 w-1 h-1 bg-neon-blue rounded-full opacity-60" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Copyright */}
        <div className="text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Kasi Amarnath Reddy Vardhireddy. Built with ❤️ using React & GSAP
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;