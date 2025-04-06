
import { Link } from "react-router-dom";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { Mail, Github, Linkedin, Terminal, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const currentDate = new Date().toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b dark:border-zinc-800 border-zinc-200" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center">
        <div className="flex items-center justify-between w-full max-w-[700px] mx-auto relative">
          {/* Tech-themed logo area */}
          <div className="flex items-center space-x-2">
            <div className="bg-purple-500/10 p-2 rounded-md border border-purple-500/30">
              <Terminal size={18} className="text-purple-500" />
            </div>
            <Link to="/" className="font-mono text-lg font-bold tracking-tight flex items-center">
              <span className="text-purple-500">&gt;</span>
              <span className="ml-1">Portfolio</span>
              <span className="animate-blink ml-1 h-4 w-2 bg-purple-500 inline-block"></span>
            </Link>
          </div>
          
          {/* Navigation with tech-style indicator */}
          <nav className="hidden md:flex items-center gap-4 absolute left-[50%] -translate-x-1/2 bg-secondary/50 backdrop-blur-sm px-4 py-1.5 rounded-full">
            <Link to="/" className="text-sm font-medium hover:text-purple-500 transition-colors flex items-center">
              <ChevronRight size={14} className="text-purple-500 mr-1" />Home
            </Link>
            <Link to="/projects" className="text-sm font-medium hover:text-purple-500 transition-colors flex items-center">
              <ChevronRight size={14} className="text-purple-500 mr-1" />Projects
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-purple-500 transition-colors flex items-center">
              <ChevronRight size={14} className="text-purple-500 mr-1" />Contact
            </Link>
          </nav>
          
          {/* Right side elements */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex text-xs font-mono text-muted-foreground">
              {currentDate}
            </div>
            
            <div className="flex items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-purple-500 transition-colors">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-purple-500 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="mailto:example@example.com" 
                className="text-muted-foreground hover:text-purple-500 transition-colors">
                <Mail size={18} />
              </a>
            </div>
            
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
