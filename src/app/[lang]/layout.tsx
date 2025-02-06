import { ReactNode } from "react";
import type { Metadata } from "next";
import { Locale, i18n } from "../../config/i18n";
import { getTranslations } from "@/lib/i18n";
import Footer from "@/components/footer/Footer";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const { lang } = await params;
  const t = await getTranslations(lang);

  return {
    title: t.metadata?.title || "Default Title",
    description: t.metadata?.description || "Default description",
  };
}

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
        <header></header>

        <main>{children}</main>

        <footer>
          <Footer lang={lang} />
        </footer>
      </body>
    </html>
  );
}
