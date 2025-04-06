
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Zyphr Docs",
    date: "16 SEP 2024",
    description: "Early documentation for Zyphr audio sketchpad.",
    tags: ["Documentation", "UX/UI", "Design"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    slug: "zyphr-docs"
  },
  {
    id: "02",
    title: "Onyx Theme",
    date: "09 JUN 2024",
    description: "Minimal monochromatic theme for Zed editor.",
    tags: ["Design", "Themes", "Development"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    slug: "onyx-theme"
  },
  {
    id: "03",
    title: "Zyphr Shaker",
    date: "01 SEP 2024",
    description: "Synthetic shaker module all purely made from noise.",
    tags: ["Audio", "Development", "Design"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    slug: "zyphr-shaker"
  }
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="grid-background"></div>
      
      <div className="container relative z-10">
        <div className="flex justify-between items-center mb-12">
          <div className="text-reveal-container">
            <h2 className="text-3xl md:text-4xl font-mono font-bold">
              <span className="text-reveal">FEATURED</span>{" "}
              <span className="text-reveal">PROJECTS</span>
            </h2>
          </div>
          
          <Link to="/projects" className="hidden md:flex items-center space-x-2 font-mono text-sm text-purple-500 hover:text-purple-600 transition-colors">
            <span>View all projects</span>
            <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link to={`/project/${project.slug}`} key={project.id} className="project-card group animate-fade-in" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
              <div className="relative aspect-video mb-4 overflow-hidden rounded-md">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-card/80 backdrop-blur-sm px-2 py-1 rounded font-mono text-xs">
                  #{project.id}
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-mono text-xl font-bold project-title transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {project.date}
                  </span>
                </div>
                
                <p className="text-muted-foreground">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link to="/projects" className="inline-flex items-center space-x-2 font-mono text-sm text-purple-500 hover:text-purple-600 transition-colors">
            <span>View all projects</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
