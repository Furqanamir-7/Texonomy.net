export const thinksServices = [
  {
    id: "training",
    title: "Training",
    description:
      "Structured programs for textile professionals — from yarn science to export logistics.",
    path: "/thinks/training",
  },
  {
    id: "consulting",
    title: "Consulting",
    description:
      "On-site and remote advisory for mills, manufacturers, and trading companies.",
    path: "/thinks/consulting",
  },
  {
    id: "intelligence",
    title: "Market Intelligence",
    description:
      "Price data, supply trend reports, and demand forecasts for yarn and textile markets.",
    path: "/thinks/intelligence",
  },
  {
    id: "research",
    title: "Research",
    description:
      "Commissioned primary research and sector studies for industry stakeholders.",
    path: "/thinks/research",
  },
] as const;

export const trainingPrograms = [
  {
    title: "Yarn Fundamentals Masterclass",
    duration: "3 days",
    format: "In-person",
    description: "Count systems, fiber properties, and quality standards for spinning professionals.",
  },
  {
    title: "Textile Export Compliance",
    duration: "1 day",
    format: "Workshop",
    description: "Documentation, certifications, and trade regulations for export houses.",
  },
  {
    title: "Supply Chain Optimization",
    duration: "2 days",
    format: "Hybrid",
    description: "Lead time reduction, supplier evaluation, and procurement risk management.",
  },
] as const;

export const insights = [
  {
    slug: "cotton-outlook-q3",
    category: "Market Report",
    title: "Cotton Price Outlook — Q3 2025",
    excerpt:
      "Prices held firm despite weaker demand from Bangladesh, driven by Indian crop uncertainty.",
    date: "Jun 15, 2025",
  },
  {
    slug: "polyester-filament-floor",
    category: "Trade Policy",
    title: "Polyester Filament: The New Price Floor",
    excerpt:
      "Chinese capacity additions are reshaping the global filament pricing structure.",
    date: "May 28, 2025",
  },
  {
    slug: "pakistan-exports-july",
    category: "Operations",
    title: "Pakistan Yarn Exports: July Update",
    excerpt:
      "Month-on-month volumes down 4%, but unit values rose 7% — a shift in product mix.",
    date: "Jul 10, 2025",
  },
] as const;

export const caseStudies = [
  {
    id: "01",
    client: "Spinning Mill — South Asia",
    challenge: "Raw material cost volatility",
    result: "−18% cost in 6 months",
  },
  {
    id: "02",
    client: "Export House — GCC",
    challenge: "Sales team product knowledge gaps",
    result: "+32% deal closure rate",
  },
  {
    id: "03",
    client: "Integrated Textile — India",
    challenge: "Capacity planning inefficiency",
    result: "+22% throughput gain",
  },
] as const;

export const consultingSteps = [
  { step: "01", title: "Discover", description: "Audit operations, market position, and objectives." },
  { step: "02", title: "Diagnose", description: "Map demand-supply dynamics and cost structures." },
  { step: "03", title: "Strategize", description: "Build tailored production, sourcing, or sales roadmaps." },
  { step: "04", title: "Implement", description: "On-site support, workshops, and progress tracking." },
  { step: "05", title: "Measure", description: "Continuous refinement based on KPIs and market shifts." },
] as const;
