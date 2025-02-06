import styles from "./styles.module.css";
import Image from "next/image";
import { Service } from "./types";

const services: Service[] = [
  {
    title: "Document Translations",
    description: "Translate all types of documents.",
    imageSrc: "/assets/services/image.png",
  },
  {
    title: "Oral Translation",
    description: "Professional oral translation services.",
    imageSrc: "/assets/services/image2.png",
  },
  {
    title: "Translate Video Chat",
    description: "Real-time video chat translation.",
    imageSrc: "/assets/services/image3.png",
  },
  {
    title: "Book Translations",
    description: "Translate books and manuscripts.",
    imageSrc: "/assets/services/image1.png",
  },
];

const TranslationServices: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.servicesContainer}>
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
