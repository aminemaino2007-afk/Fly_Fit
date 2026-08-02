import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Activity, Snowflake, Dumbbell, Coffee, ChevronRight, Check } from 'lucide-react';
import { Amenity } from '../types';

interface AmenitiesSectionProps {
  amenities: Amenity[];
}

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ amenities }) => {
  const [activeId, setActiveId] = useState<string>(amenities[0]?.id || '1');

  const activeAmenity = amenities.find((a) => a.id === activeId) || amenities[0];

  const getIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'biometrics': return <Activity className="w-5 h-5 text-slate-200" />;
      case 'recovery': return <Snowflake className="w-5 h-5 text-slate-200" />;
      case 'training': return <Dumbbell className="w-5 h-5 text-slate-200" />;
      case 'lounge': return <Coffee className="w-5 h-5 text-slate-200" />;
      default: return <Sparkles className="w-5 h-5 text-slate-200" />;
    }
  };

  return (
    <section id="amenities" className="relative py-28 px-4 sm:px-8 max-w-7xl mx-auto z-10">
      
      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold tracking-widest uppercase text-slate-400">
          <Sparkles className="w-3.5 h-3.5 text-slate-200" />
          THE SANCTUARY FACILITIES
        </div>
        
        <h2 className="text-4xl sm:text-6xl font-syne font-bold text-white tracking-tight">
          ENGINEERED WITHOUT <span className="text-metallic">COMPROMISE</span>
        </h2>
        
        <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg">
          State-of-the-art diagnostic technology, custom biomechanical equipment, and private hyper-recovery suites.
        </p>
      </div>

      {/* Tabs & Feature Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Navigation Tabs */}
        <div className="lg:col-span-4 space-y-3">
          {amenities.map((item) => {
            const isActive = item.id === activeId;
            return (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                  isActive
                    ? 'bg-glass-card border-white/30 text-white shadow-xl scale-[1.02]'
                    : 'bg-slate-900/40 hover:bg-slate-900/80 border-slate-800/80 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-xl ${isActive ? 'bg-white text-black' : 'bg-slate-800 text-slate-300'}`}>
                    {getIcon(item.category)}
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 block">
                      {item.tag}
                    </span>
                    <h3 className="text-base font-syne font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'translate-x-1 text-white' : 'text-slate-600'}`} />
              </button>
            );
          })}
        </div>

        {/* Right Column: Active Card Display with Glassmorphism */}
        <div className="lg:col-span-8">
          {activeAmenity && (
            <motion.div
              key={activeAmenity.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl p-6 sm:p-10 bg-glass-card border border-white/15 shadow-2xl space-y-8 relative overflow-hidden"
            >
              {/* Image Preview Banner */}
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden group">
                <img
                  src={activeAmenity.imageUrl}
                  alt={activeAmenity.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block">
                      FEATURED ZONE
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-syne font-bold text-white">
                      {activeAmenity.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Description & Feature Checklist */}
              <div className="space-y-6">
                <p className="text-slate-300 text-base leading-relaxed">
                  {activeAmenity.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {activeAmenity.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-medium text-slate-200"
                    >
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          )}
        </div>

      </div>

    </section>
  );
};
