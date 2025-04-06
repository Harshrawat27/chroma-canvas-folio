
import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { FeaturedProjects } from "@/components/home/featured-projects";

const Index = () => {
  React.useEffect(() => {
    document.title = "Portfolio | Home";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <HeroSection />
        <AboutSection />
        <FeaturedProjects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
