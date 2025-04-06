
import { Link } from "react-router-dom";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { Mail, Github, Linkedin } from "lucide-react";

export function Navbar() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b dark:border-zinc-800 border-zinc-200 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-mono text-lg font-bold tracking-tight">
          Portfolio
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-purple-500 transition-colors">
            Home
          </Link>
          <Link to="/projects" className="text-sm font-medium hover:text-purple-500 transition-colors">
            Projects
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-purple-500 transition-colors">
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:block text-xs font-mono text-muted-foreground">
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
    </header>
  );
}
