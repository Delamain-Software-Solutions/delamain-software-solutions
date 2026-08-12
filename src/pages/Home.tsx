import HeroSection from "@/components/home/HeroSection";
import Services from "@/components/home/Services";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Comparison from "@/components/home/Comparison";
import Contact from "@/components/home/Contact";
import { usePageMeta } from "@/hooks/usePageMeta";

const Home = () => {
  usePageMeta({
    title: "AI-Driven Software Development Agency",
    description:
      "Delamain builds AI-driven web, mobile and cloud products for businesses — full-stack engineering, AI/ML and design under one roof.",
  });

  return (
    <div className="min-h-screen">
      <HeroSection />
      <Services />
      <ServicesShowcase />
      <Comparison />
      <FeaturedProjects />
      <Contact />
    </div>
  );
};

export default Home;
