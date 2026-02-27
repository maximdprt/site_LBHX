import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LBHX - Lacanau Beach Handball Xperience",
  description:
    "Concept N°1 de Beach Handball en France. Tournoi international et mixte du 12 au 14 juin 2026 à Lacanau Océan.",
  keywords: [
    "beach handball",
    "lacanau",
    "LBHX",
    "tournoi",
    "handball de plage",
    "EHF",
  ],
  openGraph: {
    title: "LBHX - Lacanau Beach Handball Xperience",
    description:
      "Concept N°1 de Beach Handball en France. Du 12 au 14 juin 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="font-poppins bg-blanc-sable antialiased">
        {children}
      </body>
    </html>
  );
}
