/** Gateway homepage copy — sourced from Texonomy-Homepage-Content.xlsx */

export const GATEWAY_HERO = {
  eyebrow: "Texonomy — Trades & Thinks",
  title: "We trade textiles — and we understand them.",
  body:
    "B2B textile supply — yarn, fabric, and home textiles — for mills, manufacturers, and exporters, by people who know count systems, trade flows, and where margins come from.",
} as const;

export const GATEWAY_WHAT_WE_TRADE = {
  sectionLabel: "What We Trade",
  title: "Yarn, fabric, and home textiles — sourced to spec.",
  closingNote:
    "Don't see your product? Send the spec anyway — sourcing the right textile is what we do.",
  items: [
    {
      title: "Yarn",
      body: "Cotton, polyester, and blended yarns. Ring-spun, open-end, and vortex, from Ne 4 to Ne 120.",
      path: "/trades/yarn",
    },
    {
      title: "Fabric",
      body: "Cotton, poly-cotton, Tencel-cotton, and blended constructions.",
      path: "/trades/fabrics",
    },
    {
      title: "Home Textiles",
      body: "Bed linen, towels, quilts, duvets, and furnishings.",
      path: "/trades/home-textile",
    },
  ],
} as const;

export const GATEWAY_WHY_TEXONOMY = {
  sectionLabel: "Why Texonomy",
  eyebrow: "Trading textiles since 2005. Texonomy since 2025.",
  title: "The right quality for the job — not over-spec'd, not under.",
  intro:
    "Texonomy is a new name backed by twenty years on the textile floor. Every quote carries that judgment: knowing what a spec actually needs, and what it doesn't.",
  items: [
    {
      title: "Two decades of product knowledge",
      body: "Count systems, fiber behavior, and how a yarn or fabric performs before it ever ships.",
    },
    {
      title: "The right quality, deliberately",
      body: "Texonomy matches the textile to your end use — so you don't pay for quality you don't need, or get caught short on the quality you do.",
    },
    {
      title: "Production-plan thinking",
      body: "Hundreds of production plans built over the years mean an order gets read the way a mill reads it, not the way a broker does.",
    },
    {
      title: "Quotes in an hour or two",
      body: "Knowing the markets and the mills cold means fast, specific pricing — not a service promise, just what working the trade looks like.",
    },
  ],
} as const;

export const GATEWAY_DIVISIONS = {
  sectionLabel: "The Two Divisions",
  title: "Two divisions. One trade.",
  trades: {
    label: "Texonomy Trades",
    body: "Our core business. Sourcing and supplying yarn, fabric, and home textiles to mills, manufacturers, and exporters.",
    cta: "Go to Trades",
    path: "/trades",
  },
  thinks: {
    label: "Texonomy Thinks",
    body: "The advisory side: training, consulting, and market intelligence for textile professionals. Newer than Trades, built on the same floor experience.",
    cta: "Explore Thinks",
    path: "/thinks",
  },
} as const;

export const GATEWAY_CONTACT = {
  title: "Tell us what you need.",
  body: "Send your spec — count, volume, destination — and we'll come back within an hour or two.",
  cta: "Request a Quote",
  email: "ghafoor@texonomy.net",
  phone: "+92 328 1739889",
  location: "Lahore, Pakistan",
} as const;
