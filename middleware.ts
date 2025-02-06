import { i18n } from "@/config/i18n";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
 
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip files like images or API routes
  if (
    PUBLIC_FILE.test(pathname) ||
    pathname.includes("/api/") ||
    pathname.startsWith("/_next")
  ) {
    return NextResponse.next();
  }

  // Check if the language is supported
  const pathLocale = pathname.split("/")[1];
  const isLocaleValid = i18n.locales.some((locale) => locale === pathLocale);

  // Redirect to default locale if no locale in URL
  if (!isLocaleValid) {
    const locale = i18n.defaultLocale;
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  return NextResponse.next();
}
