import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowUpRightFromCircle, Landmark, Cloud, HeartPulse, Gamepad2, Building2, GraduationCap, Compass, Workflow, Bot, ShieldCheck } from "lucide-react";

const AI_CARDS = [
  { title: "AI Discovery & Roadmap", desc: "Find where AI pays off first.", icon: Compass },
  { title: "Workflow Automation", desc: "Automate the busywork.", icon: Workflow },
  { title: "AI Agents", desc: "Autonomous helpers in your stack.", icon: Bot },
  { title: "AI Ops & Governance", desc: "Run models safely, at scale.", icon: ShieldCheck },
];

const CLIENT_CARDS = [
  { name: "America's Bin Company", logo: "/americas-bin-co.png" },
  { name: "America's Recycling Company", logo: "/americas-recycling-co.png" },
  { name: "Delta Technologies", logo: "/delta-tech-logo.svg" },
];

const INDUSTRIES = [
  { name: "FinTech", icon: Landmark },
  { name: "SaaS", icon: Cloud },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Gaming", icon: Gamepad2 },
  { name: "Enterprise", icon: Building2 },
  { name: "EdTech", icon: GraduationCap },
];

const SLIDE_INTERVAL = 7000;

const HeroSection = () => {
  const navigate = useNavigate();
  const [slide, setSlide] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) setSlide((s) => (s + 1) % 2);
    }, SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, []);

  const goToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
  };

  const goToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) servicesSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[min(920px,100vh)] overflow-hidden"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <div className="relative grid min-h-[min(920px,100vh)] items-start">
        {/* SLIDE 0 : AI */}
        <div
          className="[grid-area:1/1] pt-[clamp(112px,13vw,140px)] px-[clamp(20px,6vw,64px)] pb-[clamp(64px,6vw,84px)] transition-all duration-700 ease-out"
          style={{
            opacity: slide === 0 ? 1 : 0,
            transform: slide === 0 ? "translateY(0)" : "translateY(18px)",
            pointerEvents: slide === 0 ? "auto" : "none",
          }}
        >
          <div className="w-full max-w-[1180px] sm:mx-auto lg:ml-24">
            <div className="text-accent text-[13px] font-bold uppercase tracking-[.24em] mb-5">
              AI Automation Solutions
            </div>
            <h1 className="font-hanken font-extrabold text-[clamp(42px,7vw,92px)] leading-[1.0] tracking-[-.035em] max-w-[15ch] text-foreground">
              Reimagine your business with AI<span className="text-accent">.</span>
            </h1>
            <p className="max-w-[600px] mt-6 text-[clamp(17px,2.1vw,22px)] text-muted-foreground">
              We help teams integrate AI into their daily workflows. Automating the busywork and building intelligent tools that learn, adapt and scale.
            </p>
            <div className="flex flex-wrap items-center gap-3.5 mt-8">
              <Button
                onClick={goToServices}
                className="group flex items-center gap-2.5 pl-6 pr-4 py-6 bg-foreground text-white rounded-pill text-base font-semibold hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                Explore AI services
                <span className="flex items-center justify-center w-7 h-7 bg-white rounded-full text-foreground transition-transform group-hover:translate-x-0.5">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Button>
              <Button
                onClick={goToContact}
                variant="outline"
                className="flex items-center gap-2 px-6 py-6 bg-black/5 border-none text-foreground rounded-pill text-base font-semibold hover:-translate-y-1 transition-all duration-300"
              >
                Let's talk
              </Button>
              <a
                href="https://www.upwork.com/agencies/1959629402932155222/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground text-[15px] font-semibold"
              >
                <span className="text-[#ffb400] tracking-wider">★</span>
                5.0 &middot; Top Rated on Upwork
                <ArrowUpRightFromCircle className="w-4 h-4 text-muted-foreground" />
              </a>
            </div>
            <div className="mt-10 sm:mt-14">
              <div className="text-xs font-bold uppercase tracking-[.2em] text-muted-foreground mb-4">
                Our AI services
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-[980px]">
                {AI_CARDS.map((card) => (
                  <div
                    key={card.title}
                    className="p-5 border border-black/10 rounded-2xl bg-white/60 backdrop-blur-md shadow-[0_18px_40px_-24px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
                  >
                    <div className="w-8 h-8 rounded-[10px] bg-accent flex items-center justify-center mb-4">
                      <card.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-[15px] sm:text-base font-extrabold leading-tight">{card.title}</div>
                    <div className="mt-1.5 text-[13px] text-muted-foreground leading-snug">{card.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 1 : CRM */}
        <div
          className="[grid-area:1/1] relative pt-[clamp(112px,13vw,140px)] px-[clamp(20px,6vw,64px)] pb-[clamp(64px,6vw,84px)] transition-all duration-700 ease-out"
          style={{
            opacity: slide === 1 ? 1 : 0,
            transform: slide === 1 ? "translateY(0)" : "translateY(18px)",
            pointerEvents: slide === 1 ? "auto" : "none",
          }}
        >
          <div className="w-full max-w-[1180px] sm:mx-auto lg:ml-24">
            <div className="text-accent text-[13px] font-bold uppercase tracking-[.24em] mb-5">
              Custom software
            </div>
            <h1 className="font-hanken font-extrabold text-[clamp(36px,5.4vw,74px)] leading-[1.03] tracking-[-.035em] max-w-[17ch] text-foreground">
              CRMs &amp; internal tools, built around how you work<span className="text-accent">.</span>
            </h1>
            <p className="max-w-[560px] mt-6 text-[clamp(17px,2.1vw,22px)] text-muted-foreground">
              From dispatch and inventory to sales and support, we build the internal software that runs the business. Customized around your team and business processes.
            </p>
            <div className="flex flex-wrap gap-3.5 mt-8">
              <Button
                onClick={() => navigate("/work")}
                className="group flex items-center gap-2.5 pl-6 pr-4 py-6 bg-foreground text-white rounded-pill text-base font-semibold hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                See our work
                <span className="flex items-center justify-center w-7 h-7 bg-white rounded-full text-foreground transition-transform group-hover:translate-x-0.5">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Button>
              <Button
                onClick={goToContact}
                variant="outline"
                className="flex items-center gap-2 px-6 py-6 bg-black/5 border-none text-foreground rounded-pill text-base font-semibold hover:-translate-y-1 transition-all duration-300"
              >
                Let's talk
              </Button>
            </div>
            <div className="mt-10 sm:mt-12">
              <div className="text-xs font-bold uppercase tracking-[.2em] text-muted-foreground mb-5">
                Industries we serve
              </div>
              <div className="flex flex-nowrap gap-2.5 max-w-[800px] overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {INDUSTRIES.map((ind) => (
                  <span
                    key={ind.name}
                    className="flex-none flex items-center gap-1.5 px-3.5 py-2 border border-black/10 rounded-pill text-md font-semibold text-foreground/80 whitespace-nowrap"
                  >
                    <ind.icon className="w-3.5 h-3.5 text-accent shrink-0" />
                    {ind.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Floating client cards */}
          <div className="hidden lg:flex absolute right-[clamp(20px,6vw,64px)] bottom-[clamp(64px,9vw,96px)] flex-col items-end gap-3 z-[2]">
            <div className="text-[11px] font-bold uppercase tracking-[.2em] text-muted-foreground">
              Proud to build for
            </div>
            <div className="w-[240px] flex flex-col items-center text-center gap-2.5 p-4 border border-black/10 rounded-2xl bg-white/70 backdrop-blur-md shadow-[0_18px_40px_-26px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
              <img src={CLIENT_CARDS[0].logo} alt={CLIENT_CARDS[0].name} className="h-[40px] object-contain" />
              <div className="text-[13px] font-extrabold leading-tight">{CLIENT_CARDS[0].name}</div>
            </div>
            <div className="flex gap-3">
              {CLIENT_CARDS.slice(1).map((client) => (
                <div
                  key={client.name}
                  className="w-[158px] flex flex-col items-center text-center gap-2.5 p-4 border border-black/10 rounded-2xl bg-white/70 backdrop-blur-md shadow-[0_18px_40px_-26px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
                >
                  <img src={client.logo} alt={client.name} className="h-[40px] object-contain" />
                  <div className="text-[13px] font-extrabold leading-tight">{client.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dot navigation */}
      <div className="absolute right-[clamp(20px,6vw,64px)] bottom-[clamp(38px,6vw,56px)] flex gap-2.5 z-[5]">
        {[0, 1].map((i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            aria-label={i === 0 ? "AI slide" : "CRM slide"}
            className="h-[9px] rounded-pill transition-all duration-300"
            style={{
              width: slide === i ? "26px" : "9px",
              background: slide === i ? "hsl(var(--accent))" : "rgba(0,0,0,.22)",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
