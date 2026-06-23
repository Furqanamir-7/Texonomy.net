import type { Metadata } from "next";
import YarnPage from "./YarnClient";

export const metadata: Metadata = {
  title: "Premium Yarn Supply",
  description:
    "Cotton, polyester, compact, open-end, blended & melange yarn. Full specifications, counts, and applications for B2B textile manufacturers.",
};

export default function Page() {
  return <YarnPage />;
}
