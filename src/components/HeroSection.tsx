import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Brain, Zap, TrendingUp } from 'lucide-react';
import heroTechCity from '@/assets/hero-tech-city.jpg';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroTechCity})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85"></div>
      <div className="container mx-auto px-6 py-40 text-center relative z-10">
        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold font-space-grotesk leading-tight text-primary">
            Developed by AI
            <br />
            <span className="text-foreground">Tested by Professionals</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
            Welcome to Delamain Software Solutions - Where cutting-edge AI meets
            <br />
            professional excellence to transform your digital vision into reality.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-full">
              Let's Chat
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-border hover:bg-card/90 hover:shadow-lg hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Brain className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold font-space-grotesk mb-4 text-primary">
              AI-Powered Development
            </h3>
            <p className="text-muted-foreground font-inter leading-relaxed">
              Every Product Strategically Designed To Turn Website Visitors Into Paying Customers, Rather Than Just 
              Looks, But On Improving Your KPIs.
            </p>
          </div>

          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-border hover:bg-card/90 hover:shadow-lg hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold font-space-grotesk mb-4 text-primary">
              Robust Testing
            </h3>
            <p className="text-muted-foreground font-inter leading-relaxed">
              We Only Take On 3 New High-Value Clients Per Month 
              To Ensure They Receive Our Undivided Attention & Design
              Services.
            </p>
          </div>

          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-border hover:bg-card/90 hover:shadow-lg hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold font-space-grotesk mb-4 text-primary">
              Long Term Maintenance
            </h3>
            <p className="text-muted-foreground font-inter leading-relaxed">
              Our Clients See An Average 40% Increase In
              Conversions Within 90 Days, Compared To Their
              Previous After Working With Us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;