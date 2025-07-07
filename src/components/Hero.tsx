
import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Full Stack Developer";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced 3D Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-primary to-accent rounded-full mix-blend-multiply blur-xl animate-float-3d"></div>
        <div className="absolute top-40 right-32 w-80 h-80 bg-gradient-to-r from-accent to-primary rounded-full mix-blend-multiply blur-xl animate-float-3d-delayed"></div>
        <div className="absolute bottom-32 left-32 w-72 h-72 bg-gradient-to-r from-secondary to-primary rounded-full mix-blend-multiply blur-xl animate-float-3d-slow"></div>
        
        {/* 3D Geometric Shapes */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-primary/30 rotate-45 animate-rotate-3d"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border-2 border-accent/30 rounded-full animate-pulse-3d"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 animate-tilt-3d"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-3d">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl transform transition-all duration-500 hover:scale-110 hover:rotate-3d animate-profile-float">
                <img 
                  src="ams1.jpg" 
                  alt="Ambe benjamin - Full Stack Developer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-ring"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 transform hover:scale-105 transition-transform duration-300">
            <span className="text-foreground animate-slide-in-left">Hi, I'm </span>
            <span className="text-gradient animate-slide-in-right">Ambe Benjamin Lambi</span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-muted-foreground mb-8 h-12 flex items-center justify-center">
            <span className="font-mono border-r-2 border-primary pr-2 animate-typing-3d">
              {displayText}
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up-3d">
            I craft exceptional digital experiences with modern technologies. 
            Specializing in React, Node.js, and cloud solutions that drive business growth.
          </p>

          {/* Enhanced CTA Buttons with 3D Effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg glow transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 animate-button-float"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border hover:bg-muted px-8 py-3 text-lg transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 animate-button-float-delayed"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Enhanced Social Links with 3D Hover Effects */}
          <div className="flex justify-center space-x-8 mb-16">
            <a href="Here is your GitHub profile link:  
https://github.com/ambebenjamen" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 hover:rotate-12">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 hover:-rotate-12">
              <Linkedin size={28} />
            </a>
            <a href="mailto:alex@example.com" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 hover:rotate-12">
              <Mail size={28} />
            </a>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <button 
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-3d hover:scale-125 transition-transform duration-300"
        >
          <ArrowDown size={28} className="text-muted-foreground hover:text-primary transition-colors duration-200" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
