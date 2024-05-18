import { NextResponse } from "next/server";
import { auth } from "../auth";
import { authRoutes, publicRoutes } from "../routes";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  // allow all requests for public routes
  if (isPublicRoute) return NextResponse.next();

  //     allow all requests for auth routes, but if user was logged in redirect to home page
  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.next();
  }

  //   redirect all request if not logged in
  return NextResponse.redirect(new URL("/auth/login", req.url));
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
