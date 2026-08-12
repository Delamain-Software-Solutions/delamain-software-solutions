import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import HeroBackdrop from "@/components/shared/HeroBackdrop";
import { usePageMeta } from "@/hooks/usePageMeta";
import { trackEvent } from "@/lib/analytics";

interface ServiceTab {
  num: string;
  kicker: string;
  title: string;
  icon: string;
  accent: string;
  grad: string;
  tagline: string;
  sub: string;
  pains: string[];
  caps: { t: string; d: string }[];
  steps: { num: string; title: string; desc: string }[];
  outcomes: { v: string; l: string }[];
  tags: string[];
}

const SERVICES: ServiceTab[] = [
  {
    num: "01",
    kicker: "Engineering",
    title: "Full-stack engineering",
    icon: "/full-stack.svg",
    accent: "oklch(0.64 0.13 210)",
    grad: "linear-gradient(135deg,oklch(0.64 0.13 210),oklch(0.44 0.12 225))",
    tagline: "One team, front to back — no handoffs, no finger-pointing.",
    sub: "Clean APIs, sturdy databases, and interfaces people genuinely enjoy using, built and owned end to end.",
    pains: [
      "Operations still run on spreadsheets, calls, and sticky notes",
      "Handoffs between siloed teams stall every release",
      "Features that ship late and over budget",
    ],
    caps: [
      { t: "APIs & services", d: "Well-documented, versioned, hard to break." },
      { t: "Databases", d: "Modeled to scale, tuned to stay fast." },
      { t: "Dashboards & CRMs", d: "Role-based platforms shaped around how the business runs." },
      { t: "Real-time sync", d: "Live updates across every connected user, no refresh needed." },
    ],
    steps: [
      { num: "01", title: "Scope", desc: "Nail down what to build and what to skip." },
      { num: "02", title: "Architect", desc: "A foundation that won't need a rewrite later." },
      { num: "03", title: "Build", desc: "Ship in small, reviewable increments." },
      { num: "04", title: "Harden", desc: "Tests, monitoring, and a clean handover." },
    ],
    outcomes: [
      { v: "6", l: "Production platforms shipped" },
      { v: "Real-time", l: "Multi-user sync, live" },
      { v: "1 crew", l: "Senior-level output" },
    ],
    tags: ["React", "Node.js", "TypeScript", "Supabase", "PostgreSQL"],
  },
  {
    num: "02",
    kicker: "Infra",
    title: "Cloud & DevOps",
    icon: "/cloud.svg",
    accent: "oklch(0.66 0.15 155)",
    grad: "linear-gradient(135deg,oklch(0.64 0.15 155),oklch(0.44 0.13 168))",
    tagline: "Ship on Friday and sleep on Saturday.",
    sub: "We build and run the production infrastructure behind our own products — containerized deployments, serverless architectures, and CI/CD that ships on every push, no manual deploys.",
    pains: [
      "Deploys are slow, manual, and scary",
      "No CI/CD — every release is a fire drill",
      "Infrastructure nobody but one person understands",
    ],
    caps: [
      { t: "AWS deployments", d: "EC2 + VPC, RDS, CloudFront, and S3 — the real stack behind Orator AI." },
      { t: "Serverless architecture", d: "Lambda, API Gateway, and DynamoDB Streams for real-time, no-server workloads." },
      { t: "CI/CD pipelines", d: "GitHub Actions shipping backend and frontend to production on every push to main." },
      { t: "WebSocket real-time", d: "Live updates broadcast to every connected client instantly." },
    ],
    steps: [
      { num: "01", title: "Assess", desc: "Map the current setup and its weak points." },
      { num: "02", title: "Automate", desc: "Pipelines replace manual deploy steps." },
      { num: "03", title: "Harden", desc: "Monitoring and backups wired in." },
      { num: "04", title: "Scale", desc: "Grow on demand while costs stay in check." },
    ],
    outcomes: [
      { v: "Zero", l: "Manual deploy steps" },
      { v: "Serverless", l: "Lambda + DynamoDB in production" },
      { v: "Auto", l: "GitHub Actions on every push" },
    ],
    tags: ["AWS", "CI/CD", "GitHub Actions", "Docker", "Serverless"],
  },
  {
    num: "03",
    kicker: "AI / ML",
    title: "AI & machine learning",
    icon: "/ai-ml.svg",
    accent: "oklch(0.62 0.18 264)",
    grad: "linear-gradient(135deg,oklch(0.62 0.18 264),oklch(0.42 0.15 282))",
    tagline: "Models that earn their keep — in production, not slideware.",
    sub: "We find where AI actually pays off, then build and ship it — from grounded assistants to computer-vision products your team can run day to day.",
    pains: [
      "Pilots that look great in a demo but never reach production",
      "Models nobody can trust, explain, or debug",
      "Video, audio, and unstructured data nobody's turned into a product yet",
    ],
    caps: [
      { t: "Computer vision", d: "Real-time detection and analysis, like Orator AI's gesture and posture tracking." },
      { t: "ML-scored feedback", d: "Turning raw video/audio into structured, numeric results." },
      { t: "Custom-trained models", d: "Built and tuned for your exact use case, not a generic API call." },
      { t: "Production ML infra", d: "Models wired into a real, monitored backend, not a notebook." },
    ],
    steps: [
      { num: "01", title: "Discover", desc: "Pin down the highest-ROI use case and success metric." },
      { num: "02", title: "Prototype", desc: "Prove it on real data in a couple of weeks." },
      { num: "03", title: "Productionize", desc: "APIs, guardrails, and a monitored deployment." },
      { num: "04", title: "Operate", desc: "Monitor and improve the model as real usage comes in." },
    ],
    outcomes: [
      { v: "Orator AI", l: "AI coaching product, shipped" },
      { v: "MediaPipe", l: "Computer vision in production" },
      { v: "Scored", l: "Not vague — structured feedback" },
    ],
    tags: ["Computer vision", "MediaPipe", "Django REST Framework", "Python", "ML"],
  },
  {
    num: "04",
    kicker: "Web",
    title: "Web design & development",
    icon: "/website.svg",
    accent: "oklch(0.62 0.19 322)",
    grad: "linear-gradient(135deg,oklch(0.62 0.19 322),oklch(0.44 0.16 338))",
    tagline: "Fast, beautiful web apps people bookmark.",
    sub: "Custom web applications with modern design, seamless functionality, and a superior user experience — built and optimized end to end.",
    pains: [
      "Slow pages that bleed visitors",
      "Design that's off-brand and forgettable",
      "A site that can't keep up as the business grows",
    ],
    caps: [
      { t: "Modern web apps", d: "Built with React and a modern, maintainable stack." },
      { t: "Design systems", d: "Consistent, on-brand, reusable UI." },
      { t: "Performance", d: "Tuned for fast loads on every screen." },
      { t: "Ongoing iteration", d: "We keep shipping after launch, not just at handover." },
    ],
    steps: [
      { num: "01", title: "Design", desc: "Wireframes to polished UI, fast." },
      { num: "02", title: "Build", desc: "Pixel-accurate, responsive, accessible." },
      { num: "03", title: "Optimize", desc: "Squeeze every millisecond of load time." },
      { num: "04", title: "Launch", desc: "Ship, measure, and iterate on real data." },
    ],
    outcomes: [
      { v: "Fast", l: "Modern, optimized builds" },
      { v: "On-brand", l: "Every screen" },
      { v: "React", l: "Built on a modern stack" },
    ],
    tags: ["React", "Next.js", "Design", "Performance", "SEO"],
  },
  {
    num: "05",
    kicker: "Desktop",
    title: "Desktop applications",
    icon: "/desktop.svg",
    accent: "oklch(0.68 0.15 55)",
    grad: "linear-gradient(135deg,oklch(0.68 0.15 55),oklch(0.48 0.13 42))",
    tagline: "Native-grade power, no compromises.",
    sub: "Robust desktop solutions built and optimized for Windows, macOS, and Linux platforms, with enhanced performance for heavy-lifting workloads.",
    pains: [
      "Cross-platform apps that feel laggy and foreign",
      "Work that needs deep hardware or OS access web can't reach",
      "Painful install, update, and distribution",
    ],
    caps: [
      { t: "Windows / macOS / Linux", d: "One codebase, native on all three." },
      { t: "Native performance", d: "Smooth even with heavy workloads." },
      { t: "Hardware access", d: "Files, devices, and OS-level features." },
      { t: "Auto-update", d: "Ship fixes without manual reinstalls." },
    ],
    steps: [
      { num: "01", title: "Scope", desc: "Define platforms, features, and constraints." },
      { num: "02", title: "Prototype", desc: "Validate the tricky native bits early." },
      { num: "03", title: "Build", desc: "One codebase, polished per platform." },
      { num: "04", title: "Distribute", desc: "Signing, installers, and auto-updates." },
    ],
    outcomes: [
      { v: "3", l: "Platforms, one build" },
      { v: "Native", l: "Performance & feel" },
      { v: "Auto", l: "Silent updates" },
    ],
    tags: ["Windows", "macOS", "Linux", "Electron", "Native"],
  },
  {
    num: "06",
    kicker: "Mobile",
    title: "Mobile development",
    icon: "/mobile.svg",
    accent: "oklch(0.7 0.15 132)",
    grad: "linear-gradient(135deg,oklch(0.68 0.15 132),oklch(0.48 0.13 145))",
    tagline: "Feels native. Ships once.",
    sub: "Native and cross-platform mobile applications with intuitive interfaces and smooth performance — without the 'clearly a hybrid app' feeling.",
    pains: [
      "Two codebases doubling cost and drift",
      "Janky UX that users can feel instantly",
      "Slow, confusing app-store approvals",
    ],
    caps: [
      { t: "Flutter & React Native", d: "One codebase, both app stores." },
      { t: "Native feel", d: "Smooth gestures and real polish." },
      { t: "Push & offline", d: "Notifications and offline-first data." },
      { t: "Store launch", d: "We handle submission and review." },
    ],
    steps: [
      { num: "01", title: "Design", desc: "Flows and UI tuned for thumbs." },
      { num: "02", title: "Build", desc: "One codebase, native on both OSes." },
      { num: "03", title: "Test", desc: "Real devices, real edge cases." },
      { num: "04", title: "Publish", desc: "App Store and Play, done for you." },
    ],
    outcomes: [
      { v: "1", l: "Codebase, two stores" },
      { v: "Native", l: "Look and feel" },
      { v: "Both", l: "iOS and Android" },
    ],
    tags: ["Flutter", "React Native", "App Store", "iOS", "Android"],
  },
];

