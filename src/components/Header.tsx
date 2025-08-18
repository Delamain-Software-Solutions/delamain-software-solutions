import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-card/80 backdrop-blur-sm border-b border-border shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <h1 className="text-3xl font-bold">
              <span className="text-primary">Delamain</span>{" "}
              <span className="text-muted-foreground font-normal">Software Solutions</span>
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <Button variant="default" className="hidden md:block shadow-professional">
            Get Started
          </Button>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden">
            ☰
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;