
import { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: 'React / Next.js', level: 95, color: 'bg-blue-500' },
    { name: 'TypeScript', level: 90, color: 'bg-blue-600' },
    { name: 'Node.js / Express', level: 88, color: 'bg-green-500' },
    { name: 'Python / Django', level: 35, color: 'bg-yellow-500' },
    { name: 'PostgreSQL / MongoDB', level: 82, color: 'bg-purple-500' },
    { name: 'AWS / GCP', level: 40, color: 'bg-orange-500' },
    { name: 'Docker / Kubernetes', level: 25, color: 'bg-cyan-500' },
    { name: 'GraphQL', level: 78, color: 'bg-pink-500' },
  ];

  const tools = [
    'JavaScript (ES6+)', 'React', 'Next.js', 'Vue.js', 'TypeScript',
    'Node.js', 'Express', 'Python', 'Django', 'FastAPI',
    'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'GCP',
    'Docker', 'Kubernetes', 'Git', 'GraphQL', 'REST APIs'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill Bars */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Proficiency Levels</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full ${skill.color} transition-all duration-1000 ease-out ${
                        isVisible ? '' : 'w-0'
                      }`}
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Technologies & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
