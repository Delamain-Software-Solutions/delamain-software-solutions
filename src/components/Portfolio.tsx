import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Healthcare Dashboard",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      title: "Restaurant Management",
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      title: "Social Media Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      title: "Learning Management System",
      category: "Educational Tech",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="text-sm">Portfolio</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Our <span className="text-primary"> Amazing </span>Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a look at our best projects we have done in the recent years.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="space-y-2">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="relative mt-16">
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-ping"></div>
          <div className="absolute top-8 right-1/3 w-1 h-1 bg-accent/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute -top-4 right-1/4 w-3 h-3 bg-secondary/20 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;