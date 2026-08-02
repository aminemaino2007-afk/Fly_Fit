import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, Dumbbell, Zap, Layers, ShieldCheck, Flame } from 'lucide-react';

export interface GymPhoto {
  id: string;
  title: string;
  category: 'musculation' | 'cardio' | 'crosstraining' | 'lounge';
  categoryLabel: string;
  imageUrl: string;
  description: string;
  specs: string[];
}

const gymPhotosData: GymPhoto[] = [
  {
    id: 'gym-1',
    title: 'Zone Musculation & Haltérophilie Heavy Duty',
    category: 'musculation',
    categoryLabel: 'Plateau Musculation',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    description: 'Bancs de presse olympique, racks à squates Hammer Strength et haltères jusqu’à 50 kg pour entraînements de haute intensité.',
    specs: ['Haltères 2.5kg - 50kg', '4 Power Racks', 'Sol amortissant Pro 15mm']
  },
  {
    id: 'gym-2',
    title: 'Espace Biomécanique & Machines Guidées',
    category: 'musculation',
    categoryLabel: 'Plateau Musculation',
    imageUrl: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80',
    description: 'Parc de machines chargées à plaques isolatérales conçues pour maximiser le recrutement musculaire en toute sécurité.',
    specs: ['Poulies Vis-à-vis Quadruples', 'Leg Press 45° Pro', 'Hack Squat Pure Strength']
  },
  {
    id: 'gym-3',
    title: 'Arène Cross-Training & Fonctionnel',
    category: 'crosstraining',
    categoryLabel: 'Cross-Training',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    description: 'Rig central multi-stations, kettlebells, wall balls, cordes ondulatoires et gazon synthétique pour sleds de poussée.',
    specs: ['Gazon Synthétique 15m', 'Prowler Sled', 'Bumper Plates de compétition']
  },
  {
    id: 'gym-4',
    title: 'Cardio Theater & Endurance Lab',
    category: 'cardio',
    categoryLabel: 'Cardio & Performance',
    imageUrl: 'https://images.unsplash.com/photo-1576678927484-cc909957088c?auto=format&fit=crop&w=1200&q=80',
    description: 'Tapis de course incurvés autogénés, rameurs Concept2, SkiErg et vélos Assault AirBike interactifs.',
    specs: ['Concept2 Rameurs & SkiErg', 'Assault AirBikes', 'Écrans HD & Suivi Cardio']
  },
  {
    id: 'gym-5',
    title: 'Studio Cours Collectifs & High Tech Lighting',
    category: 'crosstraining',
    categoryLabel: 'Cross-Training',
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
    description: 'Espace climatisé doté d’une sonorisation immersive et d’éclairages LED dynamiques pour les cours intenses de Fly HIIT et Spinning.',
    specs: ['Sound System 2000W', 'Ambiance Néon Néon-Dark', 'Climatisation Intelligente']
  },
  {
    id: 'gym-6',
    title: 'Lounge Recovery & Shake Bar Protéiné',
    category: 'lounge',
    categoryLabel: 'Recovery & Chill',
    imageUrl: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80',
    description: 'Zone de récupération post-entraînement servant des shakes de protéines frais, BCAAs, café spécialisé et boissons hydratantes.',
    specs: ['Bar à Protéines Sur-Mesure', 'Espace Dépôt & Vestiaires VIP', 'Wi-Fi Haute Vitesse']
  }
];

