import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Shield, Zap, Users, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI-Driven Development",
    description:
      "Leverage cutting-edge artificial intelligence to accelerate development cycles and create innovative solutions.",
  },
  {
    icon: Shield,
    title: "Professional Testing",
    description:
      "Rigorous testing protocols ensure your software meets the highest standards of quality and reliability.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description:
      "Fast-track your projects from concept to production with our streamlined development process.",
  },
  {
    icon: Users,
    title: "Expert Consultation",
    description:
      "Get guidance from our team of seasoned professionals who understand both AI capabilities and business needs.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium mb-6">
            <Zap className="h-4 w-4 text-primary" />
            Our Expertise
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text-primary">Comprehensive</span>
            <br />
            <span className="text-foreground">AI Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we leverage cutting-edge AI technology combined with professional expertise to deliver exceptional results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 shadow-soft hover:shadow-professional transition-all duration-500 backdrop-blur-sm"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 p-4 bg-gradient-primary rounded-xl shadow-accent group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="shadow-professional text-lg px-8 py-6">
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/5">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
