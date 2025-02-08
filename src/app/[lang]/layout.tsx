import React from "react";
import Footer from "../../components/footer/Footer";
import NavigationBar from "../../components/navbar/Navbar";
import Head from "next/head";

export default async function RootLayout({ children, params }: any) {
  const { lang } = params;

  return (
    <>
      <Head>
        <link rel="icon" href="favicon.ico" />
        <title>Team Page</title>
      </Head>
      <NavigationBar lang={lang} />

      <main>{children}</main>

      <footer>
        <Footer lang={lang} />
      </footer>
    </>
  );
}
