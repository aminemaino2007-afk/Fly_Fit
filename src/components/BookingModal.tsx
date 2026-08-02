import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, User, Mail, Phone, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTierName?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, selectedTierName }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: '2026-08-05',
    timeSlot: '10:00 AM - VIP Morning Session',
    interest: selectedTierName || 'Private Tour & 1-on-1 Coach Evaluation',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto p-5 sm:p-10 rounded-3xl bg-slate-950 border border-white/20 shadow-2xl space-y-6 text-white"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Glowing Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-400/10 rounded-full blur-3xl pointer-events-none" />

            {submitted ? (
              <div className="text-center py-10 space-y-6">
                <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mx-auto shadow-2xl animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl font-syne font-bold">APPLICATION RECEIVED</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Your request for <span className="text-white font-semibold">{formData.interest}</span> has been transmitted directly to Head Coach Asil and our VIP Concierge.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 space-y-1">
                  <div>CONFIRMATION CODE: <span className="font-mono text-white">FLYFIT-VIP-9942</span></div>
                  <div>We will reach out via phone within 2 hours.</div>
                </div>

                <button
                  onClick={handleReset}
                  className="px-8 py-3.5 rounded-xl bg-white text-black font-syne font-bold text-xs uppercase tracking-wider"
                >
                  RETURN TO WEBSITE
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-semibold uppercase text-slate-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-slate-200" />
                    CONFIDENTIAL ADMISSION
                  </div>
                  <h3 className="text-3xl font-syne font-bold">
                    RESERVE YOUR PRIVATE EXPERIENCE
                  </h3>
                  <p className="text-xs text-slate-400">
                    Select your preferred private time slot. All visits include a full facility tour & 3D biometric assessment.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-1">
                      FULL NAME
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                      <input
                        required
                        type="text"
                        placeholder="e.g. Marcus Vance"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-1">
                        EMAIL ADDRESS
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                        <input
                          required
                          type="email"
                          placeholder="executive@domain.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-white transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-1">
                        PHONE NUMBER
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                        <input
                          required
                          type="tel"
                          placeholder="+1 (555) 019-2834"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-white transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-1">
                        PREFERRED DATE
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-white transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-1">
                        TIME WINDOW
                      </label>
                      <div className="relative">
                        <Clock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                        <select
                          value={formData.timeSlot}
                          onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-white transition-colors appearance-none"
                        >
                          <option>08:00 AM - VIP Morning</option>
                          <option>10:00 AM - Midday Session</option>
                          <option>02:00 PM - Afternoon Assessment</option>
                          <option>06:00 PM - Evening Executive</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-white via-slate-100 to-slate-300 text-black font-syne font-bold text-xs uppercase tracking-wider shadow-xl hover:brightness-110 active:scale-95 transition-all mt-4"
                  >
                    CONFIRM VIP RESERVATION
                  </button>
                </form>
              </>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
