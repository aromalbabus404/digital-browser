export interface Testimonial {
  id: string;
  author: string;
  role: string;
  location: string;
  quote: string;
  projectType: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "test-01",
    author: "Dr. K. R. Menon",
    role: "Villa Owner",
    location: "Alappuzha, Kerala",
    quote: "Master Pools transformed our backwater waterfront property with a magnificent infinity pool. Their attention to structural engineering, waterproofing, and tile craft is unmatched in Kerala.",
    projectType: "Residential Infinity Pool",
    rating: 5,
  },
  {
    id: "test-02",
    author: "Mathew Varghese",
    role: "Managing Director, Coastal Haven Resorts",
    location: "Kumarakom, Kerala",
    quote: "We commissioned Master Pools for our resort lagoon pool and spa hydrotherapy section. The team executed the project on time with impeccable water circulation and filtration systems.",
    projectType: "Resort Commercial Pool",
    rating: 5,
  },
  {
    id: "test-03",
    author: "Anjali & Rajesh Nair",
    role: "Architectural Homeowners",
    location: "Kochi, Kerala",
    quote: "The team at Master Pools designed and constructed our rooftop glass-walled lap pool on the 12th floor. The maintenance and salt water chlorinator systems run flawlessly.",
    projectType: "Rooftop Sky Pool",
    rating: 5,
  },
  {
    id: "test-04",
    author: "Suresh Kurup",
    role: "Heritage Hotel Proprietor",
    location: "Kottayam, Kerala",
    quote: "Their pool renovation team completely revived our 15-year-old hotel pool. From new Spanish blue glass tiles to LED underwater lighting and automated chemical dosing, the result is stunning.",
    projectType: "Pool Renovation & AMC",
    rating: 5,
  },
];
