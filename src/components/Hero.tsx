import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Brain, Zap, TrendingUp } from 'lucide-react';
import heroImage from '@/assets/hero-ai-development.jpg';
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Optimized Abstract Lines Background */}
      <div className="container mx-auto px-6 py-32 text-center relative z-10">
        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto space-y-8 py-32">
          
          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold font-space-grotesk leading-tight text-foreground">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Coded by AI,
            </span>
            <br />
            <span className="text-foreground">Developed by Professionals</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
            Welcome to Delamain Software Solutions - Where cutting-edge AI meets
            <br />
            professional excellence to transform your digital vision into reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="bg-background/60 dark:bg-white/10 backdrop-blur-md border border-border dark:border-white/20 hover:bg-background/80 dark:hover:bg-white/20 text-foreground dark:text-white px-8 py-4 text-lg rounded-full shadow-lg transition-all duration-300">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" className="bg-primary/80 backdrop-blur-md border border-primary/30 hover:bg-primary text-primary-foreground px-8 py-4 text-lg rounded-full shadow-lg transition-all duration-300">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="flex gap-12 mt-20 max-w-7xl mx-auto">
          <div className="group relative flex-1">
            {/* Animated background glow */}
            
            {/* Main card */}
            <div className="relative h-full bg-gradient-to-br from-card/90 to-card/70 dark:from-card/60 dark:to-card/40 backdrop-blur-2xl rounded-2xl p-8 border border-border/30 dark:border-white/10 
                          transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-primary/20 flex flex-col">
              
              {/* Floating icon container */}
              <div className="relative mb-8">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl flex items-center justify-center
                              transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Brain className="h-10 w-10 text-primary transition-all duration-500 group-hover:text-accent" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3 flex-1">
                <h3 className="text-2xl font-bold font-space-grotesk text-foreground 
                             transform transition-all duration-300 group-hover:text-primary">
                  AI-Powered
                </h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  Intelligent development that learns and adapts
                </p>
                
                {/* Animated progress bar */}
                <div className="!mt-6 space-y-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Intelligence</span>
                    <span>95%</span>
                  </div>
                  <div className="h-1 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full w-0 
                                  group-hover:w-[95%] transition-all duration-1000 ease-out"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative flex-1">
            {/* Animated background glow */}
            
            {/* Main card */}
            <div className="relative h-full bg-gradient-to-br from-card/90 to-card/70 dark:from-card/60 dark:to-card/40 backdrop-blur-2xl rounded-2xl p-8 border border-border/30 dark:border-white/10 
                          transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-accent/20 flex flex-col">
              
              {/* Floating icon container */}
              <div className="relative mb-8">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl flex items-center justify-center
                              transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                  <Zap className="h-10 w-10 text-primary transition-all duration-500 group-hover:text-accent" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3 flex-1">
                <h3 className="text-2xl font-bold font-space-grotesk text-foreground 
                             transform transition-all duration-300 group-hover:text-primary">
                  Fast Delivery
                </h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  Agile workflows ensuring faster releases
                </p>
                
                {/* Animated counter */}
                <div className="!mt-6 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Monthly Clients</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className={`w-3 h-3 rounded-full bg-accent/30 transition-all duration-300 
                                             group-hover:bg-accent group-hover:scale-125`}
                           style={{transitionDelay: `${i * 100}ms`}}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative flex-1">
            
            {/* Main card */}
            <div className="relative h-full bg-gradient-to-br from-card/90 to-card/70 dark:from-card/60 dark:to-card/40 backdrop-blur-2xl rounded-2xl p-8 border border-border/30 dark:border-white/10 
                          transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-primary/20 flex flex-col">
              
              {/* Floating icon container */}
              <div className="relative mb-8">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl flex items-center justify-center
                              transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <TrendingUp className="h-10 w-10 text-primary transition-all duration-500 group-hover:text-accent" />
                </div>
                
              </div>

              {/* Content */}
              <div className="space-y-3 flex-1">
                <h3 className="text-2xl font-bold font-space-grotesk text-foreground 
                             transform transition-all duration-300 group-hover:text-primary">
                  Proven Growth
                </h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  Track measurable results in just weeks
                </p>
                
                {/* Animated chart */}
                <div className="mt-6 space-y-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Success Rate</span>
                    <span>40%+</span>
                  </div>
                  <div className="flex items-end space-x-1 h-12">
                    {[20, 35, 45, 50, 65].map((height, i) => (
                      <div key={i} className="flex-1 bg-accent/30 rounded-t 
                                           transform transition-all duration-700 group-hover:bg-accent"
                           style={{
                             height: `${height}%`,
                             transitionDelay: `${i * 100}ms`
                           }}></div>
                    ))}
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

export default HeroSection;