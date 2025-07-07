
import { Code2, Zap, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and user experience"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working seamlessly with cross-functional teams"
    },
    {
      icon: Award,
      title: "Quality",
      description: "Delivering excellence in every project milestone"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 border border-primary/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 border-2 border-accent/20 rotate-45 animate-tilt-3d"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up-3d">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient transform hover:scale-105 transition-transform duration-300">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate developer with 2+ years of experience creating innovative web solutions. 
            I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left-3d">
            {/* Professional Photo */}
            <div className="mb-8 relative">
              <div className="relative group max-w-md mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Coding workspace"
                  className="w-full h-64 object-cover rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-6 text-foreground">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="transform hover:translate-x-2 transition-transform duration-300">
                Started my coding journey in college, fell in love with the endless possibilities 
                of web development. Since then, I've worked with startups and established companies, 
                building everything from e-commerce platforms to SaaS applications.
              </p>
              <p className="transform hover:translate-x-2 transition-transform duration-300">
                I'm constantly learning new technologies and best practices. When I'm not coding, 
                you'll find me contributing to open source projects, writing technical blogs, 
                or mentoring aspiring developers.
              </p>
              <p className="transform hover:translate-x-2 transition-transform duration-300">
                My goal is to create digital experiences that not only look great but also 
                solve real problems and make a positive impact on users' lives.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-slide-in-right-3d">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="glass hover:glow transition-all duration-500 group cursor-pointer transform hover:scale-105 hover:-rotate-1 animate-card-float"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <item.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                  <h4 className="font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Photos Section */}
        <div className="grid md:grid-cols-3 gap-8 animate-fade-up-3d">
          <div className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
              alt="Team collaboration"
              className="w-full h-48 object-cover rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:rotate-2"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <span className="text-white font-medium">Team Collaboration</span>
            </div>
          </div>
          
          <div className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
              alt="MacBook development"
              className="w-full h-48 object-cover rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:-rotate-2"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <span className="text-white font-medium">Development Setup</span>
            </div>
          </div>
          
          <div className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
              alt="Technology circuits"
              className="w-full h-48 object-cover rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:rotate-2"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <span className="text-white font-medium">Technology Stack</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
