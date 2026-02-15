import React from "react";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: {
    title: string;
    industry: string;
    description: string;
    thumbnail: string;
    year: string;
    slug: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link
      to={`/work/${project.slug}`}
      className="group cursor-pointer block w-full max-w-2xl"
    >
      <div className="relative overflow-hidden border-2 border-border rounded-2xl transition-all duration-300 gradient-card-default group-hover:shadow-lg">
        {/* Image */}
        <div className="relative m-2 overflow-hidden rounded-xl">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full aspect-[4/3] object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="pt-2 sm:pt-4 px-4 sm:px-8 pb-2 sm:pb-8 space-y-2 sm:space-y-4">
          <div className="flex justify-between items-center gap-1 sm:gap-4">
            <h3 className="text-lg sm:text-xl font-semibold font-poppins text-secondary-foreground">
              {project.title}
            </h3>
            <div className="shrink-0 flex items-center justify-center m-1.5 mr-0.5 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#3B82F6] to-[#4C4FF0] rounded-full transition-transform group-hover:rotate-45">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-muted-foreground font-poppins text-sm leading-relaxed sm:mb-4 line-clamp-3">
            {project.description}
          </p>

          <div className="flex justify-between items-center">
            <p className="font-poppins text-sm text-foreground/70">{project.year}</p>
            <div className="flex items-center justify-between">
              <Badge
                variant="outline"
                className="text-sm py-2 px-4 border-border bg-[#E9EFFE] text-muted-foreground font-normal font-poppins"
              >
                {project.industry}
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
