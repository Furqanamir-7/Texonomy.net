import type { Metadata } from "next";
import ContactPage from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch for yarn samples, bulk quotes, and B2B textile trading inquiries.",
};

export default function Page() {
  return <ContactPage />;
}
