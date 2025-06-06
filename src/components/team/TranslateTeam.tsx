import React from "react";
import styles from "./TranslateTeam.module.css";
import { getTranslations } from "../../lib/i18n";
import { Locale } from "../../config/i18n";
import Image from "next/image";
import Link from "next/link";

interface TranslateTeamProps {
  lang: Locale;
}

const TranslateTeam = async ({ lang }: TranslateTeamProps) => {
  const t = await getTranslations(lang);

  const teamMembers = [
    {
      name: t.team.mehdy.name,
      title: t.team.mehdy.title,
      languages: t.team.mehdy.languages,
      imageUrl: "/assets/team/mehdy.jpg",
    },
    {
      name: t.team.hamidHesso.name,
      title: t.team.hamidHesso.title,
      languages: t.team.hamidHesso.languages,
      imageUrl: "/assets/team/hamid.png",
    },
    {
      name: t.team.alex.name,
      title: t.team.alex.title,
      languages: t.team.alex.languages,
      imageUrl: "/assets/team/alex.jpg",
    },
    {
      name: t.team.serhiy.name,
      title: t.team.serhiy.title,
      languages: t.team.serhiy.languages,
      imageUrl: "/assets/team/serhiy.jpg",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t.team.title}</h1>
      <div className={styles.cards}>
        {teamMembers.slice(0, 4).map((member, index) => (
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
      <Link href={`/${lang}/team`}>
        <button className={styles.viewAllButton}>{t.team.viewAllButton}</button>
      </Link>
    </div>
  );
};

export default TranslateTeam;
