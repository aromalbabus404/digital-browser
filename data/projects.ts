export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  type: string;
  location: string;
  shortDesc: string;
  fullDesc: string;
  coverImage: string;
  gallery: string[];
  specs: {
    dimensions: string;
    depth: string;
    finish: string;
    waterVolume: string;
    specialTech: string;
  };
  features: string[];
  completionYear: string;
}

export const projectsData: Project[] = [
  {
    id: "proj-01",
    slug: "luxury-backwater-villa-pool",
    title: "LUXURY VILLA INFINITY POOL",
    category: "Residential Pools",
    type: "Infinity Swimming Pool",
    location: "Alappuzha, Kerala",
    shortDesc: "A breathtaking backwater facing infinity pool featuring blue mosaic tiling, submerged LED mood lights, and integrated hydromassage jets.",
    fullDesc: "Designed to seamlessly blend with the tranquil backwaters of Alappuzha, this high-end residential infinity pool delivers a resort-like sanctuary at home. Built with marine-grade waterproof reinforced concrete, high-clarity quartz sand filtration, and automatic salt-chlorine generator systems.",
    coverImage: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80",
    ],
    specs: {
      dimensions: "18m x 6m",
      depth: "1.2m to 2.1m variable",
      finish: "Spanish Crystal Blue Glass Mosaic",
      waterVolume: "145,000 Liters",
      specialTech: "Overflow Edge Gutter with Automatic Balance Tank",
    },
    features: [
      "LED RGB Color Changing Underwater Lighting",
      "Premium Glass Mosaic Finishing",
      "Multi-Port Quartz Sand Filtration System",
      "Eco-Friendly Salt Chlorinator Water Treatment",
      "Custom Vanishing Edge Overflow Channel",
      "Submerged Sun Deck & Jacuzzi Loungers",
    ],
    completionYear: "2024",
  },
  {
    id: "proj-02",
    slug: "heritage-resort-lagoon-pool",
    title: "HERITAGE RESORT LAGOON POOL",
    category: "Resort Pools",
    type: "Resort Commercial Pool",
    location: "Kumarakom, Kerala",
    shortDesc: "An expansive 30-meter lagoon pool designed for a luxury heritage wellness resort with natural stone coping and tropical island planters.",
    fullDesc: "This grand resort lagoon pool features expansive swim-up zones, shallow splash decks for families, and dedicated lap corridors for fitness enthusiasts. Engineered with continuous circulation pumps, heavy-duty commercial filtration, and automated pH monitoring.",
    coverImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80",
    ],
    specs: {
      dimensions: "30m x 14m",
      depth: "0.9m to 1.8m",
      finish: "Natural Slate Stone & Sky Blue Tiles",
      waterVolume: "420,000 Liters",
      specialTech: "Commercial Heavy Duty High-Rate Sand Filters",
    },
    features: [
      "Swim-Up Pool Bar & Island Seating",
      "Sheer Descent Waterfalls & Cascades",
      "Non-Slip Granite Stone Pool Deck",
      "Automatic Chemical Dosing & UV Disinfection",
      "Underwater Speaker Sound Integration",
      "Dual Shallow Kids Splash Zones",
    ],
    completionYear: "2023",
  },
  {
    id: "proj-03",
    slug: "rooftop-sky-infinity-pool",
    title: "ROOFTOP SKY INFINITY POOL",
    category: "Luxury Pools",
    type: "Elevated Structural Pool",
    location: "Kochi, Kerala",
    shortDesc: "A spectacular 15th-floor rooftop structural pool with glass-walled perimeter, panoramic city views, and night lighting accentuation.",
    fullDesc: "Engineered to strict seismic and lightweight structural standards, this rooftop sky pool creates an unforgettable impression. Complete with heat pump temperature control for year-round swimming comfort.",
    coverImage: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80",
    ],
    specs: {
      dimensions: "12m x 4.5m",
      depth: "1.3m uniform",
      finish: "Iridescent Pearl Glass Micro-Tiles",
      waterVolume: "70,000 Liters",
      specialTech: "Structural Lightweight Concrete & Heat Pump",
    },
    features: [
      "Panoramic Skyline Infinity Overflow",
      "Structural Acrylic Glass Panel Insert",
      "Year-Round Inverted Heat Pump System",
      "Ultra-Quiet Submerged Variable Speed Pumps",
      "Smart Mobile App Automation Control",
    ],
    completionYear: "2024",
  },
  {
    id: "proj-04",
    slug: "kovilakom-traditional-courtyard-pool",
    title: "TRADITIONAL COURTYARD POOL",
    category: "Residential Pools",
    type: "Architectural Heritage Pool",
    location: "Kottayam, Kerala",
    shortDesc: "A classical Kerala courtyard pool integrated with traditional teakwood architecture, bronze water spouts, and soothing natural hues.",
    fullDesc: "Demonstrating how contemporary pool technology can harmoniously coexist with traditional Kerala architecture. Features bronze fountain wall spouts, handcrafted tile work, and silent filtration.",
    coverImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=80",
    ],
    specs: {
      dimensions: "10m x 5m",
      depth: "1.2m to 1.6m",
      finish: "Cobalt Blue Terracotta Mosaic",
      waterVolume: "65,000 Liters",
      specialTech: "Silent Recirculation System",
    },
    features: [
      "Handcrafted Traditional Water Spouts",
      "Secluded Courtyard Architecture",
      "Subtle Ambient LED Wall Lighting",
      "Chemical-Free Copper-Silver Ionization",
      "Custom Timber Wood Deck Decking",
    ],
    completionYear: "2023",
  },
  {
    id: "proj-05",
    slug: "modern-minimalist-lap-pool",
    title: "MODERN MINIMALIST LAP POOL",
    category: "Residential Pools",
    type: "Architectural Lap Pool",
    location: "Trivandrum, Kerala",
    shortDesc: "A sleek 22-meter continuous lap pool designed for athletic training and contemporary architectural appeal.",
    fullDesc: "Built for active lifestyle enthusiasts, this elongated lap pool incorporates counter-current swim jets, dark charcoal tile interior, and minimalist deck surrounds.",
    coverImage: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1600&q=80",
    ],
    specs: {
      dimensions: "22m x 3.5m",
      depth: "1.4m constant depth",
      finish: "Charcoal Black Italian Tiles",
      waterVolume: "110,000 Liters",
      specialTech: "High-Performance Counter Current Turbine",
    },
    features: [
      "Heavy-Duty Swim Current Jet System",
      "Slim Perimeter Slot Drain Overflow",
      "Low Energy Variable Speed Pumps",
      "Integrated Pool Cover Roller",
      "Zero-Edge Horizon Finish",
    ],
    completionYear: "2024",
  },
  {
    id: "proj-06",
    slug: "wellness-hydrotherapy-jacuzzi-pool",
    title: "WELLNESS HYDROTHERAPY JACUZZI POOL",
    category: "Jacuzzi Pools",
    type: "Hydrotherapy Spa Pool",
    location: "Varkala, Kerala",
    shortDesc: "A heated therapeutic wellness pool with multi-zone hydrotherapy spa jets, aromatherapy inlets, and underwater LED chromotherapy.",
    fullDesc: "Designed for ultimate rejuvenation, this dual-temperature hydrotherapy pool combines a relaxing warm spa bath with hydro massage lounge beds and deep water jets.",
    coverImage: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1600&q=80",
    ],
    specs: {
      dimensions: "6m x 4m",
      depth: "1.0m spa depth",
      finish: "Turquoise Glass Micro-Tile",
      waterVolume: "24,000 Liters",
      specialTech: "Multi-Jet Hydro Massage & Electric Heat Exchanger",
    },
    features: [
      "16 High-Pressure Hydrotherapy Jets",
      "Chromotherapy Mood Lighting",
      "Ergonomic Reclining Hydro Beds",
      "Digital Touch Screen Controller",
      "Automated Ozonator Water Purification",
    ],
    completionYear: "2024",
  },
  {
    id: "proj-07",
    slug: "commercial-boutique-hotel-pool",
    title: "BOUTIQUE HOTEL HORIZON POOL",
    category: "Commercial Pools",
    type: "Commercial Infinity Pool",
    location: "Mararikulam, Kerala",
    shortDesc: "A high-capacity boutique beach hotel swimming pool featuring perimeter overflows, sun lounger islands, and night light fountain shows.",
    fullDesc: "Built to stringent international hotel safety and sanitation standards, this commercial pool accommodates heavy guest usage while maintaining crystal clear water purity 24/7.",
    coverImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
    ],
    specs: {
      dimensions: "25m x 10m",
      depth: "1.0m to 1.8m",
      finish: "Premium Sky Blue Mosaic",
      waterVolume: "320,000 Liters",
      specialTech: "Dual Automatic Backwash Sand Filter Tanks",
    },
    features: [
      "Commercial Grade Filtration Plant",
      "Dual Balance Tank Overflow System",
      "Automated Chlorine & pH Control Unit",
      "Submerged Sun Lounger Platforms",
      "Safety Non-Slip Decking Finish",
    ],
    completionYear: "2023",
  },
  {
    id: "proj-08",
    slug: "cliffside-ocean-view-infinity-pool",
    title: "CLIFFSIDE OCEAN VIEW POOL",
    category: "Infinity Pools",
    type: "Custom Engineered Infinity Pool",
    location: "Kannur, Kerala",
    shortDesc: "A gravity-defying cantilevered infinity pool perched on a coastal cliff, yielding unbroken horizons over the Arabian Sea.",
    fullDesc: "An engineering marvel featuring deep cantilevered foundation piles into coastal bed rock, structural waterproofing, and perimeter mirror water reflections.",
    coverImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80",
    ],
    specs: {
      dimensions: "16m x 6m",
      depth: "1.3m to 2.0m",
      finish: "Deep Azure Blue Mosaic",
      waterVolume: "135,000 Liters",
      specialTech: "Cantilevered Reinforced Substructure",
    },
    features: [
      "Zero-Edge Infinity Perimeter Wall",
      "Heavy Weather Marine Grade Materials",
      "Integrated Sunset Decking Bay",
      "Fiber Optic Starry Sky Pool Floor Lights",
      "High Volume Recirculation System",
    ],
    completionYear: "2024",
  },
];
