import type { Metadata } from "next";
import "./globals.css";
import HomePage from "./[lang]/page";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title:
    "Translate Agency – Professional Translation Services for Global Success",
  description:
    "Translate Agency offers expert translation services, including document translation, website localization, legal and medical translations, and multilingual content creation. Trust our certified linguists for accurate, culturally relevant, and SEO-optimized translations to help your business thrive globally.",
  keywords:
    "professional translation services, document translation, website localization, legal translation, medical translation, multilingual content creation, certified linguists, global translation agency, SEO-optimized translations, international business expansion",
  authors: [
    { name: "Translate Agency", url: "https://www.translateagency.com" },
  ],
  openGraph: {
    title:
      "Translate Agency – Professional Translation Services for Global Success",
    description:
      "Translate Agency offers expert translation services, including document translation, website localization, legal and medical translations, and multilingual content creation. Trust our certified linguists for accurate, culturally relevant, and SEO-optimized translations to help your business thrive globally.",
    url: "https://www.translateagency.com",
    siteName: "Translate Agency",
    images: [
      {
        url: "https://www.translateagency.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Translate Agency – Professional Translation Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <HomePage />
        {children}
      </body>
    </html>
  );
}
