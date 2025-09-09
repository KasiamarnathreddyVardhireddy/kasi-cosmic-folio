import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import agriconnectImage from '@/assets/agriconnect-project.jpg';
import hospitalImage from '@/assets/hospital-project.jpg';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'AgriConnect Hub',
    description: 'Smart agriculture platform with ML-powered crop monitoring, IoT sensors, and data analytics for modern farming solutions.',
    image: agriconnectImage,
    tech: ['Python', 'MySQL', 'ML', 'APIs'],
    github: 'https://github.com/KasiamarnathreddyVardhireddy/AgriConnect'
  },
  {
    title: 'Hospital Management System',
    description: 'Comprehensive healthcare management platform built with Java Spring Boot, featuring patient records and appointment scheduling.',
    image: hospitalImage,
    tech: ['Java', 'Spring Boot', 'MySQL'],
    github: 'https://github.com/KasiamarnathreddyVardhireddy/Hospital-Management-System'
  }
];

const ProjectsSection = () => {
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
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
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

  const handleViewProject = (githubUrl: string) => {
    window.open(githubUrl, '_blank');
  };

  const handleViewMoreProjects = () => {
    window.open('https://github.com/KasiamarnathreddyVardhireddy', '_blank');
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-br from-muted/5 to-background"
      id="projects"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient text-center mb-12">
          Featured Projects
        </h2>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass rounded-2xl overflow-hidden hover:glow-violet transition-all duration-300 hover:scale-105 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gradient mb-3">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-gradient-primary rounded-full text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    onClick={() => handleViewProject(project.github)}
                    className="flex-1 bg-gradient-primary hover:bg-gradient-secondary text-white glow-blue hover:glow-intense transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center">
          <Button
            onClick={handleViewMoreProjects}
            variant="outline"
            className="glass border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background glow-blue hover:glow-intense transition-all duration-300 px-8 py-3"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;