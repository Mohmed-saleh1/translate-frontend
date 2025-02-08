/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/[lang]/layout.tsx
import React from "react";
import Footer from "../../components/footer/Footer";
import NavigationBar from "../../components/navbar/Navbar";

export default async function RootLayout({ children, params }: any) {
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
