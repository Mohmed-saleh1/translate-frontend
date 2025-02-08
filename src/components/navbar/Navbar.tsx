"use client";

import { useRouter } from "next/navigation";
import { Locale } from "../../config/i18n";
import Image from "next/image";
import LanguageSwitcher from "../langSwitcher/LanguageSwitcher";
import styles from "./NavigationBar.module.css";

interface NavigationBarProps {
  lang: Locale;
}

const NavigationBar = ({ lang }: NavigationBarProps) => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    console.log("NavigationBar lang:", lang);
    router.push(`/${lang}${path}`);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Image src="/assets/logo.png" alt="Logo" width={70} height={50} />
        <h1 className={styles.title}>Navigation</h1>
      </div>

      <input type="checkbox" id="menu-toggle" className={styles.menuToggle} />
      <label htmlFor="menu-toggle" className={styles.menuButton}>
        ☰
      </label>

      <div className={styles.navLinks}>
        <button className={styles.navLink} onClick={() => navigateTo("/about")}>
          About
        </button>
        <button
          className={styles.navLink}
          onClick={() => navigateTo("/contact")}
        >
          Contact
        </button>
        <button className={styles.navLink} onClick={() => navigateTo("/home")}>
          Home
        </button>
      </div>

      <LanguageSwitcher lang={lang} />

      <button
        className={styles.quoteButton}
        onClick={() => navigateTo("/quote")}
      >
        Get a Quote
      </button>
    </nav>
  );
};

export default NavigationBar;
