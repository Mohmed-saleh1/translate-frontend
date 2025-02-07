import { getTranslations } from "../../../lib/i18n";
import ContactPageStyles from "./ContactPage.module.css";
import Image from "next/image";
// import { Locale } from "../../../config/i18n";

// interface ContactPageProps {
//   params: { lang: Locale };
// }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function ContactPage({ params }: any) {
  const { lang } = await params;
  const t = await getTranslations(lang);
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
          <form className={ContactPageStyles.form}>
            <div className={ContactPageStyles.nameContainer}>
              <div className={ContactPageStyles.field}>
                <label htmlFor="firstName" className={ContactPageStyles.label}>
                  {t.contact.firstName}
                </label>
                <input
                  id="firstName"
                  type="text"
                  required
                  className={ContactPageStyles.input}
                />
              </div>
              <div className={ContactPageStyles.field}>
                <label htmlFor="lastName" className={ContactPageStyles.label}>
                  {t.contact.lastName}
                </label>
                <input
                  id="lastName"
                  type="text"
                  required
                  className={ContactPageStyles.input}
                />
              </div>
            </div>

            <div className={ContactPageStyles.field}>
              <label htmlFor="email" className={ContactPageStyles.label}>
                {t.contact.email}
              </label>
              <input
                id="email"
                type="email"
                required
                className={ContactPageStyles.input}
              />
            </div>

            <div className={ContactPageStyles.field}>
              <label htmlFor="message" className={ContactPageStyles.label}>
                {t.contact.message}
              </label>
              <textarea
                id="message"
                required
                className={ContactPageStyles.textarea}
              />
            </div>

            <button type="submit" className={ContactPageStyles.submitButton}>
              {t.contact.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export const generateStaticParams = async () => {
  return [{ lang: "en" }, { lang: "fr" }, { lang: "es" }, { lang: "de" }];
};
