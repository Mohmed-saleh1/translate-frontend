import { Locale } from "../../../config/i18n";
import HomePage from "./HomePage";
interface HomePageProps {
  params: { lang: Locale };
}
export default async function Page({ params }: HomePageProps) {
  const { lang } = await params;
  return <HomePage lang={lang} />;
}
