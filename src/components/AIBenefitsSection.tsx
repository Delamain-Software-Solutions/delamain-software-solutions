import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Shield, Clock, TrendingUp, Brain, Code } from 'lucide-react';

const benefits = [
  {
    icon: Brain,
    title: 'Intelligent Automation',
    description: 'AI-powered code generation and optimization that reduces development time by up to 70% while maintaining enterprise-grade quality standards.'
  },
  {
    icon: Zap,
    title: 'Rapid Development',
    description: 'Accelerated development cycles with AI-assisted coding, automated testing, and intelligent deployment pipelines for faster time-to-market.'
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'AI-driven security analysis identifies vulnerabilities in real-time, ensuring your applications are protected against emerging threats.'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Build applications that grow with your business using AI-optimized architecture and predictive scaling technologies.'
  },
  {
    icon: Code,
    title: 'Smart Code Quality',
    description: 'Advanced code review and optimization algorithms ensure clean, maintainable, and performance-optimized applications.'
  },
  {
    icon: Clock,
    title: '24/7 Monitoring',
    description: 'Intelligent monitoring systems that predict and prevent issues before they impact your users, ensuring maximum uptime.'
  }
];

const AIBenefitsSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-muted/30 to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            🤖 AI-Driven Development
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold font-space-grotesk mb-6 text-primary">
            How AI Transforms Your Business
          </h2>
          
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence to revolutionize your software development process. 
            Our AI-driven approach delivers superior results with unprecedented speed and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-space-grotesk text-primary">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Stats Section */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">70%</div>
              <div className="text-sm text-muted-foreground">Faster Development</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">95%</div>
              <div className="text-sm text-muted-foreground">Bug Reduction</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">60%</div>
              <div className="text-sm text-muted-foreground">Cost Savings</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBenefitsSection;