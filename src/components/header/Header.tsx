"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import styles from "./Header.module.css";

const languages = ["en", "es", "fr", "de"];

export default function Header() {
  const { i18n } = useTranslation();
  const router = useRouter();

  const changeLanguage = (language: string) => {
    router.push(router.asPath, router.asPath, { locale: language });
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>SA COSMOS Import/Export</div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link href="#translate">SA Translate</Link>
          </li>
          <li>
            <Link href="#about">About us</Link>
          </li>
          <li>
            <Link href="#contact">Contact us</Link>
          </li>
          <li>
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              value={i18n.language}
              aria-label="Select Language"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang.toUpperCase()}
                </option>
              ))}
            </select>
          </li>
          <li>
            <Link href="#request-quote">Request A Quote</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
