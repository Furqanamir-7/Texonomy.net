import type { Metadata } from "next";
import GarmentsPage from "./GarmentsClient";

export const metadata: Metadata = {
  title: "Garments",
  description: "T-shirts, polo shirts, sportswear, uniforms & private label garment manufacturing.",
};

export default function Page() {
  return <GarmentsPage />;
}
