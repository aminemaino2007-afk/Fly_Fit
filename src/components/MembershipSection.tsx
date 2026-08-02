import React from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, Check, ArrowRight, Crown } from 'lucide-react';
import { MembershipTier } from '../types';

interface MembershipSectionProps {
  tiers: MembershipTier[];
  onSelectTier: (tier: MembershipTier) => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({ tiers, onSelectTier }) => {
  return (
    <section id="membership" className="relative py-28 px-4 sm:px-8 max-w-7xl mx-auto z-10">
      
      {/* Background Accent Flare */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-slate-400/5 blur-[160px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold tracking-widest uppercase text-slate-400">
          <Crown className="w-3.5 h-3.5 text-slate-200" />
          LIMITED ADMISSION
        </div>
        
        <h2 className="text-4xl sm:text-6xl font-syne font-bold text-white tracking-tight">
          MEMBERSHIP <span className="text-silver-shine">TIERS</span>
        </h2>
        
        <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg">
          To preserve privacy, safety, and zero wait times, capacity is capped at 150 members globally.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {tiers.map((tier) => {
          const isFeatured = tier.highlighted;
          return (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
              className={`relative rounded-3xl p-4 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                isFeatured
                  ? 'bg-glass-card border-2 border-white/40 shadow-2xl md:scale-105 z-20'
                  : 'bg-glass-card border border-white/10 hover:border-white/20 z-10'
              }`}
            >
              {/* Featured Badge Top */}
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-white text-black font-syne font-extrabold text-[10px] tracking-widest uppercase shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                  <Sparkles className="w-3 h-3 text-black shrink-0" />
                  {tier.badge}
                </div>
              )}

              <div className="space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-syne font-bold text-white tracking-wide">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-1">
                    {tier.subtitle}
                  </p>
                </div>

                <div className="py-2 border-y border-white/10 flex items-baseline gap-1.5 flex-wrap">
                  <span className="text-3xl sm:text-5xl font-syne font-black text-white">
                    {tier.price}
                  </span>
                  <span className="text-slate-400 text-[11px] sm:text-xs font-medium uppercase">
                    / {tier.period}
                  </span>
                </div>

                {/* Features list */}
                <div className="space-y-3">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block">
                    WHAT'S INCLUDED
                  </span>
                  {tier.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs text-slate-300 font-medium">
                      <Check className="w-4 h-4 text-slate-200 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8">
                <button
                  onClick={() => onSelectTier(tier)}
                  className={`w-full py-4 rounded-xl font-syne font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    isFeatured
                      ? 'bg-white text-black hover:bg-slate-200 shadow-xl'
                      : 'bg-slate-900 hover:bg-slate-800 text-white border border-slate-700'
                  }`}
                >
                  <span>CONTACT US</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          );
        })}
      </div>

    </section>
  );
};
