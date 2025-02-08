import styles from "./styles.module.css";
import { getTranslations } from "../../lib/i18n";
import { Locale } from "../../config/i18n";
import Image from "next/image";
import { Service } from "./types";

interface TranslationServicesProps {
  lang: Locale;
}

const TranslationServices: React.FC<TranslationServicesProps> = async ({
  lang,
}) => {
  const t = await getTranslations(lang);

  const services: Service[] = [
    {
      title: t.services.documentTranslations.title,
      description: t.services.documentTranslations.description,
      imageSrc: "/assets/services/image.png",
    },
    {
      title: t.services.oralTranslation.title,
      description: t.services.oralTranslation.description,
      imageSrc: "/assets/services/image2.png",
    },
    {
      title: t.services.translateVideoChat.title,
      description: t.services.translateVideoChat.description,
      imageSrc: "/assets/services/image3.png",
    },
    {
      title: t.services.bookTranslations.title,
      description: t.services.bookTranslations.description,
      imageSrc: "/assets/services/image1.png",
    },
  ];

  return (
    <div className={styles.rootcontainer}>
      <h1 className={styles.title}>{t.services.title}</h1>
      <div className={styles.container}>
        {services.map((service, index) => (
          <div key={index} className={styles.service}>
            <Image
              src={service.imageSrc}
              alt={service.title}
              className={styles.serviceImage}
              width={150}
              height={150}
            />
            <h2 className={styles.serviceTitle}>{service.title}</h2>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TranslationServices;
