import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/projectsData";
import ZoomableImage from "@/components/shared/ZoomableImage";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (!project) {
      navigate("/work");
    }
  }, [project, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return null;
  }

  const metaItems = [
    { k: "Client", v: project.client },
    { k: "Industry", v: project.industry },
    { k: "Services", v: project.techStack.slice(0, 3).join(", ") },
    { k: "Year", v: project.year },
  ];

  const resultTiles: { v: string; l: string }[] = [];
  if (project.liveLink) {
    resultTiles.push({ v: "Live", l: "In production" });
  }
  resultTiles.push({ v: String(project.images.length), l: "Product screenshots" });
  resultTiles.push({ v: String(project.scopeOfWork.length), l: "Scope areas covered" });

  return (
    <div className="min-h-screen pb-20">
      {/* HERO */}
      <header className="relative pt-[clamp(116px,14vw,150px)] px-5 sm:px-8 overflow-hidden">
        <div className="relative max-w-[1120px] mx-auto">
          <RevealOnScroll>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All work
            </Link>
          </RevealOnScroll>

          <RevealOnScroll delay={60} className="mt-6 flex flex-wrap gap-2.5">
            <span className="px-3.5 py-1.5 rounded-pill bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider">
              {project.industry}
            </span>
            <span className="px-3.5 py-1.5 rounded-pill border border-black/10 text-[#3a3a3c] text-xs font-semibold">
              {project.year}
            </span>
          </RevealOnScroll>

          <RevealOnScroll delay={120}>
            <h1 className="mt-5 font-hanken font-extrabold text-[clamp(40px,7vw,88px)] leading-[.98] tracking-[-.04em] max-w-[16ch] text-foreground">
              {project.title}
              <span className="text-accent">.</span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={180}>
            <p className="mt-5 max-w-[620px] text-[clamp(18px,2.3vw,24px)] text-muted-foreground">
              {project.description.split(". ").slice(0, 1).join(". ")}.
            </p>
          </RevealOnScroll>

          {project.liveLink && (
            <RevealOnScroll delay={200}>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-6">
                <Button className="flex items-center gap-2.5 pl-6 pr-1 py-6 bg-foreground text-white rounded-pill text-base font-semibold hover:-translate-y-1 transition-all duration-300">
                  View Live
                  <span className="flex items-center justify-center w-7 h-7 bg-white rounded-full text-foreground">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </Button>
              </a>
            </RevealOnScroll>
          )}

          {/* Cover */}
          <RevealOnScroll delay={220} className="mt-9 sm:mt-14">
            <div className="rounded-[clamp(20px,3vw,34px)] overflow-hidden border border-black/[0.08] shadow-[0_50px_110px_-50px_rgba(0,0,0,0.55)] bg-white">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-auto aspect-video object-contain max-h-[560px] mx-auto"
              />
            </div>
            <p className="mt-6 text-center text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              {project.thumbnailDescription}
            </p>
          </RevealOnScroll>
        </div>
      </header>

      {/* META BAR */}
      <section className="pt-[clamp(44px,6vw,72px)] px-5 sm:px-8">
        <RevealOnScroll
          className="max-w-[1120px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-7 p-6 sm:p-9 bg-white border border-black/[0.08] rounded-4xl shadow-[0_30px_70px_-50px_rgba(0,0,0,0.4)]"
        >
          {metaItems.map((m) => (
            <div key={m.k}>
              <div className="text-xs font-bold uppercase tracking-[.14em] text-muted-foreground">{m.k}</div>
              <div className="mt-2 text-base sm:text-lg font-hanken font-bold tracking-[-.02em] text-foreground">
                {m.v}
              </div>
            </div>
          ))}
        </RevealOnScroll>
      </section>

      {/* OVERVIEW */}
      <section className="pt-[clamp(64px,9vw,120px)] px-5 sm:px-8">
        <div className="max-w-[1120px] mx-auto">
          <RevealOnScroll className="max-w-[760px]">
            <div className="text-accent text-[13px] font-bold uppercase tracking-[.2em]">Overview</div>
            <h2 className="mt-4 font-hanken font-extrabold text-[clamp(28px,4vw,46px)] leading-[1.05] tracking-[-.03em] text-foreground">
              {project.title}
            </h2>
            <p className="mt-4 text-[clamp(17px,2.1vw,20px)] text-muted-foreground">
              {project.description}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={80} className="mt-8 flex flex-wrap gap-2.5">
            {project.scopeOfWork.map((scope) => (
              <span
                key={scope}
                className="px-4 py-2 border border-black/10 rounded-pill text-sm font-semibold text-foreground/80"
              >
                {scope}
              </span>
            ))}
          </RevealOnScroll>

          {/* Alternating image sections */}
          <div className="space-y-16 sm:space-y-24 mt-16 sm:mt-24">
            {project.images.map((imgSection, index) => (
              <RevealOnScroll
                key={index}
                className={`flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center`}
              >
                <div className={`w-full order-1 ${index % 2 !== 0 ? "md:order-2" : ""}`}>
                  <div className="rounded-4xl overflow-hidden border border-black/[0.08] bg-white shadow-[0_40px_80px_-46px_rgba(0,0,0,0.5)]">
                    <ZoomableImage
                      src={imgSection.src}
                      alt={imgSection.title}
                      imgClassName="object-cover"
                    />
                  </div>
                </div>

                <div className={`w-full order-2 space-y-4 md:space-y-6 ${index % 2 !== 0 ? "md:order-1" : ""}`}>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-hanken font-bold tracking-[-.02em] text-foreground">
                    {imgSection.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {imgSection.description}
                  </p>

                  {imgSection.bulletHeading && imgSection.bullets && (
                    <div className="space-y-3 pt-2">
                      <h4 className="text-base sm:text-lg font-hanken font-bold text-foreground">
                        {imgSection.bulletHeading}
                      </h4>
                      <div className="grid gap-2.5">
                        {imgSection.bullets.map((bullet, bIdx) => (
                          <div
                            key={bIdx}
                            className="flex items-start gap-3 p-3.5 bg-white border border-black/[0.06] rounded-2xl"
                          >
                            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0 mt-0.5" />
                            <span className="text-sm sm:text-base text-foreground/80">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Results */}
          <RevealOnScroll className="mt-16 sm:mt-24">
            <div className="text-accent text-[13px] font-bold uppercase tracking-[.2em]">The outcome</div>
            <h2 className="mt-4 font-hanken font-extrabold text-[clamp(28px,4vw,46px)] leading-[1.05] tracking-[-.03em] text-foreground max-w-[760px]">
              Built, shipped, and running.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={80} className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {resultTiles.map((s) => (
              <div key={s.l} className="p-6 sm:p-7 bg-[#0d0d0f] text-white rounded-4xl">
                <div className="font-hanken font-extrabold text-[clamp(26px,3.6vw,40px)] tracking-[-.03em] text-accent">
                  {s.v}
                </div>
                <div className="mt-2 text-sm text-[#a1a1a6] font-medium">{s.l}</div>
              </div>
            ))}
          </RevealOnScroll>

          {/* Closing CTA */}
          <RevealOnScroll className="mt-16 sm:mt-24 text-center bg-white border border-black/[0.08] rounded-4xl p-9 sm:p-14 shadow-[0_30px_70px_-44px_rgba(0,0,0,0.3)]">
            <h3 className="font-hanken font-extrabold text-[clamp(26px,3.6vw,44px)] leading-[1.05] tracking-[-.03em] text-foreground">
              Have something like this in mind?
            </h3>
            <p className="max-w-[480px] mx-auto mt-4 text-[clamp(16px,2vw,19px)] text-muted-foreground">
              Tell us what you're building — we'll tell you how we'd ship it.
            </p>
            <div className="flex gap-3 flex-wrap justify-center mt-7">
              <Link to="/#contact">
                <Button className="flex items-center gap-2.5 pl-7 pr-4 py-6 bg-accent text-white rounded-pill text-base font-semibold hover:-translate-y-1 transition-all duration-300">
                  Start a project
                  <span className="flex items-center justify-center w-7 h-7 bg-white rounded-full text-accent">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </Button>
              </Link>
              <Link to="/work">
                <Button variant="outline" className="px-7 py-6 bg-black/5 border-none text-foreground rounded-pill text-base font-semibold hover:-translate-y-1 transition-all duration-300">
                  See more work
                </Button>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
