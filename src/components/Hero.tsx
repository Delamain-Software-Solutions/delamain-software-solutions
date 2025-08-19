import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-modern.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI Technology Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-sm font-medium">
              <Sparkles className="h-4 w-4 text-primary" />
              AI-Powered Development
            </div>

            {/* Main headline */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-text-primary">Innovative</span>
              <br />
              <span className="text-foreground">Tech Solutions</span>
              <br />
              <span className="text-secondary">for Business</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Experience the future of software development where artificial intelligence meets human expertise. We deliver cutting-edge solutions that drive business growth.
            </p>

            {/* Features */}
            <div className="space-y-3">
              {[
                "AI-Driven Development Process",
                "Professional Testing & Quality Assurance", 
                "Rapid Deployment & Scalability"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="shadow-professional text-lg px-8 py-6 group">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/5">
                View Case Studies
              </Button>
            </div>
          </div>

          {/* Visual Column */}
          <div className="hidden lg:block relative">
            <div className="glass-effect rounded-2xl p-8 shadow-accent">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="h-3 w-3 rounded-full bg-destructive"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-primary"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-primary/20 rounded animate-pulse"></div>
                  <div className="h-4 bg-primary/30 rounded w-3/4 animate-pulse delay-100"></div>
                  <div className="h-4 bg-primary/20 rounded w-1/2 animate-pulse delay-200"></div>
                  <div className="h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-semibold">
                    AI Processing...
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-16 bg-accent/30 rounded-lg"></div>
                    <div className="h-16 bg-accent/30 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
