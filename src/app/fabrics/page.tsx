import type { Metadata } from "next";
import FabricsPage from "./FabricsClient";

export const metadata: Metadata = {
  title: "Fabrics",
  description: "Knitted, woven, denim, greige & dyed fabrics for B2B textile manufacturing.",
};

export default function Page() {
  return <FabricsPage />;
}
