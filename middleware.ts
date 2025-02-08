import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const preferredLang = req.cookies.get("preferredLang")?.value || "en";
  const url = req.nextUrl.clone();

  if (!url.pathname.startsWith(`/${preferredLang}`)) {
    url.pathname = `/${preferredLang}/home`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/", // Apply to the root route
};
