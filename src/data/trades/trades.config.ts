export type TradeSubcategory = {
  label: string;
  slug: string;
  description?: string;
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
      { label: "OE (Open End)", slug: "oe" },
      { label: "Ring Spun", slug: "ring-spun" },
      { label: "Vortex", slug: "vortex" },
      { label: "Cotton", slug: "cotton" },
      { label: "Polyester (Poly)", slug: "polyester" },
      { label: "Cotton Blends", slug: "cotton-blends" },
      { label: "Fleece", slug: "fleece" },
      { label: "Linen", slug: "linen" },
    ],
  },
  {
    id: "fabrics",
    label: "Fabrics",
    path: "/trades/fabrics",
    description:
      "Cotton, poly-cotton, Tencel-cotton, and blended constructions for apparel and industrial use.",
    subcategories: [
      { label: "Workwear", slug: "workwear" },
      { label: "Knitted", slug: "knitted" },
      { label: "Woven", slug: "woven" },
      { label: "Denim", slug: "denim" },
    ],
  },
  {
    id: "home-textiles",
    label: "Home Textiles",
    path: "/trades/home-textile",
    description:
      "Bed linen, towels, quilts, duvets, and furnishings for retail and hospitality buyers.",
    subcategories: [
      { label: "Terry Towels", slug: "terry-towels" },
      { label: "Bath Towels", slug: "bath-towels" },
      { label: "Bed Sheets", slug: "bed-sheets" },
      { label: "Quilts / Duvets", slug: "quilts-duvets" },
      { label: "Comforters", slug: "comforters" },
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
