import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

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

    gsap.fromTo(cardRef.current,
      { opacity: 0, scale: 0.8, rotateX: 45 },
      {
        opacity: 1,
        scale: 1,
        rotateX: 0,
        duration: 1.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-br from-muted/5 to-background"
      id="experience"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient text-center mb-12">
          💼 Experience
        </h2>

        <div ref={cardRef} className="glass rounded-2xl p-8 hover:glow-violet transition-all duration-300">
          <div className="flex items-start space-x-4">
            <div className="bg-gradient-primary p-3 rounded-lg glow-blue">
              <span className="text-2xl">🤖</span>
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gradient mb-2">
                Machine Learning Intern
              </h3>
              <p className="text-lg text-neon-blue font-semibold mb-4">DevSkillHub</p>
              
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <span className="text-neon-cyan text-lg">•</span>
                  <span>Built predictive models using regression, classification & clustering algorithms</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-neon-cyan text-lg">•</span>
                  <span>Preprocessed real-world datasets and optimized models with scikit-learn</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-neon-cyan text-lg">•</span>
                  <span>Improved model accuracy through hyperparameter tuning and evaluation techniques</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;