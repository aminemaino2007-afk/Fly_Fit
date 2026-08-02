import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { processSeamlessImage } from '../utils/imageProcessor';
import {
  MapPin,
  Star,
  Navigation,
  Share2,
  Clock,
  Instagram,
  Phone,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Info,
  MessageCircle
} from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'presentation' | 'avis' | 'apropos'>('presentation');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const rawDeadpoolSrc = 'https://lh3.googleusercontent.com/d/16_MQfp_7yeDagcb8OEtuGaC74RYHFsjb';
  const [deadpoolSrc, setDeadpoolSrc] = useState(rawDeadpoolSrc);

  useEffect(() => {
    processSeamlessImage(rawDeadpoolSrc, 'corner-chroma').then((processedUrl) => {
      setDeadpoolSrc(processedUrl);
    });
  }, [rawDeadpoolSrc]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Fly Fit - Salle de gym Sfax',
        text: 'Fly Fit - Salle de gym Route aéroport km 6 Sfax, 3070',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText('Fly Fit - Route aéroport km 6 Sfax, 3070 (Tél: 51 785 579)');
      showToast('Lien de l’établissement copié dans le presse-papier !');
    }
  };

  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Fly+Fit+Route+aeroport+km+6+Sfax+3070+PMMM%2B5C+Thyna';

  return (
    <section id="location" className="relative py-24 px-4 sm:px-8 z-10 overflow-hidden bg-slate-950/40 border-t border-white/5">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-400 text-xs font-semibold shadow-2xl flex items-center gap-2 backdrop-blur-md"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-[11px] font-semibold tracking-widest uppercase text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-slate-200" />
            LOCALISATION & CONTACT GOOGLE MAPS
          </div>
          <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-white uppercase tracking-tight">
            FLY FIT <span className="text-slate-400">ATHLETIC CLUB</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Retrouvez toutes les informations officielles et votre itinéraire direct pour vous rendre au club Fly Fit à Sfax.
          </p>
        </div>

        {/* Main Google Maps Style Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Business Info Badge */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden space-y-6">
            
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-400/5 rounded-full blur-3xl pointer-events-none" />

            {/* Business Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-3xl font-syne font-black text-white tracking-wide">
                    Fly Fit
                  </h3>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                    Ouvert
                  </span>
                </div>
                
                {/* Rating & Category */}
                <div className="flex flex-wrap items-center gap-3 mt-2 text-xs">
                  <div className="flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-lg text-amber-300 font-semibold">
                    <span className="font-bold text-amber-400">4,6</span>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3.5 h-3.5 fill-current ${i < 4 ? 'text-amber-400' : 'text-amber-400/40'}`} />
                      ))}
                    </div>
                    <span className="text-slate-400 font-normal">(9 avis)</span>
                  </div>
                  
                  <span className="text-slate-400 font-medium">·</span>
                  <span className="text-slate-300 font-medium uppercase tracking-wider bg-slate-800 px-2.5 py-1 rounded-lg">
                    Salle de gym
                  </span>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-950/60 border border-white/5 px-3 py-2 rounded-xl self-start">
                <ShieldCheck className="w-4 h-4 text-slate-300" />
                <span>Établissement Vérifié</span>
              </div>
            </div>

            {/* Tabs: Présentation | Avis | À propos */}
            <div className="flex items-center gap-2 border-b border-white/10 pb-3">
              <button
                type="button"
                onClick={() => setActiveTab('presentation')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all ${
                  activeTab === 'presentation'
                    ? 'bg-white text-black font-bold shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                Présentation
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('avis')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all ${
                  activeTab === 'avis'
                    ? 'bg-white text-black font-bold shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                Avis (9)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('apropos')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all ${
                  activeTab === 'apropos'
                    ? 'bg-white text-black font-bold shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                À propos
              </button>
            </div>

            {/* Tab Content Panels */}
            {activeTab === 'presentation' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4 text-xs text-slate-300">
                <p className="leading-relaxed">
                  Fly Fit est le club de sport et centre de préparation athlétique de référence situé sur la Route de l'Aéroport km 6 à Sfax, Tunisie.
                  Notre établissement dispose d'équipements modernes, de coachs certifiés et de programmes sur-mesure pour tous les niveaux.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-950/50 border border-white/5 space-y-1">
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider font-semibold">COACH PRINCIPAL</span>
                    <span className="text-white font-bold block">Coach Asil</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/50 border border-white/5 space-y-1">
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider font-semibold">ZONE</span>
                    <span className="text-white font-bold block">Sfax, Thyna (Km 6)</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'avis' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">Adem S.</span>
                    <div className="flex text-amber-400"><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/></div>
                  </div>
                  <p className="text-xs text-slate-300">"Excellente salle de gym avec du matériel de pointe et un très bon coaching personnalisé par Coach Asil."</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">Amine M.</span>
                    <div className="flex text-amber-400"><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/></div>
                  </div>
                  <p className="text-xs text-slate-300">"Très propre, super ambiance et cours bien structurés. La meilleure salle à Sfax !"</p>
                </div>
              </motion.div>
            )}

            {activeTab === 'apropos' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2 py-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Salle climatisée et équipée haut de gamme</span>
                </div>
                <div className="flex items-center gap-2 py-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Suivi individuel et bilans corporels</span>
                </div>
                <div className="flex items-center gap-2 py-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Coaching individuel & cours collectifs</span>
                </div>
              </motion.div>
            )}

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white text-black font-syne font-bold text-xs uppercase tracking-wider flex flex-col items-center justify-center gap-1.5 hover:bg-slate-200 transition-all shadow-lg text-center"
              >
                <Navigation className="w-4 h-4 fill-black" />
                <span>Itinéraires</span>
              </a>

              <a
                href="https://wa.me/21651785579"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-syne font-bold text-xs uppercase tracking-wider flex flex-col items-center justify-center gap-1.5 hover:bg-emerald-500/25 transition-all shadow-lg text-center"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-400 text-slate-950" />
                <span>WhatsApp</span>
              </a>

              <a
                href="https://instagram.com/f.l.y_f.i.t"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-pink-500/15 border border-pink-500/40 text-pink-400 font-syne font-bold text-xs uppercase tracking-wider flex flex-col items-center justify-center gap-1.5 hover:bg-pink-500/25 transition-all shadow-lg text-center"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Instagram</span>
              </a>

              <button
                type="button"
                onClick={handleShare}
                className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-slate-200 text-xs font-semibold flex flex-col items-center justify-center gap-1.5 hover:bg-slate-700 transition-all text-center"
              >
                <Share2 className="w-4 h-4 text-slate-300" />
                <span>Partager</span>
              </button>
            </div>

            {/* Detailed Contact List */}
            <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-slate-300">
              
              {/* Address */}
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/40 border border-white/5">
                <MapPin className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <span className="text-slate-400 text-[10px] uppercase font-semibold block">Adresse</span>
                  <span className="text-white font-medium block">Route aéroport km 6 Sfax, 3070</span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/40 border border-white/5">
                <Clock className="w-4 h-4 text-slate-300 shrink-0" />
                <div className="flex-1">
                  <span className="text-slate-400 text-[10px] uppercase font-semibold block">Horaires d’ouverture</span>
                  <span className="text-amber-400 font-semibold block">Fermé · Ouvre à 09:00 dim.</span>
                </div>
              </div>

              {/* Instagram & WhatsApp & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href="https://wa.me/21651785579"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all group"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div className="overflow-hidden">
                    <span className="text-emerald-400 text-[10px] uppercase font-bold block">WhatsApp</span>
                    <span className="text-white font-mono font-bold block truncate text-xs">51 785 579</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-400 ml-auto shrink-0" />
                </a>

                <a
                  href="https://instagram.com/f.l.y_f.i.t"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 border border-pink-500/30 hover:border-pink-500/60 transition-all group"
                >
                  <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                  <div className="overflow-hidden">
                    <span className="text-pink-400 text-[10px] uppercase font-bold block">Instagram</span>
                    <span className="text-white font-medium block truncate text-xs group-hover:text-pink-300">@f.l.y_f.i.t</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-pink-400 ml-auto shrink-0" />
                </a>

                <a
                  href="tel:51785579"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/40 border border-white/5 hover:border-slate-600 transition-colors group"
                >
                  <Phone className="w-4 h-4 text-slate-300 shrink-0" />
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase font-semibold block">Téléphone</span>
                    <span className="text-white font-mono font-bold block text-xs group-hover:text-slate-200">51 785 579</span>
                  </div>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Styled Map Visual */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl bg-slate-900 border border-white/10 p-2 shadow-2xl overflow-hidden group">
              
              {/* Styled Map Embed Container */}
              <div className="relative w-full h-[300px] sm:h-[480px] rounded-xl overflow-hidden bg-slate-950">
                <iframe
                  title="Fly Fit Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.4891123!2d10.72!3d34.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQzJzIwLjAiTiAxMMKwNDMnMTIuMCJF!5e0!3m2!1sen!2stn!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180%) contrast(120%) opacity(85%)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Pin Overlay Card */}
                <div className="absolute top-4 left-4 z-20 p-3 rounded-xl bg-slate-950/90 border border-white/10 backdrop-blur-md shadow-2xl max-w-xs space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping shrink-0" />
                    <span className="font-syne font-bold text-white text-xs">FLY FIT CLUB</span>
                  </div>
                  <p className="text-[11px] text-slate-300">Route aéroport km 6 Sfax, 3070</p>
                </div>

                {/* Open in Google Maps Floating CTA */}
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-4 right-4 z-20 px-4 py-2.5 rounded-xl bg-white text-black font-syne font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-2xl hover:bg-slate-200 transition-transform active:scale-95"
                >
                  <Navigation className="w-3.5 h-3.5 fill-black" />
                  <span>Ouvrir sur Maps</span>
                </a>
              </div>
            </div>

            {/* Quick Location Note */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 text-slate-400 text-xs flex items-center gap-3">
              <Info className="w-4 h-4 text-slate-300 shrink-0" />
              <span>Situé stratégiquement au km 6 de la Route de l'Aéroport, facile d'accès avec parking privé surveillé.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
