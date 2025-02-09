import { Locale } from "@/config/i18n";
import styles from "./contact.module.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { getTranslations } from "@/lib/i18n";
interface TranslateTeamProps {
  lang: Locale;
}
const ContactCard = async ({ lang }: TranslateTeamProps) => {
  const t = await getTranslations(lang);

  return (
    <div className={styles.card}>
      <div className={styles.section}>
        <h3 className={styles.title}>{t.contact.offices[0].title}</h3>
        <div className={styles.info}>
          <FaPhoneAlt className={styles.icon} />
          <span>{t.contact.offices[0].phone}</span>
        </div>
        <div className={styles.info}>
          <FaEnvelope className={styles.icon} />
          <span>info@sa-translate.de</span>
        </div>
        <div className={styles.info}>
          <FaMapMarkerAlt className={styles.icon} />
          <span>{t.contact.offices[0].address}</span>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.title}>{t.contact.offices[1].title}</h3>
        <div className={styles.info}>
          <FaPhoneAlt className={styles.icon} />
          <span>{t.contact.offices[1].phone}</span>
        </div>
        <div className={styles.info}>
          <FaEnvelope className={styles.icon} />
          <span>info@sa-translate.de</span>
        </div>
        <div className={styles.info}>
          <FaMapMarkerAlt className={styles.icon} />
          <span> {t.contact.offices[1].address}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
