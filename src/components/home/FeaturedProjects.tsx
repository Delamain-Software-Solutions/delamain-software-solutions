import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import accountingImage from "@/assets/accounting-assistant-project.jpg";
import animeMatcherImage from "@/assets/anime-matcher-project.jpg";

const FeaturedProjects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const featuredProjects = [
    {
      id: 1,
      title: "Accounting Assistant",
      category: "FinTech & Automation", 
      description: "Intelligent financial automation tool that revolutionizes accounting workflows by automatically generating balance sheets from Excel data.",
      image: accountingImage,
      year: "2026"
    },
    {
      id: 2,
      title: "Anime Persona Matcher",
      category: "Big Data & AI/ML",
      description: "Sophisticated big data application leveraging ML models to match users with anime characters based on personality analysis.",
      image: animeMatcherImage,
      year: "2025"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-5xl lg:text-6xl font-semibold font-poppins mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground font-quicksand max-w-3xl mx-auto leading-relaxed">
            A selection of solutions we've built recently using modern engineering practices.
          </p>
        </div>
        <div className="text-center mt-10 mb-20">
          <Link to="/work">
            <Button size="lg" className="bg-primary hover:bg-primary text-primary-foreground px-8 py-4 rounded-full group">
              View Full Portfolio
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-6" />
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-2 gap-y-8 mb-12">
          {featuredProjects.map((project, index) => {
            const isHovered = hoveredProject === project.id;
            
            return (
              <div
                key={project.id}
                className={`group cursor-pointer`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`relative overflow-hidden border-2 border-border rounded-2xl transition-all duration-300 gradient-card-default`}>
                  {/* Image */}
                  <div className="relative m-2 overflow-hidden rounded-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-[450px] object-cover`}
                    />
                  </div>

                  {/* Content */}
                  <div className="pt-4 px-8 pb-8 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex gap-1">
                        <div className="h-2 w-2 rounded-full bg-[#3B82F6]"></div>
                        <div className="h-2 w-2 rounded-full bg-[#3B82F6]"></div>
                        <div className="h-2 w-2 rounded-full bg-[#D9D9D9]"></div>
                        <div className="h-2 w-2 rounded-full bg-[#D9D9D9]"></div>
                      </div>
                      <h3 className="text-xl font-semibold font-poppins text-secondary-foreground">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex justify-between items-start gap-4">
                      <p className="text-muted-foreground font-poppins text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="shrink-0 flex items-center justify-center m-1.5 mr-0.5 w-10 h-10 bg-gradient-to-r from-[#3B82F6] to-[#4C4FF0] rounded-full">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <p>{project.year}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-sm py-2 px-4 border-border bg-[#E9EFFE] text-muted-foreground font-normal font-poppins">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View Full Portfolio */}
      </div>
    </section>
  );
};

export default FeaturedProjects;