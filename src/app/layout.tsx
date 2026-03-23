import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Menoquil - Menopause Relief Without Hormones",
  description:
    "Get back to feeling balanced with Menoquil. Non-hormonal relief for hot flashes, night sweats, mood changes. 97% of women report significant relief.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-cream text-foreground">
        {children}
      </body>
    </html>
  );
}
