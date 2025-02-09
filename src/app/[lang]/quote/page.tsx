import ContactCard from "@/components/office/office";
import { getTranslations } from "../../../lib/i18n";
import QuoteForm from "./QuoteForm";
import styles from "./QuoteForm.module.css";

export default async function QuotePage({ params }: any) {
  const { lang } = await params;
  const t = await getTranslations(lang);

  return (
    <div className={styles.quotepagecontainer}>
      <h1>{t.quote.title}</h1>
      <p className={styles.textClass}>{t.quote.description}</p>
      <QuoteForm t={t} />
    </div>
  );
}
