import React from "react";
import styles from "./TranslateTeam.module.css";
import { getTranslations } from "../../lib/i18n";
import { Locale } from "../../config/i18n";
import Image from "next/image";

interface TranslateTeamProps {
  lang: Locale;
}

const TranslateTeam: React.FC<TranslateTeamProps> = async ({ lang }) => {
  const t = await getTranslations(lang);

  const teamMembers = [
    {
      name: t.team.nadaMarijaBach.name,
      title: t.team.nadaMarijaBach.title,
      languages: t.team.nadaMarijaBach.languages,
      imageUrl: "/assets/team/nada.png",
    },
    {
      name: t.team.samirMusa.name,
      title: t.team.samirMusa.title,
      languages: t.team.samirMusa.languages,
      imageUrl: "/assets/team/nada.png",
    },
    {
      name: t.team.hamidHesso.name,
      title: t.team.hamidHesso.title,
      languages: t.team.hamidHesso.languages,
      imageUrl: "/assets/team/hamid.png",
    },
    {
      name: t.team.kyungMiKim.name,
      title: t.team.kyungMiKim.title,
      languages: t.team.kyungMiKim.languages,
      imageUrl: "/assets/team/kyung.png",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t.team.title}</h1>
      <div className={styles.cards}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={member.imageUrl}
              alt={member.name}
              className={styles.cardImage}
              width={100}
              height={100}
            />
            <h2 className={styles.cardName}>{member.name}</h2>
            <p className={styles.cardTitle}>{member.title}</p>
            <p className={styles.cardLanguages}>
              {member.languages.join(", ")}
            </p>
          </div>
        ))}
      </div>
      <button className={styles.viewAllButton}>{t.team.viewAllButton}</button>
    </div>
  );
};

export default TranslateTeam;
