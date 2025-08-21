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
        <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
          <div className="bg-card/60 dark:bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-border dark:border-white/20 hover:scale-105 transition-all duration-300 group">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:from-primary/30 group-hover:to-cyan-500/30 transition-all duration-300">
              <Brain className="h-10 w-10 text-primary dark:text-cyan-400" />
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold font-space-grotesk text-primary dark:text-cyan-400 mb-2">
                AI-Powered
              </div>
              <div className="text-sm text-muted-foreground dark:text-white/70 uppercase tracking-wide font-medium">
                Intelligent Design
              </div>
            </div>
          </div>

          <div className="bg-card/60 dark:bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-border dark:border-white/20 hover:scale-105 transition-all duration-300 group">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-500/20 to-primary/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:from-teal-500/30 group-hover:to-primary/30 transition-all duration-300">
              <Zap className="h-10 w-10 text-teal-600 dark:text-teal-400" />
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold font-space-grotesk text-teal-600 dark:text-teal-400 mb-2">
                3 Clients/Month
              </div>
              <div className="text-sm text-muted-foreground dark:text-white/70 uppercase tracking-wide font-medium">
                Premium Focus
              </div>
            </div>
          </div>

          <div className="bg-card/60 dark:bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-border dark:border-white/20 hover:scale-105 transition-all duration-300 group">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:from-emerald-500/30 group-hover:to-teal-500/30 transition-all duration-300">
              <TrendingUp className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold font-space-grotesk text-emerald-600 dark:text-emerald-400 mb-2">
                +40% Growth
              </div>
              <div className="text-sm text-muted-foreground dark:text-white/70 uppercase tracking-wide font-medium">
                Within 90 Days
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default HeroSection;