import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  if (request.url == "/login") {
    return NextResponse.next({ request });
  }
  const headers = new Headers(request.headers);
  const isAction = headers.get("next-action");
  if (isAction) {
    return NextResponse.next({ request });
  }
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/user", {
      headers,
      credentials: "same-origin",
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
