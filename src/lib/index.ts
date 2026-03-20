export const ROUTE_PATHS = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  GALLERY: '/gallery',
  PRICING: '/pricing',
  CONTACT: '/contact',
} as const;

export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  icon: string;
  images: string[];
  featured?: boolean;
  available: boolean;
}

export interface PricingPackage {
  id: string;
  vehicleType: 'hatchback' | 'sedan' | 'suv';
  title: string;
  basePrice: number;
  features: string[];
  durations: {
    oneYear: number;
    threeYears: number;
    fiveYears: number;
  };
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
  date: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'coating' | 'ppf' | 'detailing' | 'wrapping';
  beforeAfter?: {
    before: string;
    after: string;
  };
}

export const services: Service[] = [
  {
    id: 'ceramic-coating',
    title: 'Ceramic Coating',
    description: '9H hardness nano-ceramic protection that creates a permanent bond with your vehicle\'s paint, providing unmatched gloss and hydrophobic properties.',
    available: true,
    benefits: [
      '9H hardness protection against scratches',
      'Hydrophobic water-beading effect',
      'UV protection prevents paint fading',
      'Chemical resistance against contaminants',
      'Enhanced gloss and depth',
      'Easy maintenance and cleaning',
    ],
    icon: 'shield',
    images: [
      'CERAMIC_COATING_1',
      'CERAMIC_COATING_2',
      'CERAMIC_COATING_3',
      'CERAMIC_COATING_4',
    ],
    featured: true,
  },
  {
    id: 'graphene-coating',
    title: 'Graphene Coating',
    description: 'Next-generation nano-technology coating with graphene particles for superior heat dissipation, water repellency, and anti-static properties.',
    available: true,
    benefits: [
      'Advanced graphene nano-technology',
      'Superior heat dissipation',
      'Enhanced water repellency',
      'Anti-static properties reduce dust',
      'Longer durability than ceramic',
      'Self-cleaning effect',
    ],
    icon: 'atom',
    images: [
      'CERAMIC_COATING_5',
      'CERAMIC_COATING_6',
      'CERAMIC_COATING_7',
      'CERAMIC_COATING_8',
    ],  
    featured: true,
  },
  {
    id: 'ppf',
    title: 'Paint Protection Film (PPF)',
    description: 'Self-healing clear urethane film that protects your vehicle\'s paint from rock chips, scratches, and environmental damage.',
    available: true,
    benefits: [
      'Self-healing technology',
      'Invisible protection layer',
      'Rock chip and scratch resistance',
      'Maintains original paint finish',
      'Removable without damage',
      '10-year warranty available',
    ],
    icon: 'layers',
    images: [
      'PPF_SERVICE_1',
      'PPF_SERVICE_2',
      'PPF_SERVICE_3',
      'PPF_SERVICE_4',
    ],
    featured: true,
  },
  {
    id: 'vinyl-wrapping',
    title: 'Vinyl Wrapping',
    description: 'Complete color change or custom design wraps using premium vinyl films. Transform your vehicle\'s appearance while protecting the original paint.',
    available: false,
    benefits: [
      'Unlimited color options',
      'Custom designs and patterns',
      'Protects original paint',
      'Fully reversible',
      'Cost-effective alternative to paint',
      'Matte, gloss, or satin finishes',
    ],
    icon: 'palette',
    images: [
      'VINYL_WRAP_1',
      'VINYL_WRAP_2',
      'VINYL_WRAP_3',
      'VINYL_WRAP_4',
    ],
  },
  {
    id: 'interior-detailing',
    title: 'Interior & Exterior Detailing',
    description: 'Comprehensive deep cleaning and restoration of your vehicle\'s interior and exterior surfaces to showroom condition.',
    available: false,
    benefits: [
      'Deep cleaning of all surfaces',
      'Leather conditioning and protection',
      'Carpet and upholstery shampooing',
      'Engine bay detailing',
      'Headlight restoration',
      'Trim and plastic restoration',
    ],
    icon: 'sparkles',
    images: [
      'INTERIOR_DETAILING_1',
      'INTERIOR_DETAILING_2',
      'INTERIOR_DETAILING_3',
      'INTERIOR_DETAILING_4',
    ],
  },
  {
    id: 'performance-upgrades',
    title: 'Performance Upgrades',
    description: 'Aesthetic performance enhancements including carbon fiber accents, custom exhaust tips, and aerodynamic components.',
    available: false,
    benefits: [
      'Carbon fiber components',
      'Custom exhaust systems',
      'Aerodynamic body kits',
      'Performance brake calipers',
      'Custom wheel packages',
      'Professional installation',
    ],
    icon: 'zap',
    images: [
      'GALLERY_CAR_1',
      'GALLERY_CAR_2',
      'GALLERY_CAR_3',
      'GALLERY_CAR_4',
    ],
  },
  {
    id: 'customization',
    title: 'Car Customization',
    description: 'Personalize your vehicle with custom lighting, interior upgrades, and unique styling elements.',
    available: false,
    benefits: [
      'Custom LED lighting',
      'Interior ambient lighting',
      'Custom upholstery',
      'Personalized badges and emblems',
      'Unique styling elements',
      'Tailored to your vision',
    ],
    icon: 'settings',
    images: [
      'GALLERY_CAR_5',
      'GALLERY_CAR_6',
      'GALLERY_CAR_7',
      'GALLERY_CAR_8',
    ],
  },
  {
    id: 'denting-painting',
    title: 'Denting & Painting',
    description: 'Expert body repair and color-matched painting services to restore your vehicle to perfect condition.',
    available: false,
    benefits: [
      'Paintless dent removal',
      'Body panel repair',
      'Color-matched painting',
      'Clear coat application',
      'Rust treatment',
      'Factory-quality finish',
    ],
    icon: 'wrench',
    images: [
      'BEFORE_AFTER_1',
      'BEFORE_AFTER_2',
      'BEFORE_AFTER_3',
      'BEFORE_AFTER_4',
    ],
  },
  {
    id: 'premium-wash',
    title: 'Premium Car Wash',
    description: 'Maintenance wash packages with pH-neutral products, foam cannon pre-wash, and hand drying for a perfect finish.',
    available: true,
    benefits: [
      'pH-neutral products',
      'Foam cannon pre-wash',
      'Two-bucket hand wash',
      'Wheel and tire cleaning',
      'Hand drying with microfiber',
      'Quick detailer spray finish',
    ],
    icon: 'droplet',
    images: [
      'WORKSHOP_1',
      'WORKSHOP_2',
      'WORKSHOP_3',
      'WORKSHOP_4',
    ],
  },
];

