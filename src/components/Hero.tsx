import { Button } from "@/components/ui/button";
import { ArrowRight, Code, TestTube, Zap, Database, Users, TrendingUp } from "lucide-react";
import aiHeroDark from "@/assets/ai-hero-dark.jpg";

const Hero = () => {
  return (
    <section className="bg-gradient-hero py-20 lg:py-32 relative overflow-hidden min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 shadow-glow">
              <Zap className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">AI-Powered Development</span>
            </div>

            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block gradient-primary">Revolutionary</span>
                <span className="block text-foreground">Tech Solutions</span>
                <span className="block text-muted-foreground text-3xl lg:text-4xl font-normal mt-2">for Modern Businesses</span>
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-2xl lg:text-3xl gradient-accent font-semibold">
              Developed by AI, Tested by Professionals
            </p>

            {/* Description */}
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Experience the convergence of artificial intelligence and human expertise. 
              We craft cutting-edge solutions that push boundaries while maintaining 
              enterprise-grade reliability and performance.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8 border-y border-border/30">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold gradient-primary">500+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold gradient-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime Guaranteed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold gradient-primary">24/7</div>
                <div className="text-sm text-muted-foreground">AI Monitoring</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="shadow-glow text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10">
                View Case Studies
                <TrendingUp className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Image & Cards Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Main Hero Image */}
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-glow border border-border/30">
                <img 
                  src={aiHeroDark} 
                  alt="AI-powered coding interface showcasing innovative technology solutions"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 shadow-accent animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">AI Code Generation</div>
                    <div className="text-xs text-muted-foreground">99.2% Accuracy</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 shadow-accent animate-float delay-1000">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <TestTube className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Automated Testing</div>
                    <div className="text-xs text-muted-foreground">Real-time Analysis</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl p-4 hover:shadow-accent transition-all">
                <Database className="w-8 h-8 text-primary mb-2" />
                <div className="font-medium">Smart Data</div>
                <div className="text-xs text-muted-foreground">Intelligent processing</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl p-4 hover:shadow-accent transition-all">
                <Users className="w-8 h-8 text-accent mb-2" />
                <div className="font-medium">Expert Team</div>
                <div className="text-xs text-muted-foreground">Human oversight</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
