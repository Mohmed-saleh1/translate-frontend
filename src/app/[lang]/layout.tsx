// src/app/[lang]/layout.tsx
import React from "react";
import Footer from "../../components/footer/Footer";
import { Locale } from "../../config/i18n";
import NavigationBar from "@/components/navbar/Navbar";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { lang } = params;

  return (
    <>
      <header>
        <NavigationBar lang={lang} />
      </header>

      <main>{children}</main>

      <footer>
        <Footer lang={lang} />
      </footer>
    </>
  );
}
