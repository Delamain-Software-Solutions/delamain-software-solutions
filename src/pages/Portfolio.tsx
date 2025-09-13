import { useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, TrendingUp, Clock, Calculator, Sparkles, Eye, X } from "lucide-react";
import { Link } from "react-router-dom";
import trackioImage from "@/assets/trackio-project.jpg";
import accountingImage from "@/assets/accounting-assistant-project.jpg";
import animeMatcherImage from "@/assets/anime-matcher-project.jpg";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "Accounting Assistant",
      category: "FinTech & Automation", 
      industry: "Financial Services",
      shortDescription: "Intelligent financial automation tool that revolutionizes workflows",
      fullDescription: "An intelligent financial automation tool that revolutionizes accounting workflows by automatically generating balance sheets and income statements from Excel transaction data. Uses advanced algorithms to categorize transactions and ensure compliance with accounting standards.",
      image: accountingImage,
      icon: Calculator,
      size: 3, // Large card
      technologies: ["Python", "Pandas", "React", "Machine Learning", "Excel API", "AWS"],
      highlights: ["Excel integration", "Auto categorization", "Compliance ready", "Real-time processing"],
      results: {
        efficiency: "85% faster processing",
        accuracy: "99.7% categorization accuracy", 
        savings: "$50k+ annual savings"
      },
      duration: "3 months",
      team: "4 developers",
      year: "2024"
    },
    {
      id: 2,
      title: "Anime Persona Matcher",
      category: "Big Data & AI/ML",
      industry: "Entertainment Technology",
      shortDescription: "ML-powered personality matching system",
      fullDescription: "A sophisticated big data application leveraging multiple machine learning models to match users with anime characters based on personality analysis. Features advanced quiz algorithms, character database with 10,000+ entries, and personality profiling using psychometric principles.",
      image: animeMatcherImage,
      icon: Sparkles,
      size: 2, // Medium card
      technologies: ["Python", "TensorFlow", "React", "MongoDB", "Neo4j", "Docker"],
      highlights: ["ML personality matching", "10K+ character database", "Advanced analytics", "Real-time recommendations"],
      results: {
        users: "50k+ active users",
        accuracy: "92% match satisfaction",
        engagement: "40% increase in user retention"
      },
      duration: "4 months", 
      team: "6 developers",
      year: "2024"
    },
    {
      id: 3,
      title: "Trackio",
      category: "SaaS & Productivity",
      industry: "Freelancing & Time Management",
      shortDescription: "Comprehensive time tracking solution",
      fullDescription: "A comprehensive web-based time and expense tracking application designed specifically for freelancers and small businesses. Features automated time tracking, project management, expense categorization, and detailed reporting with seamless invoice generation.",
      image: trackioImage,
      icon: Clock,
      size: 1, // Small card
      technologies: ["React", "Node.js", "PostgreSQL", "TypeScript", "Stripe", "WebRTC"],
      highlights: ["Real-time tracking", "Invoice automation", "Multi-project support", "Team collaboration"],
      results: {
        productivity: "60% faster invoicing",
        accuracy: "95% time tracking accuracy",
        revenue: "200% increase in billing efficiency"
      },
      duration: "5 months",
      team: "5 developers", 
      year: "2023"
    }
  ];

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10 relative">
      {/* Animated Background */}
      <div 
        ref={containerRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-to-l from-accent/5 to-primary/5 rounded-full blur-2xl transition-all duration-1500 ease-out"
          style={{
            right: `${100 - mousePosition.x}%`,
            bottom: `${100 - mousePosition.y}%`,
            transform: 'translate(50%, 50%)'
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-6 py-12">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/">
              <Button variant="outline" size="sm" className="gap-2 hover:bg-accent/20 border-primary/20">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          <div className="text-center mb-16">
            <Badge variant="outline" className="text-sm mb-4 border-primary/30">Our Work</Badge>
            <h1 className="text-5xl lg:text-7xl font-bold font-space-grotesk mb-6 bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
              Portfolio
            </h1>
            <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
              Explore our innovative solutions that push the boundaries of technology and design
            </p>
          </div>
        </div>

        {/* Dynamic Irregular Portfolio Grid */}
        <div className="container mx-auto px-6 pb-24">
          {/* CSS Grid with custom layout */}
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-4 auto-rows-[100px]">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              
              // Dynamic sizing system - single value controls everything
              const getSizeClasses = (size: number) => {
                const sizeMap = {
                  1: { // Small cards
                    colSpan: "col-span-2 lg:col-span-2",
                    rowSpan: "row-span-2",
                    textSize: "text-lg lg:text-xl",
                    iconSize: "w-8 h-8",
                    padding: "p-4"
                  },
                  2: { // Medium cards  
                    colSpan: "col-span-3 lg:col-span-3",
                    rowSpan: "row-span-3",
                    textSize: "text-xl lg:text-2xl",
                    iconSize: "w-10 h-10", 
                    padding: "p-6"
                  },
                  3: { // Large cards
                    colSpan: "col-span-4 lg:col-span-4",
                    rowSpan: "row-span-4",
                    textSize: "text-2xl lg:text-3xl",
                    iconSize: "w-12 h-12",
                    padding: "p-8"
                  }
                };
                return sizeMap[size as keyof typeof sizeMap] || sizeMap[2];
              };

              const sizeConfig = getSizeClasses(project.size);
              
              // Irregular positioning for each project
              const getGridPosition = (id: number) => {
                const positions = {
                  1: "lg:col-start-1 lg:row-start-1", // Large card top-left
                  2: "lg:col-start-5 lg:row-start-1", // Medium card top-right  
                  3: "lg:col-start-7 lg:row-start-3" // Small card offset
                };
                return positions[id as keyof typeof positions] || "";
              };

              return (
                <Card
                  key={project.id}
                  variant="glass"
                  className={`
                    ${sizeConfig.colSpan} ${sizeConfig.rowSpan} ${getGridPosition(project.id)}
                    group cursor-pointer overflow-hidden relative 
                    hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:scale-[1.02] 
                    bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-primary/10
                    hover:z-10
                  `}
                  onClick={() => setSelectedProject(project.id)}
                >
                  {/* Background Image with Parallax Effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 mix-blend-overlay" />
                  </div>

                  {/* Content */}
                  <div className={`relative ${sizeConfig.padding} h-full flex flex-col justify-between`}>
                    {/* Top Section */}
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <Badge 
                          variant="secondary" 
                          className={`bg-primary/20 text-primary border-primary/30 ${
                            project.size === 1 ? 'text-xs' : project.size === 2 ? 'text-sm' : 'text-sm'
                          }`}
                        >
                          {project.category}
                        </Badge>
                        <div className={`${sizeConfig.iconSize} bg-primary/90 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                          <IconComponent className={`${
                            project.size === 1 ? 'w-4 h-4' : project.size === 2 ? 'w-5 h-5' : 'w-6 h-6'
                          } text-primary-foreground`} />
                        </div>
                      </div>

                      <h3 className={`${sizeConfig.textSize} font-bold font-space-grotesk mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2`}>
                        {project.title}
                      </h3>
                      
                      {/* Description - only show on medium and large cards */}
                      {project.size > 1 && (
                        <p className={`text-muted-foreground font-inter leading-relaxed mb-3 group-hover:text-foreground/80 transition-colors ${
                          project.size === 2 ? 'text-sm line-clamp-2' : 'text-base line-clamp-3'
                        }`}>
                          {project.shortDescription}
                        </p>
                      )}
                    </div>

                    {/* Bottom Section */}
                    <div>
                      {/* Technologies - show more on larger cards */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies.slice(0, project.size === 1 ? 2 : project.size === 2 ? 3 : 4).map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className={`px-2 py-1 bg-muted/50 text-muted-foreground rounded-full font-inter border border-border/50 ${
                              project.size === 1 ? 'text-xs' : 'text-xs'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > (project.size === 1 ? 2 : project.size === 2 ? 3 : 4) && (
                          <span className={`px-2 py-1 bg-primary/20 text-primary rounded-full font-inter border border-primary/30 ${
                            project.size === 1 ? 'text-xs' : 'text-xs'
                          }`}>
                            +{project.technologies.length - (project.size === 1 ? 2 : project.size === 2 ? 3 : 4)}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className={`text-muted-foreground font-inter ${
                          project.size === 1 ? 'text-xs' : 'text-sm'
                        }`}>
                          {project.year} • {project.duration}
                        </span>
                        <Button 
                          variant="ghost" 
                          size={project.size === 1 ? "sm" : "sm"}
                          className="text-primary hover:text-primary-foreground hover:bg-primary group-hover:translate-x-1 transition-all duration-300"
                        >
                          <Eye className={`${project.size === 1 ? 'w-3 h-3' : 'w-4 h-4'} ${project.size > 1 ? 'mr-1' : ''}`} />
                          {project.size > 1 && <span className="text-xs">Details</span>}
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && selectedProjectData && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-xl z-50 overflow-auto animate-fade-in">
          <div className="min-h-screen p-6">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedProject(null)}
                    className="gap-2 hover:bg-accent/20 border-primary/20"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Portfolio
                  </Button>
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    {selectedProjectData.category}
                  </Badge>
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedProject(null)}
                  className="hover:bg-destructive/20 hover:text-destructive"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Content Grid */}
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Column - Image & Info */}
                <div className="space-y-8">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={selectedProjectData.image}
                      alt={selectedProjectData.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute top-4 right-4 w-16 h-16 bg-primary/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <selectedProjectData.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Project Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <Card className="p-4 text-center bg-card/50 border-primary/10">
                      <Calendar className="w-5 h-5 mx-auto mb-2 text-primary" />
                      <div className="text-sm text-muted-foreground">Duration</div>
                      <div className="font-semibold">{selectedProjectData.duration}</div>
                    </Card>
                    <Card className="p-4 text-center bg-card/50 border-primary/10">
                      <Users className="w-5 h-5 mx-auto mb-2 text-primary" />
                      <div className="text-sm text-muted-foreground">Team</div>
                      <div className="font-semibold">{selectedProjectData.team}</div>
                    </Card>
                    <Card className="p-4 text-center bg-card/50 border-primary/10">
                      <TrendingUp className="w-5 h-5 mx-auto mb-2 text-primary" />
                      <div className="text-sm text-muted-foreground">Year</div>
                      <div className="font-semibold">{selectedProjectData.year}</div>
                    </Card>
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="space-y-8">
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-bold font-space-grotesk mb-4 text-foreground">
                      {selectedProjectData.title}
                    </h1>
                    <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                      {selectedProjectData.industry}
                    </p>
                    <p className="text-lg font-inter leading-relaxed text-foreground/90">
                      {selectedProjectData.fullDescription}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProjectData.technologies.map((tech, index) => (
                        <Badge 
                          key={index} 
                          variant="outline" 
                          className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Key Features</h3>
                    <div className="space-y-3">
                      {selectedProjectData.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center text-foreground/80">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Project Results</h3>
                    <div className="space-y-3">
                      {Object.entries(selectedProjectData.results).map(([key, value], index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/50">
                          <span className="capitalize font-medium text-muted-foreground">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                          <span className="text-primary font-semibold">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                    <Button variant="outline" className="flex-1 gap-2 border-primary/30 hover:bg-primary/10">
                      <Github className="w-4 h-4" />
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;