import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Timer, ChevronLeft, ChevronRight, X } from "lucide-react";
import { projects } from "@/data/projectsData";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    if (!project) {
      navigate('/work');
    }
  }, [project, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Prevent body scroll when image modal is open
  useEffect(() => {
    if (isImageModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isImageModalOpen]);

  if (!project) {
    return null;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10 pt-28">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/work')}
              className="gap-2 hover:bg-accent/20 border-primary/20"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Projects
            </Button>
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
              {project.category}
            </Badge>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image Gallery & Stats */}
          <div className="space-y-8">
            {/* Image Gallery */}
            <div className="relative overflow-hidden rounded-2xl bg-muted/30">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full object-cover cursor-zoom-in"
                onClick={() => setIsImageModalOpen(true)}
              />
              
              {/* Image Navigation */}
              {project.images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="!w-8 !h-8" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                    onClick={nextImage}
                  >
                    <ChevronRight className="!w-8 !h-8" />
                  </Button>
                  
                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {project.images.length}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail Navigation */}
            {project.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? 'border-primary scale-105'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-20 h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

          </div>

          {/* Right Column - Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold font-space-grotesk mb-4 text-foreground">
                {project.title}
              </h1>
              <p className="text-lg font-inter leading-relaxed text-foreground/90">
                {project.fullDescription}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
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
                {project.highlights.map((highlight, index) => (
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
                {Object.entries(project.results).map(([key, value], index) => (
                  <Card key={index} className="p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
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
            {/* Project Stats */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="p-4 text-center bg-card/50 border-primary/10">
                <Timer className="w-5 h-5 mx-auto mb-2 text-primary" />
                <div className="text-sm text-muted-foreground">Duration</div>
                <div className="font-semibold">{project.duration}</div>
              </Card>
              <Card className="p-4 text-center bg-card/50 border-primary/10">
                <Users className="w-5 h-5 mx-auto mb-2 text-primary" />
                <div className="text-sm text-muted-foreground">Team</div>
                <div className="font-semibold">{project.team}</div>
              </Card>
              <Card className="p-4 text-center bg-card/50 border-primary/10">
                <Calendar className="w-5 h-5 mx-auto mb-2 text-primary" />
                <div className="text-sm text-muted-foreground">Year</div>
                <div className="font-semibold">{project.year}</div>
              </Card>
            </div>

            {/* Action Buttons */}
            {(project.demoLink || project.codeLink) && (
              <div className="flex gap-4 pt-4">
                {project.demoLink && (
                  <Button
                    asChild
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                  >
                    <a href={project.demoLink} target="_blank" rel="noreferrer noopener">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.codeLink && (
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 gap-2 border-primary/30 hover:bg-primary/10"
                  >
                    <a href={project.codeLink} target="_blank" rel="noreferrer noopener">
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

      {/* Full-Screen Image Modal */}
      {isImageModalOpen && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsImageModalOpen(false)}
        >
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
            onClick={() => setIsImageModalOpen(false)}
          >
            <X className="w-6 h-6" />
          </Button>

          {/* Image Navigation Buttons */}
          {project.images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                <ChevronRight className="w-8 h-8" />
              </Button>

              {/* Image Counter */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium z-10">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </>
          )}

          {/* Scrollable Image Container */}
          <div 
            className="max-w-7xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={project.images[currentImageIndex]}
              alt={`${project.title} - Full size ${currentImageIndex + 1}`}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
