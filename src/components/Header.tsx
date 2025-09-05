import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Circle } from 'lucide-react';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

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
              <img src="/Delamain-Logo.png" alt="Logo" height={200} width={200}/>
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
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Contact Us
            </a>
          </div>

          {/* Action Buttons & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="text-sm">
              Get Quote
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm">
              Book Call
            </Button>
            {/* <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span className="sr-only">Toggle theme</span>
              <span
                className={`${
                  theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-foreground transition`}
              /> */}
            </button>
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
              {/* <div className="flex items-center justify-between pt-4">
                <span className="text-sm text-muted-foreground">Theme</span>
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors"
                >
                  <span
                    className={`${
                      theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full bg-foreground transition`}
                  />
                </button>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;