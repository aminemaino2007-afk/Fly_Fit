import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, ArrowUpRight, Lock, MessageCircle, Instagram } from 'lucide-react';

interface HeaderNavbarProps {
  onOpenBooking: () => void;
}

export const HeaderNavbar: React.FC<HeaderNavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'COACHS', href: '#trainers-photos' },
    { label: 'PHOTOS DU CLUB', href: '#gym-photos' },
    { label: 'MEMBERSHIPS', href: '#membership' },
    { label: 'PERFORMANCE LAB', href: '#calculator' },
    { label: 'LOCALISATION', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4 bg-glass border-b border-white/10 shadow-2xl backdrop-blur-xl' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-white via-slate-300 to-slate-500 p-0.5 shadow-xl group-hover:scale-105 transition-transform overflow-hidden">
            <img 
              src="/src/assets/images/fly_fit_brand_logo_1785622774553.jpg" 
              alt="Fly Fit Logo" 
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
          <div>
            <span className="text-xl font-syne font-extrabold tracking-widest text-white block leading-none">
              FLY FIT
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-widest text-slate-400 block mt-1">
              ATHLETIC CLUB
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest text-slate-300 uppercase">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-slate-200 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-[11px] font-medium text-slate-400 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>FLY FIT SFAX: OUVERT</span>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-200 text-black font-syne font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center gap-1.5"
          >
            <span>CONTACT US</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-white/10 px-6 py-8 space-y-6 backdrop-blur-2xl">
          <nav className="flex flex-col gap-4 text-sm font-syne font-bold tracking-wider uppercase text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-slate-800/80 hover:text-slate-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full py-3 rounded-xl bg-white text-black font-syne font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>CONTACT US</span>
          </button>
        </div>
      )}
    </header>
  );
};
