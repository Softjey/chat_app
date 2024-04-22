import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";
import { auth } from "./app/api/auth/auth"

export default auth((request) => {
  if (!request.auth) {
    return NextResponse.redirect("/")
  }
})

export const config: MiddlewareConfig = {
  matcher: [],
};