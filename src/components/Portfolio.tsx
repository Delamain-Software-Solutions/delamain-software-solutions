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
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-background via-muted/50 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(`
          <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" stroke-width="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        `)})`,
      }} />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-6 ">
          <Badge variant="outline" className="text-sm font-medium border-primary/20 bg-primary/5">Portfolio</Badge>
          <h2 className="text-5xl  lg:text-6xl font-bold text-foreground leading-tight font-space-grotesk">
            Featured <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our portfolio of cutting-edge solutions that showcase innovation, creativity, and technical excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-card/80 via-card to-card/60 backdrop-blur-sm border border-primary/10 shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-primary/20 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <div className="space-y-4">
                  <Badge variant="secondary" className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary border-primary/20">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    Crafted with precision and powered by cutting-edge technology
                  </p>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
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