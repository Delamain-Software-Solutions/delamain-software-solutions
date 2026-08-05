import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLiteMode } from '@/lib/liteMode';
import { DEMOS_URL } from '@/lib/links';

type NavLinkItem = { to: string; label: string; path: string; external?: boolean };

// react-router's Link can't leave the SPA, so anything off-site renders as a
// plain anchor. Both branches carry data-current so the underline still works.
const NavItem = ({
  link,
  className,
  current,
  onClick,
}: {
  link: NavLinkItem;
  className: string;
  current?: boolean;
  onClick?: () => void;
}) =>
  link.external ? (
    <a
      href={link.to}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      data-current={current}
      onClick={onClick}
    >
      {link.label}
    </a>
  ) : (
    <Link to={link.to} className={className} data-current={current} onClick={onClick}>
      {link.label}
    </Link>
  );

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  // backdrop-filter re-samples and re-blurs whatever scrolls beneath the bar on
  // every frame — the single most expensive effect here without a GPU. Trade it
  // for an opaque bar. See lib/liteMode.
  const lite = useLiteMode();

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path === '/services' && location.pathname === '/services') return true;
    if (path === '/work' && location.pathname.startsWith('/work')) return true;
    if (path.includes('#') && location.hash === path.split('#')[1]) return true;
    return false;
  };

  const navLinks: NavLinkItem[] = [
    { to: '/', label: 'Home', path: '/' },
    { to: '/#home', label: 'About Us', path: '/#home' },
    { to: '/services', label: 'Services', path: '/services' },
    { to: '/work', label: 'Our Work', path: '/work' },
    { to: DEMOS_URL, label: 'Demos', path: '', external: true },
    { to: '/#contact', label: 'Contact Us', path: '/#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[150] transition-all duration-300 border-b ${
        scrolled
          ? lite
            ? 'bg-[#f5f5f7] border-black/5 shadow-sm'
            : 'bg-[#f5f5f7]/80 backdrop-blur-xl backdrop-saturate-150 border-black/5 shadow-sm'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="mx-auto px-5 sm:px-10 py-2.5 flex items-center justify-between gap-2.5">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/logos/logo-full-black.png" alt="Delamain Software Solutions" className="h-12 w-auto -my-2" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center gap-[clamp(14px,2.4vw,34px)]">
          {navLinks.map((link) => (
            <NavItem
              key={link.label}
              link={link}
              current={isActive(link.path)}
              className={`nav-link font-hanken font-medium text-[15px] transition-colors text-foreground`}
            />
          ))}
        </div>

        <div className="hidden md:flex">
          <button
            onClick={() => window.location.href = '/booking'}
            className="group flex items-center gap-2.5 pl-5 pr-1 py-1 bg-foreground rounded-pill font-hanken font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110"
          >
            <span>Let's talk</span>
            <span className="flex items-center justify-center w-[26px] h-[26px] bg-white rounded-full text-foreground transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-11 h-11 flex items-center justify-center border border-black/10 rounded-xl bg-white text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-5 py-4 bg-[#f5f5f7]/97 backdrop-blur-xl border-t border-black/5">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <NavItem
                key={link.label}
                link={link}
                className={`px-1 py-[15px] font-hanken font-semibold text-[17px] border-b border-black/[0.06] last:border-b-0 ${
                  isActive(link.path) ? 'text-accent' : 'text-foreground'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              />
            ))}
            <button
              onClick={() => {
                window.location.href = '/booking';
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 mt-4 px-4 py-3 bg-foreground rounded-pill text-white font-hanken font-semibold text-base"
            >
              Let's talk
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
