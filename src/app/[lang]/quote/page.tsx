import { getTranslations } from "../../../lib/i18n";
import QuoteForm from "./QuoteForm";
import { Locale } from "@/config/i18n";

export default async function QuotePage({
  params,
}: {
  params: { lang: Locale };
}) {
  const t = await getTranslations(params.lang);

  return (
    <div className="quote-page-container">
      <h1>{t.quote.title}</h1>
      <QuoteForm t={t} />
    </div>
  );
}
