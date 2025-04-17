import { NextRequest, NextResponse } from "next/server";
import { parseQueryParams } from "./app/(private)/lib/parseQueryParams";

export function middleware(request: NextRequest) {
  const params = parseQueryParams(request.nextUrl.search);

  if (!params.token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Aquí debería validarse el token, hidratar contexto (podría ser en una store, etc, no se hace por simplicidad)

  console.log("Token de validación:", params.token);

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/brewery/:slug"],
};
