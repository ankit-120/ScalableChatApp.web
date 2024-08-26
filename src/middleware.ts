import { NextResponse, NextRequest } from "next/server";

// Define the paths that should be protected
const protectedPaths = ["/chat"];

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  console.log({ token });

  const url = req.nextUrl.clone();

  if (url.pathname === "/") {
    if (token) {
      console.log("redirectiong");
      return NextResponse.redirect(new URL("/chat", req.url));
    }
  }

  const isProtectedRoute = protectedPaths.some((path) =>
    req.nextUrl.pathname.startsWith(path)
  );

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

// Specify the paths where the middleware should apply
export const config = {
  matcher: ["/chat", "/"],
};
