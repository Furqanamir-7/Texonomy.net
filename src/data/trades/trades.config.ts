export type TradeSubcategory = {
  label: string;
  slug: string;
  description: string;
};

export type TradeCategory = {
  id: string;
  label: string;
  path: string;
  description: string;
  subcategories: TradeSubcategory[];
  placeholder?: boolean;
};

export const TRADES_CATEGORIES: TradeCategory[] = [
  {
    id: "yarns",
    label: "Yarns",
    path: "/trades/yarn",
    description:
      "Cotton, polyester, and blended yarns — ring-spun, open-end, and vortex — from Ne 4 to Ne 120.",
    subcategories: [
      { label: "OE (Open End)", slug: "oe", description: "Cost-efficient open-end yarn for towels, denim, and industrial fabrics." },
      { label: "Ring Spun", slug: "ring-spun", description: "Combed and carded ring-spun counts for premium knit and woven programs." },
      { label: "Vortex", slug: "vortex", description: "MVS yarn with low hairiness and excellent abrasion resistance for shirting." },
      { label: "Cotton", slug: "cotton", description: "100% cotton carded and combed yarn, Ne 6–Ne 60, for apparel and home textile." },
      { label: "Polyester (Poly)", slug: "polyester", description: "Filament and spun polyester for blends, sportswear, and industrial end-uses." },
      { label: "Cotton Blends", slug: "cotton-blends", description: "CVC, PC, and TC blends with custom ratios for uniforms and workwear." },
      { label: "Fleece", slug: "fleece", description: "Polyester and cotton-poly fleece counts for sweatshirt and activewear programs." },
      { label: "Linen", slug: "linen", description: "Linen and linen-blend yarn for breathable shirting and home textile applications." },
    ],
  },
  {
    id: "fabrics",
    label: "Fabrics",
    path: "/trades/fabrics",
    description:
      "Cotton, poly-cotton, Tencel-cotton, and blended constructions for apparel and industrial use.",
    subcategories: [
      { label: "Workwear", slug: "workwear", description: "Durable twill, canvas, and poly-cotton constructions for uniforms and PPE." },
      { label: "Knitted", slug: "knitted", description: "Single jersey, rib, interlock, and fleece for apparel manufacturers." },
      { label: "Woven", slug: "woven", description: "Poplin, twill, canvas, and suiting for shirting and workwear." },
      { label: "Denim", slug: "denim", description: "Ring-spun and open-end denim in multiple weights and washes." },
    ],
  },
  {
    id: "home-textiles",
    label: "Home Textiles",
    path: "/trades/home-textile",
    description:
      "Bed linen, towels, quilts, duvets, and furnishings for retail and hospitality buyers.",
    subcategories: [
      { label: "Terry Towels", slug: "terry-towels", description: "Hotel and retail terry programs with custom GSM and dobby borders." },
      { label: "Bath Towels", slug: "bath-towels", description: "Combed and carded cotton bath towels for export and private label." },
      { label: "Bed Sheets", slug: "bed-sheets", description: "Percale and sateen bed linen sets for retail and hospitality chains." },
      { label: "Quilts / Duvets", slug: "quilts-duvets", description: "Filled and unfilled quilt covers and duvet programs to spec." },
      { label: "Comforters", slug: "comforters", description: "Down-alternative and microfiber comforters for seasonal collections." },
    ],
  },
  {
    id: "garments",
    label: "Garments",
    path: "/trades/garments",
    description: "Cut-and-sew programs — coming soon as a dedicated category.",
    subcategories: [],
    placeholder: true,
  },
];

export function getCategoryByPath(path: string) {
  return TRADES_CATEGORIES.find((c) => c.path === path);
}

export const TRADES_STATIC_PAGES = [
  {
    label: "Suppliers & Certifications",
    path: "/trades/suppliers-certifications",
    description: "Supplier network, quality standards, and certification coverage.",
  },
  {
    label: "Export Markets",
    path: "/trades/export-markets",
    description: "Global export corridors and shipping timelines.",
  },
  {
    label: "Trading Alliances",
    path: "/trades/trading-alliances",
    description: "Mill partnerships and strategic sourcing alliances.",
  },
  {
    label: "Sellers' Audit",
    path: "/trades/sellers-audit",
    description: "Vendor audit process and compliance framework.",
  },
] as const;
