export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/yarn",
    label: "Products",
    mega: true,
    children: [
      {
        title: "Yarn",
        description: "Our flagship product — premium yarns worldwide",
        href: "/yarn",
        featured: true,
      },
      {
        title: "Fabrics",
        description: "Knitted, woven, denim & greige fabrics",
        href: "/fabrics",
      },
      {
        title: "Home Textile",
        description: "Bedsheets, towels, curtains & more",
        href: "/home-textile",
      },
      {
        title: "Garments",
        description: "Private label & ready-made apparel",
        href: "/garments",
      },
    ],
  },
  { href: "/export-markets", label: "Export Markets" },
  { href: "/contact", label: "Contact" },
];
