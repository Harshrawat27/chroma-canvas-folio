
import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

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
  },
  {
    id: "04",
    title: "Portfolio Website",
    date: "28 MAR 2024",
    description: "Personal portfolio website built with React and TailwindCSS.",
    tags: ["React", "TailwindCSS", "Portfolio"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    slug: "portfolio-website"
  },
  {
    id: "05",
    title: "Task Manager",
    date: "15 FEB 2024",
    description: "A simple task manager app with drag and drop functionality.",
    tags: ["React", "TypeScript", "UX/UI"],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
    slug: "task-manager"
  },
  {
    id: "06",
    title: "E-Commerce Platform",
    date: "05 JAN 2024",
    description: "A full-featured e-commerce platform with payment integration.",
    tags: ["Full-stack", "E-commerce", "Payments"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    slug: "ecommerce-platform"
  }
];

const ProjectsPage = () => {
  React.useEffect(() => {
    document.title = "Portfolio | Projects";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="py-20 relative overflow-hidden">
          <div className="grid-background"></div>
          
          <div className="container relative z-10">
            <div className="text-reveal-container mb-12">
              <h1 className="text-4xl md:text-5xl font-mono font-bold">
                <span className="text-reveal">ALL</span>{" "}
                <span className="text-reveal">PROJECTS</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mt-4 max-w-2xl text-reveal-container">
                <span className="text-reveal">
                  A collection of my work, side projects, and experiments.
                </span>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Link to={`/project/${project.slug}`} key={project.id} className="project-card group animate-fade-in" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
