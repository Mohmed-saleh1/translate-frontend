import styles from "./Footer.module.css";
import { getTranslations } from "../../lib/i18n";
import { Locale } from "../../config/i18n";
import Image from "next/image";

interface FooterProps {
  lang: Locale;
}

const Footer: React.FC<FooterProps> = async ({ lang }) => {
  // Fetch translations for the current language
  const t = await getTranslations(lang);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logo}>
          <Image
            src="/assets/sa-cosmos-dark-logo-.webp"
            alt="SA Cosmos Logo"
            width={100}
            height={200}
            layout="responsive"
            priority
          />
          <h1>{t.footer.companyName}</h1>
        </div>

        <div className={styles.info}>
          <h2>{t.footer.aboutTitle}</h2>
          <p>{t.footer.aboutDescription}</p>
        </div>

        <div className={styles.links}>
          <div>
            <h3>{t.footer.forCandidates}</h3>
            <ul>
              <li>
                <a href="#">{t.footer.candidateDashboard}</a>
              </li>
              <li>
                <a href="#">{t.footer.jobAlerts}</a>
              </li>
              <li>
                <a href="#">{t.footer.jobDashboard}</a>
              </li>
              <li>
                <a href="#">{t.footer.myProfile}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>{t.footer.pages}</h3>
            <ul>
              <li>
                <a href="#">{t.footer.contactUs}</a>
              </li>
              <li>
                <a href="#">{t.footer.aboutUs}</a>
              </li>
              <li>
                <a href="#">{t.footer.legalNotice}</a>
              </li>
              <li>
                <a href="#">{t.footer.termsAndConditions}</a>
              </li>
              <li>
                <a href="#">{t.footer.privacyPolicy}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} SA Cosmos. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
