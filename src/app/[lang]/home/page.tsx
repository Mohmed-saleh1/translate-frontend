// import { Locale } from "../../../config/i18n";
import HomePage from "./HomePage";
// interface HomePageProps {
//   params: { lang: Locale };
// }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Page({ params }: any) {
  const { lang } = await params;
  return <HomePage lang={lang} />;
}
