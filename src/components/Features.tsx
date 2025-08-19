import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Palette, 
  Smartphone, 
  ShieldCheck, 
  Globe, 
  GitBranch, 
  Layers 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Palette,
      title: "Beautiful Design System",
      description: "Consistent, customizable components with dark mode support and smooth animations.",
      badge: "UI/UX"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring your app looks perfect on any device.",
      badge: "Mobile"
    },
    {
      icon: ShieldCheck,
      title: "Type Safety",
      description: "Full TypeScript support with strict type checking for robust applications.",
      badge: "TypeScript"
    },
    {
      icon: Globe,
      title: "SEO Optimized",
      description: "Built-in SEO best practices with meta tags and semantic HTML structure.",
      badge: "Performance"
    },
    {
      icon: GitBranch,
      title: "Version Control Ready",
      description: "Git-friendly structure with proper ignore files and clean commits.",
      badge: "DevOps"
    },
    {
      icon: Layers,
      title: "Component Library",
      description: "Rich set of pre-built components using Radix UI and shadcn/ui.",
      badge: "Components"
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Build Fast
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit with modern development practices baked in from day one.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              variant="glass" 
              className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex justify-center mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;