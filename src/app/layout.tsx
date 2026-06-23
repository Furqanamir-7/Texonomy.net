import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { PageTransitionProvider } from "@/components/providers/PageTransitionProvider";
import { MouseFollower } from "@/components/animations/MouseFollower";
import { COMPANY } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} | Premium Yarn Supply Worldwide`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    "International B2B textile trading company specializing in premium yarn supply. Cotton, polyester, blended & melange yarn exported to 45+ countries worldwide.",
  keywords: [
    "yarn supplier",
    "textile trading",
    "cotton yarn",
    "polyester yarn",
    "B2B textile",
    "yarn export",
    "textile manufacturer",
  ],
  openGraph: {
    title: COMPANY.name,
    description: COMPANY.tagline,
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">
        <LoadingScreen />
        <SmoothScrollProvider>
          <Navbar />
          <main className="relative z-10">
            <PageTransitionProvider>{children}</PageTransitionProvider>
          </main>
          <Footer />
          <FloatingCTA />
          <ScrollToTop />
          <MouseFollower />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
