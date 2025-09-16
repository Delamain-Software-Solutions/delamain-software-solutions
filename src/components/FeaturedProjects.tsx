import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
      technologies: ["Python", "Pandas", "React", "ML"],
      results: "50% faster processing",
    },
    {
      id: 2,
      title: "Anime Persona Matcher",
      category: "Big Data & AI/ML",
      description: "Sophisticated big data application leveraging ML models to match users with anime characters based on personality analysis.",
      image: animeMatcherImage,
      technologies: ["Python", "TensorFlow", "React", "MongoDB"],
      results: "95% accuracy rate",
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-sm mb-4 border-primary/20">Featured Work</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold font-space-grotesk mb-6">
            <span className="text-primary">Spotlight</span> Projects
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto leading-relaxed">
            A glimpse of our most innovative solutions that transform businesses
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => {
            const isHovered = hoveredProject === project.id;
            
            return (
              <div
                key={project.id}
                className={`group cursor-pointer transition-all duration-500 ${
                  isHovered ? 'scale-[1.02]' : 'hover:scale-[1.01]'
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`relative overflow-hidden rounded-2xl border transition-all duration-500 ${
                  isHovered 
                    ? 'shadow-2xl shadow-primary/20 border-primary/20 bg-gradient-to-br from-card to-secondary/10' 
                    : 'shadow-lg hover:shadow-xl border-border bg-card'
                }`}>
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        isHovered ? 'scale-110' : 'scale-105'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                    
                    {/* Results Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm text-primary border-primary/20">
                        {project.results}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs border-primary/20 text-primary">
                        {project.category}
                      </Badge>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold font-space-grotesk mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground font-inter leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className={`text-xs px-3 py-1.5 rounded-full font-inter font-medium transition-all duration-300 ${
                            isHovered 
                              ? 'bg-primary/10 text-primary border border-primary/20' 
                              : 'bg-secondary text-secondary-foreground'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View Full Portfolio */}
        <div className="text-center">
          <Link to="/portfolio">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full group">
              View Full Portfolio
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;