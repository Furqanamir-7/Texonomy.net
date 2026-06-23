import type { Metadata } from "next";
import AboutPage from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Atlas Textile Trading — 17+ years of global yarn supply, 200+ manufacturing partners, and exports to 45+ countries.",
};

export default function Page() {
  return <AboutPage />;
}
