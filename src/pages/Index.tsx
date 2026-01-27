import Header from "@/components/Header";
import HeroSection from "@/components/home/HeroSection";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/home/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import Comparison from "@/components/Comparison";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
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

export default Index;
