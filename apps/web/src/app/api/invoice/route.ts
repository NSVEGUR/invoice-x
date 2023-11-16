import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const headers = new Headers(request.headers);
  console.log("hit api invoice");
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/invoice", {
    method: "POST",
    body: JSON.stringify(body),
    headers,
    credentials: "same-origin",
  });
  return response;
}
