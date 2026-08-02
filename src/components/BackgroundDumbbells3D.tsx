import React, { useEffect, useRef, useState } from 'react';
import { BackgroundDumbbellConfig } from '../types';
import { processSeamlessImage } from '../utils/imageProcessor';
import rawTopLeftImgSrc from '../assets/images/dumbbell_top_cutout_1785613398786.jpg';
import rawBottomRightImgSrc from '../assets/images/dumbbell_bottom_cutout_1785613413221.jpg';

interface BackgroundDumbbells3DProps {
  config: BackgroundDumbbellConfig;
}

export const BackgroundDumbbells3D: React.FC<BackgroundDumbbells3DProps> = ({ config }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const [topLeftImgSrc, setTopLeftImgSrc] = useState(rawTopLeftImgSrc);
  const [bottomRightImgSrc, setBottomRightImgSrc] = useState(rawBottomRightImgSrc);

  useEffect(() => {
    // Process images to clean transparent PNGs
    processSeamlessImage(rawTopLeftImgSrc, 'dark-cutout').then((url) => {
      setTopLeftImgSrc(url);
    });
    processSeamlessImage(rawBottomRightImgSrc, 'dark-cutout').then((url) => {
      setBottomRightImgSrc(url);
    });
  }, [rawTopLeftImgSrc, rawBottomRightImgSrc]);

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to range -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const sensitivity = config.parallaxSensitivity;
  const depthZ = config.depth; // Base translateZ value
  const speedMult = config.rotateSpeed;

  // Calculate dynamic 3D rot & translate values for Tier 1 (Hero)
  const scrollOffsetTop = scrollY * 0.18;
  const scrollOffsetBottom = -scrollY * 0.22;

  // Parallax deltas based on mouse
  const rotXTop = mousePos.y * 25 * sensitivity;
  const rotYTop = mousePos.x * 35 * sensitivity;
  
  const rotXBottom = -mousePos.y * 30 * sensitivity;
  const rotYBottom = -mousePos.x * 25 * sensitivity;

  const transXTop = mousePos.x * 45 * sensitivity;
  const transYTop = mousePos.y * 35 * sensitivity + scrollOffsetTop;

  const transXBottom = -mousePos.x * 55 * sensitivity;
  const transYBottom = -mousePos.y * 45 * sensitivity + scrollOffsetBottom;

  // Lighting filter based on preset
  let lightingFilter = 'brightness(1.15) contrast(1.35)';
  if (config.lightingPreset === 'titanium') {
    lightingFilter = 'brightness(1.3) contrast(1.4) saturate(0.85)';
  } else if (config.lightingPreset === 'obsidian') {
    lightingFilter = 'brightness(0.9) contrast(1.45) drop-shadow(0 20px 40px rgba(0,0,0,0.9))';
  }

  // Calculate depth blur
  const blurValue = config.blurAmount + Math.abs(depthZ < 0 ? depthZ * 0.02 : 0);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden perspective-2000"
      style={{ perspective: '1200px' }}
    >
      {/* Dynamic Ambient Background Glows */}
      <div 
        className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-slate-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow"
      />
      <div 
        className="absolute bottom-1/4 right-10 w-[600px] h-[600px] bg-zinc-400/10 rounded-full blur-[160px] pointer-events-none animate-pulse-glow"
        style={{ animationDelay: '2.5s' }}
      />

      {/* ================= DUMBBELL 1: Top-Left Floating 3D Object ================= */}
      <div
        className="absolute -top-12 -left-12 sm:top-10 sm:left-10 w-48 h-48 xs:w-64 xs:h-64 sm:w-[420px] sm:h-[420px] transition-transform duration-300 ease-out transform-style-3d pointer-events-none"
        style={{
          transform: `
            translate3d(${transXTop}px, ${transYTop}px, ${depthZ}px) 
            rotateX(${rotXTop}deg) 
            rotateY(${rotYTop}deg) 
            rotateZ(-25deg)
          `,
          filter: `blur(${blurValue}px) ${lightingFilter}`,
        }}
      >
        <div className="relative w-full h-full animate-float-slow">
          {/* Subtle Metallic Halo */}
          <div className="absolute inset-2 rounded-full bg-slate-400/10 blur-2xl opacity-50 pointer-events-none" />
          
          <img
            src={topLeftImgSrc}
            alt="3D Floating Dumbbell Top Left"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain mix-blend-screen"
            style={{
              mixBlendMode: 'screen',
              filter: 'contrast(1.35) brightness(1.2) grayscale(10%)',
              WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 50%, transparent 88%)',
              maskImage: 'radial-gradient(circle at 50% 50%, black 50%, transparent 88%)',
            }}
          />

          {/* Holographic 3D Orbit Ring */}
          <div 
            className="absolute -inset-4 rounded-full border border-slate-400/20 border-dashed pointer-events-none opacity-40 animate-[spin_20s_linear_infinite]"
            style={{ animationDuration: `${20 / speedMult}s` }}
          />
        </div>
      </div>

      {/* ================= DUMBBELL 2: Bottom-Right Floating 3D Object ================= */}
      <div
        className="absolute -bottom-16 -right-16 sm:bottom-12 sm:right-12 w-56 h-56 xs:w-72 xs:h-72 sm:w-[500px] sm:h-[500px] transition-transform duration-300 ease-out transform-style-3d pointer-events-none"
        style={{
          transform: `
            translate3d(${transXBottom}px, ${transYBottom}px, ${depthZ - 40}px) 
            rotateX(${rotXBottom}deg) 
            rotateY(${rotYBottom}deg) 
            rotateZ(35deg)
          `,
          filter: `blur(${blurValue * 0.8}px) ${lightingFilter}`,
        }}
      >
        <div 
          className="relative w-full h-full animate-float-slow"
          style={{ animationDelay: '3.5s' }}
        >
          {/* Metallic Ambient Shadow */}
          <div className="absolute inset-4 rounded-full bg-slate-400/10 blur-3xl opacity-50 pointer-events-none" />

          <img
            src={bottomRightImgSrc}
            alt="3D Floating Dumbbell Bottom Right"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain mix-blend-screen"
            style={{
              mixBlendMode: 'screen',
              filter: 'contrast(1.35) brightness(1.2) grayscale(10%)',
              WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 50%, transparent 88%)',
              maskImage: 'radial-gradient(circle at 50% 50%, black 50%, transparent 88%)',
            }}
          />

          {/* Secondary Axis Circle */}
          <div 
            className="absolute -inset-6 rounded-full border border-white/15 border-dashed pointer-events-none opacity-30 animate-[spin_25s_linear_infinite_reverse]"
            style={{ animationDuration: `${25 / speedMult}s` }}
          />
        </div>
      </div>
    </div>
  );
};

