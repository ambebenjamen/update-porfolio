import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration",
      longDescription: "Built a comprehensive e-commerce platform from scratch featuring user authentication, product management, shopping cart functionality, and secure payment processing. The application handles thousands of products and processes hundreds of transactions daily.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      github: "https://github.com/ambebenjamen",
      live: "https://example.com",
      featured: true
    },
    {
      id: 2,
      title: "Task Management SaaS",
      description: "A collaborative project management tool with real-time updates",
      longDescription: "Developed a comprehensive project management application with real-time collaboration features, advanced filtering, team management, and detailed analytics. Used WebSocket for real-time updates and implemented robust authorization system.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "TypeScript", "Prisma", "WebSocket", "Vercel"],
      github: "https://github.com/ambebenjamen",
      live: "https://example.com",
      featured: true
    },
    {
      id: 3,
      title: "AI Content Generator",
      description: "An AI-powered content creation tool using OpenAI API",
      longDescription: "Created an intelligent content generation platform that helps businesses create marketing copy, blog posts, and social media content. Integrated multiple AI models and implemented usage tracking and subscription management.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Python", "FastAPI", "OpenAI", "Docker"],
      github: "https://github.com/ambebenjamen",
      live: "https://example.com",
      featured: true
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A beautiful weather app with location-based forecasts",
      longDescription: "Designed and built a comprehensive weather dashboard with location-based forecasts, historical data, and weather alerts. Features beautiful visualizations and supports multiple locations with personalized weather insights.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Vue.js", "Chart.js", "Weather API", "Tailwind"],
      github: "https://github.com/ambebenjamen",
      live: "https://example.com",
      featured: false
    },
    {
      id: 5,
      title: "Crypto Portfolio Tracker",
      description: "Real-time cryptocurrency portfolio management",
      longDescription: "Built a sophisticated cryptocurrency portfolio tracker with real-time price updates, profit/loss calculations, and market analysis tools. Integrated multiple exchange APIs and implemented advanced charting capabilities.",
      image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "WebSocket", "Chart.js", "MongoDB"],
      github: "https://github.com/ambebenjamen",
      live: "https://example.com",
      featured: false
    },
    {
      id: 6,
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media performance",
      longDescription: "Developed a comprehensive analytics platform for social media managers to track performance across multiple platforms. Features automated reporting, audience insights, and competitive analysis with beautiful data visualizations.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "D3.js", "Express", "PostgreSQL", "Redis"],
      github: "https://github.com/ambebenjamen",
      live: "https://example.com",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-32 w-72 h-72 border border-primary/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg rotate-45 animate-tilt-3d"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up-3d">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient transform hover:scale-105 transition-transform duration-300">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my latest work, demonstrating expertise across the full stack
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="glass hover:glow transition-all duration-500 cursor-pointer group overflow-hidden transform hover:scale-105 hover:-rotate-1 animate-card-float-up"
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white font-semibold text-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    View Details
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300 transform group-hover:translate-x-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3 group-hover:text-foreground transition-colors duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded transform hover:scale-110 transition-transform duration-200"
                      style={{ animationDelay: `${techIndex * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded transform hover:scale-110 transition-transform duration-200">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* You can keep the rest of the file as it is from your original code. */}
      </div>
    </section>
  );
};

export default Projects;
