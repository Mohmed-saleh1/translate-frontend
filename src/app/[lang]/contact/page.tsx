/* eslint-disable @typescript-eslint/no-explicit-any */
import { getTranslations } from "../../../lib/i18n";
import ContactPageStyles from "./ContactPage.module.css";
import Image from "next/image";
import ContactForm from "./ContactForm";

export default async function ContactPage({ params }: any) {
  const t = await getTranslations(params.lang);

  return (
    <div>
      <div>
        <Image
          src="/assets/contact-header.jpg"
          alt="Contact Support Team"
          width={1200}
          height={300}
          layout="responsive"
        />
      </div>
      <div className={ContactPageStyles.container}>
        <h1 className={ContactPageStyles.title}>{t.contact.title}</h1>

        <div className={ContactPageStyles.subContainer}>
          <p className={ContactPageStyles.subheading}>{t.contact.subheading}</p>
          <ContactForm t={t} />
        </div>
      </div>
    </div>
  );
}
