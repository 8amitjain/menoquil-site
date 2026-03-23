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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream-bg text-dark-brown font-sans">
        {children}
      </body>
    </html>
  );
}
