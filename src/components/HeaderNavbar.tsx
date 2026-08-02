import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

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
        scrolled ? 'py-3 sm:py-4 bg-slate-950/90 border-b border-white/10 shadow-2xl backdrop-blur-xl' : 'py-4 sm:py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-white via-slate-300 to-slate-500 p-0.5 shadow-xl group-hover:scale-105 transition-transform overflow-hidden">
            <img 
              src="/src/assets/images/fly_fit_brand_logo_1785622774553.jpg" 
              alt="Fly Fit Logo" 
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
          <div>
            <span className="text-base sm:text-xl font-syne font-extrabold tracking-widest text-white block leading-none">
              FLY FIT
            </span>
            <span className="text-[8px] sm:text-[9px] font-semibold uppercase tracking-widest text-slate-400 block mt-0.5 sm:mt-1">
              ATHLETIC CLUB
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-widest text-slate-300 uppercase">
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
        <div className="hidden md:flex items-center gap-3.5">
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-medium text-slate-300 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>FLY FIT SFAX: OUVERT</span>
          </div>

          <button
            type="button"
            onClick={onOpenBooking}
            className="px-4 sm:px-5 py-2.5 rounded-xl bg-white hover:bg-slate-200 text-black font-syne font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center gap-1.5 cursor-pointer min-h-[44px]"
          >
            <span>CONTACT US</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Toggle button with 44px min touch target */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden min-h-[44px] min-w-[44px] p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 hover:text-white active:scale-95 transition-all flex items-center justify-center cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Animated Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-slate-950/98 border-b border-white/10 px-5 py-6 space-y-6 backdrop-blur-2xl overflow-hidden shadow-2xl"
          >
            <div className="flex items-center justify-between px-2 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>FLY FIT SFAX: OUVERT 24/7</span>
              </div>
            </div>

            <nav className="flex flex-col gap-1 text-sm font-syne font-bold tracking-wider uppercase text-slate-200">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 px-3 rounded-lg border-b border-slate-800/60 hover:bg-white/5 hover:text-white transition-all flex items-center justify-between min-h-[44px]"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-white via-slate-100 to-slate-300 text-black font-syne font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 min-h-[44px] shadow-xl cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>RESERVER UNE SEANCE GO LIVE</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

