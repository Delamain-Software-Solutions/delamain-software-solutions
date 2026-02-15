import { projects } from "@/data/projectsData";
import ProjectCard from "@/components/shared/ProjectCard";

const Projects = () => {
  return (
    <div className="min-h-screen container mx-auto px-6 bg-gradient-to-br from-background via-background to-secondary/10 pt-28">
      {/* Header */}
      <div className="sm:py-12">
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold font-poppins mb-6 text-primary">
            Case Studies
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-quicksand max-w-3xl mx-auto leading-relaxed">
            A closer look at the projects we've built, from idea to solution.
          </p>
        </div>
      </div>

      <div className="pb-20 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 justify-items-center">
          {projects.map((project) => (
            <ProjectCard 
              key={project.slug} 
              project={project} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
