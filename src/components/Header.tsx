import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Circle } from 'lucide-react';
import { Link } from 'react-router-dom';
// Removed next-themes useTheme import to avoid SSR-only hook in SPA

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-card/95 backdrop-blur-md border-b border-border shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center ms-5">
              <Link to="/">
                <img src="/Delamain-Logo.png" alt="Delamain logo" height={200} width={200}/>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              About Us
            </a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Services
            </a>
            <a href="/work" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Our Work
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Contact Us
            </a>
          </div>

          {/* Action Buttons & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-sm"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Quote
            </Button>
            <Button 
              size="sm" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm"
              onClick={() => window.location.href = '/booking'}
            >
              Book Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                About Us
              </a>
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Services
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Projects
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;