
import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowLeft, Github, ExternalLink, Calendar } from "lucide-react";

// Sample project data
const projectsData = {
  "zyphr-docs": {
    id: "01",
    title: "Zyphr Docs",
    date: "16 SEP 2024",
    description: "Early documentation for Zyphr audio sketchpad.",
    longDescription: "A comprehensive documentation site for the Zyphr audio sketchpad software. Built with a focus on clarity, accessibility, and user experience. The documentation includes tutorials, API references, and examples to help users get the most out of the Zyphr platform.",
    tags: ["Documentation", "UX/UI", "Design"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React", "TypeScript", "TailwindCSS", "MDX"],
    liveLink: "https://example.com/zyphr-docs",
    githubLink: "https://github.com/username/zyphr-docs",
    features: [
      "Comprehensive API documentation",
      "Interactive code examples",
      "Dark and light mode",
      "Search functionality",
      "Responsive design"
    ]
  },
  "onyx-theme": {
    id: "02",
    title: "Onyx Theme",
    date: "09 JUN 2024",
    description: "Minimal monochromatic theme for Zed editor.",
    longDescription: "Onyx is a minimal, monochromatic theme for the Zed code editor designed to reduce visual noise and help developers focus on what matters - the code. With carefully selected contrast ratios and subtle syntax highlighting, Onyx provides an elegant coding experience without sacrificing readability.",
    tags: ["Design", "Themes", "Development"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    technologies: ["JSON", "CSS", "Design Systems", "Color Theory"],
    liveLink: "https://example.com/onyx-theme",
    githubLink: "https://github.com/username/onyx-theme",
    features: [
      "Optimized for readability",
      "Consistent syntax highlighting",
      "Terminal integration",
      "Custom UI elements",
      "Carefully selected color palette"
    ]
  },
  "zyphr-shaker": {
    id: "03",
    title: "Zyphr Shaker",
    date: "01 SEP 2024",
    description: "Synthetic shaker module all purely made from noise.",
    longDescription: "Zyphr Shaker is an advanced audio module that generates realistic shaker and percussion sounds using only synthetic noise sources. By carefully modeling the physical characteristics of real instruments, the module provides musicians and producers with versatile percussion options without sample libraries.",
    tags: ["Audio", "Development", "Design"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80",
    technologies: ["WebAudio API", "DSP", "JavaScript", "C++"],
    liveLink: "https://example.com/zyphr-shaker",
    githubLink: "https://github.com/username/zyphr-shaker",
    features: [
      "Pure synthetic sound generation",
      "Adjustable material parameters",
      "Multiple shaker models",
      "Real-time control",
      "Low CPU usage"
    ]
  },
  "portfolio-website": {
    id: "04",
    title: "Portfolio Website",
    date: "28 MAR 2024",
    description: "Personal portfolio website built with React and TailwindCSS.",
    longDescription: "A modern, responsive portfolio website designed to showcase projects and skills. The site features a clean, minimalist design with subtle animations and interactions to create an engaging user experience.",
    tags: ["React", "TailwindCSS", "Portfolio"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React", "TailwindCSS", "TypeScript", "Vite"],
    liveLink: "https://example.com/portfolio",
    githubLink: "https://github.com/username/portfolio",
    features: [
      "Responsive design",
      "Dark/light mode",
      "Project showcase",
      "Contact form",
      "Performance optimized"
    ]
  },
  "task-manager": {
    id: "05",
    title: "Task Manager",
    date: "15 FEB 2024",
    description: "A simple task manager app with drag and drop functionality.",
    longDescription: "A clean and intuitive task management application featuring drag-and-drop functionality for easy task organization. The app allows users to create boards, lists, and tasks, with support for labels, due dates, and task assignments.",
    tags: ["React", "TypeScript", "UX/UI"],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React", "TypeScript", "React Beautiful DnD", "Firebase"],
    liveLink: "https://example.com/task-manager",
    githubLink: "https://github.com/username/task-manager",
    features: [
      "Drag and drop interface",
      "Multiple boards and lists",
      "Task filtering and sorting",
      "User authentication",
      "Real-time updates"
    ]
  },
  "ecommerce-platform": {
    id: "06",
    title: "E-Commerce Platform",
    date: "05 JAN 2024",
    description: "A full-featured e-commerce platform with payment integration.",
    longDescription: "A comprehensive e-commerce solution featuring product catalog management, shopping cart functionality, secure checkout, and integration with payment processors. The platform supports user accounts, order history, and admin dashboard for inventory management.",
    tags: ["Full-stack", "E-commerce", "Payments"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    liveLink: "https://example.com/ecommerce",
    githubLink: "https://github.com/username/ecommerce",
    features: [
      "Product catalog and search",
      "User authentication",
      "Shopping cart",
      "Secure payment processing",
      "Order management"
    ]
  }
};

type ProjectParams = {
  slug: string;
};

const ProjectDetail = () => {
  const { slug } = useParams<ProjectParams>();
  const navigate = useNavigate();
  const project = projectsData[slug as keyof typeof projectsData];
  
  React.useEffect(() => {
    if (!project) {
      navigate("/projects");
      return;
    }
    
    document.title = `Portfolio | ${project.title}`;
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [project, navigate]);
  
  if (!project) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="grid-background"></div>
        
        <div className="container py-12 relative z-10">
          <Link to="/projects" className="inline-flex items-center space-x-2 font-mono text-sm text-muted-foreground hover:text-purple-500 transition-colors mb-8">
            <ArrowLeft size={16} />
            <span>Back to projects</span>
          </Link>
          
          <div className="text-reveal-container mb-4">
            <h1 className="text-3xl md:text-5xl font-mono font-bold">
              <span className="text-reveal">{project.title}</span>
            </h1>
          </div>
          
          <div className="flex items-center space-x-4 mb-8">
            <div className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full font-mono inline-flex items-center space-x-1">
              <span>#{project.id}</span>
            </div>
            
            <div className="inline-flex items-center space-x-1 text-muted-foreground text-sm font-mono">
              <Calendar size={14} />
              <span>{project.date}</span>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden mb-12 border border-border animate-fade-in">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8 animate-fade-in">
              <div>
                <h2 className="text-2xl font-mono font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-mono font-bold mb-4">Features</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-purple-500 font-bold">→</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="space-y-8 animate-fade-in">
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="font-mono text-lg font-bold mb-4">Project Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Technologies</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Category</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Links</h4>
                    <div className="space-y-2 mt-2">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm hover:text-purple-500 transition-colors">
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm hover:text-purple-500 transition-colors">
                        <Github size={16} />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="font-mono text-lg font-bold mb-4">Next Project</h3>
                
                {/* Find the next project for navigation */}
                {(() => {
                  const projectIds = Object.values(projectsData).map(p => p.id);
                  const currentIndex = projectIds.indexOf(project.id);
                  const nextIndex = (currentIndex + 1) % projectIds.length;
                  const nextProjectId = projectIds[nextIndex];
                  const nextProject = Object.values(projectsData).find(p => p.id === nextProjectId);
                  
                  if (!nextProject) return null;
                  
                  // Find the slug for the next project
                  const nextSlug = Object.entries(projectsData).find(
                    ([_, p]) => p.id === nextProjectId
                  )?.[0];
                  
                  if (!nextSlug) return null;
                  
                  return (
                    <Link to={`/project/${nextSlug}`} className="group">
                      <div className="relative aspect-video mb-3 overflow-hidden rounded-md">
                        <img 
                          src={nextProject.image} 
                          alt={nextProject.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-2 right-2 bg-card/80 backdrop-blur-sm px-2 py-1 rounded font-mono text-xs">
                          #{nextProject.id}
                        </div>
                      </div>
                      
                      <h4 className="font-mono font-bold group-hover:text-purple-500 transition-colors">
                        {nextProject.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {nextProject.description}
                      </p>
                    </Link>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
