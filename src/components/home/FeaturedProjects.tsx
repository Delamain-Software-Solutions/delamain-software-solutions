import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projectsData";
import RevealOnScroll from "../shared/RevealOnScroll";
import SectionBadge from "../shared/SectionBadge";
import { getProjectCoverGradient } from "@/lib/projectCoverColors";

const FeaturedProjects = () => {
  const featuredProjects = projects.slice(0, 2);

  return (
    <section id="work" data-bg="dark" className="bg-[#0a0a0a] text-[#f5f5f7] py-[clamp(80px,10vw,140px)] px-5 sm:px-8">
      <RevealOnScroll className="max-w-[820px] mx-auto mb-[clamp(44px,6vw,72px)] text-center">
        <SectionBadge className="block mb-[22px]">Our work</SectionBadge>
        <h2 className="font-hanken font-bold text-[clamp(36px,5.6vw,64px)] leading-[1.04] tracking-[-.03em]">
          A few things we've shipped.
        </h2>
        <p className="max-w-[560px] mx-auto mt-6 text-[clamp(17px,2.2vw,20px)] leading-[1.5] text-[#a1a1a6]">
          Real products, in production, doing real work every day.
        </p>
      </RevealOnScroll>

      <div className="max-w-[1120px] mx-auto grid gap-7" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
        {featuredProjects.map((project) => (
          <RevealOnScroll key={project.slug}>
            <Link
              to={`/work/${project.slug}`}
              className="group block bg-[#161618] border border-white/[0.08] rounded-[26px] overflow-hidden h-full"
            >
              <div
                className="aspect-[16/10] relative overflow-hidden p-[clamp(16px,2.5vw,24px)]"
                style={{ background: getProjectCoverGradient(project.slug) }}
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-[clamp(24px,3vw,38px)]">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-[clamp(22px,2.6vw,30px)] font-hanken font-bold tracking-[-.02em]">
                    {project.title}
                  </h3>
                  <span className="flex-none flex items-center justify-center w-[42px] h-[42px] rounded-full bg-accent text-white transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>
                <p className="mt-3.5 text-base leading-[1.55] text-[#a1a1a6] line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2.5 mt-[22px]">
                  {project.techStack.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 border border-white/[0.16] rounded-pill text-[13px] text-[#e5e5ea]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
