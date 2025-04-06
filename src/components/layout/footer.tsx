
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 mt-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h4 className="font-mono text-lg font-bold">Portfolio</h4>
            <p className="text-sm text-muted-foreground max-w-xs">
              A showcase of my developer journey, projects, and technical skills.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-mono text-base font-bold">Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="/" className="text-sm hover:text-purple-500 transition-colors">Home</a>
              <a href="/projects" className="text-sm hover:text-purple-500 transition-colors">Projects</a>
              <a href="/contact" className="text-sm hover:text-purple-500 transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-mono text-base font-bold">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-purple-500 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-purple-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:example@example.com" 
                 className="text-muted-foreground hover:text-purple-500 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-4 md:mt-0">
            Designed & Built with <span className="text-purple-500">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
