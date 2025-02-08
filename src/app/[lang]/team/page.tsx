import React from "react";
import styles from "./TeamPage.module.css";
import { getTranslations } from "../../../lib/i18n";
import Image from "next/image";

export default async function TeamPage({ params }: any) {
  const { lang } = await params;

  const t = await getTranslations(lang);

  const teamMembers = [
    {
      name: t.team.nadaMarijaBach.name,
      title: t.team.nadaMarijaBach.title,
      languages: t.team.nadaMarijaBach.languages,
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
    {
      name: t.team.mehdy.name,
      title: t.team.mehdy.title,
      languages: t.team.mehdy.languages,
      imageUrl: "/assets/team/mehdy.jpg",
    },
    {
      name: t.team.gulbahar.name,
      title: t.team.gulbahar.title,
      languages: t.team.gulbahar.languages,
      imageUrl: "/assets/team/gulbahar.jpg",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t.team.title}</h1>
      <div className={styles.cards}>
        {teamMembers.map(
          (
            member,
            index // Display ALL members
          ) => (
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
          )
        )}
      </div>
    </div>
  );
}
