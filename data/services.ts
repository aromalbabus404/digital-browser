export interface Service {
  number: string;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  ctaText: string;
}

export const servicesData: Service[] = [
  {
    number: "01",
    id: "pool-design",
    title: "Pool Design",
    subtitle: "3D Architectural Visualization & Spatial Planning",
    description: "Custom 3D CAD modeling, structural engineering blueprints, and landscape integration tailored to your property aesthetics and soil conditions.",
    features: [
      "Photorealistic 3D Renderings & Walkthroughs",
      "Hydraulic & Structural Calculations",
      "Custom Shape & Infinity Edge Layouts",
      "Material Selection & Lighting Design"
    ],
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
    ctaText: "Enquire Pool Design",
  },
  {
    number: "02",
    id: "pool-construction",
    title: "Pool Construction",
    subtitle: "Turnkey RCC Structural Build & Finishing",
    description: "End-to-end reinforced concrete construction utilizing waterproof additives, high-density shotcrete/gunite, and precision tile installation.",
    features: [
      "Monolithic Reinforced Concrete Casting",
      "Dual-Layer Elastomeric Waterproofing",
      "Spanish & Italian Mosaic Tiling",
      "Quality Assurance & Hydrostatic Testing"
    ],
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    ctaText: "Enquire Construction",
  },
  {
    number: "03",
    id: "pool-renovation",
    title: "Pool Renovation",
    subtitle: "Restoration, Retiling & System Modernization",
    description: "Transform aging or damaged pools with modern glass tile refinishing, LED upgrade retrofits, leak repair, and energy-efficient automation.",
    features: [
      "Tile Strip-down & Re-tiling",
      "Leak Detection & Structural Repair",
      "Energy-Efficient Pump Upgrades",
      "Adding Jacuzzi & Water Feature Elements"
    ],
    image: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1200&q=80",
    ctaText: "Enquire Renovation",
  },
  {
    number: "04",
    id: "pool-maintenance",
    title: "Pool Maintenance",
    subtitle: "Scheduled Servicing & Water Care AMC",
    description: "Comprehensive annual maintenance contracts (AMC) for residential villas, resorts, and commercial swimming pools across Kerala and South India.",
    features: [
      "Weekly / Bi-Weekly Vacuuming & Cleaning",
      "Filter Backwashing & Media Replacement",
      "Water Balance (pH, Chlorine, Alkalinity)",
      "Pump & Equipment Health Inspection"
    ],
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
    ctaText: "Enquire Maintenance",
  },
  {
    number: "05",
    id: "water-treatment",
    title: "Water Treatment",
    subtitle: "Salt Chlorination, UV & Chemical Balancing",
    description: "Advanced eco-friendly water purification systems eliminating harsh chemical odors, ensuring skin-friendly, crystal-clear water 365 days a year.",
    features: [
      "Natural Salt Water Chlorinators",
      "UV Disinfection & Ozone Purification",
      "Automatic Chemical Dosing Systems",
      "Copper-Silver Ionizer Installations"
    ],
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
    ctaText: "Enquire Water Treatment",
  },
  {
    number: "06",
    id: "pool-equipment",
    title: "Pool Equipment",
    subtitle: "Supply & Installation of Premium Hardware",
    description: "Authorized supply and expert installation of world-class circulation pumps, quartz sand filters, heat pumps, LED lights, and automated pool cleaners.",
    features: [
      "High-Efficiency Variable Speed Pumps",
      "Commercial Grade Sand & Cartridge Filters",
      "Submerged RGB LED Mood Lights",
      "Heat Pumps & In-Line Heaters"
    ],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    ctaText: "Enquire Pool Equipment",
  },
];
