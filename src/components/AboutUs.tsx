import { Badge } from "@/components/ui/badge";
import teamCollaboration from "@/assets/team-collaboration.jpg";

const AboutUs = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-sm">About Us</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Leading <span className="text-primary">AI-Powered</span> Software Development Agency
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are a premier software development agency pioneering the future with AI-powered development solutions. Our expertise spans across web development, mobile applications, and cutting-edge AI integration. <span className="font-semibold">AI-powered development is the future</span>, and we're leading the transformation!
              </p>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Comprehensive Software Testing</h3>
                <p className="text-muted-foreground">
                  We specialize in end-to-end software testing, including unit, integration, system, and regression testing, ensuring your applications are secure, stable, and production-ready.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Maintenance & Efficiency Solutions</h3>
                <p className="text-muted-foreground">
                  We provide ongoing maintenance and performance optimization services, focusing on time efficiency, minimal downtime, and scalable solutions tailored to your business needs.
                </p>
              </div>
            </div>

          </div>

          <div className="relative">
            {/* Team collaboration image */}
            <div className="relative w-full h-96 rounded-3xl overflow-hidden">
              <img 
                src={teamCollaboration}
                alt="Professional software development team working together" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;