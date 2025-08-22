import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Smartphone, Globe, Monitor } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Design & Development',
    description: 'Custom web applications with modern design, seamless functionality, and superior user experience.',
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
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'Go', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
  { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg' },
  { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
  { name: 'Spring', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'Rust', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg' },
  { name: 'Swift', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
  { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
  { name: 'Supabase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
  { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'Vite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-muted/80 to-secondary/90">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-sm mb-4">Our Expertise</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold font-space-grotesk mb-6 text-primary">
            Services <span className="text-foreground">We Offer</span>
          </h2>
          
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto leading-relaxed">
            Every solution we deliver is AI-powered, ensuring faster development, superior quality, and cutting-edge innovation for your business.
          </p>
        </div>

{/* Technology Logos */}
        <div className="mb-16 overflow-hidden relative">
          <div className="flex animate-scroll-left">
            {[...technologies, ...technologies].map((tech, index) => (
              <div key={index} className="flex items-center justify-center p-4 mx-4 grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0 min-w-[80px]">
                <img 
                  src={tech.logo} 
                  alt={tech.name}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
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