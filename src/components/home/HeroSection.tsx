import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
import { ArrowUpRight, ArrowUpRightFromCircle, Landmark, Cloud, HeartPulse, Gamepad2, Building2, GraduationCap, Compass, Workflow, Bot, ShieldCheck } from "lucide-react";

const heroFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  description: z.string().min(10, { message: "Please provide more detail about your project." }),
});

const HeroContactForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof heroFormSchema>>({
    resolver: zodResolver(heroFormSchema),
    defaultValues: { name: "", email: "", description: "" },
  });

  async function onSubmit(values: z.infer<typeof heroFormSchema>) {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "b63690ae-b1c2-43d5-9715-7730fd8c2170",
          ...values,
        }),
      });

      const result = await response.json();
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you as soon as possible.",
        });
        form.reset();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="w-full bg-white rounded-[26px] min-[2200px]:rounded-[32px] p-6 min-[2200px]:p-8 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.25),0_0_0_1px_rgba(0,0,0,0.05)]">
      <h3 className="text-xl min-[2200px]:text-2xl font-hanken font-bold text-foreground">Let's build something</h3>
      <p className="mt-1.5 text-sm min-[2200px]:text-base text-muted-foreground">Tell us what you're building, we'll reply within a day.</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3.5 min-[2200px]:gap-4 mt-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Ada Lovelace" {...field} className="bg-[#fbfbfd]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="ada@example.com" type="email" {...field} className="bg-[#fbfbfd]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What are you building?</FormLabel>
                <FormControl>
                  <Textarea rows={3} placeholder="Tell us a little about your project…" className="bg-[#fbfbfd] resize-none" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="flex items-center justify-center gap-2.5 py-6 bg-foreground hover:bg-foreground/90 transition-colors rounded-pill text-base font-semibold text-white"
          >
            Send message
            <span className="flex items-center justify-center w-[26px] h-[26px] bg-white rounded-full text-foreground">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Button>
        </form>
      </Form>
    </div>
  );
};

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

  const goToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) servicesSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[min(920px,100vh)] min-[2200px]:min-h-[min(1080px,100vh)] overflow-hidden"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <div className="relative grid min-h-[min(920px,100vh)] min-[2200px]:min-h-[min(1080px,100vh)] items-start">
        {/* SLIDE 0 : AI */}
        <div
          className="[grid-area:1/1] relative pt-[clamp(112px,13vw,140px)] min-[2200px]:pt-[170px] px-[clamp(20px,6vw,64px)] min-[2200px]:px-24 pb-[clamp(64px,6vw,84px)] min-[2200px]:pb-28 transition-all duration-700 ease-out"
          style={{
            opacity: slide === 0 ? 1 : 0,
            transform: slide === 0 ? "translateY(0)" : "translateY(18px)",
            pointerEvents: slide === 0 ? "auto" : "none",
          }}
        >
          <div className="w-full max-w-[1180px] min-[2200px]:max-w-[1620px] sm:mx-auto lg:ml-24">
            <div className="text-accent text-[13px] min-[2200px]:text-base font-bold uppercase tracking-[.24em] mb-5 min-[2200px]:mb-7">
              AI Automation Solutions
            </div>
            <h1 className="font-hanken font-extrabold text-[clamp(42px,7vw,92px)] min-[2200px]:text-[132px] leading-[1.0] tracking-[-.035em] max-w-[15ch] min-[2200px]:max-w-[17ch] text-foreground">
              Reimagine your business with AI<span className="text-accent">.</span>
            </h1>
            <p className="max-w-[600px] min-[2200px]:max-w-[780px] mt-6 min-[2200px]:mt-9 text-[clamp(17px,2.1vw,22px)] min-[2200px]:text-[28px] min-[2200px]:leading-relaxed text-muted-foreground">
              We help teams integrate AI into their daily workflows. Automating the busywork and building intelligent tools that learn, adapt and scale.
            </p>
            <div className="flex flex-wrap items-center gap-3.5 min-[2200px]:gap-5 mt-8 min-[2200px]:mt-12">
              <Button
                onClick={goToServices}
                className="group flex items-center gap-2.5 min-[2200px]:gap-3.5 pl-6 pr-4 py-6 min-[2200px]:pl-9 min-[2200px]:pr-6 min-[2200px]:py-8 bg-foreground text-white rounded-pill text-base min-[2200px]:text-xl font-semibold hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                Explore AI services
                <span className="flex items-center justify-center w-7 h-7 min-[2200px]:w-9 min-[2200px]:h-9 bg-white rounded-full text-foreground transition-transform group-hover:translate-x-0.5">
                  <ArrowUpRight className="w-4 h-4 min-[2200px]:w-5 min-[2200px]:h-5" />
                </span>
              </Button>
              <Button
                onClick={() => navigate("/booking")}
                variant="outline"
                className="flex items-center gap-2 px-6 py-6 min-[2200px]:px-9 min-[2200px]:py-8 bg-black/5 border-none text-foreground rounded-pill text-base min-[2200px]:text-xl font-semibold hover:-translate-y-1 transition-all duration-300"
              >
                Let's talk
              </Button>
              <a
                href="https://www.upwork.com/agencies/1959629402932155222/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground text-[15px] min-[2200px]:text-lg font-semibold"
              >
                <span className="text-[#ffb400] tracking-wider">★</span>
                5.0 &middot; Top Rated on Upwork
                <ArrowUpRightFromCircle className="w-4 h-4 min-[2200px]:w-5 min-[2200px]:h-5 text-muted-foreground" />
              </a>
            </div>
            <div className="mt-10 sm:mt-14 min-[2200px]:mt-20">
              <div className="text-xs min-[2200px]:text-sm font-bold uppercase tracking-[.2em] text-muted-foreground mb-4 min-[2200px]:mb-6">
                Our AI services
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 min-[2200px]:gap-5 max-w-[980px] min-[2200px]:max-w-[1360px]">
                {AI_CARDS.map((card) => (
                  <div
                    key={card.title}
                    className="p-5 min-[2200px]:p-7 border border-black/10 rounded-2xl min-[2200px]:rounded-3xl bg-white/60 backdrop-blur-md shadow-[0_18px_40px_-24px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
                  >
                    <div className="w-8 h-8 min-[2200px]:w-11 min-[2200px]:h-11 rounded-[10px] min-[2200px]:rounded-xl bg-accent flex items-center justify-center mb-4 min-[2200px]:mb-5">
                      <card.icon className="w-4 h-4 min-[2200px]:w-5 min-[2200px]:h-5 text-white" />
                    </div>
                    <div className="text-[15px] sm:text-base min-[2200px]:text-xl font-extrabold leading-tight">{card.title}</div>
                    <div className="mt-1.5 min-[2200px]:mt-2 text-[13px] min-[2200px]:text-base text-muted-foreground leading-snug">{card.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating contact card
          <div className="hidden min-[2200px]:block absolute right-24 bottom-32 w-[400px] z-[2]">
            <HeroContactForm />
          </div> */}
        </div>

        {/* SLIDE 1 : CRM */}
        <div
          className="[grid-area:1/1] relative pt-[clamp(112px,13vw,140px)] min-[2200px]:pt-[170px] px-[clamp(20px,6vw,64px)] min-[2200px]:px-24 pb-[clamp(64px,6vw,84px)] min-[2200px]:pb-28 transition-all duration-700 ease-out"
          style={{
            opacity: slide === 1 ? 1 : 0,
            transform: slide === 1 ? "translateY(0)" : "translateY(18px)",
            pointerEvents: slide === 1 ? "auto" : "none",
          }}
        >
          <div className="w-full max-w-[1180px] min-[2200px]:max-w-[1620px] sm:mx-auto lg:ml-24">
            <div className="text-accent text-[13px] min-[2200px]:text-base font-bold uppercase tracking-[.24em] mb-5 min-[2200px]:mb-7">
              Custom software
            </div>
            <h1 className="font-hanken font-extrabold text-[clamp(36px,5.4vw,74px)] min-[2200px]:text-[108px] leading-[1.03] tracking-[-.035em] max-w-[17ch] min-[2200px]:max-w-[19ch] text-foreground">
              CRMs &amp; internal tools, built around how you work<span className="text-accent">.</span>
            </h1>
            <p className="max-w-[560px] min-[2200px]:max-w-[740px] mt-6 min-[2200px]:mt-9 text-[clamp(17px,2.1vw,22px)] min-[2200px]:text-[28px] min-[2200px]:leading-relaxed text-muted-foreground">
              From dispatch and inventory to sales and support, we build the internal software that runs the business. Customized around your team and business processes.
            </p>
            <div className="flex flex-wrap gap-3.5 min-[2200px]:gap-5 mt-8 min-[2200px]:mt-12">
              <Button
                onClick={() => navigate("/work")}
                className="group flex items-center gap-2.5 min-[2200px]:gap-3.5 pl-6 pr-4 py-6 min-[2200px]:pl-9 min-[2200px]:pr-6 min-[2200px]:py-8 bg-foreground text-white rounded-pill text-base min-[2200px]:text-xl font-semibold hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                See our work
                <span className="flex items-center justify-center w-7 h-7 min-[2200px]:w-9 min-[2200px]:h-9 bg-white rounded-full text-foreground transition-transform group-hover:translate-x-0.5">
                  <ArrowUpRight className="w-4 h-4 min-[2200px]:w-5 min-[2200px]:h-5" />
                </span>
              </Button>
              <Button
                onClick={() => navigate("/booking")}
                variant="outline"
                className="flex items-center gap-2 px-6 py-6 min-[2200px]:px-9 min-[2200px]:py-8 bg-black/5 border-none text-foreground rounded-pill text-base min-[2200px]:text-xl font-semibold hover:-translate-y-1 transition-all duration-300"
              >
                Let's talk
              </Button>
            </div>
            <div className="mt-10 sm:mt-12 min-[2200px]:mt-20">
              <div className="text-xs min-[2200px]:text-sm font-bold uppercase tracking-[.2em] text-muted-foreground mb-5 min-[2200px]:mb-6">
                Industries we serve
              </div>
              <div className="flex flex-nowrap gap-2.5 min-[2200px]:gap-3.5 max-w-[800px] min-[2200px]:max-w-[1100px] overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {INDUSTRIES.map((ind) => (
                  <span
                    key={ind.name}
                    className="flex-none flex items-center gap-1.5 min-[2200px]:gap-2 px-3.5 min-[2200px]:px-5 py-2 min-[2200px]:py-3 border border-black/10 rounded-pill text-md min-[2200px]:text-lg font-semibold text-foreground/80 whitespace-nowrap"
                  >
                    <ind.icon className="w-3.5 h-3.5 min-[2200px]:w-4 min-[2200px]:h-4 text-accent shrink-0" />
                    {ind.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Floating client cards */}
          <div className="hidden lg:flex absolute right-[clamp(20px,6vw,64px)] min-[2200px]:right-24 bottom-[clamp(64px,9vw,96px)] min-[2200px]:bottom-32 flex-col items-end gap-3 min-[2200px]:gap-5 z-[2]">
            <div className="text-[11px] min-[2200px]:text-base font-bold uppercase tracking-[.2em] text-muted-foreground">
              Proud to build for
            </div>
            <div className="w-[240px] min-[2200px]:w-[380px] flex flex-col items-center text-center gap-2.5 min-[2200px]:gap-4 p-4 min-[2200px]:p-8 border border-black/10 rounded-2xl min-[2200px]:rounded-[28px] bg-white/70 backdrop-blur-md shadow-[0_18px_40px_-26px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
              <img src={CLIENT_CARDS[0].logo} alt={CLIENT_CARDS[0].name} className="h-[40px] min-[2200px]:h-[64px] object-contain" />
              <div className="text-[13px] min-[2200px]:text-lg font-extrabold leading-tight">{CLIENT_CARDS[0].name}</div>
            </div>
            <div className="flex gap-3 min-[2200px]:gap-5">
              {CLIENT_CARDS.slice(1).map((client) => (
                <div
                  key={client.name}
                  className="w-[158px] min-[2200px]:w-[250px] flex flex-col items-center text-center gap-2.5 min-[2200px]:gap-4 p-4 min-[2200px]:p-8 border border-black/10 rounded-2xl min-[2200px]:rounded-[28px] bg-white/70 backdrop-blur-md shadow-[0_18px_40px_-26px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
                >
                  <img src={client.logo} alt={client.name} className="h-[40px] min-[2200px]:h-[64px] object-contain" />
                  <div className="text-[13px] min-[2200px]:text-lg font-extrabold leading-tight">{client.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dot navigation */}
      <div className="absolute right-[clamp(20px,6vw,64px)] min-[2200px]:right-24 bottom-[clamp(38px,6vw,56px)] min-[2200px]:bottom-16 flex gap-2.5 min-[2200px]:gap-3 z-[5]">
        {[0, 1].map((i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            aria-label={i === 0 ? "AI slide" : "CRM slide"}
            className="h-[9px] min-[2200px]:h-[11px] rounded-pill transition-all duration-300"
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
