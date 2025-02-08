/* eslint-disable @typescript-eslint/no-explicit-any */
import { getTranslations } from "../../../lib/i18n";
import QuoteForm from "./QuoteForm";

export default async function QuotePage({ params }: any) {
  const t = await getTranslations(params.lang);

  return (
    <div className="quote-page-container">
      <h1>{t.quote.title}</h1>
      <QuoteForm t={t} />
    </div>
  );
}
