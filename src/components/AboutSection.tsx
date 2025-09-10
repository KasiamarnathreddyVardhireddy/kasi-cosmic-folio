import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const profileImage = '/lovable-uploads/e141fe13-fcd6-435e-be19-a286bbc37b78.png';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'Java', icon: '☕' },
  { name: 'Python', icon: '🐍' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'HTML', icon: '🌐' },
  { name: 'CSS', icon: '🎨' },
  { name: 'Spring Boot', icon: '🍃' },
  { name: 'Git', icon: '📝' },
  { name: 'VS Code', icon: '💻' }
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Section fade in
    gsap.fromTo(section,
      { opacity: 0, filter: 'blur(10px)' },
      {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Image animation
    gsap.fromTo(imageRef.current,
      { opacity: 0, x: -100, rotateY: 45 },
      {
        opacity: 1,
        x: 0,
        rotateY: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Content animation
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Skills stagger animation
    const skillItems = skillsRef.current?.children;
    if (skillItems) {
      gsap.fromTo(Array.from(skillItems),
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: skillsRef.current,
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
      id="about"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div ref={imageRef} className="flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 glow-intense" />
              <img 
                src={profileImage}
                alt="Kasi Amarnath Reddy Vardhireddy"
                className="relative w-80 h-80 rounded-full object-cover border-4 border-foreground/10 glass group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a Computer Science undergraduate with a passion for creating innovative solutions. 
                I specialize in Java and Python development, with strong expertise in database management 
                and web technologies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey includes winning hackathons, building impactful projects, and continuously 
                learning cutting-edge technologies to solve real-world problems.
              </p>
            </div>

            {/* Skills Grid */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Core Skills</h3>
              <div ref={skillsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="glass rounded-xl p-4 text-center hover:glow-blue transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <p className="text-sm font-medium">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">🎓 Education</h3>
              <div className="space-y-6">
                <div className="glass rounded-xl p-6 hover:glow-blue transition-all duration-300">
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Kalasalingam Academy of Research and Education, Krishnan Koil
                  </h4>
                  <p className="text-muted-foreground mb-1">Bachelor of Technology in Computer Science and Engineering</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">2022 – 2026</span>
                    <span className="text-sm font-medium text-primary">CGPA: 8.27/10.0</span>
                  </div>
                </div>

                <div className="glass rounded-xl p-6 hover:glow-blue transition-all duration-300">
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Sri Chaitanya Junior College, Vijayawada, A.P
                  </h4>
                  <p className="text-muted-foreground mb-1">Pre-University Course (PUC)</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">2020 – 2022</span>
                    <span className="text-sm font-medium text-primary">Percentage: 84%</span>
                  </div>
                </div>

                <div className="glass rounded-xl p-6 hover:glow-blue transition-all duration-300">
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    ZP High School, Kadapa, A.P
                  </h4>
                  <p className="text-muted-foreground mb-1">Secondary School</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">2019 – 2020</span>
                    <span className="text-sm font-medium text-primary">Percentage: 100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;