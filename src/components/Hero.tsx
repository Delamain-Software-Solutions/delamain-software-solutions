import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Brain, Zap, TrendingUp } from 'lucide-react';
import heroImage from '@/assets/hero-ai-development.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Flowing Abstract Artwork */}
      <div className="absolute inset-0">
        {/* Light mode - whitish background with flowing artwork */}
        <div className="absolute inset-0 dark:hidden">
          {/* Flowing abstract shapes */}
          <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-primary/20 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite] transform rotate-45"></div>
          <div className="absolute top-1/3 -right-1/4 w-80 h-80 bg-gradient-to-br from-accent/20 to-red-200/30 rounded-full blur-2xl animate-[float_6s_ease-in-out_infinite_2s] transform -rotate-12"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-blue-300/20 to-navy-200/30 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_4s] transform rotate-12"></div>
          
          {/* Flowing lines */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
              <path d="M-100,200 Q300,100 500,300 Q700,500 1100,400" stroke="url(#lightGradient1)" strokeWidth="3" opacity="0.6" className="animate-[gradient-x_20s_ease_infinite]"/>
              <path d="M-100,600 Q200,400 400,600 Q600,800 1000,700" stroke="url(#lightGradient2)" strokeWidth="2" opacity="0.4" className="animate-[gradient-x_15s_ease_infinite_5s]"/>
              <defs>
                <linearGradient id="lightGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="lightGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="hsl(220 80% 60%)" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Dark mode - full abstract background */}
        <div className="absolute inset-0 hidden dark:block bg-gradient-to-br from-slate-900 via-blue-900 to-navy-900">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-blue-600/30 to-accent/20 animate-gradient-x"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/30 to-primary/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent/30 to-red-600/30 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-navy-600/20 to-blue-500/20 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
          
          {/* Neural network lines */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
              <path d="M100,400 Q300,200 500,400 T900,400" stroke="url(#gradient1)" strokeWidth="2" opacity="0.6"/>
              <path d="M200,500 Q400,300 600,500 T1000,500" stroke="url(#gradient2)" strokeWidth="1.5" opacity="0.4"/>
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="50%" stopColor="hsl(var(--accent))" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--accent))" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-32 text-center relative z-10">
        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto space-y-8 py-32">
          
          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold font-space-grotesk leading-tight text-foreground">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Developed by AI,
            </span>
            <br />
            <span className="text-foreground">Tested by Professionals</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto leading-relaxed">
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
        <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-6xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-card/80 dark:bg-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/50 dark:border-white/10 hover:border-primary/30 transition-all duration-300">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center">
                    <Brain className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-xs text-primary-foreground font-bold">AI</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-space-grotesk text-foreground mb-1">Smart Development</h3>
                  <p className="text-sm text-muted-foreground">Intelligent code generation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-primary rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-card/80 dark:bg-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/50 dark:border-white/10 hover:border-accent/30 transition-all duration-300">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl flex items-center justify-center">
                    <Zap className="h-8 w-8 text-accent" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-xs text-accent-foreground font-bold">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-space-grotesk text-foreground mb-1">Exclusive Focus</h3>
                  <p className="text-sm text-muted-foreground">Premium clients only</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-card/80 dark:bg-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/50 dark:border-white/10 hover:border-primary/30 transition-all duration-300">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <span className="text-xs text-primary-foreground font-bold">+40%</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-space-grotesk text-foreground mb-1">Proven Results</h3>
                  <p className="text-sm text-muted-foreground">Growth in 90 days</p>
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