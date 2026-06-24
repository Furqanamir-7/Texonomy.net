export type YarnProduct = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  counts: string;
  composition: string;
  packaging: string;
  moq: string;
  applications: string[];
};

export const yarnProducts: YarnProduct[] = [
  {
    id: "cotton",
    name: "Cotton Yarn",
    tagline: "Ring-spun and combed for softness and consistency.",
    description:
      "Sourced from certified ginners and spun to tight count tolerances. Available in carded and combed variants for superior evenness at the loom.",
    counts: "Ne 6 – Ne 60",
    composition: "100% Cotton (Carded / Combed)",
    packaging: "1.5 kg / 4 kg cones",
    moq: "500 kg per count",
    applications: ["Knitted Fabrics", "Woven Fabrics", "Hosiery", "Towels"],
  },
  {
    id: "polyester",
    name: "Polyester Yarn",
    tagline: "High-tenacity filament and staple for industrial use.",
    description:
      "High-tenacity filament and staple polyester for blended and industrial applications with consistent dye uptake and low breakage rates.",
    counts: "Ne 20 – Ne 60",
    composition: "100% Polyester / PSF",
    packaging: "1.5 kg cones / Cartons",
    moq: "1,000 kg",
    applications: ["Blended Fabrics", "Industrial Textiles", "Sportswear"],
  },
  {
    id: "blended",
    name: "Blended Yarn",
    tagline: "CVC, PC, and TC with custom ratios.",
    description:
      "CVC, PC, and TC blends with customizable composition ratios tailored to your end-use requirements and price targets.",
    counts: "Ne 10 – Ne 50",
    composition: "Cotton/Poly blends",
    packaging: "1.5 kg / 4 kg cones",
    moq: "500 kg",
    applications: ["Uniforms", "Workwear", "Suiting"],
  },
  {
    id: "melange",
    name: "Melange Yarn",
    tagline: "Heather and twist effects with custom color matching.",
    description:
      "Heather and twist effects with custom color matching for knitwear and casualwear collections requiring visual depth.",
    counts: "Ne 16 – Ne 40",
    composition: "Multi-fiber blends",
    packaging: "1.5 kg cones",
    moq: "300 kg",
    applications: ["Knitwear", "Casualwear", "Athleisure"],
  },
];

export const tradesStats = [
  { value: "24+", label: "Years" },
  { value: "15+", label: "Product Lines" },
  { value: "100%", label: "On-time Rate" },
  { value: "24h", label: "Quote Response" },
] as const;

export const tradesTestimonials = [
  {
    quote:
      "Consistent quality across every shipment. They understand what a spinning mill needs.",
    author: "Ahmed Al-Rashidi",
    company: "Al-Rashidi Textiles",
    country: "Turkey",
  },
  {
    quote:
      "Reliable supply chain with fast response. Our production schedules have never been more predictable.",
    author: "Li Wei",
    company: "Hangzhou Knitting Mill",
    country: "China",
  },
  {
    quote: "Their yarn specifications are exact. Zero surprises at the loom.",
    author: "Klaus Bauer",
    company: "Bauer Textilwerk",
    country: "Germany",
  },
] as const;

export const industries = [
  "Apparel", "Home Furnishing", "Hospitality",
  "Industrial Textiles", "Retail", "Export Houses",
] as const;
