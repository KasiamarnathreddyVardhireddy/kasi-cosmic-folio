import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Animate headline
    tl.fromTo(headlineRef.current,
      { opacity: 0, y: 50, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power2.out' }
    );

    // Animate subtitle
    tl.fromTo(subtitleRef.current,
      { opacity: 0, y: 30, filter: 'blur(5px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power2.out' },
      '-=0.8'
    );

    // Animate CTA
    tl.fromTo(ctaRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
      '-=0.5'
    );

    // Animate Spline container
    tl.fromTo(splineRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1.5, ease: 'power2.out' },
      '-=1.5'
    );

    // Add floating animation to CTA
    gsap.to(ctaRef.current, {
      y: -5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

  }, []);

  const handleHireMe = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
      id="home"
    >
      {/* Spline 3D Background */}
      <div 
        ref={splineRef}
        className="absolute inset-0 z-0"
      >
        <iframe 
          src="https://my.spline.design/claritystream-4GArueleVbMoOX2wvd0iNPHF/" 
          frameBorder="0" 
          width="100%" 
          height="100%"
          className="w-full h-full"
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-neon-blue/20 rounded-full blur-xl float" />
        <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-neon-violet/20 rounded-full blur-xl float-delayed" />
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-neon-cyan/20 rounded-full blur-xl float" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="glass rounded-3xl p-8 md:p-12 backdrop-blur-lg border border-white/10">
          <h1 
            ref={headlineRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gradient glow-intense leading-tight"
          >
            Hi, I'm Kasi Amarnath Reddy
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl">Web Developer</span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Skilled in Java, Python, SQL & Web Development
          </p>
          
          <Button 
            ref={ctaRef}
            onClick={handleHireMe}
            className="bg-gradient-primary hover:bg-gradient-secondary text-white px-8 py-4 text-lg font-semibold rounded-xl glow-blue hover:glow-intense transition-all duration-300 transform hover:scale-105"
          >
            Hire Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;