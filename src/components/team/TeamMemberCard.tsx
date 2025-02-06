import React from "react";
import styles from "./TeamMemberCard.module.css";
import Image from "next/image";

interface TeamMemberCardProps {
  member: {
    name: string;
    title: string;
    languages: string[];
    imageUrl: string;
  };
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className={styles.cardContainer}>
      <Image
        src={member.imageUrl}
        alt={member.name}
        width={100}
        height={100}
        className={styles.cardImage}
      />
      <div className={styles.cardContent}>
        <h2 className={styles.cardName}>{member.name}</h2>
        <p className={styles.cardTitle}>{member.title}</p>
        <p className={styles.cardLanguages}>{member.languages.join(", ")}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
