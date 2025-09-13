import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, Sparkles } from "lucide-react";
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
      icon: Calculator,
      technologies: ["Python", "Pandas", "React", "ML"],
    },
    {
      id: 2,
      title: "Anime Persona Matcher",
      category: "Big Data & AI/ML",
      description: "Sophisticated big data application leveraging ML models to match users with anime characters based on personality analysis.",
      image: animeMatcherImage,
      icon: Sparkles,
      technologies: ["Python", "TensorFlow", "React", "MongoDB"],
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
            const IconComponent = project.icon;
            const isHovered = hoveredProject === project.id;
            
            return (
              <div
                key={project.id}
                className={`group cursor-pointer transition-all duration-500 ${
                  isHovered ? 'scale-105' : 'hover:scale-102'
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${
                  isHovered 
                    ? 'shadow-2xl shadow-primary/20 bg-gradient-to-br from-primary/5 to-accent/5' 
                    : 'shadow-lg hover:shadow-xl bg-card'
                }`}>
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        isHovered ? 'scale-110 blur-sm' : 'scale-105'
                      }`}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent transition-opacity duration-500 ${
                      isHovered ? 'opacity-90' : 'opacity-60'
                    }`} />
                    
                    {/* Icon */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Badge variant="secondary" className="mb-3 text-xs">
                      {project.category}
                    </Badge>
                    
                    <h3 className={`font-bold font-space-grotesk mb-3 transition-all duration-300 ${
                      isHovered ? 'text-2xl text-primary' : 'text-xl text-foreground'
                    }`}>
                      {project.title}
                    </h3>
                    
                    <p className={`text-sm font-inter leading-relaxed mb-4 transition-all duration-500 ${
                      isHovered ? 'opacity-100 text-muted-foreground' : 'opacity-80 text-muted-foreground/80'
                    }`}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className={`text-xs px-2 py-1 rounded-md font-inter transition-all duration-300 ${
                            isHovered 
                              ? 'bg-primary/20 text-primary border border-primary/30' 
                              : 'bg-muted/50 text-muted-foreground'
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