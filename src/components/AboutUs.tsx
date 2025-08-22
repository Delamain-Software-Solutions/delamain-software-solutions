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
              <h2 className="text-4xl lg:text-5xl font-bold text-primary">
                Leading AI-Powered Software Development Agency
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are a premier software development agency pioneering the future with AI-powered development solutions. Our expertise spans across web development, mobile applications, and cutting-edge AI integration. <span className="text-primary font-semibold">AI-powered development is the future</span>, and we're leading the transformation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Global Presence</h3>
                  <p className="text-muted-foreground">Established presence on major platforms including Fiverr, Upwork, and LinkedIn with hundreds of satisfied clients worldwide.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">AI-Powered Expert Team</h3>
                  <p className="text-muted-foreground">Our team of skilled AI developers, machine learning engineers, and technology specialists bring years of experience in both traditional and AI-powered development methodologies.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Quality Assured</h3>
                  <p className="text-muted-foreground">We follow industry best practices and maintain rigorous quality standards to ensure exceptional results for every project.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">24/7 Support</h3>
                  <p className="text-muted-foreground">Comprehensive support and maintenance services to keep your applications running smoothly around the clock.</p>
                </div>
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