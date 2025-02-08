import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Metadata } from "next";
type Props = {
  params: { slug: string; lang: any };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, lang } = params;
  // Fetch data based on the slug
  const data = await fetch(
    `http://translate.sa-cosmos.net/${lang}/${slug}`
  ).then((res) => res.json());

  return {
    title: data.title,
  };
}
export default async function Home() {
  const cookieStore = await cookies();
  const preferredLang = cookieStore.get("preferredLang")?.value || "en";
  const redirectUrl = `/${preferredLang}/home`;
  redirect(redirectUrl);
  return null;
}
