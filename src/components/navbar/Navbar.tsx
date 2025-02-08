import styles from "./NavigationBar.module.css";
import { Locale } from "../../config/i18n";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "../../lib/i18n";
import LanguageSwitcher from "../langSwitcher/LanguageSwitcher";
import MobileMenu from "./MobileMenu"; // Import client component

interface NavigationBarProps {
  lang: Locale;
}

const NavigationBar = async ({ lang }: NavigationBarProps) => {
  const translations = await getTranslations(lang);

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <Link href={`/${lang}/home`}>
        <div className={styles.logoContainer}>
          <Image
            src="/assets/logo.png"
            alt={translations.nav.title}
            width={70}
            height={50}
          />
          <h1 className={styles.title}>{translations.nav.title}</h1>
        </div>
      </Link>

      {/* Desktop Navigation Links */}
      <div className={styles.navLinks}>
        <Link className={styles.navLink} href={`/${lang}/about`}>
          {translations.nav.about}
        </Link>
        <Link className={styles.navLink} href={`/${lang}/contact`}>
          {translations.nav.contact}
        </Link>
        <Link className={styles.navLink} href={`/${lang}/team`}>
          {translations.nav.team}
        </Link>
        <Link className={styles.navLink} href={`/${lang}/home`}>
          {translations.nav.home}
        </Link>
      </div>

      {/* Right Side: Language + Quote Button + Mobile Menu */}
      <div className={styles.rightContainer}>
        <LanguageSwitcher lang={lang} />
        <Link className={styles.quoteButton} href={`/${lang}/quote`}>
          {translations.nav.quote}
        </Link>

        {/* Mobile Menu (Client Component) */}
        <MobileMenu lang={lang} translations={translations} />
      </div>
    </nav>
  );
};

export default NavigationBar;