export const pricingPackages: PricingPackage[] = [
  {
    id: 'hatchback-package',
    vehicleType: 'hatchback',
    title: 'Hatchback Package',
    basePrice: 15000,
    features: [
      'Complete exterior ceramic coating',
      'Paint correction and polishing',
      'Wheel and caliper coating',
      'Glass coating',
      'Interior protection',
      '1-year maintenance kit',
    ],
    durations: {
      oneYear: 15000,
      threeYears: 25000,
      fiveYears: 35000,
    },
  },
  {
    id: 'sedan-package',
    vehicleType: 'sedan',
    title: 'Sedan Package',
    basePrice: 20000,
    features: [
      'Complete exterior ceramic coating',
      'Paint correction and polishing',
      'Wheel and caliper coating',
      'Glass coating',
      'Interior protection',
      'Engine bay detailing',
      '2-year maintenance kit',
    ],
    durations: {
      oneYear: 20000,
      threeYears: 32000,
      fiveYears: 45000,
    },
    popular: true,
  },
  {
    id: 'suv-package',
    vehicleType: 'suv',
    title: 'SUV Package',
    basePrice: 28000,
    features: [
      'Complete exterior ceramic coating',
      'Paint correction and polishing',
      'Wheel and caliper coating',
      'Glass coating',
      'Interior protection',
      'Engine bay detailing',
      'Undercarriage protection',
      '3-year maintenance kit',
    ],
    durations: {
      oneYear: 28000,
      threeYears: 42000,
      fiveYears: 58000,
    },
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Rajesh Patel',
    role: 'BMW 5 Series Owner',
    content: 'Desai Car Detailing transformed my BMW! The ceramic coating is absolutely stunning. The water beading effect is mesmerizing, and the paint looks deeper than ever. Best investment for my car!',
    rating: 5,
    date: '2026-02-15',
  },
  {
    id: 'testimonial-2',
    name: 'Priya Shah',
    role: 'Audi Q7 Owner',
    content: 'Professional service from start to finish. The PPF installation was flawless, and the team took great care of my Audi. Highly recommend Desai Car Detailing for anyone serious about paint protection.',
    rating: 5,
    date: '2026-01-28',
  },
  {
    id: 'testimonial-3',
    name: 'Karan Mehta',
    role: 'Mercedes-Benz C-Class Owner',
    content: 'The graphene coating exceeded my expectations. My Mercedes stays cleaner longer, and the shine is incredible. The Desai team is knowledgeable and passionate about their work.',
    rating: 5,
    date: '2026-02-10',
  },
  {
    id: 'testimonial-4',
    name: 'Emily Thompson',
    role: 'Mercedes-Benz Owner',
    content: 'Outstanding attention to detail! The interior detailing brought my car back to showroom condition. Every surface was meticulously cleaned and protected.',
    rating: 5,
    date: '2026-01-20',
  },
  {
    id: 'testimonial-5',
    name: 'James Anderson',
    role: 'Audi RS6 Owner',
    content: 'The vinyl wrap transformation is mind-blowing. The quality of work and precision is top-notch. My RS6 turns heads everywhere I go now.',
    rating: 5,
    date: '2026-02-05',
  },
  {
    id: 'testimonial-6',
    name: 'Lisa Martinez',
    role: 'Range Rover Owner',
    content: 'Best detailing studio in the city! The team is professional, the facility is immaculate, and the results speak for themselves. My Range Rover has never looked better.',
    rating: 5,
    date: '2026-01-18',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Jayesh Desai',
    role: 'Master Detailer & Founder',
    bio: 'With over 23 years of experience in automotive detailing and ceramic coating, Jayesh founded Desai Car Detailing in 2003 to bring premium car care to Ahmedabad\'s luxury vehicle owners.',
    image: 'WORKSHOP_5',
    specialties: ['Ceramic Coating', 'Paint Correction', 'Business Strategy'],
  },
  {
    id: 'team-2',
    name: 'Marcus Johnson',
    role: 'PPF Installation Specialist',
    bio: 'Certified PPF installer with 10+ years of experience. Marcus has protected over 500 luxury vehicles with precision film installation.',
    image: 'WORKSHOP_6',
    specialties: ['Paint Protection Film', 'Precision Installation', 'Quality Control'],
  },
  {
    id: 'team-3',
    name: 'Sofia Ramirez',
    role: 'Interior Detailing Expert',
    bio: 'Specialist in luxury interior restoration and protection. Sofia\'s attention to detail ensures every surface is perfectly cleaned and conditioned.',
    image: 'WORKSHOP_7',
    specialties: ['Interior Detailing', 'Leather Care', 'Fabric Protection'],
  },
  {
    id: 'team-4',
    name: 'Ryan Cooper',
    role: 'Vinyl Wrap Artist',
    bio: 'Creative vinyl wrap specialist with a passion for custom designs. Ryan has transformed hundreds of vehicles with stunning color changes and patterns.',
    image: 'WORKSHOP_8',
    specialties: ['Vinyl Wrapping', 'Custom Designs', 'Color Matching'],
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 'gallery-1',
    src: 'BEFORE_AFTER_1',
    alt: 'Ceramic coating transformation',
    category: 'coating',
    beforeAfter: {
      before: 'BEFORE_AFTER_1',
      after: 'CERAMIC_COATING_1',
    },
  },
  {
    id: 'gallery-2',
    src: 'PPF_SERVICE_1',
    alt: 'Paint protection film installation',
    category: 'ppf',
  },
  {
    id: 'gallery-3',
    src: 'INTERIOR_DETAILING_1',
    alt: 'Luxury interior detailing',
    category: 'detailing',
  },
  {
    id: 'gallery-4',
    src: 'VINYL_WRAP_1',
    alt: 'Custom vinyl wrap',
    category: 'wrapping',
  },
  {
    id: 'gallery-5',
    src: 'CERAMIC_COATING_2',
    alt: 'Graphene coating shine',
    category: 'coating',
  },
  {
    id: 'gallery-6',
    src: 'PPF_SERVICE_2',
    alt: 'Full front PPF coverage',
    category: 'ppf',
  },
  {
    id: 'gallery-7',
    src: 'INTERIOR_DETAILING_2',
    alt: 'Leather conditioning',
    category: 'detailing',
  },
  {
    id: 'gallery-8',
    src: 'VINYL_WRAP_2',
    alt: 'Matte black wrap',
    category: 'wrapping',
  },
  {
    id: 'gallery-9',
    src: 'BEFORE_AFTER_2',
    alt: 'Paint correction before after',
    category: 'coating',
    beforeAfter: {
      before: 'BEFORE_AFTER_2',
      after: 'CERAMIC_COATING_3',
    },
  },
  {
    id: 'gallery-10',
    src: 'PPF_SERVICE_3',
    alt: 'Headlight PPF protection',
    category: 'ppf',
  },
  {
    id: 'gallery-11',
    src: 'INTERIOR_DETAILING_3',
    alt: 'Dashboard restoration',
    category: 'detailing',
  },
  {
    id: 'gallery-12',
    src: 'VINYL_WRAP_3',
    alt: 'Chrome delete wrap',
    category: 'wrapping',
  },
  {
    id: 'gallery-13',
    src: 'CERAMIC_COATING_4',
    alt: 'Water beading effect',
    category: 'coating',
  },
  {
    id: 'gallery-14',
    src: 'PPF_SERVICE_4',
    alt: 'Door edge protection',
    category: 'ppf',
  },
  {
    id: 'gallery-15',
    src: 'INTERIOR_DETAILING_4',
    alt: 'Carpet deep cleaning',
    category: 'detailing',
  },
  {
    id: 'gallery-16',
    src: 'VINYL_WRAP_4',
    alt: 'Color change wrap',
    category: 'wrapping',
  },
  {
    id: 'gallery-17',
    src: 'GALLERY_CAR_1',
    alt: 'Luxury sports car showcase',
    category: 'coating',
  },
  {
    id: 'gallery-18',
    src: 'GALLERY_CAR_2',
    alt: 'Premium sedan detailing',
    category: 'detailing',
  },
  {
    id: 'gallery-19',
    src: 'GALLERY_CAR_3',
    alt: 'SUV ceramic coating',
    category: 'coating',
  },
  {
    id: 'gallery-20',
    src: 'GALLERY_CAR_4',
    alt: 'Performance car wrap',
    category: 'wrapping',
  },
];
