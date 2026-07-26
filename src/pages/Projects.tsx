import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projectsData";
import ProjectCard from "@/components/shared/ProjectCard";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import SectionBadge from "@/components/shared/SectionBadge";
import { Button } from "@/components/ui/button";
import { siteStats } from "@/lib/siteStats";
import { ArrowRight } from "lucide-react";

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
const SWIPE_DIST = 120;

const ScrubCard = ({ project, col }: { project: (typeof projects)[number]; col: "left" | "right" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({ transform: "translateX(0px)", opacity: 1 });

  useEffect(() => {
    let raf: number | null = null;

    const update = () => {
      raf = null;
      const el = ref.current;
      if (!el) return;
      const vh = window.innerHeight;
      const r = el.getBoundingClientRect();
      const center = r.top + r.height / 2;
      const d = (center - vh / 2) / vh;
      const sign = col === "right" ? 1 : -1;

      if (d >= 0) {
        const t = clamp((0.62 - d) / 0.16, 0, 1);
        setStyle({ transform: "translateX(0px)", opacity: clamp(0.25 + 0.75 * t, 0, 1) });
      } else {
        const a = -d;
        const IN = 0.3;
        const OUT = 0.6;
        const t = clamp((OUT - a) / (OUT - IN), 0, 1);
        setStyle({
          transform: `translateX(${sign * SWIPE_DIST * (1 - t)}px)`,
          opacity: clamp(0.05 + 0.95 * t, 0, 1),
        });
      }
    };

    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, [col]);

  return (
    <div
      ref={ref}
      style={{
        transform: style.transform,
        opacity: style.opacity,
        transformOrigin: col === "right" ? "right center" : "left center",
        transition: "box-shadow 0.5s ease, border-color 0.4s ease",
      }}
    >
      <ProjectCard project={project} />
    </div>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative pt-[clamp(140px,16vw,156px)] pb-[clamp(60px,8vw,96px)] px-5 sm:px-8 overflow-hidden">
        <div className="relative max-w-[1120px] mx-auto">
          <RevealOnScroll>
            <SectionBadge className="block mb-5">Our work</SectionBadge>
            <h1 className="font-hanken font-extrabold text-[clamp(40px,7vw,88px)] leading-[.98] tracking-[-.04em] max-w-[16ch] text-foreground">
              Products we've shipped<span className="text-accent">.</span>
            </h1>
            <p className="max-w-[600px] mt-7 text-[clamp(17px,2.1vw,22px)] text-muted-foreground">
              A selection of platforms, tools and AI products we've built.
            </p>
          </RevealOnScroll>
        </div>
      </header>

      {/* Work grid */}
      <section className="px-5 sm:px-8 pb-[clamp(80px,10vw,130px)] overflow-hidden">
        <div className="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-9 justify-items-center">
          {projects.map((project, index) => (
            <ScrubCard key={project.slug} project={project} col={index % 2 === 0 ? "left" : "right"} />
          ))}
        </div>
      </section>

      {/* Stats strip */}
      <section data-bg="dark" className="bg-black text-white py-[clamp(56px,7vw,88px)] px-5 sm:px-8">
        <RevealOnScroll className="max-w-[1000px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <div className="font-hanken font-extrabold text-[clamp(34px,4.6vw,52px)] tracking-[-.04em] text-accent">
              {siteStats.projectCount}
            </div>
            <div className="mt-2 text-sm text-[#a1a1a6] font-medium">Projects shipped</div>
          </div>
          <div>
            <div className="font-hanken font-extrabold text-[clamp(34px,4.6vw,52px)] tracking-[-.04em] text-accent">
              {siteStats.upworkRating}
            </div>
            <div className="mt-2 text-sm text-[#a1a1a6] font-medium">Average client rating</div>
          </div>
          <div>
            <div className="font-hanken font-extrabold text-[clamp(34px,4.6vw,52px)] tracking-[-.04em] text-accent">
              {siteStats.upworkJobSuccess}
            </div>
            <div className="mt-2 text-sm text-[#a1a1a6] font-medium">Upwork job success</div>
          </div>
          <div>
            <div className="font-hanken font-extrabold text-[clamp(34px,4.6vw,52px)] tracking-[-.04em] text-accent">
              {siteStats.industriesCount}
            </div>
            <div className="mt-2 text-sm text-[#a1a1a6] font-medium">Industries served</div>
          </div>
        </RevealOnScroll>
      </section>

      {/* CTA */}
      <section className="py-[clamp(80px,11vw,150px)] px-5 sm:px-8">
        <RevealOnScroll className="max-w-[940px] mx-auto text-center">
          <h2 className="font-hanken font-extrabold text-[clamp(36px,5.6vw,64px)] leading-[1.02] tracking-[-.035em] text-foreground">
            Have something like this in mind?
          </h2>
          <p className="max-w-[580px] mx-auto mt-6 text-[clamp(17px,2.2vw,21px)] text-muted-foreground">
            Tell us what you're building, we'll tell you how to get started!
          </p>
          <div className="flex gap-3.5 flex-wrap justify-center mt-10">
            <Link to="/#contact">
              <Button className="flex items-center gap-2.5 pl-7 pr-6 py-6 bg-foreground text-white rounded-pill text-base font-semibold hover:-translate-y-1 transition-all duration-300">
                Start a project
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" className="px-7 py-6 bg-black/5 border-none text-foreground rounded-pill text-base font-semibold hover:-translate-y-1 transition-all duration-300">
                Back to home
              </Button>
            </Link>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
};

export default Projects;