const ServicesPage = () => {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(0);
  const svc = SERVICES[active];

  usePageMeta({
    title: "Services",
    description:
      "Full-stack engineering, AI/ML, mobile and web product work — how Delamain scopes, builds and ships software for clients.",
  });

  const setTab = (i: number) => {
    if (i === active) return;
    setDir(i > active ? 1 : -1);
    setActive(i);
    // The tabs don't change the URL, so they'd be invisible in GA otherwise.
    trackEvent("service_tab_view", { service_name: SERVICES[i].title });
  };

  return (
    <div className="min-h-screen">
      <header className="relative pt-[clamp(128px,15vw,180px)] pb-[clamp(28px,4vw,70px)] px-5 sm:px-8 overflow-hidden">
        <HeroBackdrop />
        <div className="relative max-w-[1120px] mx-auto">
          <RevealOnScroll>
            <div
              className="text-[13px] font-bold uppercase tracking-[.24em] mb-5 transition-colors duration-500"
              style={{ color: svc.accent }}
            >
              What we do
            </div>
            <h1 className="font-hanken font-extrabold text-[clamp(40px,6.4vw,84px)] leading-[1.0] tracking-[-.04em] max-w-[15ch] text-foreground">
              Different Services, one team that ships all of them
              <span className="transition-colors duration-500" style={{ color: svc.accent }}>.</span>
            </h1>
            <p className="max-w-[600px] mt-6 text-[clamp(17px,2.1vw,21px)] text-muted-foreground">
              Pick a service to see exactly how we do it!
            </p>
          </RevealOnScroll>
        </div>
      </header>

      {/* Tab bar */}
      <div className="sticky top-14 z-[120] bg-black/90 backdrop-blur-xl backdrop-saturate-150 border-y border-white/10">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-10 py-4 flex gap-2.5 overflow-x-auto [scrollbar-width:none]">
          {SERVICES.map((s, i) => (
            <button
              key={s.num}
              onClick={() => setTab(i)}
              style={
                i === active
                  ? { background: s.accent, boxShadow: `0 14px 28px -14px ${s.accent}` }
                  : undefined
              }
              className={`flex-none flex items-center gap-2.5 pl-3 pr-6 py-2.5 border rounded-pill text-sm font-bold transition-all duration-300 ${
                i === active
                  ? "border-transparent text-white -translate-y-0.5"
                  : "bg-white/[0.06] border-white/10 text-[#a1a1a6]"
              }`}
            >
              <span
                className={`flex items-center justify-center w-[26px] h-[26px] rounded-full text-xs font-extrabold ${
                  i === active ? "bg-white/25 text-white" : "bg-white/10 text-[#a1a1a6]"
                }`}
              >
                {s.num}
              </span>
              {s.kicker}
            </button>
          ))}
        </div>
      </div>

      {/* Panel */}
      <div className="relative max-w-[1120px] mx-auto px-5 sm:px-8 py-[clamp(40px,6vw,72px)] pb-[clamp(70px,9vw,120px)] overflow-hidden">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={svc.num}
            custom={dir}
            initial={{ opacity: 0, x: dir * 34 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -dir * 34 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Hook */}
            <div className="grid md:grid-cols-[1.15fr_.85fr] gap-8 sm:gap-14 items-center">
              <div>
                <div
                  className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-pill text-xs font-bold uppercase tracking-[.14em]"
                  style={{ background: `color-mix(in srgb, ${svc.accent} 12%, transparent)`, color: svc.accent }}
                >
                  Service {svc.num} &middot; {svc.kicker}
                </div>
                <h2 className="mt-5 font-hanken font-extrabold text-[clamp(34px,4.8vw,60px)] leading-[1.02] tracking-[-.035em] text-foreground">
                  {svc.title}
                </h2>
                <p
                  className="mt-4 font-hanken font-bold text-[clamp(19px,2.4vw,26px)] tracking-[-.02em]"
                  style={{ color: svc.accent }}
                >
                  {svc.tagline}
                </p>
                <p className="mt-4 max-w-[520px] text-[clamp(16px,2vw,19px)] text-muted-foreground">{svc.sub}</p>
                <div className="flex gap-3 flex-wrap mt-7">
                  <Link to="/#contact">
                    <Button className="flex items-center gap-2.5 pl-6 pr-5 py-6 bg-foreground text-white rounded-pill text-base font-semibold hover:-translate-y-1 transition-all duration-300">
                      Book a free call
                      <span className="flex items-center justify-center w-7 h-7 bg-white rounded-full text-foreground">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </Button>
                  </Link>
                  <Link to="/work">
                    <Button variant="outline" className="px-6 py-6 bg-black/5 border-none text-foreground rounded-pill text-base font-semibold hover:-translate-y-1 transition-all duration-300">
                      See related work
                    </Button>
                  </Link>
                </div>
              </div>
              <div
                className="relative aspect-[4/5] rounded-4xl overflow-hidden shadow-[0_40px_90px_-40px_rgba(0,0,0,0.5)]"
                style={{ background: svc.grad }}
              >
                <div className="absolute top-6 left-7 font-hanken font-extrabold text-[clamp(100px,16vw,150px)] leading-[.8] text-white/90 tracking-[-.04em]">
                  {svc.num}
                </div>
                <div className="absolute left-7 right-7 bottom-7 text-white">
                  <div className="mt-1.5 font-hanken font-extrabold text-[clamp(20px,2.6vw,28px)] tracking-[-.025em]">
                    {svc.kicker}
                  </div>
                </div>
              </div>
            </div>

            {/* Pains */}
            <div className="mt-14 sm:mt-24">
              <h3 className="font-hanken font-extrabold text-[clamp(24px,3.2vw,38px)] tracking-[-.03em] text-foreground">
                Where teams get stuck
              </h3>
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                {svc.pains.map((p) => (
                  <div key={p} className="p-6 bg-white border border-black/[0.08] rounded-2xl shadow-[0_20px_44px_-34px_rgba(0,0,0,0.4)]">
                    <div
                      className="w-[34px] h-[34px] rounded-[10px] flex items-center justify-center font-extrabold"
                      style={{ background: `color-mix(in srgb, ${svc.accent} 14%, transparent)`, color: svc.accent }}
                    >
                      !
                    </div>
                    <p className="mt-3.5 text-[15px] font-semibold text-foreground">{p}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Capabilities */}
            <div className="mt-14 sm:mt-24">
              <h3 className="font-hanken font-extrabold text-[clamp(24px,3.2vw,38px)] tracking-[-.03em] text-foreground">
                What we actually do
              </h3>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {svc.caps.map((c) => (
                  <div key={c.t} className="flex gap-4 items-start p-6 bg-white border border-black/[0.08] rounded-2xl shadow-[0_20px_44px_-34px_rgba(0,0,0,0.4)]">
                    <div
                      className="flex-none w-11 h-11 rounded-[13px] flex items-center justify-center"
                      style={{ background: svc.grad }}
                    >
                      <span className="w-3 h-3 rounded-sm bg-white" />
                    </div>
                    <div>
                      <div className="font-hanken font-extrabold text-[17px] tracking-[-.015em]">{c.t}</div>
                      <p className="mt-1.5 text-sm text-muted-foreground">{c.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="mt-14 sm:mt-24">
              <h3 className="font-hanken font-extrabold text-[clamp(24px,3.2vw,38px)] tracking-[-.03em] text-foreground">
                How we get you there
              </h3>
              <p className="mt-3 max-w-[520px] text-base text-muted-foreground">
                A tight, low-risk path from first call to something running in production.
              </p>
              <div className="mt-7 grid sm:grid-cols-4 gap-3.5">
                {svc.steps.map((s) => (
                  <div key={s.num} className="relative p-6 bg-[#0d0d0f] text-white border border-white/[0.08] rounded-2xl overflow-hidden">
                    <div
                      className="absolute -top-4 right-0.5 font-hanken font-extrabold text-7xl leading-none opacity-20"
                      style={{ color: svc.accent }}
                    >
                      {s.num}
                    </div>
                    <div className="relative text-xs font-bold uppercase tracking-[.14em]" style={{ color: svc.accent }}>
                      Step {s.num}
                    </div>
                    <div className="relative mt-3 font-hanken font-extrabold text-lg tracking-[-.02em]">{s.title}</div>
                    <p className="relative mt-2 text-sm leading-relaxed text-[#a1a1a6]">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Proof */}
            <div
              className="mt-14 sm:mt-24 rounded-[26px] p-7 sm:p-12 text-white shadow-[0_40px_90px_-46px_rgba(0,0,0,0.5)]"
              style={{ background: svc.grad }}
            >
              <div className="grid sm:grid-cols-3 gap-5">
                {svc.outcomes.map((o) => (
                  <div key={o.l}>
                    <div className="font-hanken font-extrabold text-[clamp(30px,4vw,46px)] tracking-[-.04em]">{o.v}</div>
                    <div className="mt-1.5 text-sm font-semibold opacity-90">{o.l}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2.5 mt-7">
                {svc.tags.map((tag) => (
                  <span key={tag} className="px-3.5 py-2 border border-white/30 rounded-pill text-[13.5px] font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="mt-12 sm:mt-16 text-center bg-white border border-black/[0.08] rounded-[26px] p-9 sm:p-14 shadow-[0_30px_70px_-44px_rgba(0,0,0,0.3)]">
              <h3 className="font-hanken font-extrabold text-[clamp(26px,3.6vw,44px)] leading-[1.05] tracking-[-.03em] text-foreground">
                Ready to start with {svc.title}?
              </h3>
              <p className="max-w-[480px] mx-auto mt-4 text-[clamp(16px,2vw,19px)] text-muted-foreground">
                Book a free call and we'll map out scope, timeline, and a fixed first milestone — no obligation.
              </p>
              <div className="flex gap-3 flex-wrap justify-center mt-7">
                <Link to="/#contact">
                  <Button
                    className="flex items-center gap-2.5 pl-6 pr-5 py-6 text-white rounded-pill text-base font-bold hover:-translate-y-1 transition-all duration-300"
                    style={{ background: svc.accent }}
                  >
                    Book a free call
                    <span
                      className="flex items-center justify-center w-7 h-7 bg-white rounded-full"
                      style={{ color: svc.accent }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </Link>
                <a href="mailto:contact@delamainsoftware.com">
                  <Button variant="outline" className="px-6 py-6 bg-black/5 border-none text-foreground rounded-pill text-base font-semibold hover:-translate-y-1 transition-all duration-300">
                    Email us instead
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ServicesPage;
