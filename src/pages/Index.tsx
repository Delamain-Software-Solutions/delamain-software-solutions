import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import ComparisonTable from "@/components/ComparisonTable";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutUs />
      <Services />
      <div className="bg-secondary/30">
        <Portfolio />
      </div>
      <ComparisonTable />
    </div>
  );
};

export default Index;
