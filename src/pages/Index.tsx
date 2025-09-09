import { useState, useEffect } from 'react';
import Preloader from '@/components/Preloader';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import AchievementsSection from '@/components/AchievementsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Initialize Locomotive Scroll when component mounts and loading is complete
    if (!isLoading) {
      import('locomotive-scroll').then((LocomotiveScroll) => {
        const scroll = new LocomotiveScroll.default({
          el: document.querySelector('[data-scroll-container]') as HTMLElement,
          smooth: true,
          multiplier: 1,
          class: 'is-reveal'
        });

        return () => {
          if (scroll) scroll.destroy();
        };
      });
    }
  }, [isLoading]);

  if (isLoading) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <div data-scroll-container className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <AchievementsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;