import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Zap, Sparkles, Trophy, CheckCircle2, Play, Volume2 } from 'lucide-react';
import { CoachInfo } from '../types';

interface CoachSectionProps {
  coach: CoachInfo;
  onBookSession: () => void;
}

export const CoachSection: React.FC<CoachSectionProps> = ({ coach, onBookSession }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, scale: 1 });
  const [isPlayingMessage, setIsPlayingMessage] = useState(false);

  const [fitMode, setFitMode] = useState<'contain' | 'cover'>('contain');
  const [blendMode, setBlendMode] = useState<'normal' | 'screen'>('normal');

  // Helper to resolve direct image source from Google Drive sharing link or standard image URLs
  const formatDriveUrl = (url: string) => {
    if (!url) return '/src/assets/images/coach_asil_hd_cutout_1785618175345.jpg';
    const driveMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (driveMatch && driveMatch[1]) {
      return `https://lh3.googleusercontent.com/d/${driveMatch[1]}`;
    }
    return url;
  };

  const [imgSrc, setImgSrc] = useState(
    formatDriveUrl('https://drive.google.com/file/d/1eV0T5Iw9ZX44PHUuoJT6jY_kQY8V86zs/view?usp=sharing')
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * 12; // tilt angle
    const rotateY = ((x - centerX) / centerX) * 12;

    setTilt({ rotateX, rotateY, scale: 1.03 });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, scale: 1 });
  };

  return (
    <section id="coach" className="relative py-28 px-4 sm:px-8 max-w-7xl mx-auto z-10">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-slate-300/5 blur-[160px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs font-semibold tracking-wider uppercase text-slate-300"
        >
          <Sparkles className="w-3.5 h-3.5 text-slate-200" />
          MASTER PERFORMANCE DIRECTOR
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl font-syne font-bold tracking-tight text-white"
        >
          METRIC-DRIVEN <span className="text-metallic">EXCELLENCE</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg"
        >
          Guided by world-class athletic science, customized biomechanics, and relentless elite mentorship.
        </motion.p>
      </div>

      {/* Grid: 3D Coach Card Left + Details Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT COLUMN: 3D GLASS CARD WITH COACH CUTOUT */}
        <div className="lg:col-span-5 perspective-1000">
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.scale})`,
              transition: 'transform 0.15s ease-out, box-shadow 0.3s ease-out',
            }}
            className="relative rounded-3xl p-6 sm:p-8 bg-glass-card bg-glass-card-hover transform-style-3d cursor-pointer group"
          >
            {/* Glowing Rim Light Effect */}
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-tr from-white/30 via-slate-400/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none" />

            {/* Inner Glass Frame */}
            <div className="relative z-10 overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900/80 via-black/90 to-black p-4 border border-white/10 shadow-2xl">
              
              {/* Soft Radial Ambient Spotlight Behind Coach */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-slate-300/15 rounded-full blur-3xl pointer-events-none" />
              
              {/* Metallic Rim Badge Top Right */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-slate-700/80 backdrop-blur-md text-xs font-semibold text-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-300" />
                FOUNDER
              </div>

              {/* COACH CUTOUT IMAGE CONTAINER */}
              <div className="relative w-full min-h-[380px] max-h-[520px] aspect-[4/5] sm:aspect-[3/4] flex items-center justify-center overflow-hidden rounded-xl bg-slate-950/60 border border-white/5">
                {/* 3D Drop Shadow layer */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black via-black/70 to-transparent z-10 pointer-events-none" />
                
                {/* Frame Adjuster Pills (Top Left) */}
                <div className="absolute top-3 left-3 z-30 flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFitMode(fitMode === 'contain' ? 'cover' : 'contain');
                    }}
                    className="px-2.5 py-1 rounded-md bg-black/70 hover:bg-black border border-white/10 text-[10px] font-semibold text-slate-300 backdrop-blur-md"
                    title="Toggle Frame Fit"
                  >
                    Fit: {fitMode === 'contain' ? 'Aspect' : 'Fill'}
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setBlendMode(blendMode === 'normal' ? 'screen' : 'normal');
                    }}
                    className="px-2.5 py-1 rounded-md bg-black/70 hover:bg-black border border-white/10 text-[10px] font-semibold text-slate-300 backdrop-blur-md"
                    title="Toggle Blend Mode"
                  >
                    Blend: {blendMode}
                  </button>
                </div>

                {/* Coach Image */}
                <motion.img
                  src={imgSrc}
                  alt={coach.name}
                  referrerPolicy="no-referrer"
                  onError={() => {
                    setImgSrc('/src/assets/images/coach_asil_hd_cutout_1785618175345.jpg');
                  }}
                  className={`w-full h-full rounded-xl transition-all duration-500 group-hover:scale-105 drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] ${
                    fitMode === 'contain' ? 'object-contain p-2' : 'object-cover object-top'
                  }`}
                  style={{
                    mixBlendMode: blendMode,
                  }}
                />

                {/* Soft Specular Glow Over Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-white/5 opacity-40 rounded-xl pointer-events-none" />
              </div>

              {/* Coach Quick Card Footer */}
              <div className="relative z-20 pt-4 pb-2 px-2 flex items-center justify-between border-t border-white/10 mt-2">
                <div>
                  <h3 className="text-xl font-syne font-bold text-white tracking-wide">
                    {coach.name}
                  </h3>
                  <p className="text-xs font-medium text-slate-400">
                    {coach.title}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlayingMessage(!isPlayingMessage)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/90 hover:bg-slate-700 border border-slate-600/80 text-xs font-semibold text-white transition-all shadow-md active:scale-95"
                  >
                    {isPlayingMessage ? (
                      <>
                        <Volume2 className="w-3.5 h-3.5 text-slate-200 animate-pulse" />
                        Listening...
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 text-slate-200 fill-slate-200" />
                        Voice Note
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Interactive Audio Player Simulation */}
              {isPlayingMessage && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-3 p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-xs space-y-2"
                >
                  <div className="flex items-center justify-between text-slate-300 font-medium">
                    <span>"Philosophy of Uncompromising Precision"</span>
                    <span className="text-slate-400 font-mono">0:42 / 1:30</span>
                  </div>
                  {/* Waveform graphic */}
                  <div className="flex items-center gap-1 h-6 px-1">
                    {[40, 75, 30, 90, 60, 100, 45, 80, 55, 95, 35, 70, 85, 40, 65].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-slate-500 to-white rounded-full animate-pulse"
                        style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: COACH DETAILS, ACHIEVEMENTS & PHILOSOPHY */}
        <div className="lg:col-span-7 space-y-8">
          
          <div className="space-y-4">
            <h3 className="text-3xl sm:text-4xl font-syne font-bold text-white tracking-tight">
              MEET HEAD COACH <span className="text-silver-shine">{coach.name}</span>
            </h3>
            <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
              {coach.bio}
            </p>
          </div>

          {/* Achievement Metric Cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-1 hover:border-slate-700 transition-colors">
              <div className="text-2xl sm:text-3xl font-syne font-extrabold text-white">
                {coach.achievements.years}+
              </div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Years Master Experience
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-1 hover:border-slate-700 transition-colors">
              <div className="text-2xl sm:text-3xl font-syne font-extrabold text-white">
                {coach.achievements.athletes.toLocaleString()}+
              </div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Athletes Transformed
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-1 hover:border-slate-700 transition-colors">
              <div className="text-2xl sm:text-3xl font-syne font-extrabold text-white">
                {coach.achievements.championships}
              </div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Pro Championships
              </div>
            </div>
          </div>

          {/* Core Coaching Philosophies */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <Zap className="w-4 h-4 text-slate-200" />
              THE TRAINING DOCTRINE
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {coach.philosophies.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80 text-sm text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-slate-300 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTA & Specialties */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={onBookSession}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-white via-slate-100 to-slate-300 text-black font-syne font-bold text-sm tracking-wider uppercase shadow-xl hover:shadow-2xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Trophy className="w-4 h-4 text-black" />
              CONTACT US
            </button>

            <div className="text-xs text-slate-400 font-medium">
              ⚡ Limited spots available for custom coaching
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
