import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles, ChevronRight, Play } from 'lucide-react';
import { MemberStats } from '../types';

interface HeroSectionProps {
  stats: MemberStats;
  onOpenBooking: () => void;
  onExploreMembership: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ stats, onOpenBooking, onExploreMembership }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 sm:pt-32 pb-16 sm:pb-20 px-3 sm:px-6 lg:px-8 z-10 overflow-hidden w-full max-w-full">
      
      {/* Subtle Central Radial Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[700px] h-[90vw] max-h-[700px] bg-gradient-to-tr from-slate-400/10 via-white/5 to-transparent rounded-full blur-[140px] sm:blur-[180px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto text-center space-y-6 sm:space-y-8 relative z-10 px-1 sm:px-0">
        
        {/* Top Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-slate-900/80 border border-slate-700/80 backdrop-blur-md shadow-xl text-[10px] sm:text-xs font-semibold tracking-wider sm:tracking-widest uppercase text-slate-300 max-w-full"
        >
          <Sparkles className="w-3.5 h-3.5 text-slate-200 shrink-0" />
          <span className="truncate">ULTRA-EXCLUSIVE PRIVATE SANCTUARY</span>
        </motion.div>

        {/* Massive Luxury Heading with Clamp Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-hero-clamp font-syne font-extrabold tracking-tight text-white uppercase break-words w-full px-1"
        >
          FORGE YOUR <br />
          <span className="text-silver-shine">UNFAIR ADVANTAGE</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-slate-300 text-xs sm:text-lg md:text-xl font-normal leading-relaxed px-2 sm:px-4"
        >
          An uncompromising sanctuary engineered for executives, elite athletes, and visionaries. 
          Combining 3D biomechanics, custom hyper-recovery, and master personal mentorship.
        </motion.p>

        {/* CTA Button Group - Equal width full width on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2 sm:pt-4 w-full max-w-sm sm:max-w-none mx-auto px-2 sm:px-0"
        >
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-6 sm:px-9 py-3.5 sm:py-4 rounded-xl bg-white text-black font-syne font-bold text-xs sm:text-sm tracking-wider uppercase shadow-2xl hover:bg-slate-200 active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer min-h-[48px]"
          >
            <span>CONTACT US</span>
            <ChevronRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform shrink-0" />
          </button>

          <button
            type="button"
            onClick={onExploreMembership}
            className="w-full sm:w-auto px-6 sm:px-9 py-3.5 sm:py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-white font-syne font-bold text-xs sm:text-sm tracking-wider uppercase backdrop-blur-md transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
          >
            <Play className="w-4 h-4 fill-white shrink-0" />
            <span>EXPLORE MEMBERSHIP</span>
          </button>
        </motion.div>

        {/* Live Metrics HUD - 2 columns on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-8 sm:pt-16 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 max-w-4xl mx-auto px-1 sm:px-0"
        >
          <div className="p-3.5 sm:p-5 rounded-2xl bg-glass-card border border-white/10 text-center space-y-1 flex flex-col justify-center min-h-[90px]">
            <div className="text-xl sm:text-4xl font-syne font-black text-white leading-tight">
              {stats.activeMembers}
            </div>
            <div className="text-[9px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              CAPACITY LIMIT
            </div>
          </div>

          <div className="p-3.5 sm:p-5 rounded-2xl bg-glass-card border border-white/10 text-center space-y-1 flex flex-col justify-center min-h-[90px]">
            <div className="text-xl sm:text-4xl font-syne font-black text-white leading-tight">
              {stats.satisfactionRate}%
            </div>
            <div className="text-[9px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              GOAL ATTAINMENT
            </div>
          </div>

          <div className="p-3.5 sm:p-5 rounded-2xl bg-glass-card border border-white/10 text-center space-y-1 flex flex-col justify-center min-h-[90px]">
            <div className="text-xl sm:text-4xl font-syne font-black text-white leading-tight">
              100%
            </div>
            <div className="text-[9px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              PRIVATE & DISCREET
            </div>
          </div>

          <div className="p-3.5 sm:p-5 rounded-2xl bg-glass-card border border-white/10 text-center space-y-1 flex flex-col justify-center min-h-[90px]">
            <div className="text-xl sm:text-4xl font-syne font-black text-white leading-tight">
              24/7
            </div>
            <div className="text-[9px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              CONCIERGE ACCESS
            </div>
          </div>
        </motion.div>

        {/* Downward Scroll Indicator */}
        <div className="pt-12 flex justify-center">
          <a
            href="#coach"
            className="flex items-center gap-2 text-xs font-semibold tracking-widest text-slate-400 hover:text-white uppercase transition-colors animate-bounce"
          >
            <span>DISCOVER THE EXPERIENCE</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
