import { useEffect, useRef, useState } from "react";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import SectionBadge from "@/components/shared/SectionBadge";

const SERVICES = [
  {
    num: "01",
    kicker: "Engineering",
    accent: "oklch(0.66 0.16 200)",
    title: "Full-stack engineering",
    desc: "One team, front to back. Clean APIs, sturdy databases, and interfaces people genuinely enjoy using.",
    tags: ["APIs", "Databases", "Web apps"],
  },
  {
    num: "02",
    kicker: "Infra",
    accent: "oklch(0.66 0.16 150)",
    title: "Cloud & DevOps",
    desc: "Ship on Friday and sleep on Saturday. Infrastructure that scales quietly, heals itself, and doesn't surprise you.",
    tags: ["AWS", "CI/CD", "Kubernetes"],
  },
  {
    num: "03",
    kicker: "AI / ML",
    accent: "oklch(0.66 0.16 260)",
    title: "AI & machine learning",
    desc: "Models that actually earn their keep — recommendations, forecasting, and automation, plus the plumbing to run them reliably in production.",
    tags: ["LLMs & RAG", "Computer vision", "MLOps"],
  },
  {
    num: "04",
    kicker: "Web",
    accent: "oklch(0.66 0.16 300)",
    title: "Web design & development",
    desc: "Fast, beautiful web apps that load quick and feel effortless on every screen — the kind people bookmark.",
    tags: ["Next.js", "Design", "Performance"],
  },
  {
    num: "05",
    kicker: "Desktop",
    accent: "oklch(0.66 0.16 40)",
    title: "Desktop applications",
    desc: "Native-grade apps for Windows, macOS, and Linux — heavy lifting, smooth performance, no compromises.",
    tags: ["Windows", "macOS", "Linux"],
  },
  {
    num: "06",
    kicker: "Mobile",
    accent: "oklch(0.66 0.16 90)",
    title: "Mobile development",
    desc: "iOS and Android from one codebase, without the 'clearly a hybrid app' feeling. Smooth, native, done.",
    tags: ["Flutter", "React Native", "App Store"],
  },
];

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

const ServicesShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [styles, setStyles] = useState(
    SERVICES.map(() => ({ scale: 1, filter: "brightness(1)" }))
  );

  useEffect(() => {
    let raf: number | null = null;

    const update = () => {
      raf = null;
      const cards = cardRefs.current;
      const next = cards.map((card, i) => {
        const rect = card?.getBoundingClientRect();
        const nextCard = cards[i + 1];
        if (!rect) return { scale: 1, filter: "brightness(1)" };
        let cover = 0;
        if (nextCard) {
          const nr = nextCard.getBoundingClientRect();
          const gap = nr.top - rect.top;
          cover = clamp(1 - gap / rect.height, 0, 1);
        }
        return {
          scale: 1 - cover * 0.055,
          filter: `brightness(${1 - cover * 0.38})`,
        };
      });
      setStyles(next);
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
  }, []);

  return (
    <section data-bg="dark" className="bg-black py-[clamp(80px,10vw,140px)] px-5 sm:px-8">
      <div className="max-w-[900px] mx-auto mb-[clamp(50px,7vw,90px)] text-center">
        <RevealOnScroll>
          <SectionBadge className="mb-[22px]">What we do</SectionBadge>
          <h2 className="text-white font-hanken font-bold text-[clamp(36px,5.6vw,68px)] leading-[1.04] tracking-[-.03em] mt-3">
            Everything from idea to shipped.
          </h2>
          <p className="max-w-[600px] mx-auto mt-6 text-[clamp(17px,2.2vw,20px)] text-[#a1a1a6] leading-[1.5]">
            Six ways we help teams design, build, launch, and scale — with one crew from front to back.
          </p>
        </RevealOnScroll>
      </div>
      <div className="max-w-[1080px] mx-auto" ref={containerRef}>
        {SERVICES.map((service, index) => (
          <div
            key={service.num}
            ref={(el) => (cardRefs.current[index] = el)}
            style={{
              top: 160 + index * 16,
              transform: `scale(${styles[index].scale})`,
              filter: styles[index].filter,
              transformOrigin: "top center",
            }}
            className="sticky mb-[60px] bg-gradient-to-br from-[#1a1a1c] to-[#0d0d0f] border border-white/[0.09] rounded-[30px] p-[clamp(30px,4vw,54px)] min-h-[300px] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            <div
              className="absolute -top-10 -right-5 text-[clamp(120px,20vw,260px)] font-hanken font-extrabold leading-[.7] opacity-[0.14] pointer-events-none"
              style={{ color: service.accent }}
            >
              {service.num}
            </div>
            <div className="relative max-w-[620px]">
              <div className="flex items-center gap-3.5 mb-[22px]">
                <span
                  className="flex items-center justify-center w-[46px] h-[46px] rounded-2xl text-white font-bold text-lg"
                  style={{ background: service.accent }}
                >
                  {service.num}
                </span>
                <span
                  className="text-[13px] font-semibold uppercase tracking-[.16em]"
                  style={{ color: service.accent }}
                >
                  {service.kicker}
                </span>
              </div>
              <h3 className="text-white font-hanken font-bold text-[clamp(28px,3.6vw,46px)] leading-[1.05] tracking-[-.03em]">
                {service.title}
              </h3>
              <p className="mt-[18px] text-[clamp(16px,2vw,19px)] leading-[1.55] text-[#c7c7cc]">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-2.5 mt-[26px]">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 border border-white/[0.16] rounded-pill text-sm font-medium text-[#e5e5ea]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesShowcase;
