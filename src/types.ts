export interface MemberStats {
  activeMembers: number;
  totalWorkoutsCompleted: number;
  satisfactionRate: number;
  privateTrainers: number;
}

export interface Amenity {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  imageUrl: string;
  tag: string;
}

export interface MembershipTier {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  period: string;
  highlighted?: boolean;
  badge?: string;
  features: string[];
  perks: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatarUrl: string;
}

export interface BackgroundDumbbellConfig {
  depth: number; // translateZ
  rotateSpeed: number;
  blurAmount: number;
  parallaxSensitivity: number;
  lightingPreset: 'cinematic' | 'titanium' | 'obsidian';
}

export interface CoachInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  philosophies: string[];
  achievements: {
    years: number;
    athletes: number;
    championships: number;
  };
  specialties: string[];
}
