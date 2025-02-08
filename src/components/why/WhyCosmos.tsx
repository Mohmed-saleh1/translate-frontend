import styles from "./WhyCosmos.module.css";
import { getTranslations } from "../../lib/i18n";
import { Locale } from "../../config/i18n";
import Image from "next/image";

interface WhyCosmosProps {
  lang: Locale;
}

const WhyCosmos: React.FC<WhyCosmosProps> = async ({ lang }) => {
  const t = await getTranslations(lang);

  const reasons = [
    {
      title: t.whyCosmos.certifiedTranslationTitle,
      description: t.whyCosmos.certifiedTranslationDesc,
      imageSrc: "/assets/why/image2.png",
    },
    {
      title: t.whyCosmos.culturalDiversityTitle,
      description: t.whyCosmos.culturalDiversityDesc,
      imageSrc: "/assets/why/image1.png",
    },
    {
      title: t.whyCosmos.assistRollTitle,
      description: t.whyCosmos.assistRollDesc,
      imageSrc: "/assets/why/image.png",
    },
  ];

  return (
    <div className={styles.rootcontainer}>
      <h1 className={styles.title}>{t.whyCosmos.title}</h1>
      <div className={styles.container}>
        {reasons.map((reason, index) => (
          <div key={index} className={styles.reason}>
            <Image
              src={reason.imageSrc}
              alt={reason.title}
              className={styles.reasonImage}
              width={150}
              height={150}
            />
            <h2 className={styles.reasonTitle}>{reason.title}</h2>
            <p className={styles.reasonDescription}>{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyCosmos;
