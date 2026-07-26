import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getProjectCoverGradient } from "@/lib/projectCoverColors";

interface ProjectCardProps {
  project: {
    title: string;
    industry: string;
    description: string;
    thumbnail: string;
    year: string;
    slug: string;
    techStack: string[];
    scopeOfWork: string[];
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link
      to={`/work/${project.slug}`}
      className="group cursor-pointer block w-full max-w-2xl"
    >
      <div className="relative overflow-hidden border border-black/[0.08] rounded-4xl bg-white transition-all duration-300 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.4)] group-hover:-translate-y-1 group-hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.45)] group-hover:border-accent/40">
        {/* Colored cover box */}
        <div
          className="relative aspect-[16/10] overflow-hidden p-[clamp(14px,2.2vw,20px)]"
          style={{ background: getProjectCoverGradient(project.slug) }}
        >
          <span className="absolute left-4 top-4 z-[2] px-3.5 py-1.5 rounded-pill bg-black/40 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
            {project.industry}
          </span>
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        {/* Content */}
        <div className="pt-2 sm:pt-4 px-4 sm:px-8 pb-4 sm:pb-8 space-y-3 sm:space-y-4">
          <div className="flex justify-between items-center gap-1 sm:gap-4">
            <h3 className="text-lg sm:text-xl font-hanken font-bold tracking-[-.02em] text-foreground">
              {project.title}
            </h3>
            <div className="shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-accent/10 rounded-full text-accent transition-transform duration-300 group-hover:rotate-45 group-hover:bg-accent group-hover:text-white">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed sm:mb-1 line-clamp-2">
            {project.description}
          </p>

          <div className="flex gap-6 pt-3 border-t border-black/[0.06]">
            <div>
              <div className="text-xl sm:text-2xl font-hanken font-extrabold tracking-[-.03em] text-accent">
                {project.techStack.length}
              </div>
              <div className="mt-0.5 text-xs text-muted-foreground font-medium">Technologies</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-hanken font-extrabold tracking-[-.03em] text-accent">
                {project.scopeOfWork.length}
              </div>
              <div className="mt-0.5 text-xs text-muted-foreground font-medium">Focus Areas</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {project.techStack.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 border border-black/10 rounded-pill text-xs font-medium text-foreground/70"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* <div className="flex justify-between items-center pt-1">
            <p className="text-sm text-foreground/70">{project.year}</p>
            <span className="px-3 py-1.5 rounded-pill bg-accent/10 text-accent text-xs font-semibold">
              {project.industry}
            </span>
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
