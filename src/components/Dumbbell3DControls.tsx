import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sliders, RotateCw, Layers, Eye, Sparkles, ChevronDown, RefreshCw } from 'lucide-react';
import { BackgroundDumbbellConfig } from '../types';

interface Dumbbell3DControlsProps {
  config: BackgroundDumbbellConfig;
  onChange: (updated: BackgroundDumbbellConfig) => void;
  onReset: () => void;
}

export const Dumbbell3DControls: React.FC<Dumbbell3DControlsProps> = ({ config, onChange, onReset }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 backdrop-blur-md shadow-2xl text-xs font-semibold text-slate-200 transition-all hover:scale-105 active:scale-95 group"
      >
        <Sliders className="w-4 h-4 text-slate-300 group-hover:rotate-45 transition-transform" />
        <span>3D DUMBBELL ENGINE</span>
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Control Panel Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-14 left-0 w-80 p-5 rounded-2xl bg-glass-card border border-white/15 backdrop-blur-2xl shadow-2xl space-y-4 text-xs text-slate-200"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 font-syne font-bold tracking-wider text-white">
                <Sparkles className="w-4 h-4 text-slate-300" />
                3D CAMERA & PARALLAX
              </div>
              <button
                onClick={onReset}
                title="Reset to Default"
                className="p-1 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Depth Z-Distance Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between font-medium">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Layers className="w-3.5 h-3.5" />
                  3D Camera Z-Depth
                </span>
                <span className="font-mono text-slate-200">{config.depth}px</span>
              </div>
              <input
                type="range"
                min="-300"
                max="100"
                step="10"
                value={config.depth}
                onChange={(e) => onChange({ ...config, depth: Number(e.target.value) })}
                className="w-full accent-white bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Rotation Speed Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between font-medium">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <RotateCw className="w-3.5 h-3.5" />
                  Rotation Orbit Speed
                </span>
                <span className="font-mono text-slate-200">{config.rotateSpeed}x</span>
              </div>
              <input
                type="range"
                min="0.2"
                max="3"
                step="0.1"
                value={config.rotateSpeed}
                onChange={(e) => onChange({ ...config, rotateSpeed: Number(e.target.value) })}
                className="w-full accent-white bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Parallax Sensitivity Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between font-medium">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Eye className="w-3.5 h-3.5" />
                  Mouse Parallax Reactivity
                </span>
                <span className="font-mono text-slate-200">{config.parallaxSensitivity}x</span>
              </div>
              <input
                type="range"
                min="0"
                max="2.5"
                step="0.1"
                value={config.parallaxSensitivity}
                onChange={(e) => onChange({ ...config, parallaxSensitivity: Number(e.target.value) })}
                className="w-full accent-white bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Cinematic Lighting Preset Selection */}
            <div className="space-y-1.5 pt-1">
              <label className="text-slate-400 font-medium block">Studio Lighting Mode</label>
              <div className="grid grid-cols-3 gap-1.5">
                {(['cinematic', 'titanium', 'obsidian'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => onChange({ ...config, lightingPreset: mode })}
                    className={`py-1.5 px-2 rounded-lg capitalize text-center font-medium transition-all ${
                      config.lightingPreset === mode
                        ? 'bg-white text-black font-bold shadow-md'
                        : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
