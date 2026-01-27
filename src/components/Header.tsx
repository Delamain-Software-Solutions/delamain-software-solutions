import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle hash navigation on location change
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
    else{
        window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location]);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path === '/work' && location.pathname === '/work') return true;
    if (path.includes('#') && location.hash === path.split('#')[1]) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-[0_4px_4px_rgba(0,0,0,0.1)]">
      <div className=" mx-auto px-5 sm:px-10 py-2.5 flex items-center justify-between gap-2.5">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="w-[86px] h-[29px]" />
        </div>

        {/* Desktop Navigation - Centered Pill */}
        <div className="hidden md:flex items-center justify-center bg-slate-50 rounded-full p-1 gap-2.5">
          <Link 
            to="/" 
            className={`px-1.5 py-px rounded-xl text-center font-quicksand font-normal text-base transition-colors ${
              isActive('/') 
                ? 'bg-[#EDF4FF] text-[#3B82F6]' 
                : 'text-black hover:bg-gray-100'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/#home" 
            className={`px-1.5 py-px rounded-xl text-center font-quicksand font-normal text-base transition-colors ${
              isActive('/#home') 
                ? 'bg-[#EDF4FF] text-[#3B82F6]' 
                : 'text-black hover:bg-gray-100'
            }`}
          >
            About Us
          </Link>
          <Link 
            to="/#services" 
            className={`px-1.5 py-px rounded-xl text-center font-quicksand font-normal text-base transition-colors ${
              isActive('/#services') 
                ? 'bg-[#EDF4FF] text-[#3B82F6]' 
                : 'text-black hover:bg-gray-100'
            }`}
          >
            Services
          </Link>
          <Link 
            to="/work" 
            className={`px-1.5 py-px rounded-xl text-center font-quicksand font-normal text-base transition-colors ${
              isActive('/work') 
                ? 'bg-[#EDF4FF] text-[#3B82F6]' 
                : 'text-black hover:bg-gray-100'
            }`}
          >
            Our Work
          </Link>
          <Link 
            to="/#contact" 
            className={`px-1.5 py-px rounded-xl text-center font-quicksand font-normal text-base transition-colors ${
              isActive('/#contact') 
                ? 'bg-[#EDF4FF] text-[#3B82F6]' 
                : 'text-black hover:bg-gray-100'
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Let's Talk Button */}
        <div className="hidden md:flex">
          <button 
            onClick={() => window.location.href = '/booking'}
            className="flex items-center gap-10 pl-3 pr-0.5 py-0.5 bg-[#0F172A] rounded-full shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:bg-[#1e293b] transition-colors"
          >
            <span className="font-open font-medium text-base text-white leading-tight">
              Let's Talk
            </span>
            <div className="flex items-center justify-center m-1.5 w-8 h-8 bg-white rounded-full">
              <img src='/arrow.svg' width={10}/>
            </div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-5 py-4 bg-white border-t border-gray-200">
          <div className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-xl text-center font-quicksand font-normal text-base ${
                isActive('/') 
                  ? 'bg-[#EDF4FF] text-[#3B82F6]' 
                  : 'text-black'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/#home" 
              className={`px-3 py-2 rounded-xl text-center font-quicksand font-normal text-base ${
                isActive('/#home') 
                  ? 'bg-[#EDF4FF] text-[#3B82F6]' 
                  : 'text-black'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/#services" 
              className={`px-3 py-2 rounded-xl text-center font-quicksand font-normal text-base ${
                isActive('/#services') 
                  ? 'bg-[#EDF4FF] text-[#3B82F6]' 
                  : 'text-black'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/work" 
              className={`px-3 py-2 rounded-xl text-center font-quicksand font-normal text-base ${
                isActive('/work') 
                  ? 'bg-[#EDF4FF] text-[#3B82F6]' 
                  : 'text-black'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Work
            </Link>
            <Link 
              to="/#contact" 
              className={`px-3 py-2 rounded-xl text-center font-quicksand font-normal text-base ${
                isActive('/#contact') 
                  ? 'bg-[#EDF4FF] text-[#3B82F6]' 
                  : 'text-black'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <button 
              onClick={() => {
                window.location.href = '/booking';
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-4 px-4 py-2 bg-[#0F172A] rounded-full text-white font-open text-base"
            >
              Let's Talk
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;