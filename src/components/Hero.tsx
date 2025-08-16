import { Button } from "@/components/ui/button";
import { ArrowRight, Code, TestTube } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-hero py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main headline */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-metallic block mb-2">Delamain</span>
            <span className="text-foreground">Software Solutions</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Developed by AI, tested by professionals
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the future of software development where artificial intelligence meets human expertise. 
            We deliver cutting-edge solutions that are both innovative and reliable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="shadow-metallic text-lg px-8 py-6">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              View Our Work
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-muted-foreground">
              <Code className="h-6 w-6 text-silver-metallic" />
              <span>AI-Powered Development</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-muted-foreground">
              <TestTube className="h-6 w-6 text-silver-metallic" />
              <span>Professional Testing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;