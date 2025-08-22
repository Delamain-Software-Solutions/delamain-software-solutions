import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone, Globe, Monitor } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Design and Development',
    description: 'AI-powered custom web applications with modern design, seamless functionality, and superior user experience.',
  },
  {
    icon: Monitor,
    title: 'Desktop Applications',
    description: 'Robust desktop solutions built with AI assistance for Windows, macOS, and Linux platforms with enhanced performance.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications powered by AI for intelligent user experiences and faster development.',
  }
];

const technologies = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-space-grotesk mb-6 text-foreground">
            Our <span className="text-primary"> Services</span>
          </h2>
          
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto leading-relaxed">
            Every solution we deliver is AI-powered, ensuring faster development, superior quality, and cutting-edge innovation for your business.
          </p>
        </div>

{/* Technology Logos */}
        <div className="text-center">
          <div className="grid grid-cols-5 md:grid-cols-10 gap-6 max-w-4xl mx-auto items-center">
            {technologies.map((tech, index) => (
              <div key={index} className="flex items-center justify-center p-2 grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src={tech.logo} 
                  alt={tech.name}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                  title={tech.name}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto my-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-card border-border hover:border-border/80 text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-space-grotesk text-foreground mb-3">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {service.description}
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        

        {/* Simple CTA
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
        </div> */}
      </div>
    </section>
  );
};

export default ServicesSection;