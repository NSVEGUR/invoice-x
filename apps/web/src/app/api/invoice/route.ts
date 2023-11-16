import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const headers = new Headers(request.headers);
  console.log("api headers", headers);
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/invoice", {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
    credentials: "same-origin",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
  });
  return res;
}
