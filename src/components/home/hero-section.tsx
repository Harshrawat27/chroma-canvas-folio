
import React from "react";
import profileImage from "/lovable-uploads/6ad984ae-4c52-43ef-a392-47b451c419f9.png";

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="grid-background"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <div className="text-reveal-container">
              <h1 className="text-4xl md:text-6xl font-mono font-bold leading-tight">
                <span className="text-reveal">THIS</span>{" "}
                <span className="text-reveal">SPACE</span>
              </h1>
            </div>
            
            <div className="text-reveal-container">
              <p className="text-xl font-light text-muted-foreground">
                <span className="text-reveal">This space is an ever-changing playground</span>
              </p>
              <p className="text-xl font-light text-muted-foreground">
                <span className="text-reveal">and a home to small personal tools.</span>
              </p>
            </div>
            
            <div className="flex items-center space-x-4 text-reveal-container">
              <span className="text-reveal">
                <a href="#projects" className="inline-flex items-center space-x-2 bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-md transition-colors font-mono">
                  <span>View Projects</span>
                </a>
              </span>
              <span className="text-reveal">
                <a href="#about" className="inline-flex items-center space-x-2 border border-border px-5 py-2 rounded-md hover:bg-secondary transition-colors font-mono">
                  <span>About Me</span>
                </a>
              </span>
            </div>
            
            <div className="flex flex-wrap items-center space-x-4 pt-4 text-sm font-mono text-muted-foreground">
              <div className="animate-fade-in mb-2" style={{ animationDelay: "0.6s" }}>
                <span className="block text-foreground">128</span>
                Repositories
              </div>
              <div className="animate-fade-in mb-2" style={{ animationDelay: "0.7s" }}>
                <span className="block text-foreground">1.5k</span>
                Followers
              </div>
              <div className="animate-fade-in mb-2" style={{ animationDelay: "0.8s" }}>
                <span className="block text-foreground">284</span>
                Following
              </div>
              <div className="animate-fade-in mb-2" style={{ animationDelay: "0.9s" }}>
                <span className="block text-foreground">5+</span>
                Years
              </div>
            </div>
          </div>
          
          <div className="flex-shrink-0 relative">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-500/30 animate-fade-in">
              <img 
                src={profileImage} 
                alt="Developer portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-card border border-border px-3 py-1.5 rounded font-mono text-sm animate-fade-in-left" style={{ animationDelay: "1s" }}>
              <span className="text-purple-500">$</span> developer --status="coding"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
