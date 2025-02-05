"use client";
import { useRouter } from "next/navigation";
import { useTranslation } from "next-i18next";
import styles from "./LanguageSwitcher.module.css";

const languages = ["en", "es", "fr", "de"];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const router = useRouter();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    router.push(`/${language}`);
  };

  return (
    <select
      className={styles.languageSelector}
      value={i18n.language}
      onChange={(e) => changeLanguage(e.target.value)}
    >
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {lang.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
