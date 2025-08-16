import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Shield, Zap, Users } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI-Driven Development",
    description: "Leverage cutting-edge artificial intelligence to accelerate development cycles and create innovative solutions.",
  },
  {
    icon: Shield,
    title: "Professional Testing",
    description: "Rigorous testing protocols ensure your software meets the highest standards of quality and reliability.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Fast-track your projects from concept to production with our streamlined development process.",
  },
  {
    icon: Users,
    title: "Expert Consultation",
    description: "Get guidance from our team of seasoned professionals who understand both AI capabilities and business needs.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-metallic">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Combining artificial intelligence with human expertise to deliver exceptional software solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="shadow-soft hover:shadow-metallic transition-all duration-300 border-border/50">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-metallic rounded-lg w-fit">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;