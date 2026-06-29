export type RegionRole = "supplier" | "customer" | "both";

export type GlobeMarker = {
  id: string;
  name: string;
  role: RegionRole;
  lat: number;
  lng: number;
  products: string[];
  headline: string;
  detail: string;
  stats?: string;
};

export const GLOBE_MARKERS: GlobeMarker[] = [
  {
    id: "vietnam",
    name: "Vietnam",
    role: "supplier",
    lat: 14.06,
    lng: 108.28,
    products: ["Yarn", "Ring Spun", "Cotton Blends"],
    headline: "Vietnam — Yarn corridor",
    detail:
      "Ring-spun and open-end cotton yarn for knitters and woven mills. Ne 20–40 counts with consistent evenness and reliable export documentation.",
    stats: "Primary supply: Yarn",
  },
  {
    id: "indonesia",
    name: "Indonesia",
    role: "supplier",
    lat: -2.5,
    lng: 118,
    products: ["Yarn", "Polyester", "Cotton Blends"],
    headline: "Indonesia — Spinning hub",
    detail:
      "Polyester and cotton-blend yarn for regional mills and re-export programs. Flexible MOQs with lab-tested specs on every shipment.",
    stats: "Primary supply: Yarn",
  },
  {
    id: "thailand",
    name: "Thailand",
    role: "supplier",
    lat: 15.87,
    lng: 100.99,
    products: ["Yarn", "Vortex", "Polyester"],
    headline: "Thailand — Yarn supply",
    detail:
      "Vortex and ring-spun programs for apparel and home textile manufacturers. Fast turnaround on count-matched orders.",
    stats: "Primary supply: Yarn",
  },
  {
    id: "china",
    name: "China",
    role: "supplier",
    lat: 35.86,
    lng: 104.2,
    products: ["Yarn", "Fabrics", "Polyester", "Knitted", "Woven"],
    headline: "China — Yarn & fabrics",
    detail:
      "Integrated yarn and fabric supply — polyester filament, cotton blends, knit and woven constructions for export houses and CMT programs.",
    stats: "Yarns + Fabrics",
  },
  {
    id: "pakistan",
    name: "Pakistan",
    role: "both",
    lat: 30.38,
    lng: 69.35,
    products: ["Yarn", "Fabrics", "Home Textiles", "Cotton"],
    headline: "Pakistan — Supply & demand",
    detail:
      "Our home base and a core corridor: cotton yarn export supply to global mills, plus inbound demand for specialty counts and greige fabrics.",
    stats: "Supplier + Customer",
  },
  {
    id: "turkiye",
    name: "Türkiye",
    role: "supplier",
    lat: 38.96,
    lng: 35.24,
    products: ["Yarn", "Fabrics", "Denim", "Workwear"],
    headline: "Türkiye — Mill-grade supply",
    detail:
      "Cotton and blended yarn, denim, and workwear fabrics for European-facing export programs with EU documentation support.",
    stats: "Yarn + Fabrics",
  },
  {
    id: "africa-supply",
    name: "Africa (Supply)",
    role: "supplier",
    lat: 6.52,
    lng: 3.38,
    products: ["Cotton", "Yarn", "Greige"],
    headline: "Africa — Sourcing network",
    detail:
      "Cotton and yarn sourcing partnerships across West and East Africa for mills serving regional and export markets.",
    stats: "Raw cotton + Yarn",
  },
  {
    id: "eu",
    name: "European Union",
    role: "customer",
    lat: 50.85,
    lng: 4.35,
    products: ["Yarn", "Fabrics", "Home Textiles"],
    headline: "EU — Import markets",
    detail:
      "Serving importers and brands across the EU with OEKO-TEX and GOTS-aligned supply chains, documented specs, and on-time delivery.",
    stats: "Customer market",
  },
  {
    id: "america",
    name: "Americas",
    role: "customer",
    lat: 39.83,
    lng: -98.58,
    products: ["Yarn", "Fabrics", "Home Textiles"],
    headline: "Americas — Export destinations",
    detail:
      "North and South American buyers sourcing yarn, greige, and home textile programs with full export documentation and shipment tracking.",
    stats: "Customer market",
  },
  {
    id: "africa-demand",
    name: "Africa (Demand)",
    role: "customer",
    lat: -1.29,
    lng: 36.82,
    products: ["Yarn", "Fabrics", "Home Textiles"],
    headline: "Africa — Growing demand",
    detail:
      "Rising import demand from textile manufacturers and retailers across Sub-Saharan Africa for yarn and finished home textile programs.",
    stats: "Customer market",
  },
];
