export const SITE = {
  name: "Texonomy",
  url: "https://www.texonomy.net",
  tagline: "Two Arms. One Intelligence.",
  motto: "The Science of Textile Business",
  description:
    "Texonomy combines B2B textile trading with strategic industry intelligence. Two divisions. One company.",
  emails: ["ghafoor@texonomy.net", "Eisa@texonomy.net"] as const,
  phone: "+92 3281739889",
  whatsapp: "+92 3281739889",
  whatsappUrl: "https://wa.me/923281739889",
  address: "434 - B Canal View Society, Lahore, Pakistan",
} as const;

export const GATEWAY_STATS = [
  { value: 24, suffix: "+", label: "Years" },
  { value: 12, suffix: "", label: "Service Lines" },
  { value: 100, suffix: "%", label: "Quality Rate" },
  { value: 500, suffix: "+", label: "Clients Served" },
] as const;

export const THINKS_NAV = [
  { label: "Home", path: "/thinks" },
  { label: "Training", path: "/thinks/training" },
  { label: "Consulting", path: "/thinks/consulting" },
  { label: "Contact", path: "/thinks/contact" },
] as const;

export const TRADES_NAV = [
  { label: "Home", path: "/trades" },
  { label: "Yarn", path: "/trades/yarn" },
  { label: "Fabrics", path: "/trades/fabrics" },
  { label: "Contact", path: "/trades/contact" },
] as const;

export const TRADES_PRODUCTS = [
  { label: "Yarn", path: "/trades/yarn", desc: "Cotton, polyester, blended & melange" },
  { label: "Fabrics", path: "/trades/fabrics", desc: "Knit, woven, denim & greige" },
  { label: "Home Textile", path: "/trades/home-textile", desc: "Bedsheets, towels & curtains" },
  { label: "Garments", path: "/trades/garments", desc: "T-shirts, polo & sportswear" },
] as const;

export const ACCENT = "#00B4D8";
export const BRONZE = "#6B7B8C";
