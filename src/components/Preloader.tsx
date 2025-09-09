import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate text appearance
    tl.fromTo(textRef.current, 
      { opacity: 0, y: 50, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power2.out' }
    );

    // Animate progress bar
    tl.fromTo(progressRef.current,
      { width: '0%' },
      { 
        width: '100%', 
        duration: 2, 
        ease: 'power2.out',
        onComplete: () => {
          // Exit animation
          gsap.to(preloaderRef.current, {
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            ease: 'power2.inOut',
            onComplete: onComplete
          });
        }
      }
    );

    // Add floating animation to text
    gsap.to(textRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

  }, [onComplete]);

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="text-center">
        <h1 
          ref={textRef}
          className="text-6xl md:text-8xl font-bold text-gradient mb-8 glow-intense"
        >
          Kasi
        </h1>
        
        <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
          <div 
            ref={progressRef}
            className="h-full bg-gradient-primary rounded-full glow-blue"
          />
        </div>
        
        <p className="mt-4 text-muted-foreground">Loading Experience...</p>
      </div>
    </div>
  );
};

export default Preloader;