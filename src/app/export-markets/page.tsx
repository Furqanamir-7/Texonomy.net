import type { Metadata } from "next";
import ExportMarketsPage from "./ExportMarketsClient";

export const metadata: Metadata = {
  title: "Export Markets",
  description: "Global yarn and textile exports to 45+ countries. Shipping, certifications & logistics.",
};

export default function Page() {
  return <ExportMarketsPage />;
}
