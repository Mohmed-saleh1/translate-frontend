import { ReactNode } from "react";
import { Locale, i18n } from "../../config/i18n";
import Footer from "../../components/footer/Footer";
import NavigationBar from "../../components/navbar/Navbar";
import HomePage from "./home/HomePage";

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: Locale };
}) {
  const { lang } = await params;

  if (!i18n.locales.includes(lang)) {
    throw new Error(`Invalid language: ${lang}`);
  }

  return (
    <html lang={lang}>
      <body>
        <header>
          <nav>
            <NavigationBar lang={lang} />{" "}
          </nav>
        </header>

        <main>
          {" "}
          <HomePage lang={lang} />
        </main>

        <footer>
          <Footer lang={lang} />
        </footer>
      </body>
    </html>
  );
}
