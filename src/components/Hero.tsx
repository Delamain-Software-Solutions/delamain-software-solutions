import { Button } from "@/components/ui/button";
import { ArrowRight, Code, TestTube } from "lucide-react";
import aiHeroImage from "@/assets/ai-hero-image.jpg";

const Hero = () => {
  return (
    <section className="bg-gradient-hero py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="text-center lg:text-left">
            {/* Main headline */}
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-foreground block mb-2">Innovative and Reliable Tech Solutions for Your Business</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl lg:text-2xl gradient-primary mb-8 font-semibold">
              Developed by AI, Tested by Professionals
            </p>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Experience the future of software development where artificial
              intelligence meets human expertise. We deliver cutting-edge
              solutions that are both innovative and reliable.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button size="lg" className="shadow-professional text-lg px-8 py-6">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Our Work
              </Button>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-professional">
              <img 
                src={aiHeroImage} 
                alt="AI-powered coding interface showcasing innovative technology solutions"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
            </div>
            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
