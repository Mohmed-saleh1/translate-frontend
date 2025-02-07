import React from "react";
import styles from "./ContactForm.module.css";
import { getTranslations } from "../../lib/i18n";
import { Locale } from "../../config/i18n";
import Image from "next/image";

interface ContactFormProps {
  lang: Locale;
}

const ContactForm: React.FC<ContactFormProps> = async ({ lang }) => {
  const t = await getTranslations(lang);

  return (
    <div className={styles.formContainer}>
      <div className={styles.formWrapper}>
        <div className={styles.formLeft}>
          <h1 className={styles.formHeading}>{t.contact.heading}</h1>
          <p className={styles.formSubHeading}>{t.contact.subHeading}</p>
          <p className={styles.formDescription}>{t.contact.description}</p>
          <Image
            src="/assets/logo.png"
            alt="SA COSMOS Logo"
            width={100}
            height={100}
          />
        </div>
        <div className={styles.formRight}>
          <form>
            <label htmlFor="name">
              {t.contactForm.formFields.name}
              <input
                type="text"
                id="name"
                placeholder={t.contactForm.formFields.namePlaceholder}
                className={styles.formInput}
                required
              />
            </label>
            <label htmlFor="email">
              {t.contactForm.formFields.email}
              <input
                type="email"
                id="email"
                placeholder={t.contactForm.formFields.emailPlaceholder}
                className={styles.formInput}
                required
              />
            </label>
            <label htmlFor="contactNumber">
              {t.contactForm.formFields.contactNumber}
              <input
                type="tel"
                id="contactNumber"
                placeholder={t.contactForm.formFields.contactNumberPlaceholder}
                className={styles.formInput}
                required
              />
            </label>
            <label htmlFor="message">
              {t.contactForm.formFields.message}
              <textarea
                id="message"
                placeholder={t.contactForm.formFields.messagePlaceholder}
                className={styles.formTextarea}
                required
              />
            </label>
            <button type="submit" className={styles.formButton}>
              {t.contactForm.formFields.submitButton}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
