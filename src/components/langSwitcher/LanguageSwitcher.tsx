import Link from "next/link";
import { i18n } from "@/config/i18n";

export default function LanguageSwitcher({
  currentLang,
}: {
  currentLang: string;
}) {
  return (
    <div>
      {i18n.locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}`}
          style={{ fontWeight: currentLang === locale ? "bold" : "normal" }}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
