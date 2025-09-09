import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    position: '🥇 1st Place',
    event: 'ML Storm Hackathon',
    project: 'Student performance prediction system',
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    position: '🥈 2nd Place',
    event: 'Apex Code Re-engineering Challenge',
    project: 'E-commerce platform with chatbot & live cart',
    gradient: 'from-gray-300 to-gray-500'
  }
];

const AchievementsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

    const cards = cardsRef.current?.children;
    if (cards) {
      gsap.fromTo(Array.from(cards),
        { opacity: 0, y: 50, rotateY: 45 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 1,
          stagger: 0.3,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-br from-background to-muted/5"
      id="achievements"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient text-center mb-12">
          🏅 Achievements
        </h2>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="glass rounded-2xl p-8 hover:glow-violet transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                  {achievement.position}
                </h3>
                <h4 className="text-xl font-semibold text-neon-blue mb-4">
                  {achievement.event}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.project}
                </p>
              </div>
              
              {/* Decorative element */}
              <div className="mt-6 h-1 bg-gradient-primary rounded-full glow-blue" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;