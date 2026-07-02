export type CertificationEntry = {
  name: string;
  description: string;
};

export const CERTIFICATIONS_OVERVIEW = {
  purpose:
    "Certifications relevant to Texonomy's yarn, fabric, and home textile trade — organized by what each certification actually verifies.",
  tradingRole:
    "Texonomy is a trading and sourcing company — it does not hold farm-level or mill-level certifications itself. Those certifications belong to the growers, ginners, and processors in the supply chain. Texonomy's role is to work with certified partners when a certified order is placed, and to pass on the supporting paperwork.",
  transactionCertificates:
    "All certified products come with Transaction Certificates where applicable.",
  closing:
    "If a buyer specifies a certification not listed here, send the spec anyway — Texonomy will source through the appropriate certified supply chain, or say honestly if it's outside the current network.",
} as const;

export const FIBER_SOURCING_CERTIFICATIONS: CertificationEntry[] = [
  {
    name: "Better Cotton (BCI)",
    description:
      "Cotton grown under Better Cotton's farming standards — reduced pesticide and water use, improved farmer livelihoods. Tracked through the supply chain via mass balance rather than physical segregation.",
  },
  {
    name: "Organic Cotton",
    description:
      "Cotton grown without synthetic pesticides or fertilizers, from non-GMO seed. In practice this is certified and tracked under GOTS or OCS (below), rather than being its own certifying body.",
  },
  {
    name: "GOTS (Global Organic Textile Standard)",
    description:
      "Verifies organic fiber content and applies environmental and social criteria across the full processing chain, including restrictions on the dyes and finishes used.",
  },
  {
    name: "OCS (Organic Content Standard)",
    description:
      "Verifies and tracks the percentage of organically grown material in a product through chain-of-custody documentation only, without GOTS's processing-stage criteria.",
  },
  {
    name: "GRS (Global Recycled Standard)",
    description:
      "Verifies recycled content percentage plus environmental and social criteria across processing — the recycled-fiber equivalent of GOTS.",
  },
  {
    name: "RCS (Recycled Claim Standard)",
    description:
      "Verifies recycled content percentage through chain-of-custody tracking only, without GRS's processing-stage criteria — the recycled-fiber equivalent of OCS.",
  },
  {
    name: "Regenagri",
    description:
      "Certifies fiber grown under regenerative agriculture practices — soil health, biodiversity, and carbon outcomes — with chain-of-custody tracking from farm to finished product.",
  },
  {
    name: "US Cotton Trust Protocol",
    description:
      "US-grown cotton produced against measurable sustainability targets — land use, water, soil carbon — verified through a data-driven farm-level program.",
  },
];

export const PRODUCT_SAFETY_CERTIFICATIONS: CertificationEntry[] = [
  {
    name: "OEKO-TEX® Standard 100",
    description:
      "Finished yarn, fabric, or garment laboratory-tested and certified free of harmful substances at the relevant product class. Certification is lot-specific and valid for one year, so it should only be referenced for the lots that actually carry it — not as a blanket claim across all products.",
  },
];

export const PRODUCT_SAFETY_NOTE =
  "OEKO-TEX Standard 100 tests the finished product and is not a process/facility certification. (OEKO-TEX's process-level certification, STeP, applies to production facilities rather than products and is not included here unless a specific supplier relationship calls for it.)";

export const FIBER_SOURCING_INTRO =
  "These certifications verify what a fiber is made of and how it was grown or recycled, tracked through chain-of-custody documentation from farm or recycler to finished product. None of these involve laboratory testing of the finished fabric.";

export const PRODUCT_SAFETY_INTRO =
  "This certification verifies that the finished yarn or fabric itself has been laboratory-tested and cleared for harmful substances — a different kind of claim from fiber sourcing.";
