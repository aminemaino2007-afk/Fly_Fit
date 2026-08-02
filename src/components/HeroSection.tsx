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
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 sm:px-8 z-10 overflow-hidden">
      
      {/* Subtle Central Radial Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-slate-400/10 via-white/5 to-transparent rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center space-y-8 relative z-10">
        
        {/* Top Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/80 border border-slate-700/80 backdrop-blur-md shadow-xl text-xs font-semibold tracking-widest uppercase text-slate-300"
        >
          <Sparkles className="w-3.5 h-3.5 text-slate-200" />
          ULTRA-EXCLUSIVE PRIVATE SANCTUARY
        </motion.div>

        {/* Massive Luxury Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-syne font-extrabold tracking-tight sm:tracking-tighter text-white uppercase leading-[0.95] sm:leading-[0.9] break-words"
        >
          FORGE YOUR <br />
          <span className="text-silver-shine">UNFAIR ADVANTAGE</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-slate-300 text-sm sm:text-lg md:text-xl font-normal leading-relaxed px-2"
        >
          An uncompromising sanctuary engineered for executives, elite athletes, and visionaries. 
          Combining 3D biomechanics, custom hyper-recovery, and master personal mentorship.
        </motion.p>

        {/* CTA Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2 sm:pt-4 w-full max-w-md mx-auto sm:max-w-none"
        >
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-syne font-bold text-xs sm:text-sm tracking-wider uppercase shadow-2xl hover:bg-slate-200 active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer min-h-[48px]"
          >
            <span>CONTACT US</span>
            <ChevronRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            type="button"
            onClick={onExploreMembership}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-white font-syne font-bold text-xs sm:text-sm tracking-wider uppercase backdrop-blur-md transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>EXPLORE MEMBERSHIP</span>
          </button>
        </motion.div>

        {/* Live Metrics HUD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-10 sm:pt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto"
        >
          <div className="p-4 sm:p-5 rounded-2xl bg-glass-card border border-white/10 text-center space-y-1">
            <div className="text-2xl sm:text-4xl font-syne font-black text-white">
              {stats.activeMembers}
            </div>
            <div className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider sm:tracking-widest">
              CAPACITY LIMIT
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-glass-card border border-white/10 text-center space-y-1">
            <div className="text-2xl sm:text-4xl font-syne font-black text-white">
              {stats.satisfactionRate}%
            </div>
            <div className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider sm:tracking-widest">
              GOAL ATTAINMENT
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-glass-card border border-white/10 text-center space-y-1">
            <div className="text-2xl sm:text-4xl font-syne font-black text-white">
              100%
            </div>
            <div className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider sm:tracking-widest">
              PRIVATE & DISCREET
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-glass-card border border-white/10 text-center space-y-1">
            <div className="text-2xl sm:text-4xl font-syne font-black text-white">
              24/7
            </div>
            <div className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider sm:tracking-widest">
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
