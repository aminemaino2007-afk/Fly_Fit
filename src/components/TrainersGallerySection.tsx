import React from 'react';
import { motion } from 'motion/react';
import { Users } from 'lucide-react';

export interface Trainer {
  id: string;
  name: string;
  imageUrl: string;
}

const trainersData: Trainer[] = [
  {
    id: 'coach-asil',
    name: 'Coach Asil',
    imageUrl: 'https://lh3.googleusercontent.com/d/1eV0T5Iw9ZX44PHUuoJT6jY_kQY8V86zs',
  },
  {
    id: 'coach-youssef',
    name: 'Coach Youssef',
    imageUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'coach-sarah',
    name: 'Coach Sarah',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'coach-mehdi',
    name: 'Coach Mehdi',
    imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
  }
];

interface TrainersGallerySectionProps {
  onBookSession?: (trainerName?: string) => void;
}

export const TrainersGallerySection: React.FC<TrainersGallerySectionProps> = () => {
  return (
    <section id="trainers-photos" className="relative py-24 px-4 sm:px-8 bg-slate-950/60 border-t border-white/5 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-[11px] font-semibold tracking-widest uppercase text-slate-300">
            <Users className="w-3.5 h-3.5 text-slate-300" />
            L’ÉQUIPE DE COACHING OFFICIELLE FLY FIT
          </div>

          <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-white uppercase tracking-tight">
            NOS <span className="text-slate-400">COACHS</span>
          </h2>

          <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Rencontrez l'équipe de coachs professionnels du club Fly Fit à Sfax.
          </p>
        </div>

        {/* Trainers Cards Grid - 2 columns on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {trainersData.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative rounded-2xl bg-slate-900 border border-white/10 overflow-hidden shadow-2xl flex flex-col hover:border-white/30 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-52 xs:h-64 sm:h-80 md:h-96 w-full overflow-hidden bg-slate-950">
                <img
                  src={trainer.imageUrl}
                  alt={trainer.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    if (trainer.id === 'coach-asil') {
                      if (!e.currentTarget.src.includes('drive.google.com/uc')) {
                        e.currentTarget.src = 'https://drive.google.com/uc?export=view&id=1eV0T5Iw9ZX44PHUuoJT6jY_kQY8V86zs';
                      } else {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80';
                      }
                    }
                  }}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                />
                
                {/* Gradient overlay for name contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />

                {/* Name Label */}
                <div className="absolute bottom-0 inset-x-0 p-3 sm:p-5 text-center z-10">
                  <h3 className="text-sm sm:text-2xl font-syne font-extrabold text-white tracking-wide uppercase group-hover:text-amber-300 transition-colors">
                    {trainer.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

