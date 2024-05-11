import { MiddlewareConfig, NextResponse } from "next/server";
import { auth } from "./configs/auth";

export default auth((request) => {
  const url = request.nextUrl.clone();

  url.pathname = "/login";

  if (!request.auth) {
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
});

export const config: MiddlewareConfig = {
  matcher: ["/", "/chat/:path*"],
};
