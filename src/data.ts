import { Amenity, CoachInfo, MemberStats, MembershipTier } from './types';

export const initialMemberStats: MemberStats = {
  activeMembers: 146,
  totalWorkoutsCompleted: 48920,
  satisfactionRate: 99.8,
  privateTrainers: 12,
};

export const initialCoachInfo: CoachInfo = {
  name: 'Coach Asil',
  title: 'Founder & Head Performance Director',
  subtitle: 'Master Strength Specialist & Elite Biomechanics Director',
  bio: 'With over 15 years of dedicated elite athletic coaching, Coach Asil has guided hundreds of athletes and visionaries to peak physical performance. His signature methodology pairs functional strength programming with high-energy motivation, precision movement patterns, and custom body composition strategies.',
  philosophies: [
    'Authentic athletic passion and motivational mentorship',
    'Biomechanical alignment tailored to individual anatomy',
    'Progressive overload paired with metabolic efficiency',
    'Holistic recovery protocols for sustainable vitality',
  ],
  achievements: {
    years: 15,
    athletes: 2800,
    championships: 18,
  },
  specialties: [
    'Personalized Athletic Strength',
    'Physique Transformation',
    'Metabolic Conditioning',
    'Functional Mobility & Recovery',
  ],
};

export const initialAmenities: Amenity[] = [
  {
    id: 'biometrics',
    title: 'Biometric & DXA Scan Lab',
    category: 'Biometrics',
    tag: 'DIAGNOSTICS',
    description: 'Full medical-grade bone density, visceral fat, muscle symmetry, and hormonal metabolic profiling performed monthly.',
    imageUrl: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80',
    features: ['3D Skeletal Alignment Mapping', 'Cellular Hydration Analysis', 'Continuous Lactate Threshold Testing', 'Hormonal Biomarker Tracking'],
  },
  {
    id: 'cryo',
    title: 'Sub-Zero Cryo & Infrared Suite',
    category: 'Recovery',
    tag: 'HYPER-RECOVERY',
    description: '-160°C liquid nitrogen whole-body cryotherapy paired with full-spectrum infrared therapy for accelerated cellular recovery.',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    features: ['Sub-Zero Cryo Chamber', 'Infrared Sauna Pods', 'Pneumatic Compression Therapy', 'Hyperbaric Oxygen Chamber'],
  },
  {
    id: 'heavy-iron',
    title: 'Private Heavy Iron Studio',
    category: 'Training',
    tag: 'STRENGTH',
    description: 'Custom-forged 3D matte black dumbbells, calibrated competition plates, and biomechanical machines designed for absolute resistance.',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    features: ['Custom Stainless Steel Dumbbell Sets', 'Calibrated Steel Plates', 'Eleiko Power Racks', 'Acoustic Sound Isolation Bays'],
  },
  {
    id: 'vip-lounge',
    title: 'Platinum Wellness Bar & Lounge',
    category: 'Lounge',
    tag: 'NUTRITION',
    description: 'Post-workout peptide shakes, organic cold-pressed tonics, executive workspaces, and private biometric lockers.',
    imageUrl: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80',
    features: ['Customized Amino Acid Shakes', 'Private Executive Workstations', 'Keyless Biometric Lockers', 'Eucalyptus Steam Showers'],
  },
];

export const initialMembershipTiers: MembershipTier[] = [
  {
    id: 'monthly',
    name: 'OFFRE 1 MOIS',
    subtitle: 'Accès complet à toutes les zones Fly Fit',
    price: '70 TND',
    period: 'MOIS',
    features: [
      'Accès illimité au plateau musculation & cardio',
      'Accès à la zone Cross-Training',
      'Bilan corporel et orientation initiale',
      'Vestiaires avec douches et casiers',
    ],
    perks: ['Accès 7j/7', 'Bilan initial'],
  },
  {
    id: 'quarterly',
    name: 'OFFRE 3 MOIS',
    subtitle: 'La formule la plus demandée',
    price: '180 TND',
    period: '3 MOIS',
    highlighted: true,
    badge: 'POPULAIRE (60 TND / MOIS)',
    features: [
      'Tous les avantages de la formule 1 Mois',
      'Économisez 30 TND par rapport au tarif mensuel',
      'Suivi de progression biométrique offert',
      'Invitation offerte pour 1 invité',
    ],
    perks: ['Économisez 30 TND', 'Suivi offert'],
  },
  {
    id: 'annual',
    name: 'OFFRE 1 AN',
    subtitle: 'Meilleur tarif - Économie maximale',
    price: '420 TND',
    period: 'AN',
    badge: 'MEILLEUR TARIF (35 TND / MOIS)',
    features: [
      'Accès illimité pendant 12 mois complets',
      'Équivalent à seulement 35 TND / mois',
      'Suspension d’abonnement possible (jusqu’à 30 jours)',
      'Accès prioritaire aux nouveautés et événements',
    ],
    perks: ['35 TND/mois seulement', 'Gel d’abonnement'],
  },
];
