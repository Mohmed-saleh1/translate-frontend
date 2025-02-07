import styles from "./NavigationBar.module.css";
import { getTranslations } from "../../lib/i18n";
import { Locale } from "../../config/i18n";
import Image from "next/image";
import Link from "next/link";

interface NavigationBarProps {
  lang: Locale;
}

const NavigationBar: React.FC<NavigationBarProps> = async ({ lang }) => {
  const t = await getTranslations(lang);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Image
          src="/assets/logo.png"
          alt={t.nav.title}
          layout="fixed"
          width={70}
          height={50}
        />
        <h1 className={styles.title}>{t.nav.title}</h1>
      </div>

      <div className={styles.navLinks}>
        <Link className={styles.navLink} href={`/${lang}/about`}>
          {t.nav.about}
        </Link>
        <Link className={styles.navLink} href={`/${lang}/contact`}>
          {t.nav.contact}
        </Link>
        <Link className={styles.navLink} href={`/${lang}/home`}>
          {t.nav.home}
        </Link>
      </div>

      <Link className={styles.quoteButton} href={`/${lang}/quote`}>
        {t.nav.quote}
      </Link>
    </nav>
  );
};

export default NavigationBar;
