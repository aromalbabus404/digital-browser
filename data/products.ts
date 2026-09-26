export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  price: string; // "Price on Request"
  image: string;
  specs: Record<string, string>;
  applications: string[];
  variants: string[];
}

export const productsData: Product[] = [
  {
    id: "prod-01",
    slug: "high-flow-circulation-pump",
    name: "Master Flow Variable Speed Circulation Pump",
    category: "Pumps",
    shortDesc: "Energy-efficient self-priming pool circulation pump designed for heavy continuous duty.",
    fullDesc: "Engineered for maximum thermal efficiency and low operating noise, the Master Flow Variable Speed Pump reduces energy consumption by up to 70% compared to standard single-speed pumps. Corrosion-proof composite housing.",
    price: "Price on Request",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1000&q=80",
    specs: {
      "Horsepower": "1.5 HP / 2.0 HP / 3.0 HP",
      "Flow Rate": "28 m³/hr @ 10m head",
      "Power Supply": "220V - 240V Single Phase / 415V 3-Phase",
      "Noise Level": "< 54 dB silent operation",
      "Protection": "IP55 Waterproof Rated",
    },
    applications: [
      "Residential Villa Pools",
      "Resort Infinity Pools",
      "Commercial Water Features",
    ],
    variants: [
      "1.5 HP Single Speed",
      "2.0 HP Variable Speed Smart",
      "3.0 HP Heavy Commercial 3-Phase",
    ],
  },
  {
    id: "prod-02",
    slug: "commercial-sand-filtration-tank",
    name: "Fiberglass High-Rate Sand Filter Tank",
    category: "Filters",
    shortDesc: "Heavy-duty UV-resistant fiberglass quartz sand filter with 6-position multi-port valve.",
    fullDesc: "Delivers crystal clear water by filtering down to 20-micron particles. Constructed from corrosion-resistant wound fiberglass reinforced tank with automatic air-bleed valves and heavy-duty lateral underdrain system.",
    price: "Price on Request",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1000&q=80",
    specs: {
      "Filter Diameter": "650mm / 800mm / 1200mm",
      "Filtration Area": "0.33 m² - 1.13 m²",
      "Max Working Pressure": "2.5 bar (36 psi)",
      "Media": "High Purity Quartz Sand / Glass Media",
      "Valve": "6-Way Top / Side Mount Selector",
    },
    applications: [
      "Residential & Resort Pools",
      "Hydrotherapy & Spa Installations",
      "Public & Hotel Pools",
    ],
    variants: [
      "650mm Top Mount",
      "800mm Side Mount Premium",
      "1200mm Heavy Duty Twin Tank",
    ],
  },
  {
    id: "prod-03",
    slug: "underwater-rgb-led-light",
    name: "Slim Line Submerged RGB LED Pool Light",
    category: "Pool Lighting",
    shortDesc: "Ultra-bright 18W resin-filled LED pool light with 16 color synchronization modes.",
    fullDesc: "Fitted flat against pool walls, these IP68 fully waterproof LED fixtures create vibrant ambient luminescence across the entire pool surface. Controlled via remote control or smart home app.",
    price: "Price on Request",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1000&q=80",
    specs: {
      "Wattage": "18W / 35W High Lumens",
      "Voltage": "12V AC Safe Low Voltage",
      "Waterproof Standard": "IP68 Full Submersion",
      "Lifespan": "50,000+ Operating Hours",
      "Control": "RF Remote Control & WiFi Sync",
    },
    applications: [
      "Night Swimming Mood Ambient Lighting",
      "Infinity Edge Backlight Accents",
      "Fountain & Water Shear Illuminations",
    ],
    variants: [
      "Cool Crystal White 18W",
      "Warm Amber 18W",
      "RGB Multi-Color Sync 35W",
    ],
  },
  {
    id: "prod-04",
    slug: "sheer-descent-waterfall-fountain",
    name: "Stainless Steel Sheer Descent Cascade Fountain",
    category: "Fountains",
    shortDesc: "Architectural wall-mounted stainless steel sheet waterfall feature with continuous water curtain.",
    fullDesc: "Precision engineered marine grade SS316 blade projection creating a smooth, crystal glass sheet of falling water. Enhances poolside tranquility with soothing acoustic acoustics.",
    price: "Price on Request",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    specs: {
      "Width": "300mm / 600mm / 900mm / 1200mm",
      "Material": "SS316 Marine Grade Stainless Steel",
      "Connection": "1.5 inch Inlet",
      "Flow Requirement": "4 - 12 m³/hr depending on length",
    },
    applications: [
      "Courtyard & Feature Retaining Walls",
      "Resort Entrance Waterfalls",
      "Infinity Pool Drop-Off Walls",
    ],
    variants: [
      "600mm Wall Flush Blade",
      "900mm Extended Lip Fountain",
      "1200mm RGB Backlit Water Sheet",
    ],
  },
  {
    id: "prod-05",
    slug: "anti-slip-overflow-grating",
    name: "Modular Anti-Slip Polypropylene Overflow Grating",
    category: "Overflow Gratings",
    shortDesc: "UV-stabilized anti-slip modular pool overflow channel grating for perimeter drainage.",
    fullDesc: "Designed for curved and straight channel drain gutters around pool perimeters. Made from high-density UV resistant polymer with dual-spine flexibility and anti-skid surface texture.",
    price: "Price on Request",
    image: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1000&q=80",
    specs: {
      "Width": "200mm / 250mm / 300mm",
      "Height": "25mm standard slot",
      "Material": "High-Impact UV Stabilized PP Polymer",
      "Load Class": "Non-Slip Pedestrian Heavy Duty",
    },
    applications: [
      "Infinity & Deck Overflow Channels",
      "Resort Deck Drains",
      "Commercial Pool Perimeter Gutters",
    ],
    variants: [
      "Single Spine Flexible 250mm",
      "Dual Spine Rigid 300mm",
      "Granite Finish Modular Grating",
    ],
  },
  {
    id: "prod-06",
    slug: "salt-water-chlorinator-system",
    name: "Automatic Salt Water Electrolysis Chlorinator",
    category: "Water Treatment",
    shortDesc: "Eco-friendly salt chlorination generator that transforms natural salt into gentle purifying chlorine.",
    fullDesc: "Provides soft, skin-friendly water without eye irritation or harsh chemical odors. Self-cleaning titanium cell plates with digital salinity readout and boost super-chlorination mode.",
    price: "Price on Request",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
    specs: {
      "Chlorine Output": "15g/hr / 25g/hr / 45g/hr",
      "Salinity Level": "4000 PPM optimum",
      "Cell Type": "Reverse Polarity Titanium Plates",
      "Display": "Digital LCD Salinity & Status Monitor",
    },
    applications: [
      "Private Villa Pools",
      "Skin-Sensitive Spa & Hydrotherapy",
      "Luxury Resort Installations",
    ],
    variants: [
      "15g/hr (Up to 50,000L)",
      "25g/hr (Up to 90,000L)",
      "45g/hr Commercial (Up to 160,000L)",
    ],
  },
  {
    id: "prod-07",
    slug: "automatic-robotic-pool-cleaner",
    name: "Smart Robotic Submerged Floor & Wall Cleaner",
    category: "Accessories",
    shortDesc: "Autonomous robotic pool vacuum cleaner with smart gyro navigation, floor, wall, and waterline scrubbers.",
    fullDesc: "Operates independently of pool filtration systems. Features dual scrubbing brushes, ultra-fine filter basket, and intelligent obstacle avoidance for spotless pool surfaces.",
    price: "Price on Request",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
    specs: {
      "Cleaning Scope": "Floor, Walls, Waterline",
      "Cable Length": "18m Swivel Anti-Tangle Cable",
      "Cycle Time": "2 Hours / 3 Hours",
      "Filter Micron": "20 Micron Fine Basket",
    },
    applications: [
      "Villa Swimming Pools",
      "Resort Pools with Heavy Leaf Debris",
      "Large Shape Pools",
    ],
    variants: [
      "Floor-Only Smart Robot",
      "Floor & Wall Scrubbing Robot",
      "App Controlled Smartphone Smart Robot",
    ],
  },
];
