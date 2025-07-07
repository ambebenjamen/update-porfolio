
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import ScrollProgress from '@/components/ScrollProgress';
import StatsCounter from '@/components/StatsCounter';
import { ThemeProvider } from '@/contexts/ThemeContext';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        {/* Scroll Progress */}
        <ScrollProgress />
        
        {/* Navigation */}
        <Navigation isScrolled={isScrolled} />
        
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Stats Counter */}
        <StatsCounter />
        
        {/* Skills Section */}
        <Skills />
        
        {/* Projects Section */}
        <Projects />
        
        {/* Blog Section */}
        <Blog />
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* Contact Section */}
        <Contact />
        
        {/* Footer */}
        <footer className="py-8 border-t border-border/20">
          <div className="container mx-auto px-6 text-center">
            <p className="text-muted-foreground">
              © 2024 Ambe Benjamin. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
