import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone, Globe, Database, Cpu, Cloud, Bot } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI-Powered Web Development',
    description: 'Custom web applications built with cutting-edge AI technology for superior performance and faster delivery.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications with integrated AI capabilities and intelligent user experiences.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure with AI-driven monitoring, auto-scaling, and predictive maintenance.',
  },
  {
    icon: Database,
    title: 'Data Analytics',
    description: 'Advanced data processing and analytics platforms powered by machine learning and AI insights.',
  },
  {
    icon: Cpu,
    title: 'AI Integration',
    description: 'Seamlessly integrate AI capabilities into your existing systems for enhanced productivity.',
  },
  {
    icon: Globe,
    title: 'Enterprise Solutions',
    description: 'Comprehensive AI transformation for large-scale enterprises with custom development and support.',
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-space-grotesk mb-6 text-foreground">
            Our Services
          </h2>
          
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto leading-relaxed">
            We offer comprehensive AI-powered development services to transform your business digitally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-card border-border hover:border-border/80">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-space-grotesk text-foreground mb-3">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Simple CTA */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-space-grotesk mb-4 text-foreground">
              Ready to get started?
            </h3>
            <p className="text-muted-foreground mb-6 font-inter">
              Let's discuss your project and create a solution that exceeds your expectations.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full">
              Let's Chat
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;