import React from 'react';
import { Shield, MapPin, Phone, Mail, Instagram, Twitter, Linkedin, MessageCircle } from 'lucide-react';

export const FooterSection: React.FC = () => {
  return (
    <footer id="footer" className="relative bg-slate-950 border-t border-white/10 pt-20 pb-12 px-4 sm:px-8 z-10 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
        
        {/* Brand Column */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-white via-slate-300 to-slate-500 p-0.5 overflow-hidden">
              <img 
                src="/src/assets/images/fly_fit_brand_logo_1785622774553.jpg" 
                alt="Fly Fit Emblem" 
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div>
              <span className="text-xl font-syne font-extrabold tracking-widest text-white block leading-none">
                FLY FIT
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-widest text-slate-400 block mt-1">
                ATHLETIC CLUB & SANCTUARY
              </span>
            </div>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed max-w-md">
            The world's premier private athletic sanctuary. Blending 3D biomechanics, bespoke personal mentorship, and luxury recovery for high-performing visionaries.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a
              href="https://wa.me/21651785579"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/25 active:scale-95 transition-all flex items-center gap-2.5 shadow-lg min-h-[44px]"
              title="Discuter sur WhatsApp (51 785 579)"
              aria-label="WhatsApp 51 785 579"
            >
              <MessageCircle className="w-5 h-5 fill-emerald-400 text-slate-950 shrink-0" />
              <span className="font-syne font-bold text-xs uppercase tracking-wider">WhatsApp 51 785 579</span>
            </a>
            <a
              href="https://instagram.com/f.l.y_f.i.t"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3 rounded-xl bg-pink-500/15 border border-pink-500/40 text-pink-300 hover:bg-pink-500/25 active:scale-95 transition-all flex items-center gap-2.5 shadow-lg min-h-[44px]"
              title="Voir Instagram @f.l.y_f.i.t"
              aria-label="Instagram @f.l.y_f.i.t"
            >
              <Instagram className="w-5 h-5 text-pink-400 shrink-0" />
              <span className="font-syne font-bold text-xs uppercase tracking-wider">Instagram @f.l.y_f.i.t</span>
            </a>
          </div>
        </div>

        {/* Location & Contact */}
        <div className="md:col-span-4 space-y-3">
          <h4 className="font-syne font-bold text-white uppercase tracking-widest text-sm mb-4">
            FLY FIT SANCTUARY SFAX
          </h4>

          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
            <span>Route aéroport km 6 Sfax, 3070, Tunisie (PMMM+5C Thyna)</span>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-slate-300 shrink-0" />
            <span>+216 51 785 579 [Accueil & VIP Concierge]</span>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-slate-300 shrink-0" />
            <span>contact@flyfitclub.com</span>
          </div>

          <div className="pt-2 text-[11px] text-amber-400 font-semibold flex items-center gap-2">
            <span>★ 4.6 (9 avis Google Maps)</span>
            <span>·</span>
            <span>Salle de gym</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="font-syne font-bold text-white uppercase tracking-widest text-sm mb-4">
            SANCTUARY ZONES
          </h4>

          <ul className="space-y-2 text-slate-400">
            <li><a href="#coach" className="hover:text-white transition-colors">Head Coach Asil Bio</a></li>
            <li><a href="#amenities" className="hover:text-white transition-colors">Cryotherapy Suite</a></li>
            <li><a href="#amenities" className="hover:text-white transition-colors">Biometric DXA Lab</a></li>
            <li><a href="#membership" className="hover:text-white transition-colors">Private Heavy Iron Studio</a></li>
            <li><a href="#membership" className="hover:text-white transition-colors">Founder's Circle Admission</a></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px]">
        <div>
          © 2026 FLY FIT ATHLETIC CLUB LLC. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <a href="#" className="hover:text-slate-300">PRIVACY POLICY</a>
          <a href="#" className="hover:text-slate-300">TERMS OF ADMISSION</a>
          <a href="#" className="hover:text-slate-300">SECURITY PROTOCOL</a>
        </div>
      </div>
    </footer>
  );
};
