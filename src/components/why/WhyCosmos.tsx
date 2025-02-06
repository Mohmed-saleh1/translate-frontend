import React from "react";
import styles from "./WhyCosmos.module.css";
import { getTranslations } from "@/lib/i18n";
import { Locale } from "@/config/i18n";
import Image from "next/image";

interface WhyCosmosProps {
  lang: Locale;
}

const WhyCosmos: React.FC<WhyCosmosProps> = async ({ lang }) => {
  const t = await getTranslations(lang);

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <Image
          src="/assets/why/image2.png"
          alt={t.whyCosmos.certifiedTranslation}
          width={40}
          height={40}
        />
        <h2>{t.whyCosmos.certifiedTranslationTitle}</h2>
        <p>{t.whyCosmos.certifiedTranslationDesc}</p>
      </div>
      <div className={styles.section}>
        <Image
          src="/assets/why/image1.png"
          alt={t.whyCosmos.culturalDiversity}
          width={40}
          height={40}
        />
        <h2>{t.whyCosmos.culturalDiversityTitle}</h2>
        <p>{t.whyCosmos.culturalDiversityDesc}</p>
      </div>
      <div className={styles.section}>
        <Image
          src="/assets/why/image.png"
          alt={t.whyCosmos.assistRoll}
          width={40}
          height={40}
        />
        <h2>{t.whyCosmos.assistRollTitle}</h2>
        <p>{t.whyCosmos.assistRollDesc}</p>
      </div>
    </div>
  );
};

export default WhyCosmos;
