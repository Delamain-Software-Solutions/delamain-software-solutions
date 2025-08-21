import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ComparisonTable from "@/components/ComparisonTable";
import Services from "@/components/Services";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ComparisonTable />
      <Services />
    </div>
  );
};

export default Index;
