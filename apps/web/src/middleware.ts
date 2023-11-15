import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/auth/login/success",
    {
      headers,
      credentials: "same-origin",
    }
  );
  const result = await response.json();
  if (result.success == false) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  headers.set("x-next-user", JSON.stringify(result.user));
  return NextResponse.next({
    request: {
      headers,
    },
  });
}

export const config = {
  matcher: ["/((?!login.tsx|signup.tsx))"],
};
