import type { Metadata } from "next";
import HomeTextilePage from "./HomeTextileClient";

export const metadata: Metadata = {
  title: "Home Textile",
  description: "Premium bedsheets, towels, curtains, comforters & kitchen textiles for global markets.",
};

export default function Page() {
  return <HomeTextilePage />;
}
