import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="glass-effect sticky top-0 z-50 border-b border-border/30">
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3">
            <img src="/src/assets/Delamain-Logo.png" alt="Delamain Logo" className="h-8 w-auto" />
            <div className="hidden sm:block h-8 w-px bg-border/50"></div>
            <span className="hidden sm:block text-sm font-medium text-muted-foreground">AI Solutions</span>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
          </nav>

          {/* CTA Button */}
          <Button variant="default" className="hidden md:block shadow-professional hover:shadow-soft transition-all duration-300">
            Get Started
          </Button>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="lg:hidden">
            <span className="sr-only">Open menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;