export const GymGallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredPhotos = selectedCategory === 'all'
    ? gymPhotosData
    : gymPhotosData.filter(photo => photo.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextPhoto = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev! + 1) % filteredPhotos.length);
    }
  };

  const prevPhoto = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev! - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  // Keyboard navigation & Body scroll lock
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };

    if (activeLightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeLightboxIndex, filteredPhotos.length]);

  return (
    <section id="gym-photos" className="relative py-24 px-4 sm:px-8 bg-slate-950 border-t border-white/5 overflow-hidden">
      {/* Background Accent Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-[11px] font-semibold tracking-widest uppercase text-slate-300">
            <Camera className="w-3.5 h-3.5 text-slate-300" />
            INFRASTRUCTURE & INSTALLATIONS FLY FIT SFAX
          </div>

          <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-white uppercase tracking-tight">
            PHOTOS DE <span className="text-slate-400">LA SALLE DE GYM</span>
          </h2>

          <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Découvrez nos équipements haut de gamme, nos espaces d'entraînement spacieux et nos zones spécialisées au club Fly Fit à Route de l'Aéroport km 6, Sfax.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex overflow-x-auto no-scrollbar py-2 sm:py-0 sm:flex-wrap sm:justify-center items-center gap-2 max-w-full -mx-4 px-4 sm:mx-0 sm:px-0">
          {[
            { id: 'all', label: 'Toutes les zones' },
            { id: 'musculation', label: 'Plateau Musculation' },
            { id: 'crosstraining', label: 'Cross-Training' },
            { id: 'cardio', label: 'Cardio & Performance' },
            { id: 'lounge', label: 'Recovery Lounge' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedCategory(tab.id)}
              className={`shrink-0 px-4 py-2.5 rounded-xl text-xs font-syne font-bold uppercase tracking-wider transition-all duration-300 min-h-[44px] flex items-center justify-center ${
                selectedCategory === tab.id
                  ? 'bg-white text-black shadow-lg scale-105'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl bg-slate-900/90 border border-white/10 overflow-hidden shadow-2xl flex flex-col hover:border-white/30 transition-all duration-300 cursor-pointer"
            >
              {/* Image Box */}
              <div className="relative h-56 xs:h-64 sm:h-80 overflow-hidden bg-slate-950">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-black/60 border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase backdrop-blur-md">
                  {photo.categoryLabel}
                </span>

                {/* Zoom Trigger Icon */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openLightbox(index);
                  }}
                  className="absolute top-4 right-4 p-2.5 rounded-xl bg-slate-950/80 border border-white/20 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hover:text-black shadow-xl min-w-[44px] min-h-[44px] flex items-center justify-center"
                  title="Agrandir la photo"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Title Overlay at bottom of image */}
                <div className="absolute bottom-0 inset-x-0 p-5 z-10 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
                  <h3 className="text-base sm:text-lg font-syne font-bold text-white group-hover:text-amber-300 transition-colors uppercase">
                    {photo.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeLightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 overflow-hidden"
              onClick={closeLightbox}
            >
              {/* Giant Top-Right Quit Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  closeLightbox();
                }}
                className="fixed top-3 right-3 sm:top-5 sm:right-5 z-[110] px-4 py-2.5 rounded-full bg-rose-600/90 hover:bg-rose-500 border border-rose-400 text-white font-syne font-extrabold text-xs uppercase tracking-wider shadow-2xl flex items-center gap-2 transition-all active:scale-95"
                aria-label="Fermer la photo"
                title="Fermer (Échap)"
              >
                <X className="w-5 h-5" />
                <span>FERMER</span>
              </button>

              {/* Modal Content Box - Strictly constrained to fit inside screen */}
              <div
                className="relative max-w-4xl w-full max-h-[88vh] bg-slate-900 border border-white/15 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-3.5 sm:p-4 border-b border-white/10 bg-slate-950 shrink-0">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="px-2.5 py-1 rounded-md bg-amber-400 text-black text-[10px] font-extrabold uppercase tracking-widest shrink-0">
                      {filteredPhotos[activeLightboxIndex].categoryLabel}
                    </span>
                    <h3 className="text-xs sm:text-sm font-syne font-bold text-white truncate">
                      {filteredPhotos[activeLightboxIndex].title}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={closeLightbox}
                    className="ml-3 px-3 py-1.5 rounded-xl bg-rose-600/20 border border-rose-500/40 text-rose-300 hover:bg-rose-600 hover:text-white transition-all flex items-center gap-1.5 text-xs font-bold font-syne uppercase tracking-wider shrink-0"
                  >
                    <X className="w-4 h-4" />
                    <span>Quitter</span>
                  </button>
                </div>

                {/* Main Image Display - Scaled appropriately so it doesn't take over screen */}
                <div className="relative flex-1 min-h-[250px] max-h-[55vh] sm:max-h-[62vh] bg-black flex items-center justify-center p-2 overflow-hidden">
                  <img
                    src={filteredPhotos[activeLightboxIndex].imageUrl}
                    alt={filteredPhotos[activeLightboxIndex].title}
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-lg"
                  />

                  {/* Previous / Next Navigation Buttons */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevPhoto();
                    }}
                    className="absolute left-3 p-2.5 sm:p-3 rounded-full bg-slate-950/80 border border-white/20 text-white hover:bg-white hover:text-black transition-all shadow-2xl"
                    aria-label="Photo précédente"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextPhoto();
                    }}
                    className="absolute right-3 p-2.5 sm:p-3 rounded-full bg-slate-950/80 border border-white/20 text-white hover:bg-white hover:text-black transition-all shadow-2xl"
                    aria-label="Photo suivante"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>

                {/* Footer details & Exit Button */}
                <div className="p-3 sm:p-4 bg-slate-950 border-t border-white/10 flex items-center justify-between gap-3 text-xs text-slate-400 shrink-0">
                  <div className="flex items-center gap-2 truncate">
                    <span className="font-syne font-bold text-white text-xs sm:text-sm truncate">
                      {filteredPhotos[activeLightboxIndex].title}
                    </span>
                    <span className="text-slate-500 text-[11px] font-mono shrink-0">
                      ({activeLightboxIndex + 1} / {filteredPhotos.length})
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={closeLightbox}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-rose-600 text-slate-200 hover:text-white transition-all font-syne font-bold text-xs uppercase tracking-wider shrink-0 flex items-center gap-1.5"
                  >
                    <X className="w-4 h-4" />
                    <span>Fermer</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
