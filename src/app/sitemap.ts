import { COMPANY } from "@/lib/constants";

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://atlas-textile-trading.vercel.app";

  const routes = [
    "",
    "/about",
    "/yarn",
    "/fabrics",
    "/home-textile",
    "/garments",
    "/export-markets",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" || route === "/yarn" ? 1 : 0.8,
  }));
}
