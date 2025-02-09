import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  const preferredLang = cookieStore.get("preferredLang")?.value || "en";
  const redirectUrl = `/${preferredLang}/home`;
  redirect(redirectUrl);
  return null;
}
