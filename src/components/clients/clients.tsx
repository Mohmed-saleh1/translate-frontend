import styles from "./clients.module.css";
import { getTranslations } from "../../lib/i18n";
import { Locale } from "../../config/i18n";
import Image from "next/image";

interface ClientsProps {
  lang: Locale;
}

const Clients: React.FC<ClientsProps> = async ({ lang }) => {
  const t = await getTranslations(lang);

  return (
    <div className={styles.rootcontainer}>
      <div className={styles.container}>
        <div className={styles.imgChild}>
          <Image
            src="/map.gif"
            alt="Descriptive Image Text"
            width={150}
            height={150}
            layout="responsive"
            unoptimized
          />
        </div>

        <div className={styles.textChild}>
          <h2 className={styles.title}>{t.clients.title}</h2>
          <p>{t.clients.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Clients;
