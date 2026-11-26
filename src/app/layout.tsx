import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["700", "800", "900"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500"],
});

import SmoothScrollAndTextReveal from "./SmoothScrollAndTextReveal";
import GlowingUniverseParticles from "./GlowingUniverseParticles";
import "./responsive.css";

export const metadata: Metadata = {
  title: "Hare Krishna",
  description: "The timeless wisdom of the Bhagavad Gita",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${montserrat.variable}`}>
      <body
        style={{
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          backgroundColor: "#020617",
          color: "#ffffff",
          overflowX: "hidden",
        }}
      >
        <SmoothScrollAndTextReveal />
        <GlowingUniverseParticles />
        {children}
      </body>
    </html>
  );
}
