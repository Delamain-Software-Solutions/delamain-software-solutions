import HeroSection from "@/components/home/HeroSection";
import Services from "@/components/home/Services";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Comparison from "@/components/home/Comparison";
import Contact from "@/components/home/Contact";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Services />
      <Comparison />
      <FeaturedProjects />
      <Contact />
    </div>
  );
};

export default Home;
