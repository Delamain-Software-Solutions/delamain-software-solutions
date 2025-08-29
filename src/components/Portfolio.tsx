import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Calculator, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import trackioImage from "@/assets/trackio-project.jpg";
import accountingImage from "@/assets/accounting-assistant-project.jpg";
import animeMatcherImage from "@/assets/anime-matcher-project.jpg";

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Accounting Assistant",
      category: "FinTech & Automation", 
      industry: "Financial Services",
      description: "An intelligent financial automation tool that revolutionizes accounting workflows by automatically generating balance sheets and income statements from Excel transaction data. Uses advanced algorithms to categorize transactions and ensure compliance with accounting standards.",
      image: accountingImage,
      icon: Calculator,
      technologies: ["Python", "Pandas", "React", "Machine Learning"],
      highlights: ["Excel integration", "Auto categorization", "Compliance ready"]
    },
    {
      id: 2,
      title: "Anime Persona Matcher",
      category: "Big Data & AI/ML",
      industry: "Entertainment Technology",
      description: "A sophisticated big data application leveraging multiple machine learning models to match users with anime characters based on personality analysis. Features advanced quiz algorithms, character database with 10,000+ entries, and personality profiling using psychometric principles.",
      image: animeMatcherImage,
      icon: Sparkles,
      technologies: ["Python", "TensorFlow", "React", "MongoDB"],
      highlights: ["ML personality matching", "10K+ character database", "Advanced analytics"]
    },
    {
      id: 3,
      title: "Trackio",
      category: "SaaS & Productivity",
      industry: "Freelancing & Time Management",
      description: "A comprehensive web-based time and expense tracking application designed specifically for freelancers and small businesses. Features automated time tracking, project management, expense categorization, and detailed reporting with seamless invoice generation.",
      image: trackioImage,
      icon: Clock,
      technologies: ["React", "Node.js", "PostgreSQL", "TypeScript"],
      highlights: ["Real-time tracking", "Invoice automation", "Multi-project support"]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-sm mb-4">Portfolio</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold font-space-grotesk mb-6 text-primary">
            Our Amazing <span className="text-foreground">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto leading-relaxed">
            Have a look at our best projects we have done in the recent years
          </p>
        </div>

        <div className="space-y-2">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const isEven = index % 2 === 0;
            const isHovered = hoveredProject === project.id;
            
            return (
              <div
                key={project.id}
                className={`grid lg:grid-cols-2 gap-8 items-center group cursor-pointer transition-all duration-700 ease-out p-8 rounded-3xl ${
                  isHovered 
                    ? 'scale-90 bg-slate-900/95 shadow-2xl shadow-primary/20' 
                    : 'scale-90  bg-muted hover:bg-muted/30'
                } ${isEven ? '' : 'lg:grid-cols-2'}`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image */}
                <div className={`${!isEven ? 'lg:order-2' : ''} relative`}>
                  <div className={`overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 transition-all duration-700 ${
                    isHovered ? 'aspect-[5/3]' : 'aspect-[5/3]'
                  }`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Project Icon */}
                  <div className="absolute top-4 left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg transition-all duration-300">
                    <IconComponent className="w-5 h-5 text-primary-foreground" />
                  </div>
                  
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent rounded-xl transition-opacity duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>
                
                {/* Content */}
                <div className={`${!isEven ? 'lg:order-1' : ''} space-y-6 text-center xl:text-left`}>
                  {/* Title and Labels - Move up on hover */}
                  <div className={`space-y-3 transition-all duration-500 ${
                    isHovered ? 'transform -translate-y-2' : ''
                  }`}>
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                      <Badge variant="outline" className={`text-xs font-medium transition-colors duration-300 ${
                        isHovered ? 'border-primary/50 text-primary bg-primary/10' : 'border-primary/20 text-primary'
                      }`}>
                        {project.category}
                      </Badge>
                      <Badge variant="secondary" className={`text-xs transition-colors duration-300 ${
                        isHovered ? 'bg-secondary/20 text-secondary-foreground' : ''
                      }`}>
                        {project.industry}
                      </Badge>
                    </div>
                    
                      <h3 className={`font-bold font-space-grotesk transition-colors transition-all duration-300 ${
                      isHovered ? 'text-white text-3xl' : 'text-primary text-5xl'
                    }`}>
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Description - Appears on hover */}
                  <div className={`transition-all duration-500 ${
                    isHovered ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
                  }`}>
                    <p className={`text-base font-inter leading-relaxed transition-colors duration-300 ${
                      isHovered ? 'text-gray-300' : 'text-muted-foreground'
                    }`}>
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies - Move down on hover */}
                  <div className={`transition-all duration-500 ${
                    isHovered ? 'transform translate-y-4' : ''
                  }`}>
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className={`text-xs px-2.5 py-1 rounded-md font-inter transition-colors duration-300 ${
                            isHovered 
                              ? 'bg-primary/20 text-primary-foreground border border-primary/30' 
                              : 'bg-muted text-muted-foreground'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Highlights - Only visible on hover */}
                  <div className={`transition-all duration-500 ${
                    isHovered ? 'opacity-100 max-h-24' : 'opacity-0 max-h-0 overflow-hidden'
                  }`}>
                    <div className="space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center justify-center lg:justify-start text-sm text-gray-400 font-inter">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-20">
          <Link to="/projects">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full group">
              Explore More Projects
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;