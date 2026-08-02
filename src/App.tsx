/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { BackgroundDumbbells3D } from './components/BackgroundDumbbells3D';
import { HeaderNavbar } from './components/HeaderNavbar';
import { HeroSection } from './components/HeroSection';
import { MembershipSection } from './components/MembershipSection';
import { WorkoutCalculator } from './components/WorkoutCalculator';
import { LocationSection } from './components/LocationSection';
import { CinematicLower3DSection } from './components/CinematicLower3DSection';
import { GymGallerySection } from './components/GymGallerySection';
import { TrainersGallerySection } from './components/TrainersGallerySection';
import { BookingModal } from './components/BookingModal';
import { FooterSection } from './components/FooterSection';
import {
  initialMemberStats,
  initialMembershipTiers,
} from './data';
import { BackgroundDumbbellConfig, MembershipTier } from './types';

export default function App() {
  // Booking modal state
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTierName, setSelectedTierName] = useState<string>('');

  // Background 3D Dumbbells Configuration
  const defaultConfig: BackgroundDumbbellConfig = {
    depth: -80,
    rotateSpeed: 1,
    blurAmount: 0.5,
    parallaxSensitivity: 1,
    lightingPreset: 'cinematic',
  };

  const [dumbbellConfig, setDumbbellConfig] = useState<BackgroundDumbbellConfig>(defaultConfig);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleScrollToContact = () => {
    const footerEl = document.getElementById('footer') || document.getElementById('location');
    if (footerEl) {
      footerEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  const handleSelectTier = (_tier: MembershipTier) => {
    handleScrollToContact();
  };

  const handleExploreMembership = () => {
    const elem = document.getElementById('membership');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050507] text-slate-100 relative selection:bg-slate-200 selection:text-black font-sans">
      
      {/* 3D FLOATING BACKGROUND DUMBBELLS ENGINE */}
      <BackgroundDumbbells3D config={dumbbellConfig} />

      {/* HEADER NAVBAR */}
      <HeaderNavbar onOpenBooking={handleScrollToContact} />

      {/* MAIN CONTENT WRAPPER */}
      <main className="relative z-10">
        {/* HERO BANNER SECTION */}
        <HeroSection
          stats={initialMemberStats}
          onOpenBooking={handleScrollToContact}
          onExploreMembership={handleExploreMembership}
        />

        {/* TRAINERS TEAM GALLERY */}
        <TrainersGallerySection
          onBookSession={handleScrollToContact}
        />

        {/* GYM INFRASTRUCTURE & FACILITIES PHOTOS */}
        <GymGallerySection />

        {/* BIOMETRIC WORKOUT & CALORIE CALCULATOR */}
        <WorkoutCalculator />

        {/* CINEMATIC LOWER 3D EXPERIENCE */}
        <CinematicLower3DSection onOpenBooking={handleScrollToContact} />

        {/* MEMBERSHIP TIERS */}
        <MembershipSection
          tiers={initialMembershipTiers}
          onSelectTier={handleSelectTier}
        />

        {/* GOOGLE MAPS LOCATION & BUSINESS INFORMATION */}
        <LocationSection />
      </main>

      {/* FOOTER */}
      <FooterSection />

      {/* RESERVATION / BOOKING MODAL */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedTierName={selectedTierName}
      />

    </div>
  );
}

