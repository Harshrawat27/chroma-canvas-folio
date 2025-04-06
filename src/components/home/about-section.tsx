
import React from "react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="grid-background"></div>
      
      <div className="container relative z-10">
        <div className="text-reveal-container mb-8">
          <h2 className="text-3xl md:text-4xl font-mono font-bold">
            <span className="text-reveal">ABOUT</span>{" "}
            <span className="text-reveal">ME</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="text-reveal-container">
              <p className="text-lg leading-relaxed text-muted-foreground">
                <span className="text-reveal">
                  I'm a passionate web developer and designer with a focus on creating
                  beautiful, functional, and accessible web applications.
                </span>
              </p>
            </div>
            
            <div className="text-reveal-container">
              <p className="text-lg leading-relaxed text-muted-foreground">
                <span className="text-reveal">
                  My journey in web development started 5 years ago, and I've been
                  obsessed with crafting exceptional digital experiences ever since.
                </span>
              </p>
            </div>
            
            <div className="text-reveal-container">
              <p className="text-lg leading-relaxed text-muted-foreground">
                <span className="text-reveal">
                  I specialize in React, TypeScript, and modern frontend frameworks,
                  with a keen eye for design and user experience.
                </span>
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border p-4 rounded-lg animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <h3 className="font-mono text-sm text-muted-foreground mb-2">Frontend</h3>
                <p className="font-medium">React, Vue, Next.js, TypeScript</p>
              </div>
              
              <div className="bg-card border border-border p-4 rounded-lg animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <h3 className="font-mono text-sm text-muted-foreground mb-2">Backend</h3>
                <p className="font-medium">Node.js, Express, MongoDB, PostgreSQL</p>
              </div>
              
              <div className="bg-card border border-border p-4 rounded-lg animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <h3 className="font-mono text-sm text-muted-foreground mb-2">Design</h3>
                <p className="font-medium">Figma, Photoshop, Illustrator</p>
              </div>
              
              <div className="bg-card border border-border p-4 rounded-lg animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <h3 className="font-mono text-sm text-muted-foreground mb-2">Tools</h3>
                <p className="font-medium">Git, Docker, AWS, Vercel</p>
              </div>
            </div>
            
            <div className="bg-card border border-border p-4 rounded-lg animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <h3 className="font-mono text-sm text-muted-foreground mb-2">Experience</h3>
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span>Senior Developer at TechCorp</span>
                  <span className="font-mono text-xs text-muted-foreground">2022 - Present</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Frontend Engineer at WebStudio</span>
                  <span className="font-mono text-xs text-muted-foreground">2020 - 2022</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Junior Developer at CodeAgency</span>
                  <span className="font-mono text-xs text-muted-foreground">2018 - 2020</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
