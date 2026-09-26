export interface PoolCategory {
  number: string;
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
}

export const poolCollectionData: PoolCategory[] = [
  {
    number: "01",
    id: "residential-pools",
    name: "Residential Pools",
    subtitle: "Private Villa Sanctuary & Family Swimming",
    description: "Custom engineered swimming pools designed for private residences, featuring child-safe splash areas, ambient LED lights, and custom deck integrating with garden landscapes.",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
    features: ["Custom Tailored Geometry", "Child Safety Bench Ledges", "Low Maintenance Filtration"],
  },
  {
    number: "02",
    id: "infinity-pools",
    name: "Infinity Pools",
    subtitle: "Horizon Edges & Vanishing Spillways",
    description: "Seamless water-horizon integration capturing lake, ocean, or green landscape vistas. Built with custom overflow surge tanks and zero-edge weir channels.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    features: ["Vanishing Edge Horizon", "Surge Tank Automation", "Granite Spillway Tiling"],
  },
  {
    number: "03",
    id: "resort-pools",
    name: "Resort Pools",
    subtitle: "Hospitality Lagoons & Swim-Up Lounges",
    description: "Expansive water bodies for luxury resorts and boutique hotels, incorporating island sun decks, swim-up bars, continuous circulation, and LED light shows.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    features: ["High Capacity Filtration", "Swim-Up Pool Bar Bay", "Multi-Depth Water Zones"],
  },
  {
    number: "04",
    id: "commercial-pools",
    name: "Commercial Pools",
    subtitle: "Sports, Clubs & High-Traffic Water Complexes",
    description: "Heavy-duty commercial pools meeting international Olympic & FINA standards, equipped with high-rate sand filters, dual chemical dosing, and anti-wave racing lanes.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    features: ["Heavy Duty Commercial Pumps", "Automated Water Chemistry", "Standard Anti-Slip Deck"],
  },
  {
    number: "05",
    id: "luxury-pools",
    name: "Luxury Pools",
    subtitle: "Rooftop Sky Basins & Architectural Masterpieces",
    description: "Bespoke structural pools with transparent acrylic glass windows, temperature heat pumps, underwater fiber optic starry ceilings, and premium imported tiles.",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
    features: ["Acrylic Glass Panels", "Inverted Heat Pumps", "Smart Phone Mobile Control"],
  },
  {
    number: "06",
    id: "jacuzzi-pools",
    name: "Jacuzzi Pools",
    subtitle: "Hydrotherapy Spas & Thermal Wellness Basins",
    description: "Relaxing hydro massage spa tubs with targeted water/air jet nozzles, ergonomic lounger benches, heated water control, and soothing chromotherapy.",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
    features: ["Multi-Point Hydro Massage", "Electric & Heat Pump Heating", "Ozone Disinfection"],
  },
];
