/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import styles from "./NavigationBar.module.css";
import Link from "next/link";
import { Locale } from "../../config/i18n";

interface MobileMenuProps {
  lang: Locale;
  translations: any;
}

const MobileMenu = ({ lang, translations }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.mobileMenuContainer}>
      {/* Toggle Button */}
      <button
        className={`${styles.menuButton} ${
          isOpen ? styles.menuButtonActive : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Mobile Navigation Links */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
        <Link
          className={styles.navLink}
          href={`/${lang}/about`}
          onClick={() => setIsOpen(false)}
        >
          {translations.nav.about}
        </Link>
        <Link
          className={styles.navLink}
          href={`/${lang}/contact`}
          onClick={() => setIsOpen(false)}
        >
          {translations.nav.contact}
        </Link>
        <Link
          className={styles.navLink}
          href={`/${lang}/home`}
          onClick={() => setIsOpen(false)}
        >
          {translations.nav.home}
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
