export interface YarnProduct {
  id: string;
  name: string;
  slug: string;
  description: string;
  applications: string[];
  counts: string[];
  composition: string;
  packaging: string;
  specifications: Record<string, string>;
  color: string;
}

export const yarnProducts: YarnProduct[] = [
  {
    id: "cotton",
    name: "Cotton Yarn",
    slug: "cotton-yarn",
    description:
      "Premium ring-spun and combed cotton yarn for superior softness, strength, and consistency across all counts.",
    applications: ["Knitwear", "Woven fabrics", "Denim", "Home textiles", "Baby garments"],
    counts: ["Ne 10s–80s", "Nm 15–120", "Tex 20–100"],
    composition: "100% Cotton (Combed / Carded / Organic)",
    packaging: "Cones (1.5–2.5 kg), Hanks, Palletized cartons",
    specifications: {
      Twist: "Z-twist, S-twist available",
      Strength: "≥ 280 cN/tex",
      Evenness: "CV% ≤ 12",
      Moisture: "8.5% ± 0.5%",
    },
    color: "#F36A3D",
  },
  {
    id: "polyester",
    name: "Polyester Yarn",
    slug: "polyester-yarn",
    description:
      "High-tenacity polyester filament and spun yarn engineered for durability, color fastness, and industrial performance.",
    applications: ["Sportswear", "Industrial textiles", "Upholstery", "Technical fabrics"],
    counts: ["150D–600D", "Ne 20s–60s", "DTY / FDY / POY"],
    composition: "100% Polyester (Virgin / Recycled)",
    packaging: "Paper cones, Cheese cones, Export pallets",
    specifications: {
      Tenacity: "≥ 4.5 g/den",
      Elongation: "20–35%",
      Shrinkage: "≤ 3%",
      Luster: "Semi-dull / Bright / Trilobal",
    },
    color: "#FF8C5A",
  },
  {
    id: "compact",
    name: "Compact Yarn",
    slug: "compact-yarn",
    description:
      "Compact-spun yarn with reduced hairiness and superior surface smoothness for premium woven and knit applications.",
    applications: ["Fine shirting", "Premium knitwear", "Luxury bedding", "High-end apparel"],
    counts: ["Ne 30s–120s", "Nm 50–200"],
    composition: "100% Cotton Compact / Cotton-Poly Compact",
    packaging: "Precision-wound cones, Vacuum-sealed export cartons",
    specifications: {
      Hairiness: "H value ≤ 3.0",
      Imperfections: "IPI ≤ 25",
      Strength: "≥ 18 g/tex",
      Uster: "25% / 5% ring",
    },
    color: "#FFB088",
  },
  {
    id: "open-end",
    name: "Open-End Yarn",
    slug: "open-end-yarn",
    description:
      "Cost-effective rotor-spun yarn delivering consistent quality for high-volume manufacturing and denim production.",
    applications: ["Denim", "Workwear", "Towels", "Industrial fabrics", "Budget apparel"],
    counts: ["Ne 6s–30s", "Nm 10–50"],
    composition: "100% Cotton OE / Cotton-Poly OE",
    packaging: "Large cones (2–5 kg), Bulk pallet shipments",
    specifications: {
      Strength: "≥ 12 cN/tex",
      Evenness: "CV% ≤ 14",
      Twist: "Optimized for fabric type",
      Production: "High-volume capacity",
    },
    color: "#E85D2C",
  },
  {
    id: "blended",
    name: "Blended Yarn",
    slug: "blended-yarn",
    description:
      "Precision-engineered cotton-poly, cotton-viscose, and specialty blends balancing performance, comfort, and cost.",
    applications: ["Corporate uniforms", "Casual wear", "Home furnishing", "Mixed-fiber fabrics"],
    counts: ["Ne 16s–60s", "Custom ratios available"],
    composition: "CVC, PC, PV, Modal blends",
    packaging: "Standard & custom cone weights",
    specifications: {
      BlendRatio: "65/35, 60/40, 50/50, Custom",
      Dyeability: "Reactive / Disperse compatible",
      Shrinkage: "Controlled per blend",
      Custom: "Lab-dip matching available",
    },
    color: "#D94E1F",
  },
  {
    id: "melange",
    name: "Melange Yarn",
    slug: "melange-yarn",
    description:
      "Heather and marl-effect yarns with consistent color blending for distinctive visual texture without additional dyeing.",
    applications: ["Casual apparel", "Sportswear", "Sweaters", "Fashion knitwear"],
    counts: ["Ne 20s–40s", "Nm 30–70"],
    composition: "Cotton melange, Poly melange, Multi-fiber",
    packaging: "Color-coded cones, Shade lot tracking",
    specifications: {
      ShadeConsistency: "ΔE ≤ 1.0 within lot",
      FiberMix: "2–4 color fibers",
      Fastness: "Grade 4+ washing",
      CustomShades: "Pantone matching",
    },
    color: "#C44520",
  },
];

export const yarnComparisonFields = [
  "Strength",
  "Applications",
  "Best For",
  "Lead Time",
  "MOQ",
] as const;

export const yarnComparisonData = [
  {
    product: "Cotton Yarn",
    Strength: "High",
    Applications: "Apparel, Home",
    "Best For": "Premium quality",
    "Lead Time": "2–3 weeks",
    MOQ: "5,000 kg",
  },
  {
    product: "Polyester Yarn",
    Strength: "Very High",
    Applications: "Technical, Sport",
    "Best For": "Durability",
    "Lead Time": "1–2 weeks",
    MOQ: "3,000 kg",
  },
  {
    product: "Compact Yarn",
    Strength: "Very High",
    Applications: "Fine fabrics",
    "Best For": "Luxury segment",
    "Lead Time": "3–4 weeks",
    MOQ: "2,000 kg",
  },
  {
    product: "Open-End Yarn",
    Strength: "Medium",
    Applications: "Denim, Bulk",
    "Best For": "Volume orders",
    "Lead Time": "1–2 weeks",
    MOQ: "10,000 kg",
  },
  {
    product: "Blended Yarn",
    Strength: "High",
    Applications: "Uniforms, Casual",
    "Best For": "Cost-performance",
    "Lead Time": "2–3 weeks",
    MOQ: "5,000 kg",
  },
  {
    product: "Melange Yarn",
    Strength: "Medium-High",
    Applications: "Fashion knit",
    "Best For": "Visual texture",
    "Lead Time": "3–4 weeks",
    MOQ: "3,000 kg",
  },
];
