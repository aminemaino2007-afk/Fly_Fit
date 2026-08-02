import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Flame, Zap, Dumbbell, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

export const WorkoutCalculator: React.FC = () => {
  const [weightKg, setWeightKg] = useState<number>(82);
  const [goal, setGoal] = useState<'hypertrophy' | 'power' | 'longevity' | 'shred'>('power');
  const [daysPerWeek, setDaysPerWeek] = useState<number>(4);

  // Dynamic calculations
  const calculateMetrics = () => {
    let baseCalories = weightKg * 32;
    let proteinGrams = weightKg * 2.2;
    let maxPowerIndex = Math.round(weightKg * 4.8);

    if (goal === 'hypertrophy') {
      baseCalories += 450;
      proteinGrams += 25;
    } else if (goal === 'shred') {
      baseCalories -= 500;
      proteinGrams += 35;
    } else if (goal === 'power') {
      maxPowerIndex += 120;
    }

    const estimatedLoadVolume = Math.round(weightKg * daysPerWeek * 140);

    return {
      dailyCalories: Math.round(baseCalories),
      proteinGrams: Math.round(proteinGrams),
      maxPowerIndex,
      estimatedLoadVolume,
    };
  };

  const metrics = calculateMetrics();

  return (
    <section id="calculator" className="relative py-28 px-4 sm:px-8 max-w-7xl mx-auto z-10">
      
      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold tracking-widest uppercase text-slate-400">
          <Calculator className="w-3.5 h-3.5 text-slate-200" />
          BIOMETRIC PERFORMANCE DIAGNOSTIC
        </div>
        
        <h2 className="text-4xl sm:text-6xl font-syne font-bold text-white tracking-tight">
          CUSTOM PERFORMANCE <span className="text-silver-shine">ENGINE</span>
        </h2>
        
        <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg">
          Calculate your optimal metabolic threshold and customized heavy resistance load parameters.
        </p>
      </div>

      {/* Main Glass Panel */}
      <div className="rounded-3xl p-6 sm:p-10 bg-glass-card border border-white/15 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Inputs */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Body Weight Input */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-semibold">
              <span className="text-slate-300">BODYWEIGHT (KG)</span>
              <span className="text-white font-mono text-lg">{weightKg} kg</span>
            </div>
            <input
              type="range"
              min="30"
              max="140"
              value={weightKg}
              onChange={(e) => setWeightKg(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg accent-white cursor-pointer"
            />
          </div>

          {/* Goal Selector */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest block">
              PRIMARY ATHLETIC OBJECTIVE
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'power', label: 'Explosive Power', desc: 'Neural drive & max force' },
                { id: 'hypertrophy', label: 'Hypertrophy', desc: 'Lean muscular density' },
                { id: 'shred', label: 'Fat Oxidation', desc: 'Sub-6% body fat protocol' },
                { id: 'longevity', label: 'Executive Vitality', desc: 'Hormonal & VO2 max optimization' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setGoal(item.id as any)}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    goal === item.id
                      ? 'bg-white text-black border-white shadow-xl font-bold'
                      : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800 text-slate-300'
                  }`}
                >
                  <div className="text-sm font-syne">{item.label}</div>
                  <div className={`text-[11px] mt-1 ${goal === item.id ? 'text-slate-700' : 'text-slate-500'}`}>
                    {item.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Training Days */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-semibold">
              <span className="text-slate-300">TRAINING FREQUENCY</span>
              <span className="text-white font-mono text-lg">{daysPerWeek} Days / Week</span>
            </div>
            <div className="flex gap-2">
              {[2, 3, 4, 5, 6].map((num) => (
                <button
                  key={num}
                  onClick={() => setDaysPerWeek(num)}
                  className={`flex-1 py-3 rounded-xl font-syne font-bold text-sm transition-all ${
                    daysPerWeek === num
                      ? 'bg-white text-black shadow-lg'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {num}d
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Output Dashboard */}
        <div className="lg:col-span-6 bg-slate-950/80 rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
              <Sparkles className="w-4 h-4 text-slate-200" />
              BIOMETRIC OUTPUT DIAGNOSIS
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Flame className="w-4 h-4 text-amber-400" />
                  Caloric Target
                </div>
                <div className="text-3xl font-syne font-extrabold text-white">
                  {metrics.dailyCalories} <span className="text-xs font-normal text-slate-400">kcal/day</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  Protein Target
                </div>
                <div className="text-3xl font-syne font-extrabold text-white">
                  {metrics.proteinGrams} <span className="text-xs font-normal text-slate-400">g/day</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Dumbbell className="w-4 h-4 text-slate-300" />
                  Weekly Volume Load
                </div>
                <div className="text-3xl font-syne font-extrabold text-white">
                  {metrics.estimatedLoadVolume.toLocaleString()} <span className="text-xs font-normal text-slate-400">kg</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <CheckCircle className="w-4 h-4 text-slate-200" />
                  Power Rating
                </div>
                <div className="text-3xl font-syne font-extrabold text-white">
                  {metrics.maxPowerIndex} <span className="text-xs font-normal text-slate-400">pts</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <div className="text-xs text-slate-400">
              * Personalized blueprint generates custom 3D resistance curves and 1-on-1 coach tracking.
            </div>

            <a
              href="#coach"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-white via-slate-100 to-slate-300 text-black font-syne font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 shadow-lg"
            >
              <span>CLAIM BLUEPRINT WITH COACH ASIL</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>

    </section>
  );
};
