import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import ComparisonTable from "@/components/ComparisonTable";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <Services />
      <ComparisonTable />
      <div className="bg-secondary/10">
        <FeaturedProjects />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
