import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { processSeamlessImage } from '../utils/imageProcessor';
import { ShieldCheck, Zap, Activity, ChevronRight, Award } from 'lucide-react';

interface CinematicLower3DSectionProps {
  onOpenBooking?: () => void;
}

export const CinematicLower3DSection: React.FC<CinematicLower3DSectionProps> = ({ onOpenBooking }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const graphic3DRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  // Image source provided by user (Athletic Titan image)
  const rawImgTitan = 'https://lh3.googleusercontent.com/d/1KsQwLjC4-onTHVxEa1iE42WAIUqI2a0z';
  const [imgTitanSrc, setImgTitanSrc] = useState(rawImgTitan);

  // Process image via Canvas background stripper for seamless dark blending
  useEffect(() => {
    processSeamlessImage(rawImgTitan, 'corner-chroma').then((url) => setImgTitanSrc(url));
  }, []);

  // GSAP Scroll Parallax & Mouse Interactive 3D Rotation
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;

      // Calculate scroll progress through section (-1 to 1)
      const progress = (rect.top - viewHeight / 2) / viewHeight;

      if (graphic3DRef.current && textContentRef.current) {
        gsap.to(graphic3DRef.current, {
          y: progress * -60,
          rotateY: -12 + progress * 16,
          rotateX: 6 + progress * -8,
          duration: 0.8,
          ease: 'power2.out',
        });

        gsap.to(textContentRef.current, {
          y: progress * -20,
          duration: 0.6,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Mouse tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;

    if (graphic3DRef.current) {
      gsap.to(graphic3DRef.current, {
        x: mouseX * 28,
        z: 30 + mouseY * -20,
        duration: 0.6,
        ease: 'power1.out',
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050507] text-white z-10 border-t border-white/5"
      style={{ perspective: '1200px' }}
    >
      {/* Seamless Ambient Top & Bottom Gradients for smooth section fading */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#050507] via-[#050507]/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#050507] via-[#050507]/80 to-transparent z-20 pointer-events-none" />

      {/* Cinematic Ambient Backdrop Lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[400px] bg-amber-400/8 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

        {/* 3D FLOATING ATHLETIC TITAN ELEMENT */}
        <div className="lg:col-span-5 flex items-center justify-center relative pointer-events-none">
          <div
            ref={graphic3DRef}
            className="relative w-72 h-80 sm:w-[360px] sm:h-[420px] lg:w-[400px] lg:h-[460px] transition-all duration-300 transform-style-3d"
            style={{
              transform: 'translate3d(0, 0, 30px) rotateY(-10deg) rotateX(4deg)',
            }}
          >
            {/* Subtle Golden Metallic Ambient Light Halo */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-amber-500/25 via-amber-300/15 to-transparent blur-3xl opacity-80" />

            <img
              src={imgTitanSrc}
              alt="3D Athletic Titan Floating Graphic"
              referrerPolicy="no-referrer"
              onError={(e) => {
                if (!e.currentTarget.src.includes('drive.google.com/uc')) {
                  e.currentTarget.src = 'https://drive.google.com/uc?export=view&id=1KsQwLjC4-onTHVxEa1iE42WAIUqI2a0z';
                }
              }}
              className="w-full h-full object-contain mix-blend-screen animate-float-slow"
              style={{
                mixBlendMode: 'screen',
                filter: 'brightness(1.22) contrast(1.35) saturate(115%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 55%, transparent 88%)',
                maskImage: 'radial-gradient(ellipse at center, black 55%, transparent 88%)',
              }}
            />

            {/* Platinum & Gold Orbital Ring */}
            <div className="absolute -inset-6 rounded-full border border-amber-400/25 border-dashed pointer-events-none animate-[spin_30s_linear_infinite]" />
          </div>
        </div>

        {/* CINEMATIC TEXT & VALUE PROPOSITION */}
        <div ref={textContentRef} className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 z-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-400 text-[11px] font-syne font-extrabold uppercase tracking-widest backdrop-blur-md shadow-xl">
            <Zap className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>ATHLETIC EVOLUTION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-black uppercase tracking-tight text-white leading-none">
            LIFT WITHOUT <br />
            <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              COMPROMISE.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed font-sans font-medium">
            Merge elite biomechanics with high-density biometric tracking. Fly Fit provides an ultra-premium training atmosphere engineered for maximum performance.
          </p>

          {/* Quick Metrics Badges - Dense 3-column Layout */}
          <div className="grid grid-cols-3 gap-3 w-full max-w-md pt-1">
            <div className="p-3 rounded-2xl bg-slate-900/90 border border-white/10 backdrop-blur-xl flex flex-col items-center lg:items-start text-center lg:text-left">
              <Activity className="w-4 h-4 text-amber-400 mb-1" />
              <span className="text-xs sm:text-sm font-syne font-extrabold text-white">100%</span>
              <span className="text-[9px] sm:text-[10px] text-slate-400 font-medium leading-tight">Precision Gear</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-900/90 border border-white/10 backdrop-blur-xl flex flex-col items-center lg:items-start text-center lg:text-left">
              <ShieldCheck className="w-4 h-4 text-yellow-400 mb-1" />
              <span className="text-xs sm:text-sm font-syne font-extrabold text-white">PRO</span>
              <span className="text-[9px] sm:text-[10px] text-slate-400 font-medium leading-tight">Elite Coaching</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-900/90 border border-white/10 backdrop-blur-xl flex flex-col items-center lg:items-start text-center lg:text-left">
              <Award className="w-4 h-4 text-amber-300 mb-1" />
              <span className="text-xs sm:text-sm font-syne font-extrabold text-white">24 / 7</span>
              <span className="text-[9px] sm:text-[10px] text-slate-400 font-medium leading-tight">VIP Access</span>
            </div>
          </div>

          {/* Action CTA */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="mt-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-black font-syne font-extrabold text-xs uppercase tracking-wider shadow-2xl hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 group cursor-pointer"
          >
            <span>RÉSERVER UNE SÉANCE GO LIVE</span>
            <ChevronRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
