import { useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projectsData";

const Projects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

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
            <Link
              key={project.id}
              to={`/work/${project.slug}`}
              className="group cursor-pointer block"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-2xl mb-4">
                <img
                  src={project.thumbnail}
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
            </Link>
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
              <Link
                key={project.id}
                to={`/work/${project.slug}`}
                className={`${config.width} ${project.align === 'start' ? 'self-start' : project.align === 'end' ? 'self-end' : 'self-center'} h-fit group cursor-pointer flex flex-col flex-shrink-0`}
              >
                {/* Image - takes most of the space */}
                <div className="flex-1 overflow-hidden rounded-2xl mb-4">
                  <img
                    src={project.thumbnail}
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
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;