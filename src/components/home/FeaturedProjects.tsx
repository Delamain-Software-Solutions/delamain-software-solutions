import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import accountingImage from "@/assets/accounting-assistant-project.jpg";
import animeMatcherImage from "@/assets/anime-matcher-project.jpg";
import ProjectCard from "../shared/ProjectCard";

const FeaturedProjects = () => {

  const featuredProjects = [
    {
      title: "Accounting Assistant",
      slug: "accounting-assistant",
      industry: "FinTech & Automation", 
      description: "Intelligent financial automation tool that revolutionizes accounting workflows by automatically generating balance sheets from Excel data.",
      thumbnail: accountingImage,
      year: "2026"
    },
    {
      title: "Anime Persona Matcher",
      slug: "anime-persona-matcher",
      industry: "Big Data & AI/ML",
      description: "Sophisticated big data application leveraging ML models to match users with anime characters based on personality analysis.",
      thumbnail: animeMatcherImage,
      year: "2025"
    }
  ];

  return (
    <section className="pt-10 sm:pt-16 md:pt-24 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-semibold font-poppins mb-6">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-quicksand max-w-3xl mx-auto leading-relaxed">
            A selection of solutions we've built recently using modern engineering practices.
          </p>
        </div>
        <div className="text-center mt-6 sm:mt-10 mb-10 sm:mb-20">
          <Link to="/work">
            <Button size="lg" className="bg-primary hover:bg-primary text-primary-foreground px-8 py-4 rounded-full group">
              View Full Portfolio
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-6" />
            </Button>
          </Link>
        </div>

        <div className="grid justify-items-center lg:grid-cols-2 gap-x-2 gap-y-8 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard 
              key={project.slug} 
              project={project} 
            />
          ))}
        </div>

        {/* View Full Portfolio */}
      </div>
    </section>
  );
};

export default FeaturedProjects;