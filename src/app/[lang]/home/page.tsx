import HomePage from "./HomePage";
export default async function Page({ params }: any) {
  const { lang } = await params;
  return <HomePage lang={lang} />;
}
