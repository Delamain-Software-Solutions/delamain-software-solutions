import { useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, TrendingUp, Clock, Calculator, Sparkles, Eye, X, Timer, Circle, SendHorizonal } from "lucide-react";
import { Link } from "react-router-dom";
import trackioImage from "@/assets/trackio-project.jpg";
import accountingImage from "@/assets/accounting-assistant-project.jpg";
import animeMatcherImage from "@/assets/anime-matcher-project.jpg";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  type Project = {
    id: number;
    title: string;
    category: string;
    fullDescription: string;
    image: string;
    size: number;
    align: 'start' | 'end' | 'center';
    technologies: string[];
    highlights: string[];
    results: Record<string, string>;
    duration: string;
    team: string;
    year: string;
    demoLink?: string;
    codeLink?: string;
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "Accounting Assistant",
      category: "FinTech & Automation", 
      fullDescription: "An intelligent financial automation tool that revolutionizes accounting workflows by automatically generating balance sheets and income statements from Excel transaction data. Uses advanced algorithms to categorize transactions and ensure compliance with accounting standards.",
      image: accountingImage,
      size: 7,
      align: "start", // Large prominent card
      technologies: ["Python", "Pandas", "React", "Machine Learning", "Excel API", "AWS"],
      highlights: ["Excel integration", "Auto categorization", "Compliance ready", "Real-time processing"],
      results: {
        "Efficiency": "Reduced manual data entry and report generation from hours to minutes",
        "Error Reduction": "Minimized human mistakes in transaction categorization through automated checks.",
        "Clarity": "Enabled real-time financial insights for quicker business decision-making."
      },
      duration: "3 months",
      team: "3 developers",
      year: "2024",
    },
    {
      id: 2,
      title: "Anime Persona Matcher",
      category: "Big Data & AI/ML",
      fullDescription: "A sophisticated big data application leveraging multiple machine learning models to match users with anime characters based on personality analysis. Features advanced quiz algorithms, character database with 10,000+ entries, and personality profiling using psychometric principles.",
      image: animeMatcherImage,
      size: 7,
      align: "end", // Medium card
      technologies: ["Python", "TensorFlow", "React", "MongoDB", "Neo4j", "Docker"],
      highlights: ["ML personality matching", "10K+ character database", "Advanced analytics", "Real-time recommendations"],
      results: {
        "Speed": "Deliver instant results with sub-second response time.",
        "Scale": "Efficiently handles 10,000+ character dataset.",
        "Accuracy": "Improved match precision using psychometric-based ML models."
      },
      duration: "2 months", 
      team: "3 developers",
      year: "2024",
    },
    {
      id: 3,
      title: "Trackio",
      category: "SaaS & Productivity",
      fullDescription: "A comprehensive web-based time and expense tracking application designed specifically for freelancers and small businesses. Features automated time tracking, project management, expense categorization, and detailed reporting with seamless invoice generation.",
      image: trackioImage,
      size: 4,
      align: "center", // Small card
      technologies: ["React", "Node.js", "PostgreSQL", "TypeScript", "Stripe", "WebRTC"],
      highlights: ["Real-time tracking", "Invoice automation", "Multi-project support", "Team collaboration"],
      results: {
        "Error Reduction": "Reduced tracking errors with real-time monitoring.",
        "Efficiency": "Automated invoice generation saves hours of manual work.",
        "Collaboration": "Enabled smooth multi-project collaboration for teams."
      },
      duration: "5 months",
      team: "5 developers", 
      year: "2023",
      codeLink: "https://github.com/example/trackio"
    },
    {
      id: 4,
      title: "Accounting Assistant",
      category: "FinTech & Automation", 
      fullDescription: "An intelligent financial automation tool that revolutionizes accounting workflows by automatically generating balance sheets and income statements from Excel transaction data. Uses advanced algorithms to categorize transactions and ensure compliance with accounting standards.",
      image: accountingImage,
      size: 5,
      align: "start", // Large prominent card
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
      id: 5,
      title: "Anime Persona Matcher",
      category: "Big Data & AI/ML",
      fullDescription: "A sophisticated big data application leveraging multiple machine learning models to match users with anime characters based on personality analysis. Features advanced quiz algorithms, character database with 10,000+ entries, and personality profiling using psychometric principles.",
      image: animeMatcherImage,
      size: 10,
      align: "center", // Medium card
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
      id: 6,
      title: "Trackio",
      category: "SaaS & Productivity",
      fullDescription: "A comprehensive web-based time and expense tracking application designed specifically for freelancers and small businesses. Features automated time tracking, project management, expense categorization, and detailed reporting with seamless invoice generation.",
      image: trackioImage,
      size: 6,
      align: "center", // Small card
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

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10 pt-28">
      {/* Header */}
      <div className="container mx-auto px-6 py-12">

        <div className="text-center mb-4 sm:mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold font-space-grotesk mb-6">
            Case Studies
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
            A closer look at the projects we've built — from idea to working solution.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-8 sm:pb-28">
        {/* Mobile: Uniform vertical cards */}
        <div className="space-y-6 md:hidden">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-2xl mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Card Content */}
              <Card className="bg-background border-0 shadow-none">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-primary/15 text-primary border-primary/20 text-xs font-medium">
                      {project.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {project.year}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold font-space-grotesk text-foreground">
                    {project.title}
                  </h3>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Desktop: Dynamic flexible layout */}
        <div className="hidden md:flex md:flex-wrap gap-x-6 gap-y-10">
          {projects.map((project) => {
            // Comprehensive sizing system (1-10) for flex
            const getSizeConfig = (size: number) => {
              const configs = {
                1: { width: "w-48"},
                2: { width: "w-56"},
                3: { width: "w-64"},
                4: { width: "w-72"},
                5: { width: "w-80"},
                6: { width: "w-96"},
                7: { width: "w-[420px]"},
                8: { width: "w-[480px]"},
                9: { width: "w-[540px]"},
                10: { width: "w-[600px]"}
              };
              return configs[Math.min(10, Math.max(1, size)) as keyof typeof configs] || configs[4];
            };

            const config = getSizeConfig(project.size);
            
            return (
              <div
                key={project.id}
                className={`${config.width} ${project.align === 'start' ? 'self-start' : project.align === 'end' ? 'self-end' : 'self-center'} h-fit group cursor-pointer flex flex-col flex-shrink-0`}
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Image - takes most of the space */}
                <div className="flex-1 overflow-hidden rounded-2xl mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Card Content - fixed height at bottom */}
                <Card className="bg-background border-0 shadow-none">
                  <div className="p-3">
                    <div className="flex items-center justify-between mb-1">
                      <Badge variant="secondary" className="bg-primary/15 text-primary border-primary/20 text-xs font-medium">
                        {project.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {project.year}
                      </div>
                    </div>
                    <h3 className={`font-medium font-space-grotesk text-foreground ${
                      project.size <= 3 ? 'text-lg' : project.size <= 6 ? 'text-xl' : 'text-2xl'
                    }`}>
                      {project.title}
                    </h3>
                  </div>
                </Card>
              </div>
            );
          })}
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
                    Back to All Projects
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
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={selectedProjectData.image}
                      alt={selectedProjectData.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>

                  {/* Project Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <Card className="p-4 text-center bg-card/50 border-primary/10">
                      <Timer className="w-5 h-5 mx-auto mb-2 text-primary" />
                      <div className="text-sm text-muted-foreground">Duration</div>
                      <div className="font-semibold">{selectedProjectData.duration}</div>
                    </Card>
                    <Card className="p-4 text-center bg-card/50 border-primary/10">
                      <Users className="w-5 h-5 mx-auto mb-2 text-primary" />
                      <div className="text-sm text-muted-foreground">Team</div>
                      <div className="font-semibold">{selectedProjectData.team}</div>
                    </Card>
                    <Card className="p-4 text-center bg-card/50 border-primary/10">
                      <Calendar className="w-5 h-5 mx-auto mb-2 text-primary" />
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
                    <h3 className="text-xl font-semibold mb-6 text-foreground">Development Impact</h3>
                    <div className="grid gap-4">
                      {Object.entries(selectedProjectData.results).map(([key, value], index) => (
                        <Card key={index} className="p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 hover:border-primary/30 transition-colors">
                          <div className="flex items-center gap-4">
                            <div className="flex-shrink-0">
                              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-primary" />
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-foreground capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </div>
                              <div className="text-primary mt-1">
                                {value}
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons (optional) */}
                  {(selectedProjectData.demoLink || selectedProjectData.codeLink) && (
                    <div className="flex gap-4 pt-4">
                      {selectedProjectData.demoLink && (
                        <Button
                          asChild
                          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                        >
                          <a href={selectedProjectData.demoLink} target="_blank" rel="noreferrer noopener">
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {selectedProjectData.codeLink && (
                        <Button
                          asChild
                          variant="outline"
                          className="flex-1 gap-2 border-primary/30 hover:bg-primary/10"
                        >
                          <a href={selectedProjectData.codeLink} target="_blank" rel="noreferrer noopener">
                            <Github className="w-4 h-4" />
                            View Code
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;