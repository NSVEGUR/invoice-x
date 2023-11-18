import { NextRequest, NextResponse } from "next/server";
import { NEXT_PUBLIC_AUTH_URL } from "@/lib/constants";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  if (request.url == "/login") {
    return NextResponse.next({ request });
  }
  const headers = new Headers(request.headers);
  try {
    const response = await fetch(NEXT_PUBLIC_AUTH_URL + "/auth/user", {
      headers,
    });
    const result = await response.json();
    if (result.success == false) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    headers.set("x-next-user", JSON.stringify(result.user));
  } catch (err) {
    console.error(err);
  }
  return NextResponse.next({
    request: {
      headers,
    },
  });
}

export const config = {
  matcher: ["/", "/create"],
};
